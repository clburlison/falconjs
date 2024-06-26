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
 * @interface FalconxCertificate
 */
export interface FalconxCertificate {
    /**
     *
     * @type {string}
     * @memberof FalconxCertificate
     */
    issuer?: string;
    /**
     *
     * @type {string}
     * @memberof FalconxCertificate
     */
    md5?: string;
    /**
     *
     * @type {string}
     * @memberof FalconxCertificate
     */
    owner?: string;
    /**
     *
     * @type {string}
     * @memberof FalconxCertificate
     */
    serialNumber?: string;
    /**
     *
     * @type {string}
     * @memberof FalconxCertificate
     */
    sha1?: string;
    /**
     *
     * @type {Date}
     * @memberof FalconxCertificate
     */
    validFrom?: Date;
    /**
     *
     * @type {Date}
     * @memberof FalconxCertificate
     */
    validUntil?: Date;
}

/**
 * Check if a given object implements the FalconxCertificate interface.
 */
export function instanceOfFalconxCertificate(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function FalconxCertificateFromJSON(json: any): FalconxCertificate {
    return FalconxCertificateFromJSONTyped(json, false);
}

export function FalconxCertificateFromJSONTyped(json: any, ignoreDiscriminator: boolean): FalconxCertificate {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        issuer: !exists(json, "issuer") ? undefined : json["issuer"],
        md5: !exists(json, "md5") ? undefined : json["md5"],
        owner: !exists(json, "owner") ? undefined : json["owner"],
        serialNumber: !exists(json, "serial_number") ? undefined : json["serial_number"],
        sha1: !exists(json, "sha1") ? undefined : json["sha1"],
        validFrom: !exists(json, "valid_from") ? undefined : new Date(json["valid_from"]),
        validUntil: !exists(json, "valid_until") ? undefined : new Date(json["valid_until"]),
    };
}

export function FalconxCertificateToJSON(value?: FalconxCertificate | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        issuer: value.issuer,
        md5: value.md5,
        owner: value.owner,
        serial_number: value.serialNumber,
        sha1: value.sha1,
        valid_from: value.validFrom === undefined ? undefined : value.validFrom.toISOString(),
        valid_until: value.validUntil === undefined ? undefined : value.validUntil.toISOString(),
    };
}
