import express from "express";
import cors from "cors";
import { configspoti } from "./config";
import https from "https";
import fs from "fs";

import { SpotifyApi } from '@spotify/web-api-ts-sdk';
import axios from "axios";
import querystring from "querystring";

const PORT = process.env.PORT || 3000;
const app = express();
const options = {
  key: fs.readFileSync("server.key"),
  cert: fs.readFileSync("server.cert"),
};



const api = SpotifyApi.withClientCredentials(
    configspoti.clientId,
    configspoti.clientSecret
);

const generateRandomString = (length) => {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
};

app.use(cors({
    origin: ['http://localhost:4200', 'https://749c-83-41-180-216.ngrok-free.app'], // Usa https si tu frontend también está en https
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization', 'x-file-name']
}));

app.use(express.json());

app.get("/", async (req, res) => {
  res.send("Hello World!");
  const items = await api.search("The Beatles", ["artist"]);

  console.table(items.artists.items.map((item) => ({
      name: item.name,
      followers: item.followers.total,
      popularity: item.popularity,
  })));
});

app.get("/login", async (req, res) => {
  const state = generateRandomString(16);
  const scope = 'user-read-private user-read-email';
  const url = 'https://accounts.spotify.com/authorize?' +
    querystring.stringify({
      response_type: 'code',
      client_id: configspoti.clientId,
      scope: scope,
      redirect_uri: configspoti.redirect_uri,
      state: state
    });
    //res.redirect(url);
  res.json({ url: url})
});

let tokenspoty = {};

app.get('/callback', async (req, res) => {
  const code = req.query.code || null;
  const authOptions = {
    method: 'post',
    url: 'https://accounts.spotify.com/api/token',
    data: new URLSearchParams({
      code: String(code),
      redirect_uri: String(configspoti.redirect_uri),
      grant_type: 'authorization_code',
      client_id: String(configspoti.clientId)
    }),
    headers: {
      'Authorization': 'Basic ' + Buffer.from(configspoti.clientId + ':' + configspoti.clientSecret).toString('base64'),
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  };

  try {
    const response = await axios(authOptions);
    const accessToken = response.data.access_token;
    // Ahora puedes usar accessToken para llamar a /v1/me
    console.log("Access Token:", accessToken);
    tokenspoty = accessToken;
  } catch (err) {
    res.status(500).json({ error: "Error exchanging code for token", details: err });
  }
});

app.get("/gettoken", async (req, res) => {
  if(tokenspoty){
    console.log("Token disponible");
    console.log(tokenspoty);
    res.json({ token: tokenspoty });
  }
  console.log("No hay token");
  res.status(401).json({ error: "No token available" });
})

app.get("/profile", async (req, res) => {
  const accessToken = req.headers.authorization?.split(" ")[1];
  if (!accessToken) {
    return res.status(401).json({ error: "No access token provided" });
  }
  try {
    const response = await axios.get("https://api.spotify.com/v1/me", {
      headers: { Authorization: `Bearer ${accessToken}` }
    });
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: "Error fetching profile", details: err });
  }
});

https.createServer(options, app).listen(PORT, () => {
  console.log(`HTTPS Server is running on port ${PORT}`);
});