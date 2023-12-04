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
 * @interface ApiExposedDataRecordBotOperatingSystemV1
 */
export interface ApiExposedDataRecordBotOperatingSystemV1 {
    /**
     *
     * @type {Array<string>}
     * @memberof ApiExposedDataRecordBotOperatingSystemV1
     */
    antivirus?: Array<string>;
    /**
     *
     * @type {string}
     * @memberof ApiExposedDataRecordBotOperatingSystemV1
     */
    computerName?: string;
    /**
     *
     * @type {string}
     * @memberof ApiExposedDataRecordBotOperatingSystemV1
     */
    domain?: string;
    /**
     *
     * @type {string}
     * @memberof ApiExposedDataRecordBotOperatingSystemV1
     */
    hardwareId?: string;
    /**
     *
     * @type {Array<string>}
     * @memberof ApiExposedDataRecordBotOperatingSystemV1
     */
    installedSoftware?: Array<string>;
    /**
     *
     * @type {string}
     * @memberof ApiExposedDataRecordBotOperatingSystemV1
     */
    language?: string;
    /**
     *
     * @type {Array<string>}
     * @memberof ApiExposedDataRecordBotOperatingSystemV1
     */
    layouts?: Array<string>;
    /**
     *
     * @type {string}
     * @memberof ApiExposedDataRecordBotOperatingSystemV1
     */
    osArchitecture?: string;
    /**
     *
     * @type {string}
     * @memberof ApiExposedDataRecordBotOperatingSystemV1
     */
    osVersion?: string;
    /**
     *
     * @type {string}
     * @memberof ApiExposedDataRecordBotOperatingSystemV1
     */
    timezone?: string;
    /**
     *
     * @type {string}
     * @memberof ApiExposedDataRecordBotOperatingSystemV1
     */
    uac?: string;
    /**
     *
     * @type {string}
     * @memberof ApiExposedDataRecordBotOperatingSystemV1
     */
    username?: string;
}

/**
 * Check if a given object implements the ApiExposedDataRecordBotOperatingSystemV1 interface.
 */
export function instanceOfApiExposedDataRecordBotOperatingSystemV1(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ApiExposedDataRecordBotOperatingSystemV1FromJSON(json: any): ApiExposedDataRecordBotOperatingSystemV1 {
    return ApiExposedDataRecordBotOperatingSystemV1FromJSONTyped(json, false);
}

export function ApiExposedDataRecordBotOperatingSystemV1FromJSONTyped(json: any, ignoreDiscriminator: boolean): ApiExposedDataRecordBotOperatingSystemV1 {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        antivirus: !exists(json, "antivirus") ? undefined : json["antivirus"],
        computerName: !exists(json, "computer_name") ? undefined : json["computer_name"],
        domain: !exists(json, "domain") ? undefined : json["domain"],
        hardwareId: !exists(json, "hardware_id") ? undefined : json["hardware_id"],
        installedSoftware: !exists(json, "installed_software") ? undefined : json["installed_software"],
        language: !exists(json, "language") ? undefined : json["language"],
        layouts: !exists(json, "layouts") ? undefined : json["layouts"],
        osArchitecture: !exists(json, "os_architecture") ? undefined : json["os_architecture"],
        osVersion: !exists(json, "os_version") ? undefined : json["os_version"],
        timezone: !exists(json, "timezone") ? undefined : json["timezone"],
        uac: !exists(json, "uac") ? undefined : json["uac"],
        username: !exists(json, "username") ? undefined : json["username"],
    };
}

export function ApiExposedDataRecordBotOperatingSystemV1ToJSON(value?: ApiExposedDataRecordBotOperatingSystemV1 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        antivirus: value.antivirus,
        computer_name: value.computerName,
        domain: value.domain,
        hardware_id: value.hardwareId,
        installed_software: value.installedSoftware,
        language: value.language,
        layouts: value.layouts,
        os_architecture: value.osArchitecture,
        os_version: value.osVersion,
        timezone: value.timezone,
        uac: value.uac,
        username: value.username,
    };
}