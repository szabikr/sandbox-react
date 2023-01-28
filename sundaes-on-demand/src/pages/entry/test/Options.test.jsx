import { render, screen } from '../../../test-utils/testing-library-utils'
import userEvent from '@testing-library/user-event'
import Options from '../Options'

test('display image for each scoop option from the server', async () => {
  render(<Options optionType="scoops" />)
  const scoopImages = await screen.findAllByRole('img', { name: /scoop$/i })
  expect(scoopImages).toHaveLength(2)

  const altText = scoopImages.map((element) => element.alt)
  expect(altText).toEqual(['Chocolate scoop', 'Vanilla scoop'])
})

test('display image for each topping option from the server', async () => {
  render(<Options optionType="toppings" />)
  const toppingImages = await screen.findAllByRole('img', { name: /topping$/i })
  expect(toppingImages).toHaveLength(3)

  const altText = toppingImages.map((element) => element.alt)
  expect(altText).toEqual([
    'Cherries topping',
    'M&Ms topping',
    'Hot fudge topping',
  ])
})

test('invalid scoop inputs do not update scoop subtotal', async () => {
  const user = userEvent.setup()
  render(<Options optionType="scoops" />)

  const scoopSubtotal = screen.getByText('Scoops total: $', { exact: false })
  expect(scoopSubtotal).toHaveTextContent('0.00')

  const chocolateInput = await screen.findByRole('spinbutton', {
    name: 'Chocolate',
  })
  await user.clear(chocolateInput)
  await user.type(chocolateInput, '2')

  expect(scoopSubtotal).toHaveTextContent('4.00')

  const vanillaInput = await screen.findByRole('spinbutton', {
    name: 'Vanilla',
  })
  await user.clear(vanillaInput)
  await user.type(vanillaInput, '-2')

  expect(scoopSubtotal).toHaveTextContent('4.00')
})

test('invalid scoop input resets existing scoop subtotal', async () => {
  const user = userEvent.setup()
  render(<Options optionType="scoops" />)

  const chocolateInput = await screen.findByRole('spinbutton', {
    name: 'Chocolate',
  })
  await user.clear(chocolateInput)
  await user.type(chocolateInput, '2')

  const scoopSubtotal = screen.getByText('Scoops total: $', { exact: false })
  expect(scoopSubtotal).toHaveTextContent('4.00')

  // pick an invalid number and check subtotal
  await user.clear(chocolateInput)
  await user.type(chocolateInput, '-1')
  expect(scoopSubtotal).toHaveTextContent('0.00')
})
