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
/**
 *
 * @export
 * @interface DomainAPIRemediationV2
 */
export interface DomainAPIRemediationV2 {
    /**
     * Expanded description of the remediation
     * @type {string}
     * @memberof DomainAPIRemediationV2
     */
    action: string;
    /**
     * Refers to an unique identifier for a given remediation
     * @type {string}
     * @memberof DomainAPIRemediationV2
     */
    id: string;
    /**
     * Link to the remediation page for the vendor
     * @type {string}
     * @memberof DomainAPIRemediationV2
     */
    link: string;
    /**
     * Relevant reference for the remediation that can be used to get additional details for the remediation. For example, a KB number that needs to be installed for a KB_SECURITY_UPDATE
     * @type {string}
     * @memberof DomainAPIRemediationV2
     */
    reference: string;
    /**
     * Short description of the remediation
     * @type {string}
     * @memberof DomainAPIRemediationV2
     */
    title: string;
    /**
     * Link to the vendor advisory - Note: This field is populated if there are extra steps that are required to complete the remediation
     * @type {string}
     * @memberof DomainAPIRemediationV2
     */
    vendorUrl: string;
}

/**
 * Check if a given object implements the DomainAPIRemediationV2 interface.
 */
export function instanceOfDomainAPIRemediationV2(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "action" in value;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "link" in value;
    isInstance = isInstance && "reference" in value;
    isInstance = isInstance && "title" in value;
    isInstance = isInstance && "vendorUrl" in value;

    return isInstance;
}

export function DomainAPIRemediationV2FromJSON(json: any): DomainAPIRemediationV2 {
    return DomainAPIRemediationV2FromJSONTyped(json, false);
}

export function DomainAPIRemediationV2FromJSONTyped(json: any, ignoreDiscriminator: boolean): DomainAPIRemediationV2 {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        action: json["action"],
        id: json["id"],
        link: json["link"],
        reference: json["reference"],
        title: json["title"],
        vendorUrl: json["vendor_url"],
    };
}

export function DomainAPIRemediationV2ToJSON(value?: DomainAPIRemediationV2 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        action: value.action,
        id: value.id,
        link: value.link,
        reference: value.reference,
        title: value.title,
        vendor_url: value.vendorUrl,
    };
}
