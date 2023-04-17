import { DefaultCrudRepository } from '@loopback/repository';
import { MongoDataSource } from '../datasources';
import { Customer, CustomerRelations } from '../models';
export declare class CustomerRepository extends DefaultCrudRepository<Customer, typeof Customer.prototype.id, CustomerRelations> {
    constructor(dataSource: MongoDataSource);
}
