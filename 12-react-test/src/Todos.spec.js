import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Todos from './Todos'

describe('Todos testing', () => {
  test('Add todo', () => {
    render(<Todos />)

    const firstTodo = 'First Todo'

    const input = screen.getByPlaceholderText(/todo/i)
    const button = screen.getByText(/add todo/i)

    fireEvent.change(input, { target: { value: firstTodo } })
    fireEvent.click(button)

    screen.getByText(firstTodo)
  })

  test('Add todo with user event', () => {
    render(<Todos />)

    const input = screen.getByPlaceholderText(/todo/i)
    const button = screen.getByText(/add todo/i)
    const list = screen.getByTestId('todo-list')

    const firstTodo = 'First Todo'

    userEvent.type(input, firstTodo)
    userEvent.click(button)

    screen.getByText(firstTodo)

    expect(list.childNodes.length).toBe(1)

    const secondTodo = 'Second todo'

    userEvent.type(input, secondTodo)
    userEvent.click(button)

    screen.getByText(secondTodo)

    expect(list.childNodes.length).toBe(2)

    userEvent.click(button)
    userEvent.click(button)
    userEvent.click(button)
    userEvent.click(button)

    expect(list.childNodes.length).toBe(2)
  })
})
