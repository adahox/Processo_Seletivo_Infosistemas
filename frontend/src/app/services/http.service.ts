import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(public http: HttpClient) { }
  private base_url = "http://localhost:3000";
  public get(urlParam) {
    return this.http.get(`${this.base_url}/${urlParam}`)
      .pipe(
        catchError(this.handleError)
      );
  }

  public post(urlParam, data) {
    return this.http.post(`${this.base_url}/${urlParam}`, data)
      .pipe(
        catchError(this.handleError)
      );
  }

  public patch(urlParam, data) {
    return this.http.patch(`${this.base_url}/${urlParam}`, data)
      .pipe(
        catchError(this.handleError)
      );
  }

  public delete(urlParam) {
    return this.http.delete(`${this.base_url}/${urlParam}`)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }

}
