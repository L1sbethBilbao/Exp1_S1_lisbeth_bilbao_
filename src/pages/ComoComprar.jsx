function ComoComprar() {
  const pasos = [
    {
      numero: '1',
      titulo: 'Elige tu local',
      texto:
        'Revisa Nuestras tiendas y selecciona el punto más cercano según tu barrio y horario.',
    },
    {
      numero: '2',
      titulo: 'Recorre las secciones',
      texto:
        'Encuentra frescos, abarrotes y productos de despensa organizados para una compra rápida.',
    },
    {
      numero: '3',
      titulo: 'Paga en caja',
      texto:
        'Puedes pagar con efectivo, débito o crédito. Conserva tu boleta para cambios o consultas.',
    },
    {
      numero: '4',
      titulo: '¿Necesitas ayuda?',
      texto:
        'Nuestro equipo en sala te orienta, o escríbenos desde Contáctanos si prefieres asistencia previa.',
    },
  ]

  return (
    <section className="container py-5">
      <div className="mb-5">
        <p className="text-uppercase small fw-semibold text-primary mb-2">
          Cómo comprar
        </p>
        <h1 className="display-6 fw-bold">Guía simple para tu compra</h1>
        <p className="text-secondary col-lg-8">
          En Casa Gourmet buscamos que comprar sea claro y cercano. Sigue estos
          pasos para aprovechar mejor tu visita al local.
        </p>
      </div>

      <div className="row g-4">
        {pasos.map((paso) => (
          <div className="col-md-6" key={paso.numero}>
            <div className="p-4 bg-white rounded-3 shadow-sm h-100 d-flex gap-3">
              <span className="brand-mark flex-shrink-0">{paso.numero}</span>
              <div>
                <h2 className="h5 fw-bold text-primary">{paso.titulo}</h2>
                <p className="text-secondary mb-0">{paso.texto}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-5 p-4 bg-white rounded-3 shadow-sm">
        <h2 className="h5 fw-bold">Tips útiles</h2>
        <ul className="text-secondary mb-0">
          <li>Revisa las ofertas del día en la entrada de cada local.</li>
          <li>Los productos frescos se reponen en la mañana.</li>
          <li>Si un artículo no está en sala, consulta al personal de inventario.</li>
        </ul>
      </div>
    </section>
  )
}

export default ComoComprar
