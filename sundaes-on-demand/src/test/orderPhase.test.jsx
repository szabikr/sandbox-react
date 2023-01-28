import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import App from '../App'

test('order phases for happy path', async () => {
  const user = userEvent.setup()
  const { unmount } = render(<App />)

  // add ice cream scoops and toppings
  const scoopInput = await screen.findByRole('spinbutton', {
    name: 'Chocolate',
  })
  await user.clear(scoopInput)
  await user.type(scoopInput, '1')

  const toppingsInput = await screen.findByRole('checkbox', {
    name: 'Cherries',
  })
  await user.click(toppingsInput)

  // find and click order button
  const orderButton = screen.getByRole('button', { name: /order sundae/i })
  await user.click(orderButton)

  // check summary information based on order
  const summaryHeading = screen.getByRole('heading', { name: 'Order Summary' })
  expect(summaryHeading).toBeInTheDocument()

  const scoopsHeading = screen.getByRole('heading', { name: 'Scoops: $2.00' })
  expect(scoopsHeading).toBeInTheDocument()

  const chocolateListitem = screen
    .getAllByRole('listitem')
    .find((listitem) => listitem.textContent.includes('Chocolate'))
  expect(chocolateListitem).toHaveTextContent('1')

  const toppingsHeading = screen.getByRole('heading', {
    name: 'Toppings: $1.50',
  })
  expect(toppingsHeading).toHaveTextContent('1.5')

  const cherriesListItem = screen
    .getAllByRole('listitem')
    .find((listitem) => listitem.textContent.includes('Cherries'))
  expect(cherriesListItem).toBeInTheDocument()

  // accept terms and conditions and click button to confirm order
  const tcCheckbox = screen.getByRole('checkbox', {
    name: /terms and conditions/i,
  })
  await user.click(tcCheckbox)

  const confirmOrderButton = screen.getByRole('button', {
    name: /confirm order/i,
  })
  await user.click(confirmOrderButton)

  const loading = screen.getByText(/loading/i)
  expect(loading).toBeInTheDocument()

  // confirm order number on confirmation page
  const thankYouHeading = await screen.findByRole('heading', {
    name: /thank you/i,
  })
  expect(thankYouHeading).toBeInTheDocument()

  // expect that loading has disappeared
  const notLoading = screen.queryByText(/loading/i)
  expect(notLoading).not.toBeInTheDocument()

  const orderNumberHeading = await screen.findByRole('heading', {
    name: /your order number is:/i,
  })
  expect(orderNumberHeading).toHaveTextContent('6606097513')

  // click new order button on confirmation page
  const newOrderButton = screen.getByRole('button', {
    name: /create new order/i,
  })
  await user.click(newOrderButton)

  // check that scoops and toppings subtotal have been reset
  const scoopSubtotal = screen.getByText('Scoops total: $', { exact: false })
  expect(scoopSubtotal).toHaveTextContent('0.00')

  const toppingSubtotal = screen.getByText('Toppings total: $', {
    exact: false,
  })
  expect(toppingSubtotal).toHaveTextContent('0.00')

  // unmount the component to trigger cleanup and avoid
  //    "not wrapped in act()" error
  unmount()
})

test('conditional toppings section on summary page', async () => {
  const user = userEvent.setup()
  render(<App />)

  const chocolateInput = await screen.findByRole('spinbutton', {
    name: 'Chocolate',
  })
  await user.clear(chocolateInput)
  await user.type(chocolateInput, '2')

  const orderButton = screen.getByRole('button', /order sundae/i)
  await user.click(orderButton)

  const scoopsHeading = screen.getByRole('heading', { name: /scoops: \$4.00/i })
  expect(scoopsHeading).toBeInTheDocument()

  const toppingsHeading = screen.queryByText('Toppings', { exact: false })
  expect(toppingsHeading).not.toBeInTheDocument()

  // const toppingsHeading2 = screen.queryByRole('heading', { name: /toppings:/i })
  // expect(toppingsHeading2).not.toBeInTheDocument()

  const totalHeader = screen.getByRole('heading', { name: /total: \$/i })
  expect(totalHeader).toHaveTextContent('4.00')
})

test('toppings are not on summary page when they were added then removed', async () => {
  const user = userEvent.setup()
  render(<App />)

  const vanillaInput = await screen.findByRole('spinbutton', {
    name: 'Vanilla',
  })
  await user.clear(vanillaInput)
  await user.type(vanillaInput, '1')

  const cherriesInput = await screen.findByRole('checkbox', {
    name: 'Cherries',
  })
  await user.click(cherriesInput)
  await user.click(cherriesInput)

  const orderButton = screen.getByRole('button', { name: /order sundae/i })
  await user.click(orderButton)

  const scoopsHeading = screen.getByRole('heading', { name: /scoops: \$2.00/i })
  expect(scoopsHeading).toBeInTheDocument()

  const toppingsHeading = screen.queryByRole('heading', { name: /toppings/i })
  expect(toppingsHeading).not.toBeInTheDocument()

  const totalHeading = screen.getByRole('heading', { name: /total: \$2.00/i })
  expect(totalHeading).toBeInTheDocument()
})
