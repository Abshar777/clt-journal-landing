"use client";
import React from "react";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "features", href: "#features" },
  { name: "steps", href: "#steps" },
  { name: "Services", href: "#services" },
  { name: "Intgration", href: "#integration" },
  { name: "ai", href: "#ai", },
];

const Nav = () => {
  return (
    <header>
      <div
      style={{backgroundColor:"rgb(225 127 127 / 9%); backdrop-filter: blur(10px);"}}
        className="header-one opacity-0   py-2 px-6  rounded-full lp:!max-w-[1290px] xl:max-w-[1140px] lg:max-w-[960px] md:max-w-[720px] sm:max-w-[540px] min-[500px]:max-w-[450px] min-[425px]:max-w-[375px] max-w-[320px] mx-auto w-full fixed left-1/2 -translate-x-1/2 z-50 top-5 flex items-center justify-between     dark:border-stroke-6 bg-accent  "
        data-ns-animate=""
        data-direction="up"
        data-offset={100}
      >
        {/* Logo */}
        <a href="index-2.html">
          <span className="sr-only">Home</span>
          <figure className="lg:max-w-[100px] lg:block hidden">
            <img
              src="/logo.png"
              alt="NextSaaS"
             
            />
          </figure>
          <figure className="max-w-[80px] lg:hidden block">
       
            <img
              src="/our/logo.png"
              alt="NextSaaS"
              className="w-full dark:block hidden"
            />
          </figure>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden xl:flex items-center">
          <ul className="flex items-center">
            {navItems.map((item) =>
             (
                <li
                  key={item.name}
                  className="relative group/nav cursor-pointer py-2.5"
                >
                  <a href={item.href} className="nav-item-link">
                    <span>{item.name}</span>
                    
                  </a>
                </li>
              )
            )}
          </ul>
        </nav>

        {/* CTA */}
        <div className="xl:flex hidden items-center justify-center">
          <a
            href="https://wa.link/z7re0z"
            className="btn btn-md btn-primary hover:btn-white-dark dark:hover:btn-white"
          >
            <span>Get started</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="xl:hidden block">
        <a
            href="https://wa.link/z7re0z"
            className="btn btn-md btn-primary hover:btn-white-dark dark:hover:btn-white"
          >
            <span>Get started</span>
          </a>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <aside className="sidebar fixed top-0 right-0 w-full sm:w-1/2 translate-x-full transition-all duration-300 h-screen bg-white dark:bg-background-7 xl:hidden z-[999] scroll-bar">
        <div className="lg:p-9 sm:p-8 p-5 space-y-4">
          {/* Sidebar Header */}
          <div className="flex items-center justify-between">
            <a href="index.html">
              <span className="sr-only">Home</span>
              <figure className="max-w-[44px]">
                <img
                  src="images/shared/logo.svg"
                  alt="NextSaaS"
                  className="w-full dark:hidden block"
                />
                <img
                  src="images/shared/logo-dark.svg"
                  alt="NextSaaS"
                  className="w-full dark:block hidden"
                />
              </figure>
            </a>
            <button className="nav-hamburger-close flex flex-col gap-1.5 size-10 bg-background-4 dark:bg-background-9 rounded-full items-center justify-center cursor-pointer relative">
              <span className="sr-only">Close Menu</span>
              <span className="block w-4 h-0.5 bg-stroke-9/60 dark:bg-stroke-1 rotate-45 absolute" />
              <span className="block w-4 h-0.5 bg-stroke-9/60 dark:bg-stroke-1 -rotate-45 absolute" />
            </button>
          </div>

          {/* Sidebar Nav */}
          <div className="h-[85vh] w-full overflow-y-auto overflow-x-hidden pb-10 scroll-bar">
            <ul>
              {navItems.map((item) => (
                <li key={item.name} className="relative space-y-0">
                  <button className="sub-menu text-tagline-1 font-normal text-secondary/60 dark:text-[#746d6d] transition-all duration-200 py-3 border-b border-stroke-4 dark:border-stroke-6 w-full text-left flex items-center justify-between cursor-pointer">
                    <span>{item.name}</span>
                    
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </aside>
    </header>
  );
};

export default Nav;
