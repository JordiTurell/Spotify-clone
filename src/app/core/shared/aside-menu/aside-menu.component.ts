import { Component, inject } from '@angular/core';
import { AsideItemMenuComponent } from "../aside-item-menu/aside-item-menu.component";
import { IconsLibrary } from '@infrastructure/utils/Icons';

@Component({
  selector: 'app-aside-menu',
  imports: [AsideItemMenuComponent],
  templateUrl: './aside-menu.component.html',
  styleUrl: './aside-menu.component.css'
})
export class AsideMenuComponent {
  home = IconsLibrary.Home;
  search = IconsLibrary.Search;
  biblioteca = IconsLibrary.library;
}
