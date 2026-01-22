import { useEffect, useState } from "react";
import { Heart, Zap, Sun, BookOpen, ArrowRight, Users, Shield, Clock, Activity } from "lucide-react";
import heroFamily from "@/assets/hero-family.jpeg";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const stats = [
    { icon: Shield, value: "99.8%", label: "Care Quality", sublabel: "User Satisfaction Rate", color: "text-sahaara-orange" },
    { icon: Activity, value: "35%", label: "Better Outcomes", sublabel: "Improved Wellbeing", color: "text-sahaara-teal" },
    { icon: Clock, value: "24/7", label: "Always Available", sublabel: "Round-the-clock Support", color: "text-sahaara-purple" },
    { icon: Users, value: "1M+", label: "Lives Touched", sublabel: "Across Communities", color: "text-sahaara-green" },
  ];

  return (
    <section className="relative min-h-screen pt-24 md:pt-28 pb-12 overflow-hidden bg-gradient-to-br from-sahaara-orange-light via-background to-sahaara-teal-light/30">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 -left-20 w-96 h-96 bg-gradient-to-br from-sahaara-orange/20 to-sahaara-yellow/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 -right-20 w-[500px] h-[500px] bg-gradient-to-br from-sahaara-teal/15 to-sahaara-blue/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/4 w-72 h-72 bg-sahaara-purple/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left Content */}
          <div className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            {/* Badges */}
            <div className="flex flex-wrap gap-3 mb-4">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sahaara-orange-light border border-sahaara-orange/30 text-sm font-medium text-foreground">
                <Heart className="w-4 h-4 text-sahaara-orange" />
                Community Welfare Initiative
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sahaara-teal-light border border-sahaara-teal/30 text-sm font-medium text-foreground">
                <Shield className="w-4 h-4 text-sahaara-teal" />
                Trusted Platform
              </span>
            </div>

            {/* Title */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-3 tracking-tight">
              SAHAARA
            </h1>
            <p className="text-xl md:text-2xl text-primary font-semibold mb-4">
              Integrated Care & Wellbeing Platform
            </p>

            {/* Decorative line */}
            <div className="w-24 h-1.5 gradient-orange rounded-full mb-4" />

            {/* Description */}
            <p className="text-lg text-muted-foreground leading-relaxed mb-3">
              A comprehensive platform designed to nurture wellbeing across all stages of life — 
              from child nutrition to elderly care, youth mental health to accessible education.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed mb-6">
              Four integrated modules working together to provide personalized care, 
              evidence-based guidance, and compassionate support for individuals and families 
              seeking to improve their quality of life.
            </p>

            {/* CTA Button */}
            <button 
              onClick={() => document.getElementById("modules")?.scrollIntoView({ behavior: "smooth" })}
              className="inline-flex items-center gap-3 px-8 py-4 gradient-orange text-white rounded-2xl font-semibold hover:opacity-90 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl shadow-primary/30"
            >
              <Users className="w-5 h-5" />
              Explore Modules
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          {/* Right Content - Visual + Stats */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            {/* Main Visual Card */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl mb-6">
              <img 
                src={heroFamily} 
                alt="Multi-generational Indian family embracing together" 
                className="w-full h-[350px] object-cover"
              />
              {/* Overlay badge */}
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2.5 h-2.5 rounded-full gradient-orange animate-pulse" />
                    <span className="text-xs font-semibold text-primary">Integrated Care Ecosystem</span>
                  </div>
                  <h3 className="font-bold text-foreground mb-1">Holistic Wellbeing Platform</h3>
                  <p className="text-sm text-muted-foreground">Connecting care across generations with compassion and technology</p>
                </div>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-2xl p-5 border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                >
                  <stat.icon className={`w-8 h-8 ${stat.color} mb-3`} />
                  <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                  <p className="text-sm font-semibold text-foreground">{stat.label}</p>
                  <p className="text-xs text-muted-foreground">{stat.sublabel}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
