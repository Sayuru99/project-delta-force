import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Home = () => (
  <main className="p-8">
    <h1 className="text-3xl font-semibold mb-4">Welcome to BPN</h1>
    <p className="text-lg mb-6">
      This is a sample website built using Vite, React, and Tailwind.
    </p>
    <h1>Test Tharusha</h1>
    <h1>ses ses</h1>
    <LazyLoadImage
      alt="Sample Image"
      src="https://bpn.designsfrontier.com/wp-content/uploads/2024/11/news.png"
      effect="blur"
      width="100%"
    />
  </main>
);

export default Home;
