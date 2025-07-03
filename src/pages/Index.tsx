import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Layout from '@/components/Layout';
import { MessageCircle, PhoneCall } from 'lucide-react';

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
      image: 'https://images.unsplash.com/photo-1703432771257-4859db14c0bd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8UmVzdCUyMGFzJTIwUmVzaXN0YW5jZXxlbnwwfHwwfHx8MA%3D%3D'
    },
    {
      icon: '🎙️',
      title: 'Radical Authenticity',
      description: 'We speak what\'s true, not just what\'s marketable — even when it\'s messy.',
      image: 'https://images.unsplash.com/photo-1528712306091-ed0763094c98?w=600&auto=format&fit=crop&q=60'
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
      image: 'https://plus.unsplash.com/premium_photo-1745299853438-ab59e19fa167?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Q29sbGVjdGl2ZSUyMEVtcG93ZXJtZW50fGVufDB8fDB8fHww'
    }
  ];

  const testimonials = [
    {
      quote: "Shina held space for me in a way no one else had. I came in confused, overwhelmed, and stuck — and left feeling seen, supported, and empowered.",
      author: "Jasmine A., Toronto",
      image: "https://images.unsplash.com/photo-1557862921-37829c790f19?w=600&auto=format&fit=crop&q=60"
    },
    {
      quote: "This wasn't just coaching. It was transformation. Shina helped me rebuild trust in myself.",
      author: "Ryan P., Vancouver",
      image: "https://images.unsplash.com/photo-1548964095-b9a292144866?w=600&auto=format&fit=crop&q=60"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('./11.JPG"
        }}>
        <div className="absolute inset-0 bg-gradient-to-r from-white/85 via-white/15 to-white/0"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="lg:w-3/5 xl:w-1/2">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-gray-900 mb-6 leading-tight animate-slide-in">
              Helping You Navigate Life Transitions with{' '}
              <span className="text-purple-600">Grace, Clarity, and Self-Trust</span>
            </h1>
            <h2 className="text-lg sm:text-xl lg:text-2xl text-gray-700 mb-8 max-w-2xl leading-relaxed animate-slide-in animate-delay-200">
              Support for high-capacity individuals who are redefining themselves.
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 animate-slide-in animate-delay-400">
              <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 text-lg font-semibold rounded-lg transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-600/30">
                Book a Free Discovery Call
              </Button>
              <Button variant="outline" className="border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white px-8 py-3 text-lg font-semibold rounded-lg transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-600/30">
                <Link to="/services">Explore Services</Link>
              </Button>
            </div>
          </div>
        </div>
        <style jsx>{`
          @keyframes slideIn {
            from { 
              opacity: 0; 
              transform: translateY(30px); 
            }
            to { 
              opacity: 1; 
              transform: translateY(0); 
            }
          }
          .animate-slide-in {
            animation: slideIn 0.8s ease-out forwards;
          }
          .animate-delay-200 {
            animation-delay: 0.2s;
          }
          .animate-delay-400 {
            animation-delay: 0.4s;
          }
          @media (max-width: 768px) {
            .lg\\:w-3\\/5 {
              text-align: center;
            }
          }
        `}</style>
      </section>

      {/* Meet Shina Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-last lg:order-first">
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-xl group">
                <img 
                  src="./6.JPG" 
                  alt="Shina Kaur" 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl sm:text-5xl font-serif font-bold text-slate-900 animate-slide-in">
                Meet Shina Kaur
              </h2>
              <div className="prose prose-lg prose-slate max-w-none">
                <p>
                  I'm Shina — a coach, speaker, and community leader rooted in the power of reinvention. 
                  I guide high-capacity individuals who are no longer who they used to be, and not yet 
                  sure who they are becoming.
                </p>
                <p>
                  Whether you're recovering from burnout, navigating career pivots, or awakening 
                  spiritually in the middle of success, this space is for you. Through Spark Coaching, 
                  I help you come home to yourself — with compassion, strategy, and soulful honesty.
                </p>
              </div>
              <Button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-lg">
                <Link to="/about">Learn More About Me</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-serif font-bold text-slate-900 mb-6 animate-slide-in">
              How We Can Work Together
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Discover personalized coaching and resources designed to guide you through life's transitions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card className="bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">🟣</span>
                </div>
                <h3 className="text-2xl font-serif font-bold text-slate-900 mb-4">
                  1:1 Transition Coaching
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Private coaching containers to support your next chapter with personalized 
                  strategy, inner clarity, and emotional safety.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">🟣</span>
                </div>
                <h3 className="text-2xl font-serif font-bold text-slate-900 mb-4">
                  Digital Toolkit
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  A downloadable workbook with 20+ prompts to help you process, reset, 
                  and reimagine your life in transition.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">🟣</span>
                </div>
                <h3 className="text-2xl font-serif font-bold text-slate-900 mb-4">
                  Live Workshops
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Custom-designed sessions for organizations, communities, and institutions 
                  supporting people through big life changes.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="text-center">
            <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 text-lg rounded-lg transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-lg">
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-serif font-bold text-slate-900 mb-6 animate-slide-in">
              Our Coaching is Rooted In...
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Our values guide every step of your journey toward clarity and transformation.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <CardContent className="p-8">
                  <div className="relative w-full h-48 mb-6 rounded-lg overflow-hidden">
                    <img 
                      src={value.image}
                      alt={value.title}
                      className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-600/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h3 className="text-xl font-serif font-bold text-slate-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-serif font-bold text-slate-900 mb-6 animate-slide-in">
              Words from the People We've Walked With
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Hear from those who have experienced transformation through our coaching.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <CardContent className="p-8 flex items-start space-x-6">
                  <img
                    src={testimonial.image}
                    alt={`${testimonial.author}'s photo`}
                    className="w-16 h-16 rounded-full object-cover shadow-md"
                  />
                  <div>
                    <blockquote className="text-lg text-slate-700 italic mb-6 leading-relaxed">
                      "{testimonial.quote}"
                    </blockquote>
                    <cite className="text-purple-600 font-semibold">
                      — {testimonial.author}
                    </cite>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Media Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 mb-12 animate-slide-in">
            Featured In
          </h2>
          <div className="flex flex-col md:flex-row justify-center items-center gap-12">
            <a 
              href="https://www.sfu.ca/psychology/news-events/news/psychology-student-shina-kaur-creates-social-impact-through-stud.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-600 hover:text-purple-700 transition-colors text-lg font-semibold flex items-center gap-2"
            >
             
              Simon Fraser University
            </a>
            <a 
              href="https://www.tricitynews.com/opinion/opinion-burnaby-mountain-transit-is-terrible-we-need-a-gondola-3116850"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-600 hover:text-purple-700 transition-colors text-lg font-semibold flex items-center gap-2"
            >
              
              TriCity News
            </a>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 bg-gradient-to-r from-purple-600 to-purple-800 text-white">
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
            <Button className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-3 text-lg rounded-lg transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-lg">
              Book Your Free Call <PhoneCall/>
            </Button>
            <Button variant="outline" className="border-white text-white bg-transparent hover:bg-white hover:text-purple-600 px-8 py-3 text-lg rounded-lg transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-lg">
              <Link to="/contact" className='flex justify-center items-center gap-5'>Send Me a Message <MessageCircle/></Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;