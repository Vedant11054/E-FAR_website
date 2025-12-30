import { useState, useEffect, useRef } from "react";

// Custom hook for scroll animations
const useScrollAnimation = () => {
  const ref = useRef();
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.style.animation = 'fadeInUp 0.8s ease-out forwards';
        }
      },
      { threshold: 0.1 }
    );
    
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  
  return ref;
};

export default function About() {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [scrollY, setScrollY] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [hoveredTimeline, setHoveredTimeline] = useState(null);
  const [hoveredMission, setHoveredMission] = useState(null);
  const [hoveredVision, setHoveredVision] = useState(null);
  const [screenSize, setScreenSize] = useState({
    isMobile: false,
    isTablet: false,
    isDesktop: false
  });
  
  // Updated color palette
  const colors = {
    orange: "#ff6a0b",
    blue: "#22a5ee",        
    black: "#0b0f1d",       
    dark: "#10151f",        
    darker: "#0a0e16",      
    white: "#FFFFFF"
  };

  // Enhanced responsive detection
  useEffect(() => {
    const updateScreenSize = () => {
      const width = window.innerWidth;
      setScreenSize({
        isMobile: width < 768,
        isTablet: width >= 768 && width < 1024,
        isDesktop: width >= 1024
      });
    };
    
    updateScreenSize();
    window.addEventListener('resize', updateScreenSize);
    return () => window.removeEventListener('resize', updateScreenSize);
  }, []);

  const { isMobile, isTablet } = screenSize;
  
  // Parallax scroll effect
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const departments = [
    {
      name: "Mechanical",
      image: "/images/mechanical.jpg",
      description: "Responsible for the core mechanical systems including chassis, suspension, and drivetrain design, ensuring performance and durability.",
      icon: "⚙️",
      color: colors.orange
    },
    {
      name: "High Voltage",
      image: "/images/highvoltage.jpg",
      description: "Manages the high-voltage battery systems, power distribution, and safety protocols for the electric race car.",
      icon: "⚡",
      color: colors.orange
    },
    {
      name: "System Integration",
      image: "/images/systemintegration.jpg",
      description: "Ensures all subsystems (mechanical, electrical, and software) integrate seamlessly for maximum performance and reliability.",
      icon: "🔧",
      color: colors.blue
    },
    {
      name: "Aerodynamics",
      image: "/images/aero.jpg",
      description: "Designs and tests aerodynamic components such as wings and diffusers to improve downforce, stability, and efficiency.",
      icon: "🌪️",
      color: colors.blue
    },
    {
      name: "Data Acquisition",
      image: "/images/data.jpg",
      description: "Collects and analyzes real-time data from the car to enhance performance, optimize setups, and support decision-making.",
      icon: "📊",
      color: colors.blue
    },
    {
      name: "Thermals",
      image: "/images/thermals.jpg",
      description: "Manages thermal systems to keep the battery, motor, and other components at optimal temperatures during performance.",
      icon: "🌡️",
      color: colors.blue
    },
    {
      name: "Admin",
      image: "/images/admin.jpg",
      description: "Handles team management, finances, sponsorships, and overall coordination of operations.",
      icon: "📋",
      color: colors.orange
    },
    {
      name: "Social Media",
      image: "/images/social.jpg",
      description: "Manages outreach, branding, and digital presence, showcasing the team's achievements and engaging the community.",
      icon: "📱",
      color: colors.orange
    },
  ];

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  // Enhanced responsive animations and styles
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

    @keyframes float {
      0%, 100% {
        transform: translateY(0px) rotate(0deg);
      }
      50% {
        transform: translateY(-20px) rotate(180deg);
      }
    }

    @keyframes bounce {
      0%, 20%, 53%, 80%, 100% {
        transform: translate3d(0,0,0);
      }
      40%, 43% {
        transform: translate3d(0,-20px,0);
      }
      70% {
        transform: translate3d(0,-10px,0);
      }
      90% {
        transform: translate3d(0,-4px,0);
      }
    }

    @keyframes pulse {
      0% {
        transform: scale(1);
      }
      50% {
        transform: scale(1.1);
      }
      100% {
        transform: scale(1);
      }
    }

    @keyframes dashMove {
      to { 
        stroke-dashoffset: -30; 
      }
    }

    @keyframes f1Race {
      0%, 100% { 
        transform: translateY(0px) rotate(0deg); 
      }
      50% { 
        transform: translateY(-8px) rotate(-5deg); 
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

    @keyframes fadeIn {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }

    html {
      scroll-behavior: smooth;
    }

    ::-webkit-scrollbar {
      width: 8px;
    }

    ::-webkit-scrollbar-track {
      background: ${colors.dark};
    }

    ::-webkit-scrollbar-thumb {
      background: linear-gradient(45deg, ${colors.orange}, ${colors.blue});
      border-radius: 4px;
    }

    /* Enhanced responsive breakpoints */
    @media (max-width: 480px) {
      .hero-title {
        font-size: 2.5rem !important;
        line-height: 1.1 !important;
      }
      
      .hero-subtitle {
        font-size: 1rem !important;
      }
      
      .section-padding {
        padding: 3rem 1rem !important;
      }
      
      .card-grid {
        grid-template-columns: 1fr !important;
        gap: 1rem !important;
      }
      
      .timeline-content {
        width: 95% !important;
        padding: 1.5rem !important;
      }
    }
    
    @media (max-width: 768px) {
      .mobile-center {
        text-align: center !important;
      }
      
      .mobile-stack {
        flex-direction: column !important;
        gap: 2rem !important;
      }
      
      .timeline-node {
        width: 60px !important;
        height: 60px !important;
      }
      
      .section-title {
        font-size: 2.25rem !important;
      }
    }
    
    @media (min-width: 769px) and (max-width: 1024px) {
      .tablet-adjust {
        font-size: 1.1rem !important;
      }
      
      .tablet-padding {
        padding: 2rem !important;
      }
    }
    
    @media (min-width: 1025px) {
      .desktop-enhance {
        transform: perspective(1000px) rotateY(0deg);
        transition: transform 0.3s ease;
      }
      
      .desktop-enhance:hover {
        transform: perspective(1000px) rotateY(5deg) scale(1.02);
      }
    }

    /* Container queries for modern responsive design */
    @container (max-width: 500px) {
      .responsive-text {
        font-size: clamp(0.9rem, 4vw, 1.1rem);
      }
    }
  `;

  return (
    <>
      <style>{animationStyles}</style>
      <div style={{
        minHeight: '100vh',
        background: `linear-gradient(to bottom, ${colors.black}, ${colors.dark}, ${colors.darker})`,
        color: colors.white,
        fontFamily: 'system-ui, -apple-system, sans-serif',
        overflowX: 'hidden' // Prevent horizontal scroll
      }}>
        
        {/* 1. Enhanced Responsive Hero Section */}
        <section className="section-padding" style={{
          position: 'relative',
          zIndex: 1,
          background: `linear-gradient(135deg, ${colors.black} 0%, ${colors.dark} 25%, #14171f 50%, ${colors.dark} 75%, ${colors.black} 100%)`,
          color: colors.white,
          padding: isMobile ? '4rem 1rem 6rem' : isTablet ? '6rem 2rem 8rem' : '8rem 0',
          overflow: 'hidden',
          minHeight: isMobile ? '80vh' : isTablet ? '85vh' : '90vh',
          display: 'flex',
          alignItems: 'center'
        }}>
          
          {/* Background Image with better mobile optimization */}
          <div style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: 'url("../src/assets/car2.jpg")',
            backgroundSize: isMobile ? 'cover' : 'cover',
            backgroundPosition: isMobile ? 'center center' : 'center',
            backgroundRepeat: 'no-repeat',
            filter: 'brightness(0.4) contrast(1.2)',
            zIndex: 0
          }}></div>

          {/* Responsive overlay */}
          <div style={{
            position: 'absolute',
            inset: 0,
            background: `linear-gradient(135deg, rgba(11, 15, 29, ${isMobile ? '0.9' : '0.8'}), rgba(16, 21, 31, 0.7), rgba(10, 14, 22, 0.8))`,
            zIndex: 1
          }}></div>

          {/* Responsive floating elements */}
          <div style={{
            position: 'absolute',
            top: isMobile ? '1.5rem' : '2.5rem',
            right: isMobile ? '1.5rem' : '2.5rem',
            width: isMobile ? '4rem' : isTablet ? '6rem' : '8rem',
            height: isMobile ? '4rem' : isTablet ? '6rem' : '8rem',
            background: `radial-gradient(circle, rgba(255, 106, 11, 0.15) 0%, transparent 70%)`,
            borderRadius: '50%',
            animation: 'float 6s ease-in-out infinite',
            zIndex: 2
          }}></div>
          
          <div style={{
            position: 'absolute',
            bottom: isMobile ? '3rem' : '5rem',
            left: isMobile ? '1.5rem' : '2.5rem',
            width: isMobile ? '3rem' : isTablet ? '5rem' : '6rem',
            height: isMobile ? '3rem' : isTablet ? '5rem' : '6rem',
            background: `radial-gradient(circle, rgba(34, 165, 238, 0.15) 0%, transparent 70%)`,
            borderRadius: '50%',
            animation: 'pulse 2s ease-in-out infinite',
            zIndex: 2
          }}></div>
          
          <div style={{
            position: 'relative',
            zIndex: 3,
            maxWidth: '90rem',
            margin: '0 auto',
            padding: '0 1rem',
            textAlign: 'center',
            width: '100%'
          }}>

            {/* Responsive main heading */}
            <h1 className="hero-title mobile-center" style={{
              fontSize: isMobile ? 'clamp(2.5rem, 8vw, 3.5rem)' : isTablet ? '3.5rem' : '4rem',
              fontWeight: 800,
              marginBottom: '1.5rem',
              filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.5))',
              animation: 'fadeInUp 0.8s ease-out forwards',
              animationDelay: '0.2s',
              opacity: 0,
              lineHeight: 1.1,
              wordBreak: 'break-word'
            }}>
              About E-Formula 
              <span style={{
                background: `linear-gradient(135deg, ${colors.orange}, #ff8533)`,
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                filter: 'drop-shadow(0 2px 4px rgba(255, 106, 11, 0.3))'
              }}>
                Ashwa Riders
              </span>
            </h1>
            
            <p className="hero-subtitle" style={{
              fontSize: isMobile ? 'clamp(1rem, 5vw, 1.3rem)' : isTablet ? '1.3rem' : '1.5rem',
              fontWeight: 600,
              color: colors.blue,
              animation: 'fadeInUp 0.8s ease-out forwards',
              animationDelay: '0.4s',
              opacity: 0,
              textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)',
              marginBottom: '2rem'
            }}>
              Pioneering the Future of Electric Racing ⚡
            </p>

            <p style={{
              fontSize: isMobile ? 'clamp(0.9rem, 4vw, 1.1rem)' : isTablet ? '1.1rem' : '1.2rem',
              color: 'rgba(255, 255, 255, 0.8)',
              maxWidth: isMobile ? '100%' : '48rem',
              margin: '0 auto',
              lineHeight: '1.6',
              animation: 'fadeInUp 0.8s ease-out forwards',
              animationDelay: '0.6s',
              opacity: 0,
              padding: isMobile ? '0 0.5rem' : '0'
            }}>
              Discover the story behind our Formula student racing team
            </p>
          </div>
        </section>

        {/* 2. Responsive Mission & Vision */}
        <section className="section-padding" style={{
          position: 'relative',
          zIndex: 1,
          padding: isMobile ? '4rem 1rem' : isTablet ? '5rem 2rem' : '6rem 0',
          background: `linear-gradient(135deg, ${colors.dark}, ${colors.black}, #1a1a1a)`,
          color: colors.white
        }}>
          
          <div style={{
            position: 'relative',
            zIndex: 2,
            maxWidth: '90rem',
            margin: '0 auto',
            padding: '0 1rem'
          }}>
            <div className="mobile-stack" style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr' : isTablet ? '1fr' : 'repeat(auto-fit, minmax(350px, 1fr))',
              gap: isMobile ? '2rem' : isTablet ? '2.5rem' : '3rem'
            }}>
              
              {/* Responsive Mission Card */}
              <div 
                className="desktop-enhance"
                style={{
                  background: `linear-gradient(135deg, rgba(16, 21, 31, 0.9), rgba(10, 14, 22, 0.8))`,
                  backdropFilter: 'blur(20px)',
                  border: `2px solid ${colors.blue}40`,
                  boxShadow: `0 25px 50px -12px rgba(0,0,0,0.8), 0 0 0 1px ${colors.blue}20`,
                  borderRadius: '1.5rem',
                  padding: isMobile ? '2rem 1.5rem' : isTablet ? '2.25rem' : '2.5rem',
                  transform: hoveredMission ? 'scale(1.02) rotate(-1deg)' : 'scale(1) rotate(0deg)',
                  transition: 'all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                  cursor: 'pointer'
                }}
                onMouseEnter={() => setHoveredMission(true)}
                onMouseLeave={() => setHoveredMission(false)}
              >
                <div style={{
                  width: isMobile ? '4rem' : isTablet ? '5rem' : '6rem',
                  height: isMobile ? '4rem' : isTablet ? '5rem' : '6rem',
                  background: `linear-gradient(135deg, ${colors.blue}, ${colors.blue}CC)`,
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 2rem auto',
                  boxShadow: `0 20px 25px -5px ${colors.blue}40`,
                  animation: hoveredMission ? 'pulse 1s ease-in-out infinite' : 'none'
                }}>
                  <span style={{ fontSize: isMobile ? '1.25rem' : isTablet ? '1.75rem' : '2rem' }}>🎯</span>
                </div>
                <h2 className="section-title" style={{
                  fontSize: isMobile ? 'clamp(1.75rem, 6vw, 2rem)' : isTablet ? '2rem' : '2.25rem',
                  fontWeight: 800,
                  textAlign: 'center',
                  marginBottom: '1.5rem',
                  color: colors.white
                }}>
                  Our Mission
                </h2>
                <p className="responsive-text" style={{
                  fontSize: isMobile ? 'clamp(0.9rem, 4vw, 1rem)' : isTablet ? '1rem' : '1.125rem',
                  color: '#d1d5db',
                  lineHeight: '1.75',
                  textAlign: 'center'
                }}>
                  To design, build and race electric formula cars that push the
                  boundaries of sustainable automotive technology while fostering
                  innovation, teamwork and engineering excellence among students.
                </p>
              </div>

              {/* Responsive Vision Card */}
              <div 
                className="desktop-enhance"
                style={{
                  background: `linear-gradient(135deg, rgba(16, 21, 31, 0.9), rgba(10, 14, 22, 0.8))`,
                  backdropFilter: 'blur(20px)',
                  border: `2px solid ${colors.orange}40`,
                  boxShadow: `0 25px 50px -12px rgba(0,0,0,0.8), 0 0 0 1px ${colors.orange}20`,
                  borderRadius: '1.5rem',
                  padding: isMobile ? '2rem 1.5rem' : isTablet ? '2.25rem' : '2.5rem',
                  transform: hoveredVision ? 'scale(1.02) rotate(1deg)' : 'scale(1) rotate(0deg)',
                  transition: 'all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                  cursor: 'pointer'
                }}
                onMouseEnter={() => setHoveredVision(true)}
                onMouseLeave={() => setHoveredVision(false)}
              >
                <div style={{
                  width: isMobile ? '4rem' : isTablet ? '5rem' : '6rem',
                  height: isMobile ? '4rem' : isTablet ? '5rem' : '6rem',
                  background: `linear-gradient(135deg, ${colors.orange}, ${colors.orange}CC)`,
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 2rem auto',
                  boxShadow: `0 20px 25px -5px ${colors.orange}40`,
                  animation: hoveredVision ? 'pulse 1s ease-in-out infinite' : 'none'
                }}>
                  <span style={{ fontSize: isMobile ? '1.25rem' : isTablet ? '1.75rem' : '2rem' }}>🔮</span>
                </div>
                <h2 className="section-title" style={{
                  fontSize: isMobile ? 'clamp(1.75rem, 6vw, 2rem)' : isTablet ? '2rem' : '2.25rem',
                  fontWeight: 800,
                  textAlign: 'center',
                  marginBottom: '1.5rem',
                  color: colors.white
                }}>
                  Our Vision
                </h2>
                <p className="responsive-text" style={{
                  fontSize: isMobile ? 'clamp(0.9rem, 4vw, 1rem)' : isTablet ? '1rem' : '1.125rem',
                  color: '#d1d5db',
                  lineHeight: '1.75',
                  textAlign: 'center'
                }}>
                  To become a leading Formula Student team that inspires the next
                  generation of engineers and contributes to the global transition
                  towards sustainable transportation through cutting-edge electric
                  vehicle technology.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Responsive Our Story */}
        <section className="section-padding" style={{
          position: 'relative',
          zIndex: 1,
          padding: isMobile ? '4rem 1rem' : isTablet ? '5rem 2rem' : '6rem 0',
          background: `linear-gradient(to right, ${colors.black}, ${colors.dark}, ${colors.black})`,
          color: colors.white,
          overflow: 'hidden'
        }}>
          
          <div style={{
            position: 'relative',
            zIndex: 2,
            maxWidth: '90rem',
            margin: '0 auto',
            padding: '0 1rem'
          }}>
            <div className="mobile-center" style={{ textAlign: 'center', marginBottom: '4rem' }}>
              <h2 className="section-title" style={{
                fontSize: isMobile ? 'clamp(2rem, 8vw, 2.5rem)' : isTablet ? '2.75rem' : '3rem',
                fontWeight: 800,
                background: `linear-gradient(to right, ${colors.orange}, #ff8533)`,
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                marginBottom: '1.5rem',
                filter: 'drop-shadow(0 4px 3px rgb(0 0 0 / 0.07))'
              }}>
                Our Story
              </h2>
              <p style={{
                fontSize: isMobile ? 'clamp(1rem, 5vw, 1.2rem)' : isTablet ? '1.3rem' : '1.5rem',
                color: '#d1d5db',
                maxWidth: isMobile ? '100%' : '48rem',
                margin: '0 auto'
              }}>
                From humble beginnings to competitive excellence
              </p>
            </div>
            
            <div style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              gap: isMobile ? '1.5rem' : isTablet ? '1.75rem' : '2rem' 
            }}>
              {[
                "E-Formula Ashwa Riders was founded in 2022 by a group of passionate engineering students who shared a common dream: to build the future of electric racing. What started as a small team of 15 members has grown into a dynamic organization of over 50 dedicated individuals.",
                "Our journey began with a simple yet ambitious goal - to design and build an electric formula car that could compete with the best teams in the world. Through countless hours of design, testing, and iteration, we've created vehicles that not only perform on the track but also showcase the potential of sustainable racing technology.",
                "Today, we're proud to be one of the most innovative Formula Student teams, consistently pushing the boundaries of what's possible in electric vehicle design and performance."
              ].map((text, idx) => (
                <div key={idx} style={{
                  padding: isMobile ? '1.5rem' : isTablet ? '1.75rem' : '2rem',
                  background: `linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)`,
                  backdropFilter: 'blur(10px)',
                  border: `1px solid rgba(255,255,255,0.1)`,
                  borderRadius: '1rem',
                  boxShadow: `0 10px 25px rgba(0,0,0,0.3)`
                }}>
                  <p className="responsive-text" style={{
                    fontSize: isMobile ? 'clamp(0.9rem, 4vw, 1rem)' : isTablet ? '1rem' : '1.125rem',
                    color: '#d1d5db',
                    lineHeight: '1.75'
                  }}>
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

      {/* 4. Enhanced Responsive Racing Journey Timeline */}
<section className="section-padding" style={{
  position: 'relative',
  zIndex: 1,
  padding: isMobile ? '6rem 1rem' : isTablet ? '7rem 2rem' : '8rem 0',
  background: `linear-gradient(135deg, ${colors.black} 0%, #111111 25%, #1a1a1a 50%, #0f0f0f 75%, ${colors.black} 100%)`,
  color: colors.white,
  overflow: 'hidden'
}}>
  
  {/* Background Image with Blur Effect */}
  <div style={{
    position: 'absolute',
    inset: 0,
    backgroundImage: 'url("../src/assets/car2.jpg")', // Replace with your desired image
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    filter: 'blur(8px) brightness(0.3) contrast(1.1)', // Blur + darken for readability
    transform: 'scale(1.1)', // Slightly scale to avoid blur edges
    zIndex: 0
  }}></div>

  {/* Enhanced Dark Overlay for better text contrast */}
  <div style={{
    position: 'absolute',
    inset: 0,
    background: `linear-gradient(135deg, 
      rgba(11, 15, 29, 0.85) 0%, 
      rgba(17, 17, 17, 0.8) 25%, 
      rgba(26, 26, 26, 0.75) 50%, 
      rgba(15, 15, 15, 0.8) 75%, 
      rgba(11, 15, 29, 0.85) 100%)`,
    backdropFilter: 'blur(2px)', // Additional subtle blur
    zIndex: 1
  }}></div>

  {/* Dark Pattern Background (now over the image) */}
  <div style={{
    position: 'absolute',
    inset: 0,
    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.02'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
    opacity: 0.3,
    zIndex: 1
  }}></div>

  {/* Dark Floating Elements */}
  <div style={{
    position: 'absolute',
    top: '20%',
    left: '10%',
    width: isMobile ? '100px' : '150px',
    height: isMobile ? '100px' : '150px',
    background: `radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 70%)`,
    borderRadius: '50%',
    animation: 'float 12s ease-in-out infinite',
    zIndex: 1
  }}></div>
  <div style={{
    position: 'absolute',
    bottom: '20%',
    right: '10%',
    width: isMobile ? '80px' : '100px',
    height: isMobile ? '80px' : '100px',
    background: `radial-gradient(circle, rgba(255,255,255,0.06) 0%, transparent 70%)`,
    borderRadius: '50%',
    animation: 'float 8s ease-in-out infinite reverse',
    zIndex: 1
  }}></div>

  {/* Enhanced Dark Header */}
  <div style={{
    position: 'relative',
    zIndex: 2,
    textAlign: 'center',
    marginBottom: isMobile ? '4rem' : isTablet ? '5rem' : '6rem'
  }}>
    <div style={{
      display: 'inline-block',
      padding: isMobile ? '0.8rem 2rem' : '1rem 2.5rem',
      background: `linear-gradient(135deg, rgba(20, 20, 20, 0.9), rgba(30, 30, 30, 0.8))`,
      backdropFilter: 'blur(20px)',
      border: `1px solid rgba(255, 255, 255, 0.15)`,
      borderRadius: '50px',
      marginBottom: '2rem',
      boxShadow: `0 8px 32px rgba(0, 0, 0, 0.8), inset 0 1px 0 rgba(255, 255, 255, 0.1)`
    }}>
      <span style={{ 
        fontSize: isMobile ? '0.9rem' : '1rem', 
        color: '#aaa', 
        fontWeight: 'bold', 
        letterSpacing: '0.1em' 
      }}>
        ⚡ CHAMPIONSHIP EVOLUTION
      </span>
    </div>
    
    <h2 className="section-title" style={{
      fontSize: isMobile ? 'clamp(2.5rem, 9vw, 3.5rem)' : isTablet ? '4rem' : '4.5rem',
      fontWeight: 900,
      background: `linear-gradient(135deg, #ffffff, #cccccc, #999999)`,
      backgroundClip: 'text',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      marginBottom: '1.5rem',
      textShadow: 'none',
      filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.8))', // Enhanced shadow for better visibility
      position: 'relative'
    }}>
      Racing Journey
    </h2>
    <div style={{
      width: isMobile ? '100px' : '120px',
      height: '3px',
      background: `linear-gradient(to right, #555, #777, #555)`,
      borderRadius: '2px',
      margin: '0 auto'
    }}></div>
  </div>

  <div style={{
    position: 'relative',
    zIndex: 2,
    maxWidth: '90rem',
    margin: '0 auto',
    padding: '0 1rem'
  }}>
    {/* Responsive Timeline */}
    <div style={{ position: 'relative' }}>
      
      {/* Mobile/Tablet: Left-aligned timeline */}
      {isMobile ? (
        <div style={{
          position: 'absolute',
          left: '2rem',
          top: 0,
          bottom: 0,
          width: '4px',
          background: `linear-gradient(to bottom, #444, #666, #444)`,
          borderRadius: '2px',
          boxShadow: '0 0 10px rgba(255,255,255,0.1)'
        }}></div>
      ) : (
        // Desktop: Center timeline
        <div style={{
          position: 'absolute',
          left: '50%',
          top: 0,
          bottom: 0,
          width: '6px',
          background: `linear-gradient(to bottom, #444, #666, #444)`,
          borderRadius: '3px',
          transform: 'translateX(-50%)',
          boxShadow: '0 0 15px rgba(255,255,255,0.1)'
        }}></div>
      )}
      
      {/* Subtle Moving Dashes - Enhanced visibility */}
      <div style={{
        position: 'absolute',
        left: isMobile ? '2rem' : '50%',
        top: 0,
        bottom: 0,
        width: '2px',
        background: `repeating-linear-gradient(to bottom, rgba(255,255,255,0.3) 0, rgba(255,255,255,0.3) 10px, transparent 10px, transparent 20px)`,
        borderRadius: '1px',
        transform: 'translateX(-50%)',
        animation: 'dashMove 2s linear infinite',
        opacity: 0.8
      }}></div>
      
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        gap: isMobile ? '4rem' : isTablet ? '6rem' : '8rem', 
        paddingTop: '2rem' 
      }}>
        {[
          { 
            year: "2020", 
            title: "Genesis", 
            subtitle: "The Beginning",
            desc: "Born from pure passion and innovation, E-Formula Ashwa Riders emerged with 15 visionary engineers ready to electrify the racing world.",
            side: 'left',
            icon: "🚀",
            achievement: "Team Founded",
            color: colors.orange
          },
          { 
            year: "2023", 
            title: "Breakthrough", 
            subtitle: "First Vehicle",
            desc: 'Create our first ever inhouse formula style electric vehicle..',
            side: 'right',
            icon: "🏆",
            achievement: "Best Newcomer",
            color: colors.blue
          },
          { 
            year: "2024", 
            title: "Excellence", 
            subtitle: "New Height",
            desc: "Created our very own accumulator container inhouse.",
            side: 'left',
            icon: "👑",
            achievement: "Our Own Designed and developed Accumulator Container",
            color: colors.orange
          },
          { 
            year: "2025", 
            title: "Bounce Back", 
            subtitle: "AIR 10",
            desc: "After facing many problems our team managed to achieve AIR 10 again.",
            side: 'right',
            icon: "🌍",
            achievement: "AIR 10",
            color: colors.blue
          }
        ].map((milestone, idx) => (
          <div 
            key={idx}
            style={{
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: isMobile ? 'flex-start' : (milestone.side === 'left' ? 'flex-start' : 'flex-end')
            }}
            onMouseEnter={() => setHoveredTimeline(idx)}
            onMouseLeave={() => setHoveredTimeline(null)}
          >
            {/* Responsive Timeline Node */}
            <div style={{
              position: 'absolute',
              left: isMobile ? '2rem' : '50%',
              top: '50%',
              transform: isMobile ? 'translate(-50%, -50%)' : 'translate(-50%, -50%)',
              zIndex: 4
            }}>
              {/* Outer Ring */}
              <div style={{
                position: 'relative',
                width: isMobile ? '50px' : isTablet ? '65px' : '80px',
                height: isMobile ? '50px' : isTablet ? '65px' : '80px',
                borderRadius: '50%',
                border: hoveredTimeline === idx ? 
                  `3px solid rgba(255, 255, 255, 0.5)` : 
                  `2px solid rgba(255, 255, 255, 0.3)`,
                background: hoveredTimeline === idx ? 
                  `radial-gradient(circle, rgba(50, 50, 50, 0.95), rgba(30, 30, 30, 0.9))` :
                  `radial-gradient(circle, rgba(40, 40, 40, 0.9), rgba(20, 20, 20, 0.8))`,
                backdropFilter: 'blur(15px)',
                transform: hoveredTimeline === idx ? 'scale(1.2)' : 'scale(1)',
                transition: 'all 0.4s ease',
                boxShadow: hoveredTimeline === idx ?
                  `0 0 40px rgba(255, 255, 255, 0.3), inset 0 0 25px rgba(0, 0, 0, 0.9)` :
                  `0 0 20px rgba(0, 0, 0, 0.9), inset 0 0 15px rgba(0, 0, 0, 0.7)`
              }}>
                {/* Icon */}
                <div style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  fontSize: isMobile ? '1.1rem' : isTablet ? '1.5rem' : '2rem',
                  filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.8))',
                  animation: hoveredTimeline === idx ? 'pulse 1.5s ease-in-out infinite' : 'none'
                }}>
                  {milestone.icon}
                </div>
              </div>
              
              {/* Year Badge */}
              <div style={{
                position: 'absolute',
                top: '-12px',
                left: '50%',
                transform: 'translateX(-50%)',
                background: `linear-gradient(135deg, rgba(70, 70, 70, 0.95), rgba(50, 50, 50, 0.9))`,
                backdropFilter: 'blur(15px)',
                border: `1px solid rgba(255, 255, 255, 0.25)`,
                color: '#fff',
                padding: isMobile ? '0.25rem 0.75rem' : '0.5rem 1rem',
                borderRadius: '15px',
                fontSize: isMobile ? '0.7rem' : '0.875rem',
                fontWeight: 'bold',
                boxShadow: `0 4px 20px rgba(0, 0, 0, 0.7)`
              }}>
                {milestone.year}
              </div>
            </div>
            
            {/* Responsive Content Card - Enhanced for blur background */}
            <div className="timeline-content" style={{
              width: isMobile ? 'calc(100% - 5rem)' : isTablet ? '70%' : '42%',
              marginLeft: isMobile ? '5rem' : (milestone.side === 'left' ? '0' : 'auto'),
              marginRight: isMobile ? '0' : (milestone.side === 'right' ? '0' : 'auto'),
              background: hoveredTimeline === idx ? 
                `linear-gradient(135deg, rgba(35, 35, 35, 0.95), rgba(45, 45, 45, 0.9), rgba(35, 35, 35, 0.95))` :
                `linear-gradient(135deg, rgba(25, 25, 25, 0.9), rgba(35, 35, 35, 0.85))`,
              backdropFilter: 'blur(25px)',
              border: hoveredTimeline === idx ?
                `2px solid ${milestone.color}` :
                `2px solid ${milestone.color}60`,
              borderRadius: '20px',
              padding: isMobile ? '2rem 1.5rem' : isTablet ? '2.5rem' : '3rem',
              transform: hoveredTimeline === idx ? 'scale(1.02) translateY(-5px)' : 'scale(1)',
              transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
              cursor: 'pointer',
              boxShadow: hoveredTimeline === idx ?
                `0 30px 60px rgba(0, 0, 0, 0.8), 0 0 40px ${milestone.color}20, inset 0 1px 0 rgba(255, 255, 255, 0.15)` :
                `0 20px 40px rgba(0, 0, 0, 0.7), 0 0 20px ${milestone.color}10, inset 0 1px 0 rgba(255, 255, 255, 0.08)`
            }}>
              
              {/* Achievement Badge with Theme Color */}
              <div style={{
                display: 'inline-block',
                background: `linear-gradient(135deg, ${milestone.color}25, ${milestone.color}15)`,
                backdropFilter: 'blur(10px)',
                padding: isMobile ? '0.4rem 1rem' : '0.5rem 1.5rem',
                borderRadius: '25px',
                fontSize: isMobile ? '0.6rem' : '0.75rem',
                color: milestone.color,
                fontWeight: '600',
                marginBottom: '1.5rem',
                border: `1px solid ${milestone.color}50`,
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                textShadow: `0 2px 4px rgba(0, 0, 0, 0.5)`
              }}>
                {milestone.achievement}
              </div>
              
              {/* Title Section */}
              <div style={{ marginBottom: '1.5rem' }}>
                <h3 style={{
                  fontSize: isMobile ? 'clamp(1.5rem, 6vw, 2rem)' : isTablet ? '2.25rem' : '2.5rem',
                  fontWeight: 'bold',
                  marginBottom: '0.5rem',
                  background: `linear-gradient(135deg, #ffffff, ${milestone.color}80, #ffffff)`,
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.6))'
                }}>
                  {milestone.title}
                </h3>
                <p style={{
                  color: milestone.color,
                  fontSize: isMobile ? 'clamp(0.9rem, 4vw, 1rem)' : isTablet ? '1rem' : '1.125rem',
                  fontWeight: '500',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  textShadow: `0 2px 4px rgba(0, 0, 0, 0.5)`
                }}>
                  {milestone.subtitle}
                </p>
              </div>
              
              {/* Description */}
              <p className="responsive-text" style={{
                color: 'rgba(255, 255, 255, 0.9)',
                fontSize: isMobile ? 'clamp(0.85rem, 4vw, 0.95rem)' : isTablet ? '0.95rem' : '1rem',
                lineHeight: '1.7',
                textShadow: '0 1px 2px rgba(0, 0, 0, 0.5)',
                opacity: 0.95
              }}>
                {milestone.desc}
              </p>
              
              {/* Bottom Accent Line with Theme Color */}
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                height: '3px',
                background: `linear-gradient(to right, ${milestone.color}, ${milestone.color}60, transparent)`,
                borderRadius: '0 0 20px 20px',
                transform: hoveredTimeline === idx ? 'scaleX(1)' : 'scaleX(0)',
                transformOrigin: 'left',
                transition: 'transform 0.5s ease'
              }}></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>


        {/* 5. Responsive Departments Section */}
        <section className="section-padding" style={{
          position: 'relative',
          zIndex: 1,
          background: `linear-gradient(135deg, ${colors.black}, ${colors.dark}, ${colors.black})`,
          padding: isMobile ? '4rem 1rem' : isTablet ? '5rem 2rem' : '6rem 0',
          overflow: 'hidden'
        }}>
          
          <div style={{
            position: 'relative',
            zIndex: 2,
            maxWidth: '90rem',
            margin: '0 auto',
            padding: '0 1rem'
          }}>
            <h2 className="section-title mobile-center" style={{
              fontSize: isMobile ? 'clamp(2rem, 8vw, 2.5rem)' : isTablet ? '2.75rem' : '3rem',
              fontWeight: 800,
              textAlign: 'center',
              marginBottom: isMobile ? '3rem' : isTablet ? '4rem' : '5rem',
              background: `linear-gradient(to right, ${colors.orange}, #ff8533)`,
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              Our Departments
            </h2>

            {/* Fully Responsive Card Grid */}
            <div className="card-grid" style={{
              display: 'grid',
              gridTemplateColumns: isMobile 
                ? '1fr' 
                : isTablet 
                  ? 'repeat(auto-fit, minmax(280px, 1fr))' 
                  : 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: isMobile ? '1.5rem' : isTablet ? '1.75rem' : '2rem',
              justifyItems: 'center'
            }}>
              {departments.map((dept, index) => (
                <div
                  key={dept.name}
                  className="desktop-enhance"
                  style={{
                    width: '100%',
                    maxWidth: isMobile ? '100%' : isTablet ? '18rem' : '20rem',
                    background: `linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)`,
                    backdropFilter: 'blur(20px)',
                    border: `2px solid ${dept.color}40`,
                    borderRadius: '1.5rem',
                    overflow: 'hidden',
                    transform: hoveredCard === index ? 'scale(1.03) rotate(1deg)' : 'scale(1) rotate(0deg)',
                    transition: 'all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                    cursor: 'pointer',
                    boxShadow: hoveredCard === index ? 
                      `0 25px 50px -12px rgba(0,0,0,0.6), 0 0 0 1px ${dept.color}20` : 
                      `0 10px 15px -3px rgba(0,0,0,0.3)`
                  }}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  {/* Responsive Image */}
                  <div style={{
                    position: 'relative',
                    height: isMobile ? '8rem' : isTablet ? '10rem' : '12rem',
                    overflow: 'hidden'
                  }}>
                    <img
                      src={dept.image}
                      alt={dept.name}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transform: hoveredCard === index ? 'scale(1.1)' : 'scale(1)',
                        transition: 'transform 0.7s ease'
                      }}
                    />
                    <div style={{
                      position: 'absolute',
                      inset: 0,
                      background: `linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0.4), transparent)`
                    }}></div>
                    
                    {/* Icon overlay */}
                    <div style={{
                      position: 'absolute',
                      top: '0.75rem',
                      right: '0.75rem',
                      fontSize: isMobile ? '1.5rem' : isTablet ? '2rem' : '2.5rem',
                      opacity: 0.8,
                      animation: hoveredCard === index ? 'bounce 1s infinite' : 'none'
                    }}>
                      {dept.icon}
                    </div>
                    
                    <h3 style={{
                      position: 'absolute',
                      bottom: '0.75rem',
                      left: '0.75rem',
                      fontSize: isMobile ? 'clamp(1rem, 4vw, 1.1rem)' : isTablet ? '1.125rem' : '1.25rem',
                      fontWeight: 'bold',
                      color: colors.white,
                      filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.8))'
                    }}>
                      {dept.name}
                    </h3>
                  </div>

                  {/* Responsive Content */}
              {/* Responsive Content */}
<div className="tablet-padding" style={{
  position: 'relative',
  zIndex: 2,
  padding: isMobile ? '1.25rem' : isTablet ? '1.5rem' : '1.5rem'
}}>

                    <div style={{
                      color: '#d1d5db',
                      fontSize: isMobile ? 'clamp(0.8rem, 3.5vw, 0.85rem)' : isTablet ? '0.875rem' : '0.875rem',
                      lineHeight: '1.75',
                      overflow: 'hidden',
                      maxHeight: expandedIndex === index ? '12rem' : '0',
                      opacity: expandedIndex === index ? 1 : 0,
                      transition: 'all 0.5s ease'
                    }}>
                      <p>{dept.description}</p>
                    </div>

                    {/* Responsive Button */}
                    <button
                      onClick={() => toggleExpand(index)}
                      style={{
                        position: 'relative',
                        marginTop: '1rem',
                        padding: isMobile ? '0.6rem 1rem' : isTablet ? '0.7rem 1.25rem' : '0.75rem 1.5rem',
                        background: `linear-gradient(to right, ${dept.color}, ${dept.color}CC)`,
                        color: colors.white,
                        fontWeight: 600,
                        borderRadius: '50px',
                        border: 'none',
                        cursor: 'pointer',
                        overflow: 'hidden',
                        transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                        boxShadow: `0 4px 14px 0 ${dept.color}40`,
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        fontSize: isMobile ? 'clamp(0.75rem, 3.5vw, 0.85rem)' : isTablet ? '0.85rem' : '0.9rem',
                        width: '100%',
                        justifyContent: 'center'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.transform = 'scale(1.05)';
                        e.target.style.boxShadow = `0 8px 25px 0 ${dept.color}66`;
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.transform = 'scale(1)';
                        e.target.style.boxShadow = `0 4px 14px 0 ${dept.color}40`;
                      }}
                    >
                      <span>
                        {expandedIndex === index ? 'See Less' : 'See More'}
                      </span>
                      <span style={{
                        transform: expandedIndex === index ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform 0.3s ease'
                      }}>
                        ↓
                      </span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. Responsive Footer CTA Section */}
        <section className="section-padding" style={{
          position: 'relative',
          zIndex: 1,
          background: `linear-gradient(135deg, ${colors.orange}, ${colors.blue})`,
          padding: isMobile ? '3rem 1rem' : isTablet ? '3.5rem 2rem' : '4rem 0'
        }}>
          {/* Responsive animated background elements */}
          <div style={{
            position: 'absolute',
            top: '20%',
            left: isMobile ? '5%' : '10%',
            width: isMobile ? '40px' : isTablet ? '70px' : '100px',
            height: isMobile ? '40px' : isTablet ? '70px' : '100px',
            background: 'rgba(255, 255, 255, 0.1)',
            borderRadius: '50%',
            animation: 'pulse 3s ease-in-out infinite'
          }}></div>
          <div style={{
            position: 'absolute',
            bottom: '30%',
            right: isMobile ? '5%' : '15%',
            width: isMobile ? '30px' : isTablet ? '60px' : '80px',
            height: isMobile ? '30px' : isTablet ? '60px' : '80px',
            background: 'rgba(255, 255, 255, 0.1)',
            borderRadius: '50%',
            animation: 'pulse 3s ease-in-out infinite 1.5s'
          }}></div>
          
          <div style={{
            position: 'relative',
            zIndex: 2,
            maxWidth: '80rem',
            margin: '0 auto',
            textAlign: 'center',
            padding: '0 1rem'
          }}>
            <h2 className="mobile-center" style={{
              fontSize: isMobile ? 'clamp(1.75rem, 7vw, 2rem)' : isTablet ? '2.125rem' : '2.25rem',
              fontWeight: 'bold',
              color: colors.white,
              marginBottom: '1rem',
              textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
              lineHeight: 1.2
            }}>
              Ready to Race Towards the Future?
            </h2>
            <p style={{
              fontSize: isMobile ? 'clamp(1rem, 4vw, 1.1rem)' : isTablet ? '1.175rem' : '1.25rem',
              color: 'rgba(255, 255, 255, 0.9)',
              marginBottom: '2rem',
              maxWidth: isMobile ? '100%' : '40rem',
              margin: '0 auto 2rem auto',
              lineHeight: 1.5
            }}>
              Join us in revolutionizing electric racing technology
            </p>
            <button style={{
              backgroundColor: colors.white,
              color: colors.black,
              padding: isMobile ? '0.8rem 1.5rem' : isTablet ? '0.9rem 1.75rem' : '1rem 2rem',
              borderRadius: '50px',
              fontWeight: 'bold',
              fontSize: isMobile ? 'clamp(0.9rem, 4vw, 1rem)' : isTablet ? '1.05rem' : '1.125rem',
              border: 'none',
              cursor: 'pointer',
              transform: 'scale(1)',
              transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
              boxShadow: `0 8px 25px rgba(0, 0, 0, 0.3)`,
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              minWidth: isMobile ? '180px' : 'auto'
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#f8f9fa';
              e.target.style.transform = 'scale(1.05) translateY(-2px)';
              e.target.style.boxShadow = '0 12px 35px rgba(0, 0, 0, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = colors.white;
              e.target.style.transform = 'scale(1) translateY(0px)';
              e.target.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.3)';
            }}
            >
              <span>Get Involved Today</span>
              <span style={{ fontSize: '1.2em' }}>⚡</span>
            </button>
          </div>
        </section>

      </div>
    </>
  );
}
