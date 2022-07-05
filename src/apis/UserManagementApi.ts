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
    DomainRoleIDs,
    DomainUpdateUserFields,
    DomainUserCreateRequest,
    DomainUserMetaDataResponse,
    DomainUserRoleIDsResponse,
    DomainUserRoleResponse,
    MsaEntitiesResponse,
    MsaQueryResponse,
    MsaReplyMetaOnly,
} from "../models";
import {
    DomainRoleIDsFromJSON,
    DomainRoleIDsToJSON,
    DomainUpdateUserFieldsFromJSON,
    DomainUpdateUserFieldsToJSON,
    DomainUserCreateRequestFromJSON,
    DomainUserCreateRequestToJSON,
    DomainUserMetaDataResponseFromJSON,
    DomainUserMetaDataResponseToJSON,
    DomainUserRoleIDsResponseFromJSON,
    DomainUserRoleIDsResponseToJSON,
    DomainUserRoleResponseFromJSON,
    DomainUserRoleResponseToJSON,
    MsaEntitiesResponseFromJSON,
    MsaEntitiesResponseToJSON,
    MsaQueryResponseFromJSON,
    MsaQueryResponseToJSON,
    MsaReplyMetaOnlyFromJSON,
    MsaReplyMetaOnlyToJSON,
} from "../models";

export interface CreateUserRequest {
    body: DomainUserCreateRequest;
}

export interface DeleteUserRequest {
    userUuid: string;
}

export interface GetRolesRequest {
    ids: Array<string>;
}

export interface GetUserRoleIdsRequest {
    userUuid: string;
}

export interface GrantUserRoleIdsRequest {
    userUuid: string;
    body: DomainRoleIDs;
}

export interface RetrieveUserRequest {
    ids: Array<string>;
}

export interface RetrieveUserUUIDRequest {
    uid: Array<string>;
}

export interface RevokeUserRoleIdsRequest {
    userUuid: string;
    ids: Array<string>;
}

export interface UpdateUserRequest {
    userUuid: string;
    body: DomainUpdateUserFields;
}

/**
 *
 */
export class UserManagementApi extends runtime.BaseAPI {
    /**
     * Create a new user. After creating a user, assign one or more roles with POST /user-roles/entities/user-roles/v1
     */
    async createUserRaw(requestParameters: CreateUserRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DomainUserMetaDataResponse>> {
        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError("body", "Required parameter requestParameters.body was null or undefined when calling createUser.");
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters["Content-Type"] = "application/json";

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["usermgmt:write"]);
        }

        const response = await this.request(
            {
                path: `/users/entities/users/v1`,
                method: "POST",
                headers: headerParameters,
                query: queryParameters,
                body: DomainUserCreateRequestToJSON(requestParameters.body),
            },
            initOverrides
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => DomainUserMetaDataResponseFromJSON(jsonValue));
    }

    /**
     * Create a new user. After creating a user, assign one or more roles with POST /user-roles/entities/user-roles/v1
     */
    async createUser(body: DomainUserCreateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DomainUserMetaDataResponse> {
        const response = await this.createUserRaw({ body: body }, initOverrides);
        return await response.value();
    }

    /**
     * Delete a user permanently
     */
    async deleteUserRaw(requestParameters: DeleteUserRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MsaReplyMetaOnly>> {
        if (requestParameters.userUuid === null || requestParameters.userUuid === undefined) {
            throw new runtime.RequiredError("userUuid", "Required parameter requestParameters.userUuid was null or undefined when calling deleteUser.");
        }

        const queryParameters: any = {};

        if (requestParameters.userUuid !== undefined) {
            queryParameters["user_uuid"] = requestParameters.userUuid;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["usermgmt:write"]);
        }

        const response = await this.request(
            {
                path: `/users/entities/users/v1`,
                method: "DELETE",
                headers: headerParameters,
                query: queryParameters,
            },
            initOverrides
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => MsaReplyMetaOnlyFromJSON(jsonValue));
    }

    /**
     * Delete a user permanently
     */
    async deleteUser(userUuid: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MsaReplyMetaOnly> {
        const response = await this.deleteUserRaw({ userUuid: userUuid }, initOverrides);
        return await response.value();
    }

    /**
     * Show role IDs for all roles available in your customer account. For more information on each role, provide the role ID to `/customer/entities/roles/v1`.
     */
    async getAvailableRoleIdsRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MsaQueryResponse>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["usermgmt:read"]);
        }

        const response = await this.request(
            {
                path: `/user-roles/queries/user-role-ids-by-cid/v1`,
                method: "GET",
                headers: headerParameters,
                query: queryParameters,
            },
            initOverrides
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => MsaQueryResponseFromJSON(jsonValue));
    }

    /**
     * Show role IDs for all roles available in your customer account. For more information on each role, provide the role ID to `/customer/entities/roles/v1`.
     */
    async getAvailableRoleIds(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MsaQueryResponse> {
        const response = await this.getAvailableRoleIdsRaw(initOverrides);
        return await response.value();
    }

    /**
     * Get info about a role
     */
    async getRolesRaw(requestParameters: GetRolesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DomainUserRoleResponse>> {
        if (requestParameters.ids === null || requestParameters.ids === undefined) {
            throw new runtime.RequiredError("ids", "Required parameter requestParameters.ids was null or undefined when calling getRoles.");
        }

        const queryParameters: any = {};

        if (requestParameters.ids) {
            queryParameters["ids"] = requestParameters.ids;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["usermgmt:read"]);
        }

        const response = await this.request(
            {
                path: `/user-roles/entities/user-roles/v1`,
                method: "GET",
                headers: headerParameters,
                query: queryParameters,
            },
            initOverrides
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => DomainUserRoleResponseFromJSON(jsonValue));
    }

    /**
     * Get info about a role
     */
    async getRoles(ids: Array<string>, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DomainUserRoleResponse> {
        const response = await this.getRolesRaw({ ids: ids }, initOverrides);
        return await response.value();
    }

    /**
     * Show role IDs of roles assigned to a user. For more information on each role, provide the role ID to `/customer/entities/roles/v1`.
     */
    async getUserRoleIdsRaw(requestParameters: GetUserRoleIdsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MsaQueryResponse>> {
        if (requestParameters.userUuid === null || requestParameters.userUuid === undefined) {
            throw new runtime.RequiredError("userUuid", "Required parameter requestParameters.userUuid was null or undefined when calling getUserRoleIds.");
        }

        const queryParameters: any = {};

        if (requestParameters.userUuid !== undefined) {
            queryParameters["user_uuid"] = requestParameters.userUuid;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["usermgmt:read"]);
        }

        const response = await this.request(
            {
                path: `/user-roles/queries/user-role-ids-by-user-uuid/v1`,
                method: "GET",
                headers: headerParameters,
                query: queryParameters,
            },
            initOverrides
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => MsaQueryResponseFromJSON(jsonValue));
    }

    /**
     * Show role IDs of roles assigned to a user. For more information on each role, provide the role ID to `/customer/entities/roles/v1`.
     */
    async getUserRoleIds(userUuid: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MsaQueryResponse> {
        const response = await this.getUserRoleIdsRaw({ userUuid: userUuid }, initOverrides);
        return await response.value();
    }

    /**
     * Assign one or more roles to a user
     */
    async grantUserRoleIdsRaw(requestParameters: GrantUserRoleIdsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DomainUserRoleIDsResponse>> {
        if (requestParameters.userUuid === null || requestParameters.userUuid === undefined) {
            throw new runtime.RequiredError("userUuid", "Required parameter requestParameters.userUuid was null or undefined when calling grantUserRoleIds.");
        }

        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError("body", "Required parameter requestParameters.body was null or undefined when calling grantUserRoleIds.");
        }

        const queryParameters: any = {};

        if (requestParameters.userUuid !== undefined) {
            queryParameters["user_uuid"] = requestParameters.userUuid;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters["Content-Type"] = "application/json";

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["usermgmt:write"]);
        }

        const response = await this.request(
            {
                path: `/user-roles/entities/user-roles/v1`,
                method: "POST",
                headers: headerParameters,
                query: queryParameters,
                body: DomainRoleIDsToJSON(requestParameters.body),
            },
            initOverrides
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => DomainUserRoleIDsResponseFromJSON(jsonValue));
    }

    /**
     * Assign one or more roles to a user
     */
    async grantUserRoleIds(userUuid: string, body: DomainRoleIDs, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DomainUserRoleIDsResponse> {
        const response = await this.grantUserRoleIdsRaw({ userUuid: userUuid, body: body }, initOverrides);
        return await response.value();
    }

    /**
     * List the usernames (usually an email address) for all users in your customer account
     */
    async retrieveEmailsByCIDRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MsaQueryResponse>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["usermgmt:read"]);
        }

        const response = await this.request(
            {
                path: `/users/queries/emails-by-cid/v1`,
                method: "GET",
                headers: headerParameters,
                query: queryParameters,
            },
            initOverrides
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => MsaQueryResponseFromJSON(jsonValue));
    }

    /**
     * List the usernames (usually an email address) for all users in your customer account
     */
    async retrieveEmailsByCID(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MsaQueryResponse> {
        const response = await this.retrieveEmailsByCIDRaw(initOverrides);
        return await response.value();
    }

    /**
     * Get info about a user
     */
    async retrieveUserRaw(requestParameters: RetrieveUserRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DomainUserMetaDataResponse>> {
        if (requestParameters.ids === null || requestParameters.ids === undefined) {
            throw new runtime.RequiredError("ids", "Required parameter requestParameters.ids was null or undefined when calling retrieveUser.");
        }

        const queryParameters: any = {};

        if (requestParameters.ids) {
            queryParameters["ids"] = requestParameters.ids;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["usermgmt:read"]);
        }

        const response = await this.request(
            {
                path: `/users/entities/users/v1`,
                method: "GET",
                headers: headerParameters,
                query: queryParameters,
            },
            initOverrides
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => DomainUserMetaDataResponseFromJSON(jsonValue));
    }

    /**
     * Get info about a user
     */
    async retrieveUser(ids: Array<string>, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DomainUserMetaDataResponse> {
        const response = await this.retrieveUserRaw({ ids: ids }, initOverrides);
        return await response.value();
    }

    /**
     * Get a user\'s ID by providing a username (usually an email address)
     */
    async retrieveUserUUIDRaw(requestParameters: RetrieveUserUUIDRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MsaQueryResponse>> {
        if (requestParameters.uid === null || requestParameters.uid === undefined) {
            throw new runtime.RequiredError("uid", "Required parameter requestParameters.uid was null or undefined when calling retrieveUserUUID.");
        }

        const queryParameters: any = {};

        if (requestParameters.uid) {
            queryParameters["uid"] = requestParameters.uid;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["usermgmt:read"]);
        }

        const response = await this.request(
            {
                path: `/users/queries/user-uuids-by-email/v1`,
                method: "GET",
                headers: headerParameters,
                query: queryParameters,
            },
            initOverrides
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => MsaQueryResponseFromJSON(jsonValue));
    }

    /**
     * Get a user\'s ID by providing a username (usually an email address)
     */
    async retrieveUserUUID(uid: Array<string>, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MsaQueryResponse> {
        const response = await this.retrieveUserUUIDRaw({ uid: uid }, initOverrides);
        return await response.value();
    }

    /**
     * List user IDs for all users in your customer account. For more information on each user, provide the user ID to `/users/entities/user/v1`.
     */
    async retrieveUserUUIDsByCIDRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MsaQueryResponse>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["usermgmt:read"]);
        }

        const response = await this.request(
            {
                path: `/users/queries/user-uuids-by-cid/v1`,
                method: "GET",
                headers: headerParameters,
                query: queryParameters,
            },
            initOverrides
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => MsaQueryResponseFromJSON(jsonValue));
    }

    /**
     * List user IDs for all users in your customer account. For more information on each user, provide the user ID to `/users/entities/user/v1`.
     */
    async retrieveUserUUIDsByCID(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MsaQueryResponse> {
        const response = await this.retrieveUserUUIDsByCIDRaw(initOverrides);
        return await response.value();
    }

    /**
     * Revoke one or more roles from a user
     */
    async revokeUserRoleIdsRaw(requestParameters: RevokeUserRoleIdsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DomainUserRoleIDsResponse>> {
        if (requestParameters.userUuid === null || requestParameters.userUuid === undefined) {
            throw new runtime.RequiredError("userUuid", "Required parameter requestParameters.userUuid was null or undefined when calling revokeUserRoleIds.");
        }

        if (requestParameters.ids === null || requestParameters.ids === undefined) {
            throw new runtime.RequiredError("ids", "Required parameter requestParameters.ids was null or undefined when calling revokeUserRoleIds.");
        }

        const queryParameters: any = {};

        if (requestParameters.userUuid !== undefined) {
            queryParameters["user_uuid"] = requestParameters.userUuid;
        }

        if (requestParameters.ids) {
            queryParameters["ids"] = requestParameters.ids;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["usermgmt:write"]);
        }

        const response = await this.request(
            {
                path: `/user-roles/entities/user-roles/v1`,
                method: "DELETE",
                headers: headerParameters,
                query: queryParameters,
            },
            initOverrides
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => DomainUserRoleIDsResponseFromJSON(jsonValue));
    }

    /**
     * Revoke one or more roles from a user
     */
    async revokeUserRoleIds(userUuid: string, ids: Array<string>, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DomainUserRoleIDsResponse> {
        const response = await this.revokeUserRoleIdsRaw({ userUuid: userUuid, ids: ids }, initOverrides);
        return await response.value();
    }

    /**
     * Modify an existing user\'s first or last name
     */
    async updateUserRaw(requestParameters: UpdateUserRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DomainUserMetaDataResponse>> {
        if (requestParameters.userUuid === null || requestParameters.userUuid === undefined) {
            throw new runtime.RequiredError("userUuid", "Required parameter requestParameters.userUuid was null or undefined when calling updateUser.");
        }

        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError("body", "Required parameter requestParameters.body was null or undefined when calling updateUser.");
        }

        const queryParameters: any = {};

        if (requestParameters.userUuid !== undefined) {
            queryParameters["user_uuid"] = requestParameters.userUuid;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters["Content-Type"] = "application/json";

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["usermgmt:write"]);
        }

        const response = await this.request(
            {
                path: `/users/entities/users/v1`,
                method: "PATCH",
                headers: headerParameters,
                query: queryParameters,
                body: DomainUpdateUserFieldsToJSON(requestParameters.body),
            },
            initOverrides
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => DomainUserMetaDataResponseFromJSON(jsonValue));
    }

    /**
     * Modify an existing user\'s first or last name
     */
    async updateUser(userUuid: string, body: DomainUpdateUserFields, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DomainUserMetaDataResponse> {
        const response = await this.updateUserRaw({ userUuid: userUuid, body: body }, initOverrides);
        return await response.value();
    }
}
