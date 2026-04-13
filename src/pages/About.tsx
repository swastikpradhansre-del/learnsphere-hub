import Layout from "@/components/Layout";
import { Target, Heart, Lightbulb, Users } from "lucide-react";

const values = [
  { icon: Target, title: "Mission-Driven", desc: "We believe quality education should be accessible to everyone, everywhere." },
  { icon: Heart, title: "Student First", desc: "Every decision we make starts with how it impacts our learners' success." },
  { icon: Lightbulb, title: "Innovation", desc: "We continuously evolve our platform with the latest teaching methodologies." },
  { icon: Users, title: "Community", desc: "Learning is better together. We foster collaboration and peer support." },
];

const team = [
  { name: "Dr. Emily Zhang", role: "CEO & Co-Founder", bio: "Former Stanford CS professor with 15+ years in education technology." },
  { name: "James Rivera", role: "CTO & Co-Founder", bio: "Ex-Google engineer passionate about scalable learning platforms." },
  { name: "Aisha Thompson", role: "Head of Content", bio: "Curriculum designer who has built courses for 100K+ students." },
  { name: "Raj Patel", role: "Head of Product", bio: "Product leader focused on creating delightful learning experiences." },
];

const About = () => (
  <Layout>
    <section className="hero-gradient py-16">
      <div className="container mx-auto px-4">
        <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-4">About EduFlow</h1>
        <p className="text-primary-foreground/80 max-w-lg text-lg">On a mission to make world-class education accessible to everyone.</p>
      </div>
    </section>

    <section className="py-20">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="font-heading text-3xl font-bold mb-6">Our Story</h2>
        <div className="space-y-4 text-muted-foreground leading-relaxed">
          <p>Founded in 2020, EduFlow was born from a simple observation: traditional education wasn't keeping pace with the rapidly evolving tech landscape. Our founders, coming from academia and Silicon Valley, saw an opportunity to bridge this gap.</p>
          <p>Today, we serve over 50,000 active learners across 120+ countries, offering more than 200 courses taught by industry experts. Our project-based approach ensures that students don't just learn theory—they build real-world skills.</p>
        </div>
      </div>
    </section>

    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-3xl font-bold text-center mb-12">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v) => (
            <div key={v.title} className="bg-card rounded-xl p-6 border card-shadow text-center">
              <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <v.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-heading font-semibold mb-2">{v.title}</h3>
              <p className="text-sm text-muted-foreground">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-3xl font-bold text-center mb-12">Meet the Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((t) => (
            <div key={t.name} className="bg-card rounded-xl p-6 border card-shadow text-center">
              <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 text-2xl font-heading font-bold text-primary">
                {t.name.split(' ').map(n => n[0]).join('')}
              </div>
              <h3 className="font-heading font-semibold">{t.name}</h3>
              <div className="text-xs text-primary font-medium mb-2">{t.role}</div>
              <p className="text-sm text-muted-foreground">{t.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default About;
