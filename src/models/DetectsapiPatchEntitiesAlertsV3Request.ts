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
import type { MsaspecActionParameter } from "./MsaspecActionParameter";
import { MsaspecActionParameterFromJSON, MsaspecActionParameterFromJSONTyped, MsaspecActionParameterToJSON } from "./MsaspecActionParameter";

/**
 *
 * @export
 * @interface DetectsapiPatchEntitiesAlertsV3Request
 */
export interface DetectsapiPatchEntitiesAlertsV3Request {
    /**
     *
     * @type {Array<MsaspecActionParameter>}
     * @memberof DetectsapiPatchEntitiesAlertsV3Request
     */
    actionParameters?: Array<MsaspecActionParameter>;
    /**
     *
     * @type {Array<string>}
     * @memberof DetectsapiPatchEntitiesAlertsV3Request
     */
    compositeIds: Array<string>;
}

/**
 * Check if a given object implements the DetectsapiPatchEntitiesAlertsV3Request interface.
 */
export function instanceOfDetectsapiPatchEntitiesAlertsV3Request(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "compositeIds" in value;

    return isInstance;
}

export function DetectsapiPatchEntitiesAlertsV3RequestFromJSON(json: any): DetectsapiPatchEntitiesAlertsV3Request {
    return DetectsapiPatchEntitiesAlertsV3RequestFromJSONTyped(json, false);
}

export function DetectsapiPatchEntitiesAlertsV3RequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): DetectsapiPatchEntitiesAlertsV3Request {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        actionParameters: !exists(json, "action_parameters") ? undefined : (json["action_parameters"] as Array<any>).map(MsaspecActionParameterFromJSON),
        compositeIds: json["composite_ids"],
    };
}

export function DetectsapiPatchEntitiesAlertsV3RequestToJSON(value?: DetectsapiPatchEntitiesAlertsV3Request | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        action_parameters: value.actionParameters === undefined ? undefined : (value.actionParameters as Array<any>).map(MsaspecActionParameterToJSON),
        composite_ids: value.compositeIds,
    };
}
