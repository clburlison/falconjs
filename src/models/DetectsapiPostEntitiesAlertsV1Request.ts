/* tslint:disable */
/* eslint-disable */
/**
 * CrowdStrike API Specification
 * Use this API specification as a reference for the API endpoints you can use to interact with your Falcon environment. These endpoints support authentication via OAuth2 and interact with detections and network containment. For detailed usage guides and examples, see our [documentation inside the Falcon console](https://falcon.crowdstrike.com/support/documentation).     To use the APIs described below, combine the base URL with the path shown for each API endpoint. For commercial cloud customers, your base URL is `https://api.crowdstrike.com`.    Each API endpoint requires authorization via an OAuth2 token. Your first API request should retrieve an OAuth2 token using the `oauth2/token` endpoint, such as `https://api.crowdstrike.com/oauth2/token`. For subsequent requests, include the OAuth2 token in an HTTP authorization header. Tokens expire after 30 minutes, after which you should make a new token request to continue making API requests.
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
 * @interface DetectsapiPostEntitiesAlertsV1Request
 */
export interface DetectsapiPostEntitiesAlertsV1Request {
    /**
     * IDs represent the slice of Alert IDs that would be looked up
     * @type {Array<string>}
     * @memberof DetectsapiPostEntitiesAlertsV1Request
     */
    ids: Array<string>;
}

/**
 * Check if a given object implements the DetectsapiPostEntitiesAlertsV1Request interface.
 */
export function instanceOfDetectsapiPostEntitiesAlertsV1Request(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "ids" in value;

    return isInstance;
}

export function DetectsapiPostEntitiesAlertsV1RequestFromJSON(json: any): DetectsapiPostEntitiesAlertsV1Request {
    return DetectsapiPostEntitiesAlertsV1RequestFromJSONTyped(json, false);
}

export function DetectsapiPostEntitiesAlertsV1RequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): DetectsapiPostEntitiesAlertsV1Request {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        ids: json["ids"],
    };
}

export function DetectsapiPostEntitiesAlertsV1RequestToJSON(value?: DetectsapiPostEntitiesAlertsV1Request | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        ids: value.ids,
    };
}
