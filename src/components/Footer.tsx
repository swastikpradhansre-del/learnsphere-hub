import { GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-accent text-accent-foreground py-16">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-2 font-heading text-xl font-bold mb-4">
            <GraduationCap className="h-6 w-6" />
            EduFlow
          </div>
          <p className="text-sm opacity-80 leading-relaxed">
            Empowering learners worldwide with interactive, high-quality courses designed for the modern age.
          </p>
        </div>
        <div>
          <h4 className="font-heading font-semibold mb-4">Platform</h4>
          <ul className="space-y-2 text-sm opacity-80">
            <li><Link to="/courses" className="hover:opacity-100 transition-opacity">Courses</Link></li>
            <li><Link to="/about" className="hover:opacity-100 transition-opacity">About Us</Link></li>
            <li><Link to="/blog" className="hover:opacity-100 transition-opacity">Blog</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-heading font-semibold mb-4">Support</h4>
          <ul className="space-y-2 text-sm opacity-80">
            <li><Link to="/contact" className="hover:opacity-100 transition-opacity">Contact</Link></li>
            <li><a href="#" className="hover:opacity-100 transition-opacity">FAQ</a></li>
            <li><a href="#" className="hover:opacity-100 transition-opacity">Help Center</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-heading font-semibold mb-4">Legal</h4>
          <ul className="space-y-2 text-sm opacity-80">
            <li><a href="#" className="hover:opacity-100 transition-opacity">Privacy Policy</a></li>
            <li><a href="#" className="hover:opacity-100 transition-opacity">Terms of Service</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-accent-foreground/20 mt-12 pt-8 text-center text-sm opacity-60">
        © {new Date().getFullYear()} EduFlow. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
