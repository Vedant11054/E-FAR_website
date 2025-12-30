import { TransitionLink } from "../components/TransitionProvider";
import car1 from "../assets/car1.jpg";
import car2 from "../assets/car2.jpg";
import car3 from "../assets/car3.jpg";
import car4 from "../assets/car4.jpg";
import car5 from "../assets/car5.jpg";

// Force update in development
if (import.meta.env.DEV) {
  console.log('🚗 Cars page loaded - Formula Bharat theme active');
}

export default function Cars() {
  const cars = [
    { id: "efar-2024", name: "ZEUS", year: 2020, image: car1, description: "Our very first virtual car designed to participate in Formula Bharat Virtuals." },
    { id: "efar-2023", name: "NEXUS", year: 2023, image: car2, description: "Our very first car designed and developed to participate in Formula Bharat." },
    { id: "efar-2022a", name: "Tarkashya", year: 2024, image: car3, description: "A completely fresh car that helped us to open the door for future innovation." },
    { id: "efar-2022b", name: "Tarkashya 2.0", year: 2025, image: car5, description: "The vehicle which helped us to secure AIR 10th place in Formula Bharat 2025." },
    { id: "efar-2022c", name: "Tarkashya 3.0", year: 2026, image: car4, description: "Latest vehicle that is being developed for Formula Bharat 2026." },
  ];

  const Card = ({ car }) => (
    <div
      className="flex flex-col bg-brand-dark border border-brand-orange/30 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden hover:scale-105"
      style={{
        backgroundColor: '#1A1A1A',
        border: '1px solid rgba(247, 108, 19, 0.3)',
        borderRadius: '16px',
        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(247, 108, 19, 0.1)',
        transition: 'all 0.3s ease',
      }}
    >
      {/* Image with enhanced styling and gradient overlay */}
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-t-2xl border-b border-brand-orange/20">
        <img
          src={car.image}
          alt={car.name}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
          style={{
            filter: 'brightness(1.1) contrast(1.05)',
            boxShadow: 'inset 0 0 20px rgba(247, 108, 19, 0.1)',
          }}
        />
        {/* Gradient overlay for depth */}
        <div 
          className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"
          style={{
            background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.2) 50%, transparent 100%)',
          }}
        ></div>
        {/* Year badge with orange glow */}
        <div 
          className="absolute top-4 right-4 bg-brand-orange text-brand-white px-3 py-1 rounded-full text-sm font-bold shadow-lg"
          style={{
            backgroundColor: '#F76C13',
            color: '#FFFFFF',
            boxShadow: '0 4px 12px rgba(247, 108, 19, 0.4)',
            backdropFilter: 'blur(10px)',
          }}
        >
          {car.year}
        </div>
      </div>
      
      {/* Content */}
      <div className="flex flex-col flex-1 p-6 bg-gradient-to-b from-transparent via-black/10 to-black/20">
        <div className="flex flex-col items-center justify-center mb-4">
          <h3
            className="text-2xl md:text-3xl font-bold text-brand-white leading-tight text-center"
            style={{ 
              color: '#FFFFFF',
              textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)',
            }}
          >
            {car.name}
          </h3>
        </div>
        <p
          className="text-brand-white/85 leading-relaxed mb-6 flex-1 text-base"
          style={{ 
            color: 'rgba(255, 255, 255, 0.85)',
            lineHeight: '1.6',
            fontSize: '1rem',
          }}
        >
          {car.description}
        </p>
        {/* Enhanced View More Link with orange gradient */}
        <TransitionLink
          to={`/cars/${car.id}`}
          className="inline-flex items-center justify-center bg-gradient-to-r from-brand-orange to-brand-orange/90 text-brand-white font-bold py-3 px-6 rounded-xl hover:from-brand-orange/90 hover:to-brand-orange transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
          style={{
            background: 'linear-gradient(135deg, #F76C13 0%, #E55A0F 100%)',
            color: '#FFFFFF',
            fontWeight: 'bold',
            padding: '12px 24px',
            borderRadius: '12px',
            transition: 'all 0.3s ease',
            boxShadow: '0 4px 15px rgba(247, 108, 19, 0.3)',
          }}
        >
          View Details
          <svg
            className="ml-2 w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </TransitionLink>
      </div>
    </div>
  );

  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: '#0B0B0B', minHeight: '100vh' }}
    >
      {/* Hero Section */}
      <section
        className="py-20 relative overflow-hidden"
        style={{
          backgroundColor: '#0B0B0B',
          padding: '80px 0',
          background: 'linear-gradient(135deg, #0B0B0B 0%, #1A1A1A 50%, #0B0B0B 100%)',
          position: 'relative',
        }}
      >
        {/* Subtle orange gradient overlay */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            background: 'radial-gradient(circle at center, rgba(247, 108, 19, 0.1) 0%, transparent 70%)',
          }}
        ></div>
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <h1
            className="text-5xl md:text-7xl font-bold mb-6"
            style={{
              color: '#F76C13',
              fontSize: 'clamp(3rem, 8vw, 5rem)',
              fontWeight: 'bold',
              marginBottom: '24px',
              textShadow: '0 4px 20px rgba(247, 108, 19, 0.3)',
            }}
          >
            Our FSEA Cars
          </h1>
          <p
            className="text-xl md:text-2xl"
            style={{
              color: 'rgba(255, 255, 255, 0.8)',
              fontSize: 'clamp(1.125rem, 3vw, 1.5rem)',
              maxWidth: '600px',
              margin: '0 auto',
            }}
          >
            Explore our electric FSEA cars.
          </p>
        </div>
      </section>
      
      {/* Cards Grid */}
      <section
        className="py-20 relative"
        style={{
          backgroundColor: '#1A1A1A',
          padding: '80px 0',
          background: 'linear-gradient(180deg, #1A1A1A 0%, #0B0B0B 100%)',
          position: 'relative',
        }}
      >
        {/* Subtle orange accent lines */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'linear-gradient(90deg, transparent 49%, rgba(247, 108, 19, 0.1) 50%, transparent 51%)',
            backgroundSize: '40px 100%',
          }}
        ></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div
            className="grid gap-8 md:gap-10 lg:gap-12"
            style={{
              display: 'grid',
              gap: '32px',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              maxWidth: '1200px',
              margin: '0 auto',
            }}
          >
            {cars.map((car) => (
              <Card key={car.id} car={car} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}