/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import { OpenAPI } from './core/OpenAPI';
import { request as __request } from './core/request';
import type { CancelablePromise } from "./core/CancelablePromise"
import {
    type CreateUserApiV1AuthRegisterPostData,
    type Token,
    type TokenApiV1AuthTokenPostData, User
} from './types.gen.ts'

export class AuthService {
    /**
     * Token
     * @returns Token Successful Response
     * @throws ApiError
     * @param data
     */
    public static tokenApiV1AuthTokenPost(
        data: TokenApiV1AuthTokenPostData,
    ): CancelablePromise<Token> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/auth/token',
            formData: data.body,
            mediaType: 'application/x-www-form-urlencoded',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Create User
     * @returns any Successful Response
     * @throws ApiError
     * @param data
     */
    public static createUserApiV1AuthRegisterPost(
        data: CreateUserApiV1AuthRegisterPostData,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/auth/register',
            body: data.body,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Read Current User
     * @returns any Successful Response
     * @throws ApiError
     */
    public static readCurrentUserApiV1AuthReadCurrentUserGet(): CancelablePromise<User> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/auth/read_current_user',
        });
    }
    /**
     * Get All Users
     * @returns any Successful Response
     * @throws ApiError
     */
    public static getAllUsersApiV1AuthReadAllUsersGet(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/auth/read_all_users',
        });
    }
    /**
     * Testing
     * @param username
     * @returns any Successful Response
     * @throws ApiError
     */
    public static testingApiV1AuthMeUsernameGet(
        username: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/auth/me/{username}',
            path: {
                'username': username,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
}

export class ChartService {
    /**
     * Index
     * @param host
     * @returns any Successful Response
     * @throws ApiError
     */
    public static indexApiV1ChartsHostGet(
        host: any,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/charts/{host}',
            path: {
                'host': host,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Chart Data
     * @param host
     * @returns any Successful Response
     * @throws ApiError
     */
    public static chartDataApiV1ChartsHostChartDataGet(
        host: any,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/charts/{host}/chart-data',
            path: {
                'host': host,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
}

export class DefaultService {
    /**
     * Welcome
     * @returns any Successful Response
     * @throws ApiError
     */
    public static welcomeGet(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/',
        });
    }
}

export class PagesService {
    /**
     * Login
     * @returns any Successful Response
     * @throws ApiError
     */
    public static loginApiV1LoginGet(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/login',
        });
    }
    /**
     * Profile
     * @returns any Successful Response
     * @throws ApiError
     */
    public static profileApiV1ProfileGet(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/profile',
        });
    }
    /**
     * Profile
     * @returns any Successful Response
     * @throws ApiError
     */
    public static profileApiV1DashboardGet(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/dashboard',
        });
    }
}
