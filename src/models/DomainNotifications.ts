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
import type { DomainNotificationConfig } from "./DomainNotificationConfig";
import { DomainNotificationConfigFromJSON, DomainNotificationConfigFromJSONTyped, DomainNotificationConfigToJSON } from "./DomainNotificationConfig";

/**
 *
 * @export
 * @interface DomainNotifications
 */
export interface DomainNotifications {
    /**
     *
     * @type {DomainNotificationConfig}
     * @memberof DomainNotifications
     */
    config: DomainNotificationConfig;
    /**
     *
     * @type {{ [key: string]: string; }}
     * @memberof DomainNotifications
     */
    options?: { [key: string]: string };
    /**
     *
     * @type {string}
     * @memberof DomainNotifications
     */
    type: string;
}

/**
 * Check if a given object implements the DomainNotifications interface.
 */
export function instanceOfDomainNotifications(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "config" in value;
    isInstance = isInstance && "type" in value;

    return isInstance;
}

export function DomainNotificationsFromJSON(json: any): DomainNotifications {
    return DomainNotificationsFromJSONTyped(json, false);
}

export function DomainNotificationsFromJSONTyped(json: any, ignoreDiscriminator: boolean): DomainNotifications {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        config: DomainNotificationConfigFromJSON(json["config"]),
        options: !exists(json, "options") ? undefined : json["options"],
        type: json["type"],
    };
}

export function DomainNotificationsToJSON(value?: DomainNotifications | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        config: DomainNotificationConfigToJSON(value.config),
        options: value.options,
        type: value.type,
    };
}
