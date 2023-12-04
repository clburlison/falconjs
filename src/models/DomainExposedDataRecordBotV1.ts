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
import type { DomainExposedDataRecordBotLocationV1 } from "./DomainExposedDataRecordBotLocationV1";
import { DomainExposedDataRecordBotLocationV1FromJSON, DomainExposedDataRecordBotLocationV1FromJSONTyped, DomainExposedDataRecordBotLocationV1ToJSON } from "./DomainExposedDataRecordBotLocationV1";
import type { DomainExposedDataRecordBotOperatingSystemV1 } from "./DomainExposedDataRecordBotOperatingSystemV1";
import {
    DomainExposedDataRecordBotOperatingSystemV1FromJSON,
    DomainExposedDataRecordBotOperatingSystemV1FromJSONTyped,
    DomainExposedDataRecordBotOperatingSystemV1ToJSON,
} from "./DomainExposedDataRecordBotOperatingSystemV1";

/**
 *
 * @export
 * @interface DomainExposedDataRecordBotV1
 */
export interface DomainExposedDataRecordBotV1 {
    /**
     *
     * @type {string}
     * @memberof DomainExposedDataRecordBotV1
     */
    botId: string;
    /**
     *
     * @type {Array<string>}
     * @memberof DomainExposedDataRecordBotV1
     */
    domainDetects: Array<string>;
    /**
     *
     * @type {string}
     * @memberof DomainExposedDataRecordBotV1
     */
    infectionBuildId: string;
    /**
     *
     * @type {Date}
     * @memberof DomainExposedDataRecordBotV1
     */
    infectionDate: Date;
    /**
     *
     * @type {string}
     * @memberof DomainExposedDataRecordBotV1
     */
    infectionPath: string;
    /**
     *
     * @type {string}
     * @memberof DomainExposedDataRecordBotV1
     */
    ip?: string;
    /**
     *
     * @type {DomainExposedDataRecordBotLocationV1}
     * @memberof DomainExposedDataRecordBotV1
     */
    location: DomainExposedDataRecordBotLocationV1;
    /**
     *
     * @type {DomainExposedDataRecordBotOperatingSystemV1}
     * @memberof DomainExposedDataRecordBotV1
     */
    operatingSystem: DomainExposedDataRecordBotOperatingSystemV1;
}

/**
 * Check if a given object implements the DomainExposedDataRecordBotV1 interface.
 */
export function instanceOfDomainExposedDataRecordBotV1(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "botId" in value;
    isInstance = isInstance && "domainDetects" in value;
    isInstance = isInstance && "infectionBuildId" in value;
    isInstance = isInstance && "infectionDate" in value;
    isInstance = isInstance && "infectionPath" in value;
    isInstance = isInstance && "location" in value;
    isInstance = isInstance && "operatingSystem" in value;

    return isInstance;
}

export function DomainExposedDataRecordBotV1FromJSON(json: any): DomainExposedDataRecordBotV1 {
    return DomainExposedDataRecordBotV1FromJSONTyped(json, false);
}

export function DomainExposedDataRecordBotV1FromJSONTyped(json: any, ignoreDiscriminator: boolean): DomainExposedDataRecordBotV1 {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        botId: json["bot_id"],
        domainDetects: json["domain_detects"],
        infectionBuildId: json["infection_build_id"],
        infectionDate: new Date(json["infection_date"]),
        infectionPath: json["infection_path"],
        ip: !exists(json, "ip") ? undefined : json["ip"],
        location: DomainExposedDataRecordBotLocationV1FromJSON(json["location"]),
        operatingSystem: DomainExposedDataRecordBotOperatingSystemV1FromJSON(json["operating_system"]),
    };
}

export function DomainExposedDataRecordBotV1ToJSON(value?: DomainExposedDataRecordBotV1 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        bot_id: value.botId,
        domain_detects: value.domainDetects,
        infection_build_id: value.infectionBuildId,
        infection_date: value.infectionDate.toISOString(),
        infection_path: value.infectionPath,
        ip: value.ip,
        location: DomainExposedDataRecordBotLocationV1ToJSON(value.location),
        operating_system: DomainExposedDataRecordBotOperatingSystemV1ToJSON(value.operatingSystem),
    };
}