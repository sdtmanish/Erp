import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  // Working Unsplash image URLs (reliable with random signatures)
  const demoImages = [
    'https://source.unsplash.com/featured/800x600?business&sig=1',
    'https://source.unsplash.com/featured/800x600?technology&sig=2',
    'https://source.unsplash.com/featured/800x600?office&sig=3',
    'https://source.unsplash.com/featured/800x600?startup&sig=4',
    'https://source.unsplash.com/featured/800x600?crm&sig=5',
  ];

  return (
    <div className="bg-white relative overflow-hidden min-h-screen">
      {/* Navigation */}
      <nav className="flex justify-between items-center px-6 py-4 shadow-md">
        <div className="flex items-center gap-2">
          <Image src="/logo.svg" alt="Jilva Logo" width={32} height={32} />
          <span className="text-xl font-bold">Jilva</span>
        </div>
        <div className="hidden md:flex gap-6">
          <Link href="#" className="text-gray-600 hover:text-black">LTR Demos</Link>
          <Link href="#" className="text-gray-600 hover:text-black">RTL Demos</Link>
          <Link href="#" className="text-gray-600 hover:text-black">Features</Link>
          <Link href="#" className="text-gray-600 hover:text-black">Support</Link>
        </div>
        <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700">
          Buy Now!
        </button>
      </nav>

      {/* Hero Section */}
      <section className="text-center py-20 px-4 relative">
        <h1 className="text-3xl md:text-5xl font-bold text-black">
          Jilva - CRM & ERP Solutions Company <br />
          HTML Template + RTL
        </h1>
        <p className="mt-6">
          <Link href="#">
            <button className="bg-gradient-to-r from-pink-500 to-orange-500 text-white px-6 py-3 mt-4 rounded-lg hover:opacity-90">
              See Demos
            </button>
          </Link>
        </p>

        {/* Demo Images */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-6 justify-center items-center px-6">
          {demoImages.map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`Demo ${idx + 1}`}
              className="w-full h-auto rounded-xl shadow-lg transition-transform hover:scale-105 duration-300"
              loading="lazy"
            />
          ))}
        </div>
      </section>
    </div>
  );
}
