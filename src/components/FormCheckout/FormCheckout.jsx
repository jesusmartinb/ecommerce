
const FormCheckout = ({ formData, handleChangeInput, handleSubmit }) => {

  return (
    <div className='container mt-5'>
      <form onSubmit={handleSubmit}>
        <div className='mb-3'>
          <label className='form-label' htmlFor="fullname">Nombre completo</label>
          <input className='form-control' type="text" name="fullname" id="fullname" value={formData.fullname} onChange={handleChangeInput} />
        </div>
        <div className='mb-3'>
          <label className='form-label' htmlFor="phone">Teléfono</label>
          <input className='form-control' type="number" name="phone" id="phone" value={formData.phone} onChange={handleChangeInput} />
        </div>
        <div className='mb-3'>
          <label className='form-label' htmlFor="email">Email</label>
          <input className='form-control' type="email" name="email" id="email" value={formData.email} onChange={handleChangeInput} />
        </div>
        <div className='mb-3'>
          <label className='form-label' htmlFor="confirmEmail">Confirme el email</label>
          <input className='form-control' type="email" name="confirmEmail" id="confirmEmail" value={formData.confirmEmail} onChange={handleChangeInput} />
        </div>

        <button className='btn btn-success' type="submit">Enviar mi orden</button>
      </form>
    </div>
  )
}

export default FormCheckout
