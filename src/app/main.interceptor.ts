import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class MainInterceptor implements HttpInterceptor {

  private _token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1Mjg0NGY5NGMzMWMyNzUxMWMwMTZlYTc3ZDA1MTk0OCIsInN1YiI6IjYyOTQ5NzMxYTQ0ZDA5MDA1MTBlMjhkNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BhTIMpuQY_diNbNWqfq9HN6QDNvStDJzuG1flpiaJJw'

  constructor() {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    request = request.clone(
      {
        setHeaders: {
          Authorization: `Bearer ${this._token}`
        }
      }
    )
    return next.handle(request);
  }
}
