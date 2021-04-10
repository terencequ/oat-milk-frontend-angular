/* tslint:disable */
/* eslint-disable */
import { ErrorType } from './error-type';
export interface ArgumentErrorResponse {
  errorType?: ErrorType;
  message?: null | string;
  parameter?: null | string;
}
