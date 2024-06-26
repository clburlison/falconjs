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
import type { DomainFileCount } from "./DomainFileCount";
import { DomainFileCountFromJSON, DomainFileCountFromJSONTyped, DomainFileCountToJSON } from "./DomainFileCount";
import type { DomainScanMetadata } from "./DomainScanMetadata";
import { DomainScanMetadataFromJSON, DomainScanMetadataFromJSONTyped, DomainScanMetadataToJSON } from "./DomainScanMetadata";

/**
 *
 * @export
 * @interface DomainScan
 */
export interface DomainScan {
    /**
     *
     * @type {number}
     * @memberof DomainScan
     */
    affectedHostsCount?: number;
    /**
     *
     * @type {string}
     * @memberof DomainScan
     */
    cid?: string;
    /**
     *
     * @type {number}
     * @memberof DomainScan
     */
    cloudMlLevelDetection?: number;
    /**
     *
     * @type {number}
     * @memberof DomainScan
     */
    cloudMlLevelPrevention?: number;
    /**
     *
     * @type {number}
     * @memberof DomainScan
     */
    completedHostCount?: number;
    /**
     *
     * @type {number}
     * @memberof DomainScan
     */
    cpuPriority?: number;
    /**
     *
     * @type {string}
     * @memberof DomainScan
     */
    createdBy?: string;
    /**
     *
     * @type {Date}
     * @memberof DomainScan
     */
    createdOn?: Date;
    /**
     *
     * @type {string}
     * @memberof DomainScan
     */
    description?: string;
    /**
     *
     * @type {boolean}
     * @memberof DomainScan
     */
    endpointNotification?: boolean;
    /**
     *
     * @type {Array<string>}
     * @memberof DomainScan
     */
    filePaths?: Array<string>;
    /**
     *
     * @type {DomainFileCount}
     * @memberof DomainScan
     */
    filecount?: DomainFileCount;
    /**
     *
     * @type {Array<string>}
     * @memberof DomainScan
     */
    hostGroups?: Array<string>;
    /**
     *
     * @type {Array<string>}
     * @memberof DomainScan
     */
    hosts?: Array<string>;
    /**
     *
     * @type {string}
     * @memberof DomainScan
     */
    id: string;
    /**
     *
     * @type {number}
     * @memberof DomainScan
     */
    incompleteHostCount?: number;
    /**
     *
     * @type {string}
     * @memberof DomainScan
     */
    initiatedFrom?: string;
    /**
     *
     * @type {Date}
     * @memberof DomainScan
     */
    lastUpdated?: Date;
    /**
     *
     * @type {number}
     * @memberof DomainScan
     */
    maxDuration?: number;
    /**
     *
     * @type {number}
     * @memberof DomainScan
     */
    maxFileSize?: number;
    /**
     *
     * @type {Array<DomainScanMetadata>}
     * @memberof DomainScan
     */
    metadata?: Array<DomainScanMetadata>;
    /**
     *
     * @type {number}
     * @memberof DomainScan
     */
    missingHostCount?: number;
    /**
     *
     * @type {number}
     * @memberof DomainScan
     */
    notStartedHostCount?: number;
    /**
     *
     * @type {number}
     * @memberof DomainScan
     */
    pauseDuration?: number;
    /**
     *
     * @type {Array<number>}
     * @memberof DomainScan
     */
    policySetting?: Array<number>;
    /**
     *
     * @type {number}
     * @memberof DomainScan
     */
    preemptionPriority?: number;
    /**
     *
     * @type {string}
     * @memberof DomainScan
     */
    profileId?: string;
    /**
     *
     * @type {boolean}
     * @memberof DomainScan
     */
    quarantine?: boolean;
    /**
     *
     * @type {Date}
     * @memberof DomainScan
     */
    scanCompletedOn?: Date;
    /**
     *
     * @type {Array<string>}
     * @memberof DomainScan
     */
    scanExclusions?: Array<string>;
    /**
     *
     * @type {Array<string>}
     * @memberof DomainScan
     */
    scanInclusions?: Array<string>;
    /**
     *
     * @type {Date}
     * @memberof DomainScan
     */
    scanScheduledOn?: Date;
    /**
     *
     * @type {Date}
     * @memberof DomainScan
     */
    scanStartedOn?: Date;
    /**
     *
     * @type {number}
     * @memberof DomainScan
     */
    sensorMlLevelDetection?: number;
    /**
     *
     * @type {number}
     * @memberof DomainScan
     */
    sensorMlLevelPrevention?: number;
    /**
     *
     * @type {number}
     * @memberof DomainScan
     */
    severity?: number;
    /**
     *
     * @type {number}
     * @memberof DomainScan
     */
    startedHostCount?: number;
    /**
     *
     * @type {string}
     * @memberof DomainScan
     */
    status?: string;
    /**
     *
     * @type {number}
     * @memberof DomainScan
     */
    targetedHostCount?: number;
}

/**
 * Check if a given object implements the DomainScan interface.
 */
export function instanceOfDomainScan(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;

    return isInstance;
}

export function DomainScanFromJSON(json: any): DomainScan {
    return DomainScanFromJSONTyped(json, false);
}

export function DomainScanFromJSONTyped(json: any, ignoreDiscriminator: boolean): DomainScan {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        affectedHostsCount: !exists(json, "affected_hosts_count") ? undefined : json["affected_hosts_count"],
        cid: !exists(json, "cid") ? undefined : json["cid"],
        cloudMlLevelDetection: !exists(json, "cloud_ml_level_detection") ? undefined : json["cloud_ml_level_detection"],
        cloudMlLevelPrevention: !exists(json, "cloud_ml_level_prevention") ? undefined : json["cloud_ml_level_prevention"],
        completedHostCount: !exists(json, "completed_host_count") ? undefined : json["completed_host_count"],
        cpuPriority: !exists(json, "cpu_priority") ? undefined : json["cpu_priority"],
        createdBy: !exists(json, "created_by") ? undefined : json["created_by"],
        createdOn: !exists(json, "created_on") ? undefined : new Date(json["created_on"]),
        description: !exists(json, "description") ? undefined : json["description"],
        endpointNotification: !exists(json, "endpoint_notification") ? undefined : json["endpoint_notification"],
        filePaths: !exists(json, "file_paths") ? undefined : json["file_paths"],
        filecount: !exists(json, "filecount") ? undefined : DomainFileCountFromJSON(json["filecount"]),
        hostGroups: !exists(json, "host_groups") ? undefined : json["host_groups"],
        hosts: !exists(json, "hosts") ? undefined : json["hosts"],
        id: json["id"],
        incompleteHostCount: !exists(json, "incomplete_host_count") ? undefined : json["incomplete_host_count"],
        initiatedFrom: !exists(json, "initiated_from") ? undefined : json["initiated_from"],
        lastUpdated: !exists(json, "last_updated") ? undefined : new Date(json["last_updated"]),
        maxDuration: !exists(json, "max_duration") ? undefined : json["max_duration"],
        maxFileSize: !exists(json, "max_file_size") ? undefined : json["max_file_size"],
        metadata: !exists(json, "metadata") ? undefined : (json["metadata"] as Array<any>).map(DomainScanMetadataFromJSON),
        missingHostCount: !exists(json, "missing_host_count") ? undefined : json["missing_host_count"],
        notStartedHostCount: !exists(json, "not_started_host_count") ? undefined : json["not_started_host_count"],
        pauseDuration: !exists(json, "pause_duration") ? undefined : json["pause_duration"],
        policySetting: !exists(json, "policy_setting") ? undefined : json["policy_setting"],
        preemptionPriority: !exists(json, "preemption_priority") ? undefined : json["preemption_priority"],
        profileId: !exists(json, "profile_id") ? undefined : json["profile_id"],
        quarantine: !exists(json, "quarantine") ? undefined : json["quarantine"],
        scanCompletedOn: !exists(json, "scan_completed_on") ? undefined : new Date(json["scan_completed_on"]),
        scanExclusions: !exists(json, "scan_exclusions") ? undefined : json["scan_exclusions"],
        scanInclusions: !exists(json, "scan_inclusions") ? undefined : json["scan_inclusions"],
        scanScheduledOn: !exists(json, "scan_scheduled_on") ? undefined : new Date(json["scan_scheduled_on"]),
        scanStartedOn: !exists(json, "scan_started_on") ? undefined : new Date(json["scan_started_on"]),
        sensorMlLevelDetection: !exists(json, "sensor_ml_level_detection") ? undefined : json["sensor_ml_level_detection"],
        sensorMlLevelPrevention: !exists(json, "sensor_ml_level_prevention") ? undefined : json["sensor_ml_level_prevention"],
        severity: !exists(json, "severity") ? undefined : json["severity"],
        startedHostCount: !exists(json, "started_host_count") ? undefined : json["started_host_count"],
        status: !exists(json, "status") ? undefined : json["status"],
        targetedHostCount: !exists(json, "targeted_host_count") ? undefined : json["targeted_host_count"],
    };
}

export function DomainScanToJSON(value?: DomainScan | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        affected_hosts_count: value.affectedHostsCount,
        cid: value.cid,
        cloud_ml_level_detection: value.cloudMlLevelDetection,
        cloud_ml_level_prevention: value.cloudMlLevelPrevention,
        completed_host_count: value.completedHostCount,
        cpu_priority: value.cpuPriority,
        created_by: value.createdBy,
        created_on: value.createdOn === undefined ? undefined : value.createdOn.toISOString(),
        description: value.description,
        endpoint_notification: value.endpointNotification,
        file_paths: value.filePaths,
        filecount: DomainFileCountToJSON(value.filecount),
        host_groups: value.hostGroups,
        hosts: value.hosts,
        id: value.id,
        incomplete_host_count: value.incompleteHostCount,
        initiated_from: value.initiatedFrom,
        last_updated: value.lastUpdated === undefined ? undefined : value.lastUpdated.toISOString(),
        max_duration: value.maxDuration,
        max_file_size: value.maxFileSize,
        metadata: value.metadata === undefined ? undefined : (value.metadata as Array<any>).map(DomainScanMetadataToJSON),
        missing_host_count: value.missingHostCount,
        not_started_host_count: value.notStartedHostCount,
        pause_duration: value.pauseDuration,
        policy_setting: value.policySetting,
        preemption_priority: value.preemptionPriority,
        profile_id: value.profileId,
        quarantine: value.quarantine,
        scan_completed_on: value.scanCompletedOn === undefined ? undefined : value.scanCompletedOn.toISOString(),
        scan_exclusions: value.scanExclusions,
        scan_inclusions: value.scanInclusions,
        scan_scheduled_on: value.scanScheduledOn === undefined ? undefined : value.scanScheduledOn.toISOString(),
        scan_started_on: value.scanStartedOn === undefined ? undefined : value.scanStartedOn.toISOString(),
        sensor_ml_level_detection: value.sensorMlLevelDetection,
        sensor_ml_level_prevention: value.sensorMlLevelPrevention,
        severity: value.severity,
        started_host_count: value.startedHostCount,
        status: value.status,
        targeted_host_count: value.targetedHostCount,
    };
}
