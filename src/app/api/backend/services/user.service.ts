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

import { AuthTokenResponse } from '../models/auth-token-response';
import { UserLoginRequest } from '../models/user-login-request';
import { UserRegisterRequest } from '../models/user-register-request';
import { UserResponse } from '../models/user-response';

@Injectable({
  providedIn: 'root',
})
export class UserService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation userLoginPost
   */
  static readonly UserLoginPostPath = '/User/login';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `userLoginPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  userLoginPost$Plain$Response(params?: {
    body?: UserLoginRequest
  }): Observable<StrictHttpResponse<AuthTokenResponse>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.UserLoginPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<AuthTokenResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `userLoginPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  userLoginPost$Plain(params?: {
    body?: UserLoginRequest
  }): Observable<AuthTokenResponse> {

    return this.userLoginPost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<AuthTokenResponse>) => r.body as AuthTokenResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `userLoginPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  userLoginPost$Json$Response(params?: {
    body?: UserLoginRequest
  }): Observable<StrictHttpResponse<AuthTokenResponse>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.UserLoginPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<AuthTokenResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `userLoginPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  userLoginPost$Json(params?: {
    body?: UserLoginRequest
  }): Observable<AuthTokenResponse> {

    return this.userLoginPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<AuthTokenResponse>) => r.body as AuthTokenResponse)
    );
  }

  /**
   * Path part for operation userRegisterPost
   */
  static readonly UserRegisterPostPath = '/User/register';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `userRegisterPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  userRegisterPost$Plain$Response(params?: {
    body?: UserRegisterRequest
  }): Observable<StrictHttpResponse<AuthTokenResponse>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.UserRegisterPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<AuthTokenResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `userRegisterPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  userRegisterPost$Plain(params?: {
    body?: UserRegisterRequest
  }): Observable<AuthTokenResponse> {

    return this.userRegisterPost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<AuthTokenResponse>) => r.body as AuthTokenResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `userRegisterPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  userRegisterPost$Json$Response(params?: {
    body?: UserRegisterRequest
  }): Observable<StrictHttpResponse<AuthTokenResponse>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.UserRegisterPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<AuthTokenResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `userRegisterPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  userRegisterPost$Json(params?: {
    body?: UserRegisterRequest
  }): Observable<AuthTokenResponse> {

    return this.userRegisterPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<AuthTokenResponse>) => r.body as AuthTokenResponse)
    );
  }

  /**
   * Path part for operation userProfileGet
   */
  static readonly UserProfileGetPath = '/User/profile';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `userProfileGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  userProfileGet$Plain$Response(params?: {
  }): Observable<StrictHttpResponse<UserResponse>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.UserProfileGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<UserResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `userProfileGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  userProfileGet$Plain(params?: {
  }): Observable<UserResponse> {

    return this.userProfileGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<UserResponse>) => r.body as UserResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `userProfileGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  userProfileGet$Json$Response(params?: {
  }): Observable<StrictHttpResponse<UserResponse>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.UserProfileGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<UserResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `userProfileGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  userProfileGet$Json(params?: {
  }): Observable<UserResponse> {

    return this.userProfileGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<UserResponse>) => r.body as UserResponse)
    );
  }

  /**
   * Path part for operation userExistsGet
   */
  static readonly UserExistsGetPath = '/User/exists';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `userExistsGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  userExistsGet$Plain$Response(params: {
    userId: string;
  }): Observable<StrictHttpResponse<boolean>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.UserExistsGetPath, 'get');
    if (params) {
      rb.path('userId', params.userId, {});
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
   * To access the full response (for headers, for example), `userExistsGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  userExistsGet$Plain(params: {
    userId: string;
  }): Observable<boolean> {

    return this.userExistsGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<boolean>) => r.body as boolean)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `userExistsGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  userExistsGet$Json$Response(params: {
    userId: string;
  }): Observable<StrictHttpResponse<boolean>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.UserExistsGetPath, 'get');
    if (params) {
      rb.path('userId', params.userId, {});
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
   * To access the full response (for headers, for example), `userExistsGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  userExistsGet$Json(params: {
    userId: string;
  }): Observable<boolean> {

    return this.userExistsGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<boolean>) => r.body as boolean)
    );
  }

}
