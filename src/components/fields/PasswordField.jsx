import { ErrorMessage, useField } from 'formik'

const PasswordField = ({ label, className, ...props }) => {
    const [field] = useField(props)
    const { value, ...rest } = field
    return (
        <div className="flex flex-col gap-y-2 w-full">
            {label && <label htmlFor={rest.name}>{label}</label>}
            <input className={className} {...props} {...rest} type="password" />
            <ErrorMessage
                className="text-red-500 font-bold text-sm"
                name={rest.name}
                component="span"
            />
        </div>
    )
}

export default PasswordField
