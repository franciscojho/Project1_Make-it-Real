import { ErrorMessage, useField } from 'formik'

const TextField = ({ label, className, type, ...props }) => {
    const [field] = useField(props)
    return (
        <div className="flex flex-col gap-y-2 w-full">
            {label && <label htmlFor={field.name}>{label}</label>}
            <input className={className} {...props} {...field} type="text" />
            <ErrorMessage
                className="text-red-500 font-bold text-sm"
                name={field.name}
                component="span"
            />
        </div>
    )
}

export default TextField
