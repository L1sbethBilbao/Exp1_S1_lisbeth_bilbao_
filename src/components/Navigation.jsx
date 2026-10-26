import { Link, NavLink } from 'react-router'

const enlaces = [
  { to: '/', label: 'Inicio', end: true },
  { to: '/quienes-somos', label: 'Quiénes somos' },
  { to: '/nuestras-tiendas', label: 'Nuestras tiendas' },
  { to: '/contactanos', label: 'Contáctanos' },
  { to: '/como-comprar', label: 'Cómo comprar' },
  { to: '/preguntas-frecuentes', label: 'Preguntas frecuentes' },
]

function Navigation() {
  return (
    <header className="menu-superior navbar navbar-expand-md bg-white border-bottom shadow-sm">
      <div className="container flex-column flex-lg-row gap-2 py-2">
        <Link to="/" className="navbar-brand d-flex align-items-center gap-2 mb-0 text-decoration-none">
          <img
            src="/img/logo-casa-gourmet.jpg"
            alt="Logo Casa Gourmet"
            className="brand-logo"
          />
          <span>
            <span className="brand-name d-block">Casa Gourmet</span>
            <span className="brand-tagline d-block">Gourmet · Gestión y atención al cliente</span>
          </span>
        </Link>

        <nav aria-label="Menú principal">
          <ul className="navbar-nav flex-row flex-wrap gap-1 mb-0 justify-content-lg-end">
            {enlaces.map((enlace) => (
              <li className="nav-item" key={enlace.to}>
                <NavLink
                  to={enlace.to}
                  end={enlace.end}
                  className={({ isActive }) =>
                    `nav-link menu-link px-2 px-md-3 ${isActive ? 'active' : ''}`
                  }
                >
                  {enlace.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Navigation
