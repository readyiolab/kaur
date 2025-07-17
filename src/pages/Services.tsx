import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Layout from '@/components/Layout';
import { PhoneCall, Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, useRef } from 'react';
import VideoSection from './VideoSection';

const Services = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const handlePlayVideo = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const coachingOptions = [
    {
      title: 'Free Discovery Call',
      duration: '15 minutes',
      price: '$0',
      description: 'Chemistry check + identify which pillars need attention. No sales pitch—just real talk about your transitions.',
      buttonText: 'Chat Free for 15 Min'
    },
    {
      title: 'Navigate',
      duration: 'One 75-min session',
      price: '$225',
      description: 'Reliable clarity on 1-2 pillars (e.g., Work + Health). Includes pre-session reflection prompts, custom action steps + resources.',
      buttonText: 'Start with a Spark'
    },
    {
      title: 'Align',
      duration: '3 months',
      price: 'Starting at $1,800',
      description: 'Deep alignment across all 4 pillars. Includes six 75-min sessions, email/Voxer support, personalized tools (joy audits, reset rituals, reflection templates). Payment plans available.',
      buttonText: 'Explore Custom Packages'
    },
    {
      title: 'Transform',
      duration: 'Ongoing',
      price: '$2,800-$3,500',
      description: 'Ongoing support + community. Includes everything in ALIGN plus bi-monthly group coaching calls and access to "Courage Circles" (peer support).',
      buttonText: 'Step into Ongoing Growth'
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
      image: 'https://plus.unsplash.com/premium_photo-1709311452958-9784ad4fa371?w=600&auto=format&fit=crop&q=60'
    },
    {
      text: "You're a woman of color reclaiming her voice in the world",
      image: 'https://images.unsplash.com/photo-1528712306091-ed0763094c98?w=600&auto=format&fit=crop&q=80'
    }
  ];

  const testimonials = [
    {
      name: 'Ulamen Vanessa Edionseri',
      title: 'Peer Leader - University Canada West',
      points: [
        'Being an NSO volunteer to joining the Peer2Peer program for two terms was an incredibly rewarding part of my MBA journey, and Shina’s presence made it all the more special. From the start, I was drawn to the program by a desire to build meaningful connections, offer support, and grow in leadership and through Shina’s guidance, that hope blossomed into something even more beautiful.',
        'Shina is warm, kind, and genuinely present. Her “get-it-done” attitude is paired with a joyful spirit that makes you feel instantly at ease. She brings such intentionality to the way she supports and uplifts others always ready to listen, offer insight, or lend a helping hand.',
        'What really stood out to me is how Shina leads with heart. Her energy is compassionate, grounded, and empowering. She creates spaces where people feel seen and heard and that’s a rare and powerful gift.',
        'If you’re thinking about working with Shina, know this: you’re in the best hands. She’s not only an incredible support but also someone who champions your growth and truly wants to see you thrive. I’m deeply grateful for her support, both during the Peer2Peer experience and beyond.'
      ]
    },
    {
      name: 'Imaobong Kingsley Archibong',
      title: 'Co-Chair, UCW Student Advisory Council, Senior Peer Leader – Spring 2025, Program Ambassador, Career Development Centre',
      points: [
        'Working with Shina during my time as a Senior Peer Leader at University Canada West was both grounding and empowering. Her leadership was never about titles or hierarchy; it was about presence, clarity, and the ability to hold space for authentic growth.',
        'What stayed with me most was Shina’s intuitive and heart-led support. She helped me see leadership as something rooted in emotional intelligence and calm consistency, even during uncertain moments. That balance of structure and compassion shaped the way I showed up for my own team.',
        'If you’re considering working with Shina, know that you’ll be met with empathy, insight, and a deep belief in your capacity to lead from within. She doesn’t just coach, she gently transforms.'
      ]
    }
  ];

  return (
    <Layout>
      {/* Hero Section with Parallax */}
      <section
        className="relative min-h-[60vh] flex items-center bg-cover bg-center bg-no-repeat overflow-hidden"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNlcnZpY2VzfGVufDB8fDB8fHww')"
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#E8DFF5]/80 to-[#E8DFF5]/80 "></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#5A4B81] mb-6 animate-slide-in drop-shadow-md">
            How We Can <span className="text-[#D9A5B3]">Work Together</span>
          </h1>
          <p className="text-lg sm:text-xl text-[#7D6C61] max-w-3xl mx-auto animate-slide-in animate-delay-200 drop-shadow-md">
            Compassionate support for your most important transitions
          </p>
        </div>
      </section>

      {/* 1:1 Coaching Section */}
      <section className="py-24 bg-[#E8DFF5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-serif font-bold text-[#5A4B81] mb-6 animate-slide-in">
              Private Coaching for Sacred Pivots
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-[#7D6C61] leading-relaxed mb-6">
                If you’re navigating a personal, professional, emotional, or spiritual transition (or all four at once—because adulthood loves plot twists), you don’t have to do it alone.
              </p>
              <p className="text-lg text-[#7D6C61] leading-relaxed">
                I help high-achievers like you pause, recalibrate, and rebuild alignment across your core pillars: Work (career, purpose, boundaries), Play (joy, creativity, pleasure), Health (energy, nervous system, self-trust), Love (relationships, self-worth, belonging).
              </p>
              <p className="text-lg text-[#7D6C61] leading-relaxed">
                This isn’t about advice. It’s about co-creating clarity and personalized strategy so you can move forward without burning out, make decisions that honor all parts of your life, and turn “What now?” into “Oh, THIS is how my pillars dance together.”
              </p>
            </div>
          </div>
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
  {coachingOptions.map((option, index) => {
    const isFreeCall = index === 0;
    const targetLink = isFreeCall
      ? 'https://calendly.com/simran-shinakaur/15'
      : 'https://stan.store/ShineWithShina';

    return (
      <Card
        key={index}
        className={`relative bg-[#F6F1EB] border-0 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden ${
          index === 2 ? 'ring-2 ring-[#D9A5B3]/50' : ''
        } flex flex-col group`}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-[#D9A5B3]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <CardContent className="p-6 text-center flex flex-col flex-grow z-10">
          {index === 2 && (
            <div className="absolute top-0 right-0 bg-[#D9A5B3] text-white text-xs font-semibold px-3 py-1 rounded-bl-lg">
              Recommended
            </div>
          )}
          <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#5A4B81] mb-3">
            {option.title}
          </h3>
          <p className="text-sm text-[#7D6C61]/80 mb-4">{option.duration}</p>
          <div className="text-3xl font-bold text-[#D9A5B3] mb-4">
            {option.price}
          </div>
          <p className="text-sm text-[#7D6C61] leading-relaxed mb-6 flex-grow">
            {option.description}
          </p>

          <a
            href={targetLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto"
          >
            <Button className="w-full bg-[#3F2E56] hover:bg-[#5A4B81] text-white px-6 py-3 rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105">
              {option.buttonText}
            </Button>
          </a>
        </CardContent>
      </Card>
    );
  })}
</div>

          <div className="text-center mt-12">
            <p className="text-lg text-[#7D6C61] mb-6">
              Not sure where you fit? Start with a free call and we’ll explore what aligned support looks like for you. No pressure, just presence.
            </p>
            <Button
              asChild
              className="bg-[#3F2E56] hover:bg-[#5A4B81] text-white px-8 py-3 text-lg rounded-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <Link to="/contact">Chat Free for 15 Min</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Digital Workbook Section */}
      <section className="py-24 bg-[#F6F1EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl sm:text-5xl font-serif font-bold text-[#5A4B81] animate-slide-in">
                Shiney Mindset Reset Toolkit
              </h2>
              <div className="text-3xl font-bold text-[#D9A5B3] mb-4">$35</div>
              <div className="prose prose-lg prose-[#7D6C61] max-w-none">
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
              <a
                href="https://stan.store/ShineWithShina"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="bg-[#3F2E56] hover:bg-[#5A4B81] text-white px-6 py-3 rounded-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                >
                  Download Toolkit
                </Button>
              </a>

            </div>
            <div className="relative">
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-xl group">
                <img
                  src="https://images.unsplash.com/photo-1637054235819-0c48cb6dca34?w=600&auto=format&fit=crop&q=60"
                  alt="Digital Toolkit"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#D9A5B3]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Workshops Section */}
      <section className="py-24 bg-[#E8DFF5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-xl group">
                <img
                  src="https://images.unsplash.com/photo-1638957835514-224c57ffe617?w=600&auto=format&fit=crop&q=60"
                  alt="Workshops"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#D9A5B3]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
            <div className="space-y-6 order-1 lg:order-2">
              <h2 className="text-4xl sm:text-5xl font-serif font-bold text-[#5A4B81] animate-slide-in">
                Live Workshops for Organizations & Communities
              </h2>
              <div className="text-3xl font-bold text-[#D9A5B3] mb-4">$850</div>
              <div className="prose prose-lg prose-[#7D6C61] max-w-none">
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
                <h4 className="font-semibold text-[#5A4B81]">Ideal for:</h4>
                <ul className="space-y-1 text-[#7D6C61]">
                  <li>• Student groups</li>
                  <li>• Corporate wellness events</li>
                  <li>• Women's empowerment circles</li>
                  <li>• Career development teams</li>
                </ul>
              </div>
              <Button size="lg" className="bg-[#3F2E56] hover:bg-[#5A4B81] text-white px-6 py-3 rounded-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <Link to="/contact">Inquire About Workshops</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Who Is This For Section */}
      <section className="py-24 bg-[#F6F1EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-serif font-bold text-[#5A4B81] mb-6 animate-slide-in">
              You’re ready to embrace your becoming..
            </h2>
            <p className="text-lg text-[#7D6C61] max-w-2xl mx-auto">
              Our coaching is designed for those ready to embrace their journey of transformation.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {idealFor.map((item, index) => (
              <Card key={index} className="bg-[#F6F1EB] border-0 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-2">
                <CardContent className="p-6">
                  <div className="relative w-full h-40 mb-4 rounded-lg overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.text}
                      className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#D9A5B3]/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-[#D9A5B3]/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 bg-[#D9A5B3] rounded-full"></div>
                    </div>
                    <p className="text-[#7D6C61] leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      {/* <section className="py-24 bg-[#E8DFF5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-serif font-bold text-[#5A4B81] mb-6 animate-slide-in">
              Discover Your Journey
            </h2>
            <p className="text-lg text-[#7D6C61] max-w-2xl mx-auto">
              Watch this video to learn how our coaching can guide you through your transformative journey with clarity and compassion.
            </p>
          </div>
          <div className="relative max-w-4xl mx-auto aspect-video rounded-2xl overflow-hidden shadow-xl group">
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              src="https://res.cloudinary.com/dbyjiqjui/video/upload/v1752409961/Extended_VSL_1_ik1zmn.mp4"
              poster="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&auto=format&fit=crop&q=60"
              controls={isPlaying}
            />
            {!isPlaying && (
              <div className="absolute inset-0 flex items-center justify-center bg-[#3F2E56]/50 transition-opacity duration-300 group-hover:bg-[#3F2E56]/40">
                <button
                  onClick={handlePlayVideo}
                  className="bg-[#D9A5B3] text-white rounded-full p-4 sm:p-6 hover:bg-[#5A4B81] transform hover:scale-110 transition-all duration-300 shadow-lg"
                  aria-label="Play video"
                >
                  <Play className="w-8 h-8 sm:w-12 sm:h-12" />
                </button>
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-[#D9A5B3]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
        </div>
      </section> */}
      <VideoSection />

      {/* Testimonials Section */}
      <section className="py-24 bg-[#E8DFF5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-serif font-bold text-[#5A4B81] mb-6 animate-slide-in">
              What Clients Are Saying
            </h2>
            <p className="text-lg text-[#7D6C61] max-w-2xl mx-auto">
              Hear from those who have experienced Shina’s transformative coaching and workshops.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="bg-[#F6F1EB] border-0 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col"
              >
                <CardContent className="p-6 flex flex-col flex-grow">
                  <ol className="space-y-4 text-[#7D6C61] text-sm leading-relaxed flex-grow">
                    {testimonial.points.map((point, pointIndex) => (
                      <li key={pointIndex} className="flex items-start space-x-3">
                        <span className="text-[#D9A5B3] font-semibold">*</span>
                        <p>{point}</p>
                      </li>
                    ))}
                  </ol>
                  <div className="mt-6 border-t border-[#D9A5B3]/20 pt-4">
                    <p className="text-[#5A4B81] font-semibold text-center">{testimonial.name}</p>
                    <p className="text-[#7D6C61] text-sm text-center">{testimonial.title}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 bg-gradient-to-r from-[#3F2E56] to-[#5A4B81] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-serif font-bold mb-6 animate-slide-in">
            Ready to Begin?
          </h2>
          <p className="text-xl mb-8 opacity-90 leading-relaxed">
            Let's start with a conversation. Whether you're sure what you need or still figuring it out,
            there's space for you here.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-[#F6F1EB] text-[#3F2E56] hover:bg-[#E8DFF5] px-8 py-3 text-lg rounded-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <Link to="/contact" className='flex justify-center items-center gap-4'>Book a Free Discovery Call <PhoneCall /></Link>
            </Button>
            <Button variant="outline" className="border-white bg-transparent text-white hover:bg-[#F6F1EB] hover:text-[#3F2E56] px-8 py-3 text-lg rounded-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <Link to="/contact">Browse All Offers</Link>
            </Button>
          </div>
        </div>
      </section>

      <div className="p-12 bg-[#E8DFF5] text-center m-10 rounded-lg shadow-lg">
        <p className="text-[#7D6C61] text-lg">
          All journeys start with a 15-min chat. Just possibility. Let’s co-create a coaching plan that meets your goals and your life - because investing in yourself should feel empowering, not stressful.
        </p>
      </div>
    </Layout>
  );
};

export default Services;