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
import type { DomainAPIHostGroup } from "./DomainAPIHostGroup";
import { DomainAPIHostGroupFromJSON, DomainAPIHostGroupFromJSONTyped, DomainAPIHostGroupToJSON } from "./DomainAPIHostGroup";
import type { DomainAssetCriticalityInfoV1 } from "./DomainAssetCriticalityInfoV1";
import { DomainAssetCriticalityInfoV1FromJSON, DomainAssetCriticalityInfoV1FromJSONTyped, DomainAssetCriticalityInfoV1ToJSON } from "./DomainAssetCriticalityInfoV1";

/**
 *
 * @export
 * @interface DomainAPIHostInfoFacetV1
 */
export interface DomainAPIHostInfoFacetV1 {
    /**
     *
     * @type {DomainAssetCriticalityInfoV1}
     * @memberof DomainAPIHostInfoFacetV1
     */
    assetCriticality?: DomainAssetCriticalityInfoV1;
    /**
     *
     * @type {string}
     * @memberof DomainAPIHostInfoFacetV1
     */
    buildNumber?: string;
    /**
     *
     * @type {Array<DomainAPIHostGroup>}
     * @memberof DomainAPIHostInfoFacetV1
     */
    groups: Array<DomainAPIHostGroup>;
    /**
     *
     * @type {string}
     * @memberof DomainAPIHostInfoFacetV1
     */
    hostHiddenStatus?: string;
    /**
     *
     * @type {string}
     * @memberof DomainAPIHostInfoFacetV1
     */
    id?: string;
    /**
     *
     * @type {string}
     * @memberof DomainAPIHostInfoFacetV1
     */
    lastSeenTimestamp?: string;
    /**
     *
     * @type {string}
     * @memberof DomainAPIHostInfoFacetV1
     */
    localIp?: string;
    /**
     *
     * @type {string}
     * @memberof DomainAPIHostInfoFacetV1
     */
    macAddress?: string;
    /**
     *
     * @type {string}
     * @memberof DomainAPIHostInfoFacetV1
     */
    machineDomain?: string;
    /**
     *
     * @type {string}
     * @memberof DomainAPIHostInfoFacetV1
     */
    name: string;
    /**
     *
     * @type {string}
     * @memberof DomainAPIHostInfoFacetV1
     */
    osVersion?: string;
    /**
     *
     * @type {string}
     * @memberof DomainAPIHostInfoFacetV1
     */
    ou?: string;
    /**
     *
     * @type {string}
     * @memberof DomainAPIHostInfoFacetV1
     */
    platformName?: string;
    /**
     *
     * @type {string}
     * @memberof DomainAPIHostInfoFacetV1
     */
    productTypeDesc?: string;
    /**
     *
     * @type {string}
     * @memberof DomainAPIHostInfoFacetV1
     */
    serialNumber?: string;
    /**
     *
     * @type {string}
     * @memberof DomainAPIHostInfoFacetV1
     */
    siteName?: string;
    /**
     *
     * @type {string}
     * @memberof DomainAPIHostInfoFacetV1
     */
    systemManufacturer?: string;
    /**
     *
     * @type {string}
     * @memberof DomainAPIHostInfoFacetV1
     */
    systemProductName?: string;
    /**
     *
     * @type {Array<string>}
     * @memberof DomainAPIHostInfoFacetV1
     */
    tags?: Array<string>;
}

/**
 * Check if a given object implements the DomainAPIHostInfoFacetV1 interface.
 */
export function instanceOfDomainAPIHostInfoFacetV1(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "groups" in value;
    isInstance = isInstance && "name" in value;

    return isInstance;
}

export function DomainAPIHostInfoFacetV1FromJSON(json: any): DomainAPIHostInfoFacetV1 {
    return DomainAPIHostInfoFacetV1FromJSONTyped(json, false);
}

export function DomainAPIHostInfoFacetV1FromJSONTyped(json: any, ignoreDiscriminator: boolean): DomainAPIHostInfoFacetV1 {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        assetCriticality: !exists(json, "asset_criticality") ? undefined : DomainAssetCriticalityInfoV1FromJSON(json["asset_criticality"]),
        buildNumber: !exists(json, "build_number") ? undefined : json["build_number"],
        groups: (json["groups"] as Array<any>).map(DomainAPIHostGroupFromJSON),
        hostHiddenStatus: !exists(json, "host_hidden_status") ? undefined : json["host_hidden_status"],
        id: !exists(json, "id") ? undefined : json["id"],
        lastSeenTimestamp: !exists(json, "last_seen_timestamp") ? undefined : json["last_seen_timestamp"],
        localIp: !exists(json, "local_ip") ? undefined : json["local_ip"],
        macAddress: !exists(json, "mac_address") ? undefined : json["mac_address"],
        machineDomain: !exists(json, "machine_domain") ? undefined : json["machine_domain"],
        name: json["name"],
        osVersion: !exists(json, "os_version") ? undefined : json["os_version"],
        ou: !exists(json, "ou") ? undefined : json["ou"],
        platformName: !exists(json, "platform_name") ? undefined : json["platform_name"],
        productTypeDesc: !exists(json, "product_type_desc") ? undefined : json["product_type_desc"],
        serialNumber: !exists(json, "serial_number") ? undefined : json["serial_number"],
        siteName: !exists(json, "site_name") ? undefined : json["site_name"],
        systemManufacturer: !exists(json, "system_manufacturer") ? undefined : json["system_manufacturer"],
        systemProductName: !exists(json, "system_product_name") ? undefined : json["system_product_name"],
        tags: !exists(json, "tags") ? undefined : json["tags"],
    };
}

export function DomainAPIHostInfoFacetV1ToJSON(value?: DomainAPIHostInfoFacetV1 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        asset_criticality: DomainAssetCriticalityInfoV1ToJSON(value.assetCriticality),
        build_number: value.buildNumber,
        groups: (value.groups as Array<any>).map(DomainAPIHostGroupToJSON),
        host_hidden_status: value.hostHiddenStatus,
        id: value.id,
        last_seen_timestamp: value.lastSeenTimestamp,
        local_ip: value.localIp,
        mac_address: value.macAddress,
        machine_domain: value.machineDomain,
        name: value.name,
        os_version: value.osVersion,
        ou: value.ou,
        platform_name: value.platformName,
        product_type_desc: value.productTypeDesc,
        serial_number: value.serialNumber,
        site_name: value.siteName,
        system_manufacturer: value.systemManufacturer,
        system_product_name: value.systemProductName,
        tags: value.tags,
    };
}