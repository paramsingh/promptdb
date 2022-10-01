import * as React from "react";
import Link from "next/link";

const NavItem = ({ text, href }: { text: string; href: string }) => {
  return (
    <Link href={href}>
      <a style={{ textDecoration: "none" }}>{text}</a>
    </Link>
  );
};

export default NavItem;
