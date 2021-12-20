import logo from "./logo.svg";
import "./App.css";

import { Link } from "react-router-dom";

function Registrar() {
  return (
    <div className="container">
      <div className="card o-hidden border-0 shadow-lg my-5">
        <div className="card-body p-0">
          {/* <!-- Nested Row within Card Body -->*/}
          <div className="row">
            <div className="col-lg-7">
              <div className="p-5">
                <div className="text-center">
                  <h1 className="h4 text-gray-900 mb-4">Registrarse</h1>
                </div>
                <form className="user">
                  <div className="form-group row">
                    <div className="col-sm-6 mb-3 mb-sm-0">
                      <input
                        type="text"
                        className="form-control form-control-user"
                        id="exampleFirstName"
                        placeholder="Primer nombre"
                      />
                    </div>
                    <div className="col-sm-6">
                      <input
                        type="text"
                        className="form-control form-control-user"
                        id="exampleLastName"
                        placeholder="Segundo nombre"
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control form-control-user"
                      id="exampleInputEmail"
                      placeholder="Correo Electronico"
                    />
                  </div>
                  <div className="form-group row">
                    <div className="col-sm-6 mb-3 mb-sm-0">
                      <input
                        type="password"
                        className="form-control form-control-user"
                        id="exampleInputPassword"
                        placeholder="Password"
                      />
                    </div>
                    <div className="col-sm-6">
                      <input
                        type="password"
                        className="form-control form-control-user"
                        id="exampleRepeatPassword"
                        placeholder="Repeat Password"
                      />
                    </div>
                  </div>
                  <Link to=""
                    href="login.html"
                    className="btn btn-primary btn-user btn-block"
                  >
                    Registrar Usuario
                  </Link>
                  <hr />
                </form>
                <hr />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Registrar;
