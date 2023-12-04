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
import type { FwmgrDomainField } from "./FwmgrDomainField";
import { FwmgrDomainFieldFromJSON, FwmgrDomainFieldFromJSONTyped, FwmgrDomainFieldToJSON } from "./FwmgrDomainField";
import type { FwmgrDomainMonitoring } from "./FwmgrDomainMonitoring";
import { FwmgrDomainMonitoringFromJSON, FwmgrDomainMonitoringFromJSONTyped, FwmgrDomainMonitoringToJSON } from "./FwmgrDomainMonitoring";

/**
 *
 * @export
 * @interface FwmgrApiFirewallFieldsV1
 */
export interface FwmgrApiFirewallFieldsV1 {
    /**
     *
     * @type {FwmgrDomainMonitoring}
     * @memberof FwmgrApiFirewallFieldsV1
     */
    defaultMonitor: FwmgrDomainMonitoring;
    /**
     *
     * @type {string}
     * @memberof FwmgrApiFirewallFieldsV1
     */
    id: string;
    /**
     *
     * @type {string}
     * @memberof FwmgrApiFirewallFieldsV1
     */
    platform: string;
    /**
     *
     * @type {Array<FwmgrDomainField>}
     * @memberof FwmgrApiFirewallFieldsV1
     */
    platformFields: Array<FwmgrDomainField>;
}

/**
 * Check if a given object implements the FwmgrApiFirewallFieldsV1 interface.
 */
export function instanceOfFwmgrApiFirewallFieldsV1(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "defaultMonitor" in value;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "platform" in value;
    isInstance = isInstance && "platformFields" in value;

    return isInstance;
}

export function FwmgrApiFirewallFieldsV1FromJSON(json: any): FwmgrApiFirewallFieldsV1 {
    return FwmgrApiFirewallFieldsV1FromJSONTyped(json, false);
}

export function FwmgrApiFirewallFieldsV1FromJSONTyped(json: any, ignoreDiscriminator: boolean): FwmgrApiFirewallFieldsV1 {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        defaultMonitor: FwmgrDomainMonitoringFromJSON(json["default_monitor"]),
        id: json["id"],
        platform: json["platform"],
        platformFields: (json["platform_fields"] as Array<any>).map(FwmgrDomainFieldFromJSON),
    };
}

export function FwmgrApiFirewallFieldsV1ToJSON(value?: FwmgrApiFirewallFieldsV1 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        default_monitor: FwmgrDomainMonitoringToJSON(value.defaultMonitor),
        id: value.id,
        platform: value.platform,
        platform_fields: (value.platformFields as Array<any>).map(FwmgrDomainFieldToJSON),
    };
}
