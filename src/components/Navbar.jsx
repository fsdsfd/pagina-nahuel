import { Link } from "react-router-dom"
import menuItems from "../constants/menuItems"
import NavItem from "./NavItem"

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark z-3">
  <div className="container-fluid">
    <Link to='/' className="navbar-brand text-white" onClick={() => window.scrollTo(0, 0)}>Famigas</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        {
        menuItems.map( item => (
          <NavItem item={item} key={item.id} />
        ))
      }
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Navbar