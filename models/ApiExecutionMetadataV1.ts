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
 * @interface ApiExecutionMetadataV1
 */
export interface ApiExecutionMetadataV1 {
    /**
     *
     * @type {boolean}
     * @memberof ApiExecutionMetadataV1
     */
    retryAllowed: boolean;
    /**
     *
     * @type {boolean}
     * @memberof ApiExecutionMetadataV1
     */
    retryPerformed: boolean;
    /**
     *
     * @type {string}
     * @memberof ApiExecutionMetadataV1
     */
    retryReportExecutionId: string;
    /**
     *
     * @type {string}
     * @memberof ApiExecutionMetadataV1
     */
    subtype: string;
    /**
     *
     * @type {string}
     * @memberof ApiExecutionMetadataV1
     */
    unscheduledExecutionType: string;
}

export function ApiExecutionMetadataV1FromJSON(json: any): ApiExecutionMetadataV1 {
    return ApiExecutionMetadataV1FromJSONTyped(json, false);
}

export function ApiExecutionMetadataV1FromJSONTyped(json: any, ignoreDiscriminator: boolean): ApiExecutionMetadataV1 {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        retryAllowed: json["retry_allowed"],
        retryPerformed: json["retry_performed"],
        retryReportExecutionId: json["retry_report_execution_id"],
        subtype: json["subtype"],
        unscheduledExecutionType: json["unscheduled_execution_type"],
    };
}

export function ApiExecutionMetadataV1ToJSON(value?: ApiExecutionMetadataV1 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        retry_allowed: value.retryAllowed,
        retry_performed: value.retryPerformed,
        retry_report_execution_id: value.retryReportExecutionId,
        subtype: value.subtype,
        unscheduled_execution_type: value.unscheduledExecutionType,
    };
}
