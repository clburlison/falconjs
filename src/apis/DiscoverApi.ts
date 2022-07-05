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
import type { DomainDiscoverAPIAccountEntitiesResponse, DomainDiscoverAPIHostEntitiesResponse, DomainDiscoverAPILoginEntitiesResponse, MsaQueryResponse, MsaReplyMetaOnly } from "../models";
import {
    DomainDiscoverAPIAccountEntitiesResponseFromJSON,
    DomainDiscoverAPIAccountEntitiesResponseToJSON,
    DomainDiscoverAPIHostEntitiesResponseFromJSON,
    DomainDiscoverAPIHostEntitiesResponseToJSON,
    DomainDiscoverAPILoginEntitiesResponseFromJSON,
    DomainDiscoverAPILoginEntitiesResponseToJSON,
    MsaQueryResponseFromJSON,
    MsaQueryResponseToJSON,
    MsaReplyMetaOnlyFromJSON,
    MsaReplyMetaOnlyToJSON,
} from "../models";

export interface GetAccountsRequest {
    ids: Array<string>;
}

export interface GetHostsRequest {
    ids: Array<string>;
}

export interface GetLoginsRequest {
    ids: Array<string>;
}

export interface QueryAccountsRequest {
    offset?: number;
    limit?: number;
    sort?: string;
    filter?: string;
}

export interface QueryHostsRequest {
    offset?: number;
    limit?: number;
    sort?: string;
    filter?: string;
}

export interface QueryLoginsRequest {
    offset?: number;
    limit?: number;
    sort?: string;
    filter?: string;
}

/**
 *
 */
export class DiscoverApi extends runtime.BaseAPI {
    /**
     * Get details on accounts by providing one or more IDs.
     */
    async getAccountsRaw(requestParameters: GetAccountsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DomainDiscoverAPIAccountEntitiesResponse>> {
        if (requestParameters.ids === null || requestParameters.ids === undefined) {
            throw new runtime.RequiredError("ids", "Required parameter requestParameters.ids was null or undefined when calling getAccounts.");
        }

        const queryParameters: any = {};

        if (requestParameters.ids) {
            queryParameters["ids"] = requestParameters.ids;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["discover:read"]);
        }

        const response = await this.request(
            {
                path: `/discover/entities/accounts/v1`,
                method: "GET",
                headers: headerParameters,
                query: queryParameters,
            },
            initOverrides
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => DomainDiscoverAPIAccountEntitiesResponseFromJSON(jsonValue));
    }

    /**
     * Get details on accounts by providing one or more IDs.
     */
    async getAccounts(ids: Array<string>, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DomainDiscoverAPIAccountEntitiesResponse> {
        const response = await this.getAccountsRaw({ ids: ids }, initOverrides);
        return await response.value();
    }

    /**
     * Get details on assets by providing one or more IDs.
     */
    async getHostsRaw(requestParameters: GetHostsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DomainDiscoverAPIHostEntitiesResponse>> {
        if (requestParameters.ids === null || requestParameters.ids === undefined) {
            throw new runtime.RequiredError("ids", "Required parameter requestParameters.ids was null or undefined when calling getHosts.");
        }

        const queryParameters: any = {};

        if (requestParameters.ids) {
            queryParameters["ids"] = requestParameters.ids;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["discover:read"]);
        }

        const response = await this.request(
            {
                path: `/discover/entities/hosts/v1`,
                method: "GET",
                headers: headerParameters,
                query: queryParameters,
            },
            initOverrides
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => DomainDiscoverAPIHostEntitiesResponseFromJSON(jsonValue));
    }

    /**
     * Get details on assets by providing one or more IDs.
     */
    async getHosts(ids: Array<string>, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DomainDiscoverAPIHostEntitiesResponse> {
        const response = await this.getHostsRaw({ ids: ids }, initOverrides);
        return await response.value();
    }

    /**
     * Get details on logins by providing one or more IDs.
     */
    async getLoginsRaw(requestParameters: GetLoginsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DomainDiscoverAPILoginEntitiesResponse>> {
        if (requestParameters.ids === null || requestParameters.ids === undefined) {
            throw new runtime.RequiredError("ids", "Required parameter requestParameters.ids was null or undefined when calling getLogins.");
        }

        const queryParameters: any = {};

        if (requestParameters.ids) {
            queryParameters["ids"] = requestParameters.ids;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["discover:read"]);
        }

        const response = await this.request(
            {
                path: `/discover/entities/logins/v1`,
                method: "GET",
                headers: headerParameters,
                query: queryParameters,
            },
            initOverrides
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => DomainDiscoverAPILoginEntitiesResponseFromJSON(jsonValue));
    }

    /**
     * Get details on logins by providing one or more IDs.
     */
    async getLogins(ids: Array<string>, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DomainDiscoverAPILoginEntitiesResponse> {
        const response = await this.getLoginsRaw({ ids: ids }, initOverrides);
        return await response.value();
    }

    /**
     * Search for accounts in your environment by providing an FQL (Falcon Query Language) filter and paging details. Returns a set of account IDs which match the filter criteria.
     */
    async queryAccountsRaw(requestParameters: QueryAccountsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MsaQueryResponse>> {
        const queryParameters: any = {};

        if (requestParameters.offset !== undefined) {
            queryParameters["offset"] = requestParameters.offset;
        }

        if (requestParameters.limit !== undefined) {
            queryParameters["limit"] = requestParameters.limit;
        }

        if (requestParameters.sort !== undefined) {
            queryParameters["sort"] = requestParameters.sort;
        }

        if (requestParameters.filter !== undefined) {
            queryParameters["filter"] = requestParameters.filter;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["discover:read"]);
        }

        const response = await this.request(
            {
                path: `/discover/queries/accounts/v1`,
                method: "GET",
                headers: headerParameters,
                query: queryParameters,
            },
            initOverrides
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => MsaQueryResponseFromJSON(jsonValue));
    }

    /**
     * Search for accounts in your environment by providing an FQL (Falcon Query Language) filter and paging details. Returns a set of account IDs which match the filter criteria.
     */
    async queryAccounts(offset?: number, limit?: number, sort?: string, filter?: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MsaQueryResponse> {
        const response = await this.queryAccountsRaw({ offset: offset, limit: limit, sort: sort, filter: filter }, initOverrides);
        return await response.value();
    }

    /**
     * Search for assets in your environment by providing an FQL (Falcon Query Language) filter and paging details. Returns a set of asset IDs which match the filter criteria.
     */
    async queryHostsRaw(requestParameters: QueryHostsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MsaQueryResponse>> {
        const queryParameters: any = {};

        if (requestParameters.offset !== undefined) {
            queryParameters["offset"] = requestParameters.offset;
        }

        if (requestParameters.limit !== undefined) {
            queryParameters["limit"] = requestParameters.limit;
        }

        if (requestParameters.sort !== undefined) {
            queryParameters["sort"] = requestParameters.sort;
        }

        if (requestParameters.filter !== undefined) {
            queryParameters["filter"] = requestParameters.filter;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["discover:read"]);
        }

        const response = await this.request(
            {
                path: `/discover/queries/hosts/v1`,
                method: "GET",
                headers: headerParameters,
                query: queryParameters,
            },
            initOverrides
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => MsaQueryResponseFromJSON(jsonValue));
    }

    /**
     * Search for assets in your environment by providing an FQL (Falcon Query Language) filter and paging details. Returns a set of asset IDs which match the filter criteria.
     */
    async queryHosts(offset?: number, limit?: number, sort?: string, filter?: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MsaQueryResponse> {
        const response = await this.queryHostsRaw({ offset: offset, limit: limit, sort: sort, filter: filter }, initOverrides);
        return await response.value();
    }

    /**
     * Search for logins in your environment by providing an FQL (Falcon Query Language) filter and paging details. Returns a set of login IDs which match the filter criteria.
     */
    async queryLoginsRaw(requestParameters: QueryLoginsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MsaQueryResponse>> {
        const queryParameters: any = {};

        if (requestParameters.offset !== undefined) {
            queryParameters["offset"] = requestParameters.offset;
        }

        if (requestParameters.limit !== undefined) {
            queryParameters["limit"] = requestParameters.limit;
        }

        if (requestParameters.sort !== undefined) {
            queryParameters["sort"] = requestParameters.sort;
        }

        if (requestParameters.filter !== undefined) {
            queryParameters["filter"] = requestParameters.filter;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["discover:read"]);
        }

        const response = await this.request(
            {
                path: `/discover/queries/logins/v1`,
                method: "GET",
                headers: headerParameters,
                query: queryParameters,
            },
            initOverrides
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => MsaQueryResponseFromJSON(jsonValue));
    }

    /**
     * Search for logins in your environment by providing an FQL (Falcon Query Language) filter and paging details. Returns a set of login IDs which match the filter criteria.
     */
    async queryLogins(offset?: number, limit?: number, sort?: string, filter?: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MsaQueryResponse> {
        const response = await this.queryLoginsRaw({ offset: offset, limit: limit, sort: sort, filter: filter }, initOverrides);
        return await response.value();
    }
}
