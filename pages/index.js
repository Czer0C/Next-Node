import Head from "next/head";
import { useState } from "react";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [response, responseSet] = useState();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { phone, password } = event.target;

    const res = await fetch("/api/login?id=1", {
      body: JSON.stringify({
        phone: phone.value,
        password: password.value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "PUT",
    });

    console.log(res);

    responseSet(JSON.stringify(await res.json(), null, 4));
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <div className={styles.grid}>
          <form onSubmit={handleSubmit}>
            <div className={styles.card}>
              <label htmlFor="phone">Phone</label>
              <input id="phone" type="phone" autoComplete="phone" required />
            </div>

            <div className={styles.card}>
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                autoComplete="password"
                required
              />
            </div>
            <button className={styles.button} type="submit">
              Login
            </button>
          </form>

          <div className={styles.description}>{<span>{response}</span>}</div>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}
