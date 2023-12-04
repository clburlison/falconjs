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
import type { ApiIndicatorCreateReqV1 } from "./ApiIndicatorCreateReqV1";
import { ApiIndicatorCreateReqV1FromJSON, ApiIndicatorCreateReqV1FromJSONTyped, ApiIndicatorCreateReqV1ToJSON } from "./ApiIndicatorCreateReqV1";

/**
 *
 * @export
 * @interface ApiIndicatorCreateReqsV1
 */
export interface ApiIndicatorCreateReqsV1 {
    /**
     *
     * @type {string}
     * @memberof ApiIndicatorCreateReqsV1
     */
    comment?: string;
    /**
     *
     * @type {Array<ApiIndicatorCreateReqV1>}
     * @memberof ApiIndicatorCreateReqsV1
     */
    indicators: Array<ApiIndicatorCreateReqV1>;
}

/**
 * Check if a given object implements the ApiIndicatorCreateReqsV1 interface.
 */
export function instanceOfApiIndicatorCreateReqsV1(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "indicators" in value;

    return isInstance;
}

export function ApiIndicatorCreateReqsV1FromJSON(json: any): ApiIndicatorCreateReqsV1 {
    return ApiIndicatorCreateReqsV1FromJSONTyped(json, false);
}

export function ApiIndicatorCreateReqsV1FromJSONTyped(json: any, ignoreDiscriminator: boolean): ApiIndicatorCreateReqsV1 {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        comment: !exists(json, "comment") ? undefined : json["comment"],
        indicators: (json["indicators"] as Array<any>).map(ApiIndicatorCreateReqV1FromJSON),
    };
}

export function ApiIndicatorCreateReqsV1ToJSON(value?: ApiIndicatorCreateReqsV1 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        comment: value.comment,
        indicators: (value.indicators as Array<any>).map(ApiIndicatorCreateReqV1ToJSON),
    };
}
