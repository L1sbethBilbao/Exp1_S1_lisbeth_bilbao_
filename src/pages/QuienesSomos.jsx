function QuienesSomos() {
  return (
    <section className="container py-5">
      <div className="row g-4 align-items-center mb-5">
        <div className="col-lg-6">
          <p className="text-uppercase small fw-semibold text-primary mb-2">
            Quiénes somos
          </p>
          <h1 className="display-6 fw-bold">Calidad selecta, experiencia cercana</h1>
          <p className="text-secondary">
            Casa Gourmet nació con la idea de ofrecer un supermercado premium
            donde cada pasillo invite a descubrir lo mejor: frescos cuidados,
            despensa gourmet y una atención que se siente personal.
          </p>
          <p className="text-secondary mb-0">
            Hoy trabajamos para organizar mejor nuestro inventario y la
            experiencia de compra, manteniendo lo que más nos importa: calidad,
            orden y un servicio que invite a volver.
          </p>
        </div>
        <div className="col-lg-6">
          <img
            src="/img/equipo-local.jpg"
            className="img-fluid rounded-3 shadow-sm"
            alt="Interior premium de Casa Gourmet con pasillo gourmet"
          />
        </div>
      </div>

      <div className="row g-4">
        <div className="col-md-4">
          <div className="p-4 bg-white rounded-3 shadow-sm h-100">
            <h2 className="h5 fw-bold text-primary">Misión</h2>
            <p className="text-secondary mb-0">
              Ofrecer una compra confiable, con productos frescos y un servicio
              cercano que facilite el día a día de cada familia.
            </p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="p-4 bg-white rounded-3 shadow-sm h-100">
            <h2 className="h5 fw-bold text-primary">Visión</h2>
            <p className="text-secondary mb-0">
              Ser el supermercado de referencia del sector, reconocido por su
              calidad, orden en el inventario y experiencia de atención.
            </p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="p-4 bg-white rounded-3 shadow-sm h-100">
            <h2 className="h5 fw-bold text-primary">Valores</h2>
            <p className="text-secondary mb-0">
              Honestidad en los precios, respeto por las personas, cuidado de
              los productos y mejora continua de nuestros procesos.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default QuienesSomos
