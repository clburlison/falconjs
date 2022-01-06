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
import { FalconxAssociatedRuntime, FalconxAssociatedRuntimeFromJSON, FalconxAssociatedRuntimeFromJSONTyped, FalconxAssociatedRuntimeToJSON } from "./FalconxAssociatedRuntime";

/**
 *
 * @export
 * @interface FalconxContactedHost
 */
export interface FalconxContactedHost {
    /**
     *
     * @type {string}
     * @memberof FalconxContactedHost
     */
    address?: string;
    /**
     *
     * @type {Array<FalconxAssociatedRuntime>}
     * @memberof FalconxContactedHost
     */
    associatedRuntime?: Array<FalconxAssociatedRuntime>;
    /**
     *
     * @type {boolean}
     * @memberof FalconxContactedHost
     */
    compromised?: boolean;
    /**
     *
     * @type {string}
     * @memberof FalconxContactedHost
     */
    country?: string;
    /**
     *
     * @type {number}
     * @memberof FalconxContactedHost
     */
    port?: number;
    /**
     *
     * @type {string}
     * @memberof FalconxContactedHost
     */
    protocol?: string;
}

export function FalconxContactedHostFromJSON(json: any): FalconxContactedHost {
    return FalconxContactedHostFromJSONTyped(json, false);
}

export function FalconxContactedHostFromJSONTyped(json: any, ignoreDiscriminator: boolean): FalconxContactedHost {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        address: !exists(json, "address") ? undefined : json["address"],
        associatedRuntime: !exists(json, "associated_runtime") ? undefined : (json["associated_runtime"] as Array<any>).map(FalconxAssociatedRuntimeFromJSON),
        compromised: !exists(json, "compromised") ? undefined : json["compromised"],
        country: !exists(json, "country") ? undefined : json["country"],
        port: !exists(json, "port") ? undefined : json["port"],
        protocol: !exists(json, "protocol") ? undefined : json["protocol"],
    };
}

export function FalconxContactedHostToJSON(value?: FalconxContactedHost | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        address: value.address,
        associated_runtime: value.associatedRuntime === undefined ? undefined : (value.associatedRuntime as Array<any>).map(FalconxAssociatedRuntimeToJSON),
        compromised: value.compromised,
        country: value.country,
        port: value.port,
        protocol: value.protocol,
    };
}
