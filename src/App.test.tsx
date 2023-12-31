import { render, screen } from '@testing-library/react'
import App from './App'

describe('App tests', () => {
  it('should have the title visible', () => {
    render(<App />)
    expect(screen.getByText(/Calendar example/i)).toBeInTheDocument()
  })
})
