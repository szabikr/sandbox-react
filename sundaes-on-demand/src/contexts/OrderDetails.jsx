import { createContext, useContext, useState } from 'react'
import { pricePerItem } from '../constants'

const OrderDetails = createContext()

// create custom hook to check wether we're in a provider
export function useOrderDetails() {
  const context = useContext(OrderDetails)

  if (!context) {
    throw new Error(
      'useOrderDetails must be called from within an OrderDetailsProvider',
    )
  }

  return context
}

export function OrderDetailsProvider(props) {
  const [optionCounts, setOptionCounts] = useState({
    scoops: {}, // example: { chocolate: 1, vanilla: 2 }
    toppings: {}, // example: { "Gummi Bears": 1 }
  })

  function updateItemCount(itemName, newItemCount, optionType) {
    // make a copy of existing state
    const newOptionCounts = { ...optionCounts }

    // update the copy with the new information
    newOptionCounts[optionType][itemName] = newItemCount

    // update the state with the updated copy
    setOptionCounts(newOptionCounts)
  }

  function resetOrder() {
    setOptionCounts({ scoops: {}, toppings: {} })
  }

  // utility function to derive totals from optionCounts state value
  function calculateTotal(optionType) {
    // get an array of counts for the option type (for example, [1, 2])
    const counts = Object.values(optionCounts[optionType])

    // total the values in the array of counts for the number of items
    const totalCount = counts.reduce((count, acc) => acc + count, 0)

    // multiply the total number of items by the price for this item type
    return totalCount * pricePerItem[optionType]
  }

  const totals = {
    scoops: calculateTotal('scoops'),
    toppings: calculateTotal('toppings'),
  }

  const value = { optionCounts, totals, updateItemCount, resetOrder }
  return <OrderDetails.Provider value={value} {...props} />
}
