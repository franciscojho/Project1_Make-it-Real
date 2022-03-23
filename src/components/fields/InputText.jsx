import { ErrorMessage, useField } from 'formik'

const InputText = ({ label, className, ...props }) => {
    const [field] = useField(props)
    return (
        <>
            <label htmlFor={props.name}>{label}</label>
            <input className={className} {...field} {...props} />
            <ErrorMessage
                className="text-red-500 font-bold text-sm"
                name={props.name}
                component="span"
            />
        </>
    )
}

export default InputText
