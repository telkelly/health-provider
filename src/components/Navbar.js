import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
          <navbar>
            <h4 className="logo">Health-provider</h4>
        <div className="reg-side">
          <h4><Link to={'/checker'}>SymptomsChecker</Link></h4>
              <h4>
                <Link to={'/login'}>Log in</Link>
              </h4>
              <h4>
                <Link to={'register'}>Sign up</Link>
              </h4>
            </div>
          </navbar>
    </>
  );
};

export default Navbar;
