function PreguntasFrecuentes() {
  const preguntas = [
    {
      pregunta: '¿Cuáles son los horarios de atención?',
      respuesta:
        'En general atendemos de lunes a domingo entre 08:00 y 21:00. El detalle por local está en Nuestras tiendas.',
    },
    {
      pregunta: '¿Puedo devolver un producto?',
      respuesta:
        'Sí, presentando la boleta dentro de 48 horas, siempre que el producto esté en buen estado y corresponda a abarrotes no perecibles. Para frescos, consulta en caja el mismo día.',
    },
    {
      pregunta: '¿Tienen estacionamiento?',
      respuesta:
        'El Local Providencia y el Local Maipú cuentan con estacionamiento limitado. El Local Centro ofrece convenios cercanos.',
    },
    {
      pregunta: '¿Hacen despacho a domicilio?',
      respuesta:
        'Por ahora la compra es presencial. Estamos preparando mejoras de inventario y servicio para próximas etapas del proyecto.',
    },
    {
      pregunta: '¿Cómo los contacto si tengo un reclamo o sugerencia?',
      respuesta:
        'Puedes escribirnos desde Contáctanos o llamar al teléfono del local. Respondemos lo antes posible.',
    },
  ]

  return (
    <section className="container py-5">
      <div className="mb-5">
        <p className="text-uppercase small fw-semibold text-primary mb-2">
          Preguntas frecuentes
        </p>
        <h1 className="display-6 fw-bold">Resolvemos tus dudas</h1>
        <p className="text-secondary col-lg-8">
          Reúne las consultas más comunes de nuestros clientes. Si no encuentras
          lo que buscas, ve a Contáctanos y te ayudamos.
        </p>
      </div>

      <div className="row g-3">
        {preguntas.map((item) => (
          <div className="col-12" key={item.pregunta}>
            <div className="p-4 bg-white rounded-3 shadow-sm">
              <h2 className="h5 fw-bold text-primary">{item.pregunta}</h2>
              <p className="text-secondary mb-0">{item.respuesta}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default PreguntasFrecuentes
