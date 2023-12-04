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
 * A req to reveal an uninstall token for a specific device
 * @export
 * @interface UninstallTokenRevealUninstallTokenReqV1
 */
export interface UninstallTokenRevealUninstallTokenReqV1 {
    /**
     * An optional message to append to the recorded audit log
     * @type {string}
     * @memberof UninstallTokenRevealUninstallTokenReqV1
     */
    auditMessage?: string;
    /**
     * The id of the device to reveal the token for
     * @type {string}
     * @memberof UninstallTokenRevealUninstallTokenReqV1
     */
    deviceId: string;
}

/**
 * Check if a given object implements the UninstallTokenRevealUninstallTokenReqV1 interface.
 */
export function instanceOfUninstallTokenRevealUninstallTokenReqV1(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "deviceId" in value;

    return isInstance;
}

export function UninstallTokenRevealUninstallTokenReqV1FromJSON(json: any): UninstallTokenRevealUninstallTokenReqV1 {
    return UninstallTokenRevealUninstallTokenReqV1FromJSONTyped(json, false);
}

export function UninstallTokenRevealUninstallTokenReqV1FromJSONTyped(json: any, ignoreDiscriminator: boolean): UninstallTokenRevealUninstallTokenReqV1 {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        auditMessage: !exists(json, "audit_message") ? undefined : json["audit_message"],
        deviceId: json["device_id"],
    };
}

export function UninstallTokenRevealUninstallTokenReqV1ToJSON(value?: UninstallTokenRevealUninstallTokenReqV1 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        audit_message: value.auditMessage,
        device_id: value.deviceId,
    };
}