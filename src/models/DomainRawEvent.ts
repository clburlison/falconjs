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
import type { DomainEventMetadata } from "./DomainEventMetadata";
import { DomainEventMetadataFromJSON, DomainEventMetadataFromJSONTyped, DomainEventMetadataToJSON } from "./DomainEventMetadata";

/**
 *
 * @export
 * @interface DomainRawEvent
 */
export interface DomainRawEvent {
    /**
     *
     * @type {string}
     * @memberof DomainRawEvent
     */
    cID: string;
    /**
     *
     * @type {string}
     * @memberof DomainRawEvent
     */
    eventName: string;
    /**
     *
     * @type {{ [key: string]: string; }}
     * @memberof DomainRawEvent
     */
    fields: { [key: string]: string };
    /**
     *
     * @type {string}
     * @memberof DomainRawEvent
     */
    iD: string;
    /**
     *
     * @type {object}
     * @memberof DomainRawEvent
     */
    internalMetadata: object;
    /**
     *
     * @type {string}
     * @memberof DomainRawEvent
     */
    localID: string;
    /**
     *
     * @type {DomainEventMetadata}
     * @memberof DomainRawEvent
     */
    metadata: DomainEventMetadata;
    /**
     *
     * @type {Array<{ [key: string]: string; }>}
     * @memberof DomainRawEvent
     */
    properties: Array<{ [key: string]: string }>;
    /**
     *
     * @type {string}
     * @memberof DomainRawEvent
     */
    rawString: string;
    /**
     *
     * @type {Date}
     * @memberof DomainRawEvent
     */
    timestamp: Date;
    /**
     *
     * @type {string}
     * @memberof DomainRawEvent
     */
    traceID: string;
    /**
     *
     * @type {string}
     * @memberof DomainRawEvent
     */
    type: string;
    /**
     *
     * @type {DomainRawEvent}
     * @memberof DomainRawEvent
     */
    sourceEvent: DomainRawEvent;
}

/**
 * Check if a given object implements the DomainRawEvent interface.
 */
export function instanceOfDomainRawEvent(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "cID" in value;
    isInstance = isInstance && "eventName" in value;
    isInstance = isInstance && "fields" in value;
    isInstance = isInstance && "iD" in value;
    isInstance = isInstance && "internalMetadata" in value;
    isInstance = isInstance && "localID" in value;
    isInstance = isInstance && "metadata" in value;
    isInstance = isInstance && "properties" in value;
    isInstance = isInstance && "rawString" in value;
    isInstance = isInstance && "timestamp" in value;
    isInstance = isInstance && "traceID" in value;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "sourceEvent" in value;

    return isInstance;
}

export function DomainRawEventFromJSON(json: any): DomainRawEvent {
    return DomainRawEventFromJSONTyped(json, false);
}

export function DomainRawEventFromJSONTyped(json: any, ignoreDiscriminator: boolean): DomainRawEvent {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        cID: json["CID"],
        eventName: json["EventName"],
        fields: json["Fields"],
        iD: json["ID"],
        internalMetadata: json["InternalMetadata"],
        localID: json["LocalID"],
        metadata: DomainEventMetadataFromJSON(json["Metadata"]),
        properties: json["Properties"],
        rawString: json["RawString"],
        timestamp: new Date(json["Timestamp"]),
        traceID: json["TraceID"],
        type: json["Type"],
        sourceEvent: DomainRawEventFromJSON(json["sourceEvent"]),
    };
}

export function DomainRawEventToJSON(value?: DomainRawEvent | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        CID: value.cID,
        EventName: value.eventName,
        Fields: value.fields,
        ID: value.iD,
        InternalMetadata: value.internalMetadata,
        LocalID: value.localID,
        Metadata: DomainEventMetadataToJSON(value.metadata),
        Properties: value.properties,
        RawString: value.rawString,
        Timestamp: value.timestamp.toISOString(),
        TraceID: value.traceID,
        Type: value.type,
        sourceEvent: DomainRawEventToJSON(value.sourceEvent),
    };
}