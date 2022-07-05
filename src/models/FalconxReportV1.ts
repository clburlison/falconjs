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
import type { FalconxIntelReportV1 } from "./FalconxIntelReportV1";
import { FalconxIntelReportV1FromJSON, FalconxIntelReportV1FromJSONTyped, FalconxIntelReportV1ToJSON } from "./FalconxIntelReportV1";
import type { FalconxMalqueryReportV1 } from "./FalconxMalqueryReportV1";
import { FalconxMalqueryReportV1FromJSON, FalconxMalqueryReportV1FromJSONTyped, FalconxMalqueryReportV1ToJSON } from "./FalconxMalqueryReportV1";
import type { FalconxSandboxReportV1 } from "./FalconxSandboxReportV1";
import { FalconxSandboxReportV1FromJSON, FalconxSandboxReportV1FromJSONTyped, FalconxSandboxReportV1ToJSON } from "./FalconxSandboxReportV1";
import type { FalconxThreatGraphReportV1 } from "./FalconxThreatGraphReportV1";
import { FalconxThreatGraphReportV1FromJSON, FalconxThreatGraphReportV1FromJSONTyped, FalconxThreatGraphReportV1ToJSON } from "./FalconxThreatGraphReportV1";

/**
 *
 * @export
 * @interface FalconxReportV1
 */
export interface FalconxReportV1 {
    /**
     *
     * @type {string}
     * @memberof FalconxReportV1
     */
    cid?: string;
    /**
     *
     * @type {string}
     * @memberof FalconxReportV1
     */
    createdTimestamp?: string;
    /**
     *
     * @type {string}
     * @memberof FalconxReportV1
     */
    id?: string;
    /**
     *
     * @type {Array<FalconxIntelReportV1>}
     * @memberof FalconxReportV1
     */
    intel?: Array<FalconxIntelReportV1>;
    /**
     *
     * @type {string}
     * @memberof FalconxReportV1
     */
    iocReportBroadCsvArtifactId?: string;
    /**
     *
     * @type {string}
     * @memberof FalconxReportV1
     */
    iocReportBroadJsonArtifactId?: string;
    /**
     *
     * @type {string}
     * @memberof FalconxReportV1
     */
    iocReportBroadMaecArtifactId?: string;
    /**
     *
     * @type {string}
     * @memberof FalconxReportV1
     */
    iocReportBroadStixArtifactId?: string;
    /**
     *
     * @type {string}
     * @memberof FalconxReportV1
     */
    iocReportStrictCsvArtifactId?: string;
    /**
     *
     * @type {string}
     * @memberof FalconxReportV1
     */
    iocReportStrictJsonArtifactId?: string;
    /**
     *
     * @type {string}
     * @memberof FalconxReportV1
     */
    iocReportStrictMaecArtifactId?: string;
    /**
     *
     * @type {string}
     * @memberof FalconxReportV1
     */
    iocReportStrictStixArtifactId?: string;
    /**
     *
     * @type {Array<FalconxMalqueryReportV1>}
     * @memberof FalconxReportV1
     */
    malquery?: Array<FalconxMalqueryReportV1>;
    /**
     *
     * @type {string}
     * @memberof FalconxReportV1
     */
    origin?: string;
    /**
     *
     * @type {Array<FalconxSandboxReportV1>}
     * @memberof FalconxReportV1
     */
    sandbox?: Array<FalconxSandboxReportV1>;
    /**
     *
     * @type {Array<string>}
     * @memberof FalconxReportV1
     */
    tags?: Array<string>;
    /**
     *
     * @type {FalconxThreatGraphReportV1}
     * @memberof FalconxReportV1
     */
    threatGraph?: FalconxThreatGraphReportV1;
    /**
     *
     * @type {string}
     * @memberof FalconxReportV1
     */
    userId?: string;
    /**
     *
     * @type {string}
     * @memberof FalconxReportV1
     */
    userName?: string;
    /**
     *
     * @type {Array<string>}
     * @memberof FalconxReportV1
     */
    userTags?: Array<string>;
    /**
     *
     * @type {string}
     * @memberof FalconxReportV1
     */
    userUuid?: string;
    /**
     *
     * @type {string}
     * @memberof FalconxReportV1
     */
    verdict?: string;
}

/**
 * Check if a given object implements the FalconxReportV1 interface.
 */
export function instanceOfFalconxReportV1(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function FalconxReportV1FromJSON(json: any): FalconxReportV1 {
    return FalconxReportV1FromJSONTyped(json, false);
}

export function FalconxReportV1FromJSONTyped(json: any, ignoreDiscriminator: boolean): FalconxReportV1 {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        cid: !exists(json, "cid") ? undefined : json["cid"],
        createdTimestamp: !exists(json, "created_timestamp") ? undefined : json["created_timestamp"],
        id: !exists(json, "id") ? undefined : json["id"],
        intel: !exists(json, "intel") ? undefined : (json["intel"] as Array<any>).map(FalconxIntelReportV1FromJSON),
        iocReportBroadCsvArtifactId: !exists(json, "ioc_report_broad_csv_artifact_id") ? undefined : json["ioc_report_broad_csv_artifact_id"],
        iocReportBroadJsonArtifactId: !exists(json, "ioc_report_broad_json_artifact_id") ? undefined : json["ioc_report_broad_json_artifact_id"],
        iocReportBroadMaecArtifactId: !exists(json, "ioc_report_broad_maec_artifact_id") ? undefined : json["ioc_report_broad_maec_artifact_id"],
        iocReportBroadStixArtifactId: !exists(json, "ioc_report_broad_stix_artifact_id") ? undefined : json["ioc_report_broad_stix_artifact_id"],
        iocReportStrictCsvArtifactId: !exists(json, "ioc_report_strict_csv_artifact_id") ? undefined : json["ioc_report_strict_csv_artifact_id"],
        iocReportStrictJsonArtifactId: !exists(json, "ioc_report_strict_json_artifact_id") ? undefined : json["ioc_report_strict_json_artifact_id"],
        iocReportStrictMaecArtifactId: !exists(json, "ioc_report_strict_maec_artifact_id") ? undefined : json["ioc_report_strict_maec_artifact_id"],
        iocReportStrictStixArtifactId: !exists(json, "ioc_report_strict_stix_artifact_id") ? undefined : json["ioc_report_strict_stix_artifact_id"],
        malquery: !exists(json, "malquery") ? undefined : (json["malquery"] as Array<any>).map(FalconxMalqueryReportV1FromJSON),
        origin: !exists(json, "origin") ? undefined : json["origin"],
        sandbox: !exists(json, "sandbox") ? undefined : (json["sandbox"] as Array<any>).map(FalconxSandboxReportV1FromJSON),
        tags: !exists(json, "tags") ? undefined : json["tags"],
        threatGraph: !exists(json, "threat_graph") ? undefined : FalconxThreatGraphReportV1FromJSON(json["threat_graph"]),
        userId: !exists(json, "user_id") ? undefined : json["user_id"],
        userName: !exists(json, "user_name") ? undefined : json["user_name"],
        userTags: !exists(json, "user_tags") ? undefined : json["user_tags"],
        userUuid: !exists(json, "user_uuid") ? undefined : json["user_uuid"],
        verdict: !exists(json, "verdict") ? undefined : json["verdict"],
    };
}

export function FalconxReportV1ToJSON(value?: FalconxReportV1 | null): any {
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
        intel: value.intel === undefined ? undefined : (value.intel as Array<any>).map(FalconxIntelReportV1ToJSON),
        ioc_report_broad_csv_artifact_id: value.iocReportBroadCsvArtifactId,
        ioc_report_broad_json_artifact_id: value.iocReportBroadJsonArtifactId,
        ioc_report_broad_maec_artifact_id: value.iocReportBroadMaecArtifactId,
        ioc_report_broad_stix_artifact_id: value.iocReportBroadStixArtifactId,
        ioc_report_strict_csv_artifact_id: value.iocReportStrictCsvArtifactId,
        ioc_report_strict_json_artifact_id: value.iocReportStrictJsonArtifactId,
        ioc_report_strict_maec_artifact_id: value.iocReportStrictMaecArtifactId,
        ioc_report_strict_stix_artifact_id: value.iocReportStrictStixArtifactId,
        malquery: value.malquery === undefined ? undefined : (value.malquery as Array<any>).map(FalconxMalqueryReportV1ToJSON),
        origin: value.origin,
        sandbox: value.sandbox === undefined ? undefined : (value.sandbox as Array<any>).map(FalconxSandboxReportV1ToJSON),
        tags: value.tags,
        threat_graph: FalconxThreatGraphReportV1ToJSON(value.threatGraph),
        user_id: value.userId,
        user_name: value.userName,
        user_tags: value.userTags,
        user_uuid: value.userUuid,
        verdict: value.verdict,
    };
}
