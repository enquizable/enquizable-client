import React from 'react';

const Login: React.FC = () => (
  <div className="login-container">
    <a type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">
      Login/Create Account
    </a>

    {/* <!-- Modal --> */}
    <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">Login</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
          </div>
          <div className="modal-body">
            ... Work in Progress
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" className="btn btn-primary">Login</button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Login;
