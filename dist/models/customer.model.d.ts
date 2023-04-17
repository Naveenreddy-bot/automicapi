import { Entity } from '@loopback/repository';
export declare class Customer extends Entity {
    id?: string;
    firstname?: string;
    lastname?: string;
    email?: string;
    address?: string;
    constructor(data?: Partial<Customer>);
}
export interface CustomerRelations {
}
export type CustomerWithRelations = Customer & CustomerRelations;
