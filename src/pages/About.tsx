import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Layout from '@/components/Layout';
import { PhoneCall } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      text: "Led student governance at Simon Fraser University and University Canada West, representing thousands of students.",
      image: 'https://images.unsplash.com/photo-1562774053-701939374585?w=600&auto=format&fit=crop&q=80'
      // University campus with students
    },
    {
      text: "Speaker and facilitator for personal growth and leadership spaces across Canada.",
      image: 'https://images.unsplash.com/photo-1559839734-94d5400b974a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fFNwZWFrZXIlMjBhbmQlMjBmYWNpbGl0YXRvciUyMGZvciUyMHBlcnNvbmFsJTIwZ3Jvd3RoJTIwYW5kJTIwbGVhZGVyc2hpcCUyMHNwYWNlcyUyMGFjcm9zcyUyMENhbmFkYS58ZW58MHx8MHx8fDA%3D'
      // Person speaking at a conference
    },
    {
      text: "Creator of the Shiney Mindset Reset Toolkit for navigating transitions.",
      image: 'https://images.unsplash.com/photo-1704969724398-ec70386c9b1b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Q3JlYXRvciUyMG9mJTIwdGhlJTIwU2hpbmV5JTIwTWluZHNldCUyMFJlc2V0JTIwVG9vbGtpdCUyMGZvciUyMG5hdmlnYXRpbmclMjB0cmFuc2l0aW9ucy58ZW58MHx8MHx8fDA%3D'
      // Desk with planning tools or notebook
    },
    {
      text: "Featured in Simon Fraser University News and TriCity News.",
      image: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=600&auto=format&fit=crop&q=80'
      // Stack of newspapers
    },
    {
      text: "Guided dozens of clients globally through high-stakes decisions and identity reinvention.",
      image: 'https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?w=600&auto=format&fit=crop&q=80'
      // One-on-one coaching session
    }
  ];

  return (
    <Layout>
      {/* Hero Section with Parallax */}
      <section
        className="relative min-h-[60vh] flex items-center bg-cover bg-center bg-no-repeat overflow-hidden"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1577563908411-5077b6dc7624?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-white/80 to-white/50 parallax-bg"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-slate-900 mb-6 animate-slide-in">
            This Isn't Just a Career — It's a{' '}
            <span className="text-purple-600">Calling</span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto animate-slide-in animate-delay-200">
            Meet Shina Kaur and discover the heart behind Spark Coaching.
          </p>
        </div>
        <style jsx>{`
          .parallax-bg {
            background-attachment: fixed;
            background-position: center;
            background-size: cover;
            transform: translateY(0);
            transition: transform 0.1s ease-out;
          }
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
          @media (max-width: 768px) {
            .parallax-bg {
              background-attachment: scroll;
            }
          }
        `}</style>
      </section>

      {/* Meet Shina Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-xl group">
                <img
                  src="./5.jpg"
                  alt="Shina Kaur"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
            <div className="space-y-6 order-1 lg:order-2">
              <h2 className="text-4xl sm:text-5xl font-serif font-bold text-slate-900 animate-slide-in">
                Meet Shina Kaur
              </h2>
              <div className="prose prose-lg prose-slate max-w-none">
                <p>
                  Shina Kaur is a coach, speaker, and community builder born in Punjab and raised
                  across continents. Her life has been shaped by transition — cultural, professional,
                  emotional — and each chapter has brought her closer to the work she now offers
                  through Spark Coaching.
                </p>
                <p>
                  Shina's journey is one of resilience and reinvention. She's led student governments
                  at some of Canada's top universities, rebuilt herself after burnout, and awakened
                  spiritually while navigating the expectations of immigrant success. These personal
                  shifts have shaped how she holds space for others today — with honesty, softness,
                  and strategy.
                </p>
                <p>
                  She is not just a certified coach; she's someone who has lived, felt, and
                  transformed through the same questions her clients bring:
                </p>
                <blockquote className="border-l-4 border-purple-300 pl-6 italic text-slate-600">
                  <p>"Who am I now?"</p>
                  <p>"What am I called to become?"</p>
                  <p>"How do I move forward when the old map no longer fits?"</p>
                </blockquote>
                <p>
                  With her signature blend of compassion, clarity, and grounded truth-telling,
                  Shina creates spaces that feel both like a mirror and a launchpad — where
                  clients feel deeply seen and gently challenged to grow.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Spark Coaching */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-serif font-bold text-slate-900 mb-6 animate-slide-in">
              Spark Coaching Is Where Sacred Transition Meets Strategic Support
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Discover a coaching practice dedicated to guiding you through life's pivotal moments.
            </p>
          </div>
          <Card className="bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-300">
            <CardContent className="p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="prose prose-lg prose-slate max-w-none">
                  <p>
                    Spark Coaching exists to guide high-capacity individuals — professionals, creatives,
                    expats, community leaders — through life's in-between moments. The space between who
                    you've been and who you're becoming can be murky, raw, and unspoken. That's exactly
                    where Spark Coaching meets you.
                  </p>
                  <p>
                    This isn't surface-level motivation. Spark Coaching is deep work — rooted in emotional
                    integrity, cultural sensitivity, and a belief in the sacredness of pause. Whether you're
                    feeling burnout after years of overachievement, facing a spiritual shift mid-career, or
                    grieving a version of yourself that no longer fits, this is where you come to realign.
                  </p>
                  <p>
                    We support you not just in figuring things out — but in feeling your way through, with
                    tools, strategy, and soulful guidance. Together, we'll map out your next chapter with
                    intention, courage, and trust.
                  </p>
                </div>
                <div className="relative">
                  <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-xl group">
                    <img
                      src="./4.JPG"
                      alt="Spark Coaching"
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-serif font-bold text-slate-900 mb-6 animate-slide-in [animation-duration:0.8s] [animation-timing-function:cubic-bezier(0.4,0,0.2,1)]">
              Our Mission and Vision
            </h2>
            <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Guiding principles that shape our work and inspire transformation.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
            <div className="relative bg-gradient-to-br from-purple-50 to-white border border-slate-200 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1.5 group overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-50/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative p-8 sm:p-10">
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 mb-4 tracking-tight">
                  Mission Statement
                </h3>
                <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
                  To guide high-capacity individuals through life transitions with clarity, courage,
                  and compassion — helping them come home to themselves when the old story no longer fits.
                </p>
              </div>
            </div>
            <div className="relative bg-gradient-to-br from-white to-purple-50 border border-slate-200 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1.5 group overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-purple-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative p-8 sm:p-10">
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 mb-4 tracking-tight">
                  Vision Statement
                </h3>
                <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
                  A world where transitions are not rushed, where rest is honored, and where people —
                  especially women of color, immigrants, and identity-shifting individuals — lead their
                  lives with radical authenticity and deep inner trust.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recognition & Highlights */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-serif font-bold text-slate-900 mb-6 animate-slide-in">
              A Few Highlights Along the Journey
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Milestones that reflect Shina's impact and dedication.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {highlights.map((highlight, index) => (
              <Card key={index} className="bg-white border-0 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-2">
                <CardContent className="p-6">
                  <div className="relative w-full h-40 mb-4 rounded-lg overflow-hidden">
                    <img
                      src={highlight.image}
                      alt={highlight.text}
                      className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-600/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                    </div>
                    <p className="text-slate-700 leading-relaxed">
                      {highlight.text}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <div className="flex flex-col md:flex-row justify-center items-center gap-8">
              <a
                href="https://www.sfu.ca/psychology/news-events/news/psychology-student-shina-kaur-creates-social-impact-through-stud.html"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-600 hover:text-purple-700 transition-colors text-lg font-semibold flex items-center gap-2"
              >
              
                Simon Fraser University News
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
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-purple-600 to-purple-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-serif font-bold mb-6 animate-slide-in">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-xl mb-8 opacity-90 leading-relaxed">
            Let's explore what's calling you forward in a free discovery conversation.
          </p>
          <Button className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-3 text-lg rounded-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            Book Your Free Discovery Call <PhoneCall/>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default About;