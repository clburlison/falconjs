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
import type { MsaAPIError } from "./MsaAPIError";
import { MsaAPIErrorFromJSON, MsaAPIErrorFromJSONTyped, MsaAPIErrorToJSON } from "./MsaAPIError";
import type { MsaMetaInfo } from "./MsaMetaInfo";
import { MsaMetaInfoFromJSON, MsaMetaInfoFromJSONTyped, MsaMetaInfoToJSON } from "./MsaMetaInfo";
import type { RulegroupsRule } from "./RulegroupsRule";
import { RulegroupsRuleFromJSON, RulegroupsRuleFromJSONTyped, RulegroupsRuleToJSON } from "./RulegroupsRule";

/**
 *
 * @export
 * @interface RulegroupsRulesResponse
 */
export interface RulegroupsRulesResponse {
    /**
     *
     * @type {Array<MsaAPIError>}
     * @memberof RulegroupsRulesResponse
     */
    errors?: Array<MsaAPIError> | null;
    /**
     *
     * @type {MsaMetaInfo}
     * @memberof RulegroupsRulesResponse
     */
    meta: MsaMetaInfo;
    /**
     *
     * @type {Array<RulegroupsRule>}
     * @memberof RulegroupsRulesResponse
     */
    resources: Array<RulegroupsRule>;
}

/**
 * Check if a given object implements the RulegroupsRulesResponse interface.
 */
export function instanceOfRulegroupsRulesResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "meta" in value;
    isInstance = isInstance && "resources" in value;

    return isInstance;
}

export function RulegroupsRulesResponseFromJSON(json: any): RulegroupsRulesResponse {
    return RulegroupsRulesResponseFromJSONTyped(json, false);
}

export function RulegroupsRulesResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): RulegroupsRulesResponse {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        errors: !exists(json, "errors") ? undefined : json["errors"] === null ? null : (json["errors"] as Array<any>).map(MsaAPIErrorFromJSON),
        meta: MsaMetaInfoFromJSON(json["meta"]),
        resources: (json["resources"] as Array<any>).map(RulegroupsRuleFromJSON),
    };
}

export function RulegroupsRulesResponseToJSON(value?: RulegroupsRulesResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        errors: value.errors === undefined ? undefined : value.errors === null ? null : (value.errors as Array<any>).map(MsaAPIErrorToJSON),
        meta: MsaMetaInfoToJSON(value.meta),
        resources: (value.resources as Array<any>).map(RulegroupsRuleToJSON),
    };
}