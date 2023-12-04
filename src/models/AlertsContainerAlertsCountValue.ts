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
import type { CommonCountAsResource } from "./CommonCountAsResource";
import { CommonCountAsResourceFromJSON, CommonCountAsResourceFromJSONTyped, CommonCountAsResourceToJSON } from "./CommonCountAsResource";
import type { MsaAPIError } from "./MsaAPIError";
import { MsaAPIErrorFromJSON, MsaAPIErrorFromJSONTyped, MsaAPIErrorToJSON } from "./MsaAPIError";
import type { MsaMetaInfo } from "./MsaMetaInfo";
import { MsaMetaInfoFromJSON, MsaMetaInfoFromJSONTyped, MsaMetaInfoToJSON } from "./MsaMetaInfo";

/**
 *
 * @export
 * @interface AlertsContainerAlertsCountValue
 */
export interface AlertsContainerAlertsCountValue {
    /**
     *
     * @type {Array<CommonCountAsResource>}
     * @memberof AlertsContainerAlertsCountValue
     */
    resources: Array<CommonCountAsResource>;
    /**
     *
     * @type {Array<MsaAPIError>}
     * @memberof AlertsContainerAlertsCountValue
     */
    errors?: Array<MsaAPIError> | null;
    /**
     *
     * @type {MsaMetaInfo}
     * @memberof AlertsContainerAlertsCountValue
     */
    meta: MsaMetaInfo;
}

/**
 * Check if a given object implements the AlertsContainerAlertsCountValue interface.
 */
export function instanceOfAlertsContainerAlertsCountValue(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "resources" in value;
    isInstance = isInstance && "meta" in value;

    return isInstance;
}

export function AlertsContainerAlertsCountValueFromJSON(json: any): AlertsContainerAlertsCountValue {
    return AlertsContainerAlertsCountValueFromJSONTyped(json, false);
}

export function AlertsContainerAlertsCountValueFromJSONTyped(json: any, ignoreDiscriminator: boolean): AlertsContainerAlertsCountValue {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        resources: (json["Resources"] as Array<any>).map(CommonCountAsResourceFromJSON),
        errors: !exists(json, "errors") ? undefined : json["errors"] === null ? null : (json["errors"] as Array<any>).map(MsaAPIErrorFromJSON),
        meta: MsaMetaInfoFromJSON(json["meta"]),
    };
}

export function AlertsContainerAlertsCountValueToJSON(value?: AlertsContainerAlertsCountValue | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        Resources: (value.resources as Array<any>).map(CommonCountAsResourceToJSON),
        errors: value.errors === undefined ? undefined : value.errors === null ? null : (value.errors as Array<any>).map(MsaAPIErrorToJSON),
        meta: MsaMetaInfoToJSON(value.meta),
    };
}