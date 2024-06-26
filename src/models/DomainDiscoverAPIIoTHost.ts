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
import type { DomainDiscoverAPIDeviceSlot } from "./DomainDiscoverAPIDeviceSlot";
import { DomainDiscoverAPIDeviceSlotFromJSON, DomainDiscoverAPIDeviceSlotFromJSONTyped, DomainDiscoverAPIDeviceSlotToJSON } from "./DomainDiscoverAPIDeviceSlot";
import type { DomainDiscoverAPIDiskSize } from "./DomainDiscoverAPIDiskSize";
import { DomainDiscoverAPIDiskSizeFromJSON, DomainDiscoverAPIDiskSizeFromJSONTyped, DomainDiscoverAPIDiskSizeToJSON } from "./DomainDiscoverAPIDiskSize";
import type { DomainDiscoverAPIFieldMetadata } from "./DomainDiscoverAPIFieldMetadata";
import { DomainDiscoverAPIFieldMetadataFromJSON, DomainDiscoverAPIFieldMetadataFromJSONTyped, DomainDiscoverAPIFieldMetadataToJSON } from "./DomainDiscoverAPIFieldMetadata";
import type { DomainDiscoverAPIMountStorageInfo } from "./DomainDiscoverAPIMountStorageInfo";
import { DomainDiscoverAPIMountStorageInfoFromJSON, DomainDiscoverAPIMountStorageInfoFromJSONTyped, DomainDiscoverAPIMountStorageInfoToJSON } from "./DomainDiscoverAPIMountStorageInfo";
import type { DomainDiscoverAPINetworkInterface } from "./DomainDiscoverAPINetworkInterface";
import { DomainDiscoverAPINetworkInterfaceFromJSON, DomainDiscoverAPINetworkInterfaceFromJSONTyped, DomainDiscoverAPINetworkInterfaceToJSON } from "./DomainDiscoverAPINetworkInterface";

/**
 * Represents information about a managed, an unmanaged or an unsupported asset.
 * @export
 * @interface DomainDiscoverAPIIoTHost
 */
export interface DomainDiscoverAPIIoTHost {
    /**
     * The version of the Falcon sensor that's installed on the asset.
     * @type {string}
     * @memberof DomainDiscoverAPIIoTHost
     */
    agentVersion?: string;
    /**
     * The agent ID of the Falcon sensor installed on the asset.
     * @type {string}
     * @memberof DomainDiscoverAPIIoTHost
     */
    aid?: string;
    /**
     * The Amount of available disk space on the asset in GB
     * @type {number}
     * @memberof DomainDiscoverAPIIoTHost
     */
    availableDiskSpace?: number;
    /**
     * The average memory usage in the last 15 minutes on the asset
     * @type {number}
     * @memberof DomainDiscoverAPIIoTHost
     */
    averageMemoryUsage?: number;
    /**
     * The average processor usage in the last 15 minutes on the asset
     * @type {number}
     * @memberof DomainDiscoverAPIIoTHost
     */
    averageProcessorUsage?: number;
    /**
     * The id of the bios on the asset
     * @type {string}
     * @memberof DomainDiscoverAPIIoTHost
     */
    biosId?: string;
    /**
     * The name of the asset's BIOS manufacturer.
     * @type {string}
     * @memberof DomainDiscoverAPIIoTHost
     */
    biosManufacturer?: string;
    /**
     * The asset's BIOS version.
     * @type {string}
     * @memberof DomainDiscoverAPIIoTHost
     */
    biosVersion?: string;
    /**
     * The business criticality of the IoT asset.
     * @type {string}
     * @memberof DomainDiscoverAPIIoTHost
     */
    businessCriticality?: string;
    /**
     * The asset's customer ID.
     * @type {string}
     * @memberof DomainDiscoverAPIIoTHost
     */
    cid: string;
    /**
     * The name of the city where the asset is located.
     * @type {string}
     * @memberof DomainDiscoverAPIIoTHost
     */
    city?: string;
    /**
     * The external ID of the IoT Device in 3rd Party System(Claroty).
     * @type {string}
     * @memberof DomainDiscoverAPIIoTHost
     */
    clarotyId?: string;
    /**
     * Whether the asset is exposed to the internet (Yes or Unknown)
     * @type {string}
     * @memberof DomainDiscoverAPIIoTHost
     */
    computedInternetExposure?: string;
    /**
     * External IP that is exposed to the Internet
     * @type {string}
     * @memberof DomainDiscoverAPIIoTHost
     */
    computedInternetExposureExternalIp?: string;
    /**
     * Timestamp when the asset was last seen as exposed to the Internet
     * @type {string}
     * @memberof DomainDiscoverAPIIoTHost
     */
    computedInternetExposureLastSeen?: string;
    /**
     * The level of confidence that the asset is a corporate asset (25 = low confidence, 50 = medium confidence, 75 = high confidence).
     * @type {number}
     * @memberof DomainDiscoverAPIIoTHost
     */
    confidence?: number;
    /**
     * The name of the country where the asset is located.
     * @type {string}
     * @memberof DomainDiscoverAPIIoTHost
     */
    country?: string;
    /**
     * The Detailed processor name
     * @type {string}
     * @memberof DomainDiscoverAPIIoTHost
     */
    cpuProcessorName?: string;
    /**
     * The credential guard status of the asset
     * @type {boolean}
     * @memberof DomainDiscoverAPIIoTHost
     */
    credentialGuardStatus?: boolean;
    /**
     * The last seen local IPv4 address of the asset.
     * @type {string}
     * @memberof DomainDiscoverAPIIoTHost
     */
    currentLocalIp?: string;
    /**
     * The asset's data providers.
     * @type {Array<string>}
     * @memberof DomainDiscoverAPIIoTHost
     */
    dataProviders?: Array<string>;
    /**
     * The number of data providers for the asset.
     * @type {number}
     * @memberof DomainDiscoverAPIIoTHost
     */
    dataProvidersCount?: number;
    /**
     * The Device Class of IoT Asset
     * @type {string}
     * @memberof DomainDiscoverAPIIoTHost
     */
    deviceClass?: string;
    /**
     * The Device Family of IoT Asset
     * @type {string}
     * @memberof DomainDiscoverAPIIoTHost
     */
    deviceFamily?: string;
    /**
     * The device guard status of the asset
     * @type {boolean}
     * @memberof DomainDiscoverAPIIoTHost
     */
    deviceGuardStatus?: boolean;
    /**
     * The slots of IoT Asset
     * @type {Array<DomainDiscoverAPIDeviceSlot>}
     * @memberof DomainDiscoverAPIIoTHost
     */
    deviceSlots?: Array<DomainDiscoverAPIDeviceSlot>;
    /**
     * The Device Type of IoT Asset
     * @type {string}
     * @memberof DomainDiscoverAPIIoTHost
     */
    deviceType?: string;
    /**
     * The number of sources that discovered the asset.
     * @type {number}
     * @memberof DomainDiscoverAPIIoTHost
     */
    discovererCount?: number;
    /**
     * A list of agent IDs of the Falcon sensors installed on the source hosts that discovered the asset via ICS Asset discovery mechanism
     * @type {Array<string>}
     * @memberof DomainDiscoverAPIIoTHost
     */
    discovererIcsCollectorIds?: Array<string>;
    /**
     * The product type descriptions of the sources that discovered the asset.
     * @type {Array<string>}
     * @memberof DomainDiscoverAPIIoTHost
     */
    discovererProductTypeDescs?: Array<string>;
    /**
     * The names and sizes of the disks on the asset
     * @type {Array<DomainDiscoverAPIDiskSize>}
     * @memberof DomainDiscoverAPIIoTHost
     */
    diskSizes?: Array<DomainDiscoverAPIDiskSize>;
    /**
     * The ID generated by dragos asset discovery mechanism
     * @type {string}
     * @memberof DomainDiscoverAPIIoTHost
     */
    dragosId?: string;
    /**
     * The list of encrypted drives on the asset
     * @type {Array<string>}
     * @memberof DomainDiscoverAPIIoTHost
     */
    encryptedDrives?: Array<string>;
    /**
     * The count of encrypted drives on the asset
     * @type {number}
     * @memberof DomainDiscoverAPIIoTHost
     */
    encryptedDrivesCount?: number;
    /**
     * The encryption status of the asset
     * @type {string}
     * @memberof DomainDiscoverAPIIoTHost
     */
    encryptionStatus?: string;
    /**
     * The type of asset (managed, unmanaged, unsupported).
     * @type {string}
     * @memberof DomainDiscoverAPIIoTHost
     */
    entityType?: string;
    /**
     * The external IPv4 address of the asset.
     * @type {string}
     * @memberof DomainDiscoverAPIIoTHost
     */
    externalIp?: string;
    /**
     * Lists the data providers for each property in the response (Cannot be used for filtering, sorting, or querying).
     * @type {{ [key: string]: DomainDiscoverAPIFieldMetadata; }}
     * @memberof DomainDiscoverAPIIoTHost
     */
    fieldMetadata?: { [key: string]: DomainDiscoverAPIFieldMetadata };
    /**
     * The first time the asset was seen in your environment.
     * @type {string}
     * @memberof DomainDiscoverAPIIoTHost
     */
    firstSeenTimestamp?: string;
    /**
     * The host management groups the asset is part of.
     * @type {Array<string>}
     * @memberof DomainDiscoverAPIIoTHost
     */
    groups?: Array<string>;
    /**
     * The asset's hostname .
     * @type {string}
     * @memberof DomainDiscoverAPIIoTHost
     */
    hostname?: string;
    /**
     * The ID generated by ICS collector asset discovery mechanism
     * @type {string}
     * @memberof DomainDiscoverAPIIoTHost
     */
    icsId?: string;
    /**
     * The unique ID of the asset.
     * @type {string}
     * @memberof DomainDiscoverAPIIoTHost
     */
    id: string;
    /**
     * Whether the asset is exposed to the internet (Yes or Unknown)
     * @type {string}
     * @memberof DomainDiscoverAPIIoTHost
     */
    internetExposure?: string;
    /**
     * The iommu protection status of the host
     * @type {string}
     * @memberof DomainDiscoverAPIIoTHost
     */
    iommuProtectionStatus?: string;
    /**
     * The kernel dma protection status of the asset
     * @type {boolean}
     * @memberof DomainDiscoverAPIIoTHost
     */
    kernelDmaProtectionStatus?: boolean;
    /**
     * For Linux and Mac hosts: the major version, minor version, and patch version of the kernel for the asset. For Windows hosts: the build number of the asset.
     * @type {string}
     * @memberof DomainDiscoverAPIIoTHost
     */
    kernelVersion?: string;
    /**
     * The agent ID of the Falcon sensor installed on the source host that most recently discovered the asset via ICS Asset discovery mechanism
     * @type {string}
     * @memberof DomainDiscoverAPIIoTHost
     */
    lastDiscovererIcsCollectorId?: string;
    /**
     * The most recent time the asset was seen in your environment.
     * @type {string}
     * @memberof DomainDiscoverAPIIoTHost
     */
    lastSeenTimestamp?: string;
    /**
     * The IoT asset's IP address list
     * @type {Array<string>}
     * @memberof DomainDiscoverAPIIoTHost
     */
    localIpAddresses?: Array<string>;
    /**
     * The number of historical local IPv4 addresses the asset has had.
     * @type {number}
     * @memberof DomainDiscoverAPIIoTHost
     */
    localIpsCount?: number;
    /**
     * The Number of Logical Cores on the asset
     * @type {number}
     * @memberof DomainDiscoverAPIIoTHost
     */
    logicalCoreCount?: number;
    /**
     * The IoT asset's MAC address list
     * @type {Array<string>}
     * @memberof DomainDiscoverAPIIoTHost
     */
    macAddresses?: Array<string>;
    /**
     * The domain name the asset is currently joined to (applies only to Windows hosts).
     * @type {string}
     * @memberof DomainDiscoverAPIIoTHost
     */
    machineDomain?: string;
    /**
     * The max memory usage in the last 15 minutes on the asset
     * @type {number}
     * @memberof DomainDiscoverAPIIoTHost
     */
    maxMemoryUsage?: number;
    /**
     * The max processor usage in the last 15 minutes on the asset
     * @type {number}
     * @memberof DomainDiscoverAPIIoTHost
     */
    maxProcessorUsage?: number;
    /**
     * The Total memory.
     * @type {number}
     * @memberof DomainDiscoverAPIIoTHost
     */
    memoryTotal?: number;
    /**
     * The path, used and available space on mounted disks
     * @type {Array<DomainDiscoverAPIMountStorageInfo>}
     * @memberof DomainDiscoverAPIIoTHost
     */
    mountStorageInfo?: Array<DomainDiscoverAPIMountStorageInfo>;
    /**
     * The network ID to which device is connected.
     * @type {string}
     * @memberof DomainDiscoverAPIIoTHost
     */
    networkId?: string;
    /**
     * The asset's network interfaces.
     * @type {Array<DomainDiscoverAPINetworkInterface>}
     * @memberof DomainDiscoverAPIIoTHost
     */
    networkInterfaces?: Array<DomainDiscoverAPINetworkInterface>;
    /**
     * The number of active physical drives available on the system
     * @type {number}
     * @memberof DomainDiscoverAPIIoTHost
     */
    numberOfDiskDrives?: number;
    /**
     * Whether the asset is at end of support (Yes, No, or Unknown)
     * @type {string}
     * @memberof DomainDiscoverAPIIoTHost
     */
    osIsEol?: string;
    /**
     * The OS version of the asset.
     * @type {string}
     * @memberof DomainDiscoverAPIIoTHost
     */
    osVersion?: string;
    /**
     * A list of sources through which host is discovered
     * @type {Array<string>}
     * @memberof DomainDiscoverAPIIoTHost
     */
    otInformationSources: Array<string>;
    /**
     * A list of ot serial numbers that discovered with host
     * @type {Array<string>}
     * @memberof DomainDiscoverAPIIoTHost
     */
    otSerialNumbers: Array<string>;
    /**
     * The organizational unit of the asset (applies only to Windows hosts).
     * @type {string}
     * @memberof DomainDiscoverAPIIoTHost
     */
    ou?: string;
    /**
     * The number of physical CPU cores available on the system
     * @type {number}
     * @memberof DomainDiscoverAPIIoTHost
     */
    physicalCoreCount?: number;
    /**
     * The platform name of the asset (Windows, Mac, Linux).
     * @type {string}
     * @memberof DomainDiscoverAPIIoTHost
     */
    platformName?: string;
    /**
     * The number of physical processors available on the system
     * @type {number}
     * @memberof DomainDiscoverAPIIoTHost
     */
    processorPackageCount?: number;
    /**
     * The product type of the asset represented as a number (1 = Workstation, 2 = Domain Controller, 3 = Server).
     * @type {string}
     * @memberof DomainDiscoverAPIIoTHost
     */
    productType?: string;
    /**
     * The product type of the asset (Workstation, Domain Controller, Server).
     * @type {string}
     * @memberof DomainDiscoverAPIIoTHost
     */
    productTypeDesc?: string;
    /**
     * The list of protocols supported by the device
     * @type {Array<string>}
     * @memberof DomainDiscoverAPIIoTHost
     */
    protocols?: Array<string>;
    /**
     * The purdue level of IoT Asset
     * @type {string}
     * @memberof DomainDiscoverAPIIoTHost
     */
    purdueLevel?: string;
    /**
     * Whether the asset is in reduced functionality mode (Yes or No)
     * @type {string}
     * @memberof DomainDiscoverAPIIoTHost
     */
    reducedFunctionalityMode?: string;
    /**
     * The secure boot enabled status of the asset
     * @type {boolean}
     * @memberof DomainDiscoverAPIIoTHost
     */
    secureBootEnabledStatus?: boolean;
    /**
     * The secure boot requested status of the asset
     * @type {boolean}
     * @memberof DomainDiscoverAPIIoTHost
     */
    secureBootRequestedStatus?: boolean;
    /**
     * The secure memory overwrite requested status of the asset
     * @type {string}
     * @memberof DomainDiscoverAPIIoTHost
     */
    secureMemoryOverwriteRequestedStatus?: string;
    /**
     * The site name of the domain the asset is joined to (applies only to Windows hosts).
     * @type {string}
     * @memberof DomainDiscoverAPIIoTHost
     */
    siteName?: string;
    /**
     * The subnet to which device is connected.
     * @type {string}
     * @memberof DomainDiscoverAPIIoTHost
     */
    subnet?: string;
    /**
     * The system guard status of the asset
     * @type {string}
     * @memberof DomainDiscoverAPIIoTHost
     */
    systemGuardStatus?: string;
    /**
     * The asset's system manufacturer.
     * @type {string}
     * @memberof DomainDiscoverAPIIoTHost
     */
    systemManufacturer?: string;
    /**
     * The asset's system product name.
     * @type {string}
     * @memberof DomainDiscoverAPIIoTHost
     */
    systemProductName?: string;
    /**
     * The asset's system serial number.
     * @type {string}
     * @memberof DomainDiscoverAPIIoTHost
     */
    systemSerialNumber?: string;
    /**
     * The sensor and cloud tags of the asset.
     * @type {Array<string>}
     * @memberof DomainDiscoverAPIIoTHost
     */
    tags?: Array<string>;
    /**
     * The count of bios files measured by the firmware image
     * @type {number}
     * @memberof DomainDiscoverAPIIoTHost
     */
    totalBiosFiles?: number;
    /**
     * The Total amount of disk space available on the asset in GB
     * @type {number}
     * @memberof DomainDiscoverAPIIoTHost
     */
    totalDiskSpace?: number;
    /**
     * The uefi memory protection status of the asset
     * @type {string}
     * @memberof DomainDiscoverAPIIoTHost
     */
    uefiMemoryProtectionStatus?: string;
    /**
     * The list of unencrypted drives on the asset
     * @type {Array<string>}
     * @memberof DomainDiscoverAPIIoTHost
     */
    unencryptedDrives?: Array<string>;
    /**
     * The count of unencrypted drives on the asset
     * @type {number}
     * @memberof DomainDiscoverAPIIoTHost
     */
    unencryptedDrivesCount?: number;
    /**
     * The Current amount of used disk space on the asset in GB
     * @type {number}
     * @memberof DomainDiscoverAPIIoTHost
     */
    usedDiskSpace?: number;
    /**
     * The Virtual Zone name in which device is installed.
     * @type {string}
     * @memberof DomainDiscoverAPIIoTHost
     */
    virtualZone?: string;
    /**
     * The virtualization based security status of the asset
     * @type {boolean}
     * @memberof DomainDiscoverAPIIoTHost
     */
    virtualizationBasedSecurityStatus?: boolean;
    /**
     * The VLAN IDs to which device is connected.
     * @type {Array<string>}
     * @memberof DomainDiscoverAPIIoTHost
     */
    vlan?: Array<string>;
    /**
     * The external ID of the IoT Device in 3rd Party System(Claroty Xdome)
     * @type {string}
     * @memberof DomainDiscoverAPIIoTHost
     */
    xdomeId?: string;
}

/**
 * Check if a given object implements the DomainDiscoverAPIIoTHost interface.
 */
export function instanceOfDomainDiscoverAPIIoTHost(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "cid" in value;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "otInformationSources" in value;
    isInstance = isInstance && "otSerialNumbers" in value;

    return isInstance;
}

export function DomainDiscoverAPIIoTHostFromJSON(json: any): DomainDiscoverAPIIoTHost {
    return DomainDiscoverAPIIoTHostFromJSONTyped(json, false);
}

export function DomainDiscoverAPIIoTHostFromJSONTyped(json: any, ignoreDiscriminator: boolean): DomainDiscoverAPIIoTHost {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        agentVersion: !exists(json, "agent_version") ? undefined : json["agent_version"],
        aid: !exists(json, "aid") ? undefined : json["aid"],
        availableDiskSpace: !exists(json, "available_disk_space") ? undefined : json["available_disk_space"],
        averageMemoryUsage: !exists(json, "average_memory_usage") ? undefined : json["average_memory_usage"],
        averageProcessorUsage: !exists(json, "average_processor_usage") ? undefined : json["average_processor_usage"],
        biosId: !exists(json, "bios_id") ? undefined : json["bios_id"],
        biosManufacturer: !exists(json, "bios_manufacturer") ? undefined : json["bios_manufacturer"],
        biosVersion: !exists(json, "bios_version") ? undefined : json["bios_version"],
        businessCriticality: !exists(json, "business_criticality") ? undefined : json["business_criticality"],
        cid: json["cid"],
        city: !exists(json, "city") ? undefined : json["city"],
        clarotyId: !exists(json, "claroty_id") ? undefined : json["claroty_id"],
        computedInternetExposure: !exists(json, "computed_internet_exposure") ? undefined : json["computed_internet_exposure"],
        computedInternetExposureExternalIp: !exists(json, "computed_internet_exposure_external_ip") ? undefined : json["computed_internet_exposure_external_ip"],
        computedInternetExposureLastSeen: !exists(json, "computed_internet_exposure_last_seen") ? undefined : json["computed_internet_exposure_last_seen"],
        confidence: !exists(json, "confidence") ? undefined : json["confidence"],
        country: !exists(json, "country") ? undefined : json["country"],
        cpuProcessorName: !exists(json, "cpu_processor_name") ? undefined : json["cpu_processor_name"],
        credentialGuardStatus: !exists(json, "credential_guard_status") ? undefined : json["credential_guard_status"],
        currentLocalIp: !exists(json, "current_local_ip") ? undefined : json["current_local_ip"],
        dataProviders: !exists(json, "data_providers") ? undefined : json["data_providers"],
        dataProvidersCount: !exists(json, "data_providers_count") ? undefined : json["data_providers_count"],
        deviceClass: !exists(json, "device_class") ? undefined : json["device_class"],
        deviceFamily: !exists(json, "device_family") ? undefined : json["device_family"],
        deviceGuardStatus: !exists(json, "device_guard_status") ? undefined : json["device_guard_status"],
        deviceSlots: !exists(json, "device_slots") ? undefined : (json["device_slots"] as Array<any>).map(DomainDiscoverAPIDeviceSlotFromJSON),
        deviceType: !exists(json, "device_type") ? undefined : json["device_type"],
        discovererCount: !exists(json, "discoverer_count") ? undefined : json["discoverer_count"],
        discovererIcsCollectorIds: !exists(json, "discoverer_ics_collector_ids") ? undefined : json["discoverer_ics_collector_ids"],
        discovererProductTypeDescs: !exists(json, "discoverer_product_type_descs") ? undefined : json["discoverer_product_type_descs"],
        diskSizes: !exists(json, "disk_sizes") ? undefined : (json["disk_sizes"] as Array<any>).map(DomainDiscoverAPIDiskSizeFromJSON),
        dragosId: !exists(json, "dragos_id") ? undefined : json["dragos_id"],
        encryptedDrives: !exists(json, "encrypted_drives") ? undefined : json["encrypted_drives"],
        encryptedDrivesCount: !exists(json, "encrypted_drives_count") ? undefined : json["encrypted_drives_count"],
        encryptionStatus: !exists(json, "encryption_status") ? undefined : json["encryption_status"],
        entityType: !exists(json, "entity_type") ? undefined : json["entity_type"],
        externalIp: !exists(json, "external_ip") ? undefined : json["external_ip"],
        fieldMetadata: !exists(json, "field_metadata") ? undefined : mapValues(json["field_metadata"], DomainDiscoverAPIFieldMetadataFromJSON),
        firstSeenTimestamp: !exists(json, "first_seen_timestamp") ? undefined : json["first_seen_timestamp"],
        groups: !exists(json, "groups") ? undefined : json["groups"],
        hostname: !exists(json, "hostname") ? undefined : json["hostname"],
        icsId: !exists(json, "ics_id") ? undefined : json["ics_id"],
        id: json["id"],
        internetExposure: !exists(json, "internet_exposure") ? undefined : json["internet_exposure"],
        iommuProtectionStatus: !exists(json, "iommu_protection_status") ? undefined : json["iommu_protection_status"],
        kernelDmaProtectionStatus: !exists(json, "kernel_dma_protection_status") ? undefined : json["kernel_dma_protection_status"],
        kernelVersion: !exists(json, "kernel_version") ? undefined : json["kernel_version"],
        lastDiscovererIcsCollectorId: !exists(json, "last_discoverer_ics_collector_id") ? undefined : json["last_discoverer_ics_collector_id"],
        lastSeenTimestamp: !exists(json, "last_seen_timestamp") ? undefined : json["last_seen_timestamp"],
        localIpAddresses: !exists(json, "local_ip_addresses") ? undefined : json["local_ip_addresses"],
        localIpsCount: !exists(json, "local_ips_count") ? undefined : json["local_ips_count"],
        logicalCoreCount: !exists(json, "logical_core_count") ? undefined : json["logical_core_count"],
        macAddresses: !exists(json, "mac_addresses") ? undefined : json["mac_addresses"],
        machineDomain: !exists(json, "machine_domain") ? undefined : json["machine_domain"],
        maxMemoryUsage: !exists(json, "max_memory_usage") ? undefined : json["max_memory_usage"],
        maxProcessorUsage: !exists(json, "max_processor_usage") ? undefined : json["max_processor_usage"],
        memoryTotal: !exists(json, "memory_total") ? undefined : json["memory_total"],
        mountStorageInfo: !exists(json, "mount_storage_info") ? undefined : (json["mount_storage_info"] as Array<any>).map(DomainDiscoverAPIMountStorageInfoFromJSON),
        networkId: !exists(json, "network_id") ? undefined : json["network_id"],
        networkInterfaces: !exists(json, "network_interfaces") ? undefined : (json["network_interfaces"] as Array<any>).map(DomainDiscoverAPINetworkInterfaceFromJSON),
        numberOfDiskDrives: !exists(json, "number_of_disk_drives") ? undefined : json["number_of_disk_drives"],
        osIsEol: !exists(json, "os_is_eol") ? undefined : json["os_is_eol"],
        osVersion: !exists(json, "os_version") ? undefined : json["os_version"],
        otInformationSources: json["ot_information_sources"],
        otSerialNumbers: json["ot_serial_numbers"],
        ou: !exists(json, "ou") ? undefined : json["ou"],
        physicalCoreCount: !exists(json, "physical_core_count") ? undefined : json["physical_core_count"],
        platformName: !exists(json, "platform_name") ? undefined : json["platform_name"],
        processorPackageCount: !exists(json, "processor_package_count") ? undefined : json["processor_package_count"],
        productType: !exists(json, "product_type") ? undefined : json["product_type"],
        productTypeDesc: !exists(json, "product_type_desc") ? undefined : json["product_type_desc"],
        protocols: !exists(json, "protocols") ? undefined : json["protocols"],
        purdueLevel: !exists(json, "purdue_level") ? undefined : json["purdue_level"],
        reducedFunctionalityMode: !exists(json, "reduced_functionality_mode") ? undefined : json["reduced_functionality_mode"],
        secureBootEnabledStatus: !exists(json, "secure_boot_enabled_status") ? undefined : json["secure_boot_enabled_status"],
        secureBootRequestedStatus: !exists(json, "secure_boot_requested_status") ? undefined : json["secure_boot_requested_status"],
        secureMemoryOverwriteRequestedStatus: !exists(json, "secure_memory_overwrite_requested_status") ? undefined : json["secure_memory_overwrite_requested_status"],
        siteName: !exists(json, "site_name") ? undefined : json["site_name"],
        subnet: !exists(json, "subnet") ? undefined : json["subnet"],
        systemGuardStatus: !exists(json, "system_guard_status") ? undefined : json["system_guard_status"],
        systemManufacturer: !exists(json, "system_manufacturer") ? undefined : json["system_manufacturer"],
        systemProductName: !exists(json, "system_product_name") ? undefined : json["system_product_name"],
        systemSerialNumber: !exists(json, "system_serial_number") ? undefined : json["system_serial_number"],
        tags: !exists(json, "tags") ? undefined : json["tags"],
        totalBiosFiles: !exists(json, "total_bios_files") ? undefined : json["total_bios_files"],
        totalDiskSpace: !exists(json, "total_disk_space") ? undefined : json["total_disk_space"],
        uefiMemoryProtectionStatus: !exists(json, "uefi_memory_protection_status") ? undefined : json["uefi_memory_protection_status"],
        unencryptedDrives: !exists(json, "unencrypted_drives") ? undefined : json["unencrypted_drives"],
        unencryptedDrivesCount: !exists(json, "unencrypted_drives_count") ? undefined : json["unencrypted_drives_count"],
        usedDiskSpace: !exists(json, "used_disk_space") ? undefined : json["used_disk_space"],
        virtualZone: !exists(json, "virtual_zone") ? undefined : json["virtual_zone"],
        virtualizationBasedSecurityStatus: !exists(json, "virtualization_based_security_status") ? undefined : json["virtualization_based_security_status"],
        vlan: !exists(json, "vlan") ? undefined : json["vlan"],
        xdomeId: !exists(json, "xdome_id") ? undefined : json["xdome_id"],
    };
}

export function DomainDiscoverAPIIoTHostToJSON(value?: DomainDiscoverAPIIoTHost | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        agent_version: value.agentVersion,
        aid: value.aid,
        available_disk_space: value.availableDiskSpace,
        average_memory_usage: value.averageMemoryUsage,
        average_processor_usage: value.averageProcessorUsage,
        bios_id: value.biosId,
        bios_manufacturer: value.biosManufacturer,
        bios_version: value.biosVersion,
        business_criticality: value.businessCriticality,
        cid: value.cid,
        city: value.city,
        claroty_id: value.clarotyId,
        computed_internet_exposure: value.computedInternetExposure,
        computed_internet_exposure_external_ip: value.computedInternetExposureExternalIp,
        computed_internet_exposure_last_seen: value.computedInternetExposureLastSeen,
        confidence: value.confidence,
        country: value.country,
        cpu_processor_name: value.cpuProcessorName,
        credential_guard_status: value.credentialGuardStatus,
        current_local_ip: value.currentLocalIp,
        data_providers: value.dataProviders,
        data_providers_count: value.dataProvidersCount,
        device_class: value.deviceClass,
        device_family: value.deviceFamily,
        device_guard_status: value.deviceGuardStatus,
        device_slots: value.deviceSlots === undefined ? undefined : (value.deviceSlots as Array<any>).map(DomainDiscoverAPIDeviceSlotToJSON),
        device_type: value.deviceType,
        discoverer_count: value.discovererCount,
        discoverer_ics_collector_ids: value.discovererIcsCollectorIds,
        discoverer_product_type_descs: value.discovererProductTypeDescs,
        disk_sizes: value.diskSizes === undefined ? undefined : (value.diskSizes as Array<any>).map(DomainDiscoverAPIDiskSizeToJSON),
        dragos_id: value.dragosId,
        encrypted_drives: value.encryptedDrives,
        encrypted_drives_count: value.encryptedDrivesCount,
        encryption_status: value.encryptionStatus,
        entity_type: value.entityType,
        external_ip: value.externalIp,
        field_metadata: value.fieldMetadata === undefined ? undefined : mapValues(value.fieldMetadata, DomainDiscoverAPIFieldMetadataToJSON),
        first_seen_timestamp: value.firstSeenTimestamp,
        groups: value.groups,
        hostname: value.hostname,
        ics_id: value.icsId,
        id: value.id,
        internet_exposure: value.internetExposure,
        iommu_protection_status: value.iommuProtectionStatus,
        kernel_dma_protection_status: value.kernelDmaProtectionStatus,
        kernel_version: value.kernelVersion,
        last_discoverer_ics_collector_id: value.lastDiscovererIcsCollectorId,
        last_seen_timestamp: value.lastSeenTimestamp,
        local_ip_addresses: value.localIpAddresses,
        local_ips_count: value.localIpsCount,
        logical_core_count: value.logicalCoreCount,
        mac_addresses: value.macAddresses,
        machine_domain: value.machineDomain,
        max_memory_usage: value.maxMemoryUsage,
        max_processor_usage: value.maxProcessorUsage,
        memory_total: value.memoryTotal,
        mount_storage_info: value.mountStorageInfo === undefined ? undefined : (value.mountStorageInfo as Array<any>).map(DomainDiscoverAPIMountStorageInfoToJSON),
        network_id: value.networkId,
        network_interfaces: value.networkInterfaces === undefined ? undefined : (value.networkInterfaces as Array<any>).map(DomainDiscoverAPINetworkInterfaceToJSON),
        number_of_disk_drives: value.numberOfDiskDrives,
        os_is_eol: value.osIsEol,
        os_version: value.osVersion,
        ot_information_sources: value.otInformationSources,
        ot_serial_numbers: value.otSerialNumbers,
        ou: value.ou,
        physical_core_count: value.physicalCoreCount,
        platform_name: value.platformName,
        processor_package_count: value.processorPackageCount,
        product_type: value.productType,
        product_type_desc: value.productTypeDesc,
        protocols: value.protocols,
        purdue_level: value.purdueLevel,
        reduced_functionality_mode: value.reducedFunctionalityMode,
        secure_boot_enabled_status: value.secureBootEnabledStatus,
        secure_boot_requested_status: value.secureBootRequestedStatus,
        secure_memory_overwrite_requested_status: value.secureMemoryOverwriteRequestedStatus,
        site_name: value.siteName,
        subnet: value.subnet,
        system_guard_status: value.systemGuardStatus,
        system_manufacturer: value.systemManufacturer,
        system_product_name: value.systemProductName,
        system_serial_number: value.systemSerialNumber,
        tags: value.tags,
        total_bios_files: value.totalBiosFiles,
        total_disk_space: value.totalDiskSpace,
        uefi_memory_protection_status: value.uefiMemoryProtectionStatus,
        unencrypted_drives: value.unencryptedDrives,
        unencrypted_drives_count: value.unencryptedDrivesCount,
        used_disk_space: value.usedDiskSpace,
        virtual_zone: value.virtualZone,
        virtualization_based_security_status: value.virtualizationBasedSecurityStatus,
        vlan: value.vlan,
        xdome_id: value.xdomeId,
    };
}
