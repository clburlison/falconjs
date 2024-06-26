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
import type { DomainAggregationResultItem } from "./DomainAggregationResultItem";
import { DomainAggregationResultItemFromJSON, DomainAggregationResultItemFromJSONTyped, DomainAggregationResultItemToJSON } from "./DomainAggregationResultItem";

/**
 *
 * @export
 * @interface DomainAggregationResult
 */
export interface DomainAggregationResult {
    /**
     * Aggregation buckets containing aggregated information
     * @type {Array<DomainAggregationResultItem>}
     * @memberof DomainAggregationResult
     */
    buckets: Array<DomainAggregationResultItem>;
    /**
     * Name of the aggregation, equal to the name of it from the AggregateQueryRequest name
     * @type {string}
     * @memberof DomainAggregationResult
     */
    name: string;
    /**
     * sum count of the documents not included in the buckets
     * @type {number}
     * @memberof DomainAggregationResult
     */
    sumOtherDocCount?: number;
}

/**
 * Check if a given object implements the DomainAggregationResult interface.
 */
export function instanceOfDomainAggregationResult(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "buckets" in value;
    isInstance = isInstance && "name" in value;

    return isInstance;
}

export function DomainAggregationResultFromJSON(json: any): DomainAggregationResult {
    return DomainAggregationResultFromJSONTyped(json, false);
}

export function DomainAggregationResultFromJSONTyped(json: any, ignoreDiscriminator: boolean): DomainAggregationResult {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        buckets: (json["buckets"] as Array<any>).map(DomainAggregationResultItemFromJSON),
        name: json["name"],
        sumOtherDocCount: !exists(json, "sum_other_doc_count") ? undefined : json["sum_other_doc_count"],
    };
}

export function DomainAggregationResultToJSON(value?: DomainAggregationResult | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        buckets: (value.buckets as Array<any>).map(DomainAggregationResultItemToJSON),
        name: value.name,
        sum_other_doc_count: value.sumOtherDocCount,
    };
}
