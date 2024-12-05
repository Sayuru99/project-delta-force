import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import HomePage from "./HomePage";

const Home = () => (
  <main className="flex items-center justify-center min-h-screen flex-col">
    <h1 className="text-3xl font-bold mb-6">Hello world!</h1>

    <LazyLoadImage
      alt="Sample Image"
      src="https://bpn.designsfrontier.com/wp-content/uploads/2024/11/news.png"
      effect="blur"
      className="w-full max-w-md"
    />
    <HomePage/>
  </main>
);

export default Home;
