import { IHomeProps } from "../types/home";
import Image from "next/image";

import phones from "../assets/phones.png";
import logo from "../assets/logo.svg";
import users from "../assets/avatares.png";
import icon from "../assets/icongreen.svg";

export default function Home(props: IHomeProps) {
  return (
    <div className="max-w-[1124px] h-screen mx-auto grid grid-cols-2 items-center gap-28">
      <main>
        <Image src={logo} alt="logo NLW Copa" />

        <h1 className="mt-14 text-green-500 text-5xl font-bold leading-tight">
          Façam suas apostas! Nesse bolão da Copa, compartilhe com seus amigos e
          veja quem é melhor de palpite
        </h1>

        <div className="mt-10 flex items-center gap-2">
          <Image src={users} alt="avatars dos usuários" />
          <strong className="text-zinc-400">
            <span className="text-softGreen-500">+500</span> palpiteiros já
            estão usando!
          </strong>
        </div>

        <form className="mt-10 flex gap-2">
          <input
            className="flex-1 px-6 py-4 rounded bg-slate-700 border border-blue-400 text-sm"
            type="text"
            required
            placeholder="Dê um nome ao seu Bolão"
          />
          <button
            className="bg-nlwYellow-500 px-6 py-4 rounded text-gray-900 font-bold text-sm uppercase hover:bg-yellow-500 transition-2"
            type="submit"
          >
            Criar meu bolão
          </button>
        </form>

        <p className="mt-4 text-sm text-zinc-400 leading-relaxed">
          Após criar seu bolão, você receberá um código único que poderá usar
          para convidar outras pessoas 🚀
        </p>

        <footer className="mt-10 pt-10  border-t border-gray-600 items-center flex justify-between text-gray-100">
          <>
            <div className="flex items-center gap-6">
              <Image src={icon} alt="" />
              <div className="flex flex-col">
                <span className="font-bold text-2xl">+1.000</span>
                <span>Bolões criados</span>
              </div>
            </div>

            <div className="w-px h-18 bg-gray-600" />

            <div className="flex items-center gap-6">
              <Image src={icon} alt="" />
              <div className="flex flex-col">
                <span className="font-bold text-2xl">+1.000</span>
                <span>Palpites enviados</span>
              </div>
            </div>
          </>
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
