import { useState } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Send, CheckCircle } from "lucide-react";
import { toast } from "sonner";

const contactInfo = [
  { icon: Mail, label: "Email", value: "hello@eduflow.com" },
  { icon: Phone, label: "Phone", value: "+1 (555) 123-4567" },
  { icon: MapPin, label: "Address", value: "123 Learning Lane, San Francisco, CA 94105" },
];

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    toast.success("Message sent! We'll get back to you within 24 hours.");
  };

  return (
    <Layout>
      <section className="hero-gradient py-16">
        <div className="container mx-auto px-4">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-4">Contact Us</h1>
          <p className="text-primary-foreground/80 max-w-lg text-lg">Have a question? We'd love to hear from you.</p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-3">
              {submitted ? (
                <div className="bg-card rounded-xl border card-shadow p-12 text-center">
                  <CheckCircle className="h-16 w-16 text-secondary mx-auto mb-4" />
                  <h2 className="font-heading text-2xl font-bold mb-2">Thank You!</h2>
                  <p className="text-muted-foreground">We've received your message and will respond within 24 hours.</p>
                  <Button className="mt-6" onClick={() => setSubmitted(false)}>Send Another Message</Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-card rounded-xl border card-shadow p-8 space-y-5">
                  <h2 className="font-heading text-2xl font-bold mb-2">Send a Message</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-1.5 block">First Name</label>
                      <Input placeholder="John" required />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-1.5 block">Last Name</label>
                      <Input placeholder="Doe" required />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1.5 block">Email</label>
                    <Input type="email" placeholder="john@example.com" required />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1.5 block">Subject</label>
                    <Input placeholder="How can we help?" required />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1.5 block">Message</label>
                    <Textarea placeholder="Tell us more..." rows={5} required />
                  </div>
                  <Button type="submit" size="lg" className="w-full">
                    <Send className="mr-2 h-4 w-4" /> Send Message
                  </Button>
                </form>
              )}
            </div>

            <div className="lg:col-span-2 space-y-6">
              <div>
                <h2 className="font-heading text-2xl font-bold mb-6">Get in Touch</h2>
                <div className="space-y-4">
                  {contactInfo.map((c) => (
                    <div key={c.label} className="flex items-start gap-4 bg-card rounded-xl border card-shadow p-5">
                      <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                        <c.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <div className="font-medium text-sm">{c.label}</div>
                        <div className="text-sm text-muted-foreground">{c.value}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-muted rounded-xl p-6">
                <h3 className="font-heading font-semibold mb-2">Office Hours</h3>
                <div className="text-sm text-muted-foreground space-y-1">
                  <p>Monday – Friday: 9AM – 6PM PST</p>
                  <p>Saturday: 10AM – 4PM PST</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
