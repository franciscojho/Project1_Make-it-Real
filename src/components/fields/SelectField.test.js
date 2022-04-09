import { render, screen } from '@testing-library/react'
import { useField, ErrorMessage } from 'formik'
import SelectField from './SelectField'

jest.mock('formik')

describe('<SelectField />', () => {
    const mockProps = {
        id: 'mockSelectField',
        label: 'Mock SelectField Field',
        name: 'mockSelectField',
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
        render(
            <SelectField {...mockProps}>
                <option value="mock">Mock</option>
            </SelectField>
        )

        screen.getByText(mockProps.label)

        screen.getByLabelText(mockProps.label)

        expect(screen.queryByDisplayValue('Mock')).not.toBeNull()
    })
})
