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
/**
 *
 * @export
 * @interface DomainEventHistogram
 */
export interface DomainEventHistogram {
    /**
     *
     * @type {number}
     * @memberof DomainEventHistogram
     */
    count: number;
    /**
     *
     * @type {boolean}
     * @memberof DomainEventHistogram
     */
    hasDetect: boolean;
    /**
     *
     * @type {boolean}
     * @memberof DomainEventHistogram
     */
    hasOverwatch: boolean;
    /**
     *
     * @type {boolean}
     * @memberof DomainEventHistogram
     */
    hasPrevented: boolean;
    /**
     *
     * @type {number}
     * @memberof DomainEventHistogram
     */
    timestampMax: number;
    /**
     *
     * @type {number}
     * @memberof DomainEventHistogram
     */
    timestampMin: number;
}

export function DomainEventHistogramFromJSON(json: any): DomainEventHistogram {
    return DomainEventHistogramFromJSONTyped(json, false);
}

export function DomainEventHistogramFromJSONTyped(json: any, ignoreDiscriminator: boolean): DomainEventHistogram {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        count: json["count"],
        hasDetect: json["has_detect"],
        hasOverwatch: json["has_overwatch"],
        hasPrevented: json["has_prevented"],
        timestampMax: json["timestamp_max"],
        timestampMin: json["timestamp_min"],
    };
}

export function DomainEventHistogramToJSON(value?: DomainEventHistogram | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        count: value.count,
        has_detect: value.hasDetect,
        has_overwatch: value.hasOverwatch,
        has_prevented: value.hasPrevented,
        timestamp_max: value.timestampMax,
        timestamp_min: value.timestampMin,
    };
}
