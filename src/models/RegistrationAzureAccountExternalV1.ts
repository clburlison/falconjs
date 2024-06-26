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
 * @interface RegistrationAzureAccountExternalV1
 */
export interface RegistrationAzureAccountExternalV1 {
    /**
     *
     * @type {string}
     * @memberof RegistrationAzureAccountExternalV1
     */
    accountType?: string;
    /**
     *
     * @type {string}
     * @memberof RegistrationAzureAccountExternalV1
     */
    clientId?: string;
    /**
     *
     * @type {boolean}
     * @memberof RegistrationAzureAccountExternalV1
     */
    defaultSubscription?: boolean;
    /**
     * Azure Subscription ID.
     * @type {string}
     * @memberof RegistrationAzureAccountExternalV1
     */
    subscriptionId?: string;
    /**
     * Azure Tenant ID to use.
     * @type {string}
     * @memberof RegistrationAzureAccountExternalV1
     */
    tenantId?: string;
    /**
     *
     * @type {number}
     * @memberof RegistrationAzureAccountExternalV1
     */
    yearsValid?: number;
}

/**
 * Check if a given object implements the RegistrationAzureAccountExternalV1 interface.
 */
export function instanceOfRegistrationAzureAccountExternalV1(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function RegistrationAzureAccountExternalV1FromJSON(json: any): RegistrationAzureAccountExternalV1 {
    return RegistrationAzureAccountExternalV1FromJSONTyped(json, false);
}

export function RegistrationAzureAccountExternalV1FromJSONTyped(json: any, ignoreDiscriminator: boolean): RegistrationAzureAccountExternalV1 {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        accountType: !exists(json, "account_type") ? undefined : json["account_type"],
        clientId: !exists(json, "client_id") ? undefined : json["client_id"],
        defaultSubscription: !exists(json, "default_subscription") ? undefined : json["default_subscription"],
        subscriptionId: !exists(json, "subscription_id") ? undefined : json["subscription_id"],
        tenantId: !exists(json, "tenant_id") ? undefined : json["tenant_id"],
        yearsValid: !exists(json, "years_valid") ? undefined : json["years_valid"],
    };
}

export function RegistrationAzureAccountExternalV1ToJSON(value?: RegistrationAzureAccountExternalV1 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        account_type: value.accountType,
        client_id: value.clientId,
        default_subscription: value.defaultSubscription,
        subscription_id: value.subscriptionId,
        tenant_id: value.tenantId,
        years_valid: value.yearsValid,
    };
}
