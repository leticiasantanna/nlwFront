import { IHomeProps } from "../types/home";
import Image from "next/image";

import phones from "../assets/phones.png";
import users from "../assets/avatares.png";
import icon from "../assets/icongreen.svg";
import { api } from "../lib/axios";
import { FormEvent, useState } from "react";
import Header from "../components/header";

export default function Home(props: IHomeProps) {
  const [poolName, setPoolName] = useState("");

  async function createPool(event: FormEvent) {
    event.preventDefault();

    try {
      const response = await api.post("/pools", {
        title: poolName,
      });

      const { code } = response.data;

      await navigator.clipboard.writeText(code);
      alert("Bolão criado, código copiado para área de transferência!");
      setPoolName("");
    } catch (error) {
      console.log(error);
      alert("Não foi possível criar o bolão, tente novamente!");
    }
  }

  return (
    <div className="max-w-[1124px] h-screen mx-auto grid grid-cols-2 items-center gap-28">
      <main>
        <Header />
        <h1 className="mt-14 text-green-500 text-5xl font-bold leading-tight">
          Façam suas apostas! Nesse bolão da Copa. Compartilhe com seus amigos e
          veja quem é melhor de palpite
        </h1>

        <div className="mt-10 flex items-center gap-2">
          <Image src={users} alt="avatars dos usuários" />
          <strong className="text-zinc-400">
            <span className="text-softGreen-500">+{props.userCount}</span>{" "}
            palpiteiros já estão usando!
          </strong>
        </div>

        <form onSubmit={createPool} className="mt-10 flex gap-2">
          <input
            className="flex-1 px-6 py-4 rounded bg-slate-700 border border-blue-400 text-sm text-gray-100"
            type="text"
            required
            placeholder="Dê um nome ao seu Bolão"
            onChange={(event) => setPoolName(event.target.value)}
            value={poolName}
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
                <span className="font-bold text-2xl">+{props.poolsCount}</span>
                <span>Bolões criados</span>
              </div>
            </div>

            <div className="w-px h-18 bg-gray-600" />

            <div className="flex items-center gap-6">
              <Image src={icon} alt="" />
              <div className="flex flex-col">
                <span className="font-bold text-2xl">+{props.guessCount}</span>
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
  const [poolCountResponse, guessCountResponse, userCountResponse] =
    await Promise.all([
      api.get("pools/count"),
      api.get("guesses/count"),
      api.get("users/count"),
    ]);
  return {
    props: {
      poolsCount: poolCountResponse.data.count,
      guessCount: guessCountResponse.data.count,
      userCount: userCountResponse.data.count,
    },
  };
};
