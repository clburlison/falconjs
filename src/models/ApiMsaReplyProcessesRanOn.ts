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
import type { ApiResponseMeta } from "./ApiResponseMeta";
import { ApiResponseMetaFromJSON, ApiResponseMetaFromJSONTyped, ApiResponseMetaToJSON } from "./ApiResponseMeta";
import type { MsaAPIError } from "./MsaAPIError";
import { MsaAPIErrorFromJSON, MsaAPIErrorFromJSONTyped, MsaAPIErrorToJSON } from "./MsaAPIError";

/**
 *
 * @export
 * @interface ApiMsaReplyProcessesRanOn
 */
export interface ApiMsaReplyProcessesRanOn {
    /**
     *
     * @type {Array<MsaAPIError>}
     * @memberof ApiMsaReplyProcessesRanOn
     */
    errors: Array<MsaAPIError>;
    /**
     *
     * @type {ApiResponseMeta}
     * @memberof ApiMsaReplyProcessesRanOn
     */
    meta: ApiResponseMeta;
    /**
     *
     * @type {Array<string>}
     * @memberof ApiMsaReplyProcessesRanOn
     */
    resources: Array<string>;
}

/**
 * Check if a given object implements the ApiMsaReplyProcessesRanOn interface.
 */
export function instanceOfApiMsaReplyProcessesRanOn(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "errors" in value;
    isInstance = isInstance && "meta" in value;
    isInstance = isInstance && "resources" in value;

    return isInstance;
}

export function ApiMsaReplyProcessesRanOnFromJSON(json: any): ApiMsaReplyProcessesRanOn {
    return ApiMsaReplyProcessesRanOnFromJSONTyped(json, false);
}

export function ApiMsaReplyProcessesRanOnFromJSONTyped(json: any, ignoreDiscriminator: boolean): ApiMsaReplyProcessesRanOn {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        errors: (json["errors"] as Array<any>).map(MsaAPIErrorFromJSON),
        meta: ApiResponseMetaFromJSON(json["meta"]),
        resources: json["resources"],
    };
}

export function ApiMsaReplyProcessesRanOnToJSON(value?: ApiMsaReplyProcessesRanOn | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        errors: (value.errors as Array<any>).map(MsaAPIErrorToJSON),
        meta: ApiResponseMetaToJSON(value.meta),
        resources: value.resources,
    };
}
