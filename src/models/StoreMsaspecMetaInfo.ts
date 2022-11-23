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
import type { StoreMsaspecPaging } from "./StoreMsaspecPaging";
import { StoreMsaspecPagingFromJSON, StoreMsaspecPagingFromJSONTyped, StoreMsaspecPagingToJSON } from "./StoreMsaspecPaging";
import type { StoreMsaspecWrites } from "./StoreMsaspecWrites";
import { StoreMsaspecWritesFromJSON, StoreMsaspecWritesFromJSONTyped, StoreMsaspecWritesToJSON } from "./StoreMsaspecWrites";

/**
 *
 * @export
 * @interface StoreMsaspecMetaInfo
 */
export interface StoreMsaspecMetaInfo {
    /**
     *
     * @type {StoreMsaspecPaging}
     * @memberof StoreMsaspecMetaInfo
     */
    pagination?: StoreMsaspecPaging;
    /**
     *
     * @type {string}
     * @memberof StoreMsaspecMetaInfo
     */
    poweredBy?: string;
    /**
     *
     * @type {number}
     * @memberof StoreMsaspecMetaInfo
     */
    queryTime: number;
    /**
     *
     * @type {string}
     * @memberof StoreMsaspecMetaInfo
     */
    traceId: string;
    /**
     *
     * @type {StoreMsaspecWrites}
     * @memberof StoreMsaspecMetaInfo
     */
    writes?: StoreMsaspecWrites;
}

/**
 * Check if a given object implements the StoreMsaspecMetaInfo interface.
 */
export function instanceOfStoreMsaspecMetaInfo(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "queryTime" in value;
    isInstance = isInstance && "traceId" in value;

    return isInstance;
}

export function StoreMsaspecMetaInfoFromJSON(json: any): StoreMsaspecMetaInfo {
    return StoreMsaspecMetaInfoFromJSONTyped(json, false);
}

export function StoreMsaspecMetaInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): StoreMsaspecMetaInfo {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        pagination: !exists(json, "pagination") ? undefined : StoreMsaspecPagingFromJSON(json["pagination"]),
        poweredBy: !exists(json, "powered_by") ? undefined : json["powered_by"],
        queryTime: json["query_time"],
        traceId: json["trace_id"],
        writes: !exists(json, "writes") ? undefined : StoreMsaspecWritesFromJSON(json["writes"]),
    };
}

export function StoreMsaspecMetaInfoToJSON(value?: StoreMsaspecMetaInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        pagination: StoreMsaspecPagingToJSON(value.pagination),
        powered_by: value.poweredBy,
        query_time: value.queryTime,
        trace_id: value.traceId,
        writes: StoreMsaspecWritesToJSON(value.writes),
    };
}