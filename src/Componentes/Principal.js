import logo from "./logo.svg";
import "./App.css";

import { Link } from "react-router-dom";

function Principal() {
  return (
    <div id="wrapper">
      {/*<!-- Page Wrapper -->*/}

      {/*<!-- Sidebar -->*/}
      <ul
        className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
        id="accordionSidebar"
      >
        {/*<!-- Sidebar - Brand -->*/}

        <Link
          to="/index"
          className="sidebar-brand d-flex align-items-center justify-content-center"
        >
          <div className="sidebar-brand-icon rotate-n-15">
            <i className="fas fa-laugh-wink"></i>
          </div>
          <div className="sidebar-brand-text mx-3">Administrador</div>
        </Link>

        {/*<!-- Divider -->*/}
        <hr className="sidebar-divider my-0" />

        {/*<!-- Divider -->*/}
        <hr className="sidebar-divider" />

        {/*<!-- Nav Item - Pages Collapse Menu -->*/}
        <li className="nav-item">
          <Link to=""
            className="nav-link collapsed"
            href="#"
            data-toggle="collapse"
            data-target="#collapseTwo"
            aria-expanded="true"
            aria-controls="collapseTwo"
          >
            <i className="fas fa-fw fa-cog"></i>
            <span>Crear Usuario</span>
          </Link>
          <div
            id="collapseTwo"
            className="collapse"
            aria-labelledby="headingTwo"
            data-parent="#accordionSidebar"
          >
            <div className="bg-white py-2 collapse-inner rounded">
              <h6 className="collapse-header">Custom Components:</h6>
              <Link to="usuariointerno" className="collapse-item">
                Usuario Interno
              </Link>
              <Link to="usuarioexterno" className="collapse-item">
                Usuario Externo
              </Link>
            </div>
          </div>
        </li>

        {/*<!-- Nav Item - Utilities Collapse Menu -->*/}
        <li className="nav-item">
          <Link to=""
            className="nav-link collapsed"
            href="#"
            data-toggle="collapse"
            data-target="#collapseUtilities"
            aria-expanded="true"
            aria-controls="collapseUtilities"
          >
            <i className="fas fa-fw fa-wrench"></i>
            <span>Crear Equipos-Torneos</span>
          </Link>
          <div
            id="collapseUtilities"
            className="collapse"
            aria-labelledby="headingUtilities"
            data-parent="#accordionSidebar"
          >
            <div className="bg-white py-2 collapse-inner rounded">
              <h6 className="collapse-header">Custom Utilities:</h6>
              <Link to="crearequipo" className="collapse-item">
                Equipos
              </Link>
              <Link to="creartorneo" className="collapse-item">
                Torneo
              </Link>
            </div>
          </div>
        </li>

        {/*<!-- Divider -->*/}
        <hr className="sidebar-divider" />

        {/*<!-- Nav Item - Pages Collapse Menu -->*/}
        <li className="nav-item">
          <Link to=""
            className="nav-link collapsed"
            href="#"
            data-toggle="collapse"
            data-target="#collapsePages"
            aria-expanded="true"
            aria-controls="collapsePages"
          >
            <i className="fas fa-fw fa-folder"></i>
            <span>Gestion</span>
          </Link>
          <div
            id="collapsePages"
            className="collapse"
            aria-labelledby="headingPages"
            data-parent="#accordionSidebar"
          >
            <div className="bg-white py-2 collapse-inner rounded">
              <Link to="" className="collapse-item" href="login.html">
                Gestionar equipos
              </Link>
              <Link to="" className="collapse-item" href="register.html">
                Gestionar Torneos
              </Link>
            </div>
          </div>
        </li>

        {/*<!-- Divider -->*/}
        <hr className="sidebar-divider d-none d-md-block" />
      </ul>

      {/*<!-- Content Wrapper -->*/}
      <div id="content-wrapper" className="d-flex flex-column">
        {/*<!-- Main Content -->*/}
        <div id="content">
          {/*<!-- Topbar -->*/}
          <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
            {/*<!-- Sidebar Toggle (Topbar) -->*/}
            <button
              id="sidebarToggleTop"
              className="btn btn-link d-md-none rounded-circle mr-3"
            >
              <i className="fa fa-bars"></i>
            </button>

            {/*<!-- Topbar Search -->*/}

            {/*<!-- Topbar Navbar -->*/}
            <ul className="navbar-nav ml-auto">
              <div className="topbar-divider d-none d-sm-block"></div>

              {/*<!-- Nav Item - User Information -->*/}
              <li className="nav-item dropdown no-arrow">
                <Link to=""
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="userDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <span className="mr-2 d-none d-lg-inline text-gray-600 small">
                    Douglas McGee
                  </span>
                  <img
                    className="img-profile rounded-circle"
                    src="img/undraw_profile.svg"
                  />
                </Link>
                {/*<!-- Dropdown - User Information -->*/}
                <div
                  className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                  aria-labelledby="userDropdown"
                >
                  <div className="dropdown-divider"></div>
                  <Link to=""
                    className="dropdown-item"
                    href="#"
                    data-toggle="modal"
                    data-target="#logoutModal"
                  >
                    <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                    Logout
                  </Link>
                </div>
              </li>
            </ul>
          </nav>
          {/*<!-- End of Topbar -->*/}
        </div>

        {/*<!-- Footer -->*/}
        <footer className="sticky-footer bg-white">
          <div className="container my-auto">
            <div className="copyright text-center my-auto">
              <span>Copyright &copy; PGC 2021</span>
            </div>
          </div>
        </footer>
        {/*<!-- End of Footer -->*/}
      </div>
      {/*<!-- End of Content Wrapper -->*/}
      {/*<!-- End of Page Wrapper -->*/}
    </div>
  );
}

export default Principal;
