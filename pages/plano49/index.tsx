import Head from "next/head";
import { useEffect, useState } from "react";

var docInit;

export default function Plano() {
  const [doc, setdoc] = useState();

  useEffect(() => {
    document.location.replace(
      "https://app.monetizze.com.br/r/AKP22001951?u=c&pl=FU182694"
    );
  });

  return (
    <div>
      <Head>
        <title>DESAFIO DOS 19 DIAS</title>
        <meta
          name="description"
          content="Página de vendas do curso Alongamento de unhas com Gabi Oliveira"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Marcos Oliveira " />
      </Head>
    </div>
  );
}
