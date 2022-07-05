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
import type { RegistrationPolicyExtV1 } from "./RegistrationPolicyExtV1";
import { RegistrationPolicyExtV1FromJSON, RegistrationPolicyExtV1FromJSONTyped, RegistrationPolicyExtV1ToJSON } from "./RegistrationPolicyExtV1";

/**
 *
 * @export
 * @interface RegistrationPolicyRequestExtV1
 */
export interface RegistrationPolicyRequestExtV1 {
    /**
     *
     * @type {Array<RegistrationPolicyExtV1>}
     * @memberof RegistrationPolicyRequestExtV1
     */
    resources: Array<RegistrationPolicyExtV1>;
}

/**
 * Check if a given object implements the RegistrationPolicyRequestExtV1 interface.
 */
export function instanceOfRegistrationPolicyRequestExtV1(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "resources" in value;

    return isInstance;
}

export function RegistrationPolicyRequestExtV1FromJSON(json: any): RegistrationPolicyRequestExtV1 {
    return RegistrationPolicyRequestExtV1FromJSONTyped(json, false);
}

export function RegistrationPolicyRequestExtV1FromJSONTyped(json: any, ignoreDiscriminator: boolean): RegistrationPolicyRequestExtV1 {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        resources: (json["resources"] as Array<any>).map(RegistrationPolicyExtV1FromJSON),
    };
}

export function RegistrationPolicyRequestExtV1ToJSON(value?: RegistrationPolicyRequestExtV1 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        resources: (value.resources as Array<any>).map(RegistrationPolicyExtV1ToJSON),
    };
}
