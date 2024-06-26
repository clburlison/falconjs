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
import type { FalconxSandboxParametersV1 } from "./FalconxSandboxParametersV1";
import { FalconxSandboxParametersV1FromJSON, FalconxSandboxParametersV1FromJSONTyped, FalconxSandboxParametersV1ToJSON } from "./FalconxSandboxParametersV1";

/**
 *
 * @export
 * @interface FalconxSubmissionV1
 */
export interface FalconxSubmissionV1 {
    /**
     *
     * @type {string}
     * @memberof FalconxSubmissionV1
     */
    cid?: string;
    /**
     *
     * @type {string}
     * @memberof FalconxSubmissionV1
     */
    createdTimestamp?: string;
    /**
     *
     * @type {string}
     * @memberof FalconxSubmissionV1
     */
    errorMessage?: string;
    /**
     *
     * @type {string}
     * @memberof FalconxSubmissionV1
     */
    errorOrigin?: string;
    /**
     *
     * @type {string}
     * @memberof FalconxSubmissionV1
     */
    errorType?: string;
    /**
     *
     * @type {string}
     * @memberof FalconxSubmissionV1
     */
    id?: string;
    /**
     *
     * @type {string}
     * @memberof FalconxSubmissionV1
     */
    indexTimestamp?: string;
    /**
     *
     * @type {string}
     * @memberof FalconxSubmissionV1
     */
    interactivePhase?: string;
    /**
     *
     * @type {string}
     * @memberof FalconxSubmissionV1
     */
    origin?: string;
    /**
     *
     * @type {Array<FalconxSandboxParametersV1>}
     * @memberof FalconxSubmissionV1
     */
    sandbox?: Array<FalconxSandboxParametersV1>;
    /**
     *
     * @type {boolean}
     * @memberof FalconxSubmissionV1
     */
    sendEmailNotification?: boolean;
    /**
     *
     * @type {string}
     * @memberof FalconxSubmissionV1
     */
    state?: string;
    /**
     *
     * @type {string}
     * @memberof FalconxSubmissionV1
     */
    userId?: string;
    /**
     *
     * @type {string}
     * @memberof FalconxSubmissionV1
     */
    userName?: string;
    /**
     *
     * @type {Array<string>}
     * @memberof FalconxSubmissionV1
     */
    userTags?: Array<string>;
    /**
     *
     * @type {string}
     * @memberof FalconxSubmissionV1
     */
    userUuid?: string;
}

/**
 * Check if a given object implements the FalconxSubmissionV1 interface.
 */
export function instanceOfFalconxSubmissionV1(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function FalconxSubmissionV1FromJSON(json: any): FalconxSubmissionV1 {
    return FalconxSubmissionV1FromJSONTyped(json, false);
}

export function FalconxSubmissionV1FromJSONTyped(json: any, ignoreDiscriminator: boolean): FalconxSubmissionV1 {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        cid: !exists(json, "cid") ? undefined : json["cid"],
        createdTimestamp: !exists(json, "created_timestamp") ? undefined : json["created_timestamp"],
        errorMessage: !exists(json, "error_message") ? undefined : json["error_message"],
        errorOrigin: !exists(json, "error_origin") ? undefined : json["error_origin"],
        errorType: !exists(json, "error_type") ? undefined : json["error_type"],
        id: !exists(json, "id") ? undefined : json["id"],
        indexTimestamp: !exists(json, "index_timestamp") ? undefined : json["index_timestamp"],
        interactivePhase: !exists(json, "interactive_phase") ? undefined : json["interactive_phase"],
        origin: !exists(json, "origin") ? undefined : json["origin"],
        sandbox: !exists(json, "sandbox") ? undefined : (json["sandbox"] as Array<any>).map(FalconxSandboxParametersV1FromJSON),
        sendEmailNotification: !exists(json, "send_email_notification") ? undefined : json["send_email_notification"],
        state: !exists(json, "state") ? undefined : json["state"],
        userId: !exists(json, "user_id") ? undefined : json["user_id"],
        userName: !exists(json, "user_name") ? undefined : json["user_name"],
        userTags: !exists(json, "user_tags") ? undefined : json["user_tags"],
        userUuid: !exists(json, "user_uuid") ? undefined : json["user_uuid"],
    };
}

export function FalconxSubmissionV1ToJSON(value?: FalconxSubmissionV1 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        cid: value.cid,
        created_timestamp: value.createdTimestamp,
        error_message: value.errorMessage,
        error_origin: value.errorOrigin,
        error_type: value.errorType,
        id: value.id,
        index_timestamp: value.indexTimestamp,
        interactive_phase: value.interactivePhase,
        origin: value.origin,
        sandbox: value.sandbox === undefined ? undefined : (value.sandbox as Array<any>).map(FalconxSandboxParametersV1ToJSON),
        send_email_notification: value.sendEmailNotification,
        state: value.state,
        user_id: value.userId,
        user_name: value.userName,
        user_tags: value.userTags,
        user_uuid: value.userUuid,
    };
}
