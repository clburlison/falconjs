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
/**
 *
 * @export
 * @interface DomainBatchRefreshSessionRequest
 */
export interface DomainBatchRefreshSessionRequest {
    /**
     *
     * @type {string}
     * @memberof DomainBatchRefreshSessionRequest
     */
    batchId: string;
    /**
     *
     * @type {Array<string>}
     * @memberof DomainBatchRefreshSessionRequest
     */
    hostsToRemove: Array<string>;
}

/**
 * Check if a given object implements the DomainBatchRefreshSessionRequest interface.
 */
export function instanceOfDomainBatchRefreshSessionRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "batchId" in value;
    isInstance = isInstance && "hostsToRemove" in value;

    return isInstance;
}

export function DomainBatchRefreshSessionRequestFromJSON(json: any): DomainBatchRefreshSessionRequest {
    return DomainBatchRefreshSessionRequestFromJSONTyped(json, false);
}

export function DomainBatchRefreshSessionRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): DomainBatchRefreshSessionRequest {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        batchId: json["batch_id"],
        hostsToRemove: json["hosts_to_remove"],
    };
}

export function DomainBatchRefreshSessionRequestToJSON(value?: DomainBatchRefreshSessionRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        batch_id: value.batchId,
        hosts_to_remove: value.hostsToRemove,
    };
}
