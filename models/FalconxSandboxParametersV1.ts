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
/**
 *
 * @export
 * @interface FalconxSandboxParametersV1
 */
export interface FalconxSandboxParametersV1 {
    /**
     *
     * @type {string}
     * @memberof FalconxSandboxParametersV1
     */
    actionScript?: string;
    /**
     *
     * @type {string}
     * @memberof FalconxSandboxParametersV1
     */
    commandLine?: string;
    /**
     *
     * @type {string}
     * @memberof FalconxSandboxParametersV1
     */
    documentPassword?: string;
    /**
     *
     * @type {boolean}
     * @memberof FalconxSandboxParametersV1
     */
    enableTor?: boolean;
    /**
     *
     * @type {number}
     * @memberof FalconxSandboxParametersV1
     */
    environmentId?: number;
    /**
     *
     * @type {string}
     * @memberof FalconxSandboxParametersV1
     */
    networkSettings?: string;
    /**
     *
     * @type {string}
     * @memberof FalconxSandboxParametersV1
     */
    sha256?: string;
    /**
     *
     * @type {string}
     * @memberof FalconxSandboxParametersV1
     */
    submitName?: string;
    /**
     *
     * @type {string}
     * @memberof FalconxSandboxParametersV1
     */
    systemDate?: string;
    /**
     *
     * @type {string}
     * @memberof FalconxSandboxParametersV1
     */
    systemTime?: string;
    /**
     *
     * @type {string}
     * @memberof FalconxSandboxParametersV1
     */
    url?: string;
}

export function FalconxSandboxParametersV1FromJSON(json: any): FalconxSandboxParametersV1 {
    return FalconxSandboxParametersV1FromJSONTyped(json, false);
}

export function FalconxSandboxParametersV1FromJSONTyped(json: any, ignoreDiscriminator: boolean): FalconxSandboxParametersV1 {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        actionScript: !exists(json, "action_script") ? undefined : json["action_script"],
        commandLine: !exists(json, "command_line") ? undefined : json["command_line"],
        documentPassword: !exists(json, "document_password") ? undefined : json["document_password"],
        enableTor: !exists(json, "enable_tor") ? undefined : json["enable_tor"],
        environmentId: !exists(json, "environment_id") ? undefined : json["environment_id"],
        networkSettings: !exists(json, "network_settings") ? undefined : json["network_settings"],
        sha256: !exists(json, "sha256") ? undefined : json["sha256"],
        submitName: !exists(json, "submit_name") ? undefined : json["submit_name"],
        systemDate: !exists(json, "system_date") ? undefined : json["system_date"],
        systemTime: !exists(json, "system_time") ? undefined : json["system_time"],
        url: !exists(json, "url") ? undefined : json["url"],
    };
}

export function FalconxSandboxParametersV1ToJSON(value?: FalconxSandboxParametersV1 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        action_script: value.actionScript,
        command_line: value.commandLine,
        document_password: value.documentPassword,
        enable_tor: value.enableTor,
        environment_id: value.environmentId,
        network_settings: value.networkSettings,
        sha256: value.sha256,
        submit_name: value.submitName,
        system_date: value.systemDate,
        system_time: value.systemTime,
        url: value.url,
    };
}
