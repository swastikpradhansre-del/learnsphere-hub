import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { BookOpen, Users, Award, TrendingUp, Play, Star, ArrowRight, Zap, Globe, Shield } from "lucide-react";

const stats = [
  { icon: Users, value: "50K+", label: "Active Students" },
  { icon: BookOpen, value: "200+", label: "Courses" },
  { icon: Award, value: "95%", label: "Completion Rate" },
  { icon: TrendingUp, value: "4.9", label: "Avg Rating" },
];

const courses = [
  { title: "Full-Stack Web Development", category: "Development", duration: "12 weeks", students: "8.2K", rating: 4.9, image: "📱" },
  { title: "Data Science & Machine Learning", category: "Data Science", duration: "10 weeks", students: "6.5K", rating: 4.8, image: "📊" },
  { title: "UI/UX Design Masterclass", category: "Design", duration: "8 weeks", students: "5.1K", rating: 4.9, image: "🎨" },
  { title: "Cloud Architecture & DevOps", category: "Cloud", duration: "10 weeks", students: "4.3K", rating: 4.7, image: "☁️" },
];

const features = [
  { icon: Zap, title: "Interactive Learning", desc: "Hands-on projects, quizzes, and real-world exercises keep you engaged." },
  { icon: Globe, title: "Learn Anywhere", desc: "Access courses on any device, anytime. Your progress syncs seamlessly." },
  { icon: Shield, title: "Verified Certificates", desc: "Earn industry-recognized certificates that boost your career." },
  { icon: Users, title: "Community Support", desc: "Join thousands of learners in our active discussion forums." },
];

const testimonials = [
  { name: "Sarah Chen", role: "Software Engineer at Google", text: "EduFlow's full-stack course completely transformed my career. The project-based approach made all the difference.", rating: 5 },
  { name: "Marcus Johnson", role: "Data Analyst", text: "The data science track was incredibly well-structured. I went from beginner to landing my dream job in 6 months.", rating: 5 },
  { name: "Priya Patel", role: "UX Designer at Spotify", text: "The design masterclass taught me skills I use every single day. Worth every penny!", rating: 5 },
];

const Index = () => (
  <Layout>
    {/* Hero Section */}
    <section className="hero-gradient relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(174_55%_46%/0.15),transparent_60%)]" />
      <div className="container mx-auto px-4 py-24 md:py-32 relative">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-secondary/20 text-secondary-foreground px-4 py-1.5 rounded-full text-sm font-medium mb-6 backdrop-blur-sm border border-secondary/30">
            <Zap className="h-4 w-4" /> New: AI-Powered Learning Paths
          </div>
          <h1 className="font-heading text-4xl md:text-6xl font-bold text-primary-foreground leading-tight mb-6">
            Learn the Skills
            <br />
            <span className="text-gradient">That Matter Most</span>
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-xl leading-relaxed">
            Master in-demand skills with expert-led courses, hands-on projects, and a supportive community of learners.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-semibold px-8">
              Explore Courses <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
              <Play className="mr-2 h-4 w-4" /> Watch Demo
            </Button>
          </div>
        </div>
      </div>
    </section>

    {/* Stats Section */}
    <section className="py-16 bg-card border-b">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <s.icon className="h-8 w-8 text-primary mx-auto mb-3" />
              <div className="font-heading text-3xl font-bold text-foreground">{s.value}</div>
              <div className="text-sm text-muted-foreground mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Featured Courses */}
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Featured Courses</h2>
          <p className="text-muted-foreground max-w-lg mx-auto">Explore our most popular courses trusted by thousands of learners worldwide.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((c) => (
            <Link to="/courses" key={c.title} className="group bg-card rounded-xl border card-shadow hover:card-shadow-hover transition-all duration-300 overflow-hidden hover:-translate-y-1">
              <div className="h-40 hero-gradient flex items-center justify-center text-5xl">{c.image}</div>
              <div className="p-5">
                <span className="text-xs font-medium text-primary bg-primary/10 px-2.5 py-1 rounded-full">{c.category}</span>
                <h3 className="font-heading font-semibold mt-3 mb-2 group-hover:text-primary transition-colors">{c.title}</h3>
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span>{c.duration}</span>
                  <span className="flex items-center gap-1"><Star className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" /> {c.rating}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>

    {/* Features Section */}
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Why Choose EduFlow?</h2>
          <p className="text-muted-foreground max-w-lg mx-auto">We combine cutting-edge technology with expert instruction to deliver the best learning experience.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div key={f.title} className="bg-card rounded-xl p-6 border card-shadow hover:card-shadow-hover transition-all duration-300">
              <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <f.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-heading font-semibold mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Testimonials */}
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">What Our Students Say</h2>
          <p className="text-muted-foreground max-w-lg mx-auto">Hear from learners who transformed their careers with EduFlow.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-card rounded-xl p-6 border card-shadow">
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">"{t.text}"</p>
              <div>
                <div className="font-heading font-semibold text-sm">{t.name}</div>
                <div className="text-xs text-muted-foreground">{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA Section */}
    <section className="hero-gradient py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
          Ready to Start Learning?
        </h2>
        <p className="text-primary-foreground/80 max-w-lg mx-auto mb-8">
          Join 50,000+ learners and start building the future you deserve today.
        </p>
        <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-semibold px-10">
          Get Started for Free <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </section>
  </Layout>
);

export default Index;
