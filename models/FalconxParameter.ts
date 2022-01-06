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
 * @interface FalconxParameter
 */
export interface FalconxParameter {
    /**
     *
     * @type {number}
     * @memberof FalconxParameter
     */
    argumentNumber?: number;
    /**
     *
     * @type {string}
     * @memberof FalconxParameter
     */
    comment?: string;
    /**
     *
     * @type {string}
     * @memberof FalconxParameter
     */
    meaning?: string;
    /**
     *
     * @type {string}
     * @memberof FalconxParameter
     */
    name?: string;
    /**
     *
     * @type {string}
     * @memberof FalconxParameter
     */
    value?: string;
}

export function FalconxParameterFromJSON(json: any): FalconxParameter {
    return FalconxParameterFromJSONTyped(json, false);
}

export function FalconxParameterFromJSONTyped(json: any, ignoreDiscriminator: boolean): FalconxParameter {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        argumentNumber: !exists(json, "argument_number") ? undefined : json["argument_number"],
        comment: !exists(json, "comment") ? undefined : json["comment"],
        meaning: !exists(json, "meaning") ? undefined : json["meaning"],
        name: !exists(json, "name") ? undefined : json["name"],
        value: !exists(json, "value") ? undefined : json["value"],
    };
}

export function FalconxParameterToJSON(value?: FalconxParameter | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        argument_number: value.argumentNumber,
        comment: value.comment,
        meaning: value.meaning,
        name: value.name,
        value: value.value,
    };
}
