import React from 'react';

const Nav = ({totalCounters}) => {
  return (<nav className="mb-3 navbar navbar-light bg-light">
  <span className="badge badge-primary">{totalCounters}</span>
</nav>);
}
 
export default Nav;
