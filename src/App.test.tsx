/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable indent */
/* eslint-disable no-undef */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable semi */
import { fireEvent, render, screen } from '@testing-library/react'
import App from './App'

test('Should show hide logo when button is toggled', () => {
    // Renders the application
    render(<App />)

    // Grabs logo element and checks if it is in the DOM
    const logoImg = screen.queryByAltText('logo')
    expect(logoImg).toBeInTheDocument()

    // Grabs button element, checks if it is in the DOM, and clicks on it
    const toggleButton = screen.getByText('Click me')
    expect(toggleButton).toBeInTheDocument()
    fireEvent.click(toggleButton)

    // Checks that logo element is NOT in the DOM after button is clicked
    expect(logoImg).not.toBeInTheDocument()
})
