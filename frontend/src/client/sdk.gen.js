/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import { OpenAPI } from './core/OpenAPI';
import { request as __request } from './core/request';
export class AuthService {
    /**
     * Token
     * @returns Token Successful Response
     * @throws ApiError
     * @param data
     */
    static tokenApiV1AuthTokenPost(data) {
        return __request(OpenAPI, {
            method: 'POST',
            url: 'http://localhost:8000/api/v1/auth/token',
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
    static createUserApiV1AuthRegisterPost(data) {
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
    static readCurrentUserApiV1AuthReadCurrentUserGet() {
        return __request(OpenAPI, {
            method: 'GET',
            url: 'http://localhost:8000/api/v1/auth/read_current_user',
        });
    }
    /**
     * Get All Users
     * @returns any Successful Response
     * @throws ApiError
     */
    static getAllUsersApiV1AuthReadAllUsersGet() {
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
    static testingApiV1AuthMeUsernameGet(username) {
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
    static indexApiV1ChartsHostGet(host) {
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
    static chartDataApiV1ChartsHostChartDataGet(host) {
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
    static welcomeGet() {
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
    static loginApiV1LoginGet() {
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
    static profileApiV1ProfileGet() {
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
    static profileApiV1DashboardGet() {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/dashboard',
        });
    }
}
