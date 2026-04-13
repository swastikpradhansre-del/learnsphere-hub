import Layout from "@/components/Layout";
import { Star, Clock, Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const allCourses = [
  { title: "Full-Stack Web Development", category: "Development", duration: "12 weeks", students: "8.2K", rating: 4.9, emoji: "📱", desc: "Build production-ready web apps with React, Node.js, and PostgreSQL." },
  { title: "Data Science & Machine Learning", category: "Data Science", duration: "10 weeks", students: "6.5K", rating: 4.8, emoji: "📊", desc: "Master Python, pandas, scikit-learn, and deploy ML models." },
  { title: "UI/UX Design Masterclass", category: "Design", duration: "8 weeks", students: "5.1K", rating: 4.9, emoji: "🎨", desc: "Learn Figma, user research, and design systems from scratch." },
  { title: "Cloud Architecture & DevOps", category: "Cloud", duration: "10 weeks", students: "4.3K", rating: 4.7, emoji: "☁️", desc: "Master AWS, Docker, Kubernetes, and CI/CD pipelines." },
  { title: "Mobile App Development", category: "Development", duration: "10 weeks", students: "3.8K", rating: 4.8, emoji: "📲", desc: "Build cross-platform mobile apps with React Native and Flutter." },
  { title: "Cybersecurity Fundamentals", category: "Security", duration: "8 weeks", students: "3.2K", rating: 4.7, emoji: "🔐", desc: "Learn ethical hacking, network security, and threat analysis." },
  { title: "AI & Deep Learning", category: "Data Science", duration: "14 weeks", students: "4.1K", rating: 4.9, emoji: "🤖", desc: "Build neural networks with TensorFlow and PyTorch." },
  { title: "Product Management", category: "Business", duration: "6 weeks", students: "2.9K", rating: 4.6, emoji: "📋", desc: "Learn product strategy, roadmapping, and agile methodologies." },
];

const Courses = () => (
  <Layout>
    <section className="hero-gradient py-16">
      <div className="container mx-auto px-4">
        <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-4">Our Courses</h1>
        <p className="text-primary-foreground/80 max-w-lg text-lg">Explore 200+ expert-led courses designed to accelerate your career.</p>
      </div>
    </section>

    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {allCourses.map((c) => (
            <div key={c.title} className="group bg-card rounded-xl border card-shadow hover:card-shadow-hover transition-all duration-300 overflow-hidden hover:-translate-y-1 flex flex-col">
              <div className="h-36 hero-gradient flex items-center justify-center text-5xl">{c.emoji}</div>
              <div className="p-5 flex-1 flex flex-col">
                <span className="text-xs font-medium text-primary bg-primary/10 px-2.5 py-1 rounded-full w-fit">{c.category}</span>
                <h3 className="font-heading font-semibold mt-3 mb-2">{c.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">{c.desc}</p>
                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                  <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" /> {c.duration}</span>
                  <span className="flex items-center gap-1"><Users className="h-3.5 w-3.5" /> {c.students}</span>
                  <span className="flex items-center gap-1"><Star className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" /> {c.rating}</span>
                </div>
                <Button variant="outline" size="sm" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  Learn More <ArrowRight className="ml-2 h-3.5 w-3.5" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Courses;
