"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GraduationCap, Users, Wrench, Briefcase } from "lucide-react";
import { Code, Brain, Cloud } from "lucide-react";
import {
  FaGraduationCap,
  FaTwitter,
  FaCommentDots,
  FaLinkedinIn,
  FaBookOpen,
  FaShieldAlt,
  FaUsers
} from "react-icons/fa";






gsap.registerPlugin(ScrollTrigger);

const Counter = ({ target, label }) => {
  const [count, setCount] = useState(0);
  const [start, setStart] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStart(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!start) return;

    let current = 0;
    const increment = Math.ceil(target / 100);

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      setCount(current);
    }, 20);

    return () => clearInterval(timer);
  }, [start, target]);

  return (
    <div ref={ref} className="text-center">
      <h2 className="text-4xl md:text-5xl font-extrabold text-green-400">
        {count}+
      </h2>
      <p className="mt-2 text-gray-400 text-lg">{label}</p>
    </div>
  );
};

export default function Home() {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const buttonRef = useRef(null);
  const imageRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const companiesRef = useRef(null);
  const statsRef = useRef(null);
  const featuresRef = useRef(null);
  const coursesRef = useRef(null);
  const coursesGridRef = useRef(null);
  const howItWorksRef = useRef(null);
const stepsGridRef = useRef(null);
const faqRef = useRef(null);
const faqGridRef = useRef(null);



  useEffect(() => {
    // Hero animations
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    tl.fromTo(titleRef.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1 })
      .fromTo(subtitleRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8 }, "-=0.6")
      .fromTo(buttonRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8 }, "-=0.5")
      .fromTo(imageRef.current, { opacity: 0, x: 50 }, { opacity: 1, x: 0, duration: 1 }, "-=0.8");

    // Navbar hover animations
    gsap.utils.toArray("nav li").forEach((li) => {
      gsap.fromTo(li, 
        { scale: 1, y: 0 }, 
        { 
          scale: 1.05, 
          y: -2, 
          duration: 0.3, 
          ease: "power2.out",
          paused: true 
        }
      );
    });
  }, []);

  useEffect(() => {
    // Top Companies Section Animation
    if (companiesRef.current) {
      gsap.fromTo(companiesRef.current.children, 
        { 
          opacity: 0, 
          y: 30, 
          scale: 0.9 
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: companiesRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }

    // Stats Section Animation
    if (statsRef.current) {
      gsap.fromTo(statsRef.current.children,
        {
          opacity: 0,
          y: 40,
          scale: 0.8
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: "back.out(1.7)",
          stagger: 0.2,
          scrollTrigger: {
            trigger: statsRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }

    // Features Section Animation
    if (featuresRef.current) {
      gsap.fromTo(featuresRef.current.children,
        {
          opacity: 0,
          y: 50,
          rotationX: -15
        },
        {
          opacity: 1,
          y: 0,
          rotationX: 0,
          duration: 1,
          ease: "power3.out",
          stagger: 0.15,
          scrollTrigger: {
            trigger: featuresRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }

    // Courses Section Animation
if (coursesRef.current) {
  gsap.fromTo(coursesGridRef.current.children,
    {
      opacity: 0,
      y: 60,
      rotationY: 20,
      scale: 0.9
    },
    {
      opacity: 1,
      y: 0,
      rotationY: 0,
      scale: 1,
      duration: 1.2,
      ease: "power3.out",
      stagger: 0.2,
      scrollTrigger: {
        trigger: coursesRef.current,
        start: "top 80%",
        toggleActions: "play none none reverse"
      }
    }
  );
}
// How It Works Section Animation
if (howItWorksRef.current) {
  gsap.fromTo(stepsGridRef.current.children,
    {
      opacity: 0,
      y: 80,
      rotationX: 30,
      scale: 0.85
    },
    {
      opacity: 1,
      y: 0,
      rotationX: 0,
      scale: 1,
      duration: 1.2,
      ease: "power3.out",
      stagger: 0.3,
      scrollTrigger: {
        trigger: howItWorksRef.current,
        start: "top 75%",
        toggleActions: "play none none reverse"
      }
    }
  );

  // Timeline line animation
  gsap.fromTo(".z-10.w-1", 
    { height: 0 }, 
    { 
      height: "100%", 
      duration: 2, 
      ease: "power2.out",
      scrollTrigger: {
        trigger: howItWorksRef.current,
        start: "top 80%",
        scrub: true
      }
    }
  );

  // Step number bounce
  gsap.utils.toArray(".w-24.h-24").forEach((step, i) => {
    gsap.fromTo(step,
      { scale: 0, rotation: 180 },
      {
        scale: 1,
        rotation: 0,
        duration: 1,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: step,
          start: "top 85%",
          toggleActions: "play none none reverse"
        }
      }
    );
  });
}
// FAQ Section Animation
if (faqRef.current) {
  gsap.fromTo(faqGridRef.current.children,
    {
      opacity: 0,
      y: 40,
      scale: 0.95,
      rotationX: 10
    },
    {
      opacity: 1,
      y: 0,
      scale: 1,
      rotationX: 0,
      duration: 0.8,
      ease: "power3.out",
      stagger: 0.15,
      scrollTrigger: {
        trigger: faqRef.current,
        start: "top 80%",
        toggleActions: "play none none reverse"
      }
    }
  );
}



    // Navbar hover effect
    const navItems = document.querySelectorAll("nav li");
    navItems.forEach((item, index) => {
      item.addEventListener("mouseenter", () => {
        gsap.to(item, { scale: 1.05, y: -2, duration: 0.3, ease: "power2.out" });
      });
      item.addEventListener("mouseleave", () => {
        gsap.to(item, { scale: 1, y: 0, duration: 0.3, ease: "power2.out" });
      });
    });

    // Feature cards hover effects
    const featureCards = document.querySelectorAll("[class*='bg-white/5']");
    featureCards.forEach((card) => {
      gsap.set(card, { transformPerspective: 1000 });
      card.addEventListener("mouseenter", () => {
        gsap.to(card, { 
          scale: 1.02, 
          rotateX: 5, 
          rotateY: 5,
          boxShadow: "0 20px 40px rgba(6, 78, 59, 0.3)",
          duration: 0.4, 
          ease: "power2.out" 
        });
      });
      card.addEventListener("mouseleave", () => {
        gsap.to(card, { 
          scale: 1, 
          rotateX: 0, 
          rotateY: 0,
          boxShadow: "0 0 0 rgba(6, 78, 59, 0)",
          duration: 0.4, 
          ease: "power2.out" 
        });
      });
    });

    // Scroll up animations (reverse on scroll back)
    ScrollTrigger.create({
      trigger: ".container",
      start: "top bottom",
      end: "bottom top",
      onEnterBack: () => {
        gsap.fromTo(".hero-content", 
          { opacity: 0.7, scale: 0.98 }, 
          { opacity: 1, scale: 1, duration: 0.5 }
        );
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <main className="bg-black min-h-screen text-white">
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-center gap-8">
          <ul className="hidden md:flex gap-8 text-gray-200 font-medium">
            <li className="hover:text-emerald-400 cursor-pointer">Home</li>
            <li className="hover:text-emerald-400 cursor-pointer">Courses</li>
            <li className="hover:text-emerald-400 cursor-pointer">Companies</li>
            <li className="hover:text-emerald-400 cursor-pointer">Services</li>
          </ul>

          <button className="hidden md:block px-5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 font-semibold">
            Login
          </button>

          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-black/90 px-6 py-4">
            <ul className="flex flex-col gap-4">
              {["Home", "Courses", "Companies", "Services"].map((item) => (
                <li key={item} className="hover:text-emerald-400 cursor-pointer">
                  {item}
                </li>
              ))}
              <button className="mt-2 px-5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700">
                Login
              </button>
            </ul>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section className="flex items-start pt-28 md:pt-32 pb-20">
        <div className="container mx-auto px-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center hero-content">
          <div>
            <h1 ref={titleRef} className="text-4xl md:text-6xl font-extrabold">
              DNP{" "}
              <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-lime-400 bg-clip-text text-transparent">
                Online Learning
              </span>{" "}
              Platform
            </h1>

            <p ref={subtitleRef} className="mt-4 text-lg text-gray-400 max-w-xl">
              Learn industry-ready skills in Web Development, AI, Data Science, and more.
            </p>

            <div ref={buttonRef} className="mt-6">
              <button className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 rounded-xl font-semibold">
                Get Started
              </button>
            </div>
          </div>

          <div ref={imageRef} className="flex justify-center">
            <Image src="/Online learning-bro.png" alt="Online Learning" width={500} height={500} priority />
          </div>
        </div>
      </section>

      {/* TOP COMPANIES */}
      <section className="py-12 bg-black" ref={companiesRef}>
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-5xl font-extrabold mb-6 text-center">
            Our Top {""}
            <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-lime-400 bg-clip-text text-transparent">Partner Companies</span>
          </h2>

          <p className="text-gray-400 mb-10 max-w-2xl mx-auto">
            We collaborate with leading companies for real-world exposure.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 place-items-center">
            {["image.png","microsoft.png","apple.png","amazon.png","facebook.png","nvidia.png","zoho.png","hcl.png","snapchat.png","ibm.png"].map((logo) => (
              <Image key={logo} src={`/${logo}`} alt={logo} width={120} height={60} />
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-20 bg-black" ref={statsRef}>
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl md:text-5xl font-extrabold mb-6 text-center">
            Trustable 
            <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-lime-400 bg-clip-text text-transparent"> by</span>
          </h2>
          <p className="text-gray-400 mb-10 max-w-2xl mx-auto">
            Join thousands of students and top companies who trust our platform for skill development and recruitment.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
            <Counter target={1000} label="Registered Students" />
            <Counter target={70} label="Trustable Companies" />
            <Counter target={2300} label="Placed Students" />
          </div>
        </div>
      </section>

      {/* WHY CHOOSE DNP */}
      <section className="py-20 bg-black" ref={featuresRef}>
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}
          <div className="text-center mb-14">
            <h2 className="text-2xl md:text-5xl font-extrabold mb-6 text-center">
              Why Choose{" "}
              <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-lime-400 bg-clip-text text-transparent">
                DNP
              </span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We focus on real-world skills, career growth, and industry exposure to
              help you succeed in today's competitive tech market.
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Card 1 */}
            <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10 hover:border-emerald-400 transition group">
              <GraduationCap size={40} className="text-emerald-400 mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-xl font-semibold mb-2">Industry-Ready Curriculum</h3>
              <p className="text-gray-400 text-sm">
                Learn the latest technologies and tools used by top companies.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10 hover:border-emerald-400 transition group">
              <Users size={40} className="text-emerald-400 mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-xl font-semibold mb-2">Expert Mentorship</h3>
              <p className="text-gray-400 text-sm">
                Get guidance from experienced industry professionals and mentors.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10 hover:border-emerald-400 transition group">
              <Wrench size={40} className="text-emerald-400 mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-xl font-semibold mb-2">Hands-On Projects</h3>
              <p className="text-gray-400 text-sm">
                Build real projects that strengthen your portfolio and skills.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10 hover:border-emerald-400 transition group">
              <Briefcase size={40} className="text-emerald-400 mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-xl font-semibold mb-2">Placement Support</h3>
              <p className="text-gray-400 text-sm">
                Resume reviews, mock interviews, and placement assistance.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* ================= COURSES OFFERED ================= */}
     <section className="py-20 bg-black">
  <div className="max-w-7xl mx-auto px-6">

    {/* SECTION HEADER */}
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-5xl font-extrabold mb-6">
        Our{" "}
        <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-lime-400 bg-clip-text text-transparent">
          Courses
        </span>
      </h2>
      <p className="text-gray-400 max-w-2xl mx-auto text-lg">
        Choose from our industry-leading courses designed by experts.
      </p>
    </div>

    {/* COURSES GRID */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

      {/* CARD 1 - WEB DEVELOPMENT */}
      <div className="group relative bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/10 hover:border-emerald-400 transition-all duration-500 overflow-hidden h-[450px] flex flex-col hover:shadow-[0_0_40px_rgba(16,185,129,0.35)]">

        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/30 to-green-500/30 opacity-0 group-hover:opacity-100 scale-95 group-hover:scale-100 transition-all duration-700"></div>

        <div className="relative z-10 flex items-center justify-center w-20 h-20 mx-auto mb-6 bg-white/10 rounded-2xl group-hover:scale-110 transition-transform duration-300">
          <Code size={42} className="text-emerald-400" />
        </div>

        <div className="relative z-10 flex-1 flex flex-col items-center text-center">
          <h3 className="text-2xl font-bold mb-4 group-hover:text-emerald-400 transition-colors">
            Full Stack Web Development
          </h3>
          <p className="text-gray-400 mb-6">
            Master React, Next.js, Node.js, and modern web technologies.
          </p>

          <div className="space-y-2 mb-8 opacity-0 group-hover:opacity-100 transition-all duration-500">
            <div className="text-sm text-emerald-400">• 120+ Hours</div>
            <div className="text-sm text-emerald-400">• Live Projects</div>
          </div>
        </div>

        <div className="relative z-10 mt-6 pt-6 border-t border-white/10">
          <button className="w-full px-6 py-3 bg-emerald-600 hover:bg-emerald-700 rounded-xl font-semibold transition">
            Explore Course
          </button>
        </div>
      </div>

      {/* CARD 2 - DATA SCIENCE */}
      <div className="group relative bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/10 hover:border-emerald-400 transition-all duration-500 overflow-hidden h-[450px] flex flex-col hover:shadow-[0_0_40px_rgba(16,185,129,0.35)]">

        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/30 to-green-500/30 opacity-0 group-hover:opacity-100 scale-95 group-hover:scale-100 transition-all duration-700"></div>

        <div className="relative z-10 flex items-center justify-center w-20 h-20 mx-auto mb-6 bg-white/10 rounded-2xl group-hover:scale-110 transition-transform duration-300">
          <Brain size={42} className="text-emerald-400" />
        </div>

        <div className="relative z-10 flex-1 flex flex-col items-center text-center">
          <h3 className="text-2xl font-bold mb-4 group-hover:text-emerald-400 transition-colors">
            Data Science & AI
          </h3>
          <p className="text-gray-400 mb-6">
            Python, ML, DL, and real-world analytics projects.
          </p>

          <div className="space-y-2 mb-8 opacity-0 group-hover:opacity-100 transition-all duration-500">
            <div className="text-sm text-emerald-400">• 150+ Hours</div>
            <div className="text-sm text-emerald-400">• Capstone Projects</div>
          </div>
        </div>

        <div className="relative z-10 mt-6 pt-6 border-t border-white/10">
          <button className="w-full px-6 py-3 bg-emerald-600 hover:bg-emerald-700 rounded-xl font-semibold transition">
            Explore Course
          </button>
        </div>
      </div>

      {/* CARD 3 - CLOUD COMPUTING */}
      <div className="group relative bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/10 hover:border-emerald-400 transition-all duration-500 overflow-hidden h-[450px] flex flex-col hover:shadow-[0_0_40px_rgba(16,185,129,0.35)]">

        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/30 to-green-500/30 opacity-0 group-hover:opacity-100 scale-95 group-hover:scale-100 transition-all duration-700"></div>

        <div className="relative z-10 flex items-center justify-center w-20 h-20 mx-auto mb-6 bg-white/10 rounded-2xl group-hover:scale-110 transition-transform duration-300">
          <Cloud size={42} className="text-emerald-400" />
        </div>

        <div className="relative z-10 flex-1 flex flex-col items-center text-center">
          <h3 className="text-2xl font-bold mb-4 group-hover:text-emerald-400 transition-colors">
            Cloud Computing
          </h3>
          <p className="text-gray-400 mb-6">
            AWS, Azure, DevOps, and cloud certification prep.
          </p>

          <div className="space-y-2 mb-8 opacity-0 group-hover:opacity-100 transition-all duration-500">
            <div className="text-sm text-emerald-400">• 100+ Hours</div>
            <div className="text-sm text-emerald-400">• Certification Prep</div>
          </div>
        </div>

        <div className="relative z-10 mt-6 pt-6 border-t border-white/10">
          <button className="w-full px-6 py-3 bg-emerald-600 hover:bg-emerald-700 rounded-xl font-semibold transition">
            Explore Course
          </button>
        </div>
      </div>

    </div>
  </div>
</section>
{/* HOW IT WORKS SECTION */}
<section className="py-20 bg-gradient-to-b from-black via-black/80 to-black/20" ref={howItWorksRef}>
  <div className="max-w-4xl mx-auto px-6">
    {/* Heading */}
    <div className="text-center mb-20">
      <h2 className="text-3xl md:text-5xl font-extrabold mb-6">
        How It{" "}
        <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-lime-400 bg-clip-text text-transparent">
          Works
        </span>
      </h2>
      <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
        Join thousands of students who have transformed their careers through our proven 3-step learning journey.
      </p>
    </div>

    {/* Steps Container */}
    <div className="relative" ref={stepsGridRef}>
      {/* Single Center Vertical Timeline Line */}
      <div className="absolute left-1/2 -translate-x-1/2 w-1 bg-gradient-to-b from-emerald-400/30 via-emerald-400/70 to-emerald-400 h-full z-10"></div>
      
      {/* Steps - All on Left Side with Center Alignment - GREEN PATTERN */}
      <div className="space-y-24 relative z-20 max-w-2xl mx-auto">
        
        {/* Step 1 - EMERALD/GREEN */}
        <div className="group flex items-start pl-20">
          <div className="absolute left-8 flex items-center justify-center w-16 h-16 bg-gradient-to-r from-emerald-500 to-green-600 rounded-2xl shadow-2xl group-hover:scale-110 transition-all duration-700 shadow-emerald-500/25 z-30">
            <div className="text-xl font-bold text-white">01</div>
          </div>
          
          <div className="bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/10 hover:border-emerald-400 group-hover:bg-white/10 transition-all duration-500 flex-1 min-h-[200px] step-card ml-4">
            <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-emerald-400 transition-colors">Enroll & Start Learning</h3>
            <p className="text-gray-400 mb-6 leading-relaxed">Choose your course, get instant access to structured curriculum with video lectures, coding challenges, and interactive projects.</p>
            
            <div className="space-y-2 mb-6">
              <div className="flex items-center text-sm text-emerald-400">
                <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></div>
                Interactive video lessons
              </div>
              <div className="flex items-center text-sm text-emerald-400">
                <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></div>
                Hands-on coding exercises
              </div>
            </div>
          </div>
        </div>

        {/* Step 2 - EMERALD/GREEN PATTERN */}
        <div className="group flex items-start pl-20">
          <div className="absolute left-8 flex items-center justify-center w-16 h-16 bg-gradient-to-r from-emerald-500/[0.8] to-green-600/[0.8] rounded-2xl shadow-2xl group-hover:scale-110 transition-all duration-700 shadow-emerald-500/20 z-30">
            <div className="text-xl font-bold text-white">02</div>
          </div>
          
          <div className="bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/10 hover:border-emerald-400 group-hover:bg-white/10 transition-all duration-500 flex-1 min-h-[200px] step-card ml-4">
            <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-emerald-400 transition-colors">Build Real Projects</h3>
            <p className="text-gray-400 mb-6 leading-relaxed">Apply your skills through industry-level projects with code reviews and portfolio guidance from expert mentors.</p>
            
            <div className="space-y-2 mb-6">
              <div className="flex items-center text-sm text-emerald-400">
                <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></div>
                10+ live projects
              </div>
              <div className="flex items-center text-sm text-emerald-400">
                <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></div>
                Expert code reviews
              </div>
            </div>
          </div>
        </div>

        {/* Step 3 - EMERALD/GREEN PATTERN */}
        <div className="group flex items-start pl-20">
          <div className="absolute left-8 flex items-center justify-center w-16 h-16 bg-gradient-to-r from-emerald-500/[0.6] to-green-600/[0.6] rounded-2xl shadow-2xl group-hover:scale-110 transition-all duration-700 shadow-emerald-500/15 z-30">
            <div className="text-xl font-bold text-white">03</div>
          </div>
          
          <div className="bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/10 hover:border-emerald-400 group-hover:bg-white/10 transition-all duration-500 flex-1 min-h-[200px] step-card ml-4">
            <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-emerald-400 transition-colors">Get Placed & Succeed</h3>
            <p className="text-gray-400 mb-6 leading-relaxed">Receive personalized placement support, mock interviews, and direct referrals to 70+ partner companies.</p>
            
            <div className="space-y-2 mb-6">
              <div className="flex items-center text-sm text-emerald-400">
                <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></div>
                Resume building
              </div>
              <div className="flex items-center text-sm text-emerald-400">
                <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></div>
                Mock interviews
              </div>
            </div>
            
            {/* Success Stats */}
            <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-white/20">
              <div className="text-center">
                <div className="text-xl font-bold text-emerald-400">95%</div>
                <div className="text-xs text-gray-400">Placement</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold text-emerald-400">₹8-25L</div>
                <div className="text-xs text-gray-400">Avg Package</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold text-emerald-400">70+</div>
                <div className="text-xs text-gray-400">Companies</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
{/* FAQ SECTION */}
<section className="py-20 bg-black" ref={faqRef}>
  <div className="max-w-4xl mx-auto px-6">
    {/* Heading */}
    <div className="text-center mb-20">
      <h2 className="text-3xl md:text-5xl font-extrabold mb-6">
        Frequently Asked{" "}
        <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-lime-400 bg-clip-text text-transparent">
          Questions
        </span>
      </h2>
      <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
        Find answers to common questions about our courses, pricing, and placement support.
      </p>
    </div>

    {/* FAQ Accordion */}
    <div className="space-y-4 max-w-3xl mx-auto" ref={faqGridRef}>
      
      {/* FAQ 1 */}
      <div className="faq-item group">
        <div className="flex items-center justify-between p-6 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 hover:border-emerald-400 cursor-pointer transition-all duration-500 group-hover:bg-white/10">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-green-600 rounded-xl flex items-center justify-center mr-4 shadow-lg group-hover:scale-110 transition-all duration-300 flex-shrink-0">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h4 className="text-xl font-semibold text-white group-hover:text-emerald-400 transition-colors">Do you offer job guarantees?</h4>
          </div>
          <div className="faq-icon flex items-center justify-center w-10 h-10 bg-emerald-500/20 rounded-xl border border-emerald-400/30 group-hover:bg-emerald-500/40 transition-all duration-300">
            <svg className="w-5 h-5 text-emerald-400 group-hover:text-emerald-200 transform group-hover:rotate-180 transition-all duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
        <div className="faq-answer max-h-0 overflow-hidden bg-white/3 backdrop-blur-md rounded-2xl border border-white/5 ml-14 -mt-2 transition-all duration-700 ease-out group-data-[open=true]:max-h-96 group-data-[open=true]:p-6 group-data-[open=true]:border-emerald-400/50">
          <p className="text-gray-300 leading-relaxed">
            We provide 100% placement assistance with resume building, mock interviews, and direct referrals to 70+ partner companies. Our 95% placement rate speaks for itself. While we cannot guarantee jobs (as final hiring depends on companies), our track record is exceptional.
          </p>
        </div>
      </div>

      {/* FAQ 2 */}
      <div className="faq-item group">
        <div className="flex items-center justify-between p-6 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 hover:border-emerald-400 cursor-pointer transition-all duration-500 group-hover:bg-white/10">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-gradient-to-r from-emerald-500/[0.8] to-green-600/[0.8] rounded-xl flex items-center justify-center mr-4 shadow-lg group-hover:scale-110 transition-all duration-300 flex-shrink-0">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
              </svg>
            </div>
            <h4 className="text-xl font-semibold text-white group-hover:text-emerald-400 transition-colors">What is the course duration and schedule?</h4>
          </div>
          <div className="faq-icon flex items-center justify-center w-10 h-10 bg-emerald-500/20 rounded-xl border border-emerald-400/30 group-hover:bg-emerald-500/40 transition-all duration-300">
            <svg className="w-5 h-5 text-emerald-400 group-hover:text-emerald-200 transform group-hover:rotate-180 transition-all duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
        <div className="faq-answer max-h-0 overflow-hidden bg-white/3 backdrop-blur-md rounded-2xl border border-white/5 ml-14 -mt-2 transition-all duration-700 ease-out group-data-[open=true]:max-h-96 group-data-[open=true]:p-6 group-data-[open=true]:border-emerald-400/50">
          <p className="text-gray-300 leading-relaxed">
            Our courses range from 3-6 months with live classes 5 days/week (2-3 hours daily). Weekend batches available for working professionals. All classes are recorded for lifetime access with flexible self-paced learning options.
          </p>
        </div>
      </div>

      {/* FAQ 3 */}
      <div className="faq-item group">
        <div className="flex items-center justify-between p-6 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 hover:border-emerald-400 cursor-pointer transition-all duration-500 group-hover:bg-white/10">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-gradient-to-r from-emerald-500/[0.6] to-green-600/[0.6] rounded-xl flex items-center justify-center mr-4 shadow-lg group-hover:scale-110 transition-all duration-300 flex-shrink-0">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h4 className="text-xl font-semibold text-white group-hover:text-emerald-400 transition-colors">Are there any prerequisites required?</h4>
          </div>
          <div className="faq-icon flex items-center justify-center w-10 h-10 bg-emerald-500/20 rounded-xl border border-emerald-400/30 group-hover:bg-emerald-500/40 transition-all duration-300">
            <svg className="w-5 h-5 text-emerald-400 group-hover:text-emerald-200 transform group-hover:rotate-180 transition-all duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
        <div className="faq-answer max-h-0 overflow-hidden bg-white/3 backdrop-blur-md rounded-2xl border border-white/5 ml-14 -mt-2 transition-all duration-700 ease-out group-data-[open=true]:max-h-96 group-data-[open=true]:p-6 group-data-[open=true]:border-emerald-400/50">
          <p className="text-gray-300 leading-relaxed">
            No prior coding experience needed! Basic computer knowledge is sufficient. We start from fundamentals and gradually build up to advanced concepts. Perfect for complete beginners and career switchers.
          </p>
        </div>
      </div>

      {/* FAQ 4 */}
      <div className="faq-item group">
        <div className="flex items-center justify-between p-6 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 hover:border-emerald-400 cursor-pointer transition-all duration-500 group-hover:bg-white/10">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-green-600 rounded-xl flex items-center justify-center mr-4 shadow-lg group-hover:scale-110 transition-all duration-300 flex-shrink-0">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h4 className="text-xl font-semibold text-white group-hover:text-emerald-400 transition-colors">What kind of support do you provide?</h4>
          </div>
          <div className="faq-icon flex items-center justify-center w-10 h-10 bg-emerald-500/20 rounded-xl border border-emerald-400/30 group-hover:bg-emerald-500/40 transition-all duration-300">
            <svg className="w-5 h-5 text-emerald-400 group-hover:text-emerald-200 transform group-hover:rotate-180 transition-all duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
        <div className="faq-answer max-h-0 overflow-hidden bg-white/3 backdrop-blur-md rounded-2xl border border-white/5 ml-14 -mt-2 transition-all duration-700 ease-out group-data-[open=true]:max-h-96 group-data-[open=true]:p-6 group-data-[open=true]:border-emerald-400/50">
          <p className="text-gray-300 leading-relaxed">
            24/7 doubt resolution via Discord, dedicated mentors, weekly 1:1 sessions, lifetime course access, and placement cell support. Average response time: under 15 minutes during live hours.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
{/* ================= FOOTER ================= */}
<footer className="bg-gradient-to-t from-black/90 via-black to-transparent pt-20 pb-12 border-t border-white/10">
  <div className="max-w-7xl mx-auto px-6">

    {/* Top Footer */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

      {/* Logo & Description */}
      <div>
        <div className="flex items-center mb-6 group">
          <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-green-600 rounded-2xl flex items-center justify-center shadow-2xl mr-4 group-hover:scale-110 transition-all duration-300">
            <FaGraduationCap className="w-7 h-7 text-white" />
          </div>
          <h3 className="text-2xl font-extrabold bg-gradient-to-r from-green-400 via-emerald-400 to-lime-400 bg-clip-text text-transparent">
            DNP
          </h3>
        </div>

        <p className="text-gray-400 mb-8 leading-relaxed max-w-md">
          Empowering careers through industry-ready education.
        </p>

        <div className="flex space-x-4">
          <a className="w-10 h-10 bg-white/10 hover:bg-emerald-500/80 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 border border-white/20 group">
            <FaTwitter className="w-5 h-5 text-gray-400 group-hover:text-white" />
          </a>
          <a className="w-10 h-10 bg-white/10 hover:bg-emerald-500/80 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 border border-white/20 group">
            <FaCommentDots className="w-5 h-5 text-gray-400 group-hover:text-white" />
          </a>
          <a className="w-10 h-10 bg-white/10 hover:bg-emerald-500/80 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 border border-white/20 group">
            <FaLinkedinIn className="w-5 h-5 text-gray-400 group-hover:text-white" />
          </a>
        </div>
      </div>

      {/* Quick Links */}
      <div>
        <h4 className="text-xl font-bold text-white mb-6 flex items-center">
          <FaBookOpen className="w-5 h-5 text-emerald-400 mr-3" />
          Quick Links
        </h4>
        <ul className="space-y-3">
          {["Home", "Courses", "Companies", "Services"].map((item) => (
            <li key={item}>
              <a className="text-gray-400 hover:text-emerald-400 font-medium transition-colors duration-300 flex items-center group">
                <span className="w-2 h-2 rounded-full mr-3 bg-transparent group-hover:bg-emerald-400 transition-all"></span>
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Company */}
      <div>
        <h4 className="text-xl font-bold text-white mb-6 flex items-center">
          <FaShieldAlt className="w-5 h-5 text-emerald-400 mr-3" />
          Company
        </h4>
        <ul className="space-y-3">
          {["Careers", "Privacy Policy", "Terms of Service", "Contact"].map((item) => (
            <li key={item}>
              <a className="text-gray-400 hover:text-emerald-400 font-medium transition-colors duration-300 flex items-center group">
                <span className="w-2 h-2 rounded-full mr-3 bg-transparent group-hover:bg-emerald-400 transition-all"></span>
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Support */}
      <div>
        <h4 className="text-xl font-bold text-white mb-6 flex items-center">
          <FaUsers className="w-5 h-5 text-emerald-400 mr-3" />
          Support
        </h4>
        <ul className="space-y-3">
          {["Help Center", "Discord Community", "Placement Assistance", "Report Bug"].map((item) => (
            <li key={item}>
              <a className="text-gray-400 hover:text-emerald-400 font-medium transition-colors duration-300 flex items-center group">
                <span className="w-2 h-2 rounded-full mr-3 bg-transparent group-hover:bg-emerald-400 transition-all"></span>
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>

    </div>

    {/* Bottom Footer */}
    <div className="pt-12 mt-12 text-center">
  <p className="text-gray-500 text-sm">
    © {new Date().getFullYear()} DNP Learning. All rights reserved.
  </p>
</div>


  </div>
</footer>

    </main>
  );
}
