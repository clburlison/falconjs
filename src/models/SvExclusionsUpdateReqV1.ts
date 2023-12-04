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
 * @interface SvExclusionsUpdateReqV1
 */
export interface SvExclusionsUpdateReqV1 {
    /**
     *
     * @type {string}
     * @memberof SvExclusionsUpdateReqV1
     */
    comment?: string;
    /**
     *
     * @type {Array<string>}
     * @memberof SvExclusionsUpdateReqV1
     */
    groups?: Array<string>;
    /**
     *
     * @type {string}
     * @memberof SvExclusionsUpdateReqV1
     */
    id: string;
    /**
     *
     * @type {string}
     * @memberof SvExclusionsUpdateReqV1
     */
    value?: string;
}

/**
 * Check if a given object implements the SvExclusionsUpdateReqV1 interface.
 */
export function instanceOfSvExclusionsUpdateReqV1(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;

    return isInstance;
}

export function SvExclusionsUpdateReqV1FromJSON(json: any): SvExclusionsUpdateReqV1 {
    return SvExclusionsUpdateReqV1FromJSONTyped(json, false);
}

export function SvExclusionsUpdateReqV1FromJSONTyped(json: any, ignoreDiscriminator: boolean): SvExclusionsUpdateReqV1 {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        comment: !exists(json, "comment") ? undefined : json["comment"],
        groups: !exists(json, "groups") ? undefined : json["groups"],
        id: json["id"],
        value: !exists(json, "value") ? undefined : json["value"],
    };
}

export function SvExclusionsUpdateReqV1ToJSON(value?: SvExclusionsUpdateReqV1 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        comment: value.comment,
        groups: value.groups,
        id: value.id,
        value: value.value,
    };
}
