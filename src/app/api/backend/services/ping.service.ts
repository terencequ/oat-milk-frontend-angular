/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';


@Injectable({
  providedIn: 'root',
})
export class PingService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation pingGet
   */
  static readonly PingGetPath = '/Ping';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `pingGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  pingGet$Plain$Response(params?: {
  }): Observable<StrictHttpResponse<boolean>> {

    const rb = new RequestBuilder(this.rootUrl, PingService.PingGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: String((r as HttpResponse<any>).body) === 'true' }) as StrictHttpResponse<boolean>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `pingGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  pingGet$Plain(params?: {
  }): Observable<boolean> {

    return this.pingGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<boolean>) => r.body as boolean)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `pingGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  pingGet$Json$Response(params?: {
  }): Observable<StrictHttpResponse<boolean>> {

    const rb = new RequestBuilder(this.rootUrl, PingService.PingGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: String((r as HttpResponse<any>).body) === 'true' }) as StrictHttpResponse<boolean>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `pingGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  pingGet$Json(params?: {
  }): Observable<boolean> {

    return this.pingGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<boolean>) => r.body as boolean)
    );
  }

  /**
   * Path part for operation pingAuthGet
   */
  static readonly PingAuthGetPath = '/Ping/auth';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `pingAuthGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  pingAuthGet$Plain$Response(params?: {
  }): Observable<StrictHttpResponse<boolean>> {

    const rb = new RequestBuilder(this.rootUrl, PingService.PingAuthGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: String((r as HttpResponse<any>).body) === 'true' }) as StrictHttpResponse<boolean>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `pingAuthGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  pingAuthGet$Plain(params?: {
  }): Observable<boolean> {

    return this.pingAuthGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<boolean>) => r.body as boolean)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `pingAuthGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  pingAuthGet$Json$Response(params?: {
  }): Observable<StrictHttpResponse<boolean>> {

    const rb = new RequestBuilder(this.rootUrl, PingService.PingAuthGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: String((r as HttpResponse<any>).body) === 'true' }) as StrictHttpResponse<boolean>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `pingAuthGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  pingAuthGet$Json(params?: {
  }): Observable<boolean> {

    return this.pingAuthGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<boolean>) => r.body as boolean)
    );
  }

}
