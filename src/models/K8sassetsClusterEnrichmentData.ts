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
 * @interface K8sassetsClusterEnrichmentData
 */
export interface K8sassetsClusterEnrichmentData {
    /**
     *
     * @type {number}
     * @memberof K8sassetsClusterEnrichmentData
     */
    containerCount: number;
    /**
     *
     * @type {number}
     * @memberof K8sassetsClusterEnrichmentData
     */
    nodeCount: number;
    /**
     *
     * @type {number}
     * @memberof K8sassetsClusterEnrichmentData
     */
    podCount: number;
}

/**
 * Check if a given object implements the K8sassetsClusterEnrichmentData interface.
 */
export function instanceOfK8sassetsClusterEnrichmentData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "containerCount" in value;
    isInstance = isInstance && "nodeCount" in value;
    isInstance = isInstance && "podCount" in value;

    return isInstance;
}

export function K8sassetsClusterEnrichmentDataFromJSON(json: any): K8sassetsClusterEnrichmentData {
    return K8sassetsClusterEnrichmentDataFromJSONTyped(json, false);
}

export function K8sassetsClusterEnrichmentDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): K8sassetsClusterEnrichmentData {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        containerCount: json["container_count"],
        nodeCount: json["node_count"],
        podCount: json["pod_count"],
    };
}

export function K8sassetsClusterEnrichmentDataToJSON(value?: K8sassetsClusterEnrichmentData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        container_count: value.containerCount,
        node_count: value.nodeCount,
        pod_count: value.podCount,
    };
}