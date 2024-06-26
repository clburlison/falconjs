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
import type { DomainCSIXLabel } from "./DomainCSIXLabel";
import { DomainCSIXLabelFromJSON, DomainCSIXLabelFromJSONTyped, DomainCSIXLabelToJSON } from "./DomainCSIXLabel";
import type { DomainCSIXRelation } from "./DomainCSIXRelation";
import { DomainCSIXRelationFromJSON, DomainCSIXRelationFromJSONTyped, DomainCSIXRelationToJSON } from "./DomainCSIXRelation";

/**
 *
 * @export
 * @interface DomainPublicIndicatorV3
 */
export interface DomainPublicIndicatorV3 {
    /**
     *
     * @type {string}
     * @memberof DomainPublicIndicatorV3
     */
    marker: string;
    /**
     *
     * @type {Array<string>}
     * @memberof DomainPublicIndicatorV3
     */
    actors: Array<string>;
    /**
     *
     * @type {boolean}
     * @memberof DomainPublicIndicatorV3
     */
    deleted: boolean;
    /**
     *
     * @type {Array<string>}
     * @memberof DomainPublicIndicatorV3
     */
    domainTypes: Array<string>;
    /**
     *
     * @type {string}
     * @memberof DomainPublicIndicatorV3
     */
    id: string;
    /**
     *
     * @type {string}
     * @memberof DomainPublicIndicatorV3
     */
    indicator: string;
    /**
     *
     * @type {Array<string>}
     * @memberof DomainPublicIndicatorV3
     */
    ipAddressTypes: Array<string>;
    /**
     *
     * @type {Array<string>}
     * @memberof DomainPublicIndicatorV3
     */
    killChains: Array<string>;
    /**
     *
     * @type {Array<DomainCSIXLabel>}
     * @memberof DomainPublicIndicatorV3
     */
    labels: Array<DomainCSIXLabel>;
    /**
     *
     * @type {number}
     * @memberof DomainPublicIndicatorV3
     */
    lastUpdated: number;
    /**
     *
     * @type {string}
     * @memberof DomainPublicIndicatorV3
     */
    maliciousConfidence: string;
    /**
     *
     * @type {Array<string>}
     * @memberof DomainPublicIndicatorV3
     */
    malwareFamilies: Array<string>;
    /**
     *
     * @type {number}
     * @memberof DomainPublicIndicatorV3
     */
    publishedDate: number;
    /**
     *
     * @type {Array<DomainCSIXRelation>}
     * @memberof DomainPublicIndicatorV3
     */
    relations: Array<DomainCSIXRelation>;
    /**
     *
     * @type {Array<string>}
     * @memberof DomainPublicIndicatorV3
     */
    reports: Array<string>;
    /**
     *
     * @type {Array<string>}
     * @memberof DomainPublicIndicatorV3
     */
    targets: Array<string>;
    /**
     *
     * @type {Array<string>}
     * @memberof DomainPublicIndicatorV3
     */
    threatTypes: Array<string>;
    /**
     *
     * @type {string}
     * @memberof DomainPublicIndicatorV3
     */
    type: string;
    /**
     *
     * @type {Array<string>}
     * @memberof DomainPublicIndicatorV3
     */
    vulnerabilities: Array<string>;
}

/**
 * Check if a given object implements the DomainPublicIndicatorV3 interface.
 */
export function instanceOfDomainPublicIndicatorV3(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "marker" in value;
    isInstance = isInstance && "actors" in value;
    isInstance = isInstance && "deleted" in value;
    isInstance = isInstance && "domainTypes" in value;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "indicator" in value;
    isInstance = isInstance && "ipAddressTypes" in value;
    isInstance = isInstance && "killChains" in value;
    isInstance = isInstance && "labels" in value;
    isInstance = isInstance && "lastUpdated" in value;
    isInstance = isInstance && "maliciousConfidence" in value;
    isInstance = isInstance && "malwareFamilies" in value;
    isInstance = isInstance && "publishedDate" in value;
    isInstance = isInstance && "relations" in value;
    isInstance = isInstance && "reports" in value;
    isInstance = isInstance && "targets" in value;
    isInstance = isInstance && "threatTypes" in value;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "vulnerabilities" in value;

    return isInstance;
}

export function DomainPublicIndicatorV3FromJSON(json: any): DomainPublicIndicatorV3 {
    return DomainPublicIndicatorV3FromJSONTyped(json, false);
}

export function DomainPublicIndicatorV3FromJSONTyped(json: any, ignoreDiscriminator: boolean): DomainPublicIndicatorV3 {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        marker: json["_marker"],
        actors: json["actors"],
        deleted: json["deleted"],
        domainTypes: json["domain_types"],
        id: json["id"],
        indicator: json["indicator"],
        ipAddressTypes: json["ip_address_types"],
        killChains: json["kill_chains"],
        labels: (json["labels"] as Array<any>).map(DomainCSIXLabelFromJSON),
        lastUpdated: json["last_updated"],
        maliciousConfidence: json["malicious_confidence"],
        malwareFamilies: json["malware_families"],
        publishedDate: json["published_date"],
        relations: (json["relations"] as Array<any>).map(DomainCSIXRelationFromJSON),
        reports: json["reports"],
        targets: json["targets"],
        threatTypes: json["threat_types"],
        type: json["type"],
        vulnerabilities: json["vulnerabilities"],
    };
}

export function DomainPublicIndicatorV3ToJSON(value?: DomainPublicIndicatorV3 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        _marker: value.marker,
        actors: value.actors,
        deleted: value.deleted,
        domain_types: value.domainTypes,
        id: value.id,
        indicator: value.indicator,
        ip_address_types: value.ipAddressTypes,
        kill_chains: value.killChains,
        labels: (value.labels as Array<any>).map(DomainCSIXLabelToJSON),
        last_updated: value.lastUpdated,
        malicious_confidence: value.maliciousConfidence,
        malware_families: value.malwareFamilies,
        published_date: value.publishedDate,
        relations: (value.relations as Array<any>).map(DomainCSIXRelationToJSON),
        reports: value.reports,
        targets: value.targets,
        threat_types: value.threatTypes,
        type: value.type,
        vulnerabilities: value.vulnerabilities,
    };
}
