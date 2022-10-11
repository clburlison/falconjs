/* tslint:disable */
/* eslint-disable */
/**
 * CrowdStrike API Specification
 * Use this API specification as a reference for the API endpoints you can use to interact with your Falcon environment. These endpoints support authentication via OAuth2 and interact with detections and network containment. For detailed usage guides and more information about API endpoints that don\'t yet support OAuth2, see our [documentation inside the Falcon console](https://falcon.crowdstrike.com/support/documentation). To use the APIs described below, combine the base URL with the path shown for each API endpoint. For commercial cloud customers, your base URL is `https://api.crowdstrike.com`. Each API endpoint requires authorization via an OAuth2 token. Your first API request should retrieve an OAuth2 token using the `oauth2/token` endpoint, such as `https://api.crowdstrike.com/oauth2/token`. For subsequent requests, include the OAuth2 token in an HTTP authorization header. Tokens expire after 30 minutes, after which you should make a new token request to continue making API requests.
 *
 * The version of the OpenAPI document: rolling
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from "../runtime";
/**
 *
 * @export
 * @interface DomainExposedDataRecordLocationV1
 */
export interface DomainExposedDataRecordLocationV1 {
    /**
     *
     * @type {string}
     * @memberof DomainExposedDataRecordLocationV1
     */
    city: string;
    /**
     *
     * @type {string}
     * @memberof DomainExposedDataRecordLocationV1
     */
    countryCode: string;
    /**
     *
     * @type {string}
     * @memberof DomainExposedDataRecordLocationV1
     */
    federalAdminRegion: string;
    /**
     *
     * @type {string}
     * @memberof DomainExposedDataRecordLocationV1
     */
    federalDistrict: string;
    /**
     *
     * @type {string}
     * @memberof DomainExposedDataRecordLocationV1
     */
    postalCode: string;
    /**
     *
     * @type {string}
     * @memberof DomainExposedDataRecordLocationV1
     */
    state: string;
}

/**
 * Check if a given object implements the DomainExposedDataRecordLocationV1 interface.
 */
export function instanceOfDomainExposedDataRecordLocationV1(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "city" in value;
    isInstance = isInstance && "countryCode" in value;
    isInstance = isInstance && "federalAdminRegion" in value;
    isInstance = isInstance && "federalDistrict" in value;
    isInstance = isInstance && "postalCode" in value;
    isInstance = isInstance && "state" in value;

    return isInstance;
}

export function DomainExposedDataRecordLocationV1FromJSON(json: any): DomainExposedDataRecordLocationV1 {
    return DomainExposedDataRecordLocationV1FromJSONTyped(json, false);
}

export function DomainExposedDataRecordLocationV1FromJSONTyped(json: any, ignoreDiscriminator: boolean): DomainExposedDataRecordLocationV1 {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        city: json["city"],
        countryCode: json["country_code"],
        federalAdminRegion: json["federal_admin_region"],
        federalDistrict: json["federal_district"],
        postalCode: json["postal_code"],
        state: json["state"],
    };
}

export function DomainExposedDataRecordLocationV1ToJSON(value?: DomainExposedDataRecordLocationV1 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        city: value.city,
        country_code: value.countryCode,
        federal_admin_region: value.federalAdminRegion,
        federal_district: value.federalDistrict,
        postal_code: value.postalCode,
        state: value.state,
    };
}