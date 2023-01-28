import axios from 'axios'
import Button from 'react-bootstrap/Button'
import { useState, useEffect } from 'react'
import { useOrderDetails } from '../../contexts/OrderDetails'
import AlertBanner from '../common/AlertBanner'

export default function OrderConfirmation({ setOrderPhase }) {
  const [orderNumber, setOrderNumber] = useState(null)
  const [error, setError] = useState(false)
  const { resetOrder } = useOrderDetails()

  function handleCreateNewOrderClick() {
    resetOrder()
    setOrderPhase('inProgress')
  }

  useEffect(() => {
    axios
      .post('http://localhost:3030/order')
      .then((response) => setOrderNumber(response.data.orderNumber))
      .catch((error) => {
        setError(true)
      })
  }, [])

  if (orderNumber === null && !error) {
    return <div>Loading</div>
  }

  let content = null
  if (error) {
    content = <AlertBanner />
  } else {
    content = (
      <>
        <h1>Thank You!</h1>
        <h2>Your order number is: {orderNumber}</h2>
      </>
    )
  }

  return (
    <div style={{ textAlign: 'center' }}>
      {content}
      <Button variant="primary" onClick={handleCreateNewOrderClick}>
        Create New Order
      </Button>
    </div>
  )
}
