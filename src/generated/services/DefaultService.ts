/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Ticket } from '../models/Ticket';
import type { TicketRequest } from '../models/TicketRequest';
import type { User } from '../models/User';
import type { UserRequest } from '../models/UserRequest';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class DefaultService {

    /**
     * Get a list of users
     * @returns User OK
     * @throws ApiError
     */
    public static getUsers(): CancelablePromise<Array<User>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/users',
        });
    }

    /**
     * Create a new user
     * @param requestBody User information to create
     * @returns User Created
     * @throws ApiError
     */
    public static postUsers(
        requestBody: UserRequest,
    ): CancelablePromise<User> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/users',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Get a user by ID
     * @param userId
     * @returns User OK
     * @throws ApiError
     */
    public static getUsers1(
        userId: number,
    ): CancelablePromise<User> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/users/{userId}',
            path: {
                'userId': userId,
            },
            errors: {
                404: `User not found`,
            },
        });
    }

    /**
     * Update a user by ID
     * @param userId
     * @param requestBody User information to update
     * @returns User OK
     * @throws ApiError
     */
    public static putUsers(
        userId: number,
        requestBody: UserRequest,
    ): CancelablePromise<User> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/users/{userId}',
            path: {
                'userId': userId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                404: `User not found`,
            },
        });
    }

    /**
     * Delete a user by ID
     * @param userId
     * @returns void
     * @throws ApiError
     */
    public static deleteUsers(
        userId: number,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/users/{userId}',
            path: {
                'userId': userId,
            },
            errors: {
                404: `User not found`,
            },
        });
    }

    /**
     * Get a list of tickets
     * @returns Ticket OK
     * @throws ApiError
     */
    public static getTickets(): CancelablePromise<Array<Ticket>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/tickets',
        });
    }

    /**
     * Create a new ticket
     * @param requestBody Ticket information to create
     * @returns Ticket Created
     * @throws ApiError
     */
    public static postTickets(
        requestBody: TicketRequest,
    ): CancelablePromise<Ticket> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/tickets',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Get a ticket by ID
     * @param ticketId
     * @returns Ticket OK
     * @throws ApiError
     */
    public static getTickets1(
        ticketId: number,
    ): CancelablePromise<Ticket> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/tickets/{ticketId}',
            path: {
                'ticketId': ticketId,
            },
            errors: {
                404: `Ticket not found`,
            },
        });
    }

    /**
     * Update a ticket
     * @param ticketId
     * @param requestBody Ticket information to update
     * @returns Ticket OK
     * @throws ApiError
     */
    public static putTickets(
        ticketId: number,
        requestBody: TicketRequest,
    ): CancelablePromise<Ticket> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/tickets/{ticketId}',
            path: {
                'ticketId': ticketId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                404: `Ticket not found`,
            },
        });
    }

    /**
     * Delete a ticket
     * @param ticketId
     * @returns void
     * @throws ApiError
     */
    public static deleteTickets(
        ticketId: number,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/tickets/{ticketId}',
            path: {
                'ticketId': ticketId,
            },
        });
    }

}
