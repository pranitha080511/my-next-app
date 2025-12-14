"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GraduationCap, Users, Wrench, Briefcase } from "lucide-react";
import { Code, Brain, Cloud } from "lucide-react";


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
          <h2 className="text-3xl md:text-4xl font-bold mb-6 ">
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
          <h2 className="text-3xl text-center md:text-4xl font-bold mb-6 text-white">
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
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
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




    </main>
  );
}
