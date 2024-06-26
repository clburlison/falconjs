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
import type { DomainActorEntity } from "./DomainActorEntity";
import { DomainActorEntityFromJSON, DomainActorEntityFromJSONTyped, DomainActorEntityToJSON } from "./DomainActorEntity";
import type { DomainActorNewsDocument } from "./DomainActorNewsDocument";
import { DomainActorNewsDocumentFromJSON, DomainActorNewsDocumentFromJSONTyped, DomainActorNewsDocumentToJSON } from "./DomainActorNewsDocument";
import type { DomainECrimeKillChain } from "./DomainECrimeKillChain";
import { DomainECrimeKillChainFromJSON, DomainECrimeKillChainFromJSONTyped, DomainECrimeKillChainToJSON } from "./DomainECrimeKillChain";
import type { DomainEntity } from "./DomainEntity";
import { DomainEntityFromJSON, DomainEntityFromJSONTyped, DomainEntityToJSON } from "./DomainEntity";
import type { DomainImage } from "./DomainImage";
import { DomainImageFromJSON, DomainImageFromJSONTyped, DomainImageToJSON } from "./DomainImage";
import type { DomainKillChain } from "./DomainKillChain";
import { DomainKillChainFromJSON, DomainKillChainFromJSONTyped, DomainKillChainToJSON } from "./DomainKillChain";
import type { DomainThreatEntity } from "./DomainThreatEntity";
import { DomainThreatEntityFromJSON, DomainThreatEntityFromJSONTyped, DomainThreatEntityToJSON } from "./DomainThreatEntity";

/**
 * JSON definition of an Actor, also known as Adversary
 * @export
 * @interface DomainActorDocument
 */
export interface DomainActorDocument {
    /**
     * Boolean field marking if actor is active
     * @type {boolean}
     * @memberof DomainActorDocument
     */
    active: boolean;
    /**
     * Actor type, one of: targeted, ecrime
     * @type {string}
     * @memberof DomainActorDocument
     */
    actorType?: string;
    /**
     * actor's capabilities, some examples: RAT,Ransomware,Spearphishing,Downloader,Backdoor,InformationStealer,exploit,CredentialHarvesting,dropper,DenialOfService,Loader,Phishing
     * @type {Array<DomainEntity>}
     * @memberof DomainActorDocument
     */
    capabilities: Array<DomainEntity>;
    /**
     *
     * @type {DomainEntity}
     * @memberof DomainActorDocument
     */
    capability?: DomainEntity;
    /**
     * Actor's document creation date when it was added to the Falcon portal in unix timestamp format
     * @type {number}
     * @memberof DomainActorDocument
     */
    createdDate: number;
    /**
     * Actor's text description, partially containing structured data from other fields
     * @type {string}
     * @memberof DomainActorDocument
     */
    description?: string;
    /**
     *
     * @type {number}
     * @memberof DomainActorDocument
     */
    descriptionLength?: number;
    /**
     *
     * @type {Array<DomainThreatEntity>}
     * @memberof DomainActorDocument
     */
    developsThreats?: Array<DomainThreatEntity>;
    /**
     *
     * @type {number}
     * @memberof DomainActorDocument
     */
    developsThreatsCount?: number;
    /**
     *
     * @type {DomainECrimeKillChain}
     * @memberof DomainActorDocument
     */
    ecrimeKillChain?: DomainECrimeKillChain;
    /**
     * Field used to filter user's access to actor documents
     * @type {Array<DomainEntity>}
     * @memberof DomainActorDocument
     */
    entitlements?: Array<DomainEntity>;
    /**
     * Actor's first activity observed date in unix timestamp format
     * @type {number}
     * @memberof DomainActorDocument
     */
    firstActivityDate: number;
    /**
     *
     * @type {DomainEntity}
     * @memberof DomainActorDocument
     */
    group?: DomainEntity;
    /**
     *
     * @type {Array<DomainActorEntity>}
     * @memberof DomainActorDocument
     */
    hasSubgroup?: Array<DomainActorEntity>;
    /**
     *
     * @type {number}
     * @memberof DomainActorDocument
     */
    hasSubgroupActorsCount?: number;
    /**
     *
     * @type {Array<DomainActorEntity>}
     * @memberof DomainActorDocument
     */
    hasSuccessor?: Array<DomainActorEntity>;
    /**
     *
     * @type {number}
     * @memberof DomainActorDocument
     */
    hasSuccessorActorsCount?: number;
    /**
     * Numerical ID for the Actor
     * @type {number}
     * @memberof DomainActorDocument
     */
    id: number;
    /**
     *
     * @type {DomainImage}
     * @memberof DomainActorDocument
     */
    image?: DomainImage;
    /**
     *
     * @type {Array<DomainActorNewsDocument>}
     * @memberof DomainActorDocument
     */
    inReports?: Array<DomainActorNewsDocument>;
    /**
     *
     * @type {number}
     * @memberof DomainActorDocument
     */
    inReportsCount?: number;
    /**
     *
     * @type {Array<DomainActorEntity>}
     * @memberof DomainActorDocument
     */
    isSubgroupOf?: Array<DomainActorEntity>;
    /**
     *
     * @type {number}
     * @memberof DomainActorDocument
     */
    isSubgroupOfActorsCount?: number;
    /**
     *
     * @type {Array<DomainActorEntity>}
     * @memberof DomainActorDocument
     */
    isSuccessorOf?: Array<DomainActorEntity>;
    /**
     *
     * @type {number}
     * @memberof DomainActorDocument
     */
    isSuccessorOfActorsCount?: number;
    /**
     *
     * @type {Array<DomainActorEntity>}
     * @memberof DomainActorDocument
     */
    isSupportedBy?: Array<DomainActorEntity>;
    /**
     *
     * @type {number}
     * @memberof DomainActorDocument
     */
    isSupportedByActorsCount?: number;
    /**
     *
     * @type {DomainKillChain}
     * @memberof DomainActorDocument
     */
    killChain?: DomainKillChain;
    /**
     * Alternative names and community identifiers of an actor
     * @type {string}
     * @memberof DomainActorDocument
     */
    knownAs: string;
    /**
     * Actor's last (most recent) activity observed date in unix timestamp format
     * @type {number}
     * @memberof DomainActorDocument
     */
    lastActivityDate: number;
    /**
     * Actor's document last modified date in unix timestamp format
     * @type {number}
     * @memberof DomainActorDocument
     */
    lastModifiedDate: number;
    /**
     * Actor's activity motivation, one of: State-Sponsored, Criminal, Hacktivism
     * @type {Array<DomainEntity>}
     * @memberof DomainActorDocument
     */
    motivations: Array<DomainEntity>;
    /**
     * Actor's name, composed of 2 words
     * @type {string}
     * @memberof DomainActorDocument
     */
    name?: string;
    /**
     * internal field
     * @type {boolean}
     * @memberof DomainActorDocument
     */
    notifyUsers: boolean;
    /**
     * Actor's activity objectives, one of: IntelligenceGathering, FinancialGain, IntellectualPropertyTheft, defacement, Destruction, DenialOfService
     * @type {Array<DomainEntity>}
     * @memberof DomainActorDocument
     */
    objectives: Array<DomainEntity>;
    /**
     * represents origin of actor's activity and/or members, some examples: China,Russian Federation,Eastern Europe,Iran,East Asia, South Asia
     * @type {Array<DomainEntity>}
     * @memberof DomainActorDocument
     */
    origins: Array<DomainEntity>;
    /**
     * Recent CrowdStrike's finished intelligence alerting date in unix timestamp format
     * @type {number}
     * @memberof DomainActorDocument
     */
    recentAlerting?: number;
    /**
     *
     * @type {DomainEntity}
     * @memberof DomainActorDocument
     */
    region?: DomainEntity;
    /**
     * Rich text version of the description field
     * @type {string}
     * @memberof DomainActorDocument
     */
    richTextDescription?: string;
    /**
     *
     * @type {Array<DomainThreatEntity>}
     * @memberof DomainActorDocument
     */
    sellsThreats?: Array<DomainThreatEntity>;
    /**
     *
     * @type {number}
     * @memberof DomainActorDocument
     */
    sellsThreatsCount?: number;
    /**
     * Short version of the description field
     * @type {string}
     * @memberof DomainActorDocument
     */
    shortDescription: string;
    /**
     * Name in url friendly format, lowercased and spaces replaced with dash
     * @type {string}
     * @memberof DomainActorDocument
     */
    slug?: string;
    /**
     * Status of an actor, one of: Active, Inactive, Retired
     * @type {string}
     * @memberof DomainActorDocument
     */
    status: string;
    /**
     *
     * @type {Array<DomainActorEntity>}
     * @memberof DomainActorDocument
     */
    supports?: Array<DomainActorEntity>;
    /**
     *
     * @type {number}
     * @memberof DomainActorDocument
     */
    supportsActorsCount?: number;
    /**
     * Target countries of actor's activity and attacks, slug value is a 2 characters code for the country value, some examples: United States,United Kingdom,Germany,India,Japan,France,Australia,Canada,China
     * @type {Array<DomainEntity>}
     * @memberof DomainActorDocument
     */
    targetCountries: Array<DomainEntity>;
    /**
     * Target economical industries of actor's activity and attacks. List of available values: Government, Financial Services, Technology, Telecommunications, Healthcare, Energy, Academic, Media, Aerospace, NGO, Manufacturing, Industrials and Engineering, Retail, Hospitality, Consulting and Professional Services, Opportunistic, Aviation, Defense, Transportation, Oil and Gas, Legal, Pharmaceutical, Logistics, Military, Automotive, Food and Beverage, Consumer Goods, Real Estate, Insurance, Agriculture, Chemicals, Utilities, Maritime, Extractive, Travel, Dissident, Cryptocurrency, Entertainment, National Government, Law Enforcement, Think Tanks, Local Government, Sports Organizations, Computer Gaming, Biomedical, Nonprofit, Financial Management & Hedge Funds, Political Parties, Architectural and Engineering, Emergency Services, Social Media, International Government, Nuclear, Research Entities, Vocational and Higher-Level Education, eCommerce
     * @type {Array<DomainEntity>}
     * @memberof DomainActorDocument
     */
    targetIndustries: Array<DomainEntity>;
    /**
     * Target geographic regions of actor's activity and attacks. List of available values: North America, Western Europe, Southeast Asia, Middle East, Eastern Europe, South Asia, South America, Oceania, East Asia, Central Africa, Northern Europe, Southern Europe, North Africa, Southern Africa, Central America, Central Asia, East Africa, West Africa, Caribbean
     * @type {Array<DomainEntity>}
     * @memberof DomainActorDocument
     */
    targetRegions: Array<DomainEntity>;
    /**
     *
     * @type {DomainImage}
     * @memberof DomainActorDocument
     */
    thumbnail?: DomainImage;
    /**
     * URL at which actor profile can be accessed
     * @type {string}
     * @memberof DomainActorDocument
     */
    url?: string;
    /**
     *
     * @type {number}
     * @memberof DomainActorDocument
     */
    usesIndicatorsCount?: number;
    /**
     *
     * @type {number}
     * @memberof DomainActorDocument
     */
    usesMitreAttacksCount?: number;
    /**
     *
     * @type {number}
     * @memberof DomainActorDocument
     */
    usesMitreTacticsCount?: number;
    /**
     *
     * @type {number}
     * @memberof DomainActorDocument
     */
    usesMitreTechniquesCount?: number;
    /**
     *
     * @type {Array<DomainThreatEntity>}
     * @memberof DomainActorDocument
     */
    usesThreats?: Array<DomainThreatEntity>;
    /**
     *
     * @type {number}
     * @memberof DomainActorDocument
     */
    usesThreatsCount?: number;
    /**
     * Comma separated values of vulnerabilities by CVE codes that are exploited by actor
     * @type {Array<string>}
     * @memberof DomainActorDocument
     */
    usesVulnerabilities?: Array<string>;
    /**
     *
     * @type {number}
     * @memberof DomainActorDocument
     */
    vulnerabilitiesCount?: number;
}

/**
 * Check if a given object implements the DomainActorDocument interface.
 */
export function instanceOfDomainActorDocument(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "active" in value;
    isInstance = isInstance && "capabilities" in value;
    isInstance = isInstance && "createdDate" in value;
    isInstance = isInstance && "firstActivityDate" in value;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "knownAs" in value;
    isInstance = isInstance && "lastActivityDate" in value;
    isInstance = isInstance && "lastModifiedDate" in value;
    isInstance = isInstance && "motivations" in value;
    isInstance = isInstance && "notifyUsers" in value;
    isInstance = isInstance && "objectives" in value;
    isInstance = isInstance && "origins" in value;
    isInstance = isInstance && "shortDescription" in value;
    isInstance = isInstance && "status" in value;
    isInstance = isInstance && "targetCountries" in value;
    isInstance = isInstance && "targetIndustries" in value;
    isInstance = isInstance && "targetRegions" in value;

    return isInstance;
}

export function DomainActorDocumentFromJSON(json: any): DomainActorDocument {
    return DomainActorDocumentFromJSONTyped(json, false);
}

export function DomainActorDocumentFromJSONTyped(json: any, ignoreDiscriminator: boolean): DomainActorDocument {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        active: json["active"],
        actorType: !exists(json, "actor_type") ? undefined : json["actor_type"],
        capabilities: (json["capabilities"] as Array<any>).map(DomainEntityFromJSON),
        capability: !exists(json, "capability") ? undefined : DomainEntityFromJSON(json["capability"]),
        createdDate: json["created_date"],
        description: !exists(json, "description") ? undefined : json["description"],
        descriptionLength: !exists(json, "description_length") ? undefined : json["description_length"],
        developsThreats: !exists(json, "develops_threats") ? undefined : (json["develops_threats"] as Array<any>).map(DomainThreatEntityFromJSON),
        developsThreatsCount: !exists(json, "develops_threats_count") ? undefined : json["develops_threats_count"],
        ecrimeKillChain: !exists(json, "ecrime_kill_chain") ? undefined : DomainECrimeKillChainFromJSON(json["ecrime_kill_chain"]),
        entitlements: !exists(json, "entitlements") ? undefined : (json["entitlements"] as Array<any>).map(DomainEntityFromJSON),
        firstActivityDate: json["first_activity_date"],
        group: !exists(json, "group") ? undefined : DomainEntityFromJSON(json["group"]),
        hasSubgroup: !exists(json, "has_subgroup") ? undefined : (json["has_subgroup"] as Array<any>).map(DomainActorEntityFromJSON),
        hasSubgroupActorsCount: !exists(json, "has_subgroup_actors_count") ? undefined : json["has_subgroup_actors_count"],
        hasSuccessor: !exists(json, "has_successor") ? undefined : (json["has_successor"] as Array<any>).map(DomainActorEntityFromJSON),
        hasSuccessorActorsCount: !exists(json, "has_successor_actors_count") ? undefined : json["has_successor_actors_count"],
        id: json["id"],
        image: !exists(json, "image") ? undefined : DomainImageFromJSON(json["image"]),
        inReports: !exists(json, "in_reports") ? undefined : (json["in_reports"] as Array<any>).map(DomainActorNewsDocumentFromJSON),
        inReportsCount: !exists(json, "in_reports_count") ? undefined : json["in_reports_count"],
        isSubgroupOf: !exists(json, "is_subgroup_of") ? undefined : (json["is_subgroup_of"] as Array<any>).map(DomainActorEntityFromJSON),
        isSubgroupOfActorsCount: !exists(json, "is_subgroup_of_actors_count") ? undefined : json["is_subgroup_of_actors_count"],
        isSuccessorOf: !exists(json, "is_successor_of") ? undefined : (json["is_successor_of"] as Array<any>).map(DomainActorEntityFromJSON),
        isSuccessorOfActorsCount: !exists(json, "is_successor_of_actors_count") ? undefined : json["is_successor_of_actors_count"],
        isSupportedBy: !exists(json, "is_supported_by") ? undefined : (json["is_supported_by"] as Array<any>).map(DomainActorEntityFromJSON),
        isSupportedByActorsCount: !exists(json, "is_supported_by_actors_count") ? undefined : json["is_supported_by_actors_count"],
        killChain: !exists(json, "kill_chain") ? undefined : DomainKillChainFromJSON(json["kill_chain"]),
        knownAs: json["known_as"],
        lastActivityDate: json["last_activity_date"],
        lastModifiedDate: json["last_modified_date"],
        motivations: (json["motivations"] as Array<any>).map(DomainEntityFromJSON),
        name: !exists(json, "name") ? undefined : json["name"],
        notifyUsers: json["notify_users"],
        objectives: (json["objectives"] as Array<any>).map(DomainEntityFromJSON),
        origins: (json["origins"] as Array<any>).map(DomainEntityFromJSON),
        recentAlerting: !exists(json, "recent_alerting") ? undefined : json["recent_alerting"],
        region: !exists(json, "region") ? undefined : DomainEntityFromJSON(json["region"]),
        richTextDescription: !exists(json, "rich_text_description") ? undefined : json["rich_text_description"],
        sellsThreats: !exists(json, "sells_threats") ? undefined : (json["sells_threats"] as Array<any>).map(DomainThreatEntityFromJSON),
        sellsThreatsCount: !exists(json, "sells_threats_count") ? undefined : json["sells_threats_count"],
        shortDescription: json["short_description"],
        slug: !exists(json, "slug") ? undefined : json["slug"],
        status: json["status"],
        supports: !exists(json, "supports") ? undefined : (json["supports"] as Array<any>).map(DomainActorEntityFromJSON),
        supportsActorsCount: !exists(json, "supports_actors_count") ? undefined : json["supports_actors_count"],
        targetCountries: (json["target_countries"] as Array<any>).map(DomainEntityFromJSON),
        targetIndustries: (json["target_industries"] as Array<any>).map(DomainEntityFromJSON),
        targetRegions: (json["target_regions"] as Array<any>).map(DomainEntityFromJSON),
        thumbnail: !exists(json, "thumbnail") ? undefined : DomainImageFromJSON(json["thumbnail"]),
        url: !exists(json, "url") ? undefined : json["url"],
        usesIndicatorsCount: !exists(json, "uses_indicators_count") ? undefined : json["uses_indicators_count"],
        usesMitreAttacksCount: !exists(json, "uses_mitre_attacks_count") ? undefined : json["uses_mitre_attacks_count"],
        usesMitreTacticsCount: !exists(json, "uses_mitre_tactics_count") ? undefined : json["uses_mitre_tactics_count"],
        usesMitreTechniquesCount: !exists(json, "uses_mitre_techniques_count") ? undefined : json["uses_mitre_techniques_count"],
        usesThreats: !exists(json, "uses_threats") ? undefined : (json["uses_threats"] as Array<any>).map(DomainThreatEntityFromJSON),
        usesThreatsCount: !exists(json, "uses_threats_count") ? undefined : json["uses_threats_count"],
        usesVulnerabilities: !exists(json, "uses_vulnerabilities") ? undefined : json["uses_vulnerabilities"],
        vulnerabilitiesCount: !exists(json, "vulnerabilities_count") ? undefined : json["vulnerabilities_count"],
    };
}

export function DomainActorDocumentToJSON(value?: DomainActorDocument | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        active: value.active,
        actor_type: value.actorType,
        capabilities: (value.capabilities as Array<any>).map(DomainEntityToJSON),
        capability: DomainEntityToJSON(value.capability),
        created_date: value.createdDate,
        description: value.description,
        description_length: value.descriptionLength,
        develops_threats: value.developsThreats === undefined ? undefined : (value.developsThreats as Array<any>).map(DomainThreatEntityToJSON),
        develops_threats_count: value.developsThreatsCount,
        ecrime_kill_chain: DomainECrimeKillChainToJSON(value.ecrimeKillChain),
        entitlements: value.entitlements === undefined ? undefined : (value.entitlements as Array<any>).map(DomainEntityToJSON),
        first_activity_date: value.firstActivityDate,
        group: DomainEntityToJSON(value.group),
        has_subgroup: value.hasSubgroup === undefined ? undefined : (value.hasSubgroup as Array<any>).map(DomainActorEntityToJSON),
        has_subgroup_actors_count: value.hasSubgroupActorsCount,
        has_successor: value.hasSuccessor === undefined ? undefined : (value.hasSuccessor as Array<any>).map(DomainActorEntityToJSON),
        has_successor_actors_count: value.hasSuccessorActorsCount,
        id: value.id,
        image: DomainImageToJSON(value.image),
        in_reports: value.inReports === undefined ? undefined : (value.inReports as Array<any>).map(DomainActorNewsDocumentToJSON),
        in_reports_count: value.inReportsCount,
        is_subgroup_of: value.isSubgroupOf === undefined ? undefined : (value.isSubgroupOf as Array<any>).map(DomainActorEntityToJSON),
        is_subgroup_of_actors_count: value.isSubgroupOfActorsCount,
        is_successor_of: value.isSuccessorOf === undefined ? undefined : (value.isSuccessorOf as Array<any>).map(DomainActorEntityToJSON),
        is_successor_of_actors_count: value.isSuccessorOfActorsCount,
        is_supported_by: value.isSupportedBy === undefined ? undefined : (value.isSupportedBy as Array<any>).map(DomainActorEntityToJSON),
        is_supported_by_actors_count: value.isSupportedByActorsCount,
        kill_chain: DomainKillChainToJSON(value.killChain),
        known_as: value.knownAs,
        last_activity_date: value.lastActivityDate,
        last_modified_date: value.lastModifiedDate,
        motivations: (value.motivations as Array<any>).map(DomainEntityToJSON),
        name: value.name,
        notify_users: value.notifyUsers,
        objectives: (value.objectives as Array<any>).map(DomainEntityToJSON),
        origins: (value.origins as Array<any>).map(DomainEntityToJSON),
        recent_alerting: value.recentAlerting,
        region: DomainEntityToJSON(value.region),
        rich_text_description: value.richTextDescription,
        sells_threats: value.sellsThreats === undefined ? undefined : (value.sellsThreats as Array<any>).map(DomainThreatEntityToJSON),
        sells_threats_count: value.sellsThreatsCount,
        short_description: value.shortDescription,
        slug: value.slug,
        status: value.status,
        supports: value.supports === undefined ? undefined : (value.supports as Array<any>).map(DomainActorEntityToJSON),
        supports_actors_count: value.supportsActorsCount,
        target_countries: (value.targetCountries as Array<any>).map(DomainEntityToJSON),
        target_industries: (value.targetIndustries as Array<any>).map(DomainEntityToJSON),
        target_regions: (value.targetRegions as Array<any>).map(DomainEntityToJSON),
        thumbnail: DomainImageToJSON(value.thumbnail),
        url: value.url,
        uses_indicators_count: value.usesIndicatorsCount,
        uses_mitre_attacks_count: value.usesMitreAttacksCount,
        uses_mitre_tactics_count: value.usesMitreTacticsCount,
        uses_mitre_techniques_count: value.usesMitreTechniquesCount,
        uses_threats: value.usesThreats === undefined ? undefined : (value.usesThreats as Array<any>).map(DomainThreatEntityToJSON),
        uses_threats_count: value.usesThreatsCount,
        uses_vulnerabilities: value.usesVulnerabilities,
        vulnerabilities_count: value.vulnerabilitiesCount,
    };
}
