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
 * @interface SadomainWhoisRegistrant
 */
export interface SadomainWhoisRegistrant {
    /**
     * The email of the entity who registered a given domain
     * @type {string}
     * @memberof SadomainWhoisRegistrant
     */
    email: string;
    /**
     * The name of the entity who registered a given domain
     * @type {string}
     * @memberof SadomainWhoisRegistrant
     */
    name: string;
    /**
     * The organization who registered a given domain
     * @type {string}
     * @memberof SadomainWhoisRegistrant
     */
    org: string;
}

/**
 * Check if a given object implements the SadomainWhoisRegistrant interface.
 */
export function instanceOfSadomainWhoisRegistrant(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "email" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "org" in value;

    return isInstance;
}

export function SadomainWhoisRegistrantFromJSON(json: any): SadomainWhoisRegistrant {
    return SadomainWhoisRegistrantFromJSONTyped(json, false);
}

export function SadomainWhoisRegistrantFromJSONTyped(json: any, ignoreDiscriminator: boolean): SadomainWhoisRegistrant {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        email: json["email"],
        name: json["name"],
        org: json["org"],
    };
}

export function SadomainWhoisRegistrantToJSON(value?: SadomainWhoisRegistrant | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        email: value.email,
        name: value.name,
        org: value.org,
    };
}