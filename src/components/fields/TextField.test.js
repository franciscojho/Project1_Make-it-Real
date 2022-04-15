import { render, screen } from '@testing-library/react'
import { useField, ErrorMessage } from 'formik'
import TextField from './TextField'

jest.mock('formik')

describe('<TextField />', () => {
    const mockProps = {
        id: 'mockTextField',
        label: 'Mock TextField Field',
        name: 'mockTextField',
    }

    beforeEach(() => {
        const mockField = {
            value: '',
            onClick: jest.fn(),
            onChange: jest.fn(),
            name: mockProps.name,
        }

        useField.mockReturnValue([mockField])

        ErrorMessage.mockReturnValue(mockField.name)
    })

    it('should render label and input select', async () => {
        render(<TextField {...mockProps} />)

        screen.getByText(mockProps.label)

        screen.getByLabelText(mockProps.label)
    })
})
