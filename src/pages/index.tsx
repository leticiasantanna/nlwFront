import { IHomeProps } from "../types/home";
import Image from "next/image";

import phones from "../assets/phones.png";
import logo from "../assets/logo.svg";
import users from "../assets/users.png";
import icon from "../assets/icongreen.svg";

export default function Home(props: IHomeProps) {
  return (
    <div className="max-w-[1124px] h-screen mx-auto grid grid-cols-2 items-center">
      <main>
        <Image src={logo} alt="logo NLW Copa" />

        <h1>
          Façam suas apostas! Nesse bolão da copa 2022 e veja quem é melhor de
          palpite
        </h1>

        <div>
          <Image src={users} alt="avatars dos usuários" />
          <strong>
            <span>+500</span> palpiteiros estão usando!
          </strong>
        </div>

        <form>
          <input type="text" required placeholder="Dê um nome ao seu Bolão" />
          <button type="submit">Criar meu bolão</button>
        </form>

        <p>
          Após criar seu bolão, você receberá um código único que poderá usar
          para convidar outras pessoas 🚀
        </p>

        <footer>
          <div>
            <Image src={icon} alt="" />
            <span>+1.000</span>
            <span>Bolões criados</span>
          </div>

          <div>
            <Image src={icon} alt="" />
            <span>+1.000</span>
            <span>Bolões criados</span>
          </div>
        </footer>
      </main>

      <Image src={phones} alt="celulares exibindo app NLW Copa" quality={100} />
    </div>
  );
}

export const getServerSideProps = async () => {
  const response = await fetch("http://localhost:3333/pools/count");
  const data = await response.json();

  return {
    props: {
      count: data.count,
    },
  };
};
