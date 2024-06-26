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
 * @interface ClientSystemDefinitionDeProvisionRequest
 */
export interface ClientSystemDefinitionDeProvisionRequest {
    /**
     * Customer scoped definition ID that is being deprovisioned. This is required when the template is defined as multi-instance
     * @type {string}
     * @memberof ClientSystemDefinitionDeProvisionRequest
     */
    definitionId: string;
    /**
     * When enabled, the CustomerDefinitionID property is ignored and all template workflows are deprovisioned
     * @type {boolean}
     * @memberof ClientSystemDefinitionDeProvisionRequest
     */
    deprovisionAll: boolean;
    /**
     * ID of the system definition template that is to be deprovisioned
     * @type {string}
     * @memberof ClientSystemDefinitionDeProvisionRequest
     */
    templateId: string;
    /**
     * Name of the system definition template to deprovision
     * @type {string}
     * @memberof ClientSystemDefinitionDeProvisionRequest
     */
    templateName: string;
}

/**
 * Check if a given object implements the ClientSystemDefinitionDeProvisionRequest interface.
 */
export function instanceOfClientSystemDefinitionDeProvisionRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "definitionId" in value;
    isInstance = isInstance && "deprovisionAll" in value;
    isInstance = isInstance && "templateId" in value;
    isInstance = isInstance && "templateName" in value;

    return isInstance;
}

export function ClientSystemDefinitionDeProvisionRequestFromJSON(json: any): ClientSystemDefinitionDeProvisionRequest {
    return ClientSystemDefinitionDeProvisionRequestFromJSONTyped(json, false);
}

export function ClientSystemDefinitionDeProvisionRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): ClientSystemDefinitionDeProvisionRequest {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        definitionId: json["definition_id"],
        deprovisionAll: json["deprovision_all"],
        templateId: json["template_id"],
        templateName: json["template_name"],
    };
}

export function ClientSystemDefinitionDeProvisionRequestToJSON(value?: ClientSystemDefinitionDeProvisionRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        definition_id: value.definitionId,
        deprovision_all: value.deprovisionAll,
        template_id: value.templateId,
        template_name: value.templateName,
    };
}
