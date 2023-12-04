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
 * @interface DomainExposedDataRecordBotOperatingSystemV1
 */
export interface DomainExposedDataRecordBotOperatingSystemV1 {
    /**
     *
     * @type {Array<string>}
     * @memberof DomainExposedDataRecordBotOperatingSystemV1
     */
    antivirus: Array<string>;
    /**
     *
     * @type {string}
     * @memberof DomainExposedDataRecordBotOperatingSystemV1
     */
    computerName: string;
    /**
     *
     * @type {string}
     * @memberof DomainExposedDataRecordBotOperatingSystemV1
     */
    domain: string;
    /**
     *
     * @type {string}
     * @memberof DomainExposedDataRecordBotOperatingSystemV1
     */
    hardwareId: string;
    /**
     *
     * @type {Array<string>}
     * @memberof DomainExposedDataRecordBotOperatingSystemV1
     */
    installedSoftware: Array<string>;
    /**
     *
     * @type {string}
     * @memberof DomainExposedDataRecordBotOperatingSystemV1
     */
    language: string;
    /**
     *
     * @type {Array<string>}
     * @memberof DomainExposedDataRecordBotOperatingSystemV1
     */
    layouts: Array<string>;
    /**
     *
     * @type {string}
     * @memberof DomainExposedDataRecordBotOperatingSystemV1
     */
    osArchitecture: string;
    /**
     *
     * @type {string}
     * @memberof DomainExposedDataRecordBotOperatingSystemV1
     */
    osVersion: string;
    /**
     *
     * @type {string}
     * @memberof DomainExposedDataRecordBotOperatingSystemV1
     */
    timezone: string;
    /**
     *
     * @type {string}
     * @memberof DomainExposedDataRecordBotOperatingSystemV1
     */
    uac: string;
    /**
     *
     * @type {string}
     * @memberof DomainExposedDataRecordBotOperatingSystemV1
     */
    username: string;
}

/**
 * Check if a given object implements the DomainExposedDataRecordBotOperatingSystemV1 interface.
 */
export function instanceOfDomainExposedDataRecordBotOperatingSystemV1(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "antivirus" in value;
    isInstance = isInstance && "computerName" in value;
    isInstance = isInstance && "domain" in value;
    isInstance = isInstance && "hardwareId" in value;
    isInstance = isInstance && "installedSoftware" in value;
    isInstance = isInstance && "language" in value;
    isInstance = isInstance && "layouts" in value;
    isInstance = isInstance && "osArchitecture" in value;
    isInstance = isInstance && "osVersion" in value;
    isInstance = isInstance && "timezone" in value;
    isInstance = isInstance && "uac" in value;
    isInstance = isInstance && "username" in value;

    return isInstance;
}

export function DomainExposedDataRecordBotOperatingSystemV1FromJSON(json: any): DomainExposedDataRecordBotOperatingSystemV1 {
    return DomainExposedDataRecordBotOperatingSystemV1FromJSONTyped(json, false);
}

export function DomainExposedDataRecordBotOperatingSystemV1FromJSONTyped(json: any, ignoreDiscriminator: boolean): DomainExposedDataRecordBotOperatingSystemV1 {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        antivirus: json["antivirus"],
        computerName: json["computer_name"],
        domain: json["domain"],
        hardwareId: json["hardware_id"],
        installedSoftware: json["installed_software"],
        language: json["language"],
        layouts: json["layouts"],
        osArchitecture: json["os_architecture"],
        osVersion: json["os_version"],
        timezone: json["timezone"],
        uac: json["uac"],
        username: json["username"],
    };
}

export function DomainExposedDataRecordBotOperatingSystemV1ToJSON(value?: DomainExposedDataRecordBotOperatingSystemV1 | null): any {
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