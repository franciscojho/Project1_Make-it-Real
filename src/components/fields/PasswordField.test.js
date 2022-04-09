import { render, screen } from '@testing-library/react'
import { useField, ErrorMessage } from 'formik'
import PasswordField from './PasswordField'

jest.mock('formik')

describe('<PasswordField />', () => {
    const mockProps = {
        id: 'mockPasswordField',
        label: 'Mock Password Field',
        name: 'mockPasswordField',
    }

    beforeEach(() => {
        const mockField = {
            value: 'Password1!',
            onClick: jest.fn(),
            onChange: jest.fn(),
            name: mockProps.name,
        }

        useField.mockReturnValue([mockField])

        ErrorMessage.mockReturnValue(mockField.name)
    })

    it('should render label and input password', async () => {
        render(<PasswordField {...mockProps} />)

        screen.getByText(mockProps.label)

        screen.getByLabelText(mockProps.label)

        expect(screen.queryByDisplayValue('Password1!')).toBeNull()
    })
})
