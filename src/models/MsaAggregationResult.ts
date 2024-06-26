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
import type { MsaAggregationResultItem } from "./MsaAggregationResultItem";
import { MsaAggregationResultItemFromJSON, MsaAggregationResultItemFromJSONTyped, MsaAggregationResultItemToJSON } from "./MsaAggregationResultItem";

/**
 *
 * @export
 * @interface MsaAggregationResult
 */
export interface MsaAggregationResult {
    /**
     *
     * @type {Array<MsaAggregationResultItem>}
     * @memberof MsaAggregationResult
     */
    buckets: Array<MsaAggregationResultItem>;
    /**
     *
     * @type {string}
     * @memberof MsaAggregationResult
     */
    name: string;
    /**
     *
     * @type {number}
     * @memberof MsaAggregationResult
     */
    sumOtherDocCount?: number;
}

/**
 * Check if a given object implements the MsaAggregationResult interface.
 */
export function instanceOfMsaAggregationResult(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "buckets" in value;
    isInstance = isInstance && "name" in value;

    return isInstance;
}

export function MsaAggregationResultFromJSON(json: any): MsaAggregationResult {
    return MsaAggregationResultFromJSONTyped(json, false);
}

export function MsaAggregationResultFromJSONTyped(json: any, ignoreDiscriminator: boolean): MsaAggregationResult {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        buckets: (json["buckets"] as Array<any>).map(MsaAggregationResultItemFromJSON),
        name: json["name"],
        sumOtherDocCount: !exists(json, "sum_other_doc_count") ? undefined : json["sum_other_doc_count"],
    };
}

export function MsaAggregationResultToJSON(value?: MsaAggregationResult | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        buckets: (value.buckets as Array<any>).map(MsaAggregationResultItemToJSON),
        name: value.name,
        sum_other_doc_count: value.sumOtherDocCount,
    };
}
