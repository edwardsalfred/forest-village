import { useEffect, useState } from 'react'
import './index.css'

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll('.phase-card, .market-stat, .return-card, .impact-card, .about-feature').forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(25px)';
      el.style.transition = 'all 0.6s ease';
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Smooth scroll for anchor links
  const handleAnchorClick = (e, targetId) => {
    e.preventDefault();
    const target = document.querySelector(targetId);
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      {/* NAVIGATION */}
      <nav id="navbar" className={isScrolled ? 'scrolled' : ''}>
        <a href="#" className="nav-logo">Forest <span>Village</span></a>
        <ul className="nav-links">
          <li><a href="#about" onClick={(e) => handleAnchorClick(e, '#about')}>Vision</a></li>
          <li><a href="#phases" onClick={(e) => handleAnchorClick(e, '#phases')}>Development</a></li>
          <li><a href="#market" onClick={(e) => handleAnchorClick(e, '#market')}>Market Data</a></li>
          <li><a href="#investor" onClick={(e) => handleAnchorClick(e, '#investor')}>Returns</a></li>
          <li><a href="#contact" className="nav-cta" onClick={(e) => handleAnchorClick(e, '#contact')}>Inquire Now</a></li>
        </ul>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-pattern"></div>
        <div className="leaf leaf-1"></div>
        <div className="leaf leaf-2"></div>
        <div className="leaf leaf-3"></div>
        <div className="hero-content">
          <div className="hero-text">
            <div className="overline">
              <span className="overline-line"></span>
              Jackson, Mississippi — Now Pre-Leasing
            </div>
            <h1>A Community<br/><em>Destination,</em><br/>Purpose-Built.</h1>
            <p className="subtitle">Forest Village is a 3.5-acre, two-building mixed-use development at Forest Avenue & Watkins Drive — designed to serve the daily, weekly, and recurring needs of 55,000+ residents in one of Jackson's highest-need corridors.</p>
            <div className="hero-buttons">
              <a href="#contact" className="btn-primary" onClick={(e) => handleAnchorClick(e, '#contact')}>Request Site Package →</a>
              <a href="#phases" className="btn-secondary" onClick={(e) => handleAnchorClick(e, '#phases')}>View Development Plan</a>
            </div>
          </div>
          <div className="hero-stats">
            <div className="stats-card">
              <h3>Forest Village at a Glance</h3>
              <div className="location">Forest Ave & Watkins Dr · Jackson, MS 39206</div>
              <div className="stat-grid">
                <div className="stat">
                  <div className="stat-number">3.5</div>
                  <div className="stat-label">Acres</div>
                </div>
                <div className="stat">
                  <div className="stat-number">20K</div>
                  <div className="stat-label">Total Sq Ft</div>
                </div>
                <div className="stat">
                  <div className="stat-number">51K</div>
                  <div className="stat-label">Daily Vehicles</div>
                </div>
                <div className="stat">
                  <div className="stat-number">55K+</div>
                  <div className="stat-label">3-Mi Residents</div>
                </div>
              </div>
              <div className="stats-cta">
                ⟶ 0.4 mi from I-220/Watkins Drive Interchange
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TICKER */}
      <div className="ticker">
        <div className="ticker-track">
          <span className="ticker-item"><span className="gold">◆</span> Pre-Leasing Now</span>
          <span className="ticker-item">20,000 SF Mixed-Use</span>
          <span className="ticker-item"><span className="gold">◆</span> 2-Phase Development</span>
          <span className="ticker-item">Forest Ave & Watkins Dr</span>
          <span className="ticker-item"><span className="gold">◆</span> Jackson, MS 39206</span>
          <span className="ticker-item">NNN Lease Structures</span>
          <span className="ticker-item"><span className="gold">◆</span> Drive-Through Capable</span>
          <span className="ticker-item">Healthcare · QSR · Retail · Beauty</span>
          <span className="ticker-item"><span className="gold">◆</span> Pre-Leasing Now</span>
          <span className="ticker-item">20,000 SF Mixed-Use</span>
          <span className="ticker-item"><span className="gold">◆</span> 2-Phase Development</span>
          <span className="ticker-item">Forest Ave & Watkins Dr</span>
          <span className="ticker-item"><span className="gold">◆</span> Jackson, MS 39206</span>
          <span className="ticker-item">NNN Lease Structures</span>
          <span className="ticker-item"><span className="gold">◆</span> Drive-Through Capable</span>
          <span className="ticker-item">Healthcare · QSR · Retail · Beauty</span>
        </div>
      </div>

      {/* ABOUT / VISION */}
      <section className="about" id="about">
        <div className="about-grid">
          <div className="vision-visual">
            <div className="vision-overlay">
              <div className="vision-overlay-stat">
                <span>Development Size</span>
                <span>3.5 Acres</span>
              </div>
              <div className="vision-overlay-stat">
                <span>Building Count</span>
                <span>2 Buildings</span>
              </div>
              <div className="vision-overlay-stat">
                <span>Total Leasable</span>
                <span>20,000 SF</span>
              </div>
              <div className="vision-overlay-stat">
                <span>Parking Capacity</span>
                <span>90–110 Spaces</span>
              </div>
            </div>
          </div>
          <div className="about-content">
            <div className="section-header">
              <div className="section-overline"><span className="overline-line"></span> The Vision</div>
              <h2 className="section-title">More Than a <em>Development.</em><br/>A Neighborhood Hub.</h2>
              <p className="section-desc">ZIP code 39206 is one of Jackson's most underserved corridors — high population density, limited retail options, and virtually no urgent care access. Forest Village addresses these gaps with a deliberately curated tenant mix that generates traffic from morning to night, weekday through weekend.</p>
            </div>
            <div className="about-features">
              <div className="about-feature">
                <div className="feature-icon">🍗</div>
                <div className="feature-text">
                  <h4>QSR with Drive-Through</h4>
                  <p>Hundreds of daily visits anchoring the site's traffic engine with national brand recognition.</p>
                </div>
              </div>
              <div className="about-feature">
                <div className="feature-icon">🏥</div>
                <div className="feature-text">
                  <h4>Urgent Care Medical Clinic</h4>
                  <p>Filling a critical healthcare gap — the nearest urgent care is 3–5 miles from this corridor.</p>
                </div>
              </div>
              <div className="about-feature">
                <div className="feature-icon">👔</div>
                <div className="feature-text">
                  <h4>Self-Reinforcing Co-Tenancy</h4>
                  <p>Laundromat dwell time, beauty traffic, and medical visits create a cross-pollination loop that lifts every tenant.</p>
                </div>
              </div>
              <div className="about-feature">
                <div className="feature-icon">📈</div>
                <div className="feature-text">
                  <h4>Proven De-Risk Model</h4>
                  <p>Phase 1 validates market demand before Phase 2 capital deployment, protecting investor downside.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PHASES */}
      <section className="phases" id="phases">
        <div className="phases-container">
          <div className="section-header center">
            <div className="section-overline" style={{ color: 'var(--gold)' }}><span className="overline-line" style={{ background: 'var(--gold)' }}></span> Development Phases</div>
            <h2 className="section-title" style={{ color: 'white' }}>Two Buildings. <em>One Unified Destination.</em></h2>
            <p className="section-desc" style={{ color: 'rgba(255,255,255,0.55)' }}>A phased approach that reduces risk, proves demand, and builds long-term asset value.</p>
          </div>
          <div className="phase-cards">
            <div className="phase-card">
              <div className="phase-number">01</div>
              <span className="phase-label">Phase I — Building 1</span>
              <h3>The Traffic Engine</h3>
              <p className="phase-sqft">10,000 SF · High Daily Volume · Drive-Through Capable</p>
              <div className="phase-tenants">
                <div className="tenant-row">
                  <div className="tenant-icon">🍔</div>
                  <div className="tenant-info">
                    <h5>QSR Anchor with Drive-Through</h5>
                    <p>3,500–5,000 SF · National brand · $12–$18/SF NNN</p>
                  </div>
                </div>
                <div className="tenant-row">
                  <div className="tenant-icon">🧺</div>
                  <div className="tenant-info">
                    <h5>Full-Service Laundromat</h5>
                    <p>2,500–3,500 SF · 45–90 min dwell time · Captive QSR audience</p>
                  </div>
                </div>
                <div className="tenant-row">
                  <div className="tenant-icon">🏪</div>
                  <div className="tenant-info">
                    <h5>Inline Neighborhood Retail</h5>
                    <p>1,500–3,000 SF · Services, convenience, or tax prep</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="phase-card">
              <div className="phase-number">02</div>
              <span className="phase-label">Phase II — Building 2</span>
              <h3>The Health & Wellness Hub</h3>
              <p className="phase-sqft">10,000 SF · Long-Term Leases · 3–5 Mile Draw</p>
              <div className="phase-tenants">
                <div className="tenant-row">
                  <div className="tenant-icon">⚕️</div>
                  <div className="tenant-info">
                    <h5>Urgent Care / Medical Clinic</h5>
                    <p>3,000–5,000 SF · 7–15 yr lease · $18–$25/SF NNN</p>
                  </div>
                </div>
                <div className="tenant-row">
                  <div className="tenant-icon">💇</div>
                  <div className="tenant-info">
                    <h5>Hair Salon & Beauty Supply</h5>
                    <p>3,000–5,000 SF · Weekly visit frequency · Dual-revenue model</p>
                  </div>
                </div>
                <div className="tenant-row">
                  <div className="tenant-icon">💊</div>
                  <div className="tenant-info">
                    <h5>Neighborhood Pharmacy / Wellness</h5>
                    <p>2,000–3,500 SF · Clinic referral synergy · Rx + OTC retail</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MARKET DATA */}
      <section className="market" id="market">
        <div className="market-container">
          <div className="section-header center">
            <div className="section-overline"><span className="overline-line"></span> Market Intelligence</div>
            <h2 className="section-title">The Data Behind <em>the Opportunity.</em></h2>
            <p className="section-desc">ZIP 39206 presents a rare convergence of high population density, demonstrable service gaps, and limited QSR competition — the conditions that drive outsized tenant performance.</p>
          </div>
          <div className="market-stats">
            <div className="market-stat">
              <div className="number">55K+</div>
              <div className="label">Trade Area Population</div>
            </div>
            <div className="market-stat">
              <div className="number">15.8%</div>
              <div className="label">Uninsured Rate</div>
            </div>
            <div className="market-stat">
              <div className="number">4</div>
              <div className="label">Schools Within 1 Mile</div>
            </div>
            <div className="market-stat">
              <div className="number">51K</div>
              <div className="label">Daily Vehicle Trips</div>
            </div>
          </div>
          <div className="insight-bar">
            <div>
              <h4>Competitor Quality Gap = Your Opportunity</h4>
              <p>National QSR chains within 2 miles average below 4.0 stars across thousands of reviews. Recurring complaints: poor service, incorrect orders, early closures. This corridor's customers are underserved and actively searching for a better option.</p>
            </div>
            <div className="rating">
              <div className="rating-stars">★★★★☆</div>
              <div className="rating-label">Competitor Avg: 3.7★</div>
            </div>
          </div>
        </div>
      </section>

      {/* INVESTOR RETURNS */}
      <section className="investor" id="investor">
        <div className="investor-container">
          <div className="section-header">
            <div className="section-overline"><span className="overline-line"></span> Investor Returns</div>
            <h2 className="section-title">Built for <em>Long-Term Wealth.</em></h2>
            <p className="section-desc">Stabilized NNN lease structures deliver predictable, recession-resistant income with minimal landlord management burden.</p>
          </div>
          <div className="returns-grid">
            <div className="return-card">
              <div className="metric-label">Stabilized Annual Net Rent</div>
              <div className="metric-value">$260K+</div>
              <div className="metric-desc">Combined Buildings 1 & 2 at full occupancy with NNN lease structures — zero operating expense exposure for the landlord.</div>
            </div>
            <div className="return-card">
              <div className="metric-label">Medical Office Occupancy</div>
              <div className="metric-value">92.7%</div>
              <div className="metric-desc">National medical office occupancy at all-time highs. Healthcare tenants sign 7–15 year leases with the lowest default rates in commercial real estate.</div>
            </div>
            <div className="return-card">
              <div className="metric-label">Estimated Asset Value</div>
              <div className="metric-value">$3.8–4.4M</div>
              <div className="metric-desc">A fully leased medical building in an underserved corridor trades at a 6–7% cap rate, creating significant equity on stabilized rental income.</div>
            </div>
          </div>
          <div className="nnn-banner">
            <h4>NNN Lease Structures</h4>
            <p>QSR anchors at $12–$18/SF NNN. Medical tenants at $18–$25/SF NNN with corporate guaranty. Salon suites generate $700–$1,200/week per suite as an active operation model. All operating costs — taxes, insurance, maintenance — passed through to tenants.</p>
          </div>
        </div>
      </section>

      {/* COMMUNITY IMPACT */}
      <section className="community" id="community">
        <div className="community-container">
          <div className="section-header center">
            <div className="section-overline"><span className="overline-line"></span> Community Impact</div>
            <h2 className="section-title">Investing in <em>Jackson's Future.</em></h2>
          </div>
          <div className="impact-grid">
            <div className="impact-card">
              <div className="impact-icon">🏥</div>
              <h4>Healthcare Access</h4>
              <p>Bringing urgent care to a corridor where 15.8% are uninsured and the nearest clinic is 3–5 miles away — reducing preventable ER visits and lowering costs for families.</p>
            </div>
            <div className="impact-card">
              <div className="impact-icon">💼</div>
              <h4>Local Employment</h4>
              <p>Estimated 40–60 jobs across QSR, medical, retail, and salon operations — with a commitment to hiring from within the 39206 community first.</p>
            </div>
            <div className="impact-card">
              <div className="impact-icon">🏘️</div>
              <h4>Neighborhood Revitalization</h4>
              <p>A 20,000 SF mixed-use destination that signals reinvestment in a corridor that has been commercially underserved for decades.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section" id="contact">
        <div className="cta-content">
          <h2>Ready to Be Part of<br/><em>Forest Village?</em></h2>
          <p>Whether you're a tenant, investor, franchise operator, or healthcare system — we want to hear from you. Pre-leasing is active and spaces are limited.</p>
          <div className="cta-buttons">
            <a href="mailto:nash1161949@gmail.com" className="btn-primary">Request Site Package →</a>
            <a href="tel:6015731790" className="btn-secondary">Call 601-573-1790</a>
          </div>
          <div className="cta-contact">
            <a href="mailto:nash1161949@gmail.com">nash1161949@gmail.com</a>
            <a href="tel:6015731790">601-573-1790</a>
            <a>Jim Nash · Nash Properties LLC</a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="footer-logo">Forest <span>Village</span></div>
        <p>Forest Ave & Watkins Dr · Jackson, MS 39206 · © 2026 Nash Properties LLC</p>
      </footer>
    </>
  )
}

export default App
