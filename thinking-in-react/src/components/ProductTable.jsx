function ProductCategoryRow({ category }) {
  return (
    <tr style={{ textAlign: 'center' }}>
      <td colSpan="2">
        <b>{category}</b>
      </td>
    </tr>
  )
}

function ProductRow({ product }) {
  const name = product.stocked ? (
    product.name
  ) : (
    <span style={{ color: 'red' }}>{product.name}</span>
  )
  return (
    <tr>
      <td>{name}</td>
      <td>{product.price}</td>
    </tr>
  )
}

export default function ProductTable({ products, filterText, inStockOnly }) {
  let rows = []
  let lastCategory = null

  products.forEach((product) => {
    if (product.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
      return
    }

    if (inStockOnly && !product.stocked) {
      return
    }

    if (lastCategory != product.category) {
      rows.push(
        <ProductCategoryRow
          key={product.category}
          category={product.category}
        />,
      )
    }
    rows.push(<ProductRow key={product.name} product={product} />)
    lastCategory = product.category
  })

  return (
    <table>
      <thead>
        <tr style={{ textAlign: 'center' }}>
          <td>
            <b>Name</b>
          </td>
          <td>
            <b>Price</b>
          </td>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  )
}
