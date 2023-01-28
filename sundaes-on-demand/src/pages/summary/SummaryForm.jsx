import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Popover from 'react-bootstrap/Popover'

export default function SummaryForm({ setOrderPhase }) {
  const [tcChecked, setTcChecked] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setOrderPhase('completed')
  }

  const popover = (
    <Popover id="no-icecream-popover">
      <Popover.Body>No ice cream will actually be delivered</Popover.Body>
    </Popover>
  )

  const checkboxLabel = (
    <span>
      I agree to{' '}
      <OverlayTrigger
        trigger={['hover', 'focus']}
        placement="right"
        overlay={popover}
      >
        <span style={{ color: 'blue' }}>Terms and Conditions</span>
      </OverlayTrigger>
    </span>
  )

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="terms-and-conditions">
        <Form.Check
          type="checkbox"
          checked={tcChecked}
          onChange={(e) => setTcChecked(e.target.checked)}
          label={checkboxLabel}
        />
      </Form.Group>
      <Button variant="primary" type="submit" disabled={!tcChecked}>
        Confirm order
      </Button>
    </Form>
  )
}
