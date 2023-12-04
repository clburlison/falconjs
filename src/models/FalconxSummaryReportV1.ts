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
import type { FalconxIntelSummaryReportV1 } from "./FalconxIntelSummaryReportV1";
import { FalconxIntelSummaryReportV1FromJSON, FalconxIntelSummaryReportV1FromJSONTyped, FalconxIntelSummaryReportV1ToJSON } from "./FalconxIntelSummaryReportV1";
import type { FalconxSandboxSummaryReportV1 } from "./FalconxSandboxSummaryReportV1";
import { FalconxSandboxSummaryReportV1FromJSON, FalconxSandboxSummaryReportV1FromJSONTyped, FalconxSandboxSummaryReportV1ToJSON } from "./FalconxSandboxSummaryReportV1";

/**
 *
 * @export
 * @interface FalconxSummaryReportV1
 */
export interface FalconxSummaryReportV1 {
    /**
     *
     * @type {string}
     * @memberof FalconxSummaryReportV1
     */
    cid?: string;
    /**
     *
     * @type {string}
     * @memberof FalconxSummaryReportV1
     */
    createdTimestamp?: string;
    /**
     *
     * @type {string}
     * @memberof FalconxSummaryReportV1
     */
    id?: string;
    /**
     *
     * @type {Array<FalconxIntelSummaryReportV1>}
     * @memberof FalconxSummaryReportV1
     */
    intel?: Array<FalconxIntelSummaryReportV1>;
    /**
     *
     * @type {string}
     * @memberof FalconxSummaryReportV1
     */
    iocReportBroadCsvArtifactId?: string;
    /**
     *
     * @type {string}
     * @memberof FalconxSummaryReportV1
     */
    iocReportBroadJsonArtifactId?: string;
    /**
     *
     * @type {string}
     * @memberof FalconxSummaryReportV1
     */
    iocReportBroadMaecArtifactId?: string;
    /**
     *
     * @type {string}
     * @memberof FalconxSummaryReportV1
     */
    iocReportBroadStixArtifactId?: string;
    /**
     *
     * @type {string}
     * @memberof FalconxSummaryReportV1
     */
    iocReportStrictCsvArtifactId?: string;
    /**
     *
     * @type {string}
     * @memberof FalconxSummaryReportV1
     */
    iocReportStrictJsonArtifactId?: string;
    /**
     *
     * @type {string}
     * @memberof FalconxSummaryReportV1
     */
    iocReportStrictMaecArtifactId?: string;
    /**
     *
     * @type {string}
     * @memberof FalconxSummaryReportV1
     */
    iocReportStrictStixArtifactId?: string;
    /**
     *
     * @type {string}
     * @memberof FalconxSummaryReportV1
     */
    origin?: string;
    /**
     *
     * @type {Array<FalconxSandboxSummaryReportV1>}
     * @memberof FalconxSummaryReportV1
     */
    sandbox?: Array<FalconxSandboxSummaryReportV1>;
    /**
     *
     * @type {Array<string>}
     * @memberof FalconxSummaryReportV1
     */
    tags?: Array<string>;
    /**
     *
     * @type {string}
     * @memberof FalconxSummaryReportV1
     */
    userId?: string;
    /**
     *
     * @type {string}
     * @memberof FalconxSummaryReportV1
     */
    userName?: string;
    /**
     *
     * @type {Array<string>}
     * @memberof FalconxSummaryReportV1
     */
    userTags?: Array<string>;
    /**
     *
     * @type {string}
     * @memberof FalconxSummaryReportV1
     */
    verdict?: string;
}

/**
 * Check if a given object implements the FalconxSummaryReportV1 interface.
 */
export function instanceOfFalconxSummaryReportV1(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function FalconxSummaryReportV1FromJSON(json: any): FalconxSummaryReportV1 {
    return FalconxSummaryReportV1FromJSONTyped(json, false);
}

export function FalconxSummaryReportV1FromJSONTyped(json: any, ignoreDiscriminator: boolean): FalconxSummaryReportV1 {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        cid: !exists(json, "cid") ? undefined : json["cid"],
        createdTimestamp: !exists(json, "created_timestamp") ? undefined : json["created_timestamp"],
        id: !exists(json, "id") ? undefined : json["id"],
        intel: !exists(json, "intel") ? undefined : (json["intel"] as Array<any>).map(FalconxIntelSummaryReportV1FromJSON),
        iocReportBroadCsvArtifactId: !exists(json, "ioc_report_broad_csv_artifact_id") ? undefined : json["ioc_report_broad_csv_artifact_id"],
        iocReportBroadJsonArtifactId: !exists(json, "ioc_report_broad_json_artifact_id") ? undefined : json["ioc_report_broad_json_artifact_id"],
        iocReportBroadMaecArtifactId: !exists(json, "ioc_report_broad_maec_artifact_id") ? undefined : json["ioc_report_broad_maec_artifact_id"],
        iocReportBroadStixArtifactId: !exists(json, "ioc_report_broad_stix_artifact_id") ? undefined : json["ioc_report_broad_stix_artifact_id"],
        iocReportStrictCsvArtifactId: !exists(json, "ioc_report_strict_csv_artifact_id") ? undefined : json["ioc_report_strict_csv_artifact_id"],
        iocReportStrictJsonArtifactId: !exists(json, "ioc_report_strict_json_artifact_id") ? undefined : json["ioc_report_strict_json_artifact_id"],
        iocReportStrictMaecArtifactId: !exists(json, "ioc_report_strict_maec_artifact_id") ? undefined : json["ioc_report_strict_maec_artifact_id"],
        iocReportStrictStixArtifactId: !exists(json, "ioc_report_strict_stix_artifact_id") ? undefined : json["ioc_report_strict_stix_artifact_id"],
        origin: !exists(json, "origin") ? undefined : json["origin"],
        sandbox: !exists(json, "sandbox") ? undefined : (json["sandbox"] as Array<any>).map(FalconxSandboxSummaryReportV1FromJSON),
        tags: !exists(json, "tags") ? undefined : json["tags"],
        userId: !exists(json, "user_id") ? undefined : json["user_id"],
        userName: !exists(json, "user_name") ? undefined : json["user_name"],
        userTags: !exists(json, "user_tags") ? undefined : json["user_tags"],
        verdict: !exists(json, "verdict") ? undefined : json["verdict"],
    };
}

export function FalconxSummaryReportV1ToJSON(value?: FalconxSummaryReportV1 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        cid: value.cid,
        created_timestamp: value.createdTimestamp,
        id: value.id,
        intel: value.intel === undefined ? undefined : (value.intel as Array<any>).map(FalconxIntelSummaryReportV1ToJSON),
        ioc_report_broad_csv_artifact_id: value.iocReportBroadCsvArtifactId,
        ioc_report_broad_json_artifact_id: value.iocReportBroadJsonArtifactId,
        ioc_report_broad_maec_artifact_id: value.iocReportBroadMaecArtifactId,
        ioc_report_broad_stix_artifact_id: value.iocReportBroadStixArtifactId,
        ioc_report_strict_csv_artifact_id: value.iocReportStrictCsvArtifactId,
        ioc_report_strict_json_artifact_id: value.iocReportStrictJsonArtifactId,
        ioc_report_strict_maec_artifact_id: value.iocReportStrictMaecArtifactId,
        ioc_report_strict_stix_artifact_id: value.iocReportStrictStixArtifactId,
        origin: value.origin,
        sandbox: value.sandbox === undefined ? undefined : (value.sandbox as Array<any>).map(FalconxSandboxSummaryReportV1ToJSON),
        tags: value.tags,
        user_id: value.userId,
        user_name: value.userName,
        user_tags: value.userTags,
        verdict: value.verdict,
    };
}
