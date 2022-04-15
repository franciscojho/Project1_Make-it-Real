import { Form, useFormikContext } from 'formik'
import { NavLink } from 'react-router-dom'
import { ReactComponent as Logo } from '../../assets/logo.svg'
import { Button, SelectField } from '../../components'
import useUbigeo from '../../hooks/useUbigeo'

const Header = () => {
    const { submitForm } = useFormikContext()
    const { departments, provinces, districts } = useUbigeo()

    return (
        <header className="flex flex-col items-center bg-secondary row-span-3 col-span-full bg-cleaning-banner bg-cover">
            <nav className="flex items-center p-4 justify-between w-full">
                <Logo className="w-32 h-auto md:mb-2 fill-tertiary" />
                <ul>
                    <li>
                        <NavLink className="text-tertiary text-sm font-bold" to="/login">
                            QUIERO ANUNCIAR
                        </NavLink>
                    </li>
                </ul>
            </nav>
            <Form className="mt-6 p-8" onChange={() => submitForm()}>
                <h1 className="font-bold mb-6 text-center text-tertiary text-4xl">
                    Encuentra casas para limpiar cerca de ti
                </h1>
                <div>
                    <SelectField
                        className="py-1 px-2 my-1 border-gray-400 border-[1px] rounded-md"
                        name="department">
                        <option value="">Selecciona una opción</option>
                        {departments.map(({ code, name }) => (
                            <option key={code} value={code}>
                                {name}
                            </option>
                        ))}
                    </SelectField>
                    <SelectField
                        className="py-1 px-2 my-1 border-gray-400 border-[1px] rounded-md"
                        name="province">
                        <option value="">Selecciona una opción</option>
                        {provinces.map(({ code, name }) => (
                            <option key={code} value={code}>
                                {name}
                            </option>
                        ))}
                    </SelectField>
                    <SelectField
                        className="py-1 px-2 my-1 border-gray-400 border-[1px] rounded-md"
                        name="district">
                        <option value="">Selecciona una opción</option>
                        {districts.map(({ code, name }) => (
                            <option key={code} value={code}>
                                {name}
                            </option>
                        ))}
                    </SelectField>
                    <Button
                        type="submit"
                        className="border-[1px] border-tertiary font-bold max-w-[200px] mt-4 rounded px-2 text-tertiary hover:text-slate-700 hover:border-slate-700">
                        Buscar
                    </Button>
                </div>
            </Form>
        </header>
    )
}

export default Header
