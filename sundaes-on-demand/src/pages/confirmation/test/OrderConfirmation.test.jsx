import { rest } from 'msw'
import { render, screen } from '../../../test-utils/testing-library-utils'
import OrderConfirmation from '../OrderConfirmation'
import { server } from '../../../mocks/server'

test('loading is displayed while waiting for server response, then disappears', async () => {
  render(<OrderConfirmation setOrderPhase={jest.fn()} />)

  const loadingText = screen.getByText(/loading/i)
  expect(loadingText).toBeInTheDocument()

  const thankYouHeading = await screen.findByRole('heading', {
    name: /thank you/i,
  })
  expect(thankYouHeading).toBeInTheDocument()

  expect(screen.queryByText(/loading/i)).not.toBeInTheDocument()
})

test('handles server error when making the order request', async () => {
  server.resetHandlers([
    rest.post('http://localhost:3030/order', (req, res, ctx) => {
      return res(ctx.status(500))
    }),
  ])

  render(<OrderConfirmation setOrderPhase={jest.fn()} />)

  const alert = await screen.findByRole('alert')
  expect(alert).toHaveTextContent(
    'An unexpected error occurred. Please try again later.',
  )
})
