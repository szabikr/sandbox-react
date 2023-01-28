import {
  render,
  screen,
  waitFor,
} from '../../../test-utils/testing-library-utils'
import userEvent from '@testing-library/user-event'
import OrderEntry from '../OrderEntry'
import { rest } from 'msw'
import { server } from '../../../mocks/server'

test('handles error for scoops and topping routes', async () => {
  server.resetHandlers(
    rest.get('http://localhost:3030/scoops', (req, res, ctx) =>
      res(ctx.status(500)),
    ),
    rest.get('http://localhost:3030/toppings', (req, res, ctx) =>
      res(ctx.status(500)),
    ),
  )

  render(<OrderEntry setOrderPhase={jest.fn()} />)

  await waitFor(async () => {
    const alerts = await screen.findAllByRole('alert')
    expect(alerts).toHaveLength(2)
  })
})

test('order sundae button to be disabled when no scoops are added', async () => {
  const user = userEvent.setup()
  render(<OrderEntry setOrderPhase={jest.fn()} />)

  const orderButton = screen.getByRole('button', { name: /order sundae/i })
  expect(orderButton).toBeDisabled()

  const chocolateInput = await screen.findByRole('spinbutton', {
    name: 'Chocolate',
  })

  await user.clear(chocolateInput)
  await user.type(chocolateInput, '1')
  expect(orderButton).toBeEnabled()

  await user.clear(chocolateInput)
  await user.type(chocolateInput, '0')
  expect(orderButton).toBeDisabled()
})
