import { v4 as uuid } from 'uuid';

/**
 * Generate a random code
 * @returns random code
 */
export function getRandomCode() : string {
    return "123";
}

/**
 * Generate a random id
 * @returns random id uuid v4
 */
export function getRandomId(): string {
    return uuid();
}
