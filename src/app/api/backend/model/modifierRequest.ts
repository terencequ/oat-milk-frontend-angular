/**
 * OatMilk.Backend.Api
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { ModifierOperation } from './modifierOperation';


export interface ModifierRequest { 
    attribute?: string | null;
    magnitude?: number;
    operation?: ModifierOperation;
}

