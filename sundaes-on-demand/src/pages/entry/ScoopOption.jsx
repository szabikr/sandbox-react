import { useState } from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Form from 'react-bootstrap/Form'
import { useOrderDetails } from '../../contexts/OrderDetails'

export default function ScoopOption({ name, imagePath }) {
  const { updateItemCount } = useOrderDetails()
  const [isInvalid, setIsInvalid] = useState(false)
  const handleChange = (e) => {
    const scoopCount = parseFloat(e.target.value)
    const valueIsInvalid =
      scoopCount < 0 || scoopCount > 10 || Math.floor(scoopCount) !== scoopCount
    setIsInvalid(valueIsInvalid)

    const newItemCount = valueIsInvalid ? 0 : parseInt(e.target.value)
    updateItemCount(name, newItemCount, 'scoops')
  }

  return (
    <Col xs={12} sm={6} md={4} lg={3} style={{ textAlign: 'center' }}>
      <img
        style={{ width: '75%' }}
        src={`http://localhost:3030/${imagePath}`}
        alt={`${name} scoop`}
      />
      <Form.Group
        controlId={`${name}-count`}
        as={Row}
        style={{ marginTop: '12px' }}
      >
        <Form.Label column xs="6" style={{ textAlign: 'right' }}>
          {name}
        </Form.Label>
        <Col xs="5" style={{ textAlign: 'left' }}>
          <Form.Control
            type="number"
            defaultValue={0}
            onChange={handleChange}
            isInvalid={isInvalid}
          />
        </Col>
      </Form.Group>
    </Col>
  )
}
