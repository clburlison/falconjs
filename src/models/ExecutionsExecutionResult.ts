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
import type { ExecutionsActivityExecutionResult } from "./ExecutionsActivityExecutionResult";
import { ExecutionsActivityExecutionResultFromJSON, ExecutionsActivityExecutionResultFromJSONTyped, ExecutionsActivityExecutionResultToJSON } from "./ExecutionsActivityExecutionResult";
import type { ExecutionsAncestorExecution } from "./ExecutionsAncestorExecution";
import { ExecutionsAncestorExecutionFromJSON, ExecutionsAncestorExecutionFromJSONTyped, ExecutionsAncestorExecutionToJSON } from "./ExecutionsAncestorExecution";
import type { ExecutionsLoopResult } from "./ExecutionsLoopResult";
import { ExecutionsLoopResultFromJSON, ExecutionsLoopResultFromJSONTyped, ExecutionsLoopResultToJSON } from "./ExecutionsLoopResult";
import type { ExecutionsTriggerResult } from "./ExecutionsTriggerResult";
import { ExecutionsTriggerResultFromJSON, ExecutionsTriggerResultFromJSONTyped, ExecutionsTriggerResultToJSON } from "./ExecutionsTriggerResult";

/**
 *
 * @export
 * @interface ExecutionsExecutionResult
 */
export interface ExecutionsExecutionResult {
    /**
     * Details for the result of each activity node.
     * @type {Array<ExecutionsActivityExecutionResult>}
     * @memberof ExecutionsExecutionResult
     */
    activities: Array<ExecutionsActivityExecutionResult>;
    /**
     * Populated when the execution origin is from a sub model.
     * @type {Array<ExecutionsAncestorExecution>}
     * @memberof ExecutionsExecutionResult
     */
    ancestorExecutions: Array<ExecutionsAncestorExecution>;
    /**
     * Unique id of the workflow the execution is associated with.
     * @type {string}
     * @memberof ExecutionsExecutionResult
     */
    definitionId: string;
    /**
     * Version of the definition that executed.
     * @type {number}
     * @memberof ExecutionsExecutionResult
     */
    definitionVersion: number;
    /**
     * Timestamp of when the execution completed. Only present when status is an end state.
     * @type {Date}
     * @memberof ExecutionsExecutionResult
     */
    endTimestamp?: Date;
    /**
     * Unique id generated for the execution.
     * @type {string}
     * @memberof ExecutionsExecutionResult
     */
    executionId: string;
    /**
     * Details for the results of each loop in the workflow definition.
     * @type {Array<ExecutionsLoopResult>}
     * @memberof ExecutionsExecutionResult
     */
    loops: Array<ExecutionsLoopResult>;
    /**
     * A boolean value indicating whether the failed workflow execution is retryable
     * @type {boolean}
     * @memberof ExecutionsExecutionResult
     */
    retryable: boolean;
    /**
     * Timestamp of when the execution first started.
     * @type {Date}
     * @memberof ExecutionsExecutionResult
     */
    startTimestamp: Date;
    /**
     * Overall status for the execution.
     * @type {string}
     * @memberof ExecutionsExecutionResult
     */
    status: string;
    /**
     *
     * @type {ExecutionsTriggerResult}
     * @memberof ExecutionsExecutionResult
     */
    trigger: ExecutionsTriggerResult;
}

/**
 * Check if a given object implements the ExecutionsExecutionResult interface.
 */
export function instanceOfExecutionsExecutionResult(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "activities" in value;
    isInstance = isInstance && "ancestorExecutions" in value;
    isInstance = isInstance && "definitionId" in value;
    isInstance = isInstance && "definitionVersion" in value;
    isInstance = isInstance && "executionId" in value;
    isInstance = isInstance && "loops" in value;
    isInstance = isInstance && "retryable" in value;
    isInstance = isInstance && "startTimestamp" in value;
    isInstance = isInstance && "status" in value;
    isInstance = isInstance && "trigger" in value;

    return isInstance;
}

export function ExecutionsExecutionResultFromJSON(json: any): ExecutionsExecutionResult {
    return ExecutionsExecutionResultFromJSONTyped(json, false);
}

export function ExecutionsExecutionResultFromJSONTyped(json: any, ignoreDiscriminator: boolean): ExecutionsExecutionResult {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        activities: (json["activities"] as Array<any>).map(ExecutionsActivityExecutionResultFromJSON),
        ancestorExecutions: (json["ancestor_executions"] as Array<any>).map(ExecutionsAncestorExecutionFromJSON),
        definitionId: json["definition_id"],
        definitionVersion: json["definition_version"],
        endTimestamp: !exists(json, "end_timestamp") ? undefined : new Date(json["end_timestamp"]),
        executionId: json["execution_id"],
        loops: (json["loops"] as Array<any>).map(ExecutionsLoopResultFromJSON),
        retryable: json["retryable"],
        startTimestamp: new Date(json["start_timestamp"]),
        status: json["status"],
        trigger: ExecutionsTriggerResultFromJSON(json["trigger"]),
    };
}

export function ExecutionsExecutionResultToJSON(value?: ExecutionsExecutionResult | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        activities: (value.activities as Array<any>).map(ExecutionsActivityExecutionResultToJSON),
        ancestor_executions: (value.ancestorExecutions as Array<any>).map(ExecutionsAncestorExecutionToJSON),
        definition_id: value.definitionId,
        definition_version: value.definitionVersion,
        end_timestamp: value.endTimestamp === undefined ? undefined : value.endTimestamp.toISOString(),
        execution_id: value.executionId,
        loops: (value.loops as Array<any>).map(ExecutionsLoopResultToJSON),
        retryable: value.retryable,
        start_timestamp: value.startTimestamp.toISOString(),
        status: value.status,
        trigger: ExecutionsTriggerResultToJSON(value.trigger),
    };
}
