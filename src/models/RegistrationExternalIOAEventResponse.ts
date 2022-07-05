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
import type { MsaAPIError } from "./MsaAPIError";
import { MsaAPIErrorFromJSON, MsaAPIErrorFromJSONTyped, MsaAPIErrorToJSON } from "./MsaAPIError";
import type { RegistrationExternalIOAResources } from "./RegistrationExternalIOAResources";
import { RegistrationExternalIOAResourcesFromJSON, RegistrationExternalIOAResourcesFromJSONTyped, RegistrationExternalIOAResourcesToJSON } from "./RegistrationExternalIOAResources";
import type { RegistrationMSAMetaInfoExtension } from "./RegistrationMSAMetaInfoExtension";
import { RegistrationMSAMetaInfoExtensionFromJSON, RegistrationMSAMetaInfoExtensionFromJSONTyped, RegistrationMSAMetaInfoExtensionToJSON } from "./RegistrationMSAMetaInfoExtension";

/**
 *
 * @export
 * @interface RegistrationExternalIOAEventResponse
 */
export interface RegistrationExternalIOAEventResponse {
    /**
     *
     * @type {Array<MsaAPIError>}
     * @memberof RegistrationExternalIOAEventResponse
     */
    errors: Array<MsaAPIError>;
    /**
     *
     * @type {RegistrationMSAMetaInfoExtension}
     * @memberof RegistrationExternalIOAEventResponse
     */
    meta: RegistrationMSAMetaInfoExtension;
    /**
     *
     * @type {RegistrationExternalIOAResources}
     * @memberof RegistrationExternalIOAEventResponse
     */
    resources: RegistrationExternalIOAResources;
}

/**
 * Check if a given object implements the RegistrationExternalIOAEventResponse interface.
 */
export function instanceOfRegistrationExternalIOAEventResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "errors" in value;
    isInstance = isInstance && "meta" in value;
    isInstance = isInstance && "resources" in value;

    return isInstance;
}

export function RegistrationExternalIOAEventResponseFromJSON(json: any): RegistrationExternalIOAEventResponse {
    return RegistrationExternalIOAEventResponseFromJSONTyped(json, false);
}

export function RegistrationExternalIOAEventResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): RegistrationExternalIOAEventResponse {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        errors: (json["errors"] as Array<any>).map(MsaAPIErrorFromJSON),
        meta: RegistrationMSAMetaInfoExtensionFromJSON(json["meta"]),
        resources: RegistrationExternalIOAResourcesFromJSON(json["resources"]),
    };
}

export function RegistrationExternalIOAEventResponseToJSON(value?: RegistrationExternalIOAEventResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        errors: (value.errors as Array<any>).map(MsaAPIErrorToJSON),
        meta: RegistrationMSAMetaInfoExtensionToJSON(value.meta),
        resources: RegistrationExternalIOAResourcesToJSON(value.resources),
    };
}
