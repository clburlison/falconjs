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
import type { ApiExposedDataFileDetailsV1 } from "./ApiExposedDataFileDetailsV1";
import { ApiExposedDataFileDetailsV1FromJSON, ApiExposedDataFileDetailsV1FromJSONTyped, ApiExposedDataFileDetailsV1ToJSON } from "./ApiExposedDataFileDetailsV1";
import type { ApiExposedDataRecordBotV1 } from "./ApiExposedDataRecordBotV1";
import { ApiExposedDataRecordBotV1FromJSON, ApiExposedDataRecordBotV1FromJSONTyped, ApiExposedDataRecordBotV1ToJSON } from "./ApiExposedDataRecordBotV1";
import type { ApiExposedDataRecordFinancialV1 } from "./ApiExposedDataRecordFinancialV1";
import { ApiExposedDataRecordFinancialV1FromJSON, ApiExposedDataRecordFinancialV1FromJSONTyped, ApiExposedDataRecordFinancialV1ToJSON } from "./ApiExposedDataRecordFinancialV1";
import type { ApiExposedDataRecordLocationV1 } from "./ApiExposedDataRecordLocationV1";
import { ApiExposedDataRecordLocationV1FromJSON, ApiExposedDataRecordLocationV1FromJSONTyped, ApiExposedDataRecordLocationV1ToJSON } from "./ApiExposedDataRecordLocationV1";
import type { ApiExposedDataRecordSocialV1 } from "./ApiExposedDataRecordSocialV1";
import { ApiExposedDataRecordSocialV1FromJSON, ApiExposedDataRecordSocialV1FromJSONTyped, ApiExposedDataRecordSocialV1ToJSON } from "./ApiExposedDataRecordSocialV1";
import type { ApiRuleDetailsV1 } from "./ApiRuleDetailsV1";
import { ApiRuleDetailsV1FromJSON, ApiRuleDetailsV1FromJSONTyped, ApiRuleDetailsV1ToJSON } from "./ApiRuleDetailsV1";

/**
 *
 * @export
 * @interface ApiNotificationExposedDataRecordV1
 */
export interface ApiNotificationExposedDataRecordV1 {
    /**
     * The individual or group who exposed the data
     * @type {string}
     * @memberof ApiNotificationExposedDataRecordV1
     */
    author: string;
    /**
     * The ID of the author within Recon
     * @type {string}
     * @memberof ApiNotificationExposedDataRecordV1
     */
    authorId?: string;
    /**
     *
     * @type {ApiExposedDataRecordBotV1}
     * @memberof ApiNotificationExposedDataRecordV1
     */
    bot?: ApiExposedDataRecordBotV1;
    /**
     * The customer ID
     * @type {string}
     * @memberof ApiNotificationExposedDataRecordV1
     */
    cid: string;
    /**
     * The company of the user
     * @type {string}
     * @memberof ApiNotificationExposedDataRecordV1
     */
    company?: string;
    /**
     * The date when this entity was created in Recon
     * @type {Date}
     * @memberof ApiNotificationExposedDataRecordV1
     */
    createdDate: Date;
    /**
     * The status set after deduplication. Possible values: 'newly_detected', 'previously_reported', 'other'
     * @type {string}
     * @memberof ApiNotificationExposedDataRecordV1
     */
    credentialStatus?: string;
    /**
     * The domain where the credentials are valid
     * @type {string}
     * @memberof ApiNotificationExposedDataRecordV1
     */
    credentialsDomain?: string;
    /**
     * The IP where the credentials are valid
     * @type {string}
     * @memberof ApiNotificationExposedDataRecordV1
     */
    credentialsIp?: string;
    /**
     * The URL where the credentials are valid
     * @type {string}
     * @memberof ApiNotificationExposedDataRecordV1
     */
    credentialsUrl?: string;
    /**
     * The nickname of the user on the impacted site
     * @type {string}
     * @memberof ApiNotificationExposedDataRecordV1
     */
    displayName?: string;
    /**
     * The domain of the email linked to the impacted site
     * @type {string}
     * @memberof ApiNotificationExposedDataRecordV1
     */
    domain?: string;
    /**
     * The email linked to the impacted site
     * @type {string}
     * @memberof ApiNotificationExposedDataRecordV1
     */
    email?: string;
    /**
     * The approximate date when the event occurred
     * @type {string}
     * @memberof ApiNotificationExposedDataRecordV1
     */
    eventDate: string;
    /**
     * The date when the exposed data was posted online
     * @type {Date}
     * @memberof ApiNotificationExposedDataRecordV1
     */
    exposureDate: Date;
    /**
     *
     * @type {ApiExposedDataFileDetailsV1}
     * @memberof ApiNotificationExposedDataRecordV1
     */
    file?: ApiExposedDataFileDetailsV1;
    /**
     *
     * @type {ApiExposedDataRecordFinancialV1}
     * @memberof ApiNotificationExposedDataRecordV1
     */
    financial?: ApiExposedDataRecordFinancialV1;
    /**
     * The full name of the user on the impacted site
     * @type {string}
     * @memberof ApiNotificationExposedDataRecordV1
     */
    fullName?: string;
    /**
     * The algorithm used to hash the password
     * @type {string}
     * @memberof ApiNotificationExposedDataRecordV1
     */
    hashType?: string;
    /**
     * The ID of this entity
     * @type {string}
     * @memberof ApiNotificationExposedDataRecordV1
     */
    id: string;
    /**
     * The users job at the company
     * @type {string}
     * @memberof ApiNotificationExposedDataRecordV1
     */
    jobPosition?: string;
    /**
     *
     * @type {ApiExposedDataRecordLocationV1}
     * @memberof ApiNotificationExposedDataRecordV1
     */
    location?: ApiExposedDataRecordLocationV1;
    /**
     *
     * @type {string}
     * @memberof ApiNotificationExposedDataRecordV1
     */
    loginId?: string;
    /**
     * Information of the bot malware family
     * @type {string}
     * @memberof ApiNotificationExposedDataRecordV1
     */
    malwareFamily?: string;
    /**
     * The ID of the parent notification associated with this entity
     * @type {string}
     * @memberof ApiNotificationExposedDataRecordV1
     */
    notificationId: string;
    /**
     * The password used for login
     * @type {string}
     * @memberof ApiNotificationExposedDataRecordV1
     */
    password?: string;
    /**
     * The password hash
     * @type {string}
     * @memberof ApiNotificationExposedDataRecordV1
     */
    passwordHash?: string;
    /**
     * The password salt
     * @type {string}
     * @memberof ApiNotificationExposedDataRecordV1
     */
    passwordSalt?: string;
    /**
     * The phone number of the user on the impacted site
     * @type {string}
     * @memberof ApiNotificationExposedDataRecordV1
     */
    phoneNumber?: string;
    /**
     *
     * @type {string}
     * @memberof ApiNotificationExposedDataRecordV1
     */
    rawIntelId: string;
    /**
     *
     * @type {ApiRuleDetailsV1}
     * @memberof ApiNotificationExposedDataRecordV1
     */
    rule: ApiRuleDetailsV1;
    /**
     * The source where this entity was found
     * @type {string}
     * @memberof ApiNotificationExposedDataRecordV1
     */
    site: string;
    /**
     * The ID of the site within Recon
     * @type {string}
     * @memberof ApiNotificationExposedDataRecordV1
     */
    siteId?: string;
    /**
     *
     * @type {ApiExposedDataRecordSocialV1}
     * @memberof ApiNotificationExposedDataRecordV1
     */
    social?: ApiExposedDataRecordSocialV1;
    /**
     * The category of the source where this entity was found
     * @type {string}
     * @memberof ApiNotificationExposedDataRecordV1
     */
    sourceCategory: string;
    /**
     * The ID of the user on the impacted site
     * @type {string}
     * @memberof ApiNotificationExposedDataRecordV1
     */
    userId?: string;
    /**
     * The IP of the user on the impacted site
     * @type {string}
     * @memberof ApiNotificationExposedDataRecordV1
     */
    userIp?: string;
    /**
     *
     * @type {string}
     * @memberof ApiNotificationExposedDataRecordV1
     */
    userUuid: string;
}

/**
 * Check if a given object implements the ApiNotificationExposedDataRecordV1 interface.
 */
export function instanceOfApiNotificationExposedDataRecordV1(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "author" in value;
    isInstance = isInstance && "cid" in value;
    isInstance = isInstance && "createdDate" in value;
    isInstance = isInstance && "eventDate" in value;
    isInstance = isInstance && "exposureDate" in value;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "notificationId" in value;
    isInstance = isInstance && "rawIntelId" in value;
    isInstance = isInstance && "rule" in value;
    isInstance = isInstance && "site" in value;
    isInstance = isInstance && "sourceCategory" in value;
    isInstance = isInstance && "userUuid" in value;

    return isInstance;
}

export function ApiNotificationExposedDataRecordV1FromJSON(json: any): ApiNotificationExposedDataRecordV1 {
    return ApiNotificationExposedDataRecordV1FromJSONTyped(json, false);
}

export function ApiNotificationExposedDataRecordV1FromJSONTyped(json: any, ignoreDiscriminator: boolean): ApiNotificationExposedDataRecordV1 {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        author: json["author"],
        authorId: !exists(json, "author_id") ? undefined : json["author_id"],
        bot: !exists(json, "bot") ? undefined : ApiExposedDataRecordBotV1FromJSON(json["bot"]),
        cid: json["cid"],
        company: !exists(json, "company") ? undefined : json["company"],
        createdDate: new Date(json["created_date"]),
        credentialStatus: !exists(json, "credential_status") ? undefined : json["credential_status"],
        credentialsDomain: !exists(json, "credentials_domain") ? undefined : json["credentials_domain"],
        credentialsIp: !exists(json, "credentials_ip") ? undefined : json["credentials_ip"],
        credentialsUrl: !exists(json, "credentials_url") ? undefined : json["credentials_url"],
        displayName: !exists(json, "display_name") ? undefined : json["display_name"],
        domain: !exists(json, "domain") ? undefined : json["domain"],
        email: !exists(json, "email") ? undefined : json["email"],
        eventDate: json["event_date"],
        exposureDate: new Date(json["exposure_date"]),
        file: !exists(json, "file") ? undefined : ApiExposedDataFileDetailsV1FromJSON(json["file"]),
        financial: !exists(json, "financial") ? undefined : ApiExposedDataRecordFinancialV1FromJSON(json["financial"]),
        fullName: !exists(json, "full_name") ? undefined : json["full_name"],
        hashType: !exists(json, "hash_type") ? undefined : json["hash_type"],
        id: json["id"],
        jobPosition: !exists(json, "job_position") ? undefined : json["job_position"],
        location: !exists(json, "location") ? undefined : ApiExposedDataRecordLocationV1FromJSON(json["location"]),
        loginId: !exists(json, "login_id") ? undefined : json["login_id"],
        malwareFamily: !exists(json, "malware_family") ? undefined : json["malware_family"],
        notificationId: json["notification_id"],
        password: !exists(json, "password") ? undefined : json["password"],
        passwordHash: !exists(json, "password_hash") ? undefined : json["password_hash"],
        passwordSalt: !exists(json, "password_salt") ? undefined : json["password_salt"],
        phoneNumber: !exists(json, "phone_number") ? undefined : json["phone_number"],
        rawIntelId: json["raw_intel_id"],
        rule: ApiRuleDetailsV1FromJSON(json["rule"]),
        site: json["site"],
        siteId: !exists(json, "site_id") ? undefined : json["site_id"],
        social: !exists(json, "social") ? undefined : ApiExposedDataRecordSocialV1FromJSON(json["social"]),
        sourceCategory: json["source_category"],
        userId: !exists(json, "user_id") ? undefined : json["user_id"],
        userIp: !exists(json, "user_ip") ? undefined : json["user_ip"],
        userUuid: json["user_uuid"],
    };
}

export function ApiNotificationExposedDataRecordV1ToJSON(value?: ApiNotificationExposedDataRecordV1 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        author: value.author,
        author_id: value.authorId,
        bot: ApiExposedDataRecordBotV1ToJSON(value.bot),
        cid: value.cid,
        company: value.company,
        created_date: value.createdDate.toISOString(),
        credential_status: value.credentialStatus,
        credentials_domain: value.credentialsDomain,
        credentials_ip: value.credentialsIp,
        credentials_url: value.credentialsUrl,
        display_name: value.displayName,
        domain: value.domain,
        email: value.email,
        event_date: value.eventDate,
        exposure_date: value.exposureDate.toISOString(),
        file: ApiExposedDataFileDetailsV1ToJSON(value.file),
        financial: ApiExposedDataRecordFinancialV1ToJSON(value.financial),
        full_name: value.fullName,
        hash_type: value.hashType,
        id: value.id,
        job_position: value.jobPosition,
        location: ApiExposedDataRecordLocationV1ToJSON(value.location),
        login_id: value.loginId,
        malware_family: value.malwareFamily,
        notification_id: value.notificationId,
        password: value.password,
        password_hash: value.passwordHash,
        password_salt: value.passwordSalt,
        phone_number: value.phoneNumber,
        raw_intel_id: value.rawIntelId,
        rule: ApiRuleDetailsV1ToJSON(value.rule),
        site: value.site,
        site_id: value.siteId,
        social: ApiExposedDataRecordSocialV1ToJSON(value.social),
        source_category: value.sourceCategory,
        user_id: value.userId,
        user_ip: value.userIp,
        user_uuid: value.userUuid,
    };
}
