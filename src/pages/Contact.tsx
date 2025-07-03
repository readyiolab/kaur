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

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    inquiryType: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. Shina will get back to you soon.",
    });
    setFormData({ fullName: '', email: '', inquiryType: '', message: '' });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Layout>
      {/* Hero Section with Parallax */}
      <section 
        className="relative min-h-[60vh] flex items-center bg-cover bg-center bg-no-repeat overflow-hidden"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1528747045269-390fe33c19f2?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-white/80 to-white/50 parallax-bg"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-slate-900 mb-6 animate-slide-in">
            Let's{' '}
            <span className="text-purple-600">Connect</span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto animate-slide-in animate-delay-200">
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

      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300 ">
                <CardContent className="p-8">
                  
                  <h2 className="text-3xl font-serif font-bold text-slate-900 mb-6">
                    Send a Message
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Label htmlFor="fullName" className="text-slate-700">Full Name</Label>
                      <Input
                        id="fullName"
                        value={formData.fullName}
                        onChange={(e) => handleInputChange('fullName', e.target.value)}
                        className="mt-2 border-gray-300 focus:border-purple-600 focus:ring-purple-600"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-slate-700">Email Address</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className="mt-2 border-gray-300 focus:border-purple-600 focus:ring-purple-600"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="inquiryType" className="text-slate-700">What are you reaching out about?</Label>
                      <Select value={formData.inquiryType} onValueChange={(value) => handleInputChange('inquiryType', value)}>
                        <SelectTrigger className="mt-2 border-gray-300 focus:border-purple-600 focus:ring-purple-600">
                          <SelectValue placeholder="Select an option" />
                        </SelectTrigger>
                        <SelectContent className="bg-white border border-gray-200 shadow-lg z-50">
                          <SelectItem value="coaching">Coaching</SelectItem>
                          <SelectItem value="workshop">Workshop</SelectItem>
                          <SelectItem value="general">General Inquiry</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="message" className="text-slate-700">Message</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        className="mt-2 min-h-[120px] border-gray-300 focus:border-purple-600 focus:ring-purple-600"
                        placeholder="Tell me a bit about what you're going through or what you're looking for..."
                        required
                      />
                    </div>
                    <Button type="submit" size="lg" className="w-full bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Info & Calendar */}
            <div className="space-y-8">
              {/* Direct Contact Info */}
              <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300 ">
                <CardContent className="p-8">
                  
                  <h3 className="text-2xl font-serif font-bold text-slate-900 mb-6">
                    Direct Contact
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-slate-700 mb-1">Email</h4>
                      <a href="mailto:info@shinakaur.com" className="text-purple-600 hover:text-purple-700 transition-colors">
                        info@shinakaur.com
                      </a>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-700 mb-1">Phone</h4>
                      <a href="tel:+12066187852" className="text-purple-600 hover:text-purple-700 transition-colors">
                        +1 206.618.7852
                      </a>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-700 mb-1">WhatsApp</h4>
                      <a href="https://wa.me/12066187852" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-700 transition-colors">
                        Tap to Chat
                      </a>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-700 mb-1">Location</h4>
                      <p className="text-slate-600">Based in British Columbia, Canada</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Calendar Booking */}
              <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300 ">
                <CardContent className="p-8">
                  
                  <h3 className="text-2xl font-serif font-bold text-slate-900 mb-6">
                    Book a Free Discovery Call
                  </h3>
                  <p className="text-slate-600 mb-6">
                    Ready to explore working together? Schedule a complimentary 30-minute conversation 
                    to share what you're going through and see if we're a good fit.
                  </p>
                  <div className="bg-purple-50 rounded-lg p-6 text-center">
                    <p className="text-slate-600 mb-4">
                      Calendar integration would go here (Calendly embed)
                    </p>
                    <Button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                      Book Now
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Social Media Links */}
              <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-serif font-bold text-slate-900 mb-6">
                    Connect on Social
                  </h3>
                  <div className="flex flex-col space-y-4">
                    <a 
                      href="https://instagram.com/shina.kaur" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-purple-600 hover:text-purple-700 transition-colors"
                    >
                      <Instagram/>
                      <span>@shina.kaur</span>
                    </a>
                    <a 
                      href="https://linkedin.com/in/kaurshina4" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-purple-600 hover:text-purple-700 transition-colors"
                    >
                     <Linkedin/>
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
      <section className="py-24 bg-gradient-to-r from-purple-600 to-purple-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-serif font-bold mb-6 animate-slide-in">
            Your Next Chapter Starts Here
          </h2>
          <p className="text-xl mb-8 opacity-90 leading-relaxed">
            Every transformation begins with a single conversation. Let's make it count.
          </p>
          <Button className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-3 text-lg rounded-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            Book Your Free Discovery Call <PhoneCall/>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;