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
import { ModelsAwsAccountAccessHealth, ModelsAwsAccountAccessHealthFromJSON, ModelsAwsAccountAccessHealthFromJSONTyped, ModelsAwsAccountAccessHealthToJSON } from "./ModelsAwsAccountAccessHealth";

/**
 *
 * @export
 * @interface ModelsAWSAccountV1
 */
export interface ModelsAWSAccountV1 {
    /**
     *
     * @type {ModelsAwsAccountAccessHealth}
     * @memberof ModelsAWSAccountV1
     */
    accessHealth?: ModelsAwsAccountAccessHealth;
    /**
     * Alias/Name associated with the account. This is only updated once the account is in a registered state.
     * @type {string}
     * @memberof ModelsAWSAccountV1
     */
    alias?: string;
    /**
     *
     * @type {string}
     * @memberof ModelsAWSAccountV1
     */
    cid?: string;
    /**
     * Unique identifier for the cloudformation stack id used for provisioning.
     * @type {string}
     * @memberof ModelsAWSAccountV1
     */
    cloudformationStackId?: string;
    /**
     * URL of the CloudFormation template to execute. This is returned when mode is to set 'cloudformation' when provisioning.
     * @type {string}
     * @memberof ModelsAWSAccountV1
     */
    cloudformationUrl?: string;
    /**
     * The 12 digit AWS account which is hosting the S3 bucket containing cloudtrail logs for this account. If this field is set, it takes precedence of the settings level field.
     * @type {string}
     * @memberof ModelsAWSAccountV1
     */
    cloudtrailBucketOwnerId?: string;
    /**
     * Region where the S3 bucket containing cloudtrail logs resides. This is only set if using cloudformation to provision and create the trail.
     * @type {string}
     * @memberof ModelsAWSAccountV1
     */
    cloudtrailBucketRegion?: string;
    /**
     * Timestamp of when the account was first provisioned within CrowdStrike's system.'
     * @type {string}
     * @memberof ModelsAWSAccountV1
     */
    createdTimestamp?: string;
    /**
     * ID assigned for use with cross account IAM role access.
     * @type {string}
     * @memberof ModelsAWSAccountV1
     */
    externalId?: string;
    /**
     * The full arn of the IAM role created in this account to control access.
     * @type {string}
     * @memberof ModelsAWSAccountV1
     */
    iamRoleArn?: string;
    /**
     * 12 digit AWS provided unique identifier for the account.
     * @type {string}
     * @memberof ModelsAWSAccountV1
     */
    id?: string;
    /**
     * Timestamp of when the account was last modified.
     * @type {string}
     * @memberof ModelsAWSAccountV1
     */
    lastModifiedTimestamp?: string;
    /**
     * Timestamp of when the account was scanned.
     * @type {string}
     * @memberof ModelsAWSAccountV1
     */
    lastScannedTimestamp?: string;
    /**
     * Current version of permissions associated with IAM role and granted access.
     * @type {string}
     * @memberof ModelsAWSAccountV1
     */
    policyVersion?: string;
    /**
     * Provisioning state of the account. Values can be; initiated, registered, unregistered.
     * @type {string}
     * @memberof ModelsAWSAccountV1
     */
    provisioningState?: string;
    /**
     * Rate limiting setting to control the maximum number of requests that can be made within the rate_limit_time duration.
     * @type {number}
     * @memberof ModelsAWSAccountV1
     */
    rateLimitReqs?: number;
    /**
     * Rate limiting setting to control the number of seconds for which rate_limit_reqs applies.
     * @type {number}
     * @memberof ModelsAWSAccountV1
     */
    rateLimitTime?: number;
    /**
     * Current version of cloudformation template used to manage access.
     * @type {string}
     * @memberof ModelsAWSAccountV1
     */
    templateVersion?: string;
}

export function ModelsAWSAccountV1FromJSON(json: any): ModelsAWSAccountV1 {
    return ModelsAWSAccountV1FromJSONTyped(json, false);
}

export function ModelsAWSAccountV1FromJSONTyped(json: any, ignoreDiscriminator: boolean): ModelsAWSAccountV1 {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        accessHealth: !exists(json, "access_health") ? undefined : ModelsAwsAccountAccessHealthFromJSON(json["access_health"]),
        alias: !exists(json, "alias") ? undefined : json["alias"],
        cid: !exists(json, "cid") ? undefined : json["cid"],
        cloudformationStackId: !exists(json, "cloudformation_stack_id") ? undefined : json["cloudformation_stack_id"],
        cloudformationUrl: !exists(json, "cloudformation_url") ? undefined : json["cloudformation_url"],
        cloudtrailBucketOwnerId: !exists(json, "cloudtrail_bucket_owner_id") ? undefined : json["cloudtrail_bucket_owner_id"],
        cloudtrailBucketRegion: !exists(json, "cloudtrail_bucket_region") ? undefined : json["cloudtrail_bucket_region"],
        createdTimestamp: !exists(json, "created_timestamp") ? undefined : json["created_timestamp"],
        externalId: !exists(json, "external_id") ? undefined : json["external_id"],
        iamRoleArn: !exists(json, "iam_role_arn") ? undefined : json["iam_role_arn"],
        id: !exists(json, "id") ? undefined : json["id"],
        lastModifiedTimestamp: !exists(json, "last_modified_timestamp") ? undefined : json["last_modified_timestamp"],
        lastScannedTimestamp: !exists(json, "last_scanned_timestamp") ? undefined : json["last_scanned_timestamp"],
        policyVersion: !exists(json, "policy_version") ? undefined : json["policy_version"],
        provisioningState: !exists(json, "provisioning_state") ? undefined : json["provisioning_state"],
        rateLimitReqs: !exists(json, "rate_limit_reqs") ? undefined : json["rate_limit_reqs"],
        rateLimitTime: !exists(json, "rate_limit_time") ? undefined : json["rate_limit_time"],
        templateVersion: !exists(json, "template_version") ? undefined : json["template_version"],
    };
}

export function ModelsAWSAccountV1ToJSON(value?: ModelsAWSAccountV1 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        access_health: ModelsAwsAccountAccessHealthToJSON(value.accessHealth),
        alias: value.alias,
        cid: value.cid,
        cloudformation_stack_id: value.cloudformationStackId,
        cloudformation_url: value.cloudformationUrl,
        cloudtrail_bucket_owner_id: value.cloudtrailBucketOwnerId,
        cloudtrail_bucket_region: value.cloudtrailBucketRegion,
        created_timestamp: value.createdTimestamp,
        external_id: value.externalId,
        iam_role_arn: value.iamRoleArn,
        id: value.id,
        last_modified_timestamp: value.lastModifiedTimestamp,
        last_scanned_timestamp: value.lastScannedTimestamp,
        policy_version: value.policyVersion,
        provisioning_state: value.provisioningState,
        rate_limit_reqs: value.rateLimitReqs,
        rate_limit_time: value.rateLimitTime,
        template_version: value.templateVersion,
    };
}
