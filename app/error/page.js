import React from 'react';

const ErrorPage = () => {
  return (
    <div className="flex flex-col gap-16 items-center justify-center min-h-screen bg-red-100 p-4">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-red-500 mb-4">Error</h1>
      <p className="text-lg md:text-xl lg:text-2xl text-center text-red-400 mb-2">
        Please check your URL and don't forget to add <b className="text-red-700">http</b> or <b className="text-red-700">https</b> .
      </p>
      <div className="mt-6">
        <a
          href="/"
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-green-600 transition duration-300"
        >
          Go Back Home
        </a>
      </div>
    </div>
  );
};

export default ErrorPage;