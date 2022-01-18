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

import * as runtime from "../runtime";
import {
    MsaErrorsOnly,
    MsaErrorsOnlyFromJSON,
    MsaErrorsOnlyToJSON,
    MsaQueryResponse,
    MsaQueryResponseFromJSON,
    MsaQueryResponseToJSON,
    MsaReplyMetaOnly,
    MsaReplyMetaOnlyFromJSON,
    MsaReplyMetaOnlyToJSON,
    RequestsIoaExclusionCreateReqV1,
    RequestsIoaExclusionCreateReqV1FromJSON,
    RequestsIoaExclusionCreateReqV1ToJSON,
    RequestsIoaExclusionUpdateReqV1,
    RequestsIoaExclusionUpdateReqV1FromJSON,
    RequestsIoaExclusionUpdateReqV1ToJSON,
    ResponsesIoaExclusionRespV1,
    ResponsesIoaExclusionRespV1FromJSON,
    ResponsesIoaExclusionRespV1ToJSON,
} from "../models";

export interface CreateIOAExclusionsV1Request {
    body: RequestsIoaExclusionCreateReqV1;
}

export interface DeleteIOAExclusionsV1Request {
    ids: Array<string>;
    comment?: string;
}

export interface GetIOAExclusionsV1Request {
    ids: Array<string>;
}

export interface QueryIOAExclusionsV1Request {
    filter?: string;
    offset?: number;
    limit?: number;
    sort?: QueryIOAExclusionsV1SortEnum;
}

export interface UpdateIOAExclusionsV1Request {
    body: RequestsIoaExclusionUpdateReqV1;
}

/**
 *
 */
export class IoaExclusionsApi extends runtime.BaseAPI {
    /**
     * Create the IOA exclusions
     */
    async createIOAExclusionsV1Raw(requestParameters: CreateIOAExclusionsV1Request, initOverrides?: RequestInit): Promise<runtime.ApiResponse<ResponsesIoaExclusionRespV1>> {
        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError("body", "Required parameter requestParameters.body was null or undefined when calling createIOAExclusionsV1.");
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters["Content-Type"] = "application/json";

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["self-service-ioa-exclusions:write"]);
        }

        const response = await this.request(
            {
                path: `/policy/entities/ioa-exclusions/v1`,
                method: "POST",
                headers: headerParameters,
                query: queryParameters,
                body: RequestsIoaExclusionCreateReqV1ToJSON(requestParameters.body),
            },
            initOverrides
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => ResponsesIoaExclusionRespV1FromJSON(jsonValue));
    }

    /**
     * Create the IOA exclusions
     */
    async createIOAExclusionsV1(body: RequestsIoaExclusionCreateReqV1, initOverrides?: RequestInit): Promise<ResponsesIoaExclusionRespV1> {
        const response = await this.createIOAExclusionsV1Raw({ body: body }, initOverrides);
        return await response.value();
    }

    /**
     * Delete the IOA exclusions by id
     */
    async deleteIOAExclusionsV1Raw(requestParameters: DeleteIOAExclusionsV1Request, initOverrides?: RequestInit): Promise<runtime.ApiResponse<MsaQueryResponse>> {
        if (requestParameters.ids === null || requestParameters.ids === undefined) {
            throw new runtime.RequiredError("ids", "Required parameter requestParameters.ids was null or undefined when calling deleteIOAExclusionsV1.");
        }

        const queryParameters: any = {};

        if (requestParameters.ids) {
            queryParameters["ids"] = requestParameters.ids.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.comment !== undefined) {
            queryParameters["comment"] = requestParameters.comment;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["self-service-ioa-exclusions:write"]);
        }

        const response = await this.request(
            {
                path: `/policy/entities/ioa-exclusions/v1`,
                method: "DELETE",
                headers: headerParameters,
                query: queryParameters,
            },
            initOverrides
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => MsaQueryResponseFromJSON(jsonValue));
    }

    /**
     * Delete the IOA exclusions by id
     */
    async deleteIOAExclusionsV1(ids: Array<string>, comment?: string, initOverrides?: RequestInit): Promise<MsaQueryResponse> {
        const response = await this.deleteIOAExclusionsV1Raw({ ids: ids, comment: comment }, initOverrides);
        return await response.value();
    }

    /**
     * Get a set of IOA Exclusions by specifying their IDs
     */
    async getIOAExclusionsV1Raw(requestParameters: GetIOAExclusionsV1Request, initOverrides?: RequestInit): Promise<runtime.ApiResponse<ResponsesIoaExclusionRespV1>> {
        if (requestParameters.ids === null || requestParameters.ids === undefined) {
            throw new runtime.RequiredError("ids", "Required parameter requestParameters.ids was null or undefined when calling getIOAExclusionsV1.");
        }

        const queryParameters: any = {};

        if (requestParameters.ids) {
            queryParameters["ids"] = requestParameters.ids.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["self-service-ioa-exclusions:read"]);
        }

        const response = await this.request(
            {
                path: `/policy/entities/ioa-exclusions/v1`,
                method: "GET",
                headers: headerParameters,
                query: queryParameters,
            },
            initOverrides
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => ResponsesIoaExclusionRespV1FromJSON(jsonValue));
    }

    /**
     * Get a set of IOA Exclusions by specifying their IDs
     */
    async getIOAExclusionsV1(ids: Array<string>, initOverrides?: RequestInit): Promise<ResponsesIoaExclusionRespV1> {
        const response = await this.getIOAExclusionsV1Raw({ ids: ids }, initOverrides);
        return await response.value();
    }

    /**
     * Search for IOA exclusions.
     */
    async queryIOAExclusionsV1Raw(requestParameters: QueryIOAExclusionsV1Request, initOverrides?: RequestInit): Promise<runtime.ApiResponse<MsaQueryResponse>> {
        const queryParameters: any = {};

        if (requestParameters.filter !== undefined) {
            queryParameters["filter"] = requestParameters.filter;
        }

        if (requestParameters.offset !== undefined) {
            queryParameters["offset"] = requestParameters.offset;
        }

        if (requestParameters.limit !== undefined) {
            queryParameters["limit"] = requestParameters.limit;
        }

        if (requestParameters.sort !== undefined) {
            queryParameters["sort"] = requestParameters.sort;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["self-service-ioa-exclusions:read"]);
        }

        const response = await this.request(
            {
                path: `/policy/queries/ioa-exclusions/v1`,
                method: "GET",
                headers: headerParameters,
                query: queryParameters,
            },
            initOverrides
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => MsaQueryResponseFromJSON(jsonValue));
    }

    /**
     * Search for IOA exclusions.
     */
    async queryIOAExclusionsV1(filter?: string, offset?: number, limit?: number, sort?: QueryIOAExclusionsV1SortEnum, initOverrides?: RequestInit): Promise<MsaQueryResponse> {
        const response = await this.queryIOAExclusionsV1Raw({ filter: filter, offset: offset, limit: limit, sort: sort }, initOverrides);
        return await response.value();
    }

    /**
     * Update the IOA exclusions
     */
    async updateIOAExclusionsV1Raw(requestParameters: UpdateIOAExclusionsV1Request, initOverrides?: RequestInit): Promise<runtime.ApiResponse<ResponsesIoaExclusionRespV1>> {
        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError("body", "Required parameter requestParameters.body was null or undefined when calling updateIOAExclusionsV1.");
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters["Content-Type"] = "application/json";

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["self-service-ioa-exclusions:write"]);
        }

        const response = await this.request(
            {
                path: `/policy/entities/ioa-exclusions/v1`,
                method: "PATCH",
                headers: headerParameters,
                query: queryParameters,
                body: RequestsIoaExclusionUpdateReqV1ToJSON(requestParameters.body),
            },
            initOverrides
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => ResponsesIoaExclusionRespV1FromJSON(jsonValue));
    }

    /**
     * Update the IOA exclusions
     */
    async updateIOAExclusionsV1(body: RequestsIoaExclusionUpdateReqV1, initOverrides?: RequestInit): Promise<ResponsesIoaExclusionRespV1> {
        const response = await this.updateIOAExclusionsV1Raw({ body: body }, initOverrides);
        return await response.value();
    }
}

/**
 * @export
 * @enum {string}
 */
export enum QueryIOAExclusionsV1SortEnum {
    AppliedGloballyAsc = "applied_globally.asc",
    AppliedGloballyDesc = "applied_globally.desc",
    CreatedByAsc = "created_by.asc",
    CreatedByDesc = "created_by.desc",
    CreatedOnAsc = "created_on.asc",
    CreatedOnDesc = "created_on.desc",
    LastModifiedAsc = "last_modified.asc",
    LastModifiedDesc = "last_modified.desc",
    ModifiedByAsc = "modified_by.asc",
    ModifiedByDesc = "modified_by.desc",
    NameAsc = "name.asc",
    NameDesc = "name.desc",
    PatternIdAsc = "pattern_id.asc",
    PatternIdDesc = "pattern_id.desc",
    PatternNameAsc = "pattern_name.asc",
    PatternNameDesc = "pattern_name.desc",
}