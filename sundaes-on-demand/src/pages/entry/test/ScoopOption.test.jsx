import { render, screen } from '../../../test-utils/testing-library-utils'
import userEvent from '@testing-library/user-event'
import ScoopOption from '../ScoopOption'

test('scoops input has to be a integer between 0 and 10', async () => {
  const user = userEvent.setup()
  render(<ScoopOption name="Chocolate" imagePath="http://image.com" />)

  const scoopInput = screen.getByRole('spinbutton')

  expect(scoopInput).not.toHaveClass('is-invalid')

  await user.clear(scoopInput)
  await user.type(scoopInput, '-1')
  expect(scoopInput).toHaveClass('is-invalid')

  await user.clear(scoopInput)
  await user.type(scoopInput, '11')
  expect(scoopInput).toHaveClass('is-invalid')

  await user.clear(scoopInput)
  await user.type(scoopInput, '1.5')
  expect(scoopInput).toHaveClass('is-invalid')

  await user.clear(scoopInput)
  await user.type(scoopInput, '2')
  expect(scoopInput).not.toHaveClass('is-invalid')
})
