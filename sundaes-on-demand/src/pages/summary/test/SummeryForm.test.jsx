import { render, screen, logRoles } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import SummaryForm from '../SummaryForm'

test('getRoles', () => {
  const { container } = render(<SummaryForm />)
  logRoles(container)
})

test('t&c checkbox is unchecked and button disabled by default', () => {
  render(<SummaryForm />)
  const checkbox = screen.getByRole('checkbox', {
    name: /terms and conditions/i,
  })
  expect(checkbox).not.toBeChecked()

  const button = screen.getByRole('button', { name: /confirm order/i })
  expect(button).toBeDisabled()
})

test('t&c checkbox enables button then unchecking disables', async () => {
  const user = userEvent.setup()
  render(<SummaryForm />)
  const checkbox = screen.getByRole('checkbox', {
    name: /terms and conditions/i,
  })
  const button = screen.getByRole('button', { name: /confirm order/i })

  await user.click(checkbox)
  expect(button).toBeEnabled()

  await user.click(checkbox)
  expect(button).toBeDisabled()
})

test('t&c popover responds to hover', async () => {
  const user = userEvent.setup()
  render(<SummaryForm />)

  // popover starts out hidden
  const nullPopover = screen.queryByText(
    /no ice cream will actually be delivered/i,
  )
  expect(nullPopover).not.toBeInTheDocument()

  // popever appears on mouseover of checkbox label
  const termsAndConditions = screen.getByText(/terms and conditions/i)
  await user.hover(termsAndConditions)
  const popover = screen.getByText(/no ice cream will actually be delivered/i)
  expect(popover).toBeInTheDocument()

  // popover disappears when we mouse out
  await user.unhover(termsAndConditions)
  expect(popover).not.toBeInTheDocument()
})
