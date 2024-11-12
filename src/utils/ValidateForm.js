import { mixed, object, string, ref } from 'yup'

let userSchema = object({
    fullname: string().required('El nombre es requerido'),
    phone: mixed().required('El teléfono es requerido'),
    email: string().email('El email es inválido').required('El email es requerido'),
    confirmEmail: string().oneOf([ref('email'), null], 'Los emails no coinciden')
})

const validateForm = async (formData) => {
    try {
        await userSchema.validate(formData)
        return { status: 'success', habilitado: true}
    } catch (error) {
        return { status: 'error', message: error.message, habilitado: false }
    }
}

export default validateForm