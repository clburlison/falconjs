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

import * as runtime from "../runtime";
import type {
    CoreEntitiesResponse,
    ImagesApiCombinedImageExport,
    ImagesApiCustomerAndImage,
    ImagesApiImageAssessmentHistory,
    ImagesApiImageByVulnerabilityCount,
    ImagesApiImageCount,
    ImagesApiImageCountByBaseOS,
    ImagesApiImageCountByState,
    ImagesApiImageIssuesSummary,
    ImagesApiImageVulnerabilitiesSummary,
    ImagesExtCombinedImagesResponse,
    MsaReplyMetaOnly,
} from "../models/index";
import {
    CoreEntitiesResponseFromJSON,
    CoreEntitiesResponseToJSON,
    ImagesApiCombinedImageExportFromJSON,
    ImagesApiCombinedImageExportToJSON,
    ImagesApiCustomerAndImageFromJSON,
    ImagesApiCustomerAndImageToJSON,
    ImagesApiImageAssessmentHistoryFromJSON,
    ImagesApiImageAssessmentHistoryToJSON,
    ImagesApiImageByVulnerabilityCountFromJSON,
    ImagesApiImageByVulnerabilityCountToJSON,
    ImagesApiImageCountFromJSON,
    ImagesApiImageCountToJSON,
    ImagesApiImageCountByBaseOSFromJSON,
    ImagesApiImageCountByBaseOSToJSON,
    ImagesApiImageCountByStateFromJSON,
    ImagesApiImageCountByStateToJSON,
    ImagesApiImageIssuesSummaryFromJSON,
    ImagesApiImageIssuesSummaryToJSON,
    ImagesApiImageVulnerabilitiesSummaryFromJSON,
    ImagesApiImageVulnerabilitiesSummaryToJSON,
    ImagesExtCombinedImagesResponseFromJSON,
    ImagesExtCombinedImagesResponseToJSON,
    MsaReplyMetaOnlyFromJSON,
    MsaReplyMetaOnlyToJSON,
} from "../models/index";

export interface AggregateImageAssessmentHistoryRequest {
    filter?: string;
}

export interface AggregateImageCountRequest {
    filter?: string;
}

export interface AggregateImageCountByBaseOSRequest {
    filter?: string;
}

export interface AggregateImageCountByStateRequest {
    filter?: string;
}

export interface CombinedImageByVulnerabilityCountRequest {
    filter?: string;
    limit?: number;
    offset?: number;
}

export interface CombinedImageDetailRequest {
    filter?: string;
    withConfig?: boolean;
    limit?: number;
    offset?: number;
    sort?: string;
}

export interface CombinedImageIssuesSummaryRequest {
    cid: string;
    registry: string;
    repository: string;
    tag: string;
}

export interface CombinedImageVulnerabilitySummaryRequest {
    cid: string;
    registry: string;
    repository: string;
    tag: string;
}

export interface GetCombinedImagesRequest {
    filter?: string;
    limit?: number;
    offset?: number;
    sort?: string;
}

export interface ReadCombinedImagesExportRequest {
    filter?: string;
    expandVulnerabilities?: boolean;
    expandDetections?: boolean;
    limit?: number;
    offset?: number;
    sort?: string;
}

/**
 *
 */
export class ContainerImagesApi extends runtime.BaseAPI {
    /**
     * Image assessment history
     */
    async aggregateImageAssessmentHistoryRaw(
        requestParameters: AggregateImageAssessmentHistoryRequest,
        initOverrides?: RequestInit | runtime.InitOverrideFunction,
    ): Promise<runtime.ApiResponse<ImagesApiImageAssessmentHistory>> {
        const queryParameters: any = {};

        if (requestParameters.filter !== undefined) {
            queryParameters["filter"] = requestParameters.filter;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", []);
        }

        const response = await this.request(
            {
                path: `/container-security/aggregates/images/assessment-history/v1`,
                method: "GET",
                headers: headerParameters,
                query: queryParameters,
            },
            initOverrides,
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => ImagesApiImageAssessmentHistoryFromJSON(jsonValue));
    }

    /**
     * Image assessment history
     */
    async aggregateImageAssessmentHistory(filter?: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ImagesApiImageAssessmentHistory> {
        const response = await this.aggregateImageAssessmentHistoryRaw({ filter: filter }, initOverrides);
        return await response.value();
    }

    /**
     * Aggregate count of images
     */
    async aggregateImageCountRaw(requestParameters: AggregateImageCountRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ImagesApiImageCount>> {
        const queryParameters: any = {};

        if (requestParameters.filter !== undefined) {
            queryParameters["filter"] = requestParameters.filter;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", []);
        }

        const response = await this.request(
            {
                path: `/container-security/aggregates/images/count/v1`,
                method: "GET",
                headers: headerParameters,
                query: queryParameters,
            },
            initOverrides,
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => ImagesApiImageCountFromJSON(jsonValue));
    }

    /**
     * Aggregate count of images
     */
    async aggregateImageCount(filter?: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ImagesApiImageCount> {
        const response = await this.aggregateImageCountRaw({ filter: filter }, initOverrides);
        return await response.value();
    }

    /**
     * Aggregate count of images grouped by Base OS distribution
     */
    async aggregateImageCountByBaseOSRaw(
        requestParameters: AggregateImageCountByBaseOSRequest,
        initOverrides?: RequestInit | runtime.InitOverrideFunction,
    ): Promise<runtime.ApiResponse<ImagesApiImageCountByBaseOS>> {
        const queryParameters: any = {};

        if (requestParameters.filter !== undefined) {
            queryParameters["filter"] = requestParameters.filter;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", []);
        }

        const response = await this.request(
            {
                path: `/container-security/aggregates/images/count-by-os-distribution/v1`,
                method: "GET",
                headers: headerParameters,
                query: queryParameters,
            },
            initOverrides,
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => ImagesApiImageCountByBaseOSFromJSON(jsonValue));
    }

    /**
     * Aggregate count of images grouped by Base OS distribution
     */
    async aggregateImageCountByBaseOS(filter?: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ImagesApiImageCountByBaseOS> {
        const response = await this.aggregateImageCountByBaseOSRaw({ filter: filter }, initOverrides);
        return await response.value();
    }

    /**
     * Aggregate count of images grouped by state
     */
    async aggregateImageCountByStateRaw(
        requestParameters: AggregateImageCountByStateRequest,
        initOverrides?: RequestInit | runtime.InitOverrideFunction,
    ): Promise<runtime.ApiResponse<ImagesApiImageCountByState>> {
        const queryParameters: any = {};

        if (requestParameters.filter !== undefined) {
            queryParameters["filter"] = requestParameters.filter;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", []);
        }

        const response = await this.request(
            {
                path: `/container-security/aggregates/images/count-by-state/v1`,
                method: "GET",
                headers: headerParameters,
                query: queryParameters,
            },
            initOverrides,
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => ImagesApiImageCountByStateFromJSON(jsonValue));
    }

    /**
     * Aggregate count of images grouped by state
     */
    async aggregateImageCountByState(filter?: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ImagesApiImageCountByState> {
        const response = await this.aggregateImageCountByStateRaw({ filter: filter }, initOverrides);
        return await response.value();
    }

    /**
     * Retrieve top x images with the most vulnerabilities
     */
    async combinedImageByVulnerabilityCountRaw(
        requestParameters: CombinedImageByVulnerabilityCountRequest,
        initOverrides?: RequestInit | runtime.InitOverrideFunction,
    ): Promise<runtime.ApiResponse<ImagesApiImageByVulnerabilityCount>> {
        const queryParameters: any = {};

        if (requestParameters.filter !== undefined) {
            queryParameters["filter"] = requestParameters.filter;
        }

        if (requestParameters.limit !== undefined) {
            queryParameters["limit"] = requestParameters.limit;
        }

        if (requestParameters.offset !== undefined) {
            queryParameters["offset"] = requestParameters.offset;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", []);
        }

        const response = await this.request(
            {
                path: `/container-security/combined/images/by-vulnerability-count/v1`,
                method: "GET",
                headers: headerParameters,
                query: queryParameters,
            },
            initOverrides,
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => ImagesApiImageByVulnerabilityCountFromJSON(jsonValue));
    }

    /**
     * Retrieve top x images with the most vulnerabilities
     */
    async combinedImageByVulnerabilityCount(filter?: string, limit?: number, offset?: number, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ImagesApiImageByVulnerabilityCount> {
        const response = await this.combinedImageByVulnerabilityCountRaw({ filter: filter, limit: limit, offset: offset }, initOverrides);
        return await response.value();
    }

    /**
     * Retrieve image entities identified by the provided filter criteria
     */
    async combinedImageDetailRaw(requestParameters: CombinedImageDetailRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ImagesApiCustomerAndImage>> {
        const queryParameters: any = {};

        if (requestParameters.filter !== undefined) {
            queryParameters["filter"] = requestParameters.filter;
        }

        if (requestParameters.withConfig !== undefined) {
            queryParameters["with_config"] = requestParameters.withConfig;
        }

        if (requestParameters.limit !== undefined) {
            queryParameters["limit"] = requestParameters.limit;
        }

        if (requestParameters.offset !== undefined) {
            queryParameters["offset"] = requestParameters.offset;
        }

        if (requestParameters.sort !== undefined) {
            queryParameters["sort"] = requestParameters.sort;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", []);
        }

        const response = await this.request(
            {
                path: `/container-security/combined/images/detail/v1`,
                method: "GET",
                headers: headerParameters,
                query: queryParameters,
            },
            initOverrides,
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => ImagesApiCustomerAndImageFromJSON(jsonValue));
    }

    /**
     * Retrieve image entities identified by the provided filter criteria
     */
    async combinedImageDetail(
        filter?: string,
        withConfig?: boolean,
        limit?: number,
        offset?: number,
        sort?: string,
        initOverrides?: RequestInit | runtime.InitOverrideFunction,
    ): Promise<ImagesApiCustomerAndImage> {
        const response = await this.combinedImageDetailRaw({ filter: filter, withConfig: withConfig, limit: limit, offset: offset, sort: sort }, initOverrides);
        return await response.value();
    }

    /**
     * Retrieve image issues summary such as Image detections, Runtime detections, Policies, vulnerabilities
     */
    async combinedImageIssuesSummaryRaw(
        requestParameters: CombinedImageIssuesSummaryRequest,
        initOverrides?: RequestInit | runtime.InitOverrideFunction,
    ): Promise<runtime.ApiResponse<ImagesApiImageIssuesSummary>> {
        if (requestParameters.cid === null || requestParameters.cid === undefined) {
            throw new runtime.RequiredError("cid", "Required parameter requestParameters.cid was null or undefined when calling combinedImageIssuesSummary.");
        }

        if (requestParameters.registry === null || requestParameters.registry === undefined) {
            throw new runtime.RequiredError("registry", "Required parameter requestParameters.registry was null or undefined when calling combinedImageIssuesSummary.");
        }

        if (requestParameters.repository === null || requestParameters.repository === undefined) {
            throw new runtime.RequiredError("repository", "Required parameter requestParameters.repository was null or undefined when calling combinedImageIssuesSummary.");
        }

        if (requestParameters.tag === null || requestParameters.tag === undefined) {
            throw new runtime.RequiredError("tag", "Required parameter requestParameters.tag was null or undefined when calling combinedImageIssuesSummary.");
        }

        const queryParameters: any = {};

        if (requestParameters.cid !== undefined) {
            queryParameters["cid"] = requestParameters.cid;
        }

        if (requestParameters.registry !== undefined) {
            queryParameters["registry"] = requestParameters.registry;
        }

        if (requestParameters.repository !== undefined) {
            queryParameters["repository"] = requestParameters.repository;
        }

        if (requestParameters.tag !== undefined) {
            queryParameters["tag"] = requestParameters.tag;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", []);
        }

        const response = await this.request(
            {
                path: `/container-security/combined/images/issues-summary/v1`,
                method: "GET",
                headers: headerParameters,
                query: queryParameters,
            },
            initOverrides,
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => ImagesApiImageIssuesSummaryFromJSON(jsonValue));
    }

    /**
     * Retrieve image issues summary such as Image detections, Runtime detections, Policies, vulnerabilities
     */
    async combinedImageIssuesSummary(cid: string, registry: string, repository: string, tag: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ImagesApiImageIssuesSummary> {
        const response = await this.combinedImageIssuesSummaryRaw({ cid: cid, registry: registry, repository: repository, tag: tag }, initOverrides);
        return await response.value();
    }

    /**
     * aggregates information about vulnerabilities for an image
     */
    async combinedImageVulnerabilitySummaryRaw(
        requestParameters: CombinedImageVulnerabilitySummaryRequest,
        initOverrides?: RequestInit | runtime.InitOverrideFunction,
    ): Promise<runtime.ApiResponse<ImagesApiImageVulnerabilitiesSummary>> {
        if (requestParameters.cid === null || requestParameters.cid === undefined) {
            throw new runtime.RequiredError("cid", "Required parameter requestParameters.cid was null or undefined when calling combinedImageVulnerabilitySummary.");
        }

        if (requestParameters.registry === null || requestParameters.registry === undefined) {
            throw new runtime.RequiredError("registry", "Required parameter requestParameters.registry was null or undefined when calling combinedImageVulnerabilitySummary.");
        }

        if (requestParameters.repository === null || requestParameters.repository === undefined) {
            throw new runtime.RequiredError("repository", "Required parameter requestParameters.repository was null or undefined when calling combinedImageVulnerabilitySummary.");
        }

        if (requestParameters.tag === null || requestParameters.tag === undefined) {
            throw new runtime.RequiredError("tag", "Required parameter requestParameters.tag was null or undefined when calling combinedImageVulnerabilitySummary.");
        }

        const queryParameters: any = {};

        if (requestParameters.cid !== undefined) {
            queryParameters["cid"] = requestParameters.cid;
        }

        if (requestParameters.registry !== undefined) {
            queryParameters["registry"] = requestParameters.registry;
        }

        if (requestParameters.repository !== undefined) {
            queryParameters["repository"] = requestParameters.repository;
        }

        if (requestParameters.tag !== undefined) {
            queryParameters["tag"] = requestParameters.tag;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", []);
        }

        const response = await this.request(
            {
                path: `/container-security/combined/images/vulnerabilities-summary/v1`,
                method: "GET",
                headers: headerParameters,
                query: queryParameters,
            },
            initOverrides,
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => ImagesApiImageVulnerabilitiesSummaryFromJSON(jsonValue));
    }

    /**
     * aggregates information about vulnerabilities for an image
     */
    async combinedImageVulnerabilitySummary(
        cid: string,
        registry: string,
        repository: string,
        tag: string,
        initOverrides?: RequestInit | runtime.InitOverrideFunction,
    ): Promise<ImagesApiImageVulnerabilitiesSummary> {
        const response = await this.combinedImageVulnerabilitySummaryRaw({ cid: cid, registry: registry, repository: repository, tag: tag }, initOverrides);
        return await response.value();
    }

    /**
     * Get image assessment results by providing an FQL filter and paging details
     */
    async getCombinedImagesRaw(requestParameters: GetCombinedImagesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ImagesExtCombinedImagesResponse>> {
        const queryParameters: any = {};

        if (requestParameters.filter !== undefined) {
            queryParameters["filter"] = requestParameters.filter;
        }

        if (requestParameters.limit !== undefined) {
            queryParameters["limit"] = requestParameters.limit;
        }

        if (requestParameters.offset !== undefined) {
            queryParameters["offset"] = requestParameters.offset;
        }

        if (requestParameters.sort !== undefined) {
            queryParameters["sort"] = requestParameters.sort;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", []);
        }

        const response = await this.request(
            {
                path: `/container-security/combined/image-assessment/images/v1`,
                method: "GET",
                headers: headerParameters,
                query: queryParameters,
            },
            initOverrides,
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => ImagesExtCombinedImagesResponseFromJSON(jsonValue));
    }

    /**
     * Get image assessment results by providing an FQL filter and paging details
     */
    async getCombinedImages(filter?: string, limit?: number, offset?: number, sort?: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ImagesExtCombinedImagesResponse> {
        const response = await this.getCombinedImagesRaw({ filter: filter, limit: limit, offset: offset, sort: sort }, initOverrides);
        return await response.value();
    }

    /**
     * Retrieve images with an option to expand aggregated vulnerabilities/detections
     */
    async readCombinedImagesExportRaw(
        requestParameters: ReadCombinedImagesExportRequest,
        initOverrides?: RequestInit | runtime.InitOverrideFunction,
    ): Promise<runtime.ApiResponse<ImagesApiCombinedImageExport>> {
        const queryParameters: any = {};

        if (requestParameters.filter !== undefined) {
            queryParameters["filter"] = requestParameters.filter;
        }

        if (requestParameters.expandVulnerabilities !== undefined) {
            queryParameters["expand_vulnerabilities"] = requestParameters.expandVulnerabilities;
        }

        if (requestParameters.expandDetections !== undefined) {
            queryParameters["expand_detections"] = requestParameters.expandDetections;
        }

        if (requestParameters.limit !== undefined) {
            queryParameters["limit"] = requestParameters.limit;
        }

        if (requestParameters.offset !== undefined) {
            queryParameters["offset"] = requestParameters.offset;
        }

        if (requestParameters.sort !== undefined) {
            queryParameters["sort"] = requestParameters.sort;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", []);
        }

        const response = await this.request(
            {
                path: `/container-security/combined/images/export/v1`,
                method: "GET",
                headers: headerParameters,
                query: queryParameters,
            },
            initOverrides,
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => ImagesApiCombinedImageExportFromJSON(jsonValue));
    }

    /**
     * Retrieve images with an option to expand aggregated vulnerabilities/detections
     */
    async readCombinedImagesExport(
        filter?: string,
        expandVulnerabilities?: boolean,
        expandDetections?: boolean,
        limit?: number,
        offset?: number,
        sort?: string,
        initOverrides?: RequestInit | runtime.InitOverrideFunction,
    ): Promise<ImagesApiCombinedImageExport> {
        const response = await this.readCombinedImagesExportRaw(
            { filter: filter, expandVulnerabilities: expandVulnerabilities, expandDetections: expandDetections, limit: limit, offset: offset, sort: sort },
            initOverrides,
        );
        return await response.value();
    }
}
