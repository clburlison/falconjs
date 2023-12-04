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
 * @interface SadomainCreateRuleRequestV1
 */
export interface SadomainCreateRuleRequestV1 {
    /**
     * Whether to monitor for breach data. Available only for `Company Domains` and `Email addresses` rule topics. When enabled, ownership of the monitored domains or emails is required
     * @type {boolean}
     * @memberof SadomainCreateRuleRequestV1
     */
    breachMonitoringEnabled: boolean;
    /**
     * The FQL filter to be used for searching
     * @type {string}
     * @memberof SadomainCreateRuleRequestV1
     */
    filter: string;
    /**
     * The name of a given rule
     * @type {string}
     * @memberof SadomainCreateRuleRequestV1
     */
    name: string;
    /**
     * The permissions for a given rule which specifies the rule's access by other users. Possible values: [`public`, `private`]
     * @type {string}
     * @memberof SadomainCreateRuleRequestV1
     */
    permissions: string;
    /**
     * The priority for a given rule. Possible values: [`low`, `medium`, `high`]
     * @type {string}
     * @memberof SadomainCreateRuleRequestV1
     */
    priority: string;
    /**
     * Whether to monitor for substring matches. Only available for the `Typosquatting` topic.
     * @type {boolean}
     * @memberof SadomainCreateRuleRequestV1
     */
    substringMatchingEnabled: boolean;
    /**
     * The topic of a given rule. Possible values: [`SA_BRAND_PRODUCT`, `SA_VIP`, `SA_THIRD_PARTY`, `SA_IP`, `SA_CVE`, `SA_BIN`, `SA_DOMAIN`, `SA_EMAIL`, `SA_ALIAS`, `SA_AUTHOR`, `SA_CUSTOM`, `SA_TYPOSQUATTING`]
     * @type {string}
     * @memberof SadomainCreateRuleRequestV1
     */
    topic: string;
}

/**
 * Check if a given object implements the SadomainCreateRuleRequestV1 interface.
 */
export function instanceOfSadomainCreateRuleRequestV1(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "breachMonitoringEnabled" in value;
    isInstance = isInstance && "filter" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "permissions" in value;
    isInstance = isInstance && "priority" in value;
    isInstance = isInstance && "substringMatchingEnabled" in value;
    isInstance = isInstance && "topic" in value;

    return isInstance;
}

export function SadomainCreateRuleRequestV1FromJSON(json: any): SadomainCreateRuleRequestV1 {
    return SadomainCreateRuleRequestV1FromJSONTyped(json, false);
}

export function SadomainCreateRuleRequestV1FromJSONTyped(json: any, ignoreDiscriminator: boolean): SadomainCreateRuleRequestV1 {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        breachMonitoringEnabled: json["breach_monitoring_enabled"],
        filter: json["filter"],
        name: json["name"],
        permissions: json["permissions"],
        priority: json["priority"],
        substringMatchingEnabled: json["substring_matching_enabled"],
        topic: json["topic"],
    };
}

export function SadomainCreateRuleRequestV1ToJSON(value?: SadomainCreateRuleRequestV1 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        breach_monitoring_enabled: value.breachMonitoringEnabled,
        filter: value.filter,
        name: value.name,
        permissions: value.permissions,
        priority: value.priority,
        substring_matching_enabled: value.substringMatchingEnabled,
        topic: value.topic,
    };
}
