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

import { exists, mapValues } from "../runtime";
import { DomainEntity, DomainEntityFromJSON, DomainEntityFromJSONTyped, DomainEntityToJSON } from "./DomainEntity";
import { DomainFile, DomainFileFromJSON, DomainFileFromJSONTyped, DomainFileToJSON } from "./DomainFile";
import { DomainImage, DomainImageFromJSON, DomainImageFromJSONTyped, DomainImageToJSON } from "./DomainImage";
import { DomainSimpleActor, DomainSimpleActorFromJSON, DomainSimpleActorFromJSONTyped, DomainSimpleActorToJSON } from "./DomainSimpleActor";

/**
 *
 * @export
 * @interface DomainNewsDocument
 */
export interface DomainNewsDocument {
    /**
     *
     * @type {boolean}
     * @memberof DomainNewsDocument
     */
    active?: boolean;
    /**
     *
     * @type {Array<DomainSimpleActor>}
     * @memberof DomainNewsDocument
     */
    actors: Array<DomainSimpleActor>;
    /**
     *
     * @type {Array<DomainFile>}
     * @memberof DomainNewsDocument
     */
    attachments?: Array<DomainFile>;
    /**
     *
     * @type {number}
     * @memberof DomainNewsDocument
     */
    createdDate: number;
    /**
     *
     * @type {string}
     * @memberof DomainNewsDocument
     */
    description?: string;
    /**
     *
     * @type {Array<DomainEntity>}
     * @memberof DomainNewsDocument
     */
    entitlements?: Array<DomainEntity>;
    /**
     *
     * @type {number}
     * @memberof DomainNewsDocument
     */
    id: number;
    /**
     *
     * @type {DomainImage}
     * @memberof DomainNewsDocument
     */
    image?: DomainImage;
    /**
     *
     * @type {number}
     * @memberof DomainNewsDocument
     */
    lastModifiedDate: number;
    /**
     *
     * @type {Array<DomainEntity>}
     * @memberof DomainNewsDocument
     */
    motivations: Array<DomainEntity>;
    /**
     *
     * @type {string}
     * @memberof DomainNewsDocument
     */
    name: string;
    /**
     *
     * @type {boolean}
     * @memberof DomainNewsDocument
     */
    notifyUsers?: boolean;
    /**
     *
     * @type {string}
     * @memberof DomainNewsDocument
     */
    richTextDescription?: string;
    /**
     *
     * @type {string}
     * @memberof DomainNewsDocument
     */
    shortDescription?: string;
    /**
     *
     * @type {string}
     * @memberof DomainNewsDocument
     */
    slug: string;
    /**
     *
     * @type {DomainEntity}
     * @memberof DomainNewsDocument
     */
    subType?: DomainEntity;
    /**
     *
     * @type {Array<DomainEntity>}
     * @memberof DomainNewsDocument
     */
    tags: Array<DomainEntity>;
    /**
     *
     * @type {Array<DomainEntity>}
     * @memberof DomainNewsDocument
     */
    targetCountries: Array<DomainEntity>;
    /**
     *
     * @type {Array<DomainEntity>}
     * @memberof DomainNewsDocument
     */
    targetIndustries: Array<DomainEntity>;
    /**
     *
     * @type {DomainImage}
     * @memberof DomainNewsDocument
     */
    thumbnail: DomainImage;
    /**
     *
     * @type {DomainEntity}
     * @memberof DomainNewsDocument
     */
    topic?: DomainEntity;
    /**
     *
     * @type {DomainEntity}
     * @memberof DomainNewsDocument
     */
    type?: DomainEntity;
    /**
     *
     * @type {string}
     * @memberof DomainNewsDocument
     */
    url?: string;
}

export function DomainNewsDocumentFromJSON(json: any): DomainNewsDocument {
    return DomainNewsDocumentFromJSONTyped(json, false);
}

export function DomainNewsDocumentFromJSONTyped(json: any, ignoreDiscriminator: boolean): DomainNewsDocument {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        active: !exists(json, "active") ? undefined : json["active"],
        actors: (json["actors"] as Array<any>).map(DomainSimpleActorFromJSON),
        attachments: !exists(json, "attachments") ? undefined : (json["attachments"] as Array<any>).map(DomainFileFromJSON),
        createdDate: json["created_date"],
        description: !exists(json, "description") ? undefined : json["description"],
        entitlements: !exists(json, "entitlements") ? undefined : (json["entitlements"] as Array<any>).map(DomainEntityFromJSON),
        id: json["id"],
        image: !exists(json, "image") ? undefined : DomainImageFromJSON(json["image"]),
        lastModifiedDate: json["last_modified_date"],
        motivations: (json["motivations"] as Array<any>).map(DomainEntityFromJSON),
        name: json["name"],
        notifyUsers: !exists(json, "notify_users") ? undefined : json["notify_users"],
        richTextDescription: !exists(json, "rich_text_description") ? undefined : json["rich_text_description"],
        shortDescription: !exists(json, "short_description") ? undefined : json["short_description"],
        slug: json["slug"],
        subType: !exists(json, "sub_type") ? undefined : DomainEntityFromJSON(json["sub_type"]),
        tags: (json["tags"] as Array<any>).map(DomainEntityFromJSON),
        targetCountries: (json["target_countries"] as Array<any>).map(DomainEntityFromJSON),
        targetIndustries: (json["target_industries"] as Array<any>).map(DomainEntityFromJSON),
        thumbnail: DomainImageFromJSON(json["thumbnail"]),
        topic: !exists(json, "topic") ? undefined : DomainEntityFromJSON(json["topic"]),
        type: !exists(json, "type") ? undefined : DomainEntityFromJSON(json["type"]),
        url: !exists(json, "url") ? undefined : json["url"],
    };
}

export function DomainNewsDocumentToJSON(value?: DomainNewsDocument | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        active: value.active,
        actors: (value.actors as Array<any>).map(DomainSimpleActorToJSON),
        attachments: value.attachments === undefined ? undefined : (value.attachments as Array<any>).map(DomainFileToJSON),
        created_date: value.createdDate,
        description: value.description,
        entitlements: value.entitlements === undefined ? undefined : (value.entitlements as Array<any>).map(DomainEntityToJSON),
        id: value.id,
        image: DomainImageToJSON(value.image),
        last_modified_date: value.lastModifiedDate,
        motivations: (value.motivations as Array<any>).map(DomainEntityToJSON),
        name: value.name,
        notify_users: value.notifyUsers,
        rich_text_description: value.richTextDescription,
        short_description: value.shortDescription,
        slug: value.slug,
        sub_type: DomainEntityToJSON(value.subType),
        tags: (value.tags as Array<any>).map(DomainEntityToJSON),
        target_countries: (value.targetCountries as Array<any>).map(DomainEntityToJSON),
        target_industries: (value.targetIndustries as Array<any>).map(DomainEntityToJSON),
        thumbnail: DomainImageToJSON(value.thumbnail),
        topic: DomainEntityToJSON(value.topic),
        type: DomainEntityToJSON(value.type),
        url: value.url,
    };
}
