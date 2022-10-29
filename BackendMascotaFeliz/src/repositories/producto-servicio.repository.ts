import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MascotadbDataSource} from '../datasources';
import {ProductoServicio, ProductoServicioRelations} from '../models';

export class ProductoServicioRepository extends DefaultCrudRepository<
  ProductoServicio,
  typeof ProductoServicio.prototype.id,
  ProductoServicioRelations
> {
  constructor(
    @inject('datasources.mascotadb') dataSource: MascotadbDataSource,
  ) {
    super(ProductoServicio, dataSource);
  }
}
