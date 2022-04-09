import { render, screen } from '@testing-library/react'
import { useField, ErrorMessage } from 'formik'
import DateField from './DateField'

jest.mock('formik')

describe('<DateField />', () => {
    const mockProps = {
        id: 'mockDateField',
        label: 'Mock Date Field',
        name: 'mockDateField',
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

    it('should render label and input date', async () => {
        render(<DateField {...mockProps} />)

        screen.getByText(mockProps.label)

        screen.getByLabelText(mockProps.label)
    })
})
