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
    ModelsAggregateValuesByFieldResponse,
    MsaReplyMetaOnly,
    UnidentifiedcontainersUnidentifiedContainerAPIResponse,
    UnidentifiedcontainersUnidentifiedContainersCountValue,
} from "../models/index";
import {
    CoreEntitiesResponseFromJSON,
    CoreEntitiesResponseToJSON,
    ModelsAggregateValuesByFieldResponseFromJSON,
    ModelsAggregateValuesByFieldResponseToJSON,
    MsaReplyMetaOnlyFromJSON,
    MsaReplyMetaOnlyToJSON,
    UnidentifiedcontainersUnidentifiedContainerAPIResponseFromJSON,
    UnidentifiedcontainersUnidentifiedContainerAPIResponseToJSON,
    UnidentifiedcontainersUnidentifiedContainersCountValueFromJSON,
    UnidentifiedcontainersUnidentifiedContainersCountValueToJSON,
} from "../models/index";

export interface ReadUnidentifiedContainersByDateRangeCountRequest {
    filter?: string;
}

export interface ReadUnidentifiedContainersCountRequest {
    filter?: string;
}

export interface SearchAndReadUnidentifiedContainersRequest {
    filter?: string;
    limit?: number;
    offset?: number;
    sort?: string;
}

/**
 *
 */
export class UnidentifiedContainersApi extends runtime.BaseAPI {
    /**
     * Returns the count of Unidentified Containers over the last 7 days
     */
    async readUnidentifiedContainersByDateRangeCountRaw(
        requestParameters: ReadUnidentifiedContainersByDateRangeCountRequest,
        initOverrides?: RequestInit | runtime.InitOverrideFunction,
    ): Promise<runtime.ApiResponse<ModelsAggregateValuesByFieldResponse>> {
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
                path: `/container-security/aggregates/unidentified-containers/count-by-date/v1`,
                method: "GET",
                headers: headerParameters,
                query: queryParameters,
            },
            initOverrides,
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => ModelsAggregateValuesByFieldResponseFromJSON(jsonValue));
    }

    /**
     * Returns the count of Unidentified Containers over the last 7 days
     */
    async readUnidentifiedContainersByDateRangeCount(filter?: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ModelsAggregateValuesByFieldResponse> {
        const response = await this.readUnidentifiedContainersByDateRangeCountRaw({ filter: filter }, initOverrides);
        return await response.value();
    }

    /**
     * Returns the total count of Unidentified Containers over a time period
     */
    async readUnidentifiedContainersCountRaw(
        requestParameters: ReadUnidentifiedContainersCountRequest,
        initOverrides?: RequestInit | runtime.InitOverrideFunction,
    ): Promise<runtime.ApiResponse<UnidentifiedcontainersUnidentifiedContainersCountValue>> {
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
                path: `/container-security/aggregates/unidentified-containers/count/v1`,
                method: "GET",
                headers: headerParameters,
                query: queryParameters,
            },
            initOverrides,
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => UnidentifiedcontainersUnidentifiedContainersCountValueFromJSON(jsonValue));
    }

    /**
     * Returns the total count of Unidentified Containers over a time period
     */
    async readUnidentifiedContainersCount(filter?: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<UnidentifiedcontainersUnidentifiedContainersCountValue> {
        const response = await this.readUnidentifiedContainersCountRaw({ filter: filter }, initOverrides);
        return await response.value();
    }

    /**
     * Search Unidentified Containers by the provided search criteria
     */
    async searchAndReadUnidentifiedContainersRaw(
        requestParameters: SearchAndReadUnidentifiedContainersRequest,
        initOverrides?: RequestInit | runtime.InitOverrideFunction,
    ): Promise<runtime.ApiResponse<UnidentifiedcontainersUnidentifiedContainerAPIResponse>> {
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
                path: `/container-security/combined/unidentified-containers/v1`,
                method: "GET",
                headers: headerParameters,
                query: queryParameters,
            },
            initOverrides,
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => UnidentifiedcontainersUnidentifiedContainerAPIResponseFromJSON(jsonValue));
    }

    /**
     * Search Unidentified Containers by the provided search criteria
     */
    async searchAndReadUnidentifiedContainers(
        filter?: string,
        limit?: number,
        offset?: number,
        sort?: string,
        initOverrides?: RequestInit | runtime.InitOverrideFunction,
    ): Promise<UnidentifiedcontainersUnidentifiedContainerAPIResponse> {
        const response = await this.searchAndReadUnidentifiedContainersRaw({ filter: filter, limit: limit, offset: offset, sort: sort }, initOverrides);
        return await response.value();
    }
}
