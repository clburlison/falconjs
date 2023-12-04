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
 * @interface ModelsAPIImageAssessment
 */
export interface ModelsAPIImageAssessment {
    /**
     *
     * @type {number}
     * @memberof ModelsAPIImageAssessment
     */
    assessed: number;
    /**
     *
     * @type {number}
     * @memberof ModelsAPIImageAssessment
     */
    errorImagePull: number;
    /**
     *
     * @type {number}
     * @memberof ModelsAPIImageAssessment
     */
    errorImagePush: number;
    /**
     *
     * @type {number}
     * @memberof ModelsAPIImageAssessment
     */
    errorMissingConfig: number;
    /**
     *
     * @type {number}
     * @memberof ModelsAPIImageAssessment
     */
    errorUnsupportedSchemaVersion: number;
    /**
     *
     * @type {string}
     * @memberof ModelsAPIImageAssessment
     */
    timeStamp: string;
}

/**
 * Check if a given object implements the ModelsAPIImageAssessment interface.
 */
export function instanceOfModelsAPIImageAssessment(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "assessed" in value;
    isInstance = isInstance && "errorImagePull" in value;
    isInstance = isInstance && "errorImagePush" in value;
    isInstance = isInstance && "errorMissingConfig" in value;
    isInstance = isInstance && "errorUnsupportedSchemaVersion" in value;
    isInstance = isInstance && "timeStamp" in value;

    return isInstance;
}

export function ModelsAPIImageAssessmentFromJSON(json: any): ModelsAPIImageAssessment {
    return ModelsAPIImageAssessmentFromJSONTyped(json, false);
}

export function ModelsAPIImageAssessmentFromJSONTyped(json: any, ignoreDiscriminator: boolean): ModelsAPIImageAssessment {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        assessed: json["assessed"],
        errorImagePull: json["error_image_pull"],
        errorImagePush: json["error_image_push"],
        errorMissingConfig: json["error_missing_config"],
        errorUnsupportedSchemaVersion: json["error_unsupported_schema_version"],
        timeStamp: json["time_stamp"],
    };
}

export function ModelsAPIImageAssessmentToJSON(value?: ModelsAPIImageAssessment | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        assessed: value.assessed,
        error_image_pull: value.errorImagePull,
        error_image_push: value.errorImagePush,
        error_missing_config: value.errorMissingConfig,
        error_unsupported_schema_version: value.errorUnsupportedSchemaVersion,
        time_stamp: value.timeStamp,
    };
}
