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
import {
    CloudontologyPatternDisposition,
    CloudontologyPatternDispositionFromJSON,
    CloudontologyPatternDispositionFromJSONTyped,
    CloudontologyPatternDispositionToJSON,
} from "./CloudontologyPatternDisposition";

/**
 *
 * @export
 * @interface DomainBehavior
 */
export interface DomainBehavior {
    /**
     *
     * @type {string}
     * @memberof DomainBehavior
     */
    aid?: string;
    /**
     *
     * @type {string}
     * @memberof DomainBehavior
     */
    behaviorId?: string;
    /**
     *
     * @type {string}
     * @memberof DomainBehavior
     */
    cid?: string;
    /**
     *
     * @type {string}
     * @memberof DomainBehavior
     */
    cmdline?: string;
    /**
     *
     * @type {string}
     * @memberof DomainBehavior
     */
    compoundTto?: string;
    /**
     *
     * @type {string}
     * @memberof DomainBehavior
     */
    detectionId?: string;
    /**
     *
     * @type {string}
     * @memberof DomainBehavior
     */
    domain?: string;
    /**
     *
     * @type {string}
     * @memberof DomainBehavior
     */
    filepath?: string;
    /**
     *
     * @type {string}
     * @memberof DomainBehavior
     */
    incidentId?: string;
    /**
     *
     * @type {Array<string>}
     * @memberof DomainBehavior
     */
    incidentIds?: Array<string>;
    /**
     *
     * @type {string}
     * @memberof DomainBehavior
     */
    iocSource?: string;
    /**
     *
     * @type {string}
     * @memberof DomainBehavior
     */
    iocType?: string;
    /**
     *
     * @type {string}
     * @memberof DomainBehavior
     */
    iocValue?: string;
    /**
     *
     * @type {string}
     * @memberof DomainBehavior
     */
    objective?: string;
    /**
     *
     * @type {number}
     * @memberof DomainBehavior
     */
    patternDisposition?: number;
    /**
     *
     * @type {CloudontologyPatternDisposition}
     * @memberof DomainBehavior
     */
    patternDispositionDetails?: CloudontologyPatternDisposition;
    /**
     *
     * @type {number}
     * @memberof DomainBehavior
     */
    patternId: number;
    /**
     *
     * @type {string}
     * @memberof DomainBehavior
     */
    sha256?: string;
    /**
     *
     * @type {string}
     * @memberof DomainBehavior
     */
    tactic?: string;
    /**
     *
     * @type {string}
     * @memberof DomainBehavior
     */
    technique?: string;
    /**
     *
     * @type {number}
     * @memberof DomainBehavior
     */
    templateInstanceId: number;
    /**
     *
     * @type {Date}
     * @memberof DomainBehavior
     */
    timestamp: Date;
    /**
     *
     * @type {string}
     * @memberof DomainBehavior
     */
    userName?: string;
}

export function DomainBehaviorFromJSON(json: any): DomainBehavior {
    return DomainBehaviorFromJSONTyped(json, false);
}

export function DomainBehaviorFromJSONTyped(json: any, ignoreDiscriminator: boolean): DomainBehavior {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        aid: !exists(json, "aid") ? undefined : json["aid"],
        behaviorId: !exists(json, "behavior_id") ? undefined : json["behavior_id"],
        cid: !exists(json, "cid") ? undefined : json["cid"],
        cmdline: !exists(json, "cmdline") ? undefined : json["cmdline"],
        compoundTto: !exists(json, "compound_tto") ? undefined : json["compound_tto"],
        detectionId: !exists(json, "detection_id") ? undefined : json["detection_id"],
        domain: !exists(json, "domain") ? undefined : json["domain"],
        filepath: !exists(json, "filepath") ? undefined : json["filepath"],
        incidentId: !exists(json, "incident_id") ? undefined : json["incident_id"],
        incidentIds: !exists(json, "incident_ids") ? undefined : json["incident_ids"],
        iocSource: !exists(json, "ioc_source") ? undefined : json["ioc_source"],
        iocType: !exists(json, "ioc_type") ? undefined : json["ioc_type"],
        iocValue: !exists(json, "ioc_value") ? undefined : json["ioc_value"],
        objective: !exists(json, "objective") ? undefined : json["objective"],
        patternDisposition: !exists(json, "pattern_disposition") ? undefined : json["pattern_disposition"],
        patternDispositionDetails: !exists(json, "pattern_disposition_details") ? undefined : CloudontologyPatternDispositionFromJSON(json["pattern_disposition_details"]),
        patternId: json["pattern_id"],
        sha256: !exists(json, "sha256") ? undefined : json["sha256"],
        tactic: !exists(json, "tactic") ? undefined : json["tactic"],
        technique: !exists(json, "technique") ? undefined : json["technique"],
        templateInstanceId: json["template_instance_id"],
        timestamp: new Date(json["timestamp"]),
        userName: !exists(json, "user_name") ? undefined : json["user_name"],
    };
}

export function DomainBehaviorToJSON(value?: DomainBehavior | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        aid: value.aid,
        behavior_id: value.behaviorId,
        cid: value.cid,
        cmdline: value.cmdline,
        compound_tto: value.compoundTto,
        detection_id: value.detectionId,
        domain: value.domain,
        filepath: value.filepath,
        incident_id: value.incidentId,
        incident_ids: value.incidentIds,
        ioc_source: value.iocSource,
        ioc_type: value.iocType,
        ioc_value: value.iocValue,
        objective: value.objective,
        pattern_disposition: value.patternDisposition,
        pattern_disposition_details: CloudontologyPatternDispositionToJSON(value.patternDispositionDetails),
        pattern_id: value.patternId,
        sha256: value.sha256,
        tactic: value.tactic,
        technique: value.technique,
        template_instance_id: value.templateInstanceId,
        timestamp: value.timestamp.toISOString(),
        user_name: value.userName,
    };
}
