import React from 'react';
import classNames from 'classnames';

import { Product } from '../../types/Product';

type Props = {
  visibleProducts: Product[];
};

export const ProductTable: React.FC<Props> = (props) => {
  const { visibleProducts } = props;

  return (
    <table
      data-cy="ProductTable"
      className="table is-striped is-narrow is-fullwidth"
    >
      <thead>
        <tr>
          <th>
            <span className="is-flex is-flex-wrap-nowrap">
              ID
            </span>
          </th>

          <th>
            <span className="is-flex is-flex-wrap-nowrap">
              Product
            </span>
          </th>

          <th>
            <span className="is-flex is-flex-wrap-nowrap">
              Category
            </span>
          </th>

          <th>
            <span className="is-flex is-flex-wrap-nowrap">
              User
            </span>
          </th>
        </tr>
      </thead>

      <tbody>
        {visibleProducts.map(product => (
          <tr data-cy="Product" key={product.id}>
            <td className="has-text-weight-bold" data-cy="ProductId">
              {product.id}
            </td>

            <td data-cy="ProductName">
              {`${product?.icon} - ${product.name}`}
            </td>
            <td data-cy="ProductCategory">
              {product.category?.title}
            </td>

            <td
              data-cy="ProductUser"
              className={classNames(
                {
                  'has-text-link': product.user?.sex === 'm',
                  'has-text-danger': product.user?.sex === 'f',
                },
              )}
            >
              {product.user?.name}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};