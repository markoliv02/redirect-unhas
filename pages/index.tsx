import Head from "next/head";
import { useEffect, useState } from "react";

var docInit;

export default function Home() {
  const [doc, setdoc] = useState();

  useEffect(() => {
    document.location.replace(
      "https://app.monetizze.com.br/r/AKP22001951/?u=GN71648"
    );
  });
  return (
    <div>
      <Head>
        <title>Alongamento49</title>
      </Head>
    </div>
  );
}
