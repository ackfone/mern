import React from "react";
import "./login.page.css";

export const LoginForm = ({formSubmit, email, password, login_detail, formSwitcher}) => {
  return (
    <div>
      <div className="row">
        <div className="col">
          <h2 className="text-center">Please Login</h2>
          <hr />
          <br />
          <form onSubmit={formSubmit}>
            <div class="form-group">
              <label for="username">username</label>
              <input
                id="username"
                class="form-control p-3"
                type="email"
                name="email"
                value={email}
                onChange={login_detail}
                required
              />
            </div>
            <div class="form-group">
              <label for="password">password</label>
              <input
                id="password"
                class="form-control"
                type="password"
                name="password"
                value={password}
                onChange={login_detail}
                required
              />
            </div>
            <div class="form-group">
              <button type="submit" className="btn btn-primary p-2 form-control">Login</button>
            </div>
          </form>
        </div>
      </div>

      <div className="row">
        <div className="col">
          <a href="#!" onClick={()=>formSwitcher('form-reset')}>Forget Password ?</a>
        </div>
      </div>

      <div className="container mt-3 text-center">
        <p>ackitech &copy; {new Date().getFullYear()}</p>
      </div>
    </div>
  );
};
