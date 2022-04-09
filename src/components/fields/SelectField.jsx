import { ErrorMessage, useField } from 'formik'

const SelectField = ({ label, className, children, ...props }) => {
    const [field] = useField(props)
    return (
        <div className="flex flex-col gap-y-2 w-full">
            {label && <label htmlFor={field.name}>{label}</label>}
            <select className={className} name={field.name} {...props} {...field}>
                {children}
            </select>
            <ErrorMessage
                className="text-red-500 font-bold text-sm"
                name={field.name}
                component="span"
            />
        </div>
    )
}

export default SelectField
