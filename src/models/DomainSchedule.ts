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
 * @interface DomainSchedule
 */
export interface DomainSchedule {
    /**
     *
     * @type {boolean}
     * @memberof DomainSchedule
     */
    canStagger: boolean;
    /**
     *
     * @type {string}
     * @memberof DomainSchedule
     */
    definition: string;
    /**
     *
     * @type {string}
     * @memberof DomainSchedule
     */
    display: string;
}

/**
 * Check if a given object implements the DomainSchedule interface.
 */
export function instanceOfDomainSchedule(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "canStagger" in value;
    isInstance = isInstance && "definition" in value;
    isInstance = isInstance && "display" in value;

    return isInstance;
}

export function DomainScheduleFromJSON(json: any): DomainSchedule {
    return DomainScheduleFromJSONTyped(json, false);
}

export function DomainScheduleFromJSONTyped(json: any, ignoreDiscriminator: boolean): DomainSchedule {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        canStagger: json["can_stagger"],
        definition: json["definition"],
        display: json["display"],
    };
}

export function DomainScheduleToJSON(value?: DomainSchedule | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        can_stagger: value.canStagger,
        definition: value.definition,
        display: value.display,
    };
}
