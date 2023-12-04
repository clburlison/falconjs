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
 * @interface SensorUpdateBuildRespV1
 */
export interface SensorUpdateBuildRespV1 {
    /**
     *
     * @type {string}
     * @memberof SensorUpdateBuildRespV1
     */
    build: string;
    /**
     *
     * @type {string}
     * @memberof SensorUpdateBuildRespV1
     */
    platform: string;
    /**
     *
     * @type {string}
     * @memberof SensorUpdateBuildRespV1
     */
    sensorVersion: string;
    /**
     * The release stage this build is in
     * @type {string}
     * @memberof SensorUpdateBuildRespV1
     */
    stage: SensorUpdateBuildRespV1StageEnum;
}

/**
 * @export
 */
export const SensorUpdateBuildRespV1StageEnum = {
    Prod: "prod",
    EarlyAdopter: "early_adopter",
} as const;
export type SensorUpdateBuildRespV1StageEnum = (typeof SensorUpdateBuildRespV1StageEnum)[keyof typeof SensorUpdateBuildRespV1StageEnum];

/**
 * Check if a given object implements the SensorUpdateBuildRespV1 interface.
 */
export function instanceOfSensorUpdateBuildRespV1(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "build" in value;
    isInstance = isInstance && "platform" in value;
    isInstance = isInstance && "sensorVersion" in value;
    isInstance = isInstance && "stage" in value;

    return isInstance;
}

export function SensorUpdateBuildRespV1FromJSON(json: any): SensorUpdateBuildRespV1 {
    return SensorUpdateBuildRespV1FromJSONTyped(json, false);
}

export function SensorUpdateBuildRespV1FromJSONTyped(json: any, ignoreDiscriminator: boolean): SensorUpdateBuildRespV1 {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        build: json["build"],
        platform: json["platform"],
        sensorVersion: json["sensor_version"],
        stage: json["stage"],
    };
}

export function SensorUpdateBuildRespV1ToJSON(value?: SensorUpdateBuildRespV1 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        build: value.build,
        platform: value.platform,
        sensor_version: value.sensorVersion,
        stage: value.stage,
    };
}
