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
import type { DomainCard } from "./DomainCard";
import { DomainCardFromJSON, DomainCardFromJSONTyped, DomainCardToJSON } from "./DomainCard";
import type { DomainCredentials } from "./DomainCredentials";
import { DomainCredentialsFromJSON, DomainCredentialsFromJSONTyped, DomainCredentialsToJSON } from "./DomainCredentials";
import type { DomainHost } from "./DomainHost";
import { DomainHostFromJSON, DomainHostFromJSONTyped, DomainHostToJSON } from "./DomainHost";

/**
 *
 * @export
 * @interface DomainMarketplaceProduct
 */
export interface DomainMarketplaceProduct {
    /**
     *
     * @type {DomainCard}
     * @memberof DomainMarketplaceProduct
     */
    card?: DomainCard;
    /**
     *
     * @type {string}
     * @memberof DomainMarketplaceProduct
     */
    countryCode?: string;
    /**
     *
     * @type {DomainCredentials}
     * @memberof DomainMarketplaceProduct
     */
    credentials?: DomainCredentials;
    /**
     *
     * @type {DomainHost}
     * @memberof DomainMarketplaceProduct
     */
    host?: DomainHost;
    /**
     *
     * @type {string}
     * @memberof DomainMarketplaceProduct
     */
    location?: string;
    /**
     *
     * @type {string}
     * @memberof DomainMarketplaceProduct
     */
    price?: string;
    /**
     *
     * @type {string}
     * @memberof DomainMarketplaceProduct
     */
    type?: string;
}

/**
 * Check if a given object implements the DomainMarketplaceProduct interface.
 */
export function instanceOfDomainMarketplaceProduct(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function DomainMarketplaceProductFromJSON(json: any): DomainMarketplaceProduct {
    return DomainMarketplaceProductFromJSONTyped(json, false);
}

export function DomainMarketplaceProductFromJSONTyped(json: any, ignoreDiscriminator: boolean): DomainMarketplaceProduct {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        card: !exists(json, "card") ? undefined : DomainCardFromJSON(json["card"]),
        countryCode: !exists(json, "country_code") ? undefined : json["country_code"],
        credentials: !exists(json, "credentials") ? undefined : DomainCredentialsFromJSON(json["credentials"]),
        host: !exists(json, "host") ? undefined : DomainHostFromJSON(json["host"]),
        location: !exists(json, "location") ? undefined : json["location"],
        price: !exists(json, "price") ? undefined : json["price"],
        type: !exists(json, "type") ? undefined : json["type"],
    };
}

export function DomainMarketplaceProductToJSON(value?: DomainMarketplaceProduct | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        card: DomainCardToJSON(value.card),
        country_code: value.countryCode,
        credentials: DomainCredentialsToJSON(value.credentials),
        host: DomainHostToJSON(value.host),
        location: value.location,
        price: value.price,
        type: value.type,
    };
}
