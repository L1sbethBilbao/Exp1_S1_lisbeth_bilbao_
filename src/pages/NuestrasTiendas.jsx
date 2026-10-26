function NuestrasTiendas() {
  const tiendas = [
    {
      nombre: 'Local Centro',
      direccion: 'Av. Libertador 450, Santiago',
      horario: 'Lun a Dom · 08:00 a 21:00',
      telefono: '+56 2 2345 6701',
    },
    {
      nombre: 'Local Providencia',
      direccion: 'Av. Providencia 1890, Providencia',
      horario: 'Lun a Dom · 08:30 a 21:30',
      telefono: '+56 2 2345 6702',
    },
    {
      nombre: 'Local Maipú',
      direccion: 'Av. Pajaritos 3200, Maipú',
      horario: 'Lun a Dom · 08:00 a 21:00',
      telefono: '+56 2 2345 6703',
    },
  ]

  return (
    <section className="container py-5">
      <div className="row g-4 align-items-center mb-5">
        <div className="col-lg-6">
          <p className="text-uppercase small fw-semibold text-primary mb-2">
            Nuestras tiendas
          </p>
          <h1 className="display-6 fw-bold">Cerca de tu barrio</h1>
          <p className="text-secondary mb-0">
            Contamos con locales pensados para una compra cómoda, con el mismo
            estándar de frescura y atención en cada punto. Revisa la dirección y
            el horario del local que te quede más cerca.
          </p>
        </div>
        <div className="col-lg-6">
          <img
            src="/img/hero-supermercado.jpg"
            className="img-fluid rounded-3 shadow-sm"
            alt="Interior de una tienda Casa Gourmet"
          />
        </div>
      </div>

      <div className="row g-4">
        {tiendas.map((tienda) => (
          <div className="col-md-4" key={tienda.nombre}>
            <div className="p-4 bg-white rounded-3 shadow-sm h-100">
              <h2 className="h5 fw-bold text-primary">{tienda.nombre}</h2>
              <p className="text-secondary mb-2">
                <strong className="text-dark">Dirección:</strong> {tienda.direccion}
              </p>
              <p className="text-secondary mb-2">
                <strong className="text-dark">Horario:</strong> {tienda.horario}
              </p>
              <p className="text-secondary mb-0">
                <strong className="text-dark">Teléfono:</strong> {tienda.telefono}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default NuestrasTiendas
