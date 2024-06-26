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
    ClientArchiveCreateResponseV1,
    ClientArchiveListFilesResponseV1,
    ClientExtractionCreateRequestV1,
    ClientExtractionCreateResponseV1,
    ClientExtractionListFilesResponseV1,
    ClientSampleMetadataResponseV2,
    MsaQueryResponse,
    MsaReplyMetaOnly,
} from "../models/index";
import {
    ClientArchiveCreateResponseV1FromJSON,
    ClientArchiveCreateResponseV1ToJSON,
    ClientArchiveListFilesResponseV1FromJSON,
    ClientArchiveListFilesResponseV1ToJSON,
    ClientExtractionCreateRequestV1FromJSON,
    ClientExtractionCreateRequestV1ToJSON,
    ClientExtractionCreateResponseV1FromJSON,
    ClientExtractionCreateResponseV1ToJSON,
    ClientExtractionListFilesResponseV1FromJSON,
    ClientExtractionListFilesResponseV1ToJSON,
    ClientSampleMetadataResponseV2FromJSON,
    ClientSampleMetadataResponseV2ToJSON,
    MsaQueryResponseFromJSON,
    MsaQueryResponseToJSON,
    MsaReplyMetaOnlyFromJSON,
    MsaReplyMetaOnlyToJSON,
} from "../models/index";

export interface ArchiveDeleteV1Request {
    id: string;
}

export interface ArchiveGetV1Request {
    id: string;
    includeFiles?: boolean;
}

export interface ArchiveListV1Request {
    id: string;
    limit?: number;
    offset?: string;
}

export interface ArchiveUploadV1Request {
    name: string;
    body: Array<number>;
    password?: string;
    isConfidential?: boolean;
    comment?: string;
}

export interface ArchiveUploadV2Request {
    file: Blob;
    name: string;
    password?: string;
    isConfidential?: boolean;
    comment?: string;
}

export interface DeleteSampleV3Request {
    ids: string;
}

export interface ExtractionCreateV1Request {
    body: ClientExtractionCreateRequestV1;
}

export interface ExtractionGetV1Request {
    id: string;
    includeFiles?: boolean;
}

export interface ExtractionListV1Request {
    id: string;
    limit?: number;
    offset?: string;
}

export interface GetSampleV3Request {
    ids: string;
    passwordProtected?: boolean;
}

export interface UploadSampleV3Request {
    sample: Blob;
    fileName: string;
    comment?: string;
    isConfidential?: boolean;
}

/**
 *
 */
export class SampleUploadsApi extends runtime.BaseAPI {
    /**
     * Delete an archive that was uploaded previously
     */
    async archiveDeleteV1Raw(requestParameters: ArchiveDeleteV1Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError("id", "Required parameter requestParameters.id was null or undefined when calling archiveDeleteV1.");
        }

        const queryParameters: any = {};

        if (requestParameters.id !== undefined) {
            queryParameters["id"] = requestParameters.id;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", []);
        }

        const response = await this.request(
            {
                path: `/archives/entities/archives/v1`,
                method: "DELETE",
                headers: headerParameters,
                query: queryParameters,
            },
            initOverrides,
        );

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Delete an archive that was uploaded previously
     */
    async archiveDeleteV1(id: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.archiveDeleteV1Raw({ id: id }, initOverrides);
    }

    /**
     * Retrieves the archives upload operation statuses. Status `done` means that archive was processed successfully. Status `error` means that archive was not processed successfully.
     */
    async archiveGetV1Raw(requestParameters: ArchiveGetV1Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ClientArchiveCreateResponseV1>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError("id", "Required parameter requestParameters.id was null or undefined when calling archiveGetV1.");
        }

        const queryParameters: any = {};

        if (requestParameters.id !== undefined) {
            queryParameters["id"] = requestParameters.id;
        }

        if (requestParameters.includeFiles !== undefined) {
            queryParameters["include_files"] = requestParameters.includeFiles;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", []);
        }

        const response = await this.request(
            {
                path: `/archives/entities/archives/v1`,
                method: "GET",
                headers: headerParameters,
                query: queryParameters,
            },
            initOverrides,
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => ClientArchiveCreateResponseV1FromJSON(jsonValue));
    }

    /**
     * Retrieves the archives upload operation statuses. Status `done` means that archive was processed successfully. Status `error` means that archive was not processed successfully.
     */
    async archiveGetV1(id: string, includeFiles?: boolean, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ClientArchiveCreateResponseV1> {
        const response = await this.archiveGetV1Raw({ id: id, includeFiles: includeFiles }, initOverrides);
        return await response.value();
    }

    /**
     * Retrieves the archives files in chunks.
     */
    async archiveListV1Raw(requestParameters: ArchiveListV1Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ClientArchiveListFilesResponseV1>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError("id", "Required parameter requestParameters.id was null or undefined when calling archiveListV1.");
        }

        const queryParameters: any = {};

        if (requestParameters.id !== undefined) {
            queryParameters["id"] = requestParameters.id;
        }

        if (requestParameters.limit !== undefined) {
            queryParameters["limit"] = requestParameters.limit;
        }

        if (requestParameters.offset !== undefined) {
            queryParameters["offset"] = requestParameters.offset;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", []);
        }

        const response = await this.request(
            {
                path: `/archives/entities/archive-files/v1`,
                method: "GET",
                headers: headerParameters,
                query: queryParameters,
            },
            initOverrides,
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => ClientArchiveListFilesResponseV1FromJSON(jsonValue));
    }

    /**
     * Retrieves the archives files in chunks.
     */
    async archiveListV1(id: string, limit?: number, offset?: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ClientArchiveListFilesResponseV1> {
        const response = await this.archiveListV1Raw({ id: id, limit: limit, offset: offset }, initOverrides);
        return await response.value();
    }

    /**
     * Uploads an archive and extracts files list from it. Operation is asynchronous use `/archives/entities/archives/v1` to check the status. After uploading, use `/archives/entities/extractions/v1` to copy the file to internal storage making it available for content analysis. This method is deprecated in favor of `/archives/entities/archives/v2`
     * @deprecated
     */
    async archiveUploadV1Raw(requestParameters: ArchiveUploadV1Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ClientArchiveCreateResponseV1>> {
        if (requestParameters.name === null || requestParameters.name === undefined) {
            throw new runtime.RequiredError("name", "Required parameter requestParameters.name was null or undefined when calling archiveUploadV1.");
        }

        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError("body", "Required parameter requestParameters.body was null or undefined when calling archiveUploadV1.");
        }

        const queryParameters: any = {};

        if (requestParameters.name !== undefined) {
            queryParameters["name"] = requestParameters.name;
        }

        if (requestParameters.password !== undefined) {
            queryParameters["password"] = requestParameters.password;
        }

        if (requestParameters.isConfidential !== undefined) {
            queryParameters["is_confidential"] = requestParameters.isConfidential;
        }

        if (requestParameters.comment !== undefined) {
            queryParameters["comment"] = requestParameters.comment;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters["Content-Type"] = "application/octet-stream";

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", []);
        }

        const response = await this.request(
            {
                path: `/archives/entities/archives/v1`,
                method: "POST",
                headers: headerParameters,
                query: queryParameters,
                body: requestParameters.body,
            },
            initOverrides,
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => ClientArchiveCreateResponseV1FromJSON(jsonValue));
    }

    /**
     * Uploads an archive and extracts files list from it. Operation is asynchronous use `/archives/entities/archives/v1` to check the status. After uploading, use `/archives/entities/extractions/v1` to copy the file to internal storage making it available for content analysis. This method is deprecated in favor of `/archives/entities/archives/v2`
     * @deprecated
     */
    async archiveUploadV1(
        name: string,
        body: Array<number>,
        password?: string,
        isConfidential?: boolean,
        comment?: string,
        initOverrides?: RequestInit | runtime.InitOverrideFunction,
    ): Promise<ClientArchiveCreateResponseV1> {
        const response = await this.archiveUploadV1Raw({ name: name, body: body, password: password, isConfidential: isConfidential, comment: comment }, initOverrides);
        return await response.value();
    }

    /**
     * Uploads an archive and extracts files list from it. Operation is asynchronous use `/archives/entities/archives/v1` to check the status. After uploading, use `/archives/entities/extractions/v1` to copy the file to internal storage making it available for content analysis.
     */
    async archiveUploadV2Raw(requestParameters: ArchiveUploadV2Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ClientArchiveCreateResponseV1>> {
        if (requestParameters.file === null || requestParameters.file === undefined) {
            throw new runtime.RequiredError("file", "Required parameter requestParameters.file was null or undefined when calling archiveUploadV2.");
        }

        if (requestParameters.name === null || requestParameters.name === undefined) {
            throw new runtime.RequiredError("name", "Required parameter requestParameters.name was null or undefined when calling archiveUploadV2.");
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", []);
        }

        const consumes: runtime.Consume[] = [{ contentType: "multipart/form-data" }];
        // @ts-ignore: canConsumeForm may be unused
        const canConsumeForm = runtime.canConsumeForm(consumes);

        let formParams: { append(param: string, value: any): any };
        let useForm = false;
        // use FormData to transmit files using content-type "multipart/form-data"
        useForm = canConsumeForm;
        if (useForm) {
            formParams = new FormData();
        } else {
            formParams = new URLSearchParams();
        }

        if (requestParameters.file !== undefined) {
            formParams.append("file", requestParameters.file as any);
        }

        if (requestParameters.password !== undefined) {
            formParams.append("password", requestParameters.password as any);
        }

        if (requestParameters.name !== undefined) {
            formParams.append("name", requestParameters.name as any);
        }

        if (requestParameters.isConfidential !== undefined) {
            formParams.append("is_confidential", requestParameters.isConfidential as any);
        }

        if (requestParameters.comment !== undefined) {
            formParams.append("comment", requestParameters.comment as any);
        }

        const response = await this.request(
            {
                path: `/archives/entities/archives/v2`,
                method: "POST",
                headers: headerParameters,
                query: queryParameters,
                body: formParams,
            },
            initOverrides,
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => ClientArchiveCreateResponseV1FromJSON(jsonValue));
    }

    /**
     * Uploads an archive and extracts files list from it. Operation is asynchronous use `/archives/entities/archives/v1` to check the status. After uploading, use `/archives/entities/extractions/v1` to copy the file to internal storage making it available for content analysis.
     */
    async archiveUploadV2(
        file: Blob,
        name: string,
        password?: string,
        isConfidential?: boolean,
        comment?: string,
        initOverrides?: RequestInit | runtime.InitOverrideFunction,
    ): Promise<ClientArchiveCreateResponseV1> {
        const response = await this.archiveUploadV2Raw({ file: file, name: name, password: password, isConfidential: isConfidential, comment: comment }, initOverrides);
        return await response.value();
    }

    /**
     * Removes a sample, including file, meta and submissions from the collection
     */
    async deleteSampleV3Raw(requestParameters: DeleteSampleV3Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MsaQueryResponse>> {
        if (requestParameters.ids === null || requestParameters.ids === undefined) {
            throw new runtime.RequiredError("ids", "Required parameter requestParameters.ids was null or undefined when calling deleteSampleV3.");
        }

        const queryParameters: any = {};

        if (requestParameters.ids !== undefined) {
            queryParameters["ids"] = requestParameters.ids;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", []);
        }

        const response = await this.request(
            {
                path: `/samples/entities/samples/v3`,
                method: "DELETE",
                headers: headerParameters,
                query: queryParameters,
            },
            initOverrides,
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => MsaQueryResponseFromJSON(jsonValue));
    }

    /**
     * Removes a sample, including file, meta and submissions from the collection
     */
    async deleteSampleV3(ids: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MsaQueryResponse> {
        const response = await this.deleteSampleV3Raw({ ids: ids }, initOverrides);
        return await response.value();
    }

    /**
     * Extracts files from an uploaded archive and copies them to internal storage making it available for content analysis.
     */
    async extractionCreateV1Raw(
        requestParameters: ExtractionCreateV1Request,
        initOverrides?: RequestInit | runtime.InitOverrideFunction,
    ): Promise<runtime.ApiResponse<ClientExtractionCreateResponseV1>> {
        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError("body", "Required parameter requestParameters.body was null or undefined when calling extractionCreateV1.");
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters["Content-Type"] = "application/json";

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", []);
        }

        const response = await this.request(
            {
                path: `/archives/entities/extractions/v1`,
                method: "POST",
                headers: headerParameters,
                query: queryParameters,
                body: ClientExtractionCreateRequestV1ToJSON(requestParameters.body),
            },
            initOverrides,
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => ClientExtractionCreateResponseV1FromJSON(jsonValue));
    }

    /**
     * Extracts files from an uploaded archive and copies them to internal storage making it available for content analysis.
     */
    async extractionCreateV1(body: ClientExtractionCreateRequestV1, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ClientExtractionCreateResponseV1> {
        const response = await this.extractionCreateV1Raw({ body: body }, initOverrides);
        return await response.value();
    }

    /**
     * Retrieves the files extraction operation statuses. Status `done` means that all files were processed successfully. Status `error` means that at least one of the file could not be processed.
     */
    async extractionGetV1Raw(requestParameters: ExtractionGetV1Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ClientExtractionCreateResponseV1>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError("id", "Required parameter requestParameters.id was null or undefined when calling extractionGetV1.");
        }

        const queryParameters: any = {};

        if (requestParameters.id !== undefined) {
            queryParameters["id"] = requestParameters.id;
        }

        if (requestParameters.includeFiles !== undefined) {
            queryParameters["include_files"] = requestParameters.includeFiles;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", []);
        }

        const response = await this.request(
            {
                path: `/archives/entities/extractions/v1`,
                method: "GET",
                headers: headerParameters,
                query: queryParameters,
            },
            initOverrides,
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => ClientExtractionCreateResponseV1FromJSON(jsonValue));
    }

    /**
     * Retrieves the files extraction operation statuses. Status `done` means that all files were processed successfully. Status `error` means that at least one of the file could not be processed.
     */
    async extractionGetV1(id: string, includeFiles?: boolean, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ClientExtractionCreateResponseV1> {
        const response = await this.extractionGetV1Raw({ id: id, includeFiles: includeFiles }, initOverrides);
        return await response.value();
    }

    /**
     * Retrieves the files extractions in chunks. Status `done` means that all files were processed successfully. Status `error` means that at least one of the file could not be processed.
     */
    async extractionListV1Raw(
        requestParameters: ExtractionListV1Request,
        initOverrides?: RequestInit | runtime.InitOverrideFunction,
    ): Promise<runtime.ApiResponse<ClientExtractionListFilesResponseV1>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError("id", "Required parameter requestParameters.id was null or undefined when calling extractionListV1.");
        }

        const queryParameters: any = {};

        if (requestParameters.id !== undefined) {
            queryParameters["id"] = requestParameters.id;
        }

        if (requestParameters.limit !== undefined) {
            queryParameters["limit"] = requestParameters.limit;
        }

        if (requestParameters.offset !== undefined) {
            queryParameters["offset"] = requestParameters.offset;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", []);
        }

        const response = await this.request(
            {
                path: `/archives/entities/extraction-files/v1`,
                method: "GET",
                headers: headerParameters,
                query: queryParameters,
            },
            initOverrides,
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => ClientExtractionListFilesResponseV1FromJSON(jsonValue));
    }

    /**
     * Retrieves the files extractions in chunks. Status `done` means that all files were processed successfully. Status `error` means that at least one of the file could not be processed.
     */
    async extractionListV1(id: string, limit?: number, offset?: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ClientExtractionListFilesResponseV1> {
        const response = await this.extractionListV1Raw({ id: id, limit: limit, offset: offset }, initOverrides);
        return await response.value();
    }

    /**
     * Retrieves the file associated with the given ID (SHA256)
     */
    async getSampleV3Raw(requestParameters: GetSampleV3Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<string>> {
        if (requestParameters.ids === null || requestParameters.ids === undefined) {
            throw new runtime.RequiredError("ids", "Required parameter requestParameters.ids was null or undefined when calling getSampleV3.");
        }

        const queryParameters: any = {};

        if (requestParameters.ids !== undefined) {
            queryParameters["ids"] = requestParameters.ids;
        }

        if (requestParameters.passwordProtected !== undefined) {
            queryParameters["password_protected"] = requestParameters.passwordProtected;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", []);
        }

        const response = await this.request(
            {
                path: `/samples/entities/samples/v3`,
                method: "GET",
                headers: headerParameters,
                query: queryParameters,
            },
            initOverrides,
        );

        if (this.isJsonMime(response.headers.get("content-type"))) {
            return new runtime.JSONApiResponse<string>(response);
        } else {
            return new runtime.TextApiResponse(response) as any;
        }
    }

    /**
     * Retrieves the file associated with the given ID (SHA256)
     */
    async getSampleV3(ids: string, passwordProtected?: boolean, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<string> {
        const response = await this.getSampleV3Raw({ ids: ids, passwordProtected: passwordProtected }, initOverrides);
        return await response.value();
    }

    /**
     * Upload a file for further cloud analysis. After uploading, call the specific analysis API endpoint.
     */
    async uploadSampleV3Raw(requestParameters: UploadSampleV3Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ClientSampleMetadataResponseV2>> {
        if (requestParameters.sample === null || requestParameters.sample === undefined) {
            throw new runtime.RequiredError("sample", "Required parameter requestParameters.sample was null or undefined when calling uploadSampleV3.");
        }

        if (requestParameters.fileName === null || requestParameters.fileName === undefined) {
            throw new runtime.RequiredError("fileName", "Required parameter requestParameters.fileName was null or undefined when calling uploadSampleV3.");
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", []);
        }

        const consumes: runtime.Consume[] = [{ contentType: "multipart/form-data" }, { contentType: "application/octet-stream" }];
        // @ts-ignore: canConsumeForm may be unused
        const canConsumeForm = runtime.canConsumeForm(consumes);

        let formParams: { append(param: string, value: any): any };
        let useForm = false;
        // use FormData to transmit files using content-type "multipart/form-data"
        useForm = canConsumeForm;
        if (useForm) {
            formParams = new FormData();
        } else {
            formParams = new URLSearchParams();
        }

        if (requestParameters.sample !== undefined) {
            formParams.append("sample", requestParameters.sample as any);
        }

        if (requestParameters.fileName !== undefined) {
            formParams.append("file_name", requestParameters.fileName as any);
        }

        if (requestParameters.comment !== undefined) {
            formParams.append("comment", requestParameters.comment as any);
        }

        if (requestParameters.isConfidential !== undefined) {
            formParams.append("is_confidential", requestParameters.isConfidential as any);
        }

        const response = await this.request(
            {
                path: `/samples/entities/samples/v3`,
                method: "POST",
                headers: headerParameters,
                query: queryParameters,
                body: formParams,
            },
            initOverrides,
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => ClientSampleMetadataResponseV2FromJSON(jsonValue));
    }

    /**
     * Upload a file for further cloud analysis. After uploading, call the specific analysis API endpoint.
     */
    async uploadSampleV3(
        sample: Blob,
        fileName: string,
        comment?: string,
        isConfidential?: boolean,
        initOverrides?: RequestInit | runtime.InitOverrideFunction,
    ): Promise<ClientSampleMetadataResponseV2> {
        const response = await this.uploadSampleV3Raw({ sample: sample, fileName: fileName, comment: comment, isConfidential: isConfidential }, initOverrides);
        return await response.value();
    }
}
