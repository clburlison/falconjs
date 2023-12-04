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
 * @interface DomainDetectsEntitiesPatchRequest
 */
export interface DomainDetectsEntitiesPatchRequest {
    /**
     *
     * @type {string}
     * @memberof DomainDetectsEntitiesPatchRequest
     */
    assignedToUuid?: string;
    /**
     *
     * @type {string}
     * @memberof DomainDetectsEntitiesPatchRequest
     */
    comment?: string;
    /**
     *
     * @type {Array<string>}
     * @memberof DomainDetectsEntitiesPatchRequest
     */
    ids?: Array<string>;
    /**
     *
     * @type {Array<string>}
     * @memberof DomainDetectsEntitiesPatchRequest
     */
    newBehaviorsProcessed?: Array<string>;
    /**
     *
     * @type {boolean}
     * @memberof DomainDetectsEntitiesPatchRequest
     */
    showInUi?: boolean;
    /**
     *
     * @type {string}
     * @memberof DomainDetectsEntitiesPatchRequest
     */
    status?: string;
}

/**
 * Check if a given object implements the DomainDetectsEntitiesPatchRequest interface.
 */
export function instanceOfDomainDetectsEntitiesPatchRequest(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function DomainDetectsEntitiesPatchRequestFromJSON(json: any): DomainDetectsEntitiesPatchRequest {
    return DomainDetectsEntitiesPatchRequestFromJSONTyped(json, false);
}

export function DomainDetectsEntitiesPatchRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): DomainDetectsEntitiesPatchRequest {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        assignedToUuid: !exists(json, "assigned_to_uuid") ? undefined : json["assigned_to_uuid"],
        comment: !exists(json, "comment") ? undefined : json["comment"],
        ids: !exists(json, "ids") ? undefined : json["ids"],
        newBehaviorsProcessed: !exists(json, "new_behaviors_processed") ? undefined : json["new_behaviors_processed"],
        showInUi: !exists(json, "show_in_ui") ? undefined : json["show_in_ui"],
        status: !exists(json, "status") ? undefined : json["status"],
    };
}

export function DomainDetectsEntitiesPatchRequestToJSON(value?: DomainDetectsEntitiesPatchRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        assigned_to_uuid: value.assignedToUuid,
        comment: value.comment,
        ids: value.ids,
        new_behaviors_processed: value.newBehaviorsProcessed,
        show_in_ui: value.showInUi,
        status: value.status,
    };
}
