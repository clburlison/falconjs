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
import { ApiRuleV1, ApiRuleV1FromJSON, ApiRuleV1FromJSONTyped, ApiRuleV1ToJSON } from "./ApiRuleV1";

/**
 *
 * @export
 * @interface ApiRuleGroupV1
 */
export interface ApiRuleGroupV1 {
    /**
     *
     * @type {string}
     * @memberof ApiRuleGroupV1
     */
    comment: string;
    /**
     *
     * @type {Date}
     * @memberof ApiRuleGroupV1
     */
    committedOn: Date;
    /**
     *
     * @type {string}
     * @memberof ApiRuleGroupV1
     */
    createdBy: string;
    /**
     *
     * @type {Date}
     * @memberof ApiRuleGroupV1
     */
    createdOn: Date;
    /**
     *
     * @type {string}
     * @memberof ApiRuleGroupV1
     */
    customerId: string;
    /**
     *
     * @type {boolean}
     * @memberof ApiRuleGroupV1
     */
    deleted: boolean;
    /**
     *
     * @type {string}
     * @memberof ApiRuleGroupV1
     */
    description: string;
    /**
     *
     * @type {boolean}
     * @memberof ApiRuleGroupV1
     */
    enabled: boolean;
    /**
     *
     * @type {string}
     * @memberof ApiRuleGroupV1
     */
    id: string;
    /**
     *
     * @type {string}
     * @memberof ApiRuleGroupV1
     */
    modifiedBy: string;
    /**
     *
     * @type {Date}
     * @memberof ApiRuleGroupV1
     */
    modifiedOn: Date;
    /**
     *
     * @type {string}
     * @memberof ApiRuleGroupV1
     */
    name: string;
    /**
     *
     * @type {string}
     * @memberof ApiRuleGroupV1
     */
    platform: string;
    /**
     *
     * @type {Array<string>}
     * @memberof ApiRuleGroupV1
     */
    ruleIds: Array<string>;
    /**
     *
     * @type {Array<ApiRuleV1>}
     * @memberof ApiRuleGroupV1
     */
    rules: Array<ApiRuleV1>;
    /**
     *
     * @type {number}
     * @memberof ApiRuleGroupV1
     */
    version: number;
}

export function ApiRuleGroupV1FromJSON(json: any): ApiRuleGroupV1 {
    return ApiRuleGroupV1FromJSONTyped(json, false);
}

export function ApiRuleGroupV1FromJSONTyped(json: any, ignoreDiscriminator: boolean): ApiRuleGroupV1 {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        comment: json["comment"],
        committedOn: new Date(json["committed_on"]),
        createdBy: json["created_by"],
        createdOn: new Date(json["created_on"]),
        customerId: json["customer_id"],
        deleted: json["deleted"],
        description: json["description"],
        enabled: json["enabled"],
        id: json["id"],
        modifiedBy: json["modified_by"],
        modifiedOn: new Date(json["modified_on"]),
        name: json["name"],
        platform: json["platform"],
        ruleIds: json["rule_ids"],
        rules: (json["rules"] as Array<any>).map(ApiRuleV1FromJSON),
        version: json["version"],
    };
}

export function ApiRuleGroupV1ToJSON(value?: ApiRuleGroupV1 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        comment: value.comment,
        committed_on: value.committedOn.toISOString(),
        created_by: value.createdBy,
        created_on: value.createdOn.toISOString(),
        customer_id: value.customerId,
        deleted: value.deleted,
        description: value.description,
        enabled: value.enabled,
        id: value.id,
        modified_by: value.modifiedBy,
        modified_on: value.modifiedOn.toISOString(),
        name: value.name,
        platform: value.platform,
        rule_ids: value.ruleIds,
        rules: (value.rules as Array<any>).map(ApiRuleV1ToJSON),
        version: value.version,
    };
}
