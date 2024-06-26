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
import type { MessagesDetection } from "./MessagesDetection";
import { MessagesDetectionFromJSON, MessagesDetectionFromJSONTyped, MessagesDetectionToJSON } from "./MessagesDetection";
import type { MessagesIncident } from "./MessagesIncident";
import { MessagesIncidentFromJSON, MessagesIncidentFromJSONTyped, MessagesIncidentToJSON } from "./MessagesIncident";

/**
 *
 * @export
 * @interface DomainCaseCreationRequest
 */
export interface DomainCaseCreationRequest {
    /**
     *
     * @type {string}
     * @memberof DomainCaseCreationRequest
     */
    body: string;
    /**
     *
     * @type {Array<MessagesDetection>}
     * @memberof DomainCaseCreationRequest
     */
    detections: Array<MessagesDetection>;
    /**
     *
     * @type {Array<MessagesIncident>}
     * @memberof DomainCaseCreationRequest
     */
    incidents: Array<MessagesIncident>;
    /**
     *
     * @type {string}
     * @memberof DomainCaseCreationRequest
     */
    title: string;
    /**
     *
     * @type {string}
     * @memberof DomainCaseCreationRequest
     */
    type: string;
    /**
     *
     * @type {string}
     * @memberof DomainCaseCreationRequest
     */
    userUuid: string;
}

/**
 * Check if a given object implements the DomainCaseCreationRequest interface.
 */
export function instanceOfDomainCaseCreationRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "body" in value;
    isInstance = isInstance && "detections" in value;
    isInstance = isInstance && "incidents" in value;
    isInstance = isInstance && "title" in value;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "userUuid" in value;

    return isInstance;
}

export function DomainCaseCreationRequestFromJSON(json: any): DomainCaseCreationRequest {
    return DomainCaseCreationRequestFromJSONTyped(json, false);
}

export function DomainCaseCreationRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): DomainCaseCreationRequest {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        body: json["body"],
        detections: (json["detections"] as Array<any>).map(MessagesDetectionFromJSON),
        incidents: (json["incidents"] as Array<any>).map(MessagesIncidentFromJSON),
        title: json["title"],
        type: json["type"],
        userUuid: json["user_uuid"],
    };
}

export function DomainCaseCreationRequestToJSON(value?: DomainCaseCreationRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        body: value.body,
        detections: (value.detections as Array<any>).map(MessagesDetectionToJSON),
        incidents: (value.incidents as Array<any>).map(MessagesIncidentToJSON),
        title: value.title,
        type: value.type,
        user_uuid: value.userUuid,
    };
}
