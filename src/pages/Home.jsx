import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import teamPhoto from "../assets/team_photo1.jpg";
import car1 from "../assets/car1.jpg";
import car2 from "../assets/car2.jpg";
import car3 from "../assets/car3.jpg";
import car4 from "../assets/car4.jpg";
import car5 from "../assets/car5.jpg";
import heroVideo from "../assets/Web Vid.mp4";

const vehicles = [
  { 
    name: "ZEUS", 
    image: car1, 
    description: "Our first electric formula car, built for speed and reliability.",
    year: "2024",
    color: "255, 106, 11",
    specs: {
      topSpeed: "120 km/h",
      acceleration: "0-60 in 4.2s",
      weight: "280 kg",
      power: "80 kW",
      battery: "7.2 kWh",
      torque: "240 Nm"
    },
    features: [
      "Advanced aerodynamics package",
      "Lightweight carbon fiber chassis",
      "Regenerative braking system",
      "High-efficiency powertrain"
    ]
  },
  { 
    name: "NEXUS", 
    image: car2, 
    description: "Enhanced aerodynamics and improved battery management.",
    year: "2023",
    color: "34, 165, 238",
    specs: {
      topSpeed: "115 km/h",
      acceleration: "0-60 in 4.5s",
      weight: "290 kg",
      power: "75 kW",
      battery: "6.8 kWh",
      torque: "220 Nm"
    },
    features: [
      "Improved suspension system",
      "Enhanced cooling package",
      "Advanced telemetry system",
      "Optimized weight distribution"
    ]
  },
  { 
    name: "Tarkashya", 
    image: car3, 
    description: "Lightweight chassis with advanced suspension system.",
    year: "2022",
    color: "255, 106, 11",
    specs: {
      topSpeed: "110 km/h",
      acceleration: "0-60 in 5.0s",
      weight: "300 kg",
      power: "70 kW",
      battery: "6.4 kWh",
      torque: "200 Nm"
    },
    features: [
      "Robust foundation design",
      "Reliable performance",
      "First-generation EV platform",
      "Proven durability"
    ]
  },
  { 
    name: "Tarkashya 2.0", 
    image: car5, 
    description: "Refined structure, enhanced endurance performance.",
    year: "2022",
    color: "34, 165, 238",
    specs: {
      topSpeed: "112 km/h",
      acceleration: "0-60 in 4.8s",
      weight: "295 kg",
      power: "72 kW",
      battery: "6.6 kWh",
      torque: "210 Nm"
    },
    features: [
      "Better aero package",
      "Cooling upgrades",
      "Improved endurance",
      "Enhanced stability"
    ]
  },
  { 
    name: "Tarkashya 3.0", 
    image: car4, 
    description: "Latest innovation with cutting-edge technology.",
    year: "2022",
    color: "255, 106, 11",
    specs: {
      topSpeed: "118 km/h",
      acceleration: "0-60 in 4.6s",
      weight: "285 kg",
      power: "78 kW",
      battery: "7.0 kWh",
      torque: "230 Nm"
    },
    features: [
      "Experimental upgrades",
      "Stability improvements",
      "Thermal management",
      "Performance optimization"
    ]
  }
];

const achievements = [
  { title: "National Champions 2024", description: "Secured 1st place at SAE India Formula Student.", icon: "🏆", color: "#ff6a0b" },
  { title: "Best Innovation Award", description: "Recognized for our unique battery cooling system.", icon: "💡", color: "#22a5ee" },
  { title: "Fastest Lap Record", description: "Achieved the fastest lap at SVPCET Racing Track.", icon: "⚡", color: "#ff6a0b" },
  { title: "Excellence in Design", description: "Awarded for outstanding vehicle design and performance.", icon: "⭐", color: "#22a5ee" }
];

const sponsors = [
  { logo: "/sponsor1.jpg", url: "https://eiprismindia.in/" },
  { logo: "/sponsor2.jpg", url: "https://thebombaytools.com/" },
  { logo: "/sponsor3.jpg", url: "https://www.mahabearings.com/" },
  { logo: "/sponsor4.jpg", url: "https://www.carbonext.net/" },
  { logo: "/sponsor5.jpg", url: "https://www.pcbpower.com/" },
  { logo: "/sponsor6.jpg", url: "https://corp.vashiisl.com/" },
  { logo: "/sponsor7.jpg", url: "https://www.asaphardwaresolutions.com/" },
  { logo: "/sponsor8.jpg", url: "https://www.bender-apac.com/products/" },
];

export default function Home() {
  const [hoveredAchievement, setHoveredAchievement] = useState(null);
  const [hoveredSponsor, setHoveredSponsor] = useState(null);
  const [isVisible, setIsVisible] = useState({});
  const [selectedCar, setSelectedCar] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({
              ...prev,
              [entry.target.id]: true
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('[data-animate]');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // Car Detail Modal Component
  const CarDetailModal = ({ car, onClose }) => (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.9)',
      zIndex: 1000,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: isMobile ? '10px' : '20px',
      animation: 'fadeIn 0.3s ease-out'
    }}>
      <div style={{
        backgroundColor: 'black',
        borderRadius: isMobile ? '15px' : '20px',
        maxWidth: isMobile ? '100%' : '900px',
        width: '100%',
        maxHeight: '90vh',
        overflow: 'auto',
        border: `3px solid rgb(${car.color})`,
        boxShadow: `0 0 50px rgba(${car.color}, 0.5)`,
        position: 'relative'
      }}>
        {/* Close button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '15px',
            right: '15px',
            background: 'white',
            color: 'black',
            border: 'none',
            borderRadius: '50%',
            width: '40px',
            height: '40px',
            fontSize: '20px',
            fontWeight: 'bold',
            cursor: 'pointer',
            zIndex: 1001,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          ×
        </button>

        {/* Header */}
        <div style={{
          background: `linear-gradient(135deg, rgb(${car.color}), rgba(${car.color}, 0.8))`,
          padding: isMobile ? '20px 15px' : '30px',
          textAlign: 'center',
          position: 'relative'
        }}>
          <div style={{
            position: 'absolute',
            top: '15px',
            right: isMobile ? '60px' : '70px',
            backgroundColor: 'white',
            color: `rgb(${car.color})`,
            padding: '6px 12px',
            borderRadius: '20px',
            fontSize: isMobile ? '12px' : '14px',
            fontWeight: 'bold'
          }}>
            {car.year}
          </div>
          <h2 style={{
            color: 'white',
            fontSize: isMobile ? '28px' : '48px',
            fontWeight: 'bold',
            marginBottom: '10px',
            textShadow: '0 2px 4px rgba(0,0,0,0.3)'
          }}>
            {car.name}
          </h2>
          <p style={{
            color: 'rgba(255, 255, 255, 0.9)',
            fontSize: isMobile ? '14px' : '18px',
            margin: 0
          }}>
            {car.description}
          </p>
        </div>

        {/* Content */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
          gap: isMobile ? '20px' : '30px',
          padding: isMobile ? '20px 15px' : '30px'
        }}>
          {/* Image */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}>
            <img
              src={car.image}
              alt={car.name}
              style={{
                width: '100%',
                height: isMobile ? '200px' : '250px',
                objectFit: 'cover',
                borderRadius: '15px',
                marginBottom: '20px',
                border: `2px solid rgba(${car.color}, 0.3)`
              }}
            />
            
            {/* Features */}
            <div style={{
              background: 'rgba(255, 255, 255, 0.05)',
              borderRadius: '15px',
              padding: isMobile ? '15px' : '20px',
              width: '100%',
              border: `1px solid rgba(${car.color}, 0.2)`
            }}>
              <h4 style={{
                color: `rgb(${car.color})`,
                fontSize: isMobile ? '16px' : '18px',
                fontWeight: 'bold',
                marginBottom: '15px'
              }}>
                Key Features
              </h4>
              {car.features.map((feature, index) => (
                <div key={index} style={{
                  color: 'white',
                  fontSize: isMobile ? '12px' : '14px',
                  marginBottom: '8px',
                  display: 'flex',
                  alignItems: 'center'
                }}>
                  <div style={{
                    width: '6px',
                    height: '6px',
                    backgroundColor: `rgb(${car.color})`,
                    borderRadius: '50%',
                    marginRight: '10px'
                  }}></div>
                  {feature}
                </div>
              ))}
            </div>
          </div>

          {/* Specifications */}
          <div>
            <h4 style={{
              color: 'white',
              fontSize: isMobile ? '20px' : '24px',
              fontWeight: 'bold',
              marginBottom: '20px',
              textAlign: 'center'
            }}>
              Technical Specifications
            </h4>
            <div style={{
              display: 'grid',
              gap: '15px'
            }}>
              {Object.entries(car.specs).map(([key, value]) => (
                <div key={key} style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  borderRadius: '10px',
                  padding: isMobile ? '12px' : '15px',
                  border: `1px solid rgba(${car.color}, 0.2)`,
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}>
                  <span style={{
                    color: 'rgba(255, 255, 255, 0.7)',
                    fontSize: isMobile ? '12px' : '14px',
                    textTransform: 'capitalize'
                  }}>
                    {key.replace(/([A-Z])/g, ' $1').trim()}:
                  </span>
                  <span style={{
                    color: `rgb(${car.color})`,
                    fontSize: isMobile ? '14px' : '16px',
                    fontWeight: 'bold'
                  }}>
                    {value}
                  </span>
                </div>
              ))}
            </div>

            {/* View More Button */}
            <div style={{ textAlign: 'center', marginTop: '30px' }}>
              <Link
                to="/cars"
                style={{
                  backgroundColor: `rgb(${car.color})`,
                  color: 'white',
                  padding: isMobile ? '12px 24px' : '15px 30px',
                  borderRadius: '25px',
                  textDecoration: 'none',
                  fontSize: isMobile ? '14px' : '16px',
                  fontWeight: 'bold',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'white';
                  e.currentTarget.style.color = `rgb(${car.color})`;
                  e.currentTarget.style.transform = 'scale(1.05)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = `rgb(${car.color})`;
                  e.currentTarget.style.color = 'white';
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              >
                View All Cars
                <svg style={{ width: '16px', height: '16px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Car Carousel Card Component
  const CarouselCard = ({ car, index, totalCards }) => (
    <div
      style={{
        position: 'absolute',
        width: isMobile ? '180px' : '240px',
        height: isMobile ? '240px' : '320px',
        borderRadius: '16px',
        overflow: 'hidden',
        border: `3px solid rgb(${car.color})`,
        boxShadow: `0 10px 30px rgba(${car.color}, 0.3)`,
        inset: '0',
        transform: `rotateY(${(360 / totalCards) * index}deg) translateZ(${isMobile ? '280px' : '380px'})`,
        background: 'black',
        cursor: 'pointer'
      }}
      onClick={() => setSelectedCar(car)}
    >
      {/* Image Section */}
      <div style={{
        position: 'relative',
        width: '100%',
        height: isMobile ? '120px' : '160px',
        overflow: 'hidden'
      }}>
        <img
          src={car.image}
          alt={car.name}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }}
        />
        <div style={{
          position: 'absolute',
          inset: '0',
          background: `radial-gradient(circle, rgba(${car.color}, 0.1) 0%, rgba(${car.color}, 0.3) 60%, rgba(0, 0, 0, 0.4) 100%)`
        }}></div>
        <div style={{
          position: 'absolute',
          top: '8px',
          right: '8px',
          backgroundColor: `rgb(${car.color})`,
          color: 'white',
          padding: '4px 8px',
          borderRadius: '12px',
          fontSize: isMobile ? '10px' : '12px',
          fontWeight: 'bold'
        }}>
          {car.year}
        </div>
      </div>

      {/* Content Section */}
      <div style={{
        padding: isMobile ? '15px' : '20px',
        height: isMobile ? 'calc(100% - 120px)' : 'calc(100% - 160px)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
      }}>
        <div>
          <h3 style={{
            color: 'white',
            fontSize: isMobile ? '16px' : '20px',
            fontWeight: 'bold',
            marginBottom: '10px',
            textAlign: 'center'
          }}>
            {car.name}
          </h3>
          <p style={{
            color: 'rgba(255, 255, 255, 0.8)',
            fontSize: isMobile ? '11px' : '13px',
            lineHeight: '1.4',
            textAlign: 'center',
            display: '-webkit-box',
            WebkitLineClamp: isMobile ? '2' : '3',
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden'
          }}>
            {car.description}
          </p>
        </div>

        <div style={{
          backgroundColor: `rgba(${car.color}, 0.2)`,
          color: 'white',
          padding: isMobile ? '6px 12px' : '8px 16px',
          borderRadius: '8px',
          fontSize: isMobile ? '10px' : '12px',
          fontWeight: 'bold',
          textAlign: 'center',
          marginTop: '10px',
          border: `1px solid rgba(${car.color}, 0.4)`
        }}>
          Click for Details
        </div>
      </div>
    </div>
  );

  // Mobile Car Grid Component
  const MobileCarGrid = () => (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: '20px',
      padding: '0 20px',
      maxWidth: '1200px',
      margin: '0 auto'
    }}>
      {vehicles.map((car) => (
        <div
          key={car.name}
          style={{
            background: 'black',
            borderRadius: '16px',
            overflow: 'hidden',
            border: `3px solid rgb(${car.color})`,
            boxShadow: `0 10px 30px rgba(${car.color}, 0.3)`,
            cursor: 'pointer',
            transition: 'transform 0.3s ease'
          }}
          onClick={() => setSelectedCar(car)}
        >
          {/* Image Section */}
          <div style={{
            position: 'relative',
            width: '100%',
            height: '180px',
            overflow: 'hidden'
          }}>
            <img
              src={car.image}
              alt={car.name}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
            />
            <div style={{
              position: 'absolute',
              inset: '0',
              background: `radial-gradient(circle, rgba(${car.color}, 0.1) 0%, rgba(${car.color}, 0.3) 60%, rgba(0, 0, 0, 0.4) 100%)`
            }}></div>
            <div style={{
              position: 'absolute',
              top: '12px',
              right: '12px',
              backgroundColor: `rgb(${car.color})`,
              color: 'white',
              padding: '6px 12px',
              borderRadius: '15px',
              fontSize: '14px',
              fontWeight: 'bold'
            }}>
              {car.year}
            </div>
          </div>

          {/* Content Section */}
          <div style={{
            padding: '20px'
          }}>
            <h3 style={{
              color: 'white',
              fontSize: '20px',
              fontWeight: 'bold',
              marginBottom: '10px',
              textAlign: 'center'
            }}>
              {car.name}
            </h3>
            <p style={{
              color: 'rgba(255, 255, 255, 0.8)',
              fontSize: '14px',
              lineHeight: '1.5',
              textAlign: 'center',
              marginBottom: '15px'
            }}>
              {car.description}
            </p>

            <div style={{
              backgroundColor: `rgba(${car.color}, 0.2)`,
              color: 'white',
              padding: '10px 16px',
              borderRadius: '10px',
              fontSize: '14px',
              fontWeight: 'bold',
              textAlign: 'center',
              border: `1px solid rgba(${car.color}, 0.4)`
            }}>
              Tap for Details
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  // CSS Animations
  const animationStyles = `
    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(40px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @keyframes fadeIn {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }

    @keyframes marquee {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }

    @keyframes pulse {
      0%, 100% {
        opacity: 1;
      }
      50% {
        opacity: 0.5;
      }
    }

    @keyframes rotating {
      from {
        transform: translate(-50%, -50%) perspective(1200px) rotateX(-15deg) rotateY(0deg);
      }
      to {
        transform: translate(-50%, -50%) perspective(1200px) rotateX(-15deg) rotateY(360deg);
      }
    }

    @keyframes spin {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }

    .animate-marquee {
      animation: marquee 30s linear infinite;
    }

    .animate-fadeInUp {
      animation: fadeInUp 0.8s ease-out forwards;
    }

    @media (max-width: 768px) {
      .carousel-container {
        display: none !important;
      }
    }

    @media (max-width: 480px) {
      .animate-marquee {
        animation: marquee 20s linear infinite;
      }
    }
  `;

  return (
    <>
      <style>{animationStyles}</style>
      <div style={{
        minHeight: '100vh',
        background: 'linear-gradient(to bottom, #0b0f1d, #10121b, #14171f)',
        color: 'white',
        fontFamily: 'system-ui, -apple-system, sans-serif'
      }}>

        {/* Car Detail Modal */}
        {selectedCar && (
          <CarDetailModal 
            car={selectedCar} 
            onClose={() => setSelectedCar(null)} 
          />
        )}

        {/* HERO */}
        <section style={{
          position: 'relative',
          height: isMobile ? '70vh' : '90vh',
          overflow: 'hidden'
        }}>
          <video
            autoPlay
            loop
            muted
            playsInline
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              opacity: 0.6,
              filter: 'blur(4px)'
            }}
          >
            <source src={heroVideo} type="video/mp4" />
          </video>
          
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'rgba(0, 0, 0, 0.7)'
          }}></div>
          
          <div style={{
            position: 'relative',
            zIndex: 20,
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: isMobile ? '1rem 2rem' : '2rem 4rem',
            textAlign: 'center',
            animation: 'fadeInUp 1s ease-out forwards'
          }}>
            <h1 style={{
              fontSize: isMobile ? '2.5rem' : '4rem',
              fontWeight: 800,
              marginBottom: '1rem',
              lineHeight: 1.1
            }}>
              <span style={{ color: '#ff6a0b' }}>E-Formula</span> Ashwariders
            </h1>
            
            <p style={{
              fontSize: isMobile ? '1.1rem' : '1.5rem',
              color: '#22a5ee',
              fontWeight: 600,
              letterSpacing: '0.05em',
              animation: 'fadeInUp 1s ease-out 0.4s forwards',
              opacity: 0
            }}>
              Adapt • Improvise • Overcome
            </p>
          </div>
        </section>

        {/* ABOUT */}
        <section 
          id="about"
          data-animate
          style={{
            padding: isMobile ? '4rem 0' : '6rem 0',
            backgroundColor: '#10151f',
            textAlign: 'center',
            opacity: isVisible.about ? 1 : 0,
            transform: isVisible.about ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.8s ease-out'
          }}
        >
          <h2 style={{
            fontSize: isMobile ? '2.5rem' : '3rem',
            fontWeight: 'bold',
            color: '#ff6a0b',
            marginBottom: '2rem'
          }}>
            About Us
          </h2>
          
          <p style={{
            maxWidth: '64rem',
            margin: '0 auto',
            fontSize: isMobile ? '1rem' : '1.25rem',
            color: '#d1d5db',
            lineHeight: '1.75',
            padding: isMobile ? '0 1.5rem' : '0 2rem'
          }}>
            We are proud to have secured All India Rank 10 in Formula Bharat 2025!
            <br />
            E-Formula Ashwa Riders is a team of 35 passionate engineers from St. Vincent Pallotti College of Engineering and Technology, Nagpur.
            We combine our passion for engineering with the thrill of competition, designing, building, and racing Electric Formula cars.
          </p>
        </section>

        {/* TEAM PHOTO */}
        <section 
          id="teamPhoto"
          data-animate
          style={{
            padding: isMobile ? '3rem 0' : '4rem 0',
            display: 'flex',
            justifyContent: 'center',
            opacity: isVisible.teamPhoto ? 1 : 0,
            transition: 'opacity 1s ease-out'
          }}
        >
          <img 
            src={teamPhoto} 
            alt="Team" 
            style={{
              width: isMobile ? '90%' : '80%',
              maxWidth: '66.666667%',
              borderRadius: '1rem',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
              border: '2px solid rgba(34, 165, 238, 0.3)'
            }}
          />
        </section>

        {/* TEAM LEGACY - 3D CAROUSEL OR MOBILE GRID */}
        <section style={{
          padding: isMobile ? '4rem 0' : '6rem 0',
          backgroundColor: '#0a0e16',
          color: 'white',
          position: 'relative',
          overflow: 'hidden'
        }}>
          {/* Background decorations */}
          <div style={{
            position: 'absolute',
            top: '20px',
            left: '20px',
            width: isMobile ? '100px' : '200px',
            height: isMobile ? '100px' : '200px',
            background: 'radial-gradient(circle, rgba(255, 106, 11, 0.1) 0%, transparent 70%)',
            borderRadius: '50%',
            animation: 'pulse 3s ease-in-out infinite'
          }}></div>
          <div style={{
            position: 'absolute',
            bottom: '20px',
            right: '20px',
            width: isMobile ? '150px' : '300px',
            height: isMobile ? '150px' : '300px',
            background: 'radial-gradient(circle, rgba(34, 165, 238, 0.1) 0%, transparent 70%)',
            borderRadius: '50%',
            animation: 'pulse 3s ease-in-out infinite 1.5s'
          }}></div>

          <h2 style={{
            fontSize: isMobile ? '2.5rem' : '3rem',
            fontWeight: 'bold',
            textAlign: 'center',
            color: '#ff6a0b',
            marginBottom: '2rem',
            position: 'relative',
            zIndex: 10
          }}>
            🏁 Our Formula Cars
          </h2>

          <p style={{
            textAlign: 'center',
            color: 'rgba(255, 255, 255, 0.8)',
            fontSize: isMobile ? '1rem' : '1.2rem',
            marginBottom: '4rem',
            position: 'relative',
            zIndex: 10,
            padding: isMobile ? '0 1rem' : '0'
          }}>
            {isMobile ? 'Tap on any car to explore detailed specifications' : 'Click on any rotating car to explore detailed specifications'}
          </p>
          
          {/* 3D Carousel for Desktop, Grid for Mobile */}
          {!isMobile ? (
            <div style={{
              width: '100%',
              height: '100%',
              position: 'relative',
              textAlign: 'center',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden',
              minHeight: '600px'
            }}>
              <div
                style={{
                  position: 'absolute',
                  width: '240px',
                  height: '320px',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  zIndex: '2',
                  transformStyle: 'preserve-3d',
                  animation: 'rotating 25s linear infinite'
                }}
              >
                {vehicles.map((car, index) => (
                  <CarouselCard
                    key={car.name}
                    car={car}
                    index={index}
                    totalCards={vehicles.length}
                  />
                ))}
              </div>
            </div>
          ) : (
            <MobileCarGrid />
          )}

          {/* Instructions and Legend */}
          <div style={{
            textAlign: 'center',
            marginTop: '40px',
            position: 'relative',
            zIndex: 10
          }}>
            <p style={{
              color: 'rgba(255, 255, 255, 0.7)',
              fontSize: isMobile ? '14px' : '16px',
              marginBottom: '16px'
            }}>
              {isMobile ? '📱' : '🖱️'} {isMobile ? 'Tap' : 'Click'} on any {isMobile ? '' : 'rotating '}car to view detailed specifications
            </p>
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              gap: isMobile ? '8px' : '16px',
              flexWrap: 'wrap',
              padding: isMobile ? '0 1rem' : '0'
            }}>
              {vehicles.map((car) => (
                <div
                  key={`legend-${car.name}`}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: isMobile ? '4px 8px' : '6px 12px',
                    borderRadius: '20px',
                    backgroundColor: `rgba(${car.color}, 0.1)`,
                    border: `1px solid rgba(${car.color}, 0.3)`,
                    cursor: 'pointer'
                  }}
                  onClick={() => setSelectedCar(car)}
                >
                  <div style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    backgroundColor: `rgb(${car.color})`
                  }}></div>
                  <span style={{
                    color: 'white',
                    fontSize: isMobile ? '12px' : '14px',
                    fontWeight: '500'
                  }}>
                    {car.name} ({car.year})
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ACHIEVEMENTS - Responsive Grid */}
        <section style={{
          padding: isMobile ? '4rem 0' : '5rem 0',
          backgroundColor: '#0b0f1d',
          color: 'white'
        }}>
          <h2 style={{
            fontSize: isMobile ? '2.5rem' : '3rem',
            fontWeight: 'bold',
            textAlign: 'center',
            color: '#ff6a0b',
            marginBottom: '3rem'
          }}>
            Achievements
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
            gap: isMobile ? '2rem' : '2.5rem',
            maxWidth: '56rem',
            margin: '0 auto',
            padding: isMobile ? '0 1.5rem' : '0 1rem'
          }}>
            {achievements.map((ach, idx) => (
              <div
                key={idx}
                style={{
                  background: `linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)`,
                  backdropFilter: 'blur(10px)',
                  border: `2px solid ${ach.color}40`,
                  borderRadius: '2rem',
                  padding: isMobile ? '1.5rem' : '2rem',
                  position: 'relative',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  transform: hoveredAchievement === idx ? 'translateY(-10px) scale(1.05)' : 'translateY(0) scale(1)',
                  transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                  animation: `fadeInUp 0.8s ease-out ${idx * 0.15}s forwards`,
                  opacity: 0
                }}
                onMouseEnter={() => setHoveredAchievement(idx)}
                onMouseLeave={() => setHoveredAchievement(null)}
              >
                {/* Animated background gradient */}
                <div style={{
                  position: 'absolute',
                  top: '-50%',
                  left: '-50%',
                  width: '200%',
                  height: '200%',
                  background: `conic-gradient(from 0deg, ${ach.color}20, transparent, ${ach.color}20)`,
                  animation: hoveredAchievement === idx ? 'spin 3s linear infinite' : 'none',
                  transition: 'opacity 0.3s ease'
                }}></div>
                
                {/* Content container */}
                <div style={{
                  position: 'relative',
                  zIndex: 2,
                  textAlign: 'center'
                }}>
                  {/* Icon with dynamic background */}
                  <div style={{
                    width: isMobile ? '4rem' : '5rem',
                    height: isMobile ? '4rem' : '5rem',
                    margin: '0 auto 1.5rem auto',
                    background: `linear-gradient(135deg, ${ach.color}, ${ach.color}80)`,
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: isMobile ? '1.5rem' : '2rem',
                    boxShadow: `0 10px 30px ${ach.color}40`,
                    transform: hoveredAchievement === idx ? 'scale(1.1) rotateY(180deg)' : 'scale(1) rotateY(0deg)',
                    transition: 'all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
                  }}>
                    {ach.icon}
                  </div>

                  {/* Title with gradient text */}
                  <h3 style={{
                    fontSize: isMobile ? '1.2rem' : '1.4rem',
                    fontWeight: 800,
                    background: `linear-gradient(135deg, ${ach.color}, #ffffff)`,
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    marginBottom: '1rem',
                    textAlign: 'center'
                  }}>
                    {ach.title}
                  </h3>

                  {/* Description */}
                  <p style={{
                    color: '#d1d5db',
                    fontSize: isMobile ? '0.9rem' : '1rem',
                    lineHeight: '1.6',
                    opacity: 0.9
                  }}>
                    {ach.description}
                  </p>

                  {/* Decorative line */}
                  <div style={{
                    width: '4rem',
                    height: '0.2rem',
                    background: ach.color,
                    borderRadius: '1rem',
                    margin: '1rem auto 0 auto',
                    transform: hoveredAchievement === idx ? 'scaleX(1.5)' : 'scaleX(1)',
                    transition: 'transform 0.3s ease'
                  }}></div>
                </div>

                {/* Shine effect overlay */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: '-100%',
                  width: '100%',
                  height: '100%',
                  background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
                  transform: hoveredAchievement === idx ? 'translateX(200%)' : 'translateX(-100%)',
                  transition: 'transform 0.6s ease',
                  zIndex: 3
                }}></div>
              </div>
            ))}
          </div>
        </section>

        {/* SPONSORS */}
        <section style={{
          padding: isMobile ? '4rem 0' : '6rem 0',
          textAlign: 'center',
          backgroundColor: '#10151f'
        }}>
          <h2 style={{
            fontSize: isMobile ? '2.5rem' : '3rem',
            fontWeight: 'bold',
            color: '#22a5ee',
            marginBottom: '3rem'
          }}>
            Sponsors
          </h2>
          
          <div style={{ overflow: 'hidden' }}>
            <div style={{
              display: 'flex',
              width: 'max-content',
              gap: isMobile ? '2rem' : '3rem'
            }}
            className="animate-marquee">
              {sponsors.concat(sponsors).map((s, idx) => (
                <a 
                  key={idx} 
                  href={s.url} 
                  target="_blank" 
                  rel="noreferrer"
                  style={{ textDecoration: 'none' }}
                >
                  <img
                    src={s.logo}
                    alt="Sponsor"
                    style={{
                      height: isMobile ? '4rem' : '6rem',
                      width: 'auto',
                      borderRadius: '0.75rem',
                      boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
                      background: 'rgba(255, 255, 255, 0.9)',
                      padding: isMobile ? '0.5rem' : '0.75rem',
                      transform: hoveredSponsor === idx ? 'scale(1.1) rotate(1deg)' : 'scale(1) rotate(0deg)',
                      transition: 'all 0.3s ease',
                      cursor: 'pointer'
                    }}
                    onMouseEnter={() => setHoveredSponsor(idx)}
                    onMouseLeave={() => setHoveredSponsor(null)}
                  />
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* JOIN OUR JOURNEY */}
        <section 
          id="joinJourney"
          data-animate
          style={{
            padding: isMobile ? '4rem 0' : '6rem 0',
            background: 'linear-gradient(to right, #22a5ee, #ff6a0b)',
            color: 'white',
            textAlign: 'center',
            opacity: isVisible.joinJourney ? 1 : 0,
            transform: isVisible.joinJourney ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.8s ease-out'
          }}
        >
          <h2 style={{
            fontSize: isMobile ? '2.5rem' : '3rem',
            fontWeight: 'bold',
            marginBottom: '1.5rem'
          }}>
            Join Our Journey
          </h2>
          
          <p style={{
            maxWidth: '48rem',
            margin: '0 auto 2rem auto',
            fontSize: isMobile ? '1rem' : '1.25rem',
            lineHeight: '1.75',
            padding: isMobile ? '0 1.5rem' : '0 1rem'
          }}>
            Be a part of our electrifying adventure! Whether you're a student, sponsor, or motorsport enthusiast,
            your support drives us forward. Connect with us to innovate, collaborate, and race toward a sustainable future.
          </p>
          
          <Link
            to="/contact"
            style={{
              backgroundColor: 'white',
              color: '#0b0f1d',
              padding: isMobile ? '0.8rem 2.5rem' : '1rem 3rem',
              borderRadius: '9999px',
              fontWeight: 600,
              textDecoration: 'none',
              display: 'inline-block',
              transition: 'all 0.3s ease',
              transform: 'scale(1)',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
              fontSize: isMobile ? '0.9rem' : '1rem'
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#f3f4f6';
              e.target.style.transform = 'scale(1.05)';
              e.target.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1)';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = 'white';
              e.target.style.transform = 'scale(1)';
              e.target.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
            }}
          >
            Contact Us
          </Link>
        </section>

      </div>
    </>
  );
}
