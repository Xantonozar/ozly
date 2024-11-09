import localFont from "next/font/local";
const weather = localFont({
  src: "./fonts/Merriweather-BoldItalic.ttf",
  variable: "--font-weather",
  weight: "100 900",
});
const kanit = localFont({
  src: "./fonts/Kanit-Bold.ttf",
  variable: "--font-weather",
  weight: "100 900",
});
export default function Home() {
  
  return (
   <div className="hero-section flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-white to-gray-200 text-green-700 p-8">
  <h1 className={`text-3xl md:text-4xl lg:text-6xl font-bold mb-14 text-center ${kanit.className}`}>Welcome to Link Shortener</h1>
<p className={`text-sm md:text-xl lg:text-1xl mb-4 text-center ${weather.className}`}>
  Shorten links easily. Enhance marketing and boost engagement with our tool. Trusted by many.

</p>
<p className={`text-sm md:text-lg lg:text-xl mb-8 text-center ${weather.className}`}>

  Use without any login or password
</p>
  <div className="w-full max-w-md md:max-w-lg lg:max-w-xl mb-8">
    {/* <Image src="/hero-image.png" alt="Link Shortener" layout="responsive" width={600} height={400} className="rounded-lg shadow-lg" /> */}
    <img src="https://www.capsulink.com/assets/img/hero/capsulink-short-link-personalization-by-device-location-language-time.svg" class="w-full h-auto max-h-[500px] object-cover" />
  </div>
  <button className="mt-4 px-6 py-3 bg-green-500 text-white font-semibold rounded-full shadow-lg hover:bg-green-700 transition duration-300">
    Get Started
  </button>
</div>
  );
}