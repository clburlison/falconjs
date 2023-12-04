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
import type { FalconxMalwareConfig } from "./FalconxMalwareConfig";
import { FalconxMalwareConfigFromJSON, FalconxMalwareConfigFromJSONTyped, FalconxMalwareConfigToJSON } from "./FalconxMalwareConfig";

/**
 *
 * @export
 * @interface FalconxIntelXReportV1
 */
export interface FalconxIntelXReportV1 {
    /**
     *
     * @type {FalconxMalwareConfig}
     * @memberof FalconxIntelXReportV1
     */
    malwareConfig?: FalconxMalwareConfig;
    /**
     *
     * @type {string}
     * @memberof FalconxIntelXReportV1
     */
    sha256?: string;
}

/**
 * Check if a given object implements the FalconxIntelXReportV1 interface.
 */
export function instanceOfFalconxIntelXReportV1(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function FalconxIntelXReportV1FromJSON(json: any): FalconxIntelXReportV1 {
    return FalconxIntelXReportV1FromJSONTyped(json, false);
}

export function FalconxIntelXReportV1FromJSONTyped(json: any, ignoreDiscriminator: boolean): FalconxIntelXReportV1 {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        malwareConfig: !exists(json, "malware_config") ? undefined : FalconxMalwareConfigFromJSON(json["malware_config"]),
        sha256: !exists(json, "sha256") ? undefined : json["sha256"],
    };
}

export function FalconxIntelXReportV1ToJSON(value?: FalconxIntelXReportV1 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        malware_config: FalconxMalwareConfigToJSON(value.malwareConfig),
        sha256: value.sha256,
    };
}