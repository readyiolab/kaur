import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Layout from '@/components/Layout';
import { BadgeDollarSign, BotOff, PhoneCall, Sunrise } from 'lucide-react';

const Services = () => {
  const coachingOptions = [
    {
      title: 'Free Discovery Call',
      duration: '30 minutes',
      price: '$0',
      description: 'A no-pressure conversation to connect, share your current experience, and explore if coaching together is a fit.',

    },
    {
      title: 'Single Session',
      duration: '90 minutes',
      price: '$225',
      description: 'Ideal for gaining clarity on a pressing decision or life moment. Includes pre-session journaling prompts and post-session summary notes.',

    },
    {
      title: '3-Month Coaching Container',
      duration: '3 months',
      price: '$2,100',
      description: 'A deeper dive for those ready for true transformation. Includes six private sessions over three months, custom tools, check-ins, and a safe container for emotional integration and intentional action.',

    }
  ];

  const idealFor = [
    {
      text: "You're a young professional at a crossroads",
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&auto=format&fit=crop&q=80'
    },
    {
      text: "You've outgrown a version of success that used to fit",
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&auto=format&fit=crop&q=80'
    },
    {
      text: "You're craving clarity, not more \"hustle\"",
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&auto=format&fit=crop&q=80'
    },
    {
      text: "You're navigating identity shifts, grief, or spiritual growth",
      image: 'https://plus.unsplash.com/premium_photo-1709311452958-9784ad4fa371?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fFlvdSdyZSUyMG5hdmlnYXRpbmclMjBpZGVudGl0eSUyMHNoaWZ0cyUyQyUyMGdyaWVmJTJDJTIwb3IlMjBzcGlyaXR1YWwlMjBncm93dGh8ZW58MHx8MHx8fDA%3D'
    },
    {
      text: "You're a woman of color reclaiming her voice in the world",
      image: 'https://images.unsplash.com/photo-1528712306091-ed0763094c98?w=600&auto=format&fit=crop&q=80'
    }
  ];

  return (
    <Layout>
      {/* Hero Section with Parallax */}
      <section
        className="relative min-h-[60vh] flex items-center bg-cover bg-center bg-no-repeat overflow-hidden"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1519624133901-3420156d01b2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fFNFUlZJQ0V8ZW58MHx8MHx8fDA%3D')"
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-white/80 to-white/50 parallax-bg"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-slate-900 mb-6 animate-slide-in">
            How We Can{' '}
            <span className="text-purple-600">Work Together</span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto animate-slide-in animate-delay-200">
            Compassionate support for your most important transitions
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

      {/* 1:1 Coaching Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-serif font-bold text-slate-900 mb-6 animate-slide-in">
              Private Coaching for Sacred Pivots
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                If you're in the middle of a life transition — personal, professional, emotional, or spiritual —
                and it feels overwhelming, you don't have to navigate it alone. Shina's 1:1 coaching sessions are
                built to support high-achieving individuals like you who are finally slowing down to ask, "What now?"
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Coaching isn't about giving advice. It's about co-creating clarity, strengthening self-trust,
                and building a personalized strategy to help you move forward with alignment.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coachingOptions.map((option, index) => (
              <Card
                key={index}
                className={`border-0 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${index === 2 ? 'bg-gradient-to-br from-purple-50 to-white ring-2 ring-purple-200' : 'bg-white'} flex flex-col`}
              >
                <CardContent className="p-8 text-center flex flex-col flex-grow">
                  <h3 className="text-2xl font-serif font-bold text-slate-900 mb-2">
                    {option.title}
                  </h3>
                  <p className="text-sm text-slate-500 mb-4">{option.duration}</p>
                  <div className="text-4xl font-bold text-purple-600 mb-4">
                    {option.price}
                  </div>
                  <p className="text-slate-600 leading-relaxed mb-6 flex-grow">
                    {option.description}
                  </p>
                  <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg transition-all duration-300 hover:shadow-lg mt-auto">
                    {index === 0 ? 'Book Free Call' : index === 1 ? 'Book Session' : 'Get Started'}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Digital Workbook Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl sm:text-5xl font-serif font-bold text-slate-900 animate-slide-in">
                Shiney Mindset Reset Toolkit
              </h2>
              <div className="text-3xl font-bold text-purple-600 mb-4">$35</div>
              <div className="prose prose-lg prose-slate max-w-none">
                <p>
                  This beautifully designed digital workbook is for anyone moving through a transition
                  and seeking clarity. It includes 20+ self-inquiry prompts that gently guide you through
                  your thoughts, emotions, and intentions — whether you're navigating change in work, love,
                  health, or identity.
                </p>
                <p className="font-semibold">
                  📥 Delivered instantly upon purchase. Use it again and again — whenever life shifts.
                </p>
              </div>
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                Download Toolkit
              </Button>
            </div>
            <div className="relative">
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-xl group">
                <img
                  src="https://images.unsplash.com/photo-1637054235819-0c48cb6dca34?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fFNoaW5leSUyME1pbmRzZXQlMjBSZXNldCUyMFRvb2xraXR8ZW58MHx8MHx8fDA%3D"
                  alt="Digital Toolkit"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Workshops Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-xl group">
                <img
                  src="https://images.unsplash.com/photo-1638957835514-224c57ffe617?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODF8fExpdmUlMjBXb3Jrc2hvcHMlMjBmb3IlMjBPcmdhbml6YXRpb25zJTIwJTI2JTIwQ29tbXVuaXRpZXN8ZW58MHx8MHx8fDA%3D"
                  alt="Workshops"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
            <div className="space-y-6 order-1 lg:order-2">
              <h2 className="text-4xl sm:text-5xl font-serif font-bold text-slate-900 animate-slide-in">
                Live Workshops for Organizations & Communities
              </h2>
              <div className="text-3xl font-bold text-purple-600 mb-4">$850</div>
              <div className="prose prose-lg prose-slate max-w-none">
                <p>
                  Shina offers custom workshops for groups, institutions, and organizations that want
                  to support their people through change with integrity and intention.
                </p>
                <p>
                  These sessions are interactive, insightful, and grounded in emotional intelligence.
                  Whether for leadership retreats, wellness spaces, or team development, each workshop
                  is uniquely crafted to meet your group's needs.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-slate-900">Ideal for:</h4>
                <ul className="space-y-1 text-slate-600">
                  <li>• Student groups</li>
                  <li>• Corporate wellness events</li>
                  <li>• Women's empowerment circles</li>
                  <li>• Career development teams</li>
                </ul>
              </div>
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                Inquire About Workshops
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Who Is This For Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-serif font-bold text-slate-900 mb-6 animate-slide-in">
              You'll Feel at Home Here If...
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Our coaching is designed for those ready to embrace their journey of transformation.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {idealFor.map((item, index) => (
              <Card key={index} className="bg-white border-0 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-2">
                <CardContent className="p-6">
                  <div className="relative w-full h-40 mb-4 rounded-lg overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.text}
                      className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-600/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                    </div>
                    <p className="text-slate-700 leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 bg-gradient-to-r from-purple-600 to-purple-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-

8 text-center">
          <h2 className="text-4xl sm:text-5xl font-serif font-bold mb-6 animate-slide-in">
            Ready to Begin?
          </h2>
          <p className="text-xl mb-8 opacity-90 leading-relaxed">
            Let's start with a conversation. Whether you're sure what you need or still figuring it out,
            there's space for you here.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-3 text-lg rounded-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              Book a Free Discovery Call <PhoneCall />
            </Button>
            <Button variant="outline" className="border-white bg-transparent text-white hover:bg-white hover:text-purple-600 px-8 py-3 text-lg rounded-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              Browse All Offers <BadgeDollarSign />
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;