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
 * @interface ExecutionsTriggerResult
 */
export interface ExecutionsTriggerResult {
    /**
     * Unique identifier for the selected trigger as provided by the triggers API
     * @type {string}
     * @memberof ExecutionsTriggerResult
     */
    id?: string;
    /**
     * Whether this node's result is mocked
     * @type {boolean}
     * @memberof ExecutionsTriggerResult
     */
    mocked?: boolean;
    /**
     * Display name of the trigger
     * @type {string}
     * @memberof ExecutionsTriggerResult
     */
    name: string;
    /**
     * Opaque blob for result of trigger. Structured according to the trigger's JSON schema'.
     * @type {string}
     * @memberof ExecutionsTriggerResult
     */
    result?: string;
}

/**
 * Check if a given object implements the ExecutionsTriggerResult interface.
 */
export function instanceOfExecutionsTriggerResult(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "name" in value;

    return isInstance;
}

export function ExecutionsTriggerResultFromJSON(json: any): ExecutionsTriggerResult {
    return ExecutionsTriggerResultFromJSONTyped(json, false);
}

export function ExecutionsTriggerResultFromJSONTyped(json: any, ignoreDiscriminator: boolean): ExecutionsTriggerResult {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        id: !exists(json, "id") ? undefined : json["id"],
        mocked: !exists(json, "mocked") ? undefined : json["mocked"],
        name: json["name"],
        result: !exists(json, "result") ? undefined : json["result"],
    };
}

export function ExecutionsTriggerResultToJSON(value?: ExecutionsTriggerResult | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        id: value.id,
        mocked: value.mocked,
        name: value.name,
        result: value.result,
    };
}