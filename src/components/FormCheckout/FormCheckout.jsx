import React from 'react'

const FormCheckout = ({ formData, handleChangeInput, handleSubmit }) => {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="fullname">Nombre completo</label>
        <input type="text" name="fullname" id="fullname" value={formData.fullname} onChange={handleChangeInput} />
        <label htmlFor="phone">Teléfono</label>
        <input type="number" name="phone" id="phone" value={formData.phone} onChange={handleChangeInput} />
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" value={formData.email} onChange={handleChangeInput} />

        <button type="submit">Enviar mi orden</button>
      </form>
    </div>
  )
}

export default FormCheckout
