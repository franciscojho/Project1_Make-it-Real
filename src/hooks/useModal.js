/* eslint-disable no-unused-expressions */
import { useModalContext } from '../context/modal'

const useModal = () => {
    const { open, setOpen, selected, setSelected, action, setAction } = useModalContext()

    const openModal = (record, btnAction) => {
        record && setSelected(record)
        btnAction && setAction(btnAction)
        setOpen(true)
    }

    const closeModal = () => {
        setSelected(null)
        setAction('')
        setOpen(false)
    }

    return { open, selected, action, openModal, closeModal }
}

export default useModal
