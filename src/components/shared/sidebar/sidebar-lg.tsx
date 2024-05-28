import React from 'react';

function SidebarLg() {
  return (
    <div className="hidden lg:flex w-[240px]  h-[100vh] fixed top-0 left-0 z-10  flex-shrink-0 flex-col bg-blue-800  ">
      <div className="mobile-sidebar-header md:hidden">
        <div className="header-logo">
          <a href="index.html">
            <img src="img/logo1.png" alt="logo" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default SidebarLg;
