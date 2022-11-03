import Image from "next/image";
import { ReactElement } from "react";

import logo from "../../assets/logo.svg";

function Header(): ReactElement {
  return <Image src={logo} alt="logo NLW Copa" />;
}

export default Header;
