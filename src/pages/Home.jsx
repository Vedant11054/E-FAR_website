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
              Discover the story behind our championship-winning electric formula racing team
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
                  To design, build, and race electric formula cars that push the
                  boundaries of sustainable automotive technology while fostering
                  innovation, teamwork, and engineering excellence among students.
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
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import teamPhoto from "/assets/Team_photo1.jpg";
import car1 from "/assets/car1.jpg";
import car2 from "/assets/car2.jpg";
import car3 from "/assets/car3.jpg";
import car4 from "/assets/car4.jpg";
import car5 from "/assets/car5.jpg";
import heroVideo from "/assets/Web_Vid.mp4";

const vehicles = [
  { 
    name: "ZEUS", 
    image: "/assets/car1.jpg", 
    description: "Our first electric formula car, built for Formula Bharat Virtuals.",
    year: "2020",
    color: "255, 106, 11",
    specs: {
      topSpeed: "60 km/h",
      acceleration: "0-60 in 5.2s",
      weight: "NA kg",
      power: "6.6 kW",
      battery: "7.2 kWh",
      torque: "120 Nm"
    },
    features: [
    "First Electric Vehicle to take part in Formula Bharat"
    ]
  },
  { 
    name: "NEXUS", 
    image: "/assets/car2.jpg", 
    description: "Centrals India First Electric Vehicle to take part in Formula Bharat.",
    year: "2023",
    color: "34, 165, 238",
    specs: {
      topSpeed: "80 km/h",
      acceleration: "0-60 in 4.5s",
      weight: "315 kg",
      power: "7 kW",
      battery: "6.8 kWh",
      torque: "160 Nm"
    },
    features: [
      "Improved suspension system",
      "Optimized weight distribution"
    ]
  },
  { 
    name: "Tarkashya", 
    image: "/assets/car3.jpg", 
    description: "Lightweight chassis with advanced suspension system.",
    year: "2024",
    color: "255, 106, 11",
    specs: {
      topSpeed: "80 km/h",
      acceleration: "0-60 in 5.0s",
      weight: "320 kg",
      power: "6.9 kW",
      battery: "6.72 kWh",
      torque: "150 Nm"
    },
    features: [
      "Robust foundation design",
      "Proven durability"
    ]
  },
  { 
    name: "Tarkashya 2.0", 
    image: "/assets/car5.jpg", 
    description: "Refined structure, with new Drivetrain and cooling upgrades.",
    year: "2024",
    color: "34, 165, 238",
    specs: {
      topSpeed: "90 km/h",
      acceleration: "0-60 in 6.5s",
      weight: "310 kg",
      power: "13.4 kW",
      battery: "6.04 kWh",
      torque: "150 Nm"
    },
    features: [
      "Cooling upgrades",
      "Enhanced stability",
      "New Drivetrain"
    ]
  },
  { 
    name: "Tarkashya 3.0", 
    image: "/assets/car4.jpg", 
    description: "Latest Vehicle with cutting-edge technology and Refined structure.",
    year: "2025",
    color: "255, 106, 11",
    specs: {
      topSpeed: "100 km/h",
      acceleration: "0-60 in 5.5s",
      weight: "310 kg",
      power: "13.4 kW",
      battery: "6.04 kWh",
      torque: "150 Nm"
    },
    features: [
      "Experimental upgrades",
      "Stability improvements",
      "Improved endurance",
      "Thermal management",
      "Performance optimization",
      "DAQ",
      "Telemetry",
      "Composites",
      "Aerodynamics"
    ]
  }
];

const achievements = [
  { title: "AIR 10 2020", description: "Secured AIR 10th place at Formula Bharat Virtuals.", icon:"10", color: "#ff6a0b" },
  { title: "AIR 10 2025", description: "Secured AIR 10th in Formula Bharat 2025.",icon:"10",color: "#22a5ee" },
  { title: "Top 5 in ALTAIR Simulation Challenge", description: "Secured  3rd place in ALTAIR simulation Challenge.", icon: "⚡", color: "#ff6a0b" },
  { title: "Recognized by Nitin Gadkari", description: "Got previlage to showcase our vehicle in Advantage Vidharba", icon: "⭐", color: "#22a5ee" }
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
            year: "2022", 
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
            subtitle: "First Victory",
            desc: 'Dominated Formula Student India 2023 with our groundbreaking debut, claiming "Best Newcomer Award" and securing top 10 finish against seasoned competitors.',
            side: 'right',
            icon: "🏆",
            achievement: "Best Newcomer",
            color: colors.blue
          },
          { 
            year: "2024", 
            title: "Excellence", 
            subtitle: "Championship Level",
            desc: "Reached the pinnacle with 1st place in Design Event and 2nd place in Business Plan, establishing ourselves as championship contenders.",
            side: 'left',
            icon: "👑",
            achievement: "Design Champions",
            color: colors.orange
          },
          { 
            year: "2025", 
            title: "Evolution", 
            subtitle: "Global Stage",
            desc: "Expanding our racing dynasty to international competitions, ready to showcase electric racing excellence on the world stage.",
            side: 'right',
            icon: "🌍",
            achievement: "Global Expansion",
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
            E-Formula Ashwa Riders is a team of 35 passionate engineers from St. Vincent Pallotti College of Engineering and Technology, Nagpur. We are Central India’s first student team to design, build, and race an all-electric Formula vehicle, blending innovation, engineering excellence, and the spirit of competition to drive the future of sustainable mobility.
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
            🏁 Our FSEA Cars
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
            your support drives us forward. Connect with us to innovate, collaborate and race toward a sustainable future.
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
