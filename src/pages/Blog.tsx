import Layout from "@/components/Layout";
import { Calendar, Clock, ArrowRight } from "lucide-react";

const posts = [
  { title: "10 Tips to Stay Motivated While Learning Online", category: "Tips", date: "Apr 10, 2026", readTime: "5 min", excerpt: "Staying motivated in self-paced learning can be tough. Here are proven strategies to keep your momentum.", emoji: "🎯" },
  { title: "Why Project-Based Learning Works Better", category: "Education", date: "Apr 5, 2026", readTime: "7 min", excerpt: "Research shows that hands-on projects lead to 3x better knowledge retention compared to lectures alone.", emoji: "🔧" },
  { title: "The Rise of AI in Education", category: "Technology", date: "Mar 28, 2026", readTime: "6 min", excerpt: "How artificial intelligence is personalizing learning paths and revolutionizing the classroom experience.", emoji: "🤖" },
  { title: "From Bootcamp to Big Tech: A Student's Journey", category: "Stories", date: "Mar 20, 2026", readTime: "8 min", excerpt: "How one EduFlow graduate went from career changer to a senior role at a leading tech company.", emoji: "🚀" },
  { title: "Best Programming Languages to Learn in 2026", category: "Development", date: "Mar 15, 2026", readTime: "6 min", excerpt: "A data-driven look at which programming languages offer the best career opportunities this year.", emoji: "💻" },
  { title: "Building a Learning Habit That Sticks", category: "Tips", date: "Mar 8, 2026", readTime: "4 min", excerpt: "Small, consistent study sessions beat marathon cramming. Learn how to build a sustainable learning routine.", emoji: "📚" },
];

const Blog = () => (
  <Layout>
    <section className="hero-gradient py-16">
      <div className="container mx-auto px-4">
        <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-4">Blog</h1>
        <p className="text-primary-foreground/80 max-w-lg text-lg">Insights, tips, and stories from the world of online education.</p>
      </div>
    </section>

    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((p) => (
            <article key={p.title} className="group bg-card rounded-xl border card-shadow hover:card-shadow-hover transition-all duration-300 overflow-hidden hover:-translate-y-1 flex flex-col">
              <div className="h-40 hero-gradient flex items-center justify-center text-5xl">{p.emoji}</div>
              <div className="p-5 flex-1 flex flex-col">
                <span className="text-xs font-medium text-primary bg-primary/10 px-2.5 py-1 rounded-full w-fit">{p.category}</span>
                <h3 className="font-heading font-semibold mt-3 mb-2 group-hover:text-primary transition-colors">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-4">{p.excerpt}</p>
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span className="flex items-center gap-1"><Calendar className="h-3.5 w-3.5" /> {p.date}</span>
                  <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" /> {p.readTime}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Blog;
