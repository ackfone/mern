import React from 'react'

export const ResetPassword = ({resetEmailSubmit, formSwitcher, email, login_detail}) => {
  return (
    <div>
      <div className="row">
        <div className="col">
          <h2 className="text-center">Reset password</h2>
          <hr />
          <br />
          <form onSubmit={resetEmailSubmit}>
            <div class="form-group">
              <label for="user_email">Email</label>
              <input
                id="user_email"
                class="form-control p-3"
                type="email"
                name="email"
                placeholder='please enter email'
                value={email}
                onChange={login_detail}
              />
            </div>

            <div class="form-group">
              <button type="submit" className="btn btn-primary p-2 form-control">Sumbit</button>
            </div>
          </form>
        </div>
      </div>

      <div className="row">
        <div className="col text-center">
          <a href="#!" onClick={()=>formSwitcher('form-login')}>back to Login</a>
        </div>
      </div>

    </div>
  );
};

