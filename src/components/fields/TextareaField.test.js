import { render, screen } from '@testing-library/react'
import { useField, ErrorMessage } from 'formik'
import TextareaField from './TextareaField'

jest.mock('formik')

describe('<TextareaField />', () => {
    const mockProps = {
        id: 'mockTextareaField',
        label: 'Mock TextareaField Field',
        name: 'mockTextareaField',
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
        render(<TextareaField {...mockProps} />)

        screen.getByText(mockProps.label)

        screen.getByLabelText(mockProps.label)
    })
})
