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
import { AttributeResponse } from './attributeResponse';


export interface CharacterResponse { 
    id?: string;
    name?: string | null;
    experience?: number;
    attributes?: Array<AttributeResponse> | null;
    acrobatics?: boolean;
    animalHandling?: boolean;
    arcana?: boolean;
    athletics?: boolean;
    deception?: boolean;
    history?: boolean;
    insight?: boolean;
    intimidation?: boolean;
    investigation?: boolean;
    medicine?: boolean;
    nature?: boolean;
    perception?: boolean;
    performance?: boolean;
    persuasion?: boolean;
    religion?: boolean;
    sleightOfHand?: boolean;
    stealth?: boolean;
    survival?: boolean;
    personalityTraits?: string | null;
    ideals?: string | null;
    bonds?: string | null;
    flaws?: string | null;
    backstory?: string | null;
    alliesAndOrganisations?: string | null;
    appearance?: string | null;
    createdDateTimeUtc?: string;
    updatedDateTimeUtc?: string;
}

