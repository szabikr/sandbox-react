import { render, screen } from '../../../test-utils/testing-library-utils'
import userEvent from '@testing-library/user-event'
import Options from '../Options'
import OrderEntry from '../OrderEntry'

test('updates scoop subtotal when scoops change', async () => {
  const user = userEvent.setup()
  render(<Options optionType="scoops" />)

  // make sure total starts out at $0.00
  const scoopsSubtotal = screen.getByText('Scoops total: $', { exact: false })
  expect(scoopsSubtotal).toHaveTextContent('0.00')

  // update vanilla scoops to 1, and check subtotal
  const vanillaInput = await screen.findByRole('spinbutton', {
    name: 'Vanilla',
  })

  await user.clear(vanillaInput)
  await user.type(vanillaInput, '1')
  expect(scoopsSubtotal).toHaveTextContent('2.00')

  // update chocolate scoops to 2, and cehck subtotal
  const chocolateInput = await screen.findByRole('spinbutton', {
    name: 'Chocolate',
  })

  await user.clear(chocolateInput)
  await user.type(chocolateInput, '2')
  expect(scoopsSubtotal).toHaveTextContent('6.00')
})

test('updates toppings subtotal as toppings are selected', async () => {
  const user = userEvent.setup()
  render(<Options optionType="toppings" />)

  // make sure that subtotal starts at $0.00
  const toppingsSubtotal = screen.getByText('Toppings total: $', {
    exact: false,
  })
  expect(toppingsSubtotal).toHaveTextContent('0.00')

  // add cherries and check subtotal
  const cherriesCheckbox = await screen.findByRole('checkbox', {
    name: 'Cherries',
  })
  await user.click(cherriesCheckbox)
  expect(toppingsSubtotal).toHaveTextContent('1.50')

  // add hot fugde and check subtotal
  const hotFudgeCheckbox = await screen.findByRole('checkbox', {
    name: 'Hot fudge',
  })
  await user.click(hotFudgeCheckbox)
  expect(toppingsSubtotal).toHaveTextContent('3.00')

  // remove hot fudge and check subtotal
  await user.click(hotFudgeCheckbox)
  expect(toppingsSubtotal).toHaveTextContent('1.50')
})

describe('grand total', () => {
  test('grand total starts at $0.00', () => {
    const { unmount } = render(<OrderEntry />)
    const grandTotal = screen.getByRole('heading', { name: /grand total: \$/i })
    expect(grandTotal).toHaveTextContent('0.00')

    unmount()
  })

  test('grand total updates properly if scoop is added first', async () => {
    const user = userEvent.setup()
    render(<OrderEntry />)

    const grandTotal = screen.getByRole('heading', { name: /grand total: \$/i })

    // add vanilla scoop and check grand total
    const scoopInput = await screen.findByRole('spinbutton', {
      name: 'Vanilla',
    })
    await user.clear(scoopInput)
    await user.type(scoopInput, '1')

    expect(grandTotal).toHaveTextContent('2.00')

    // add cherries topping and check grand total
    const toppingInput = await screen.findByRole('checkbox', {
      name: 'Cherries',
    })
    await user.click(toppingInput)

    expect(grandTotal).toHaveTextContent('3.50')
  })

  test('grand total updates properly if topping is added first', async () => {
    const user = userEvent.setup()
    render(<OrderEntry />)

    const grandTotal = screen.getByRole('heading', { name: /grand total: \$/i })

    // add cherries topping and check grand total
    const toppingCheckbox = await screen.findByRole('checkbox', {
      name: 'Cherries',
    })
    await user.click(toppingCheckbox)

    expect(grandTotal).toHaveTextContent('1.50')

    // add vanilla scoops and check grand total
    const scoopInput = await screen.findByRole('spinbutton', {
      name: 'Vanilla',
    })
    await user.clear(scoopInput)
    await user.type(scoopInput, '2')

    expect(grandTotal).toHaveTextContent('5.50')
  })

  test('grand total updates properly if item is removed', async () => {
    const user = userEvent.setup()
    render(<OrderEntry />)

    const grandTotal = screen.getByRole('heading', { name: /grand total: \$/i })

    // add our scoops
    const chocolateScoopInput = await screen.findByRole('spinbutton', {
      name: 'Chocolate',
    })
    await user.clear(chocolateScoopInput)
    await user.type(chocolateScoopInput, '2')

    const vanillaScoopInput = await screen.findByRole('spinbutton', {
      name: 'Vanilla',
    })
    await user.clear(vanillaScoopInput)
    await user.type(vanillaScoopInput, '1')

    // add our toppings
    const cherriesToppingCheckbox = await screen.findByRole('checkbox', {
      name: 'Cherries',
    })
    await user.click(cherriesToppingCheckbox)

    const hotFudgeCheckbox = await screen.findByRole('checkbox', {
      name: 'Hot fudge',
    })
    await user.click(hotFudgeCheckbox)

    // check grand total
    expect(grandTotal).toHaveTextContent('9.00')

    // remove some scoops and toppings
    await user.clear(chocolateScoopInput)
    await user.type(chocolateScoopInput, '1')

    await user.click(hotFudgeCheckbox)

    expect(grandTotal).toHaveTextContent('5.50')
  })
})
