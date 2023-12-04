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
import type { ModelsAPIDetectionCountByType } from "./ModelsAPIDetectionCountByType";
import { ModelsAPIDetectionCountByTypeFromJSON, ModelsAPIDetectionCountByTypeFromJSONTyped, ModelsAPIDetectionCountByTypeToJSON } from "./ModelsAPIDetectionCountByType";
import type { ModelsAPIFilterLabel } from "./ModelsAPIFilterLabel";
import { ModelsAPIFilterLabelFromJSON, ModelsAPIFilterLabelFromJSONTyped, ModelsAPIFilterLabelToJSON } from "./ModelsAPIFilterLabel";
import type { ModelsAPIPolicyCountByAction } from "./ModelsAPIPolicyCountByAction";
import { ModelsAPIPolicyCountByActionFromJSON, ModelsAPIPolicyCountByActionFromJSONTyped, ModelsAPIPolicyCountByActionToJSON } from "./ModelsAPIPolicyCountByAction";
import type { ModelsAPIVulnCountBySeverity } from "./ModelsAPIVulnCountBySeverity";
import { ModelsAPIVulnCountBySeverityFromJSON, ModelsAPIVulnCountBySeverityFromJSONTyped, ModelsAPIVulnCountBySeverityToJSON } from "./ModelsAPIVulnCountBySeverity";
import type { ModelsImageSummaryPackagesInfo } from "./ModelsImageSummaryPackagesInfo";
import { ModelsImageSummaryPackagesInfoFromJSON, ModelsImageSummaryPackagesInfoFromJSONTyped, ModelsImageSummaryPackagesInfoToJSON } from "./ModelsImageSummaryPackagesInfo";
import type { ModelsIssuesSummaryContainerInfo } from "./ModelsIssuesSummaryContainerInfo";
import { ModelsIssuesSummaryContainerInfoFromJSON, ModelsIssuesSummaryContainerInfoFromJSONTyped, ModelsIssuesSummaryContainerInfoToJSON } from "./ModelsIssuesSummaryContainerInfo";

/**
 *
 * @export
 * @interface ModelsAPIImageIssuesSummary
 */
export interface ModelsAPIImageIssuesSummary {
    /**
     *
     * @type {ModelsIssuesSummaryContainerInfo}
     * @memberof ModelsAPIImageIssuesSummary
     */
    imageContainerInfo: ModelsIssuesSummaryContainerInfo;
    /**
     *
     * @type {Array<ModelsAPIDetectionCountByType>}
     * @memberof ModelsAPIImageIssuesSummary
     */
    imageDetections: Array<ModelsAPIDetectionCountByType>;
    /**
     *
     * @type {boolean}
     * @memberof ModelsAPIImageIssuesSummary
     */
    isDcaRun: boolean;
    /**
     *
     * @type {number}
     * @memberof ModelsAPIImageIssuesSummary
     */
    knownIssues: number;
    /**
     *
     * @type {ModelsImageSummaryPackagesInfo}
     * @memberof ModelsAPIImageIssuesSummary
     */
    packagesInfo: ModelsImageSummaryPackagesInfo;
    /**
     *
     * @type {Array<ModelsAPIPolicyCountByAction>}
     * @memberof ModelsAPIImageIssuesSummary
     */
    policiesSummary: Array<ModelsAPIPolicyCountByAction>;
    /**
     *
     * @type {Array<ModelsAPIFilterLabel>}
     * @memberof ModelsAPIImageIssuesSummary
     */
    runtimeDetections: Array<ModelsAPIFilterLabel>;
    /**
     *
     * @type {Array<ModelsAPIVulnCountBySeverity>}
     * @memberof ModelsAPIImageIssuesSummary
     */
    vulnerabilitiesSummary: Array<ModelsAPIVulnCountBySeverity>;
    /**
     *
     * @type {boolean}
     * @memberof ModelsAPIImageIssuesSummary
     */
    zeroDayImpacted: boolean;
}

/**
 * Check if a given object implements the ModelsAPIImageIssuesSummary interface.
 */
export function instanceOfModelsAPIImageIssuesSummary(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "imageContainerInfo" in value;
    isInstance = isInstance && "imageDetections" in value;
    isInstance = isInstance && "isDcaRun" in value;
    isInstance = isInstance && "knownIssues" in value;
    isInstance = isInstance && "packagesInfo" in value;
    isInstance = isInstance && "policiesSummary" in value;
    isInstance = isInstance && "runtimeDetections" in value;
    isInstance = isInstance && "vulnerabilitiesSummary" in value;
    isInstance = isInstance && "zeroDayImpacted" in value;

    return isInstance;
}

export function ModelsAPIImageIssuesSummaryFromJSON(json: any): ModelsAPIImageIssuesSummary {
    return ModelsAPIImageIssuesSummaryFromJSONTyped(json, false);
}

export function ModelsAPIImageIssuesSummaryFromJSONTyped(json: any, ignoreDiscriminator: boolean): ModelsAPIImageIssuesSummary {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        imageContainerInfo: ModelsIssuesSummaryContainerInfoFromJSON(json["image_container_info"]),
        imageDetections: (json["image_detections"] as Array<any>).map(ModelsAPIDetectionCountByTypeFromJSON),
        isDcaRun: json["is_dca_run"],
        knownIssues: json["known_issues"],
        packagesInfo: ModelsImageSummaryPackagesInfoFromJSON(json["packages_info"]),
        policiesSummary: (json["policies_summary"] as Array<any>).map(ModelsAPIPolicyCountByActionFromJSON),
        runtimeDetections: (json["runtime_detections"] as Array<any>).map(ModelsAPIFilterLabelFromJSON),
        vulnerabilitiesSummary: (json["vulnerabilities_summary"] as Array<any>).map(ModelsAPIVulnCountBySeverityFromJSON),
        zeroDayImpacted: json["zero_day_impacted"],
    };
}

export function ModelsAPIImageIssuesSummaryToJSON(value?: ModelsAPIImageIssuesSummary | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        image_container_info: ModelsIssuesSummaryContainerInfoToJSON(value.imageContainerInfo),
        image_detections: (value.imageDetections as Array<any>).map(ModelsAPIDetectionCountByTypeToJSON),
        is_dca_run: value.isDcaRun,
        known_issues: value.knownIssues,
        packages_info: ModelsImageSummaryPackagesInfoToJSON(value.packagesInfo),
        policies_summary: (value.policiesSummary as Array<any>).map(ModelsAPIPolicyCountByActionToJSON),
        runtime_detections: (value.runtimeDetections as Array<any>).map(ModelsAPIFilterLabelToJSON),
        vulnerabilities_summary: (value.vulnerabilitiesSummary as Array<any>).map(ModelsAPIVulnCountBySeverityToJSON),
        zero_day_impacted: value.zeroDayImpacted,
    };
}