import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import car1 from "../assets/car1.jpg";
import car2 from "../assets/car2.jpg";
import car3 from "../assets/car3.jpg";
import car4 from "../assets/car4.jpg";
import car5 from "../assets/car5.jpg";

// Vehicle data (reuse the same structure as in Home)
const vehicles = [
  { 
    id: "efar-2024",
    name: "ZEUS",
    year: 2020,
    image: car1,
    description: "Our very first virtual car designed to participate in Formula Bharat Virtuals.",
    color: "255, 106, 11",
    specs: {
      topSpeed: "60 km/h",
      acceleration: "0-60 in 5.2s",
      weight: "NA kg",
      power: "6.6 kW",
      battery: "7.2 kWh",
      torque: "120 Nm"
    }
  },
  { 
    id: "efar-2023",
    name: "NEXUS",
    year: 2023,
    image: car2,
    description: "Our very first car designed and developed to participate in Formula Bharat.",
    color: "34, 165, 238",
    specs: {
      topSpeed: "80 km/h",
      acceleration: "0-60 in 4.5s",
      weight: "315 kg",
      power: "7 kW",
      battery: "6.8 kWh",
      torque: "160 Nm"
    }
  },
  { 
    id: "efar-2022a",
    name: "Tarkashya",
    year: 2024,
    image: car3,
    description: "A completely fresh car that helped us to open the door for future innovation.",
    color: "255, 106, 11",
    specs: {
      topSpeed: "80km/h",
      acceleration: "0-60 in 5.0s",
      weight: "320 kg",
      power: "6.9 kW",
      battery: "6.72 kWh",
      torque: "150 Nm"
    }
  },
  { 
    id: "efar-2022b",
    name: "Tarkashya 2.0",
    year: 2025,
    image: car5,
    description: "The vehicle which helped us to secure AIR 10th place in Formula Bharat 2025.",
    color: "34, 165, 238",
    specs: {
      topSpeed: "90 km/h",
      acceleration: "0-60 in 6.5s",
      weight: "310 kg",
      power: "13.4 kW",
      battery: "6.04 kWh",
      torque: "150 Nm"
    }
  },
  { 
    id: "efar-2022c",
    name: "Tarkashya 3.0",
    year: 2026,
    image: car4,
    description: "Latest vehicle that is being developed for Formula Bharat 2026.",
    color: "255, 106, 11",
    specs: {
      topSpeed: "100 km/h",
      acceleration: "0-60 in 5.5s",
      weight: "310 kg",
      power: "13.4 kW",
      battery: "604.0 kWh",
      torque: "150 Nm"
    }
  }
];

// Vehicle Card Component (same as Home carousel card style)
const VehicleCard = ({ car }) => (
  <div style={{
    background: 'black',
    borderRadius: '16px',
    overflow: 'hidden',
    border: `3px solid rgb(${car.color})`,
    boxShadow: `0 10px 30px rgba(${car.color}, 0.3)`,
    maxWidth: '400px',
    margin: '0 auto'
  }}>
    <img
      src={car.image}
      alt={car.name}
      style={{
        width: '100%',
        height: '250px',
        objectFit: 'cover'
      }}
    />
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h2 style={{ color: `rgb(${car.color})`, fontSize: '1.8rem', fontWeight: 'bold' }}>{car.name}</h2>
      <span style={{ color: 'white', fontSize: '1rem', fontWeight: '500' }}>{car.year}</span>
    </div>
  </div>
);

export default function CarDetail() {
  const { id } = useParams();
  const [car, setCar] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  // Check mobile
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const selectedCar = vehicles.find(v => v.id === id);
    setCar(selectedCar);
  }, [id]);

  if (!car) return <div style={{ color: 'white', textAlign: 'center', padding: '2rem' }}>Car not found</div>;

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(to bottom, #0b0f1d, #10121b, #14171f)',
      color: 'white',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      padding: isMobile ? '2rem 1rem' : '4rem 2rem'
    }}>
      {/* Back Link */}
      <Link to="/"
        style={{
          color: '#22a5ee',
          marginBottom: '2rem',
          display: 'inline-block',
          textDecoration: 'none',
          fontWeight: 'bold'
        }}>
        ← Back to Home
      </Link>

      {/* Vehicle Card */}
      <VehicleCard car={car} />

      {/* Description */}
      <section style={{
        marginTop: '2rem',
        textAlign: 'center',
        maxWidth: '800px',
        marginLeft: 'auto',
        marginRight: 'auto'
      }}>
        <p style={{
          fontSize: isMobile ? '1rem' : '1.25rem',
          lineHeight: '1.8',
          color: '#d1d5db'
        }}>
          {car.description}
        </p>
      </section>

      {/* Specifications */}
      <section style={{
        marginTop: '3rem',
        maxWidth: '800px',
        marginLeft: 'auto',
        marginRight: 'auto'
      }}>
        <h3 style={{ textAlign: 'center', fontSize: isMobile ? '1.5rem' : '2rem', color: '#ff6a0b', marginBottom: '1.5rem' }}>
          Technical Specifications
        </h3>
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
          gap: '1rem'
        }}>
          {Object.entries(car.specs).map(([key, value]) => (
            <div key={key} style={{
              background: 'rgba(255, 255, 255, 0.05)',
              border: `1px solid rgba(${car.color}, 0.2)`,
              borderRadius: '12px',
              padding: '15px',
              display: 'flex',
              justifyContent: 'space-between'
            }}>
              <span style={{ color: 'rgba(255,255,255,0.7)', textTransform: 'capitalize' }}>{key.replace(/([A-Z])/g, ' $1')}:</span>
              <span style={{ color: `rgb(${car.color})`, fontWeight: 'bold' }}>{value}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
