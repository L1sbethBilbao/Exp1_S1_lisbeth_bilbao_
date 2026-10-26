import { Link } from 'react-router'

function Inicio() {
  return (
    <>
      <section className="container py-5">
        <div className="row align-items-center g-4">
          <div className="col-lg-6">
            <p className="text-uppercase small fw-semibold text-primary mb-2">
              Bienvenida
            </p>
            <h1 className="display-5 fw-bold">Tu supermercado gourmet</h1>
            <p className="lead text-secondary">
              En Casa Gourmet reunimos frescos selectos, despensa gourmet y una
              atención cercana. Este sitio es el punto de partida de nuestra
              gestión de inventario y servicio al cliente: conoce quiénes somos
              y escríbenos cuando lo necesites.
            </p>
            <div className="d-flex flex-wrap gap-2">
              <Link to="/quienes-somos" className="btn btn-primary btn-lg">
                Quiénes somos
              </Link>
              <Link to="/contactanos" className="btn btn-outline-primary btn-lg">
                Contáctanos
              </Link>
            </div>
          </div>
          <div className="col-lg-6">
            <img
              src="/img/hero-supermercado.jpg"
              className="img-fluid rounded-3 shadow-sm"
              alt="Interior premium de Casa Gourmet"
            />
          </div>
        </div>
      </section>

      <section className="container pb-5">
        <div className="row g-4">
          <div className="col-12">
            <h2 className="h4 fw-bold">¿Qué encuentras en Casa Gourmet?</h2>
            <p className="text-secondary">
              Ofrecemos una experiencia premium y cercana, pensada para quienes
              buscan calidad, orden y lo mejor en cada compra.
            </p>
          </div>
          <div className="col-md-4">
            <div className="card h-100 border-0 shadow-sm">
              <img
                src="/img/frutas-verduras.jpg"
                className="card-img-top tarjeta-img"
                alt="Frutas y verduras frescas en el mercado"
              />
              <div className="card-body">
                <h3 className="h6 fw-bold text-primary">Frescos del día</h3>
                <p className="small text-secondary mb-0">
                  Frutas, verduras y panadería seleccionadas cada mañana para
                  llegar a tu mesa con la mejor calidad.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100 border-0 shadow-sm">
              <img
                src="/img/abarrotes.jpg"
                className="card-img-top tarjeta-img"
                alt="Estanterías de abarrotes en el supermercado"
              />
              <div className="card-body">
                <h3 className="h6 fw-bold text-primary">Abarrotes y despensa</h3>
                <p className="small text-secondary mb-0">
                  Todo lo esencial para el hogar, con precios claros y stock
                  organizado para una compra rápida.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100 border-0 shadow-sm">
              <img
                src="/img/atencion.jpg"
                className="card-img-top tarjeta-img"
                alt="Atención al cliente en caja"
              />
              <div className="card-body">
                <h3 className="h6 fw-bold text-primary">Atención cercana</h3>
                <p className="small text-secondary mb-0">
                  Un equipo dispuesto a orientarte en tienda y a responder tus
                  consultas desde la sección Contáctanos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Inicio
