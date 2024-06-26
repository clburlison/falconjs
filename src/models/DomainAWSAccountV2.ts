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
import type { DomainAWSD4CAccountV1 } from "./DomainAWSD4CAccountV1";
import { DomainAWSD4CAccountV1FromJSON, DomainAWSD4CAccountV1FromJSONTyped, DomainAWSD4CAccountV1ToJSON } from "./DomainAWSD4CAccountV1";
import type { DomainCloudScope } from "./DomainCloudScope";
import { DomainCloudScopeFromJSON, DomainCloudScopeFromJSONTyped, DomainCloudScopeToJSON } from "./DomainCloudScope";
import type { DomainCondition } from "./DomainCondition";
import { DomainConditionFromJSON, DomainConditionFromJSONTyped, DomainConditionToJSON } from "./DomainCondition";
import type { DomainPermission } from "./DomainPermission";
import { DomainPermissionFromJSON, DomainPermissionFromJSONTyped, DomainPermissionToJSON } from "./DomainPermission";

/**
 *
 * @export
 * @interface DomainAWSAccountV2
 */
export interface DomainAWSAccountV2 {
    /**
     *
     * @type {Date}
     * @memberof DomainAWSAccountV2
     */
    createdAt: Date;
    /**
     *
     * @type {Date}
     * @memberof DomainAWSAccountV2
     */
    deletedAt: Date;
    /**
     *
     * @type {number}
     * @memberof DomainAWSAccountV2
     */
    iD: number;
    /**
     *
     * @type {Date}
     * @memberof DomainAWSAccountV2
     */
    updatedAt: Date;
    /**
     * 12 digit AWS provided unique identifier for the account.
     * @type {string}
     * @memberof DomainAWSAccountV2
     */
    accountId?: string;
    /**
     * AWS account name
     * @type {string}
     * @memberof DomainAWSAccountV2
     */
    accountName?: string;
    /**
     *
     * @type {string}
     * @memberof DomainAWSAccountV2
     */
    accountType?: string;
    /**
     *
     * @type {Array<string>}
     * @memberof DomainAWSAccountV2
     */
    activeRegions?: Array<string>;
    /**
     * AWS CloudTrail bucket name to store logs.
     * @type {string}
     * @memberof DomainAWSAccountV2
     */
    awsCloudtrailBucketName?: string;
    /**
     * AWS CloudTrail region.
     * @type {string}
     * @memberof DomainAWSAccountV2
     */
    awsCloudtrailRegion?: string;
    /**
     * AWS Eventbus ARN.
     * @type {string}
     * @memberof DomainAWSAccountV2
     */
    awsEventbusArn?: string;
    /**
     * Permissions status returned via API.
     * @type {Array<DomainPermission>}
     * @memberof DomainAWSAccountV2
     */
    awsPermissionsStatus: Array<DomainPermission>;
    /**
     *
     * @type {boolean}
     * @memberof DomainAWSAccountV2
     */
    behaviorAssessmentEnabled?: boolean;
    /**
     *
     * @type {string}
     * @memberof DomainAWSAccountV2
     */
    cid?: string;
    /**
     *
     * @type {Array<DomainCloudScope>}
     * @memberof DomainAWSAccountV2
     */
    cloudScopes?: Array<DomainCloudScope>;
    /**
     *
     * @type {string}
     * @memberof DomainAWSAccountV2
     */
    cloudformationUrl?: string;
    /**
     *
     * @type {Array<DomainCondition>}
     * @memberof DomainAWSAccountV2
     */
    conditions?: Array<DomainCondition>;
    /**
     *
     * @type {boolean}
     * @memberof DomainAWSAccountV2
     */
    cspmEnabled?: boolean;
    /**
     *
     * @type {DomainAWSD4CAccountV1}
     * @memberof DomainAWSAccountV2
     */
    d4c?: DomainAWSD4CAccountV1;
    /**
     *
     * @type {boolean}
     * @memberof DomainAWSAccountV2
     */
    d4cMigrated?: boolean;
    /**
     *
     * @type {string}
     * @memberof DomainAWSAccountV2
     */
    environment?: string;
    /**
     *
     * @type {string}
     * @memberof DomainAWSAccountV2
     */
    eventbusName?: string;
    /**
     * ID assigned for use with cross account IAM role access.
     * @type {string}
     * @memberof DomainAWSAccountV2
     */
    externalId?: string;
    /**
     * The full arn of the IAM role created in this account to control access.
     * @type {string}
     * @memberof DomainAWSAccountV2
     */
    iamRoleArn?: string;
    /**
     *
     * @type {string}
     * @memberof DomainAWSAccountV2
     */
    intermediateRoleArn?: string;
    /**
     *
     * @type {boolean}
     * @memberof DomainAWSAccountV2
     */
    isCustomRolename: boolean;
    /**
     *
     * @type {boolean}
     * @memberof DomainAWSAccountV2
     */
    isMaster?: boolean;
    /**
     * Up to 34 character AWS provided unique identifier for the organization.
     * @type {string}
     * @memberof DomainAWSAccountV2
     */
    organizationId?: string;
    /**
     *
     * @type {string}
     * @memberof DomainAWSAccountV2
     */
    remediationCloudformationUrl?: string;
    /**
     *
     * @type {string}
     * @memberof DomainAWSAccountV2
     */
    remediationRegion?: string;
    /**
     *
     * @type {Date}
     * @memberof DomainAWSAccountV2
     */
    remediationTouAccepted?: Date;
    /**
     * 12 digit AWS provided unique identifier for the root account (of the organization this account belongs to).
     * @type {string}
     * @memberof DomainAWSAccountV2
     */
    rootAccountId?: string;
    /**
     *
     * @type {boolean}
     * @memberof DomainAWSAccountV2
     */
    rootIamRole?: boolean;
    /**
     *
     * @type {string}
     * @memberof DomainAWSAccountV2
     */
    secondaryRoleArn?: string;
    /**
     *
     * @type {boolean}
     * @memberof DomainAWSAccountV2
     */
    sensorManagementEnabled: boolean;
    /**
     *
     * @type {object}
     * @memberof DomainAWSAccountV2
     */
    settings?: object;
    /**
     * Account registration status.
     * @type {string}
     * @memberof DomainAWSAccountV2
     */
    status?: string;
    /**
     *
     * @type {boolean}
     * @memberof DomainAWSAccountV2
     */
    useExistingCloudtrail?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof DomainAWSAccountV2
     */
    valid?: boolean;
}

/**
 * Check if a given object implements the DomainAWSAccountV2 interface.
 */
export function instanceOfDomainAWSAccountV2(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "createdAt" in value;
    isInstance = isInstance && "deletedAt" in value;
    isInstance = isInstance && "iD" in value;
    isInstance = isInstance && "updatedAt" in value;
    isInstance = isInstance && "awsPermissionsStatus" in value;
    isInstance = isInstance && "isCustomRolename" in value;
    isInstance = isInstance && "sensorManagementEnabled" in value;

    return isInstance;
}

export function DomainAWSAccountV2FromJSON(json: any): DomainAWSAccountV2 {
    return DomainAWSAccountV2FromJSONTyped(json, false);
}

export function DomainAWSAccountV2FromJSONTyped(json: any, ignoreDiscriminator: boolean): DomainAWSAccountV2 {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        createdAt: new Date(json["CreatedAt"]),
        deletedAt: new Date(json["DeletedAt"]),
        iD: json["ID"],
        updatedAt: new Date(json["UpdatedAt"]),
        accountId: !exists(json, "account_id") ? undefined : json["account_id"],
        accountName: !exists(json, "account_name") ? undefined : json["account_name"],
        accountType: !exists(json, "account_type") ? undefined : json["account_type"],
        activeRegions: !exists(json, "active_regions") ? undefined : json["active_regions"],
        awsCloudtrailBucketName: !exists(json, "aws_cloudtrail_bucket_name") ? undefined : json["aws_cloudtrail_bucket_name"],
        awsCloudtrailRegion: !exists(json, "aws_cloudtrail_region") ? undefined : json["aws_cloudtrail_region"],
        awsEventbusArn: !exists(json, "aws_eventbus_arn") ? undefined : json["aws_eventbus_arn"],
        awsPermissionsStatus: (json["aws_permissions_status"] as Array<any>).map(DomainPermissionFromJSON),
        behaviorAssessmentEnabled: !exists(json, "behavior_assessment_enabled") ? undefined : json["behavior_assessment_enabled"],
        cid: !exists(json, "cid") ? undefined : json["cid"],
        cloudScopes: !exists(json, "cloud_scopes") ? undefined : (json["cloud_scopes"] as Array<any>).map(DomainCloudScopeFromJSON),
        cloudformationUrl: !exists(json, "cloudformation_url") ? undefined : json["cloudformation_url"],
        conditions: !exists(json, "conditions") ? undefined : (json["conditions"] as Array<any>).map(DomainConditionFromJSON),
        cspmEnabled: !exists(json, "cspm_enabled") ? undefined : json["cspm_enabled"],
        d4c: !exists(json, "d4c") ? undefined : DomainAWSD4CAccountV1FromJSON(json["d4c"]),
        d4cMigrated: !exists(json, "d4c_migrated") ? undefined : json["d4c_migrated"],
        environment: !exists(json, "environment") ? undefined : json["environment"],
        eventbusName: !exists(json, "eventbus_name") ? undefined : json["eventbus_name"],
        externalId: !exists(json, "external_id") ? undefined : json["external_id"],
        iamRoleArn: !exists(json, "iam_role_arn") ? undefined : json["iam_role_arn"],
        intermediateRoleArn: !exists(json, "intermediate_role_arn") ? undefined : json["intermediate_role_arn"],
        isCustomRolename: json["is_custom_rolename"],
        isMaster: !exists(json, "is_master") ? undefined : json["is_master"],
        organizationId: !exists(json, "organization_id") ? undefined : json["organization_id"],
        remediationCloudformationUrl: !exists(json, "remediation_cloudformation_url") ? undefined : json["remediation_cloudformation_url"],
        remediationRegion: !exists(json, "remediation_region") ? undefined : json["remediation_region"],
        remediationTouAccepted: !exists(json, "remediation_tou_accepted") ? undefined : new Date(json["remediation_tou_accepted"]),
        rootAccountId: !exists(json, "root_account_id") ? undefined : json["root_account_id"],
        rootIamRole: !exists(json, "root_iam_role") ? undefined : json["root_iam_role"],
        secondaryRoleArn: !exists(json, "secondary_role_arn") ? undefined : json["secondary_role_arn"],
        sensorManagementEnabled: json["sensor_management_enabled"],
        settings: !exists(json, "settings") ? undefined : json["settings"],
        status: !exists(json, "status") ? undefined : json["status"],
        useExistingCloudtrail: !exists(json, "use_existing_cloudtrail") ? undefined : json["use_existing_cloudtrail"],
        valid: !exists(json, "valid") ? undefined : json["valid"],
    };
}

export function DomainAWSAccountV2ToJSON(value?: DomainAWSAccountV2 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        CreatedAt: value.createdAt.toISOString(),
        DeletedAt: value.deletedAt.toISOString(),
        ID: value.iD,
        UpdatedAt: value.updatedAt.toISOString(),
        account_id: value.accountId,
        account_name: value.accountName,
        account_type: value.accountType,
        active_regions: value.activeRegions,
        aws_cloudtrail_bucket_name: value.awsCloudtrailBucketName,
        aws_cloudtrail_region: value.awsCloudtrailRegion,
        aws_eventbus_arn: value.awsEventbusArn,
        aws_permissions_status: (value.awsPermissionsStatus as Array<any>).map(DomainPermissionToJSON),
        behavior_assessment_enabled: value.behaviorAssessmentEnabled,
        cid: value.cid,
        cloud_scopes: value.cloudScopes === undefined ? undefined : (value.cloudScopes as Array<any>).map(DomainCloudScopeToJSON),
        cloudformation_url: value.cloudformationUrl,
        conditions: value.conditions === undefined ? undefined : (value.conditions as Array<any>).map(DomainConditionToJSON),
        cspm_enabled: value.cspmEnabled,
        d4c: DomainAWSD4CAccountV1ToJSON(value.d4c),
        d4c_migrated: value.d4cMigrated,
        environment: value.environment,
        eventbus_name: value.eventbusName,
        external_id: value.externalId,
        iam_role_arn: value.iamRoleArn,
        intermediate_role_arn: value.intermediateRoleArn,
        is_custom_rolename: value.isCustomRolename,
        is_master: value.isMaster,
        organization_id: value.organizationId,
        remediation_cloudformation_url: value.remediationCloudformationUrl,
        remediation_region: value.remediationRegion,
        remediation_tou_accepted: value.remediationTouAccepted === undefined ? undefined : value.remediationTouAccepted.toISOString(),
        root_account_id: value.rootAccountId,
        root_iam_role: value.rootIamRole,
        secondary_role_arn: value.secondaryRoleArn,
        sensor_management_enabled: value.sensorManagementEnabled,
        settings: value.settings,
        status: value.status,
        use_existing_cloudtrail: value.useExistingCloudtrail,
        valid: value.valid,
    };
}
