import { useEffect, useRef, useState } from "react";
import { Lightbulb, Heart, Zap, Shield } from "lucide-react";

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-12 md:py-16 bg-gradient-to-b from-background to-sahaara-orange-light/30">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className={`mb-8 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-sahaara-purple-light to-sahaara-blue-light border border-purple-200 text-sm font-semibold text-sahaara-purple mb-4">
            <Lightbulb className="w-4 h-4" />
            Care Innovation
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            About SAHAARA
          </h2>
        </div>

        {/* Main Content */}
        <div className={`max-w-6xl mx-auto transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Left Column */}
            <div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                <span className="text-foreground font-semibold">SAHAARA</span> is an innovative care platform designed to 
                transform community wellbeing through cutting-edge technology. This comprehensive platform addresses 
                critical challenges of <span className="text-primary font-semibold">elderly care, youth mental health, 
                child nutrition, and accessible education</span> across diverse communities.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Our platform integrates multiple care modules that work together to provide comprehensive support for 
                individuals and families, combining advanced technology with compassionate care to create a unified 
                wellbeing ecosystem.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Each module is carefully designed to address specific wellbeing challenges, ensuring that every stage 
                of life receives the attention and care it deserves. Through real-time monitoring, personalized guidance, 
                and evidence-based solutions, SAHAARA empowers communities to build healthier futures.
              </p>
            </div>

            {/* Right Column */}
            <div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                At the core of our mission is the belief that technology should enhance human connections, not replace them. 
                We work closely with healthcare professionals, educators, and community leaders to ensure our solutions 
                remain grounded in real-world needs and compassionate care principles.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Our commitment extends beyond delivering services—we strive to create lasting positive impact by fostering 
                stronger family bonds, supporting community growth, and building a more inclusive society where everyone 
                has access to quality care and education.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                With a focus on scalability, accessibility, and ethical practices, SAHAARA continues to evolve, incorporating 
                feedback from users and staying at the forefront of healthcare and educational innovation.
              </p>
            </div>
          </div>
        </div>

        {/* Quote Section */}
        <div className={`mt-12 md:mt-16 bg-gradient-to-r from-foreground via-foreground to-slate-800 rounded-3xl p-6 md:p-8 text-center transition-all duration-1000 delay-400 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="w-16 h-16 rounded-2xl gradient-teal flex items-center justify-center mx-auto mb-4 shadow-lg">
            <Zap className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            "Building the Care Network of Tomorrow, Today"
          </h3>
          <p className="text-white/80 max-w-3xl mx-auto mb-6 leading-relaxed">
            SAHAARA is an advanced care innovation that demonstrates the potential of artificial intelligence 
            in transforming community wellbeing. Our intelligent system addresses real challenges faced by 
            families through automated care coordination and predictive health analytics, showcasing how 
            technology can enhance safety, accessibility, and quality of life.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <span className="px-5 py-2.5 rounded-full bg-white/10 border border-white/20 text-sm font-semibold text-white">
              <Heart className="w-4 h-4 inline mr-2" />
              Innovation Focus
            </span>
            <span className="px-5 py-2.5 rounded-full gradient-orange text-sm font-semibold text-white">
              <Lightbulb className="w-4 h-4 inline mr-2" />
              Technology Platform
            </span>
            <span className="px-5 py-2.5 rounded-full bg-white/10 border border-white/20 text-sm font-semibold text-white">
              <Shield className="w-4 h-4 inline mr-2" />
              Care Solution
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
