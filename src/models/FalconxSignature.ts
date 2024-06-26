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
 * @interface FalconxSignature
 */
export interface FalconxSignature {
    /**
     *
     * @type {string}
     * @memberof FalconxSignature
     */
    attackId?: string;
    /**
     *
     * @type {string}
     * @memberof FalconxSignature
     */
    category?: string;
    /**
     *
     * @type {string}
     * @memberof FalconxSignature
     */
    description?: string;
    /**
     *
     * @type {string}
     * @memberof FalconxSignature
     */
    identifier?: string;
    /**
     *
     * @type {string}
     * @memberof FalconxSignature
     */
    name?: string;
    /**
     *
     * @type {string}
     * @memberof FalconxSignature
     */
    origin?: string;
    /**
     *
     * @type {number}
     * @memberof FalconxSignature
     */
    relevance?: number;
    /**
     *
     * @type {number}
     * @memberof FalconxSignature
     */
    threatLevel?: number;
    /**
     *
     * @type {string}
     * @memberof FalconxSignature
     */
    threatLevelHuman?: string;
    /**
     *
     * @type {number}
     * @memberof FalconxSignature
     */
    type?: number;
}

/**
 * Check if a given object implements the FalconxSignature interface.
 */
export function instanceOfFalconxSignature(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function FalconxSignatureFromJSON(json: any): FalconxSignature {
    return FalconxSignatureFromJSONTyped(json, false);
}

export function FalconxSignatureFromJSONTyped(json: any, ignoreDiscriminator: boolean): FalconxSignature {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        attackId: !exists(json, "attack_id") ? undefined : json["attack_id"],
        category: !exists(json, "category") ? undefined : json["category"],
        description: !exists(json, "description") ? undefined : json["description"],
        identifier: !exists(json, "identifier") ? undefined : json["identifier"],
        name: !exists(json, "name") ? undefined : json["name"],
        origin: !exists(json, "origin") ? undefined : json["origin"],
        relevance: !exists(json, "relevance") ? undefined : json["relevance"],
        threatLevel: !exists(json, "threat_level") ? undefined : json["threat_level"],
        threatLevelHuman: !exists(json, "threat_level_human") ? undefined : json["threat_level_human"],
        type: !exists(json, "type") ? undefined : json["type"],
    };
}

export function FalconxSignatureToJSON(value?: FalconxSignature | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        attack_id: value.attackId,
        category: value.category,
        description: value.description,
        identifier: value.identifier,
        name: value.name,
        origin: value.origin,
        relevance: value.relevance,
        threat_level: value.threatLevel,
        threat_level_human: value.threatLevelHuman,
        type: value.type,
    };
}
