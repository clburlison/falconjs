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
import type { DomainRawEvent } from "./DomainRawEvent";
import { DomainRawEventFromJSON, DomainRawEventFromJSONTyped, DomainRawEventToJSON } from "./DomainRawEvent";

/**
 *
 * @export
 * @interface DomainEvent
 */
export interface DomainEvent {
    /**
     *
     * @type {{ [key: string]: string; }}
     * @memberof DomainEvent
     */
    attributes: { [key: string]: string };
    /**
     *
     * @type {string}
     * @memberof DomainEvent
     */
    cID: string;
    /**
     *
     * @type {string}
     * @memberof DomainEvent
     */
    dataDomain: string;
    /**
     *
     * @type {number}
     * @memberof DomainEvent
     */
    eventID: number;
    /**
     *
     * @type {string}
     * @memberof DomainEvent
     */
    eventName: string;
    /**
     *
     * @type {object}
     * @memberof DomainEvent
     */
    internalMetadata: object;
    /**
     *
     * @type {string}
     * @memberof DomainEvent
     */
    localID: string;
    /**
     *
     * @type {DomainEventMetadata}
     * @memberof DomainEvent
     */
    metadata: DomainEventMetadata;
    /**
     *
     * @type {Array<string>}
     * @memberof DomainEvent
     */
    parentIncidentIDs: Array<string>;
    /**
     *
     * @type {Array<string>}
     * @memberof DomainEvent
     */
    parentIndicatorIDs: Array<string>;
    /**
     *
     * @type {string}
     * @memberof DomainEvent
     */
    product: string;
    /**
     *
     * @type {string}
     * @memberof DomainEvent
     */
    source: string;
    /**
     *
     * @type {string}
     * @memberof DomainEvent
     */
    sourceVertexID: string;
    /**
     *
     * @type {Date}
     * @memberof DomainEvent
     */
    timestamp: Date;
    /**
     *
     * @type {string}
     * @memberof DomainEvent
     */
    vendor: string;
    /**
     *
     * @type {string}
     * @memberof DomainEvent
     */
    xDRDetectionID: string;
    /**
     *
     * @type {string}
     * @memberof DomainEvent
     */
    xDREventID: string;
    /**
     *
     * @type {string}
     * @memberof DomainEvent
     */
    xDRIndicatorID: string;
    /**
     *
     * @type {DomainRawEvent}
     * @memberof DomainEvent
     */
    sourceEvent: DomainRawEvent;
}

/**
 * Check if a given object implements the DomainEvent interface.
 */
export function instanceOfDomainEvent(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "attributes" in value;
    isInstance = isInstance && "cID" in value;
    isInstance = isInstance && "dataDomain" in value;
    isInstance = isInstance && "eventID" in value;
    isInstance = isInstance && "eventName" in value;
    isInstance = isInstance && "internalMetadata" in value;
    isInstance = isInstance && "localID" in value;
    isInstance = isInstance && "metadata" in value;
    isInstance = isInstance && "parentIncidentIDs" in value;
    isInstance = isInstance && "parentIndicatorIDs" in value;
    isInstance = isInstance && "product" in value;
    isInstance = isInstance && "source" in value;
    isInstance = isInstance && "sourceVertexID" in value;
    isInstance = isInstance && "timestamp" in value;
    isInstance = isInstance && "vendor" in value;
    isInstance = isInstance && "xDRDetectionID" in value;
    isInstance = isInstance && "xDREventID" in value;
    isInstance = isInstance && "xDRIndicatorID" in value;
    isInstance = isInstance && "sourceEvent" in value;

    return isInstance;
}

export function DomainEventFromJSON(json: any): DomainEvent {
    return DomainEventFromJSONTyped(json, false);
}

export function DomainEventFromJSONTyped(json: any, ignoreDiscriminator: boolean): DomainEvent {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        attributes: json["Attributes"],
        cID: json["CID"],
        dataDomain: json["DataDomain"],
        eventID: json["EventID"],
        eventName: json["EventName"],
        internalMetadata: json["InternalMetadata"],
        localID: json["LocalID"],
        metadata: DomainEventMetadataFromJSON(json["Metadata"]),
        parentIncidentIDs: json["ParentIncidentIDs"],
        parentIndicatorIDs: json["ParentIndicatorIDs"],
        product: json["Product"],
        source: json["Source"],
        sourceVertexID: json["SourceVertexID"],
        timestamp: new Date(json["Timestamp"]),
        vendor: json["Vendor"],
        xDRDetectionID: json["XDRDetectionID"],
        xDREventID: json["XDREventID"],
        xDRIndicatorID: json["XDRIndicatorID"],
        sourceEvent: DomainRawEventFromJSON(json["sourceEvent"]),
    };
}

export function DomainEventToJSON(value?: DomainEvent | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        Attributes: value.attributes,
        CID: value.cID,
        DataDomain: value.dataDomain,
        EventID: value.eventID,
        EventName: value.eventName,
        InternalMetadata: value.internalMetadata,
        LocalID: value.localID,
        Metadata: DomainEventMetadataToJSON(value.metadata),
        ParentIncidentIDs: value.parentIncidentIDs,
        ParentIndicatorIDs: value.parentIndicatorIDs,
        Product: value.product,
        Source: value.source,
        SourceVertexID: value.sourceVertexID,
        Timestamp: value.timestamp.toISOString(),
        Vendor: value.vendor,
        XDRDetectionID: value.xDRDetectionID,
        XDREventID: value.xDREventID,
        XDRIndicatorID: value.xDRIndicatorID,
        sourceEvent: DomainRawEventToJSON(value.sourceEvent),
    };
}
