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
    ApiExecutionResultsResponse,
    ApiResourceIDsResponse,
    ClientActionRequest,
    ClientSystemDefinitionCreateResponse,
    ClientSystemDefinitionDeProvisionRequest,
    ClientSystemDefinitionPromoteRequest,
    ClientSystemDefinitionProvisionRequest,
    DefinitionsDefinitionEntitiesResponse,
    MsaReplyMetaOnly,
} from "../models/index";
import {
    ApiExecutionResultsResponseFromJSON,
    ApiExecutionResultsResponseToJSON,
    ApiResourceIDsResponseFromJSON,
    ApiResourceIDsResponseToJSON,
    ClientActionRequestFromJSON,
    ClientActionRequestToJSON,
    ClientSystemDefinitionCreateResponseFromJSON,
    ClientSystemDefinitionCreateResponseToJSON,
    ClientSystemDefinitionDeProvisionRequestFromJSON,
    ClientSystemDefinitionDeProvisionRequestToJSON,
    ClientSystemDefinitionPromoteRequestFromJSON,
    ClientSystemDefinitionPromoteRequestToJSON,
    ClientSystemDefinitionProvisionRequestFromJSON,
    ClientSystemDefinitionProvisionRequestToJSON,
    DefinitionsDefinitionEntitiesResponseFromJSON,
    DefinitionsDefinitionEntitiesResponseToJSON,
    MsaReplyMetaOnlyFromJSON,
    MsaReplyMetaOnlyToJSON,
} from "../models/index";

export interface DeprovisionSystemDefinitionRequest {
    body: ClientSystemDefinitionDeProvisionRequest;
}

export interface WorkflowsApiExecuteRequest {
    body: object;
    definitionId?: Array<string>;
    name?: string;
    key?: string;
    depth?: number;
    sourceEventUrl?: string;
}

export interface ExecutionsActionRequest {
    actionName: ExecutionsActionActionNameEnum;
    body: ClientActionRequest;
}

export interface ExecutionsResultRequest {
    ids: Array<string>;
}

export interface PromoteSystemDefinitionRequest {
    body: ClientSystemDefinitionPromoteRequest;
}

export interface ProvisionSystemDefinitionRequest {
    body: ClientSystemDefinitionProvisionRequest;
}

/**
 *
 */
export class WorkflowsApi extends runtime.BaseAPI {
    /**
     * Deprovisions a system definition that was previously provisioned on the target CID
     */
    async deprovisionSystemDefinitionRaw(
        requestParameters: DeprovisionSystemDefinitionRequest,
        initOverrides?: RequestInit | runtime.InitOverrideFunction
    ): Promise<runtime.ApiResponse<ClientSystemDefinitionCreateResponse>> {
        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError("body", "Required parameter requestParameters.body was null or undefined when calling deprovisionSystemDefinition.");
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters["Content-Type"] = "application/json";

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["workflow:write"]);
        }

        const response = await this.request(
            {
                path: `/workflows/system-definitions/deprovision/v1`,
                method: "POST",
                headers: headerParameters,
                query: queryParameters,
                body: ClientSystemDefinitionDeProvisionRequestToJSON(requestParameters.body),
            },
            initOverrides
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => ClientSystemDefinitionCreateResponseFromJSON(jsonValue));
    }

    /**
     * Deprovisions a system definition that was previously provisioned on the target CID
     */
    async deprovisionSystemDefinition(body: ClientSystemDefinitionDeProvisionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ClientSystemDefinitionCreateResponse> {
        const response = await this.deprovisionSystemDefinitionRaw({ body: body }, initOverrides);
        return await response.value();
    }

    /**
     * Executes an on-demand Workflow, the body is JSON used to trigger the execution, the response the execution ID(s)
     */
    async executeRaw(requestParameters: WorkflowsApiExecuteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ApiResourceIDsResponse>> {
        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError("body", "Required parameter requestParameters.body was null or undefined when calling execute.");
        }

        const queryParameters: any = {};

        if (requestParameters.definitionId) {
            queryParameters["definition_id"] = requestParameters.definitionId.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.name !== undefined) {
            queryParameters["name"] = requestParameters.name;
        }

        if (requestParameters.key !== undefined) {
            queryParameters["key"] = requestParameters.key;
        }

        if (requestParameters.depth !== undefined) {
            queryParameters["depth"] = requestParameters.depth;
        }

        if (requestParameters.sourceEventUrl !== undefined) {
            queryParameters["source_event_url"] = requestParameters.sourceEventUrl;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters["Content-Type"] = "application/json";

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["workflow:write"]);
        }

        const response = await this.request(
            {
                path: `/workflows/entities/execute/v1`,
                method: "POST",
                headers: headerParameters,
                query: queryParameters,
                body: requestParameters.body as any,
            },
            initOverrides
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => ApiResourceIDsResponseFromJSON(jsonValue));
    }

    /**
     * Executes an on-demand Workflow, the body is JSON used to trigger the execution, the response the execution ID(s)
     */
    async execute(
        body: object,
        definitionId?: Array<string>,
        name?: string,
        key?: string,
        depth?: number,
        sourceEventUrl?: string,
        initOverrides?: RequestInit | runtime.InitOverrideFunction
    ): Promise<ApiResourceIDsResponse> {
        const response = await this.executeRaw({ body: body, definitionId: definitionId, name: name, key: key, depth: depth, sourceEventUrl: sourceEventUrl }, initOverrides);
        return await response.value();
    }

    /**
     * Allows a user to resume/retry a failed workflow execution.
     */
    async executionsActionRaw(
        requestParameters: ExecutionsActionRequest,
        initOverrides?: RequestInit | runtime.InitOverrideFunction
    ): Promise<runtime.ApiResponse<DefinitionsDefinitionEntitiesResponse>> {
        if (requestParameters.actionName === null || requestParameters.actionName === undefined) {
            throw new runtime.RequiredError("actionName", "Required parameter requestParameters.actionName was null or undefined when calling executionsAction.");
        }

        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError("body", "Required parameter requestParameters.body was null or undefined when calling executionsAction.");
        }

        const queryParameters: any = {};

        if (requestParameters.actionName !== undefined) {
            queryParameters["action_name"] = requestParameters.actionName;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters["Content-Type"] = "application/json";

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["workflow:write"]);
        }

        const response = await this.request(
            {
                path: `/workflows/entities/execution-actions/v1`,
                method: "POST",
                headers: headerParameters,
                query: queryParameters,
                body: ClientActionRequestToJSON(requestParameters.body),
            },
            initOverrides
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => DefinitionsDefinitionEntitiesResponseFromJSON(jsonValue));
    }

    /**
     * Allows a user to resume/retry a failed workflow execution.
     */
    async executionsAction(
        actionName: ExecutionsActionActionNameEnum,
        body: ClientActionRequest,
        initOverrides?: RequestInit | runtime.InitOverrideFunction
    ): Promise<DefinitionsDefinitionEntitiesResponse> {
        const response = await this.executionsActionRaw({ actionName: actionName, body: body }, initOverrides);
        return await response.value();
    }

    /**
     * Get execution result of a given execution
     */
    async executionsResultRaw(requestParameters: ExecutionsResultRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ApiExecutionResultsResponse>> {
        if (requestParameters.ids === null || requestParameters.ids === undefined) {
            throw new runtime.RequiredError("ids", "Required parameter requestParameters.ids was null or undefined when calling executionsResult.");
        }

        const queryParameters: any = {};

        if (requestParameters.ids) {
            queryParameters["ids"] = requestParameters.ids.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["workflow:read"]);
        }

        const response = await this.request(
            {
                path: `/workflows/entities/execution-results/v1`,
                method: "GET",
                headers: headerParameters,
                query: queryParameters,
            },
            initOverrides
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => ApiExecutionResultsResponseFromJSON(jsonValue));
    }

    /**
     * Get execution result of a given execution
     */
    async executionsResult(ids: Array<string>, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ApiExecutionResultsResponse> {
        const response = await this.executionsResultRaw({ ids: ids }, initOverrides);
        return await response.value();
    }

    /**
     * Promotes a version of a system definition for a customer. The customer must already have been provisioned. This allows the caller to apply an updated template version to a specific cid and expects all parameters to be supplied. If the template supports multi-instance the customer scope definition ID must be supplied to determine which customer workflow should be updated.
     */
    async promoteSystemDefinitionRaw(
        requestParameters: PromoteSystemDefinitionRequest,
        initOverrides?: RequestInit | runtime.InitOverrideFunction
    ): Promise<runtime.ApiResponse<ClientSystemDefinitionCreateResponse>> {
        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError("body", "Required parameter requestParameters.body was null or undefined when calling promoteSystemDefinition.");
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters["Content-Type"] = "application/json";

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["workflow:write"]);
        }

        const response = await this.request(
            {
                path: `/workflows/system-definitions/promote/v1`,
                method: "POST",
                headers: headerParameters,
                query: queryParameters,
                body: ClientSystemDefinitionPromoteRequestToJSON(requestParameters.body),
            },
            initOverrides
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => ClientSystemDefinitionCreateResponseFromJSON(jsonValue));
    }

    /**
     * Promotes a version of a system definition for a customer. The customer must already have been provisioned. This allows the caller to apply an updated template version to a specific cid and expects all parameters to be supplied. If the template supports multi-instance the customer scope definition ID must be supplied to determine which customer workflow should be updated.
     */
    async promoteSystemDefinition(body: ClientSystemDefinitionPromoteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ClientSystemDefinitionCreateResponse> {
        const response = await this.promoteSystemDefinitionRaw({ body: body }, initOverrides);
        return await response.value();
    }

    /**
     * Provisions a system definition onto the target CID by using the template and provided parameters
     */
    async provisionSystemDefinitionRaw(
        requestParameters: ProvisionSystemDefinitionRequest,
        initOverrides?: RequestInit | runtime.InitOverrideFunction
    ): Promise<runtime.ApiResponse<ClientSystemDefinitionCreateResponse>> {
        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError("body", "Required parameter requestParameters.body was null or undefined when calling provisionSystemDefinition.");
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters["Content-Type"] = "application/json";

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["workflow:write"]);
        }

        const response = await this.request(
            {
                path: `/workflows/system-definitions/provision/v1`,
                method: "POST",
                headers: headerParameters,
                query: queryParameters,
                body: ClientSystemDefinitionProvisionRequestToJSON(requestParameters.body),
            },
            initOverrides
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => ClientSystemDefinitionCreateResponseFromJSON(jsonValue));
    }

    /**
     * Provisions a system definition onto the target CID by using the template and provided parameters
     */
    async provisionSystemDefinition(body: ClientSystemDefinitionProvisionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ClientSystemDefinitionCreateResponse> {
        const response = await this.provisionSystemDefinitionRaw({ body: body }, initOverrides);
        return await response.value();
    }
}

/**
 * @export
 */
export const ExecutionsActionActionNameEnum = {
    Resume: "resume",
} as const;
export type ExecutionsActionActionNameEnum = (typeof ExecutionsActionActionNameEnum)[keyof typeof ExecutionsActionActionNameEnum];
