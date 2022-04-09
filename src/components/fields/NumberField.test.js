import { render, screen } from '@testing-library/react'
import { useField, ErrorMessage } from 'formik'
import NumberField from './NumberField'

jest.mock('formik')

describe('<NumberField />', () => {
    const mockProps = {
        id: 'mockNumberField',
        label: 'Mock Number Field',
        name: 'mockNumberField',
        currencySymbol: 'S/.',
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

    it('should render label and input number', async () => {
        render(<NumberField {...mockProps} />)

        screen.getByText(mockProps.label)

        screen.getByLabelText(mockProps.label)

        screen.getByText('S/.')
    })
})
