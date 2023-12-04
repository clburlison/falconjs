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
import type { FwmgrMsaAggregationResult } from "./FwmgrMsaAggregationResult";
import { FwmgrMsaAggregationResultFromJSON, FwmgrMsaAggregationResultFromJSONTyped, FwmgrMsaAggregationResultToJSON } from "./FwmgrMsaAggregationResult";

/**
 *
 * @export
 * @interface FwmgrMsaAggregationResultItem
 */
export interface FwmgrMsaAggregationResultItem {
    /**
     *
     * @type {number}
     * @memberof FwmgrMsaAggregationResultItem
     */
    count: number;
    /**
     *
     * @type {number}
     * @memberof FwmgrMsaAggregationResultItem
     */
    from?: number;
    /**
     *
     * @type {string}
     * @memberof FwmgrMsaAggregationResultItem
     */
    keyAsString?: string;
    /**
     *
     * @type {object}
     * @memberof FwmgrMsaAggregationResultItem
     */
    label?: object;
    /**
     *
     * @type {string}
     * @memberof FwmgrMsaAggregationResultItem
     */
    stringFrom?: string;
    /**
     *
     * @type {string}
     * @memberof FwmgrMsaAggregationResultItem
     */
    stringTo?: string;
    /**
     *
     * @type {Array<FwmgrMsaAggregationResult>}
     * @memberof FwmgrMsaAggregationResultItem
     */
    subAggregates?: Array<FwmgrMsaAggregationResult>;
    /**
     *
     * @type {number}
     * @memberof FwmgrMsaAggregationResultItem
     */
    to?: number;
    /**
     *
     * @type {number}
     * @memberof FwmgrMsaAggregationResultItem
     */
    value?: number;
    /**
     *
     * @type {string}
     * @memberof FwmgrMsaAggregationResultItem
     */
    valueAsString?: string;
}

/**
 * Check if a given object implements the FwmgrMsaAggregationResultItem interface.
 */
export function instanceOfFwmgrMsaAggregationResultItem(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "count" in value;

    return isInstance;
}

export function FwmgrMsaAggregationResultItemFromJSON(json: any): FwmgrMsaAggregationResultItem {
    return FwmgrMsaAggregationResultItemFromJSONTyped(json, false);
}

export function FwmgrMsaAggregationResultItemFromJSONTyped(json: any, ignoreDiscriminator: boolean): FwmgrMsaAggregationResultItem {
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
        subAggregates: !exists(json, "sub_aggregates") ? undefined : (json["sub_aggregates"] as Array<any>).map(FwmgrMsaAggregationResultFromJSON),
        to: !exists(json, "to") ? undefined : json["to"],
        value: !exists(json, "value") ? undefined : json["value"],
        valueAsString: !exists(json, "value_as_string") ? undefined : json["value_as_string"],
    };
}

export function FwmgrMsaAggregationResultItemToJSON(value?: FwmgrMsaAggregationResultItem | null): any {
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
        sub_aggregates: value.subAggregates === undefined ? undefined : (value.subAggregates as Array<any>).map(FwmgrMsaAggregationResultToJSON),
        to: value.to,
        value: value.value,
        value_as_string: value.valueAsString,
    };
}
