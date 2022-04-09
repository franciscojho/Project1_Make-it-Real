import { render, screen } from '@testing-library/react'
import { useField, ErrorMessage } from 'formik'
import CheckboxField from './CheckboxField'

jest.mock('formik')

describe('<CheckboxField />', () => {
    const mockProps = {
        id: 'mockCheckboxField',
        label: 'Mock Checkbox Field',
        name: 'mockCheckboxField',
    }

    beforeEach(() => {
        const mockField = {
            value: '',
            checked: false,
            onClick: jest.fn(),
            onChange: jest.fn(),
            name: mockProps.name,
        }

        useField.mockReturnValue([mockField])

        ErrorMessage.mockReturnValue(mockField.name)
    })

    it('should render label and input checkbox', async () => {
        render(<CheckboxField {...mockProps} />)

        screen.getByText(mockProps.label)

        screen.getByLabelText(mockProps.label)
    })
})
