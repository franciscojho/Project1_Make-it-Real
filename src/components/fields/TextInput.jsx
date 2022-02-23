import { ErrorMessage, useField } from 'formik'

const TextInput = ({ label, wrapperStyles, errorStyles, ...props }) => {
    const [field] = useField(props)
    const { value, ...rest } = field

    return (
        <div className={wrapperStyles}>
            <label htmlFor={props.id || props.name}>{label}</label>
            <input {...rest} {...props} />
            <ErrorMessage className={errorStyles} name={props.name} component="span" />
        </div>
    )
}

export default TextInput
