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
import type {
    DetectsapiPatchEntitiesInvestigatablesV1Request,
    DetectsapiPatchEntitiesInvestigatablesV2Request,
    DetectsapiPostEntitiesInvestigatablesV1Request,
    DetectsapiPostEntitiesInvestigatablesV1Response,
    MsaAggregateQueryRequest,
    MsaAggregatesResponse,
    MsaQueryResponse,
    MsaReplyMetaOnly,
    MsaspecResponseFields,
} from "../models";
import {
    DetectsapiPatchEntitiesInvestigatablesV1RequestFromJSON,
    DetectsapiPatchEntitiesInvestigatablesV1RequestToJSON,
    DetectsapiPatchEntitiesInvestigatablesV2RequestFromJSON,
    DetectsapiPatchEntitiesInvestigatablesV2RequestToJSON,
    DetectsapiPostEntitiesInvestigatablesV1RequestFromJSON,
    DetectsapiPostEntitiesInvestigatablesV1RequestToJSON,
    DetectsapiPostEntitiesInvestigatablesV1ResponseFromJSON,
    DetectsapiPostEntitiesInvestigatablesV1ResponseToJSON,
    MsaAggregateQueryRequestFromJSON,
    MsaAggregateQueryRequestToJSON,
    MsaAggregatesResponseFromJSON,
    MsaAggregatesResponseToJSON,
    MsaQueryResponseFromJSON,
    MsaQueryResponseToJSON,
    MsaReplyMetaOnlyFromJSON,
    MsaReplyMetaOnlyToJSON,
    MsaspecResponseFieldsFromJSON,
    MsaspecResponseFieldsToJSON,
} from "../models";

export interface GetQueriesAlertsV1Request {
    offset?: number;
    limit?: number;
    sort?: string;
    filter?: string;
    q?: string;
}

export interface PatchEntitiesAlertsV1Request {
    body: DetectsapiPatchEntitiesInvestigatablesV1Request;
}

export interface PatchEntitiesAlertsV2Request {
    body: DetectsapiPatchEntitiesInvestigatablesV2Request;
}

export interface PostAggregatesAlertsV1Request {
    body: Array<MsaAggregateQueryRequest>;
}

export interface PostEntitiesAlertsV1Request {
    body: DetectsapiPostEntitiesInvestigatablesV1Request;
}

/**
 *
 */
export class AlertsApi extends runtime.BaseAPI {
    /**
     * retrieves all Alerts ids that match a given query
     */
    async getQueriesAlertsV1Raw(requestParameters: GetQueriesAlertsV1Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MsaQueryResponse>> {
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

        if (requestParameters.q !== undefined) {
            queryParameters["q"] = requestParameters.q;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["alerts:read"]);
        }

        const response = await this.request(
            {
                path: `/alerts/queries/alerts/v1`,
                method: "GET",
                headers: headerParameters,
                query: queryParameters,
            },
            initOverrides
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => MsaQueryResponseFromJSON(jsonValue));
    }

    /**
     * retrieves all Alerts ids that match a given query
     */
    async getQueriesAlertsV1(offset?: number, limit?: number, sort?: string, filter?: string, q?: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MsaQueryResponse> {
        const response = await this.getQueriesAlertsV1Raw({ offset: offset, limit: limit, sort: sort, filter: filter, q: q }, initOverrides);
        return await response.value();
    }

    /**
     * Perform actions on detections identified by detection ID(s) in request. Each action has a name and a description which describes what the action does.  remove_tag - remove a tag from 1 or more detection(s) assign_to_user_id - assign 1 or more detection(s) to a user identified by user id (eg: user1@example.com) unassign - unassign an previously assigned user from 1 or more detection(s). The value passed to this action is ignored. new_behavior_processed - adds a newly processed behavior to 1 or more detection(s) update_status - update status for 1 or more detection(s) assign_to_uuid - assign 1 or more detection(s) to a user identified by UUID add_tag - add a tag to 1 or more detection(s) remove_tags_by_prefix - remove tags with given prefix from 1 or more detection(s) append_comment - appends new comment to existing comments assign_to_name - assign 1 or more detection(s) to a user identified by user name show_in_ui - shows 1 or more detection(s) on UI if set to true, hides otherwise. an empty/nil value is also valid skip_side_effects - internal only command to skip side effects during Beta phase
     */
    async patchEntitiesAlertsV1Raw(requestParameters: PatchEntitiesAlertsV1Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MsaReplyMetaOnly>> {
        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError("body", "Required parameter requestParameters.body was null or undefined when calling patchEntitiesAlertsV1.");
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters["Content-Type"] = "application/json";

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["alerts:write"]);
        }

        const response = await this.request(
            {
                path: `/alerts/entities/alerts/v1`,
                method: "PATCH",
                headers: headerParameters,
                query: queryParameters,
                body: DetectsapiPatchEntitiesInvestigatablesV1RequestToJSON(requestParameters.body),
            },
            initOverrides
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => MsaReplyMetaOnlyFromJSON(jsonValue));
    }

    /**
     * Perform actions on detections identified by detection ID(s) in request. Each action has a name and a description which describes what the action does.  remove_tag - remove a tag from 1 or more detection(s) assign_to_user_id - assign 1 or more detection(s) to a user identified by user id (eg: user1@example.com) unassign - unassign an previously assigned user from 1 or more detection(s). The value passed to this action is ignored. new_behavior_processed - adds a newly processed behavior to 1 or more detection(s) update_status - update status for 1 or more detection(s) assign_to_uuid - assign 1 or more detection(s) to a user identified by UUID add_tag - add a tag to 1 or more detection(s) remove_tags_by_prefix - remove tags with given prefix from 1 or more detection(s) append_comment - appends new comment to existing comments assign_to_name - assign 1 or more detection(s) to a user identified by user name show_in_ui - shows 1 or more detection(s) on UI if set to true, hides otherwise. an empty/nil value is also valid skip_side_effects - internal only command to skip side effects during Beta phase
     */
    async patchEntitiesAlertsV1(body: DetectsapiPatchEntitiesInvestigatablesV1Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MsaReplyMetaOnly> {
        const response = await this.patchEntitiesAlertsV1Raw({ body: body }, initOverrides);
        return await response.value();
    }

    /**
     * Perform actions on detections identified by detection ID(s) in request. Each action has a name and a description which describes what the action does.
     */
    async patchEntitiesAlertsV2Raw(requestParameters: PatchEntitiesAlertsV2Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MsaspecResponseFields>> {
        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError("body", "Required parameter requestParameters.body was null or undefined when calling patchEntitiesAlertsV2.");
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters["Content-Type"] = "application/json";

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["alerts:write"]);
        }

        const response = await this.request(
            {
                path: `/alerts/entities/alerts/v2`,
                method: "PATCH",
                headers: headerParameters,
                query: queryParameters,
                body: DetectsapiPatchEntitiesInvestigatablesV2RequestToJSON(requestParameters.body),
            },
            initOverrides
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => MsaspecResponseFieldsFromJSON(jsonValue));
    }

    /**
     * Perform actions on detections identified by detection ID(s) in request. Each action has a name and a description which describes what the action does.
     */
    async patchEntitiesAlertsV2(body: DetectsapiPatchEntitiesInvestigatablesV2Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MsaspecResponseFields> {
        const response = await this.patchEntitiesAlertsV2Raw({ body: body }, initOverrides);
        return await response.value();
    }

    /**
     * retrieves aggregates for Alerts across all CIDs
     */
    async postAggregatesAlertsV1Raw(requestParameters: PostAggregatesAlertsV1Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MsaAggregatesResponse>> {
        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError("body", "Required parameter requestParameters.body was null or undefined when calling postAggregatesAlertsV1.");
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters["Content-Type"] = "application/json";

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["alerts:read"]);
        }

        const response = await this.request(
            {
                path: `/alerts/aggregates/alerts/v1`,
                method: "POST",
                headers: headerParameters,
                query: queryParameters,
                body: requestParameters.body.map(MsaAggregateQueryRequestToJSON),
            },
            initOverrides
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => MsaAggregatesResponseFromJSON(jsonValue));
    }

    /**
     * retrieves aggregates for Alerts across all CIDs
     */
    async postAggregatesAlertsV1(body: Array<MsaAggregateQueryRequest>, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MsaAggregatesResponse> {
        const response = await this.postAggregatesAlertsV1Raw({ body: body }, initOverrides);
        return await response.value();
    }

    /**
     * retrieves all Alerts given their ids
     */
    async postEntitiesAlertsV1Raw(
        requestParameters: PostEntitiesAlertsV1Request,
        initOverrides?: RequestInit | runtime.InitOverrideFunction
    ): Promise<runtime.ApiResponse<DetectsapiPostEntitiesInvestigatablesV1Response>> {
        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError("body", "Required parameter requestParameters.body was null or undefined when calling postEntitiesAlertsV1.");
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters["Content-Type"] = "application/json";

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["alerts:read"]);
        }

        const response = await this.request(
            {
                path: `/alerts/entities/alerts/v1`,
                method: "POST",
                headers: headerParameters,
                query: queryParameters,
                body: DetectsapiPostEntitiesInvestigatablesV1RequestToJSON(requestParameters.body),
            },
            initOverrides
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => DetectsapiPostEntitiesInvestigatablesV1ResponseFromJSON(jsonValue));
    }

    /**
     * retrieves all Alerts given their ids
     */
    async postEntitiesAlertsV1(
        body: DetectsapiPostEntitiesInvestigatablesV1Request,
        initOverrides?: RequestInit | runtime.InitOverrideFunction
    ): Promise<DetectsapiPostEntitiesInvestigatablesV1Response> {
        const response = await this.postEntitiesAlertsV1Raw({ body: body }, initOverrides);
        return await response.value();
    }
}