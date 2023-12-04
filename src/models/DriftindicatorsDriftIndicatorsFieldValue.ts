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
import type { ModelsAPIFilterResponse } from "./ModelsAPIFilterResponse";
import { ModelsAPIFilterResponseFromJSON, ModelsAPIFilterResponseFromJSONTyped, ModelsAPIFilterResponseToJSON } from "./ModelsAPIFilterResponse";
import type { MsaAPIError } from "./MsaAPIError";
import { MsaAPIErrorFromJSON, MsaAPIErrorFromJSONTyped, MsaAPIErrorToJSON } from "./MsaAPIError";
import type { MsaMetaInfo } from "./MsaMetaInfo";
import { MsaMetaInfoFromJSON, MsaMetaInfoFromJSONTyped, MsaMetaInfoToJSON } from "./MsaMetaInfo";

/**
 *
 * @export
 * @interface DriftindicatorsDriftIndicatorsFieldValue
 */
export interface DriftindicatorsDriftIndicatorsFieldValue {
    /**
     *
     * @type {Array<ModelsAPIFilterResponse>}
     * @memberof DriftindicatorsDriftIndicatorsFieldValue
     */
    resources: Array<ModelsAPIFilterResponse>;
    /**
     *
     * @type {Array<MsaAPIError>}
     * @memberof DriftindicatorsDriftIndicatorsFieldValue
     */
    errors?: Array<MsaAPIError> | null;
    /**
     *
     * @type {MsaMetaInfo}
     * @memberof DriftindicatorsDriftIndicatorsFieldValue
     */
    meta: MsaMetaInfo;
}

/**
 * Check if a given object implements the DriftindicatorsDriftIndicatorsFieldValue interface.
 */
export function instanceOfDriftindicatorsDriftIndicatorsFieldValue(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "resources" in value;
    isInstance = isInstance && "meta" in value;

    return isInstance;
}

export function DriftindicatorsDriftIndicatorsFieldValueFromJSON(json: any): DriftindicatorsDriftIndicatorsFieldValue {
    return DriftindicatorsDriftIndicatorsFieldValueFromJSONTyped(json, false);
}

export function DriftindicatorsDriftIndicatorsFieldValueFromJSONTyped(json: any, ignoreDiscriminator: boolean): DriftindicatorsDriftIndicatorsFieldValue {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        resources: (json["Resources"] as Array<any>).map(ModelsAPIFilterResponseFromJSON),
        errors: !exists(json, "errors") ? undefined : json["errors"] === null ? null : (json["errors"] as Array<any>).map(MsaAPIErrorFromJSON),
        meta: MsaMetaInfoFromJSON(json["meta"]),
    };
}

export function DriftindicatorsDriftIndicatorsFieldValueToJSON(value?: DriftindicatorsDriftIndicatorsFieldValue | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        Resources: (value.resources as Array<any>).map(ModelsAPIFilterResponseToJSON),
        errors: value.errors === undefined ? undefined : value.errors === null ? null : (value.errors as Array<any>).map(MsaAPIErrorToJSON),
        meta: MsaMetaInfoToJSON(value.meta),
    };
}