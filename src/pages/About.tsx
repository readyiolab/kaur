import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { PhoneCall } from 'lucide-react';
import Layout from '@/components/Layout';
import { Link } from 'react-router-dom';

const About = () => {
  const highlights = [
    {
      text: "Led student governance at Simon Fraser University and University Canada West, representing thousands of students.",
      image: 'https://images.unsplash.com/photo-1562774053-701939374585?w=600&auto=format&fit=crop&q=80'
    },
    {
      text: "Speaker and facilitator for personal growth and leadership spaces across Canada.",
      image: 'https://images.unsplash.com/photo-1559839734-94d5400b974a?w=600&auto=format&fit=crop&q=60'
    },
    {
      text: "Creator of the Shiney Mindset Reset Toolkit for navigating transitions.",
      image: 'https://images.unsplash.com/photo-1704969724398-ec70386c9b1b?w=600&auto=format&fit=crop&q=60'
    },
    {
      text: "Featured in Simon Fraser University News and TriCity News.",
      image: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=600&auto=format&fit=crop&q=80'
    },
    {
      text: "Guided dozens of clients globally through high-stakes decisions and identity reinvention.",
      image: 'https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?w=600&auto=format&fit=crop&q=80'
    },
    {
      text: "Published and Award Winning Photographer since 2015.",
      image: 'https://images.unsplash.com/photo-1502982720700-bfff97f2ecac?w=600&auto=format&fit=crop&q=60'
    }
  ];

  return (
    <Layout>
      {/* Hero Section with Parallax */}
      <section
        className="relative min-h-[50vh] flex items-center bg-cover bg-center bg-no-repeat overflow-hidden"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1577563908411-5077b6dc7624?q=80&w=870&auto=format&fit=crop')"
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#E8DFF5]/80 to-[#E8DFF5]/50 parallax-bg"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center z-10">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#5A4B81] mb-4 animate-slide-in drop-shadow-md">
            Not a guru. Just a woman who’s learned to trust the process.
          </h1>
          <p className="text-base sm:text-lg text-[#7D6C61] max-w-3xl mx-auto animate-slide-in animate-delay-200 drop-shadow-md">
            <em>"Arrange whatever pieces come your way."</em>
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
              transform: translateY(20px); 
            }
            to { 
              opacity: 1; 
              transform: translateY(0); 
            }
          }
          .animate-slide-in {
            animation: slideIn 0.6s ease-out forwards;
          }
          .animate-delay-200 {
            animation-delay: 0.2s;
          }
          @media (max-width: 640px) {
            .parallax-bg {
              background-attachment: scroll;
            }
          }
        `}</style>
      </section>

      {/* Meet Shina Section */}
      <section className="py-16 bg-[#E8DFF5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* First Section: Meet Shina */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-12">
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#5A4B81]">
                Meet Shina
              </h2>
              <div className="space-y-4">
                <p className="text-lg text-[#7D6C61] leading-relaxed">
                  Here's the deal: Life's transitions don't care about your 5-year plan. But here's what does work: grit, grace, and a damn good strategy.
                </p>
                <p className="text-base text-[#7D6C61] leading-relaxed">
                  I'm not here to "fix" you, you're not a problem to solve. I'm here to help you:
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <div className="w-5 h-5 bg-[#D9A5B3] rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                      <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                    </div>
                    <p className="text-[#7D6C61] leading-relaxed">
                      Win at being you (even when the rules keep changing).
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-5 h-5 bg-[#D9A5B3] rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                      <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                    </div>
                    <p className="text-[#7D6C61] leading-relaxed">
                      Navigate uncertainty like a pro (because you've survived 100% of your worst days).
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-5 h-5 bg-[#D9A5B3] rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                      <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                    </div>
                    <p className="text-[#7D6C61] leading-relaxed">
                      Rewrite your definition of success (spoiler: it's allowed to include joy).
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] rounded-xl overflow-hidden shadow-lg">
                <img
                  src="./5.webp"
                  alt="Shina Kaur"
                  className="object-cover  hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-[#D9A5B3] rounded-full opacity-20"></div>
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-[#5A4B81] rounded-full opacity-30"></div>
            </div>
          </div>

          {/* Second Section: The Messy Middle */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start mb-12">
            <div className="space-y-6">
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#5A4B81]">
                The Messy Middle (Where All the Good Stuff Happens)
              </h3>
              <div className="space-y-4">
                <p className="text-base text-[#7D6C61] leading-relaxed">
                  I used to think life was a checklist:
                </p>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <div className="w-5 h-5 bg-[#D9A5B3] rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                      <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                    </div>
                    <p className="text-[#7D6C61] leading-relaxed">
                      Get the degree (SFU, with 8 leadership roles—because overachiever).
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-5 h-5 bg-[#D9A5B3] rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                      <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                    </div>
                    <p className="text-[#7D6C61] leading-relaxed">
                      Land the job (even if it made my soul feel like a spreadsheet).
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-5 h-5 bg-[#D9A5B3] rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                      <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                    </div>
                    <p className="text-[#7D6C61] leading-relaxed">
                      Keep pushing (until burnout hit like a ton of bricks).
                    </p>
                  </div>
                </div>
                <p className="text-lg font-medium text-[#5A4B81] italic">
                  Then the universe laughed. Hard.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-white/40 backdrop-blur-sm p-4 rounded-lg border border-white/20 shadow-sm">
                <p className="text-[#7D6C61] mb-2 text-sm leading-relaxed">
                  Graduated into a pandemic, jobless for a year, despite my "impressive" resume.
                </p>
                <p className="text-[#5A4B81] font-semibold text-sm">
                  <span className="font-bold">Learned:</span> Achievement doesn't teach you self-worth.
                </p>
              </div>
              <div className="bg-white/40 backdrop-blur-sm p-4 rounded-lg border border-white/20 shadow-sm">
                <p className="text-[#7D6C61] mb-2 text-sm leading-relaxed">
                  Moved across the country alone for a corporate job I thought would fix me. Got let go.
                </p>
                <p className="text-[#5A4B81] font-semibold text-sm">
                  <span className="font-bold">Learned:</span> All jobs are bubbles; they can burst.
                </p>
              </div>
              <div className="bg-white/40 backdrop-blur-sm p-4 rounded-lg border border-white/20 shadow-sm">
                <p className="text-[#7D6C61] mb-2 text-sm leading-relaxed">
                  First solo drive: Portland to DC: crammed my life into a Jeep Patriot, took a wrong exit in Montana, and got my windshield cracked by a rogue truck rock.
                </p>
                <p className="text-[#5A4B81] font-semibold text-sm">
                  <span className="font-bold">Learned:</span> You're capable of far more than you think.
                </p>
              </div>
            </div>
          </div>

          {/* Third Section: More Journey Stories */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start mb-12">
            <div className="space-y-4">
              <div className="bg-white/40 backdrop-blur-sm p-4 rounded-lg border border-white/20 shadow-sm">
                <p className="text-[#7D6C61] mb-2 text-sm leading-relaxed">
                  Built ShineyShoots off my decade of photography experience, then realized: Turning my art into client work drained the joy.
                </p>
                <p className="text-[#5A4B81] font-semibold text-sm">
                  <span className="font-bold">Learned:</span> Boundaries are love.
                </p>
              </div>
              <div className="bg-white/40 backdrop-blur-sm p-4 rounded-lg border border-white/20 shadow-sm">
                <p className="text-[#7D6C61] mb-2 text-sm leading-relaxed">
                  Took a 3-month sabbatical in Punjab, India; drank endless chai, and listened to my gut whisper "This isn't it."
                </p>
                <p className="text-[#5A4B81] font-semibold text-sm">
                  <span className="font-bold">Learned:</span> My intuition–quiet, steady, and always there–was right all along.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-white/40 backdrop-blur-sm p-4 rounded-lg border border-white/20 shadow-sm">
                <p className="text-[#7D6C61] mb-2 text-sm leading-relaxed">
                  Packed my life into a car (again) and drove solo back to Vancouver - no job, no plan, just faith that I'd find my way.
                </p>
                <p className="text-[#5A4B81] font-semibold text-sm">
                  <span className="font-bold">Learned:</span> Showing up without a map is how you find your true path.
                </p>
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#5A4B81] text-center">
                Why This Work Found Me
              </h3>
              <p className="text-base text-[#7D6C61] leading-relaxed">
                Because transition is my native language. Now, I help others:
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <div className="w-5 h-5 bg-[#5A4B81] rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                    <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                  </div>
                  <p className="text-[#7D6C61] leading-relaxed">
                    Find clarity in the chaos (without waiting for permission).
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-5 h-5 bg-[#5A4B81] rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                    <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                  </div>
                  <p className="text-[#7D6C61] leading-relaxed">
                    Summon courage (even when it feels like faking it).
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-5 h-5 bg-[#5A4B81] rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                    <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                  </div>
                  <p className="text-[#7D6C61] leading-relaxed">
                    Trust themselves (because no one else gets to define your worth).
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* You’ll Feel At Home Here If… Section */}
          <div className="text-center mb-8 space-y-6">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#5A4B81] mb-6">
              You’ll Feel At Home Here If…
            </h2>
            <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:flex lg:flex-row lg:gap-6 gap-4">
              {[
                "Owning your 'I don't know' phases.",
                "Celebrating your 'Oh, THAT'S who I am' moments.",
                "Remembering: You've always had the pieces.",
                "You’re ready to embrace your becoming."
              ].map((text, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center p-4 bg-white/40 rounded-lg shadow-md border border-[#E8DFF5] hover:shadow-lg transition-shadow text-center"
                >
                  <p className="text-[#7D6C61] leading-relaxed text-md">
                    {text}
                  </p>
                </div>
              ))}
            </div>
            <p className="text-lg font-medium text-[#5A4B81] italic mt-6">
              Let's arrange them into something unexpectedly brilliant.
            </p>
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <button className="bg-[#3F2E56] hover:bg-[#5A4B81] text-white px-6 py-3 rounded-lg font-semibold text-base transition-colors duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1">
              <a href="https://calendly.com/simran-shinakaur/15" target="_blank" rel="noopener noreferrer">
                Work With Me
              </a>
            </button>
          </div>
        </div>
      </section>

      {/* Recognition & Highlights */}
      <section className="py-16 bg-[#F6F1EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#5A4B81] mb-4 animate-slide-in">
              A Few Highlights Along the Journey
            </h2>
            <p className="text-base text-[#7D6C61] max-w-2xl mx-auto">
              Milestones that reflect Shina's impact and dedication.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {highlights.map((highlight, index) => (
              <Card key={index} className="bg-[#F6F1EB] border-0 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                <CardContent className="p-4">
                  <div className="relative w-full h-32 mb-3 rounded-lg overflow-hidden">
                    <img
                      src={highlight.image}
                      alt={highlight.text}
                      className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#D9A5B3]/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-5 h-5 bg-[#D9A5B3]/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-1.5 h-1.5 bg-[#D9A5B3] rounded-full"></div>
                    </div>
                    <p className="text-[#7D6C61] text-sm leading-relaxed">
                      {highlight.text}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
              <a
                href="https://www.sfu.ca/psychology/news-events/news/psychology-student-shina-kaur-creates-social-impact-through-stud.html"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#D9A5B3] hover:text-[#5A4B81] transition-colors text-base font-semibold flex items-center gap-2"
              >
                Simon Fraser University News
              </a>
              <a
                href="https://www.tricitynews.com/opinion/opinion-burnaby-mountain-transit-is-terrible-we-need-a-gondola-3116850"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#D9A5B3] hover:text-[#5A4B81] transition-colors text-base font-semibold flex items-center gap-2"
              >
                TriCity News
              </a>

            </div>
            
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#3F2E56] to-[#5A4B81] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold mb-4 animate-slide-in">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-base sm:text-lg mb-6 opacity-90 leading-relaxed">
            Let's explore what's calling you forward in a free discovery conversation.
          </p>
          <a
            href="https://calendly.com/simran-shinakaur/15"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              id="calendly-booking"
              className="btn-primary bg-[#3F2E56] hover:bg-[#5A4B81] text-white px-8 py-3 text-lg font-semibold rounded-lg transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-lg hover:shadow-[#3F2E56]/30 w-full sm:w-auto"
            >
              Book a Free Discovery Call
            </Button>
          </a>

        </div>
      </section>
    </Layout>
  );
};

export default About;