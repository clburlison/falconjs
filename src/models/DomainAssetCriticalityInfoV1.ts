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
 * @interface DomainAssetCriticalityInfoV1
 */
export interface DomainAssetCriticalityInfoV1 {
    /**
     *
     * @type {string}
     * @memberof DomainAssetCriticalityInfoV1
     */
    criticality?: string;
    /**
     *
     * @type {string}
     * @memberof DomainAssetCriticalityInfoV1
     */
    internetExposure?: string;
    /**
     *
     * @type {Array<string>}
     * @memberof DomainAssetCriticalityInfoV1
     */
    roles?: Array<string>;
}

/**
 * Check if a given object implements the DomainAssetCriticalityInfoV1 interface.
 */
export function instanceOfDomainAssetCriticalityInfoV1(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function DomainAssetCriticalityInfoV1FromJSON(json: any): DomainAssetCriticalityInfoV1 {
    return DomainAssetCriticalityInfoV1FromJSONTyped(json, false);
}

export function DomainAssetCriticalityInfoV1FromJSONTyped(json: any, ignoreDiscriminator: boolean): DomainAssetCriticalityInfoV1 {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        criticality: !exists(json, "criticality") ? undefined : json["criticality"],
        internetExposure: !exists(json, "internet_exposure") ? undefined : json["internet_exposure"],
        roles: !exists(json, "roles") ? undefined : json["roles"],
    };
}

export function DomainAssetCriticalityInfoV1ToJSON(value?: DomainAssetCriticalityInfoV1 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        criticality: value.criticality,
        internet_exposure: value.internetExposure,
        roles: value.roles,
    };
}
