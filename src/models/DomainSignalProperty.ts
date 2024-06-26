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
 * @interface DomainSignalProperty
 */
export interface DomainSignalProperty {
    /**
     *
     * @type {string}
     * @memberof DomainSignalProperty
     */
    criteria: string;
    /**
     *
     * @type {string}
     * @memberof DomainSignalProperty
     */
    groupName: string;
    /**
     *
     * @type {string}
     * @memberof DomainSignalProperty
     */
    meetsCriteria: string;
    /**
     *
     * @type {string}
     * @memberof DomainSignalProperty
     */
    signalId: string;
    /**
     *
     * @type {string}
     * @memberof DomainSignalProperty
     */
    signalName: string;
}

/**
 * Check if a given object implements the DomainSignalProperty interface.
 */
export function instanceOfDomainSignalProperty(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "criteria" in value;
    isInstance = isInstance && "groupName" in value;
    isInstance = isInstance && "meetsCriteria" in value;
    isInstance = isInstance && "signalId" in value;
    isInstance = isInstance && "signalName" in value;

    return isInstance;
}

export function DomainSignalPropertyFromJSON(json: any): DomainSignalProperty {
    return DomainSignalPropertyFromJSONTyped(json, false);
}

export function DomainSignalPropertyFromJSONTyped(json: any, ignoreDiscriminator: boolean): DomainSignalProperty {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        criteria: json["criteria"],
        groupName: json["group_name"],
        meetsCriteria: json["meets_criteria"],
        signalId: json["signal_id"],
        signalName: json["signal_name"],
    };
}

export function DomainSignalPropertyToJSON(value?: DomainSignalProperty | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        criteria: value.criteria,
        group_name: value.groupName,
        meets_criteria: value.meetsCriteria,
        signal_id: value.signalId,
        signal_name: value.signalName,
    };
}
