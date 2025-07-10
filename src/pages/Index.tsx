import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { MessageCircle, PhoneCall } from 'lucide-react';
import Layout from '@/components/Layout';
import './HeroSection.css';

const Index = () => {
  const values = [
    {
      icon: '🌱',
      title: 'Courage as the Compass',
      description: 'We act from truth, not fear — choosing what\'s real over what\'s easy.',
      image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=600&auto=format&fit=crop&q=60'
    },
    {
      icon: '🧘🏽',
      title: 'Rest as Resistance',
      description: 'We honor the body\'s wisdom and nervous system\'s capacity, knowing that stillness is sacred.',
      image: 'https://images.unsplash.com/photo-1703432771257-4859db14c0bd?w=600&auto=format&fit=crop&q=60'
    },
    {
      icon: '🎙️',
      title: 'Courageous Authenticity',
      description: 'We speak what\'s true, not just what\'s marketable — even when it\'s messy.',
      image: 'https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=600&auto=format&fit=crop&q=60' // Updated image
    },
    {
      icon: '🕊️',
      title: 'Spiritual Groundedness',
      description: 'We trust in divine timing. Transitions are sacred. Clarity is not rushed.',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&auto=format&fit=crop&q=60'
    },
    {
      icon: '🤝',
      title: 'Collective Empowerment',
      description: 'We prioritize voices of BIPOC, immigrants, and those navigating identity shifts with grace and power.',
      image: 'https://plus.unsplash.com/premium_photo-1745299853438-ab59e19fa167?w=600&auto=format&fit=crop&q=60'
    },
    {
      icon: '🙏',
      title: 'Grit & Grace',
      description: 'We trust the try more than the outcome — showing up imperfectly, learning as we go, and finding grace in the grind.',
      image: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=600&auto=format&fit=crop&q=60'
    }
  ];

  const testimonials = [
    {
      quote: "Shina held space for me in a way no one else had. I came in confused, overwhelmed, and stuck — and left feeling seen, supported, and empowered.",
      author: "Jasmine A., Toronto",
      image: "https://images.unsplash.com/photo-1557862921-37829c790f19?w=600&auto=format&fit=crop&q=60"
    },
    {
      quote: "This wasn’t just coaching. It was transformation. Shina helped me rebuild trust in myself.",
      author: "Ryan P., Vancouver",
      image: "https://images.unsplash.com/photo-1548964095-b9a292144866?w=600&auto=format&fit=crop&q=60"
    },
    // Replace with testimonials from the sheet
  ];

  return (
    <Layout>
      <section className="hero-section relative min-h-screen flex items-center overflow-hidden">
        <img src="./11.JPG" alt="Hero" className="hero-image absolute inset-0 w-full h-full object-cover md:object-cover" />
        <div className="hero-overlay absolute inset-0 bg-gradient-to-r from-[#3F2E56]/90 via-[#3F2E56]/30 to-transparent"></div>
        <div className="hero-container relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="hero-content lg:w-3/5 xl:w-1/2 text-center md:text-left">
            <h1 className="hero-title text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 leading-tight animate-slide-in drop-shadow-md">
              Helping you Navigate Life Transitions with <span className="text-[#D9A5B3]">Courage, Clarity, and Self-Trust</span>
            </h1>
            <h2 className="hero-subtitle text-lg sm:text-xl lg:text-2xl text-gray-200 mb-8 max-w-2xl leading-relaxed animate-slide-in animate-delay-200 drop-shadow-md">
              Support for high-capacity individuals who are redefining themselves.
            </h2>
            <div className="hero-buttons flex flex-col sm:flex-row gap-4 sm:gap-6 animate-slide-in animate-delay-400 justify-center md:justify-start items-center md:items-start">
              <Button id="#calendly-booking" className="btn-primary bg-[#3F2E56] hover:bg-[#5A4B81] text-white px-8 py-3 text-lg font-semibold rounded-lg transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-lg hover:shadow-[#3F2E56]/30 w-full sm:w-auto">
                Book a Free Discovery Call
              </Button>
              <Button 
                variant="outline"
                className="btn-secondary border-2 border-[#D9A5B3] text-[#D9A5B3] hover:bg-[#D9A5B3] hover:text-white px-8 py-3 text-lg font-semibold rounded-lg transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-lg hover:shadow-[#D9A5B3]/30 w-full sm:w-auto"
              >
                <Link to="/services">Explore Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#E8DFF5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-last lg:order-first">
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-xl group flex justify-center items-center">
                <img
                  src="./6.JPG"
                  alt="Shina Kaur"
                  className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#D9A5B3]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl sm:text-5xl font-serif font-bold text-[#5A4B81] animate-slide-in">
                Meet Shina Kaur
              </h2>
              <div className="prose prose-lg prose-[#7D6C61] max-w-none">
                <p>
                  Life transitions don’t come with a manual. Good thing you’ve got grit—and me.
                </p>
                <p>
                  I help high-achievers navigate change with clarity, courage, and self-trust—because I’ve been there:
                </p>
                <ul className="list-disc pl-6">
                  <li>From burnout to breakthroughs (thanks, overachiever syndrome).</li>
                  <li>From identity crises to “Oh, I’m actually the one in charge here.”</li>
                  <li>From white-knuckling a solo drive with a cracked windshield (thanks, Montana truck rock) to realizing: You’re capable of far more than you think.</li>
                </ul>
                <p>
                  <strong>Why listen to me?</strong><br />
                  I don’t teach from a textbook, I teach from a decade of failing, adapting, and winning my way through reinvention. (Also, I’ve driven cross-country solo <em>twice</em>. If that’s not a metaphor for resilience, what is?)
                </p>
                <p>
                  Let’s build your next chapter—on your terms.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-[#3F2E56] hover:bg-[#5A4B81] text-white px-6 py-3 rounded-lg transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-lg">
                  <Link to="/about">Learn More About Me</Link>
                </Button>
                
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#F6F1EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-serif font-bold text-[#3F2E56] mb-6 animate-slide-in  px-4 py-2 rounded-lg inline-block">
              How We Can Work Together
            </h2>
            <p className="text-lg text-[#3F2E56] max-w-2xl mx-auto px-4 py-2 rounded-lg">
              Discover personalized coaching and resources designed to guide you through life's transitions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card className="bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-[#D9A5B3]/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">🟣</span>
                </div>
                <h3 className="text-2xl font-serif font-bold text-[#3F2E56] mb-4">
                  1:1 Transition Coaching
                </h3>
                <p className="text-[#3F2E56] leading-relaxed">
                  Private coaching containers to support your next chapter with personalized strategy, inner clarity, and emotional safety.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-[#D9A5B3]/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">🟣</span>
                </div>
                <h3 className="text-2xl font-serif font-bold text-[#3F2E56] mb-4">
                  Digital Toolkit
                </h3>
                <p className="text-[#3F2E56] leading-relaxed">
                  A downloadable workbook with 20+ prompts to help you process, reset, and reimagine your life in transition.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-[#D9A5B3]/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">🟣</span>
                </div>
                <h3 className="text-2xl font-serif font-bold text-[#3F2E56] mb-4">
                  Live Workshops
                </h3>
                <p className="text-[#3F2E56] leading-relaxed">
                  Custom-designed sessions for organizations, communities, and institutions supporting people through big life changes.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="text-center">
            <Button className="bg-[#3F2E56] hover:bg-[#5A4B81] text-white px-8 py-3 text-lg rounded-lg transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-lg">
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#E8DFF5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-serif font-bold text-[#5A4B81] mb-6 animate-slide-in">
              Our Coaching is Rooted In...
            </h2>
            <p className="text-lg text-[#7D6C61] max-w-2xl mx-auto">
              Our values guide every step of your journey toward clarity and transformation.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="bg-[#F6F1EB] border-0 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <CardContent className="p-8">
                  <div className="relative w-full h-48 mb-6 rounded-lg overflow-hidden">
                    <img
                      src={value.image}
                      alt={value.title}
                      className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#D9A5B3]/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h3 className="text-xl font-serif font-bold text-[#5A4B81] mb-3">
                    {value.title}
                  </h3>
                  <p className="text-[#7D6C61] leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#F6F1EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-serif font-bold text-[#5A4B81] mb-6 animate-slide-in">
              Words from the People We've Walked With
            </h2>
            <p className="text-lg text-[#7D6C61] max-w-2xl mx-auto">
              Hear from those who have experienced transformation through our coaching.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-[#F6F1EB] border-0 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <CardContent className="p-8 flex items-start space-x-6">
                  <img
                    src={testimonial.image}
                    alt={`${testimonial.author}'s photo`}
                    className="w-16 h-16 rounded-full object-cover shadow-md"
                  />
                  <div>
                    <blockquote className="text-lg text-[#7D6C61] italic mb-6 leading-relaxed">
                      "{testimonial.quote}"
                    </blockquote>
                    <cite className="text-[#D9A5B3] font-semibold">
                      — {testimonial.author}
                    </cite>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button className="bg-[#3F2E56] hover:bg-[#5A4B81] text-white px-8 py-3 text-lg rounded-lg transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-lg">
              <Link to="/contact">Have We Worked Together?</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#E8DFF5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#5A4B81] mb-12 animate-slide-in">
            Featured In
          </h2>
          <div className="flex flex-col md:flex-row justify-center items-center gap-12">
            <a
              href="https://www.sfu.ca/psychology/news-events/news/psychology-student-shina-kaur-creates-social-impact-through-stud.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#D9A5B3] hover:text-[#5A4B81] transition-colors text-lg font-semibold flex items-center gap-2"
            >
              Simon Fraser University
            </a>
            <a
              href="https://www.tricitynews.com/opinion/opinion-burnaby-mountain-transit-is-terrible-we-need-a-gondola-3116850"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#D9A5B3] hover:text-[#5A4B81] transition-colors text-lg font-semibold flex items-center gap-2"
            >
              TriCity News
            </a>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-r from-[#3F2E56] to-[#5A4B81] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-serif font-bold mb-6 animate-slide-in">
            You're Not Lost — You're Becoming.
          </h2>
          <p className="text-xl mb-8 opacity-90 leading-relaxed">
            If you're navigating a big transition — even one that doesn't have a name yet —
            let's explore what's next together. This is a space to slow down, reflect,
            and reimagine your life with courage and clarity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-[#F6F1EB] text-[#3F2E56] hover:bg-[#E8DFF5] px-8 py-3 text-lg rounded-lg transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-lg">
              <Link to="/contact" className='flex items-center justify-center gap-5'>Book a Free Discovery Call <PhoneCall /></Link>
            </Button>
            <Button variant="outline" className="border-white text-white bg-transparent hover:bg-[#F6F1EB] hover:text-[#3F2E56] px-8 py-3 text-lg rounded-lg transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-lg">
              <Link to="/contact" className='flex justify-center items-center gap-5'>Send Me a Message <MessageCircle /></Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;