import { Form, Formik } from 'formik'
import { createSearchParams, useNavigate } from 'react-router-dom'
import { SelectField } from '../../components'

const DashFilter = () => {
    const navigate = useNavigate()

    const handleChangeFilter = ({ target }) => {
        const { value } = target
        const criteria = createSearchParams({
            ...(value && { filter: value }),
        }).toString()
        navigate({
            pathname: '/dashboard',
            search: criteria,
        })
    }

    return (
        <Formik initialValues={{ filter: '' }}>
            {() => (
                <Form className="flex flex-col gap-2" onChange={handleChangeFilter}>
                    <div className="flex items-center gap-2">
                        <p>Filtro</p>
                        <SelectField className="border-[1px] py-1 px-2 rounded w-1/2" name="filter">
                            <option value="all">Todos</option>
                            <option value="active">Activos</option>
                            <option value="expired">Expirados</option>
                        </SelectField>
                    </div>

                    <hr />
                </Form>
            )}
        </Formik>
    )
}

export default DashFilter
