import logo from "./logo.svg";
import "./App.css";

import { Link } from "react-router-dom";

function UsuarioInterno() {
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
              <Link to="" className="collapse-item" href="utilities-color.html">
                Equipos
              </Link>
              <Link to="" className="collapse-item" href="utilities-border.html">
                Torneos
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
            <form className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control bg-light border-0 small"
                  placeholder="Search for..."
                  aria-label="Search"
                  aria-describedby="basic-addon2"
                />
                <div className="input-group-append">
                  <button className="btn btn-primary" type="button">
                    <i className="fas fa-search fa-sm"></i>
                  </button>
                </div>
              </div>
            </form>

            {/*<!-- Topbar Navbar -->*/}
            <ul className="navbar-nav ml-auto">
              {/*<!-- Nav Item - Search Dropdown (Visible Only XS) -->*/}
              <li className="nav-item dropdown no-arrow d-sm-none">
                <Link to=""
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="searchDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i className="fas fa-search fa-fw"></i>
                </Link>
                {/*<!-- Dropdown - Messages -->*/}
                <div
                  className="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
                  aria-labelledby="searchDropdown"
                >
                  <form className="form-inline mr-auto w-100 navbar-search">
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control bg-light border-0 small"
                        placeholder="Search for..."
                        aria-label="Search"
                        aria-describedby="basic-addon2"
                      />
                      <div className="input-group-append">
                        <button className="btn btn-primary" type="button">
                          <i className="fas fa-search fa-sm"></i>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </li>

              {/*<!-- Nav Item - Alerts -->*/}
              <li className="nav-item dropdown no-arrow mx-1">
                <Link to=""
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="alertsDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i className="fas fa-bell fa-fw"></i>
                  {/*<!-- Counter - Alerts -->*/}
                  <span className="badge badge-danger badge-counter">3+</span>
                </Link>
                {/*<!-- Dropdown - Alerts -->*/}
                <div
                  className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
                  aria-labelledby="alertsDropdown"
                >
                  <h6 className="dropdown-header">Alerts Center</h6>
                  <Link to=""
                    className="dropdown-item d-flex align-items-center"
                    href="#"
                  >
                    <div className="mr-3">
                      <div className="icon-circle bg-primary">
                        <i className="fas fa-file-alt text-white"></i>
                      </div>
                    </div>
                    <div>
                      <div className="small text-gray-500">
                        December 12, 2019
                      </div>
                      <span className="font-weight-bold">
                        A new monthly report is ready to download!
                      </span>
                    </div>
                  </Link>
                  <Link to=""
                    className="dropdown-item d-flex align-items-center"
                    href="#"
                  >
                    <div className="mr-3">
                      <div className="icon-circle bg-success">
                        <i className="fas fa-donate text-white"></i>
                      </div>
                    </div>
                    <div>
                      <div className="small text-gray-500">
                        December 7, 2019
                      </div>
                      $290.29 has been deposited into your account!
                    </div>
                  </Link>
                  <Link to=""
                    className="dropdown-item d-flex align-items-center"
                    href="#"
                  >
                    <div className="mr-3">
                      <div className="icon-circle bg-warning">
                        <i className="fas fa-exclamation-triangle text-white"></i>
                      </div>
                    </div>
                    <div>
                      <div className="small text-gray-500">
                        December 2, 2019
                      </div>
                      Spending Alert: We've noticed unusually high spending for
                      your account.
                    </div>
                  </Link>
                  <Link to=""
                    className="dropdown-item text-center small text-gray-500"
                    href="#"
                  >
                    Show All Alerts
                  </Link>
                </div>
              </li>

              {/*<!-- Nav Item - Messages -->*/}
              <li className="nav-item dropdown no-arrow mx-1">
                <Link to=""
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="messagesDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i className="fas fa-envelope fa-fw"></i>
                  {/*<!-- Counter - Messages -->*/}
                  <span className="badge badge-danger badge-counter">7</span>
                </Link>
                {/*<!-- Dropdown - Messages -->*/}
                <div
                  className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
                  aria-labelledby="messagesDropdown"
                >
                  <h6 className="dropdown-header">Message Center</h6>
                  <Link to=""
                    className="dropdown-item d-flex align-items-center"
                    href="#"
                  >
                    <div className="dropdown-list-image mr-3">
                      <img
                        className="rounded-circle"
                        src="img/undraw_profile_1.svg"
                        alt="..."
                      />
                      <div className="status-indicator bg-success"></div>
                    </div>
                    <div className="font-weight-bold">
                      <div className="text-truncate">
                        Hi there! I am wondering if you can help me with a
                        problem I've been having.
                      </div>
                      <div className="small text-gray-500">
                        Emily Fowler · 58m
                      </div>
                    </div>
                  </Link>
                  <Link to=""
                    className="dropdown-item d-flex align-items-center"
                    href="#"
                  >
                    <div className="dropdown-list-image mr-3">
                      <img
                        className="rounded-circle"
                        src="img/undraw_profile_2.svg"
                        alt="..."
                      />
                      <div className="status-indicator"></div>
                    </div>
                    <div>
                      <div className="text-truncate">
                        I have the photos that you ordered last month, how would
                        you like them sent to you?
                      </div>
                      <div className="small text-gray-500">Jae Chun · 1d</div>
                    </div>
                  </Link>
                  <Link to=""
                    className="dropdown-item d-flex align-items-center"
                    href="#"
                  >
                    <div className="dropdown-list-image mr-3">
                      <img
                        className="rounded-circle"
                        src="img/undraw_profile_3.svg"
                        alt="..."
                      />
                      <div className="status-indicator bg-warning"></div>
                    </div>
                    <div>
                      <div className="text-truncate">
                        Last month's report looks great, I am very happy with
                        the progress so far, keep up the good work!
                      </div>
                      <div className="small text-gray-500">
                        Morgan Alvarez · 2d
                      </div>
                    </div>
                  </Link>
                  <Link to=""
                    className="dropdown-item d-flex align-items-center"
                    href="#"
                  >
                    <div className="dropdown-list-image mr-3">
                      <img
                        className="rounded-circle"
                        src="https://source.unsplash.com/Mv9hjnEUHR4/60x60"
                        alt="..."
                      />
                      <div className="status-indicator bg-success"></div>
                    </div>
                    <div>
                      <div className="text-truncate">
                        Am I a good boy? The reason I ask is because someone
                        told me that people say this to all dogs, even if they
                        aren't good...
                      </div>
                      <div className="small text-gray-500">
                        Chicken the Dog · 2w
                      </div>
                    </div>
                  </Link>
                  <Link to=""
                    className="dropdown-item text-center small text-gray-500"
                    href="#"
                  >
                    Read More Messages
                  </Link>
                </div>
              </li>

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
                  <Link to="" className="dropdown-item" href="#">
                    <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                    Profile
                  </Link>
                  <Link to="" className="dropdown-item" href="#">
                    <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
                    Settings
                  </Link>
                  <Link to="" className="dropdown-item" href="#">
                    <i className="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
                    Activity Log
                  </Link>
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

          {/*<!-- Begin Page Content -->*/}
          <div class="container">
            <div class="card o-hidden border-0 shadow-lg my-5">
              <div class="card-body p-0">
                <div class="row">
                  <div class="col-lg-12">
                    <div class="p-5">
                      <div class="text-center">
                        <h1 class="h4 text-gray-900 mb-4">
                          Crear Usuario Interno
                        </h1>
                      </div>
                      <form class="user">
                        <div class="form-group row">
                          <div class="col-sm-6 mb-3 mb-sm-0">
                            <input
                              type="text"
                              class="form-control form-control-user"
                              id="exampleFirstName"
                              placeholder="Nombre"
                            />
                          </div>
                          <div class="col-sm-6">
                            <input
                              type="text"
                              class="form-control form-control-user"
                              id="exampleLastName"
                              placeholder="Apellido"
                            />
                          </div>
                        </div>
                        <div class="form-group row">
                          <div class="col-sm-6 mb-3 mb-sm-0">
                            <input
                              type="text"
                              class="form-control form-control-user"
                              id="exampleFirstName"
                              placeholder="Usuario"
                            />
                          </div>
                          <div class="col-sm-6">
                            <input
                              type="email"
                              class="form-control form-control-user"
                              id="exampleInputEmail"
                              placeholder="Correo Electronico"
                            />
                          </div>
                        </div>

                        <div class="form-group row">
                          <div class="col-sm-6 mb-3 mb-sm-0">
                            <input
                              type="password"
                              class="form-control form-control-user"
                              id="exampleInputPassword"
                              placeholder="Contrasena"
                            />
                          </div>
                          <div class="col-sm-6">
                            <input
                              type="password"
                              class="form-control form-control-user"
                              id="exampleRepeatPassword"
                              placeholder="RepetirContrasena"
                            />
                          </div>
                        </div>
                        <Link to=""
                          href="login.html"
                          class="btn btn-primary btn-user btn-block"
                        >
                          Registrar Usuario
                        </Link>
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

export default UsuarioInterno;
