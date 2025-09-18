import Link from "next/link";
import {
  Bot,
  Mail,
  Phone,
  MapPin,
  Twitter,
  Linkedin,
  Github,
} from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "Products", href: "#products" },
    { name: "Solutions", href: "#solutions" },
    { name: "Pricing", href: "#pricing" },
    { name: "About Us", href: "#about" },
  ];

  const resources = [
    { name: "Blog", href: "#blog" },
    { name: "Documentation", href: "#docs" },
    { name: "Help Center", href: "#help" },
    { name: "Careers", href: "#careers" },
  ];

  const legal = [
    { name: "Privacy Policy", href: "#privacy" },
    { name: "Terms of Service", href: "#terms" },
    { name: "Cookie Policy", href: "#cookies" },
  ];

  return (
    <footer className="bg-slate-50 border-t border-slate-200">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-purple-600">
                  <Bot className="h-5 w-5 text-white" />
                </div>
                <span className="text-xl font-bold text-slate-900">
                  Samvaad<span className="text-gradient">AI</span>
                </span>
              </div>
              <p className="text-slate-600 mb-6 max-w-md">
                Empowering businesses across India with multilingual AI agents
                that understand and respond in your customer's language.
                Transform your customer experience with our intelligent
                automation solutions.
              </p>
              <div className="space-y-2">
                <div className="flex items-center space-x-3 text-slate-600">
                  <Mail className="h-4 w-4" />
                  <span className="text-sm">hello@samvaadai.com</span>
                </div>
                <div className="flex items-center space-x-3 text-slate-600">
                  <Phone className="h-4 w-4" />
                  <span className="text-sm">+91 70467 33823</span>
                </div>
                <div className="flex items-center space-x-3 text-slate-600">
                  <MapPin className="h-4 w-4" />
                  <span className="text-sm">Vadodara, India</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold text-slate-900 mb-4">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-slate-600 hover:text-slate-900 transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="font-semibold text-slate-900 mb-4">Resources</h3>
              <ul className="space-y-3">
                {resources.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-slate-600 hover:text-slate-900 transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-200 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-wrap items-center gap-6">
              {legal.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-slate-500 hover:text-slate-700 transition-colors text-sm"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              <Link
                href="#"
                className="text-slate-400 hover:text-slate-600 transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="text-slate-400 hover:text-slate-600 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="text-slate-400 hover:text-slate-600 transition-colors"
              >
                <Github className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-slate-200 text-center">
            <p className="text-slate-500 text-sm">
              © 2024 SamvaadAI. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
