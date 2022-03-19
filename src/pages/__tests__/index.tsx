import { render, screen } from '@testing-library/react'
import Home from '../.'

describe('Home', () => {
  it('renders a heading', () => {
    render(<Home />)

    const heading = screen.getByText('movie search app')

    expect(heading).toBeInTheDocument()
  })
})