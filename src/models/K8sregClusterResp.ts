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
import type { K8sregVersionResp } from "./K8sregVersionResp";
import { K8sregVersionRespFromJSON, K8sregVersionRespFromJSONTyped, K8sregVersionRespToJSON } from "./K8sregVersionResp";

/**
 *
 * @export
 * @interface K8sregClusterResp
 */
export interface K8sregClusterResp {
    /**
     *
     * @type {string}
     * @memberof K8sregClusterResp
     */
    accountId: string;
    /**
     *
     * @type {K8sregVersionResp}
     * @memberof K8sregClusterResp
     */
    agentVersion: K8sregVersionResp;
    /**
     *
     * @type {string}
     * @memberof K8sregClusterResp
     */
    cid: string;
    /**
     *
     * @type {string}
     * @memberof K8sregClusterResp
     */
    clusterId: string;
    /**
     *
     * @type {string}
     * @memberof K8sregClusterResp
     */
    clusterName: string;
    /**
     *
     * @type {string}
     * @memberof K8sregClusterResp
     */
    clusterService: string;
    /**
     *
     * @type {Date}
     * @memberof K8sregClusterResp
     */
    createdAt: Date;
    /**
     *
     * @type {K8sregVersionResp}
     * @memberof K8sregClusterResp
     */
    helmVersion: K8sregVersionResp;
    /**
     *
     * @type {K8sregVersionResp}
     * @memberof K8sregClusterResp
     */
    k8sVersion: K8sregVersionResp;
    /**
     *
     * @type {Date}
     * @memberof K8sregClusterResp
     */
    lastHeartbeatAt: Date;
    /**
     *
     * @type {string}
     * @memberof K8sregClusterResp
     */
    location: string;
    /**
     *
     * @type {string}
     * @memberof K8sregClusterResp
     */
    status: string;
    /**
     *
     * @type {Date}
     * @memberof K8sregClusterResp
     */
    updatedAt: Date;
}

/**
 * Check if a given object implements the K8sregClusterResp interface.
 */
export function instanceOfK8sregClusterResp(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "accountId" in value;
    isInstance = isInstance && "agentVersion" in value;
    isInstance = isInstance && "cid" in value;
    isInstance = isInstance && "clusterId" in value;
    isInstance = isInstance && "clusterName" in value;
    isInstance = isInstance && "clusterService" in value;
    isInstance = isInstance && "createdAt" in value;
    isInstance = isInstance && "helmVersion" in value;
    isInstance = isInstance && "k8sVersion" in value;
    isInstance = isInstance && "lastHeartbeatAt" in value;
    isInstance = isInstance && "location" in value;
    isInstance = isInstance && "status" in value;
    isInstance = isInstance && "updatedAt" in value;

    return isInstance;
}

export function K8sregClusterRespFromJSON(json: any): K8sregClusterResp {
    return K8sregClusterRespFromJSONTyped(json, false);
}

export function K8sregClusterRespFromJSONTyped(json: any, ignoreDiscriminator: boolean): K8sregClusterResp {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        accountId: json["account_id"],
        agentVersion: K8sregVersionRespFromJSON(json["agent_version"]),
        cid: json["cid"],
        clusterId: json["cluster_id"],
        clusterName: json["cluster_name"],
        clusterService: json["cluster_service"],
        createdAt: new Date(json["created_at"]),
        helmVersion: K8sregVersionRespFromJSON(json["helm_version"]),
        k8sVersion: K8sregVersionRespFromJSON(json["k8s_version"]),
        lastHeartbeatAt: new Date(json["last_heartbeat_at"]),
        location: json["location"],
        status: json["status"],
        updatedAt: new Date(json["updated_at"]),
    };
}

export function K8sregClusterRespToJSON(value?: K8sregClusterResp | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        account_id: value.accountId,
        agent_version: K8sregVersionRespToJSON(value.agentVersion),
        cid: value.cid,
        cluster_id: value.clusterId,
        cluster_name: value.clusterName,
        cluster_service: value.clusterService,
        created_at: value.createdAt.toISOString(),
        helm_version: K8sregVersionRespToJSON(value.helmVersion),
        k8s_version: K8sregVersionRespToJSON(value.k8sVersion),
        last_heartbeat_at: value.lastHeartbeatAt.toISOString(),
        location: value.location,
        status: value.status,
        updated_at: value.updatedAt.toISOString(),
    };
}
