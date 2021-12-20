import logo from "./logo.svg";
import "./App.css";

import { Link } from "react-router-dom";

function CrearTorneo() {
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
          </Link >
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
          </Link >
          <div
            id="collapseUtilities"
            className="collapse"
            aria-labelledby="headingUtilities"
            data-parent="#accordionSidebar"
          >
            <div className="bg-white py-2 collapse-inner rounded">
              <h6 className="collapse-header">Custom Utilities:</h6>
              <Link to="" className="collapse-item" href="utilities-color.html">
                Equipos
              </Link >
              <Link to="" className="collapse-item" href="utilities-border.html">
                Torneos
              </Link >
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
          </Link >
          <div
            id="collapsePages"
            className="collapse"
            aria-labelledby="headingPages"
            data-parent="#accordionSidebar"
          >
            <div className="bg-white py-2 collapse-inner rounded">
              <Link to="" className="collapse-item" href="login.html">
                Gestionar equipos
              </Link >
              <Link to="" className="collapse-item" href="register.html">
                Gestionar Torneos
              </Link >
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
            {/*<!-- Topbar Navbar -->*/}
            <ul className="navbar-nav ml-auto">
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
                </Link >
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
                  </Link >
                </div>
              </li>
            </ul>
          </nav>
          {/*<!-- End of Topbar -->*/}

          {/*<!-- Begin Page Content -->*/}
          <div class="container">
            <div class="card o-hidden border-0 shadow-lg my-5">
              <div class="card-body p-0">
                <div class="row">
                  <div class="col-lg-12">
                    <div class="p-5">
                      <div class="text-center">
                        <h1 class="h4 text-gray-900 mb-4">Crear Campeonato</h1>
                      </div>
                      <form class="user">
                        <div class="form-group row">
                          <div class="col-sm-6 mb-3 mb-sm-0">
                            <input
                              type="text"
                              class="form-control form-control-user"
                              id="lugar"
                              placeholder="Lugar del campeonato"
                            />
                          </div>
                          <div class="col-sm-6">
                            <input
                              type="date"
                              class="form-control form-control-user"
                              id="fecha"
                              placeholder="Fecha del campeonato"
                            />
                          </div>
                        </div>
                        <div class="form-group row">
                          <div class="col-sm-6 mb-3 mb-sm-0">
                            <input
                              type="number"
                              class="form-control form-control-user"
                              id="numeroEquipos"
                              placeholder="Numero de equipos"
                            />
                          </div>
                          <div class="col-sm-6">
                            <input
                              type="text"
                              class="form-control form-control-user"
                              id="primerPremio"
                              placeholder="Primer premio"
                            />
                          </div>
                        </div>

                        <div class="form-group row">
                          <div class="col-sm-6 mb-3 mb-sm-0">
                            <input
                              type="text"
                              class="form-control form-control-user"
                              id="segundoPremio"
                              placeholder="Segundo Premio"
                            />
                          </div>
                        </div>
                        <Link to=""
                          href="login.html"
                          class="btn btn-primary btn-user btn-block"
                        >
                          Crear Campeonato
                        </Link >
                      </form>
                      <hr />
                    </div>
                  </div>
                </div>
              </div>
              {/*<!-- /.container-fluid -->*/}
            </div>
          </div>

          <footer className="sticky-footer bg-white">
            <div className="container my-auto">
              <div className="copyright text-center my-auto">
                <span>Copyright &copy; PGC 2021</span>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default CrearTorneo;
