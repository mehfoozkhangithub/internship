import React from "react";
import Head from "next/head";
import "./global.css";
<<<<<<< HEAD
=======
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
>>>>>>> 3083bc45b76bf50104c6ffe0b4015ad95c7a4960
function MyApp({ Component, pageProps }) {
  return (
    <React.Fragment>
      <Head>
        <title>Industrial Project</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <Component {...pageProps} />
    </React.Fragment>
  );
}

export default MyApp;
