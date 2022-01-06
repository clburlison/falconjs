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
/**
 *
 * @export
 * @interface DomainAzureAccountV1
 */
export interface DomainAzureAccountV1 {
    /**
     *
     * @type {Date}
     * @memberof DomainAzureAccountV1
     */
    createdAt: Date;
    /**
     *
     * @type {Date}
     * @memberof DomainAzureAccountV1
     */
    deletedAt: Date;
    /**
     *
     * @type {number}
     * @memberof DomainAzureAccountV1
     */
    iD: number;
    /**
     *
     * @type {Date}
     * @memberof DomainAzureAccountV1
     */
    updatedAt: Date;
    /**
     *
     * @type {string}
     * @memberof DomainAzureAccountV1
     */
    cid: string;
    /**
     * Account registration status.
     * @type {string}
     * @memberof DomainAzureAccountV1
     */
    status?: string;
    /**
     * Azure Subscription ID.
     * @type {string}
     * @memberof DomainAzureAccountV1
     */
    subscriptionId?: string;
    /**
     * Azure Tenant ID to use.
     * @type {string}
     * @memberof DomainAzureAccountV1
     */
    tenantId?: string;
}

export function DomainAzureAccountV1FromJSON(json: any): DomainAzureAccountV1 {
    return DomainAzureAccountV1FromJSONTyped(json, false);
}

export function DomainAzureAccountV1FromJSONTyped(json: any, ignoreDiscriminator: boolean): DomainAzureAccountV1 {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        createdAt: new Date(json["CreatedAt"]),
        deletedAt: new Date(json["DeletedAt"]),
        iD: json["ID"],
        updatedAt: new Date(json["UpdatedAt"]),
        cid: json["cid"],
        status: !exists(json, "status") ? undefined : json["status"],
        subscriptionId: !exists(json, "subscription_id") ? undefined : json["subscription_id"],
        tenantId: !exists(json, "tenant_id") ? undefined : json["tenant_id"],
    };
}

export function DomainAzureAccountV1ToJSON(value?: DomainAzureAccountV1 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        CreatedAt: value.createdAt.toISOString(),
        DeletedAt: value.deletedAt.toISOString(),
        ID: value.iD,
        UpdatedAt: value.updatedAt.toISOString(),
        cid: value.cid,
        status: value.status,
        subscription_id: value.subscriptionId,
        tenant_id: value.tenantId,
    };
}
