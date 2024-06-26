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
import type { MsaDateRangeSpec } from "./MsaDateRangeSpec";
import { MsaDateRangeSpecFromJSON, MsaDateRangeSpecFromJSONTyped, MsaDateRangeSpecToJSON } from "./MsaDateRangeSpec";
import type { MsaRangeSpec } from "./MsaRangeSpec";
import { MsaRangeSpecFromJSON, MsaRangeSpecFromJSONTyped, MsaRangeSpecToJSON } from "./MsaRangeSpec";

/**
 *
 * @export
 * @interface DetectsapiAggregateAlertQueryRequest
 */
export interface DetectsapiAggregateAlertQueryRequest {
    /**
     * DateRanges applies to date_range aggregations.
     * @type {Array<MsaDateRangeSpec>}
     * @memberof DetectsapiAggregateAlertQueryRequest
     */
    dateRanges: Array<MsaDateRangeSpec>;
    /**
     * Exclude Post-filtering on queried fields
     * @type {string}
     * @memberof DetectsapiAggregateAlertQueryRequest
     */
    exclude: string;
    /**
     * Field applies for example to date_histogram and range aggregations.
     * @type {string}
     * @memberof DetectsapiAggregateAlertQueryRequest
     */
    field: string;
    /**
     * FQL query specifying the filter parameters.
     * @type {string}
     * @memberof DetectsapiAggregateAlertQueryRequest
     */
    filter: string;
    /**
     * used in bucket sort aggregations as an offset
     * @type {number}
     * @memberof DetectsapiAggregateAlertQueryRequest
     */
    from: number;
    /**
     * Include Post-filtering on queried fields
     * @type {string}
     * @memberof DetectsapiAggregateAlertQueryRequest
     */
    include: string;
    /**
     * Interval applies for example to date_histogram aggregations (uses calendar_interval). Possible values: year, month, week, day, hour, minute.
     * @type {string}
     * @memberof DetectsapiAggregateAlertQueryRequest
     */
    interval: string;
    /**
     * only return terms that match less than a configured number of hits.
     * @type {number}
     * @memberof DetectsapiAggregateAlertQueryRequest
     */
    maxDocCount?: number;
    /**
     * only return terms that match more than a configured number of hits.
     * @type {number}
     * @memberof DetectsapiAggregateAlertQueryRequest
     */
    minDocCount?: number;
    /**
     * Missing is a value for missing term field. The behavior that query should return if the document does not have the field in the query
     * @type {string}
     * @memberof DetectsapiAggregateAlertQueryRequest
     */
    missing: string;
    /**
     * Name of the aggregate query
     * @type {string}
     * @memberof DetectsapiAggregateAlertQueryRequest
     */
    name: string;
    /**
     * represents full text query
     * @type {string}
     * @memberof DetectsapiAggregateAlertQueryRequest
     */
    q: string;
    /**
     * Ranges applies to range aggregations.
     * @type {Array<MsaRangeSpec>}
     * @memberof DetectsapiAggregateAlertQueryRequest
     */
    ranges: Array<MsaRangeSpec>;
    /**
     * how many term buckets should be returned.
     * @type {number}
     * @memberof DetectsapiAggregateAlertQueryRequest
     */
    size: number;
    /**
     * Sort spec, ex: 'pattern_id|desc'.
     * @type {string}
     * @memberof DetectsapiAggregateAlertQueryRequest
     */
    sort: string;
    /**
     * sub aggregate alert query.
     * @type {Array<DetectsapiAggregateAlertQueryRequest>}
     * @memberof DetectsapiAggregateAlertQueryRequest
     */
    subAggregates: Array<DetectsapiAggregateAlertQueryRequest>;
    /**
     * TimeZone timezone to specify when bucketing results.
     * @type {string}
     * @memberof DetectsapiAggregateAlertQueryRequest
     */
    timeZone: string;
    /**
     * Datastore supported value types: term, terms, date_histogram, facet, range, cardinality. Exact allowed values specific to endpoint.
     * @type {string}
     * @memberof DetectsapiAggregateAlertQueryRequest
     */
    type: string;
}

/**
 * Check if a given object implements the DetectsapiAggregateAlertQueryRequest interface.
 */
export function instanceOfDetectsapiAggregateAlertQueryRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "dateRanges" in value;
    isInstance = isInstance && "exclude" in value;
    isInstance = isInstance && "field" in value;
    isInstance = isInstance && "filter" in value;
    isInstance = isInstance && "from" in value;
    isInstance = isInstance && "include" in value;
    isInstance = isInstance && "interval" in value;
    isInstance = isInstance && "missing" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "q" in value;
    isInstance = isInstance && "ranges" in value;
    isInstance = isInstance && "size" in value;
    isInstance = isInstance && "sort" in value;
    isInstance = isInstance && "subAggregates" in value;
    isInstance = isInstance && "timeZone" in value;
    isInstance = isInstance && "type" in value;

    return isInstance;
}

export function DetectsapiAggregateAlertQueryRequestFromJSON(json: any): DetectsapiAggregateAlertQueryRequest {
    return DetectsapiAggregateAlertQueryRequestFromJSONTyped(json, false);
}

export function DetectsapiAggregateAlertQueryRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): DetectsapiAggregateAlertQueryRequest {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        dateRanges: (json["date_ranges"] as Array<any>).map(MsaDateRangeSpecFromJSON),
        exclude: json["exclude"],
        field: json["field"],
        filter: json["filter"],
        from: json["from"],
        include: json["include"],
        interval: json["interval"],
        maxDocCount: !exists(json, "max_doc_count") ? undefined : json["max_doc_count"],
        minDocCount: !exists(json, "min_doc_count") ? undefined : json["min_doc_count"],
        missing: json["missing"],
        name: json["name"],
        q: json["q"],
        ranges: (json["ranges"] as Array<any>).map(MsaRangeSpecFromJSON),
        size: json["size"],
        sort: json["sort"],
        subAggregates: (json["sub_aggregates"] as Array<any>).map(DetectsapiAggregateAlertQueryRequestFromJSON),
        timeZone: json["time_zone"],
        type: json["type"],
    };
}

export function DetectsapiAggregateAlertQueryRequestToJSON(value?: DetectsapiAggregateAlertQueryRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        date_ranges: (value.dateRanges as Array<any>).map(MsaDateRangeSpecToJSON),
        exclude: value.exclude,
        field: value.field,
        filter: value.filter,
        from: value.from,
        include: value.include,
        interval: value.interval,
        max_doc_count: value.maxDocCount,
        min_doc_count: value.minDocCount,
        missing: value.missing,
        name: value.name,
        q: value.q,
        ranges: (value.ranges as Array<any>).map(MsaRangeSpecToJSON),
        size: value.size,
        sort: value.sort,
        sub_aggregates: (value.subAggregates as Array<any>).map(DetectsapiAggregateAlertQueryRequestToJSON),
        time_zone: value.timeZone,
        type: value.type,
    };
}
