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
import type { DomainScriptHelp } from "./DomainScriptHelp";
import { DomainScriptHelpFromJSON, DomainScriptHelpFromJSONTyped, DomainScriptHelpToJSON } from "./DomainScriptHelp";

/**
 *
 * @export
 * @interface DomainInitResponse
 */
export interface DomainInitResponse {
    /**
     *
     * @type {Date}
     * @memberof DomainInitResponse
     */
    createdAt: Date;
    /**
     *
     * @type {number}
     * @memberof DomainInitResponse
     */
    existingAidSessions: number;
    /**
     *
     * @type {boolean}
     * @memberof DomainInitResponse
     */
    offlineQueued: boolean;
    /**
     *
     * @type {Array<string>}
     * @memberof DomainInitResponse
     */
    previousCommands?: Array<string>;
    /**
     *
     * @type {string}
     * @memberof DomainInitResponse
     */
    pwd?: string;
    /**
     *
     * @type {Array<DomainScriptHelp>}
     * @memberof DomainInitResponse
     */
    scripts: Array<DomainScriptHelp>;
    /**
     *
     * @type {string}
     * @memberof DomainInitResponse
     */
    sessionId: string;
}

/**
 * Check if a given object implements the DomainInitResponse interface.
 */
export function instanceOfDomainInitResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "createdAt" in value;
    isInstance = isInstance && "existingAidSessions" in value;
    isInstance = isInstance && "offlineQueued" in value;
    isInstance = isInstance && "scripts" in value;
    isInstance = isInstance && "sessionId" in value;

    return isInstance;
}

export function DomainInitResponseFromJSON(json: any): DomainInitResponse {
    return DomainInitResponseFromJSONTyped(json, false);
}

export function DomainInitResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): DomainInitResponse {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        createdAt: new Date(json["created_at"]),
        existingAidSessions: json["existing_aid_sessions"],
        offlineQueued: json["offline_queued"],
        previousCommands: !exists(json, "previous_commands") ? undefined : json["previous_commands"],
        pwd: !exists(json, "pwd") ? undefined : json["pwd"],
        scripts: (json["scripts"] as Array<any>).map(DomainScriptHelpFromJSON),
        sessionId: json["session_id"],
    };
}

export function DomainInitResponseToJSON(value?: DomainInitResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        created_at: value.createdAt.toISOString(),
        existing_aid_sessions: value.existingAidSessions,
        offline_queued: value.offlineQueued,
        previous_commands: value.previousCommands,
        pwd: value.pwd,
        scripts: (value.scripts as Array<any>).map(DomainScriptHelpToJSON),
        session_id: value.sessionId,
    };
}
