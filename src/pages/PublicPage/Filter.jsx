import { Field, Form, useFormikContext } from 'formik'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { Button } from '../../components'

const Filter = () => {
    const { submitForm, setValues, values, initialValues } = useFormikContext()

    const handleChange = ({ target }) => {
        setValues({
            ...values,
            radioFilter: target.value,
        })
    }

    const handleDeleteFilters = () => {
        setValues(initialValues)
    }

    return (
        <Form
            className="px-8 pt-8 col-span-full md:border-none md:col-span-3"
            onChange={() => submitForm()}>
            <div className="border-secondary border-b-[1px] py-1">
                <h3 className="font-bold inline-block">Filtrar</h3>
                <Button
                    type="submit"
                    className="float-right font-bold max-w-[200px] mr-2 rounded text-secondary hover:opacity-70"
                    onClick={handleDeleteFilters}>
                    Limpiar filtros
                    <FontAwesomeIcon className="ml-2" icon={faTrash} />
                </Button>
            </div>
            <p className="mb-1 py-1 text-sm">Por rango de precio</p>
            <div
                className="border-b-4 border-secondary flex flex-wrap gap-2 pb-8 text-sm md:border-none md:flex-col"
                role="group"
                aria-labelledby="radio-filter">
                <label className="flex items-center gap-2 flex-grow">
                    <Field
                        type="radio"
                        name="radioFilter"
                        value="$gt_199"
                        onChange={handleChange}
                    />
                    Arriba de S/.200.00
                </label>
                <label className="flex items-center gap-2 flex-grow">
                    <Field
                        type="radio"
                        name="radioFilter"
                        value="$gt_149|$lt_200"
                        onChange={handleChange}
                    />
                    De S/.150.00 a S/.199.99
                </label>
                <label className="flex items-center gap-2 flex-grow">
                    <Field
                        type="radio"
                        name="radioFilter"
                        value="$gt_99|$lt_150"
                        onChange={handleChange}
                    />
                    De S/.100.00 a S/.150
                </label>
                <label className="flex items-center gap-2 flex-grow">
                    <Field
                        type="radio"
                        name="radioFilter"
                        value="$lt_100"
                        onChange={handleChange}
                    />
                    Menos a S/.100.00
                </label>
            </div>
        </Form>
    )
}

export default Filter
