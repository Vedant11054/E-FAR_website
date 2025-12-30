const gradients = [
  'linear-gradient(135deg, #D4991B 0%, #F7A93B 100%)',
  'linear-gradient(135deg, #00A3E0 0%, #33CFFF 100%)',
  'linear-gradient(135deg, #FF4C60 0%, #FF6B8A 100%)',
  'linear-gradient(135deg, #6A4CFF 0%, #9B7BFF 100%)',
  'linear-gradient(135deg, #00FFA3 0%, #33FFD1 100%)',
  'linear-gradient(135deg, #FFB200 0%, #FFD166 100%)',
  'linear-gradient(135deg, #FF4CA3 0%, #FF6BDA 100%)',
  'linear-gradient(135deg, #4CFFEF 0%, #33FFD1 100%)',
];

const SponsorCard = ({ sponsor, index }) => (
  
  <div
    className="group relative rounded-3xl overflow-hidden hover:scale-105 transition-all duration-300 hover:shadow-2xl"
    style={{
      borderRadius: '24px',
      transition: 'all 0.3s ease',
      boxShadow: '0 8px 25px rgba(0, 0, 0, 0.15)',
      background: gradients[index % gradients.length],
    }}
  >
    <a
      href={sponsor.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block p-8 text-center relative"
      style={{ padding: '32px' }}
    >
      <div className="mb-4">
        <div
          className="mx-auto flex items-center justify-center rounded-2xl"
          style={{
            backgroundColor: '#FFFFFF',
            border: '1px solid #E5E7EB',
            borderRadius: '16px',
            padding: '8px',
            display: 'inline-block',
          }}
        >
          <img
            src={sponsor.logo}
            alt={sponsor.name}
            className="object-contain group-hover:scale-105 transition-transform duration-300"
            style={{
              width: '120px',
              height: '120px',
              maxWidth: '120px',
              maxHeight: '120px',
              objectFit: 'contain',
            }}
          />
        </div>
      </div>

      <h3
        className="text-lg font-bold mb-2 group-hover:opacity-80 transition-opacity duration-300"
        style={{ color: '#FFFFFF' }}
      >
        {sponsor.name}
      </h3>

      <div
        className="flex items-center justify-center opacity-70 group-hover:opacity-100 transition-opacity duration-300"
        style={{ color: '#FFFFFF' }}
      >
        
        <svg
          className="ml-1 group-hover:translate-x-1 transition-transform duration-300 sponsor-visit-icon"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          style={{ width: '12px', height: '12px' }}
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
        </svg>
      </div>
    </a>
  </div>
);

export default function Sponsors() {
  const sponsors = [
    { name: 'E-Prism India', logo: '/sponsor1.jpg', url: 'https://eiprismindia.in/' },
    { name: 'The Bombay Tools', logo: '/sponsor2.jpg', url: 'https://thebombaytools.com/' },
    { name: 'Maha Bearings', logo: '/sponsor3.jpg', url: 'https://www.mahabearings.com/' },
    { name: 'Carbonext', logo: '/sponsor4.jpg', url: 'https://www.carbonext.net/' },
    { name: 'PCB Power', logo: '/sponsor5.jpg', url: 'https://www.pcbpower.com/' },
    { name: 'Vashi', logo: '/sponsor6.jpg', url: 'https://corp.vashiisl.com/' },
    { name: 'Asap Hardware', logo: '/sponsor7.jpg', url: 'https://www.asaphardwaresolutions.com/' },
    { name: 'Bender APAC', logo: '/sponsor8.jpg', url: 'https://www.bender-apac.com/products/' },
  ];

  return (
    <div
      className="min-h-screen"
      style={{
        backgroundColor: '#0B0B0B',
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #0B0B0B 0%, #1A1A1A 50%, #0B0B0B 100%)',
      }}
    >
      {/* Hero Section */}
      <section 
        className="relative py-24 overflow-hidden"
        style={{ 
          padding: '120px 0',
          background: 'linear-gradient(135deg, #0B0B0B 0%, #1A1A1A 100%)'
        }}
      >
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D4991B' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <h1 
            className="text-5xl md:text-7xl font-bold mb-6"
            style={{ 
              color: '#D4991B',
              fontSize: 'clamp(3rem, 8vw, 5rem)',
              fontWeight: 'bold'
            }}
          >
            Our Esteemed
            <span 
              className="block text-brand-white"
              style={{ color: '#FFFFFF' }}
            >
              Sponsors
            </span>
          </h1>
          
          <p 
            className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed"
            style={{ 
              color: 'rgba(255, 255, 255, 0.8)',
              fontSize: 'clamp(1.125rem, 3vw, 1.5rem)'
            }}
          >
            We proudly thank the incredible sponsors who fuel our innovation and performance. 
            Their support enables us to push the boundaries of electric racing technology.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-4xl mx-auto">
            <div className="text-center">
              <div 
                className="text-4xl font-bold text-brand-orange mb-2"
                style={{ color: '#D4991B', fontSize: '2.5rem' }}
              >
                8+
              </div>
              <div 
                className="text-brand-white/80"
                style={{ color: 'rgba(255, 255, 255, 0.8)' }}
              >
                Active Partners
              </div>
            </div>
            <div className="text-center">
              <div 
                className="text-4xl font-bold text-brand-blue mb-2"
                style={{ color: '#00A3E0', fontSize: '2.5rem' }}
              >
                100%
              </div>
              <div 
                className="text-brand-white/80"
                style={{ color: 'rgba(255, 255, 255, 0.8)' }}
              >
                Support Coverage
              </div>
            </div>
            <div className="text-center">
              <div 
                className="text-4xl font-bold text-brand-orange mb-2"
                style={{ color: '#D4991B', fontSize: '2.5rem' }}
              >
                24/7
              </div>
              <div 
                className="text-brand-white/80"
                style={{ color: 'rgba(255, 255, 255, 0.8)' }}
              >
                Partnership Support
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-12" style={{ color: '#FFFFFF' }}>
            Our <span style={{ color: '#D4991B' }}>Sponsors</span>
          </h1>

          <div
            className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
            style={{ display: 'grid', gap: '32px', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}
          >
            {sponsors.map((s, i) => (
              <SponsorCard key={s.name} sponsor={s} index={i} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
