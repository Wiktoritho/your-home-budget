"use client";

import ReduxProvider from "@/store/redux-provider";
import Header from "./components/Header/page";
import About from "./components/Main/About/page";
import Offers from "./components/Main/Offers/page";

const Home = () => {

  return (
    <ReduxProvider>
      <main className="flex min-h-screen flex-col items-center max-w-[1920px]">
        <Header />
        <About />
        <Offers />
      </main>
    </ReduxProvider>
  );
}

export default Home;