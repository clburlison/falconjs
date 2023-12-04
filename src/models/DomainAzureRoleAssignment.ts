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
 * @interface DomainAzureRoleAssignment
 */
export interface DomainAzureRoleAssignment {
    /**
     *
     * @type {string}
     * @memberof DomainAzureRoleAssignment
     */
    name?: string;
    /**
     *
     * @type {string}
     * @memberof DomainAzureRoleAssignment
     */
    roleDefinitionId?: string;
    /**
     *
     * @type {string}
     * @memberof DomainAzureRoleAssignment
     */
    status: string;
    /**
     *
     * @type {string}
     * @memberof DomainAzureRoleAssignment
     */
    subscriptionId?: string;
}

/**
 * Check if a given object implements the DomainAzureRoleAssignment interface.
 */
export function instanceOfDomainAzureRoleAssignment(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "status" in value;

    return isInstance;
}

export function DomainAzureRoleAssignmentFromJSON(json: any): DomainAzureRoleAssignment {
    return DomainAzureRoleAssignmentFromJSONTyped(json, false);
}

export function DomainAzureRoleAssignmentFromJSONTyped(json: any, ignoreDiscriminator: boolean): DomainAzureRoleAssignment {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        name: !exists(json, "name") ? undefined : json["name"],
        roleDefinitionId: !exists(json, "role_definition_id") ? undefined : json["role_definition_id"],
        status: json["status"],
        subscriptionId: !exists(json, "subscription_id") ? undefined : json["subscription_id"],
    };
}

export function DomainAzureRoleAssignmentToJSON(value?: DomainAzureRoleAssignment | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        name: value.name,
        role_definition_id: value.roleDefinitionId,
        status: value.status,
        subscription_id: value.subscriptionId,
    };
}
