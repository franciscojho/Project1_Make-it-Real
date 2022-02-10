import { ErrorMessage, useField } from 'formik'

const TextInput = ({ label, ...props }) => {
    const [field] = useField(props)
    const { value, ...rest } = field

    return (
        <>
            <label htmlFor={props.id || props.name}>{label}</label>
            <input {...rest} {...props} />
            <ErrorMessage
                style={{
                    color: 'red',
                    fontWeight: 'bold',
                    fontSize: '0.8rem',
                }}
                name={props.name}
                component="span"
            />
        </>
    )
}

export default TextInput
