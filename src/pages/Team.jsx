import Image from "../components/Image";
import { TransitionLink } from "../components/TransitionProvider";

export default function Team() {
  const teamMembers = {
    leadership: [
      { name: "Nairutya Mankar", role: "Team Captain", department: "Leadership", linkedin: "#", github: "#" },
      { name: "Ashay Lanjewar", role: "Vice Captain", department: "Leadership", linkedin: "#", github: "#" }
      
    ],
    aerodynamics: [
      { name: "Abhishek Dass", role: "Aerodynamics Lead", department: "Aerodynamics", linkedin: "#", github: "#" },
      { name: "Arya Chinchalkar", role: "CFD Engineer", department: "Aerodynamics", linkedin: "#", github: "#" },
      { name: "Aryan Ingole", role: "Wind Tunnel Specialist", department: "Aerodynamics", linkedin: "#", github: "#" }
    ],
    powertrain: [
      { name: "Sahil Bhandikar", role: "Powertrain Lead", department: "Powertrain", linkedin: "#", github: "#" },
      { name: "Vedant Ghodkhande", role: "Battery Engineer", department: "Powertrain", linkedin: "#", github: "#" },
      { name: "ApurvaAdepuwar", role: "Motor Controller", department: "Powertrain", linkedin: "#", github: "#" }
    ],
    chassis: [
      { name: "Arjun Khobragade", role: "Chassis Lead", department: "Chassis", linkedin: "#", github: "#" },
      { name: "Sajal", role: "Suspension Engineer", department: "Chassis", linkedin: "#", github: "#" },
      { name: "Siddhant Deshpande", role: "Structural Engineer", department: "Chassis", linkedin: "#", github: "#" }
    ],
    business: [
      { name: "Kanishka Wankhede", role: "Business Lead", department: "Business", linkedin: "#", github: "#" }
    ],
    LV: [
      { name: "Melvin Kakde", role: "System Integration Lead", department: "System Integration", linkedin: "#", github: "#" },
      { name: "Sharyu", role: "System Integration Engineer", department: "System Integration", linkedin: "#", github: "#" },
      { name: "Aryan Nandurkar", role: "System Integration Engineer", department: "System Integration", linkedin: "#", github: "#" },
      { name: "Khaustubh Shende", role: "System Integration Engineer", department: "System Integration", linkedin: "#", github: "#" },
      { name: "Gandharvi", role: "System Integration Engineer", department: "System Integration", linkedin: "#", github: "#" }
    ],
    daq: [
      { name: "Abhishek Dass", role: "Data Acquisation Lead", department: "Data Acquisation", linkedin: "#", github: "#" },
      { name: "Karan Agre", role: "Data Acquisation Engineer", department: "Data Acquisation", linkedin: "#", github: "#" },
      { name: "Ritik Neware", role: "Data Acquisation Engineer", department: "Data Acquisation", linkedin: "#", github: "#" }
    ],
  };

  const MemberCard = ({ member, index }) => (
    <div 
      style={{
        position: 'relative',
        background: 'linear-gradient(135deg, #1f2937 0%, #111827 100%)',
        borderRadius: '20px',
        boxShadow: '0 10px 25px rgba(0,0,0,0.3)',
        padding: '24px',
        textAlign: 'center',
        transition: 'all 0.3s ease',
        transform: 'translateY(0px)',
        border: '1px solid #374151',
        animationDelay: `${index * 100}ms`,
        overflow: 'hidden'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-8px)';
        e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.4)';
        e.currentTarget.style.borderColor = '#f97316';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0px)';
        e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.3)';
        e.currentTarget.style.borderColor = '#374151';
      }}
    >
      {/* Animated background gradient */}
      <div style={{
        position: 'absolute',
        inset: '0',
        background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(249, 115, 22, 0.1) 100%)',
        borderRadius: '20px',
        opacity: '0',
        transition: 'opacity 0.3s ease'
      }}></div>
      
      <div style={{ position: 'relative', zIndex: '10' }}>
        {/* Avatar with glow effect */}
        <div style={{
          position: 'relative',
          width: '128px',
          height: '128px',
          borderRadius: '50%',
          overflow: 'hidden',
          margin: '0 auto 24px',
          background: 'linear-gradient(135deg, #374151 0%, #1f2937 100%)',
          transition: 'transform 0.3s ease'
        }}
        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
          <div style={{
            position: 'absolute',
            inset: '0',
            background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2) 0%, rgba(249, 115, 22, 0.2) 100%)',
            opacity: '0',
            transition: 'opacity 0.3s ease'
          }}></div>
          <Image
            src="/logo.jpg"
            alt={member.name}
            width={128}
            height={128}
            style={{ height: '128px', width: '128px', objectFit: 'cover', position: 'relative', zIndex: '10' }}
            sources={[]}
          />
          {/* Animated ring */}
          <div style={{
            position: 'absolute',
            inset: '0',
            borderRadius: '50%',
            border: '2px solid #f97316',
            opacity: '0',
            animation: 'spin 3s linear infinite',
            transition: 'opacity 0.3s ease'
          }}></div>
        </div>

        <h3 style={{
          fontSize: '20px',
          fontWeight: 'bold',
          color: '#f9fafb',
          marginBottom: '8px',
          transition: 'color 0.3s ease'
        }}>{member.name}</h3>
        
        <div style={{ position: 'relative' }}>
          <p style={{
            color: '#f97316',
            fontWeight: '600',
            marginBottom: '8px',
            fontSize: '18px'
          }}>{member.role}</p>
          <div style={{
            height: '2px',
            width: '48px',
            background: 'linear-gradient(90deg, #3b82f6 0%, #f97316 100%)',
            margin: '0 auto 12px',
            opacity: '0.6',
            transition: 'all 0.3s ease'
          }}></div>
        </div>
        
        <p style={{
          color: '#9ca3af',
          fontSize: '14px',
          marginBottom: '24px',
          textTransform: 'uppercase',
          letterSpacing: '0.05em',
          fontWeight: '500'
        }}>{member.department}</p>
        
        {/* Social links */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '16px' }}>
          <a 
            href={member.linkedin}
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%)',
              color: 'white',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.2s ease',
              textDecoration: 'none'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.1)';
              e.currentTarget.style.boxShadow = '0 8px 20px rgba(14, 165, 233, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <svg style={{ width: '20px', height: '20px' }} fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
            </svg>
          </a>
          <a 
            href={member.github}
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #374151 0%, #111827 100%)',
              color: 'white',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.2s ease',
              textDecoration: 'none'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.1)';
              e.currentTarget.style.boxShadow = '0 8px 20px rgba(55, 65, 81, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <svg style={{ width: '20px', height: '20px' }} fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );

  const StatCard = ({ number, label, delay }) => (
    <div 
      style={{
        textAlign: 'center',
        cursor: 'pointer',
        transition: 'transform 0.3s ease',
        animationDelay: `${delay}ms`
      }}
      onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
      onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
    >
      <div style={{ position: 'relative', marginBottom: '12px' }}>
        <div style={{
          fontSize: '60px',
          fontWeight: 'bold',
          background: 'linear-gradient(135deg, #3b82f6 0%, #f97316 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          transition: 'transform 0.3s ease'
        }}>
          {number}
        </div>
      </div>
      <div style={{
        color: '#d1d5db',
        fontWeight: '500',
        fontSize: '18px',
        transition: 'color 0.3s ease'
      }}>{label}</div>
      <div style={{
        height: '4px',
        width: '32px',
        background: 'linear-gradient(90deg, #3b82f6 0%, #f97316 100%)',
        margin: '8px auto 0',
        opacity: '0',
        transition: 'opacity 0.3s ease'
      }}></div>
    </div>
  );

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#0f1419' }}>
      {/* Hero Section */}
      <section style={{
        position: 'relative',
        background: 'linear-gradient(135deg, #0f1419 0%, #1f2937 50%, #111827 100%)',
        color: 'white',
        padding: '96px 0',
        overflow: 'hidden'
      }}>
        {/* Animated background elements */}
        <div style={{
          position: 'absolute',
          top: '80px',
          left: '40px',
          width: '288px',
          height: '288px',
          background: 'radial-gradient(circle, rgba(249, 115, 22, 0.1) 0%, transparent 70%)',
          borderRadius: '50%',
          animation: 'pulse 3s ease-in-out infinite'
        }}></div>
        <div style={{
          position: 'absolute',
          bottom: '80px',
          right: '40px',
          width: '384px',
          height: '384px',
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%)',
          borderRadius: '50%',
          animation: 'pulse 3s ease-in-out infinite 1s'
        }}></div>
        
        <div style={{
          position: 'relative',
          zIndex: '10',
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 16px',
          textAlign: 'center'
        }}>
          <h1 style={{
            fontSize: '72px',
            fontWeight: 'bold',
            marginBottom: '24px',
            background: 'linear-gradient(135deg, #f97316 0%, #fbbf24 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            lineHeight: '1.1'
          }}>
            Meet Our Team
          </h1>
          <p style={{
            fontSize: '24px',
            color: 'rgba(59, 130, 246, 0.9)',
            maxWidth: '768px',
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            The passionate individuals behind E-Formula Ashwa Riders, driving innovation and excellence
          </p>
          
          {/* Decorative elements */}
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '32px', gap: '8px' }}>
            {[0, 1, 2].map((i) => (
              <div 
                key={i}
                style={{
                  width: '8px',
                  height: '8px',
                  backgroundColor: '#f97316',
                  borderRadius: '50%',
                  animation: 'bounce 1s infinite',
                  animationDelay: `${i * 200}ms`
                }}
              ></div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Stats */}
      <section style={{
        padding: '80px 0',
        background: 'linear-gradient(180deg, #1f2937 0%, #111827 100%)',
        position: 'relative'
      }}>
        <div style={{
          position: 'absolute',
          inset: '0',
          background: 'linear-gradient(90deg, rgba(59, 130, 246, 0.05) 0%, transparent 50%, rgba(249, 115, 22, 0.05) 100%)'
        }}></div>
        <div style={{
          position: 'relative',
          zIndex: '10',
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 16px'
        }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <h2 style={{
              fontSize: '36px',
              fontWeight: 'bold',
              color: '#f9fafb',
              marginBottom: '16px'
            }}>Our Impact</h2>
            <div style={{
              height: '4px',
              width: '80px',
              background: 'linear-gradient(90deg, #3b82f6 0%, #f97316 100%)',
              margin: '0 auto'
            }}></div>
          </div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '32px'
          }}>
            <StatCard number="50+" label="Team Members" delay={0} />
            <StatCard number="5" label="Departments" delay={200} />
            <StatCard number="3" label="Years Active" delay={400} />
            <StatCard number="100%" label="Dedication" delay={600} />
          </div>
        </div>
      </section>

      {/* Department sections */}
      {Object.entries(teamMembers).map(([ department, members ], sectionIndex) => {
        const isEven = sectionIndex % 2 === 0;
        const sectionConfig = {
          leadership: { title: "Leadership Team", subtitle: "The visionaries leading our mission", icon: "👑" },
          aerodynamics: { title: "Aerodynamics Department", subtitle: "Optimizing airflow for maximum performance", icon: "💨" },
          powertrain: { title: "Powertrain Department", subtitle: "Powering the future with electric innovation", icon: "⚡" },
          chassis: { title: "Chassis Department", subtitle: "Building the foundation of performance", icon: "🔧" },
          business: { title: "Business Department", subtitle: "Driving growth and partnerships", icon: "💼" },
          lv: { title: "LV Department", subtitle: "Powering the future with electric innovation", icon: "⚡" },
          daq: { title: "DAQ Department", subtitle: "Powering the future with electric innovation", icon: "📊" }
        };

        return (
          <section 
            key={department}
            style={{
              padding: '80px 0',
              position: 'relative',
              overflow: 'hidden',
              background: isEven ? 
                'linear-gradient(135deg, #0f1419 0%, #1f2937 100%)' :
                'linear-gradient(135deg, #111827 0%, #1f2937 100%)'
            }}
          >
            {/* Background decorations */}
            <div style={{ position: 'absolute', inset: '0' }}>
              <div style={{
                position: 'absolute',
                top: '0',
                right: '0',
                width: '384px',
                height: '384px',
                background: 'radial-gradient(circle, rgba(249, 115, 22, 0.05) 0%, transparent 70%)',
                borderRadius: '50%'
              }}></div>
              <div style={{
                position: 'absolute',
                bottom: '0',
                left: '0',
                width: '256px',
                height: '256px',
                background: 'radial-gradient(circle, rgba(59, 130, 246, 0.05) 0%, transparent 70%)',
                borderRadius: '50%'
              }}></div>
            </div>

            <div style={{
              position: 'relative',
              zIndex: '10',
              maxWidth: '1280px',
              margin: '0 auto',
              padding: '0 16px'
            }}>
              <div style={{ textAlign: 'center', marginBottom: '64px' }}>
                <div style={{ fontSize: '48px', marginBottom: '16px' }}>
                  {sectionConfig[department]?.icon}
                </div>
                <h2 style={{
                  fontSize: '48px',
                  fontWeight: 'bold',
                  marginBottom: '16px',
                  color: '#f97316'
                }}>
                  {sectionConfig[department]?.title}
                </h2>
                <p style={{
                  fontSize: '20px',
                  maxWidth: '512px',
                  margin: '0 auto',
                  color: 'rgba(249, 250, 251, 0.8)'
                }}>
                  {sectionConfig[department]?.subtitle}
                </p>
                <div style={{
                  height: '4px',
                  width: '96px',
                  background: 'linear-gradient(90deg, #3b82f6 0%, #f97316 100%)',
                  margin: '24px auto 0'
                }}></div>
              </div>
              
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                gap: '32px'
              }}>
                {members.map((member, index) => (
                  <MemberCard key={index} member={member} index={index} />
                ))}
              </div>
            </div>
          </section>
        );
      })}

      {/* CTA Section */}
      <section style={{
        padding: '80px 0',
        background: 'linear-gradient(135deg, #301f1bff 0%, #1d4ed8 100%)',
        color: 'white',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{ position: 'absolute', inset: '0' }}>
          <div style={{
            position: 'absolute',
            top: '-96px',
            right: '-96px',
            width: '384px',
            height: '384px',
            background: 'radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%)',
            borderRadius: '50%'
          }}></div>
          <div style={{
            position: 'absolute',
            bottom: '-96px',
            left: '-96px',
            width: '384px',
            height: '384px',
            background: 'radial-gradient(circle, rgba(249, 115, 22, 0.2) 0%, transparent 70%)',
            borderRadius: '50%'
          }}></div>
        </div>
        
        <div style={{
          position: 'relative',
          zIndex: '10',
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 16px',
          textAlign: 'center'
        }}>
          <div style={{ maxWidth: '768px', margin: '0 auto' }}>
            <h2 style={{
              fontSize: '48px',
              fontWeight: 'bold',
              marginBottom: '24px'
            }}>Want to Join Our Team?</h2>
            <p style={{
              fontSize: '20px',
              marginBottom: '40px',
              color: 'rgba(255, 255, 255, 0.9)',
              lineHeight: '1.6'
            }}>
              We're always looking for passionate individuals to join our mission of innovation and excellence
            </p>
            <TransitionLink 
              to="/contact" 
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                padding: '16px 32px',
                backgroundColor: 'white',
                color: '#af1e1e79',
                fontWeight: 'bold',
                fontSize: '18px',
                borderRadius: '9999px',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
                boxShadow: '0 10px 25px rgba(0,0,0,0.2)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#f3f4f6';
                e.currentTarget.style.transform = 'scale(1.05)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'white';
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.2)';
              }}
            >
              <span style={{ marginRight: '8px' }}>Get in Touch</span>
              <svg style={{ width: '20px', height: '20px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </TransitionLink>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        
        @keyframes bounce {
          0%, 20%, 53%, 80%, 100% { transform: translateY(0px); }
          40%, 43% { transform: translateY(-10px); }
          70% { transform: translateY(-5px); }
          90% { transform: translateY(-2px); }
        }
        
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
