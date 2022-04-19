import { ErrorMessage, useField } from 'formik'

const Wrapper = ({ condition, children }) =>
    condition ? <div className="flex flex-col gap-y-2 w-full">{children}</div> : children

const CheckboxField = ({ label, className, setWrapper, ...props }) => {
    const [field] = useField(props)
    return (
        <Wrapper condition={setWrapper}>
            {label && <label htmlFor={field.name}>{label}</label>}
            <input className={className} {...props} {...field} type="checkbox" />
            <ErrorMessage
                className="text-red-500 font-bold text-sm"
                name={field.name}
                component="span"
            />
        </Wrapper>
    )
}

export default CheckboxField
