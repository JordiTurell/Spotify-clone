import { HttpInterceptorFn } from '@angular/common/http';
import { toast } from 'ngx-sonner';
import { catchError, throwError } from 'rxjs';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
   return next(req).pipe(
    catchError((error) => {      
      toast.error(error.message || 'Error desconocido');
      return throwError(() => error);
    })
  );
};
