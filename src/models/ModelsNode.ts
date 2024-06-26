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
 * @interface ModelsNode
 */
export interface ModelsNode {
    /**
     *
     * @type {Array<{ [key: string]: string; }>}
     * @memberof ModelsNode
     */
    agents: Array<{ [key: string]: string }>;
    /**
     *
     * @type {Array<string>}
     * @memberof ModelsNode
     */
    annotationsList: Array<string>;
    /**
     *
     * @type {string}
     * @memberof ModelsNode
     */
    architecture: string;
    /**
     *
     * @type {string}
     * @memberof ModelsNode
     */
    baseImage: string;
    /**
     *
     * @type {string}
     * @memberof ModelsNode
     */
    cid: string;
    /**
     *
     * @type {string}
     * @memberof ModelsNode
     */
    cloudAccountId: string;
    /**
     *
     * @type {string}
     * @memberof ModelsNode
     */
    cloudInstanceId: string;
    /**
     *
     * @type {string}
     * @memberof ModelsNode
     */
    cloudInstanceType: string;
    /**
     *
     * @type {string}
     * @memberof ModelsNode
     */
    cloudName: string;
    /**
     *
     * @type {string}
     * @memberof ModelsNode
     */
    cloudRegion: string;
    /**
     *
     * @type {string}
     * @memberof ModelsNode
     */
    clusterId: string;
    /**
     *
     * @type {string}
     * @memberof ModelsNode
     */
    clusterName: string;
    /**
     *
     * @type {number}
     * @memberof ModelsNode
     */
    containerCount: number;
    /**
     *
     * @type {string}
     * @memberof ModelsNode
     */
    containerRuntimeVersion: string;
    /**
     *
     * @type {string}
     * @memberof ModelsNode
     */
    cpu: string;
    /**
     *
     * @type {string}
     * @memberof ModelsNode
     */
    createdAt: string;
    /**
     *
     * @type {string}
     * @memberof ModelsNode
     */
    externalIp: string;
    /**
     *
     * @type {string}
     * @memberof ModelsNode
     */
    firstSeen: string;
    /**
     *
     * @type {string}
     * @memberof ModelsNode
     */
    ipv4: string;
    /**
     *
     * @type {string}
     * @memberof ModelsNode
     */
    ipv6: string;
    /**
     *
     * @type {string}
     * @memberof ModelsNode
     */
    kernelVersion: string;
    /**
     *
     * @type {string}
     * @memberof ModelsNode
     */
    kubernetesVersion: string;
    /**
     *
     * @type {{ [key: string]: string; }}
     * @memberof ModelsNode
     */
    labels: { [key: string]: string };
    /**
     *
     * @type {Array<string>}
     * @memberof ModelsNode
     */
    labelsList: Array<string>;
    /**
     *
     * @type {string}
     * @memberof ModelsNode
     */
    lastSeen: string;
    /**
     *
     * @type {string}
     * @memberof ModelsNode
     */
    memory: string;
    /**
     *
     * @type {string}
     * @memberof ModelsNode
     */
    nodeId: string;
    /**
     *
     * @type {string}
     * @memberof ModelsNode
     */
    nodeName: string;
    /**
     *
     * @type {string}
     * @memberof ModelsNode
     */
    os: string;
    /**
     *
     * @type {string}
     * @memberof ModelsNode
     */
    podCidr: string;
    /**
     *
     * @type {number}
     * @memberof ModelsNode
     */
    podCount: number;
    /**
     *
     * @type {string}
     * @memberof ModelsNode
     */
    providerId: string;
    /**
     *
     * @type {string}
     * @memberof ModelsNode
     */
    storage: string;
    /**
     *
     * @type {string}
     * @memberof ModelsNode
     */
    uid: string;
}

/**
 * Check if a given object implements the ModelsNode interface.
 */
export function instanceOfModelsNode(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "agents" in value;
    isInstance = isInstance && "annotationsList" in value;
    isInstance = isInstance && "architecture" in value;
    isInstance = isInstance && "baseImage" in value;
    isInstance = isInstance && "cid" in value;
    isInstance = isInstance && "cloudAccountId" in value;
    isInstance = isInstance && "cloudInstanceId" in value;
    isInstance = isInstance && "cloudInstanceType" in value;
    isInstance = isInstance && "cloudName" in value;
    isInstance = isInstance && "cloudRegion" in value;
    isInstance = isInstance && "clusterId" in value;
    isInstance = isInstance && "clusterName" in value;
    isInstance = isInstance && "containerCount" in value;
    isInstance = isInstance && "containerRuntimeVersion" in value;
    isInstance = isInstance && "cpu" in value;
    isInstance = isInstance && "createdAt" in value;
    isInstance = isInstance && "externalIp" in value;
    isInstance = isInstance && "firstSeen" in value;
    isInstance = isInstance && "ipv4" in value;
    isInstance = isInstance && "ipv6" in value;
    isInstance = isInstance && "kernelVersion" in value;
    isInstance = isInstance && "kubernetesVersion" in value;
    isInstance = isInstance && "labels" in value;
    isInstance = isInstance && "labelsList" in value;
    isInstance = isInstance && "lastSeen" in value;
    isInstance = isInstance && "memory" in value;
    isInstance = isInstance && "nodeId" in value;
    isInstance = isInstance && "nodeName" in value;
    isInstance = isInstance && "os" in value;
    isInstance = isInstance && "podCidr" in value;
    isInstance = isInstance && "podCount" in value;
    isInstance = isInstance && "providerId" in value;
    isInstance = isInstance && "storage" in value;
    isInstance = isInstance && "uid" in value;

    return isInstance;
}

export function ModelsNodeFromJSON(json: any): ModelsNode {
    return ModelsNodeFromJSONTyped(json, false);
}

export function ModelsNodeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ModelsNode {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        agents: json["agents"],
        annotationsList: json["annotations_list"],
        architecture: json["architecture"],
        baseImage: json["base_image"],
        cid: json["cid"],
        cloudAccountId: json["cloud_account_id"],
        cloudInstanceId: json["cloud_instance_id"],
        cloudInstanceType: json["cloud_instance_type"],
        cloudName: json["cloud_name"],
        cloudRegion: json["cloud_region"],
        clusterId: json["cluster_id"],
        clusterName: json["cluster_name"],
        containerCount: json["container_count"],
        containerRuntimeVersion: json["container_runtime_version"],
        cpu: json["cpu"],
        createdAt: json["created_at"],
        externalIp: json["external_ip"],
        firstSeen: json["first_seen"],
        ipv4: json["ipv4"],
        ipv6: json["ipv6"],
        kernelVersion: json["kernel_version"],
        kubernetesVersion: json["kubernetes_version"],
        labels: json["labels"],
        labelsList: json["labels_list"],
        lastSeen: json["last_seen"],
        memory: json["memory"],
        nodeId: json["node_id"],
        nodeName: json["node_name"],
        os: json["os"],
        podCidr: json["pod_cidr"],
        podCount: json["pod_count"],
        providerId: json["provider_id"],
        storage: json["storage"],
        uid: json["uid"],
    };
}

export function ModelsNodeToJSON(value?: ModelsNode | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        agents: value.agents,
        annotations_list: value.annotationsList,
        architecture: value.architecture,
        base_image: value.baseImage,
        cid: value.cid,
        cloud_account_id: value.cloudAccountId,
        cloud_instance_id: value.cloudInstanceId,
        cloud_instance_type: value.cloudInstanceType,
        cloud_name: value.cloudName,
        cloud_region: value.cloudRegion,
        cluster_id: value.clusterId,
        cluster_name: value.clusterName,
        container_count: value.containerCount,
        container_runtime_version: value.containerRuntimeVersion,
        cpu: value.cpu,
        created_at: value.createdAt,
        external_ip: value.externalIp,
        first_seen: value.firstSeen,
        ipv4: value.ipv4,
        ipv6: value.ipv6,
        kernel_version: value.kernelVersion,
        kubernetes_version: value.kubernetesVersion,
        labels: value.labels,
        labels_list: value.labelsList,
        last_seen: value.lastSeen,
        memory: value.memory,
        node_id: value.nodeId,
        node_name: value.nodeName,
        os: value.os,
        pod_cidr: value.podCidr,
        pod_count: value.podCount,
        provider_id: value.providerId,
        storage: value.storage,
        uid: value.uid,
    };
}
