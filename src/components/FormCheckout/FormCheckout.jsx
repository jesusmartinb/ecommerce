
const FormCheckout = ({ formData, handleChangeInput, handleSubmit, habilitado }) => {

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

        <div style={{ 'cursor': habilitado ? '' : 'not-allowed', 'width': '136px' }}>
          <button className='btn btn-success' disabled={!habilitado} type="submit">Enviar mi orden</button>
        </div>
      </form>
    </div>
  )
}

export default FormCheckout
