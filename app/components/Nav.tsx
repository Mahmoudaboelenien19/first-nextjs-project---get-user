import React from "react";
import Link from "next/link";
import Search from "./Search";
import Profile from "./Profile";
import Togglar from "./Togglar";
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
    <nav className=" bg-green-500  dark:bg-black p-1 px-2 flex justify-between items-center ">
      <Link href={"/"}>
        <Profile />
      </Link>
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
        <Togglar />
      </ul>
    </nav>
  );
};

export default Nav;
