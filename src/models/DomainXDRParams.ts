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
 * @interface DomainXDRParams
 */
export interface DomainXDRParams {
    /**
     *
     * @type {string}
     * @memberof DomainXDRParams
     */
    assignTo: string;
    /**
     *
     * @type {string}
     * @memberof DomainXDRParams
     */
    assignToUuid: string;
    /**
     *
     * @type {string}
     * @memberof DomainXDRParams
     */
    comment: string;
    /**
     *
     * @type {string}
     * @memberof DomainXDRParams
     */
    executionOffset: string;
    /**
     *
     * @type {number}
     * @memberof DomainXDRParams
     */
    severity: number;
    /**
     *
     * @type {string}
     * @memberof DomainXDRParams
     */
    status: string;
    /**
     *
     * @type {string}
     * @memberof DomainXDRParams
     */
    tactic: string;
    /**
     *
     * @type {Array<string>}
     * @memberof DomainXDRParams
     */
    tags: Array<string>;
    /**
     *
     * @type {string}
     * @memberof DomainXDRParams
     */
    technique: string;
    /**
     *
     * @type {string}
     * @memberof DomainXDRParams
     */
    type: string;
}

/**
 * Check if a given object implements the DomainXDRParams interface.
 */
export function instanceOfDomainXDRParams(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "assignTo" in value;
    isInstance = isInstance && "assignToUuid" in value;
    isInstance = isInstance && "comment" in value;
    isInstance = isInstance && "executionOffset" in value;
    isInstance = isInstance && "severity" in value;
    isInstance = isInstance && "status" in value;
    isInstance = isInstance && "tactic" in value;
    isInstance = isInstance && "tags" in value;
    isInstance = isInstance && "technique" in value;
    isInstance = isInstance && "type" in value;

    return isInstance;
}

export function DomainXDRParamsFromJSON(json: any): DomainXDRParams {
    return DomainXDRParamsFromJSONTyped(json, false);
}

export function DomainXDRParamsFromJSONTyped(json: any, ignoreDiscriminator: boolean): DomainXDRParams {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        assignTo: json["assign_to"],
        assignToUuid: json["assign_to_uuid"],
        comment: json["comment"],
        executionOffset: json["execution_offset"],
        severity: json["severity"],
        status: json["status"],
        tactic: json["tactic"],
        tags: json["tags"],
        technique: json["technique"],
        type: json["type"],
    };
}

export function DomainXDRParamsToJSON(value?: DomainXDRParams | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        assign_to: value.assignTo,
        assign_to_uuid: value.assignToUuid,
        comment: value.comment,
        execution_offset: value.executionOffset,
        severity: value.severity,
        status: value.status,
        tactic: value.tactic,
        tags: value.tags,
        technique: value.technique,
        type: value.type,
    };
}
