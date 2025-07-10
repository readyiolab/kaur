import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Layout from '@/components/Layout';
import { useToast } from '@/hooks/use-toast';
import { Instagram, Linkedin, PhoneCall } from 'lucide-react';
import useScrollToHashTargets from "@/customhooks/useScrollToHashTargets";
import { Link } from 'react-router-dom';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    inquiryType: '',
    message: ''
  });
  const { toast } = useToast();

  useScrollToHashTargets(['calendly-booking'], 500);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. Shina will get back to you soon.",
    });
    setFormData({ fullName: '', email: '', inquiryType: '', message: '' });
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Layout>
      {/* Hero Section with Parallax */}
      <section 
        className="relative min-h-[60vh] flex items-center bg-cover bg-center bg-no-repeat overflow-hidden"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1563906267088-b029e7101114?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fGNvbnRhY3R8ZW58MHx8MHx8fDA%3D')"
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#E8DFF5]/90 to-[#E8DFF5]/90 parallax-bg"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#5A4B81] mb-6 animate-slide-in drop-shadow-md">
            Let's <span className="text-[#D9A5B3]">Connect</span>
          </h1>
          <p className="text-lg sm:text-xl text-[#7D6C61] max-w-3xl mx-auto animate-slide-in animate-delay-200 drop-shadow-md">
            Whether you're ready to start coaching, collaborate on a workshop, or simply say hello — 
            I'd love to hear from you. This space is here to support your next steps, with warmth and clarity.
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

      <div className="py-24 bg-[#E8DFF5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300 bg-[#F6F1EB]">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-serif font-bold text-[#5A4B81] mb-6">
                    Send a Message
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Label htmlFor="fullName" className="text-[#7D6C61]">Full Name</Label>
                      <Input
                        id="fullName"
                        value={formData.fullName}
                        onChange={(e) => handleInputChange('fullName', e.target.value)}
                        className="mt-2 border-[#7D6C61] focus:border-[#D9A5B3] focus:ring-[#D9A5B3]"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-[#7D6C61]">Email Address</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className="mt-2 border-[#7D6C61] focus:border-[#D9A5B3] focus:ring-[#D9A5B3]"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="inquiryType" className="text-[#7D6C61]">What are you reaching out about?</Label>
                      <Select value={formData.inquiryType} onValueChange={(value) => handleInputChange('inquiryType', value)}>
                        <SelectTrigger className="mt-2 border-[#7D6C61] focus:border-[#D9A5B3] focus:ring-[#D9A5B3]">
                          <SelectValue placeholder="Select an option" />
                        </SelectTrigger>
                        <SelectContent className="bg-[#F6F1EB] border border-[#7D6C61] shadow-lg z-50">
                          <SelectItem value="coaching">Coaching</SelectItem>
                          <SelectItem value="workshop">Workshop</SelectItem>
                          <SelectItem value="general">General Inquiry</SelectItem>
                          <SelectItem value="testimonial">Submit a Testimonial</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="message" className="text-[#7D6C61]">Message</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        className="mt-2 min-h-[120px] border-[#7D6C61] focus:border-[#D9A5B3] focus:ring-[#D9A5B3]"
                        placeholder="Tell me a bit about what you're going through or what you're looking for..."
                        required
                      />
                    </div>
                    <Button type="submit" size="lg" className="w-full bg-[#3F2E56] hover:bg-[#5A4B81] text-white px-6 py-3 rounded-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Info & Calendar */}
            <div className="space-y-8">
              {/* Direct Contact Info */}
              <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300 bg-[#F6F1EB]">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-serif font-bold text-[#5A4B81] mb-6">
                    Direct Contact
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-[#7D6C61] mb-1">Email</h4>
                      <a href="mailto:info@shinakaur.com" className="text-[#D9A5B3] hover:text-[#5A4B81] transition-colors">
                        info@shinakaur.com
                      </a>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#7D6C61] mb-1">Phone</h4>
                      <a href="tel:+12066187852" className="text-[#D9A5B3] hover:text-[#5A4B81] transition-colors">
                        +1 206.618.7852
                      </a>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#7D6C61] mb-1">WhatsApp</h4>
                      <a href="https://wa.me/12066187852" target="_blank" rel="noopener noreferrer" className="text-[#D9A5B3] hover:text-[#5A4B81] transition-colors">
                        Tap to Chat
                      </a>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#7D6C61] mb-1">Location</h4>
                      <p className="text-[#7D6C61]">Based in British Columbia, Canada</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Calendar Booking */}
              <Card id="calendly-booking" className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300 bg-[#F6F1EB]">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-serif font-bold text-[#5A4B81] mb-6">
                    Book a Free Discovery Call
                  </h3>
                  <p className="text-[#7D6C61] mb-6">
                    Ready to explore working together? Schedule a complimentary 15-minute conversation 
                    to share what you're going through and see if we're a good fit.
                  </p>
                  <div className=" rounded-lg  text-center">
                    <iframe
                      src="https://calendly.com/simran-shinakaur/15"
                      width="100%"
                      height="600px"
                      frameBorder="0"
                      title="Calendly Booking"
                    ></iframe>
                  </div>
                </CardContent>
              </Card>

              {/* Social Media Links */}
              <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300 bg-[#F6F1EB]">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-serif font-bold text-[#5A4B81] mb-6">
                    Connect on Social
                  </h3>
                  <div className="flex flex-col space-y-4">
                    <a 
                      href="https://instagram.com/shina.kaur" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-[#D9A5B3] hover:text-[#5A4B81] transition-colors"
                    >
                      <Instagram />
                      <span>@shina.kaur</span>
                    </a>
                    <a 
                      href="https://linkedin.com/in/kaurshina4" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-[#D9A5B3] hover:text-[#5A4B81] transition-colors"
                    >
                      <Linkedin />
                      <span>LinkedIn</span>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Final CTA Section */}
      <section className="py-24 bg-gradient-to-r from-[#3F2E56] to-[#5A4B81] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-serif font-bold mb-6 animate-slide-in">
            Your Next Chapter Starts Here
          </h2>
          <p className="text-xl mb-8 opacity-90 leading-relaxed">
            Every transformation begins with a single conversation. Let's make it count.
          </p>
          <Button className="bg-[#F6F1EB] text-[#3F2E56] hover:bg-[#E8DFF5] px-8 py-3 text-lg rounded-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            Book a Free Discovery Call <PhoneCall />
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;