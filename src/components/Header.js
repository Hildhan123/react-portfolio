import React from 'react';

const Header = () => {
  return (
    <div class="topbar-nav fixed-top">
      <div class="brand">
        <img src="assets/favicon.ico" alt="" width="30" height="30" />
      </div>
      <h3 class="ml-1">Hildhan Hakim</h3>
      <button class="btn-fab toggle-menu mr-3"><span class="ti-menu"></span></button>
    </div>
  );
};

export default Header;
