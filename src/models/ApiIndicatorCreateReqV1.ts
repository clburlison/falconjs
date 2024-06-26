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
import type { ApiMetadataReqV1 } from "./ApiMetadataReqV1";
import { ApiMetadataReqV1FromJSON, ApiMetadataReqV1FromJSONTyped, ApiMetadataReqV1ToJSON } from "./ApiMetadataReqV1";

/**
 *
 * @export
 * @interface ApiIndicatorCreateReqV1
 */
export interface ApiIndicatorCreateReqV1 {
    /**
     *
     * @type {string}
     * @memberof ApiIndicatorCreateReqV1
     */
    action?: string;
    /**
     *
     * @type {boolean}
     * @memberof ApiIndicatorCreateReqV1
     */
    appliedGlobally: boolean;
    /**
     *
     * @type {string}
     * @memberof ApiIndicatorCreateReqV1
     */
    description?: string;
    /**
     *
     * @type {Date}
     * @memberof ApiIndicatorCreateReqV1
     */
    expiration?: Date;
    /**
     *
     * @type {Array<string>}
     * @memberof ApiIndicatorCreateReqV1
     */
    hostGroups?: Array<string>;
    /**
     *
     * @type {ApiMetadataReqV1}
     * @memberof ApiIndicatorCreateReqV1
     */
    metadata?: ApiMetadataReqV1;
    /**
     *
     * @type {string}
     * @memberof ApiIndicatorCreateReqV1
     */
    mobileAction?: string;
    /**
     *
     * @type {Array<string>}
     * @memberof ApiIndicatorCreateReqV1
     */
    platforms?: Array<string>;
    /**
     *
     * @type {string}
     * @memberof ApiIndicatorCreateReqV1
     */
    severity?: string;
    /**
     *
     * @type {string}
     * @memberof ApiIndicatorCreateReqV1
     */
    source?: string;
    /**
     *
     * @type {Array<string>}
     * @memberof ApiIndicatorCreateReqV1
     */
    tags?: Array<string>;
    /**
     *
     * @type {string}
     * @memberof ApiIndicatorCreateReqV1
     */
    type?: string;
    /**
     *
     * @type {string}
     * @memberof ApiIndicatorCreateReqV1
     */
    value?: string;
}

/**
 * Check if a given object implements the ApiIndicatorCreateReqV1 interface.
 */
export function instanceOfApiIndicatorCreateReqV1(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "appliedGlobally" in value;

    return isInstance;
}

export function ApiIndicatorCreateReqV1FromJSON(json: any): ApiIndicatorCreateReqV1 {
    return ApiIndicatorCreateReqV1FromJSONTyped(json, false);
}

export function ApiIndicatorCreateReqV1FromJSONTyped(json: any, ignoreDiscriminator: boolean): ApiIndicatorCreateReqV1 {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        action: !exists(json, "action") ? undefined : json["action"],
        appliedGlobally: json["applied_globally"],
        description: !exists(json, "description") ? undefined : json["description"],
        expiration: !exists(json, "expiration") ? undefined : new Date(json["expiration"]),
        hostGroups: !exists(json, "host_groups") ? undefined : json["host_groups"],
        metadata: !exists(json, "metadata") ? undefined : ApiMetadataReqV1FromJSON(json["metadata"]),
        mobileAction: !exists(json, "mobile_action") ? undefined : json["mobile_action"],
        platforms: !exists(json, "platforms") ? undefined : json["platforms"],
        severity: !exists(json, "severity") ? undefined : json["severity"],
        source: !exists(json, "source") ? undefined : json["source"],
        tags: !exists(json, "tags") ? undefined : json["tags"],
        type: !exists(json, "type") ? undefined : json["type"],
        value: !exists(json, "value") ? undefined : json["value"],
    };
}

export function ApiIndicatorCreateReqV1ToJSON(value?: ApiIndicatorCreateReqV1 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        action: value.action,
        applied_globally: value.appliedGlobally,
        description: value.description,
        expiration: value.expiration === undefined ? undefined : value.expiration.toISOString(),
        host_groups: value.hostGroups,
        metadata: ApiMetadataReqV1ToJSON(value.metadata),
        mobile_action: value.mobileAction,
        platforms: value.platforms,
        severity: value.severity,
        source: value.source,
        tags: value.tags,
        type: value.type,
        value: value.value,
    };
}
