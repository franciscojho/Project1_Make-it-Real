import { ErrorMessage, useField } from 'formik'

const SelectField = ({ label, className, ...props }) => {
    const [field] = useField(props)
    return (
        <div className="flex flex-col gap-y-2 w-full">
            <label htmlFor={props.name}>{label}</label>
            <select className={className} {...field} {...props} />
            <ErrorMessage
                className="text-red-500 font-bold text-sm"
                name={props.name}
                component="span"
            />
        </div>
    )
}

export default SelectField
