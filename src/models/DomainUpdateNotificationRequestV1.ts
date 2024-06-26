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
 * @interface DomainUpdateNotificationRequestV1
 */
export interface DomainUpdateNotificationRequestV1 {
    /**
     * The unique ID of the user who is assigned to this notification. The value `unassigned` can be used to unassign a notification.
     * @type {string}
     * @memberof DomainUpdateNotificationRequestV1
     */
    assignedToUuid: string;
    /**
     * The ID of the notifications
     * @type {string}
     * @memberof DomainUpdateNotificationRequestV1
     */
    id: string;
    /**
     *
     * @type {string}
     * @memberof DomainUpdateNotificationRequestV1
     */
    idpSendStatus: string;
    /**
     *
     * @type {string}
     * @memberof DomainUpdateNotificationRequestV1
     */
    message: string;
    /**
     * The notification status. This can be one of: `new`, `in-progress`, `closed-false-positive`, `closed-true-positive`.
     * @type {string}
     * @memberof DomainUpdateNotificationRequestV1
     */
    status: string;
}

/**
 * Check if a given object implements the DomainUpdateNotificationRequestV1 interface.
 */
export function instanceOfDomainUpdateNotificationRequestV1(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "assignedToUuid" in value;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "idpSendStatus" in value;
    isInstance = isInstance && "message" in value;
    isInstance = isInstance && "status" in value;

    return isInstance;
}

export function DomainUpdateNotificationRequestV1FromJSON(json: any): DomainUpdateNotificationRequestV1 {
    return DomainUpdateNotificationRequestV1FromJSONTyped(json, false);
}

export function DomainUpdateNotificationRequestV1FromJSONTyped(json: any, ignoreDiscriminator: boolean): DomainUpdateNotificationRequestV1 {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        assignedToUuid: json["assigned_to_uuid"],
        id: json["id"],
        idpSendStatus: json["idp_send_status"],
        message: json["message"],
        status: json["status"],
    };
}

export function DomainUpdateNotificationRequestV1ToJSON(value?: DomainUpdateNotificationRequestV1 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        assigned_to_uuid: value.assignedToUuid,
        id: value.id,
        idp_send_status: value.idpSendStatus,
        message: value.message,
        status: value.status,
    };
}
