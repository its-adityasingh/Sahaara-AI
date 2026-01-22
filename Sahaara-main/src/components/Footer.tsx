import { Heart, Mail, Phone, MapPin, ExternalLink } from "lucide-react";

const Footer = () => {
  const modules = [
    { name: "Ayush - Elderly Care", href: "https://sahaara-ayush.vercel.app/", target: "_blank" },
    { name: "Manas & Fit - Youth Wellbeing", href: "https://sahaara-manas-fit.vercel.app/", target: "_blank" },
    { name: "Poshan - Child Nutrition", href: "https://sahaara-poshan.vercel.app/", target: "_blank" },
    { name: "Gyaan - Accessible Education", href: "https://sahaara-gyaan.vercel.app/", target: "_blank" },
  ];

  const resources = [
    { name: "Health Guidelines", href: "https://www.healthline.com/health/mental-health/mental-health-guidelines" },
    { name: "Community Support", href: "https://www.communitysupport.com/" },
    { name: "Research Portal", href: "https://www.researchportal.com/" },
  ];

  return (
    <footer className="bg-gradient-to-b from-slate-900 to-slate-950 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img 
                src="/logo.png" 
                alt="SAHAARA Logo" 
                className="w-12 h-12 object-contain"
                onError={(e) => {
                  // Fallback to SVG if PNG doesn't exist
                  const target = e.target as HTMLImageElement;
                  if (target.src.endsWith('.png')) {
                    target.src = '/logo.svg';
                  }
                }}
              />
              <div>
                <h3 className="text-xl font-bold">SAHAARA</h3>
                <p className="text-xs text-white/60">Care & Wellbeing Platform</p>
              </div>
            </div>
            <p className="text-sm text-white/70 leading-relaxed mb-6">
              Making community wellbeing accessible and effective through practical technology solutions. 
              Developed by healthcare professionals and educators who understand ground realities of 
              serving diverse communities.
            </p>
            
            {/* Trust Badge */}
            <div className="bg-white/5 rounded-2xl p-4 text-center border border-white/10">
              <div className="w-10 h-10 rounded-full gradient-teal flex items-center justify-center mx-auto mb-2">
                <Heart className="w-5 h-5 text-white" />
              </div>
              <p className="text-sm font-semibold">Community Welfare</p>
              <p className="text-xs text-white/60">Trusted Care Initiative</p>
            </div>
          </div>

          {/* Care Modules */}
          <div>
            <h4 className="flex items-center gap-2 text-sm font-bold mb-4">
              <span className="w-6 h-6 rounded gradient-orange flex items-center justify-center">
                <Heart className="w-3 h-3 text-white" />
              </span>
              Care Modules
            </h4>
            <ul className="space-y-3">
              {modules.map((module) => {
                const isExternal = module.href.startsWith("http://") || module.href.startsWith("https://");
                return (
                  <li key={module.name}>
                    <a 
                      href={module.href}
                      target={isExternal ? "_blank" : undefined}
                      rel={isExternal ? "noopener noreferrer" : undefined}
                      className="text-sm text-white/70 hover:text-white transition-colors flex items-center gap-2 group"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary group-hover:scale-125 transition-transform" />
                      {module.name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="flex items-center gap-2 text-sm font-bold mb-4">
              <span className="w-6 h-6 rounded gradient-teal flex items-center justify-center">
                <ExternalLink className="w-3 h-3 text-white" />
              </span>
              Resources
            </h4>
            <ul className="space-y-3">
              {resources.map((resource) => {
                const isExternal = resource.href.startsWith("http://") || resource.href.startsWith("https://");
                return (
                  <li key={resource.name}>
                    <a 
                      href={resource.href}
                      target={isExternal ? "_blank" : undefined}
                      rel={isExternal ? "noopener noreferrer" : undefined}
                      className="text-sm text-white/70 hover:text-white transition-colors flex items-center gap-2 group"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-sahaara-teal group-hover:scale-125 transition-transform" />
                      {resource.name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="flex items-center gap-2 text-sm font-bold mb-4">
              <span className="w-6 h-6 rounded gradient-purple flex items-center justify-center">
                <Mail className="w-3 h-3 text-white" />
              </span>
              Contact Information
            </h4>
            <div className="space-y-4">
              <div className="bg-white/5 rounded-xl p-3 border border-white/10">
                <p className="text-xs text-white/50 mb-1">Helpline</p>
                <p className="flex items-center gap-2 text-sm font-semibold">
                  <Phone className="w-4 h-4 text-sahaara-orange" />
                  1800-XXX-XXXX (Toll Free)
                </p>
                <p className="text-xs text-white/50 mt-1">24x7 Support Available</p>
              </div>
              <div className="bg-white/5 rounded-xl p-3 border border-white/10">
                <p className="text-xs text-white/50 mb-1">Address</p>
                <p className="flex items-start gap-2 text-sm text-white/70">
                  <MapPin className="w-4 h-4 text-sahaara-teal mt-0.5" />
                  <span>
                    SAHAARA Foundation<br />
                    Community Welfare Center<br />
                    New Delhi - 110001
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-white/50">
              © {new Date().getFullYear()} SAHAARA. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-xs text-white/50 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-xs text-white/50 hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-xs text-white/50 hover:text-white transition-colors">
                Accessibility
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
