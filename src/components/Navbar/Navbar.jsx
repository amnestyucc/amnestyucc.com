import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { active } from "./styles.module.scss";

const Navbar = ({ activeLink }) => {
  const [classNames, setClassNames] = useState({});
  const [test, setTest] = useState(active);

  useEffect(() => {
    //   activeLink === "Home"
    switch (activeLink) {
      case "Home":
        setClassNames({
          Home: [active]
        });
        break;
      default:
        setClassNames({
          Home: [active]
        });
    }
  });

  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/" className={test}>
              test
            </Link>
            {/* {activeLink == "Home" ? (
              <Link to="/" className={active}>
                Home
              </Link>
            ) : (
              <Link to="/">Home</Link>
            )} */}
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
