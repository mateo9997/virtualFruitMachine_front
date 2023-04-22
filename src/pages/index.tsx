import Head from "next/head";
import FruitMachine from "../components/FruitMachine";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Virtual Fruit Machine</title>
        <meta name="description" content="Virtual Fruit Machine Game" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="text-2xl font-bold mb-4">Virtual Fruit Machine</h1>
        <FruitMachine />
      </main>
    </div>
  );
}
