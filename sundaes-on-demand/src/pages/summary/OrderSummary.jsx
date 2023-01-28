import React from 'react'
import SummaryForm from './SummaryForm'
import { useOrderDetails } from '../../contexts/OrderDetails'
import { formatCurrency } from '../../utilities'

export default function OrderSummary({ setOrderPhase }) {
  const { totals, optionCounts } = useOrderDetails()

  const scoops = Object.entries(optionCounts.scoops).map(([key, value]) => (
    <li key={key}>
      {value} {key}
    </li>
  ))

  let toppingsComponent = null
  if (totals.toppings > 0) {
    const toppings = Object.keys(optionCounts.toppings).map((key) => (
      <li key={key}>{key}</li>
    ))
    toppingsComponent = (
      <>
        <h2>Toppings: {formatCurrency(totals.toppings)}</h2>
        <ul>{toppings}</ul>
      </>
    )
  }

  return (
    <div>
      <h1>Order Summary</h1>
      <h2>Scoops: {formatCurrency(totals.scoops)}</h2>
      <ul>{scoops}</ul>
      {toppingsComponent}
      <h2>Total: {formatCurrency(totals.scoops + totals.toppings)}</h2>
      <SummaryForm setOrderPhase={setOrderPhase} />
    </div>
  )
}
