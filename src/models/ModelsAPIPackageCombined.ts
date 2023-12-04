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
import type { ModelsAPIPackageVulnerability } from "./ModelsAPIPackageVulnerability";
import { ModelsAPIPackageVulnerabilityFromJSON, ModelsAPIPackageVulnerabilityFromJSONTyped, ModelsAPIPackageVulnerabilityToJSON } from "./ModelsAPIPackageVulnerability";

/**
 *
 * @export
 * @interface ModelsAPIPackageCombined
 */
export interface ModelsAPIPackageCombined {
    /**
     *
     * @type {number}
     * @memberof ModelsAPIPackageCombined
     */
    allImages: number;
    /**
     *
     * @type {string}
     * @memberof ModelsAPIPackageCombined
     */
    cid: string;
    /**
     *
     * @type {string}
     * @memberof ModelsAPIPackageCombined
     */
    license: string;
    /**
     *
     * @type {string}
     * @memberof ModelsAPIPackageCombined
     */
    packageNameVersion: string;
    /**
     *
     * @type {number}
     * @memberof ModelsAPIPackageCombined
     */
    runningImages: number;
    /**
     *
     * @type {string}
     * @memberof ModelsAPIPackageCombined
     */
    type: string;
    /**
     *
     * @type {Array<ModelsAPIPackageVulnerability>}
     * @memberof ModelsAPIPackageCombined
     */
    vulnerabilities: Array<ModelsAPIPackageVulnerability>;
    /**
     *
     * @type {number}
     * @memberof ModelsAPIPackageCombined
     */
    vulnerabilityCount: number;
}

/**
 * Check if a given object implements the ModelsAPIPackageCombined interface.
 */
export function instanceOfModelsAPIPackageCombined(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "allImages" in value;
    isInstance = isInstance && "cid" in value;
    isInstance = isInstance && "license" in value;
    isInstance = isInstance && "packageNameVersion" in value;
    isInstance = isInstance && "runningImages" in value;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "vulnerabilities" in value;
    isInstance = isInstance && "vulnerabilityCount" in value;

    return isInstance;
}

export function ModelsAPIPackageCombinedFromJSON(json: any): ModelsAPIPackageCombined {
    return ModelsAPIPackageCombinedFromJSONTyped(json, false);
}

export function ModelsAPIPackageCombinedFromJSONTyped(json: any, ignoreDiscriminator: boolean): ModelsAPIPackageCombined {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        allImages: json["all_images"],
        cid: json["cid"],
        license: json["license"],
        packageNameVersion: json["package_name_version"],
        runningImages: json["running_images"],
        type: json["type"],
        vulnerabilities: (json["vulnerabilities"] as Array<any>).map(ModelsAPIPackageVulnerabilityFromJSON),
        vulnerabilityCount: json["vulnerability_count"],
    };
}

export function ModelsAPIPackageCombinedToJSON(value?: ModelsAPIPackageCombined | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        all_images: value.allImages,
        cid: value.cid,
        license: value.license,
        package_name_version: value.packageNameVersion,
        running_images: value.runningImages,
        type: value.type,
        vulnerabilities: (value.vulnerabilities as Array<any>).map(ModelsAPIPackageVulnerabilityToJSON),
        vulnerability_count: value.vulnerabilityCount,
    };
}