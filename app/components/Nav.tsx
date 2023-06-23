import React from "react";
import Link from "next/link";
import Search from "./Search";
const Nav = () => {
  const linksArr = [
    {
      href: "/users",
      link: "users",
    },
    {
      href: "/login",
      link: "logout",
    },
  ];
  return (
    <nav className="bg-black p-1 px-2 flex justify-between">
      <Link href={"/"}>LOGO</Link>
      <ul className="flex justify-between h-1/4 gap-2">
        <Search />
        {linksArr.map(({ href, link }, i) => {
          return (
            <li key={i}>
              {" "}
              <Link href={href}>{link}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
