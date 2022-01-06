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
import { ApiMetadataReqV1, ApiMetadataReqV1FromJSON, ApiMetadataReqV1FromJSONTyped, ApiMetadataReqV1ToJSON } from "./ApiMetadataReqV1";

/**
 *
 * @export
 * @interface ApiIndicatorUpdateReqV1
 */
export interface ApiIndicatorUpdateReqV1 {
    /**
     *
     * @type {string}
     * @memberof ApiIndicatorUpdateReqV1
     */
    action?: string;
    /**
     *
     * @type {boolean}
     * @memberof ApiIndicatorUpdateReqV1
     */
    appliedGlobally?: boolean;
    /**
     *
     * @type {string}
     * @memberof ApiIndicatorUpdateReqV1
     */
    description?: string;
    /**
     *
     * @type {Date}
     * @memberof ApiIndicatorUpdateReqV1
     */
    expiration?: Date;
    /**
     *
     * @type {Array<string>}
     * @memberof ApiIndicatorUpdateReqV1
     */
    hostGroups?: Array<string>;
    /**
     *
     * @type {string}
     * @memberof ApiIndicatorUpdateReqV1
     */
    id?: string;
    /**
     *
     * @type {ApiMetadataReqV1}
     * @memberof ApiIndicatorUpdateReqV1
     */
    metadata?: ApiMetadataReqV1;
    /**
     *
     * @type {string}
     * @memberof ApiIndicatorUpdateReqV1
     */
    mobileAction?: string;
    /**
     *
     * @type {Array<string>}
     * @memberof ApiIndicatorUpdateReqV1
     */
    platforms?: Array<string>;
    /**
     *
     * @type {string}
     * @memberof ApiIndicatorUpdateReqV1
     */
    severity?: string;
    /**
     *
     * @type {string}
     * @memberof ApiIndicatorUpdateReqV1
     */
    source?: string;
    /**
     *
     * @type {Array<string>}
     * @memberof ApiIndicatorUpdateReqV1
     */
    tags?: Array<string>;
}

export function ApiIndicatorUpdateReqV1FromJSON(json: any): ApiIndicatorUpdateReqV1 {
    return ApiIndicatorUpdateReqV1FromJSONTyped(json, false);
}

export function ApiIndicatorUpdateReqV1FromJSONTyped(json: any, ignoreDiscriminator: boolean): ApiIndicatorUpdateReqV1 {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        action: !exists(json, "action") ? undefined : json["action"],
        appliedGlobally: !exists(json, "applied_globally") ? undefined : json["applied_globally"],
        description: !exists(json, "description") ? undefined : json["description"],
        expiration: !exists(json, "expiration") ? undefined : new Date(json["expiration"]),
        hostGroups: !exists(json, "host_groups") ? undefined : json["host_groups"],
        id: !exists(json, "id") ? undefined : json["id"],
        metadata: !exists(json, "metadata") ? undefined : ApiMetadataReqV1FromJSON(json["metadata"]),
        mobileAction: !exists(json, "mobile_action") ? undefined : json["mobile_action"],
        platforms: !exists(json, "platforms") ? undefined : json["platforms"],
        severity: !exists(json, "severity") ? undefined : json["severity"],
        source: !exists(json, "source") ? undefined : json["source"],
        tags: !exists(json, "tags") ? undefined : json["tags"],
    };
}

export function ApiIndicatorUpdateReqV1ToJSON(value?: ApiIndicatorUpdateReqV1 | null): any {
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
        id: value.id,
        metadata: ApiMetadataReqV1ToJSON(value.metadata),
        mobile_action: value.mobileAction,
        platforms: value.platforms,
        severity: value.severity,
        source: value.source,
        tags: value.tags,
    };
}
