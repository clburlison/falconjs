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
import type { MsaReplyMetaOnly, MsaspecQueryResponse, SchemaSensorEventResponseV1 } from "../models/index";
import {
    MsaReplyMetaOnlyFromJSON,
    MsaReplyMetaOnlyToJSON,
    MsaspecQueryResponseFromJSON,
    MsaspecQueryResponseToJSON,
    SchemaSensorEventResponseV1FromJSON,
    SchemaSensorEventResponseV1ToJSON,
} from "../models/index";

export interface FdrschemaEntitiesEventGetRequest {
    ids?: Array<string>;
}

export interface FdrschemaQueriesEventGetRequest {
    limit?: number;
    offset?: number;
    filter?: string;
    sort?: string;
}

/**
 *
 */
export class EventSchemaApi extends runtime.BaseAPI {
    /**
     * Fetch combined schema
     */
    async fdrschemaCombinedEventGetRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SchemaSensorEventResponseV1>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", []);
        }

        const response = await this.request(
            {
                path: `/fdr/combined/schema-members/v1`,
                method: "GET",
                headers: headerParameters,
                query: queryParameters,
            },
            initOverrides
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => SchemaSensorEventResponseV1FromJSON(jsonValue));
    }

    /**
     * Fetch combined schema
     */
    async fdrschemaCombinedEventGet(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SchemaSensorEventResponseV1> {
        const response = await this.fdrschemaCombinedEventGetRaw(initOverrides);
        return await response.value();
    }

    /**
     * Fetch event schema by ID
     */
    async fdrschemaEntitiesEventGetRaw(
        requestParameters: FdrschemaEntitiesEventGetRequest,
        initOverrides?: RequestInit | runtime.InitOverrideFunction
    ): Promise<runtime.ApiResponse<SchemaSensorEventResponseV1>> {
        const queryParameters: any = {};

        if (requestParameters.ids) {
            queryParameters["ids"] = requestParameters.ids;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", []);
        }

        const response = await this.request(
            {
                path: `/fdr/entities/schema-events/v1`,
                method: "GET",
                headers: headerParameters,
                query: queryParameters,
            },
            initOverrides
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => SchemaSensorEventResponseV1FromJSON(jsonValue));
    }

    /**
     * Fetch event schema by ID
     */
    async fdrschemaEntitiesEventGet(ids?: Array<string>, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SchemaSensorEventResponseV1> {
        const response = await this.fdrschemaEntitiesEventGetRaw({ ids: ids }, initOverrides);
        return await response.value();
    }

    /**
     * Get list of event IDs given a particular query.
     */
    async fdrschemaQueriesEventGetRaw(
        requestParameters: FdrschemaQueriesEventGetRequest,
        initOverrides?: RequestInit | runtime.InitOverrideFunction
    ): Promise<runtime.ApiResponse<MsaspecQueryResponse>> {
        const queryParameters: any = {};

        if (requestParameters.limit !== undefined) {
            queryParameters["limit"] = requestParameters.limit;
        }

        if (requestParameters.offset !== undefined) {
            queryParameters["offset"] = requestParameters.offset;
        }

        if (requestParameters.filter !== undefined) {
            queryParameters["filter"] = requestParameters.filter;
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
                path: `/fdr/queries/schema-events/v1`,
                method: "GET",
                headers: headerParameters,
                query: queryParameters,
            },
            initOverrides
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => MsaspecQueryResponseFromJSON(jsonValue));
    }

    /**
     * Get list of event IDs given a particular query.
     */
    async fdrschemaQueriesEventGet(limit?: number, offset?: number, filter?: string, sort?: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MsaspecQueryResponse> {
        const response = await this.fdrschemaQueriesEventGetRaw({ limit: limit, offset: offset, filter: filter, sort: sort }, initOverrides);
        return await response.value();
    }
}