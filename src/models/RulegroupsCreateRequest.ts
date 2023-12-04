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
 * @interface RulegroupsCreateRequest
 */
export interface RulegroupsCreateRequest {
    /**
     *
     * @type {string}
     * @memberof RulegroupsCreateRequest
     */
    description?: string;
    /**
     *
     * @type {string}
     * @memberof RulegroupsCreateRequest
     */
    name: string;
    /**
     *
     * @type {string}
     * @memberof RulegroupsCreateRequest
     */
    type: string;
}

/**
 * Check if a given object implements the RulegroupsCreateRequest interface.
 */
export function instanceOfRulegroupsCreateRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "type" in value;

    return isInstance;
}

export function RulegroupsCreateRequestFromJSON(json: any): RulegroupsCreateRequest {
    return RulegroupsCreateRequestFromJSONTyped(json, false);
}

export function RulegroupsCreateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): RulegroupsCreateRequest {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        description: !exists(json, "description") ? undefined : json["description"],
        name: json["name"],
        type: json["type"],
    };
}

export function RulegroupsCreateRequestToJSON(value?: RulegroupsCreateRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        description: value.description,
        name: value.name,
        type: value.type,
    };
}