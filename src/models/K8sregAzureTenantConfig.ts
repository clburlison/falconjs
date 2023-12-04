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
 * @interface K8sregAzureTenantConfig
 */
export interface K8sregAzureTenantConfig {
    /**
     *
     * @type {string}
     * @memberof K8sregAzureTenantConfig
     */
    clientId: string;
    /**
     *
     * @type {string}
     * @memberof K8sregAzureTenantConfig
     */
    publicCertificate?: string;
    /**
     *
     * @type {string}
     * @memberof K8sregAzureTenantConfig
     */
    tenantId: string;
}

/**
 * Check if a given object implements the K8sregAzureTenantConfig interface.
 */
export function instanceOfK8sregAzureTenantConfig(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "clientId" in value;
    isInstance = isInstance && "tenantId" in value;

    return isInstance;
}

export function K8sregAzureTenantConfigFromJSON(json: any): K8sregAzureTenantConfig {
    return K8sregAzureTenantConfigFromJSONTyped(json, false);
}

export function K8sregAzureTenantConfigFromJSONTyped(json: any, ignoreDiscriminator: boolean): K8sregAzureTenantConfig {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        clientId: json["client_id"],
        publicCertificate: !exists(json, "public_certificate") ? undefined : json["public_certificate"],
        tenantId: json["tenant_id"],
    };
}

export function K8sregAzureTenantConfigToJSON(value?: K8sregAzureTenantConfig | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        client_id: value.clientId,
        public_certificate: value.publicCertificate,
        tenant_id: value.tenantId,
    };
}
