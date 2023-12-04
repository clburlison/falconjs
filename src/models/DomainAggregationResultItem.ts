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
import type { DomainAggregationResult } from "./DomainAggregationResult";
import { DomainAggregationResultFromJSON, DomainAggregationResultFromJSONTyped, DomainAggregationResultToJSON } from "./DomainAggregationResult";

/**
 *
 * @export
 * @interface DomainAggregationResultItem
 */
export interface DomainAggregationResultItem {
    /**
     * count of the documents in the bucket
     * @type {number}
     * @memberof DomainAggregationResultItem
     */
    count: number;
    /**
     * numerical value of the date or number start of the range
     * @type {number}
     * @memberof DomainAggregationResultItem
     */
    from?: number;
    /**
     * string value of the key, usually not populated
     * @type {string}
     * @memberof DomainAggregationResultItem
     */
    keyAsString?: string;
    /**
     *
     * @type {object}
     * @memberof DomainAggregationResultItem
     */
    label?: object;
    /**
     * string value of the from property, usually representing a date or number
     * @type {string}
     * @memberof DomainAggregationResultItem
     */
    stringFrom?: string;
    /**
     * string value of the to property, usually representing a date or number
     * @type {string}
     * @memberof DomainAggregationResultItem
     */
    stringTo?: string;
    /**
     * sub-aggregations of the bucket
     * @type {Array<DomainAggregationResult>}
     * @memberof DomainAggregationResultItem
     */
    subAggregates?: Array<DomainAggregationResult>;
    /**
     * numerical value of the date or number end of the range
     * @type {number}
     * @memberof DomainAggregationResultItem
     */
    to?: number;
    /**
     * numerical value of the bucket
     * @type {number}
     * @memberof DomainAggregationResultItem
     */
    value?: number;
    /**
     * value as a string, usually not populated
     * @type {string}
     * @memberof DomainAggregationResultItem
     */
    valueAsString?: string;
}

/**
 * Check if a given object implements the DomainAggregationResultItem interface.
 */
export function instanceOfDomainAggregationResultItem(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "count" in value;

    return isInstance;
}

export function DomainAggregationResultItemFromJSON(json: any): DomainAggregationResultItem {
    return DomainAggregationResultItemFromJSONTyped(json, false);
}

export function DomainAggregationResultItemFromJSONTyped(json: any, ignoreDiscriminator: boolean): DomainAggregationResultItem {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        count: json["count"],
        from: !exists(json, "from") ? undefined : json["from"],
        keyAsString: !exists(json, "key_as_string") ? undefined : json["key_as_string"],
        label: !exists(json, "label") ? undefined : json["label"],
        stringFrom: !exists(json, "string_from") ? undefined : json["string_from"],
        stringTo: !exists(json, "string_to") ? undefined : json["string_to"],
        subAggregates: !exists(json, "sub_aggregates") ? undefined : (json["sub_aggregates"] as Array<any>).map(DomainAggregationResultFromJSON),
        to: !exists(json, "to") ? undefined : json["to"],
        value: !exists(json, "value") ? undefined : json["value"],
        valueAsString: !exists(json, "value_as_string") ? undefined : json["value_as_string"],
    };
}

export function DomainAggregationResultItemToJSON(value?: DomainAggregationResultItem | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        count: value.count,
        from: value.from,
        key_as_string: value.keyAsString,
        label: value.label,
        string_from: value.stringFrom,
        string_to: value.stringTo,
        sub_aggregates: value.subAggregates === undefined ? undefined : (value.subAggregates as Array<any>).map(DomainAggregationResultToJSON),
        to: value.to,
        value: value.value,
        value_as_string: value.valueAsString,
    };
}