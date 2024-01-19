import { HttpInterceptorFn } from '@angular/common/http';

export const jwtInterceptor: HttpInterceptorFn = (req, next) => {

  let token = localStorage.getItem('app-token')

  if(!!token) {
    req = req.clone({
      setHeaders: {
        'Access-Control-Allow-Origin':'*',
        Authorization: `Bearer ${token}`
      }
    })
  }

  return next(req);
};
