import React from 'react';

const AboutPage = () => {
  return (
<div className="flex  flex-col items-center min-h-screen bg-green-200">
  {/* Hero Section */}
  <header className= "bg-green-200 container text-green-800 py-20">
    <div className="mx-auto px-4 text-center">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">About Us</h1>
      <p className="text-lg md:text-xl">Discover our journey in making links shorter and life easier.</p>
    </div>
  </header>

  {/* Main Content */}
<main className="flex-grow w-full px-4 py-8 container bg-green-200 text-green-800">
  <section className="mb-8 p-6 bg-white rounded-lg shadow-lg transform transition-transform hover:scale-105 border-2 border-neon-green">
    <h2 className="text-2xl md:text-3xl font-semibold mb-4">Our Story</h2>
    <p className="text-base md:text-lg">
      From humble beginnings, we aimed to simplify the web with our green-themed link shortener. Our journey has been fueled by innovation and a commitment to eco-friendly practices, ensuring that every click contributes to a greener planet...
    </p>
  </section>
  <section className="mb-8 p-6 bg-white rounded-lg shadow-lg transform transition-transform hover:scale-105 border-2 border-neon-green">
    <h2 className="text-2xl md:text-3xl font-semibold mb-4">Our Values</h2>
    <p className="text-base md:text-lg">
      Sustainability, simplicity, and user-centric design drive our green mission. We believe in creating technology that not only serves people but also respects the environment, paving the way for a sustainable future...
    </p>
  </section>
  <section className="mb-8 p-6 bg-white rounded-lg shadow-lg transform transition-transform hover:scale-105 border-2 border-neon-green">
    <h2 className="text-2xl md:text-3xl font-semibold mb-4">Benefits of Using Our Link Shortener</h2>
    <p className="text-base md:text-lg">
      Our link shortener not only makes your URLs more manageable but also enhances your online presence with analytics and tracking capabilities. Enjoy faster sharing, improved click-through rates, and a cleaner digital footprint.
    </p>
  </section>
  <section className="p-6 bg-white rounded-lg shadow-lg transform transition-transform hover:scale-105 border-2 border-neon-green">
    <h2 className="text-2xl md:text-3xl font-semibold mb-4">How Our Link Shortener Works</h2>
    <p className="text-base md:text-lg">
      Simply paste your long URL into our tool, and it will generate a concise, easy-to-share link. Our system ensures reliability and speed, making sure your links are always accessible and trackable.
    </p>
  </section>
</main>

  {/* Footer */}
  <footer className="text-green-700 container bg-green-200 py-6">
    <div className="container mx-auto px-4 text-center">
      <p className="text-sm md:text-base">&copy; 2023 GreenLink Shortener. All rights reserved.</p>
      <p className="text-sm md:text-base">Enhancing your digital experience, one link at a time.</p>
    </div>
  </footer>
</div>
  );
};

export default AboutPage;