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
import type { DomainAPIEvaluationLogicEntitiesResponseV1, MsaReplyMetaOnly } from "../models/index";
import { DomainAPIEvaluationLogicEntitiesResponseV1FromJSON, DomainAPIEvaluationLogicEntitiesResponseV1ToJSON, MsaReplyMetaOnlyFromJSON, MsaReplyMetaOnlyToJSON } from "../models/index";

export interface GetEvaluationLogicMixin0Request {
    ids: Array<string>;
}

/**
 *
 */
export class ConfigurationAssessmentEvaluationLogicApi extends runtime.BaseAPI {
    /**
     * Get details on evaluation logic items by providing one or more finding IDs.
     */
    async getEvaluationLogicMixin0Raw(
        requestParameters: GetEvaluationLogicMixin0Request,
        initOverrides?: RequestInit | runtime.InitOverrideFunction
    ): Promise<runtime.ApiResponse<DomainAPIEvaluationLogicEntitiesResponseV1>> {
        if (requestParameters.ids === null || requestParameters.ids === undefined) {
            throw new runtime.RequiredError("ids", "Required parameter requestParameters.ids was null or undefined when calling getEvaluationLogicMixin0.");
        }

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
                path: `/configuration-assessment/entities/evaluation-logic/v1`,
                method: "GET",
                headers: headerParameters,
                query: queryParameters,
            },
            initOverrides
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => DomainAPIEvaluationLogicEntitiesResponseV1FromJSON(jsonValue));
    }

    /**
     * Get details on evaluation logic items by providing one or more finding IDs.
     */
    async getEvaluationLogicMixin0(ids: Array<string>, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DomainAPIEvaluationLogicEntitiesResponseV1> {
        const response = await this.getEvaluationLogicMixin0Raw({ ids: ids }, initOverrides);
        return await response.value();
    }
}
