import { useEffect, useRef, useState } from "react";
import { Heart, Zap, Sun, BookOpen, ArrowRight, Shield, Activity, Users, Brain, Apple, Accessibility } from "lucide-react";
import elderlyCare from "@/assets/elderly-care.jpg";
import youthWellness from "@/assets/youth-wellness.jpg";
import childNutrition from "@/assets/child-nutrition.jpg";
import educationAccess from "@/assets/education-access.jpg";

// Added a href property to each module
const modules = [
  {
    id: "ayush",
    name: "Ayush",
    tagline: "Advanced Elderly Care",
    stat: "99.8%",
    statLabel: "Care Quality",
    gradient: "from-orange-500 to-amber-500",
    bgGradient: "from-sahaara-orange-light to-orange-50",
    borderColor: "border-l-orange-500",
    icon: Heart,
    iconBg: "bg-orange-100",
    iconColor: "text-orange-600",
    image: elderlyCare,
    description: "Comprehensive elderly care platform that provides emotional support, health monitoring, and companionship services. Our system ensures seniors receive dignified care with real-time health tracking and emergency response capabilities.",
    capabilities: [
      { icon: Shield, text: "24/7 Health monitoring" },
      { icon: Heart, text: "Emotional wellness support" },
      { icon: Users, text: "Family connection portal" },
      { icon: Activity, text: "Activity & medication tracking" },
    ],
    quote: "Ensures dignified aging through personalized care plans, real-time health monitoring, and compassionate human connection.",
    cta: "Explore Ayush System",
    href: "https://sahaara-ayush.vercel.app/",
  },
  {
    id: "manas-fit",
    name: "Manas & Fit",
    tagline: "Youth Mental & Physical Wellbeing",
    stat: "35%",
    statLabel: "Better Outcomes",
    gradient: "from-blue-500 to-cyan-500",
    bgGradient: "from-sahaara-blue-light to-cyan-50",
    borderColor: "border-l-blue-500",
    icon: Zap,
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
    image: youthWellness,
    description: "Integrated mental health and fitness platform designed for youth. Combines evidence-based therapy approaches with physical wellness programs to create balanced, healthy lifestyles for the next generation.",
    capabilities: [
      { icon: Brain, text: "Mental health assessments" },
      { icon: Activity, text: "Personalized fitness plans" },
      { icon: Users, text: "Peer support communities" },
      { icon: Shield, text: "Crisis intervention support" },
    ],
    quote: "Improves mental clarity and physical fitness through integrated wellness programs tailored for modern youth challenges.",
    cta: "Explore Manas & Fit System",
    href: "https://sahaara-manas-fit.vercel.app/",
  },
  {
    id: "poshan",
    name: "Poshan",
    tagline: "Child Nutrition & Growth",
    stat: "40%",
    statLabel: "Growth Improvement",
    gradient: "from-green-500 to-emerald-500",
    bgGradient: "from-sahaara-green-light to-emerald-50",
    borderColor: "border-l-green-500",
    icon: Sun,
    iconBg: "bg-green-100",
    iconColor: "text-green-600",
    image: childNutrition,
    description: "Smart nutrition and growth tracking platform for children. Provides personalized meal plans, monitors developmental milestones, and connects families with nutrition experts to ensure optimal child development.",
    capabilities: [
      { icon: Apple, text: "Personalized meal planning" },
      { icon: Activity, text: "Growth milestone tracking" },
      { icon: Users, text: "Parent community support" },
      { icon: Shield, text: "Nutritionist consultations" },
    ],
    quote: "Maximizes child development through evidence-based nutrition guidance and continuous growth monitoring.",
    cta: "Explore Poshan System",
    href: "https://sahaara-poshan.vercel.app/",
  },
  {
    id: "gyaan",
    name: "Gyaan",
    tagline: "Accessible Education Platform",
    stat: "24/7",
    statLabel: "Learning Access",
    gradient: "from-purple-500 to-violet-500",
    bgGradient: "from-sahaara-purple-light to-violet-50",
    borderColor: "border-l-purple-500",
    icon: BookOpen,
    iconBg: "bg-purple-100",
    iconColor: "text-purple-600",
    image: educationAccess,
    description: "Inclusive education platform that removes barriers to learning. Features screen readers, sign language support, multilingual content, and adaptive learning paths for learners of all abilities and backgrounds.",
    capabilities: [
      { icon: Accessibility, text: "Screen reader compatibility" },
      { icon: Users, text: "Sign language integration" },
      { icon: Brain, text: "Adaptive learning paths" },
      { icon: Activity, text: "Progress analytics" },
    ],
    quote: "Provides comprehensive education access with multi-modal learning support and inclusive design principles.",
    cta: "Explore Gyaan System",
    href: "https://sahaara-gyaan.vercel.app/",
  },
];

const ModulesSection = () => {
  const [visibleModules, setVisibleModules] = useState<string[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("data-module");
            if (id) setVisibleModules((prev) => [...new Set([...prev, id])]);
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = sectionRef.current?.querySelectorAll("[data-module]");
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  // Externals open new tab, in-page anchor does not.
  const isExternal = (href: string) =>
    href.startsWith("http://") || href.startsWith("https://");

  return (
    <section id="modules" ref={sectionRef} className="py-12 md:py-16 bg-gradient-to-b from-secondary/30 to-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-10">
          <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-sahaara-orange-light to-sahaara-yellow-light border border-primary/20 text-sm font-semibold text-primary mb-6">
            <Shield className="w-4 h-4" />
            Integrated Care Modules
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Four Pillars of Wellbeing
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Each module is designed to address specific wellbeing challenges, 
            working together to create a comprehensive care ecosystem.
          </p>
        </div>

        {/* Modules Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {modules.map((module, index) => (
            <div
              key={module.id}
              id={module.id}
              data-module={module.id}
              className={`relative bg-gradient-to-br ${module.bgGradient} rounded-3xl overflow-hidden border-l-4 ${module.borderColor} transition-all duration-700 hover:shadow-2xl group ${
                visibleModules.includes(module.id)
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Image Header */}
              <div className="relative h-48 overflow-hidden rounded-t-3xl">
                <img 
                  src={module.image} 
                  alt={module.tagline}
                  className={`absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 ${
                    module.id === 'ayush' ? 'object-top' : 'object-center'
                  }`}
                  style={{ willChange: 'transform' }}
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${
                  module.id === 'ayush' 
                    ? 'from-black/70 via-black/30 to-transparent' 
                    : 'from-black/60 via-black/20 to-transparent'
                }`} />
                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 rounded-xl ${module.iconBg} flex items-center justify-center shadow-lg`}>
                      <module.icon className={`w-6 h-6 ${module.iconColor}`} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{module.name}</h3>
                      <p className="text-sm text-white/80">{module.tagline}</p>
                    </div>
                  </div>
                  <div className="text-right bg-white/90 backdrop-blur-sm rounded-xl px-3 py-2">
                    <p className="text-xl font-bold text-foreground">{module.stat}</p>
                    <p className="text-xs text-muted-foreground">{module.statLabel}</p>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                {/* Description */}
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {module.description}
                </p>

                {/* Key Capabilities */}
                <div className="mb-4">
                  <h4 className="text-sm font-bold text-foreground mb-3 flex items-center gap-2">
                    <span className={`w-1 h-4 rounded-full bg-gradient-to-b ${module.gradient}`} />
                    Key Capabilities
                  </h4>
                  <div className="grid grid-cols-2 gap-3">
                    {module.capabilities.map((cap, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${module.gradient}`} />
                        <span className="text-sm text-muted-foreground">{cap.text}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quote */}
                <div className="bg-white/70 rounded-xl p-4 mb-4 border border-border/30">
                  <p className="text-sm text-muted-foreground italic">"{module.quote}"</p>
                </div>

                {/* CTA - now a link if href exists */}
                {module.href ? (
                  <a
                    href={module.href}
                    target={isExternal(module.href) ? "_blank" : undefined}
                    rel={isExternal(module.href) ? "noopener noreferrer" : undefined}
                    className={`w-full flex items-center justify-center gap-2 py-3.5 bg-white hover:bg-gradient-to-r hover:${module.gradient} hover:text-white rounded-xl text-sm font-semibold text-foreground transition-all duration-300 border border-border/50 hover:border-transparent hover:shadow-lg group/btn text-center`}
                  >
                    <span>{module.cta}</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                  </a>
                ) : (
                  <button className={`w-full flex items-center justify-center gap-2 py-3.5 bg-white hover:bg-gradient-to-r hover:${module.gradient} hover:text-white rounded-xl text-sm font-semibold text-foreground transition-all duration-300 border border-border/50 hover:border-transparent hover:shadow-lg group/btn`}>
                    <span>{module.cta}</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ModulesSection;
