import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import { formatCurrency } from '../../utilities'
import Options from './Options'
import { useOrderDetails } from '../../contexts/OrderDetails'

export default function OrderEntry({ setOrderPhase }) {
  const { totals } = useOrderDetails()
  const orderDisabled = totals.scoops === 0

  return (
    <div>
      <h1>Design Your Sundae!</h1>
      <Options optionType="scoops" />
      <Options optionType="toppings" />
      <h2>Grand Total: {formatCurrency(totals.scoops + totals.toppings)}</h2>
      <Row>
        <Button
          variant="primary"
          onClick={() => setOrderPhase('review')}
          disabled={orderDisabled}
        >
          Order Sundae
        </Button>
      </Row>
    </div>
  )
}
