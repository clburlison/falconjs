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
 * @interface DomainSensorInstallerV1
 */
export interface DomainSensorInstallerV1 {
    /**
     * installer description
     * @type {string}
     * @memberof DomainSensorInstallerV1
     */
    description: string;
    /**
     * file size
     * @type {number}
     * @memberof DomainSensorInstallerV1
     */
    fileSize: number;
    /**
     * file type
     * @type {string}
     * @memberof DomainSensorInstallerV1
     */
    fileType: string;
    /**
     * installer file name
     * @type {string}
     * @memberof DomainSensorInstallerV1
     */
    name: string;
    /**
     *
     * @type {string}
     * @memberof DomainSensorInstallerV1
     */
    os: string;
    /**
     *
     * @type {string}
     * @memberof DomainSensorInstallerV1
     */
    osVersion: string;
    /**
     * supported platform
     * @type {string}
     * @memberof DomainSensorInstallerV1
     */
    platform: string;
    /**
     * release date
     * @type {Date}
     * @memberof DomainSensorInstallerV1
     */
    releaseDate: Date;
    /**
     * sha256
     * @type {string}
     * @memberof DomainSensorInstallerV1
     */
    sha256: string;
    /**
     * version of the installer
     * @type {string}
     * @memberof DomainSensorInstallerV1
     */
    version: string;
}

/**
 * Check if a given object implements the DomainSensorInstallerV1 interface.
 */
export function instanceOfDomainSensorInstallerV1(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "description" in value;
    isInstance = isInstance && "fileSize" in value;
    isInstance = isInstance && "fileType" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "os" in value;
    isInstance = isInstance && "osVersion" in value;
    isInstance = isInstance && "platform" in value;
    isInstance = isInstance && "releaseDate" in value;
    isInstance = isInstance && "sha256" in value;
    isInstance = isInstance && "version" in value;

    return isInstance;
}

export function DomainSensorInstallerV1FromJSON(json: any): DomainSensorInstallerV1 {
    return DomainSensorInstallerV1FromJSONTyped(json, false);
}

export function DomainSensorInstallerV1FromJSONTyped(json: any, ignoreDiscriminator: boolean): DomainSensorInstallerV1 {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        description: json["description"],
        fileSize: json["file_size"],
        fileType: json["file_type"],
        name: json["name"],
        os: json["os"],
        osVersion: json["os_version"],
        platform: json["platform"],
        releaseDate: new Date(json["release_date"]),
        sha256: json["sha256"],
        version: json["version"],
    };
}

export function DomainSensorInstallerV1ToJSON(value?: DomainSensorInstallerV1 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        description: value.description,
        file_size: value.fileSize,
        file_type: value.fileType,
        name: value.name,
        os: value.os,
        os_version: value.osVersion,
        platform: value.platform,
        release_date: value.releaseDate.toISOString(),
        sha256: value.sha256,
        version: value.version,
    };
}
