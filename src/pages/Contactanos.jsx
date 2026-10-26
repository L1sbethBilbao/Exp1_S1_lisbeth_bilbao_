import { useState } from 'react'

function Contactanos() {
  const [enviado, setEnviado] = useState(false)
  const [form, setForm] = useState({
    nombre: '',
    correo: '',
    mensaje: '',
  })

  function handleChange(e) {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    setEnviado(true)
  }

  return (
    <section className="container py-5">
      <div className="row g-4">
        <div className="col-lg-5">
          <p className="text-uppercase small fw-semibold text-primary mb-2">
            Contáctanos
          </p>
          <h1 className="display-6 fw-bold">Estamos para ayudarte</h1>
          <p className="text-secondary">
            Si tienes consultas sobre productos, horarios o atención en tienda,
            escríbenos. Responderemos a la brevedad.
          </p>

          <ul className="list-unstyled text-secondary">
            <li className="mb-2">
              <strong className="text-dark">Dirección:</strong> Av. Los Frescos
              1250, Santiago
            </li>
            <li className="mb-2">
              <strong className="text-dark">Teléfono:</strong> +56 2 2345 6789
            </li>
            <li className="mb-2">
              <strong className="text-dark">Correo:</strong>{' '}
              contacto@casagourmet.cl
            </li>
            <li>
              <strong className="text-dark">Horario:</strong> Lun a Dom ·
              08:00 a 21:00
            </li>
          </ul>
        </div>

        <div className="col-lg-7">
          <div className="bg-white rounded-3 shadow-sm p-4">
            <h2 className="h5 fw-bold mb-3">Formulario de contacto</h2>

            {enviado ? (
              <div className="alert alert-success mb-0" role="status">
                Gracias, {form.nombre || 'vecino/a'}. Recibimos tu mensaje
                (simulación en frontend; sin envío a servidor en esta semana).
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="nombre" className="form-label">
                    Nombre
                  </label>
                  <input
                    id="nombre"
                    name="nombre"
                    type="text"
                    className="form-control"
                    value={form.nombre}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="correo" className="form-label">
                    Correo
                  </label>
                  <input
                    id="correo"
                    name="correo"
                    type="email"
                    className="form-control"
                    value={form.correo}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="mensaje" className="form-label">
                    Mensaje
                  </label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    className="form-control"
                    rows="4"
                    value={form.mensaje}
                    onChange={handleChange}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Enviar mensaje
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contactanos
