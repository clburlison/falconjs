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
import type { DeviceapiGroupMeta } from "./DeviceapiGroupMeta";
import { DeviceapiGroupMetaFromJSON, DeviceapiGroupMetaFromJSONTyped, DeviceapiGroupMetaToJSON } from "./DeviceapiGroupMeta";

/**
 *
 * @export
 * @interface DeviceapiGroupResponseV1
 */
export interface DeviceapiGroupResponseV1 {
    /**
     *
     * @type {string}
     * @memberof DeviceapiGroupResponseV1
     */
    assignmentRule?: string;
    /**
     *
     * @type {string}
     * @memberof DeviceapiGroupResponseV1
     */
    cid: string;
    /**
     *
     * @type {string}
     * @memberof DeviceapiGroupResponseV1
     */
    createdBy: string;
    /**
     *
     * @type {Date}
     * @memberof DeviceapiGroupResponseV1
     */
    createdTimestamp: Date;
    /**
     *
     * @type {string}
     * @memberof DeviceapiGroupResponseV1
     */
    description: string;
    /**
     *
     * @type {string}
     * @memberof DeviceapiGroupResponseV1
     */
    groupType: string;
    /**
     *
     * @type {string}
     * @memberof DeviceapiGroupResponseV1
     */
    id: string;
    /**
     *
     * @type {DeviceapiGroupMeta}
     * @memberof DeviceapiGroupResponseV1
     */
    meta?: DeviceapiGroupMeta;
    /**
     *
     * @type {string}
     * @memberof DeviceapiGroupResponseV1
     */
    modifiedBy: string;
    /**
     *
     * @type {Date}
     * @memberof DeviceapiGroupResponseV1
     */
    modifiedTimestamp: Date;
    /**
     *
     * @type {string}
     * @memberof DeviceapiGroupResponseV1
     */
    name: string;
}

/**
 * Check if a given object implements the DeviceapiGroupResponseV1 interface.
 */
export function instanceOfDeviceapiGroupResponseV1(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "cid" in value;
    isInstance = isInstance && "createdBy" in value;
    isInstance = isInstance && "createdTimestamp" in value;
    isInstance = isInstance && "description" in value;
    isInstance = isInstance && "groupType" in value;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "modifiedBy" in value;
    isInstance = isInstance && "modifiedTimestamp" in value;
    isInstance = isInstance && "name" in value;

    return isInstance;
}

export function DeviceapiGroupResponseV1FromJSON(json: any): DeviceapiGroupResponseV1 {
    return DeviceapiGroupResponseV1FromJSONTyped(json, false);
}

export function DeviceapiGroupResponseV1FromJSONTyped(json: any, ignoreDiscriminator: boolean): DeviceapiGroupResponseV1 {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        assignmentRule: !exists(json, "assignment_rule") ? undefined : json["assignment_rule"],
        cid: json["cid"],
        createdBy: json["created_by"],
        createdTimestamp: new Date(json["created_timestamp"]),
        description: json["description"],
        groupType: json["group_type"],
        id: json["id"],
        meta: !exists(json, "meta") ? undefined : DeviceapiGroupMetaFromJSON(json["meta"]),
        modifiedBy: json["modified_by"],
        modifiedTimestamp: new Date(json["modified_timestamp"]),
        name: json["name"],
    };
}

export function DeviceapiGroupResponseV1ToJSON(value?: DeviceapiGroupResponseV1 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        assignment_rule: value.assignmentRule,
        cid: value.cid,
        created_by: value.createdBy,
        created_timestamp: value.createdTimestamp.toISOString(),
        description: value.description,
        group_type: value.groupType,
        id: value.id,
        meta: DeviceapiGroupMetaToJSON(value.meta),
        modified_by: value.modifiedBy,
        modified_timestamp: value.modifiedTimestamp.toISOString(),
        name: value.name,
    };
}
