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
import type { ClientField } from "./ClientField";
import { ClientFieldFromJSON, ClientFieldFromJSONTyped, ClientFieldToJSON } from "./ClientField";
import type { ClientJobStatus } from "./ClientJobStatus";
import { ClientJobStatusFromJSON, ClientJobStatusFromJSONTyped, ClientJobStatusToJSON } from "./ClientJobStatus";
import type { ClientQueryResponseSchemasV1 } from "./ClientQueryResponseSchemasV1";
import { ClientQueryResponseSchemasV1FromJSON, ClientQueryResponseSchemasV1FromJSONTyped, ClientQueryResponseSchemasV1ToJSON } from "./ClientQueryResponseSchemasV1";
import type { ClientQueryResultMetadata } from "./ClientQueryResultMetadata";
import { ClientQueryResultMetadataFromJSON, ClientQueryResultMetadataFromJSONTyped, ClientQueryResultMetadataToJSON } from "./ClientQueryResultMetadata";

/**
 *
 * @export
 * @interface ApidomainQueryResponseV1
 */
export interface ApidomainQueryResponseV1 {
    /**
     *
     * @type {number}
     * @memberof ApidomainQueryResponseV1
     */
    eventCount: number;
    /**
     *
     * @type {Array<object>}
     * @memberof ApidomainQueryResponseV1
     */
    events: Array<object>;
    /**
     *
     * @type {Array<ClientField>}
     * @memberof ApidomainQueryResponseV1
     */
    fields?: Array<ClientField>;
    /**
     *
     * @type {ClientJobStatus}
     * @memberof ApidomainQueryResponseV1
     */
    jobStatus?: ClientJobStatus;
    /**
     *
     * @type {ClientQueryResultMetadata}
     * @memberof ApidomainQueryResponseV1
     */
    metaData?: ClientQueryResultMetadata;
    /**
     *
     * @type {ClientQueryResponseSchemasV1}
     * @memberof ApidomainQueryResponseV1
     */
    schemas?: ClientQueryResponseSchemasV1;
}

/**
 * Check if a given object implements the ApidomainQueryResponseV1 interface.
 */
export function instanceOfApidomainQueryResponseV1(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "eventCount" in value;
    isInstance = isInstance && "events" in value;

    return isInstance;
}

export function ApidomainQueryResponseV1FromJSON(json: any): ApidomainQueryResponseV1 {
    return ApidomainQueryResponseV1FromJSONTyped(json, false);
}

export function ApidomainQueryResponseV1FromJSONTyped(json: any, ignoreDiscriminator: boolean): ApidomainQueryResponseV1 {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        eventCount: json["event_count"],
        events: json["events"],
        fields: !exists(json, "fields") ? undefined : (json["fields"] as Array<any>).map(ClientFieldFromJSON),
        jobStatus: !exists(json, "job_status") ? undefined : ClientJobStatusFromJSON(json["job_status"]),
        metaData: !exists(json, "meta_data") ? undefined : ClientQueryResultMetadataFromJSON(json["meta_data"]),
        schemas: !exists(json, "schemas") ? undefined : ClientQueryResponseSchemasV1FromJSON(json["schemas"]),
    };
}

export function ApidomainQueryResponseV1ToJSON(value?: ApidomainQueryResponseV1 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        event_count: value.eventCount,
        events: value.events,
        fields: value.fields === undefined ? undefined : (value.fields as Array<any>).map(ClientFieldToJSON),
        job_status: ClientJobStatusToJSON(value.jobStatus),
        meta_data: ClientQueryResultMetadataToJSON(value.metaData),
        schemas: ClientQueryResponseSchemasV1ToJSON(value.schemas),
    };
}
