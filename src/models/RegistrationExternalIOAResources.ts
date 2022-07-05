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
import type { RegistrationIOAEvent } from "./RegistrationIOAEvent";
import { RegistrationIOAEventFromJSON, RegistrationIOAEventFromJSONTyped, RegistrationIOAEventToJSON } from "./RegistrationIOAEvent";

/**
 *
 * @export
 * @interface RegistrationExternalIOAResources
 */
export interface RegistrationExternalIOAResources {
    /**
     *
     * @type {string}
     * @memberof RegistrationExternalIOAResources
     */
    confidence?: string;
    /**
     *
     * @type {Array<RegistrationIOAEvent>}
     * @memberof RegistrationExternalIOAResources
     */
    events: Array<RegistrationIOAEvent>;
    /**
     *
     * @type {number}
     * @memberof RegistrationExternalIOAResources
     */
    maxScore?: number;
}

/**
 * Check if a given object implements the RegistrationExternalIOAResources interface.
 */
export function instanceOfRegistrationExternalIOAResources(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "events" in value;

    return isInstance;
}

export function RegistrationExternalIOAResourcesFromJSON(json: any): RegistrationExternalIOAResources {
    return RegistrationExternalIOAResourcesFromJSONTyped(json, false);
}

export function RegistrationExternalIOAResourcesFromJSONTyped(json: any, ignoreDiscriminator: boolean): RegistrationExternalIOAResources {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        confidence: !exists(json, "confidence") ? undefined : json["confidence"],
        events: (json["events"] as Array<any>).map(RegistrationIOAEventFromJSON),
        maxScore: !exists(json, "max_score") ? undefined : json["max_score"],
    };
}

export function RegistrationExternalIOAResourcesToJSON(value?: RegistrationExternalIOAResources | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        confidence: value.confidence,
        events: (value.events as Array<any>).map(RegistrationIOAEventToJSON),
        max_score: value.maxScore,
    };
}
