import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { getImages } from '../lib/api';
import MasonryGrid from '../components/MasonryGrid';
import { Loader2, ArrowUpRight, Briefcase, GraduationCap, Calendar, MapPin, Code, Star, CheckCircle2, Download } from 'lucide-react';

const Home = () => {
  const { data: images, isLoading, error } = useQuery({
    queryKey: ['images'],
    queryFn: getImages,
  });

  const experience = [
    {
      title: "Senior Graphic Designer",
      company: "Nayan Press",
      location: "Gopalganj, Bihar",
      period: "Feb 2021 – Present",
      description: "Leading visual strategy and design execution.",
      details: [
        "Political campaign visual strategy & design",
        "Comprehensive commercial branding & identity",
        "End-to-end large format print production",
        "Creative direction & client management"
      ]
    },
    {
      title: "Computer Operator Analyst",
      company: "Lighting Electronics Sector",
      location: "Bihar",
      period: "2017 – 2021",
      description: "Managed complex data operations and financial records.",
      details: [
        "Complex data management & operations",
        "Inventory tracking & Tally ERP financials",
        "High-volume documentation (55 WPM)"
      ]
    }
  ];

  const education = [
    {
      degree: "MCA (Master of Computer Applications)",
      institution: "S.K. University",
      location: "Madhya Pradesh",
      year: "Ongoing",
      status: "current"
    },
    {
      degree: "BCA (Bachelor of Computer Applications)",
      institution: "MMHA&P University",
      location: "Patna, Bihar",
      year: "2025",
      status: "completed"
    },
    {
      degree: "ADCA (Adv. Diploma in Computer App.)",
      institution: "Chitransh Institute",
      location: "Gopalganj",
      year: "2018",
      status: "completed"
    }
  ];

  return (
    <div className="min-h-screen bg-[#fdfbf7] text-slate-900 font-sans selection:bg-[#1a4d2e] selection:text-white">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        
        {/* Header / Hero Section - Grafik Style */}
        <header className="min-h-screen flex flex-col lg:flex-row items-center justify-between py-12 lg:py-0 relative overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
          <div className="hidden lg:block absolute top-20 left-10 opacity-10">
             <div className="flex gap-2">
               {[...Array(5)].map((_, i) => (
                 <div key={i} className="w-1 h-20 bg-slate-900 rotate-45 transform origin-bottom"></div>
               ))}
             </div>
          </div>

          {/* Left Content */}
          <div className="w-full lg:w-1/2 z-10 pt-20 lg:pt-0 space-y-8">
            <div className="flex items-center gap-4">
              <div className="h-0.5 w-12 bg-[#cca43b]"></div>
              <span className="text-sm font-bold tracking-widest text-slate-500 uppercase">Hello</span>
            </div>
            
            <div className="space-y-2">
              <h1 className="text-5xl lg:text-7xl font-bold text-[#cca43b] tracking-tight">
                I'm Rajdeep
              </h1>
              <h2 className="text-5xl lg:text-7xl font-bold text-[#1a4d2e] tracking-tight">
                Graphic Designer
              </h2>
            </div>

            <p className="text-lg text-slate-600 max-w-md leading-relaxed">
              Graphic Designer & Technical Professional crafting digital experiences with precision. Leading visual strategy and design execution.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <a 
                href="mailto:kumarrajdeep1004@gmail.com" 
                className="px-8 py-4 bg-[#1a4d2e] text-white font-bold rounded-sm hover:bg-[#143d24] transition-all shadow-lg shadow-emerald-900/20"
              >
                Let's Talk
              </a>
              <a 
                href="/Rajdeep_CV.pdf" 
                download 
                className="px-8 py-4 bg-transparent border-2 border-[#1a4d2e] text-[#1a4d2e] font-bold rounded-sm hover:bg-[#1a4d2e] hover:text-white transition-all"
              >
                Download CV
              </a>
            </div>
          </div>

          {/* Right Image with Organic Shape */}
          <div className="w-full lg:w-1/2 relative flex justify-center lg:justify-end mt-16 lg:mt-0">
            <div className="relative w-[350px] h-[450px] lg:w-[500px] lg:h-[600px]">
              {/* Dark Green Abstract Shape */}
              <div className="absolute inset-0 bg-[#1a4d2e] rounded-[40%_60%_70%_30%/40%_50%_60%_50%] rotate-3 transform scale-110 -z-10"></div>
              
              {/* Image Container */}
              <div className="w-full h-full overflow-hidden rounded-[40%_60%_70%_30%/40%_50%_60%_50%] border-4 border-white shadow-2xl">
                <img 
                  src="/profile.png" 
                  alt="Kumar Rajdeep" 
                  className="w-full h-full object-cover scale-110 hover:scale-100 transition-transform duration-700"
                />
              </div>

              {/* Decorative Floating Element */}
              <div className="absolute -bottom-10 -left-10 bg-white p-6 shadow-xl rounded-lg hidden md:block animate-bounce duration-[3000ms]">
                <div className="flex items-center gap-3">
                   <div className="bg-[#cca43b] p-3 rounded-full text-white">
                     <Star size={24} fill="currentColor" />
                   </div>
                   <div>
                     <p className="text-xs text-slate-500 font-bold uppercase">Experience</p>
                     <p className="text-xl font-bold text-[#1a4d2e]">4+ Years</p>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* My Journey - Roadmap Structure */}
        <section className="mb-24 md:mb-32">
          <div className="flex items-center justify-center gap-4 mb-20">
             <h2 className="text-4xl font-bold text-[#1a4d2e] text-center">My Journey</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 relative">
            {/* Center Line for Desktop */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-slate-200 -translate-x-1/2"></div>

            {/* Experience Column */}
            <div className="space-y-12">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 bg-[#1a4d2e] rounded-lg text-white">
                  <Briefcase size={24} />
                </div>
                <h3 className="text-xl font-bold text-[#1a4d2e]">Professional Experience</h3>
              </div>

              <div className="relative space-y-12 pl-8 lg:pl-0">
                {/* Mobile Line */}
                <div className="lg:hidden absolute left-0 top-2 bottom-0 w-px bg-slate-200"></div>

                {experience.map((job, index) => (
                  <div key={index} className="relative group">
                    {/* Timeline Dot */}
                    <div className="absolute -left-[37px] lg:left-auto lg:-right-[53px] top-2 w-5 h-5 rounded-full border-4 border-white bg-[#cca43b] shadow-sm z-10 group-hover:scale-125 transition-transform"></div>
                    
                    <div className="bg-white p-6 rounded-sm border-l-4 border-[#1a4d2e] shadow-sm hover:shadow-xl transition-all duration-300">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-4">
                        <div>
                          <h4 className="text-lg font-bold text-[#1a4d2e]">{job.title}</h4>
                          <p className="text-[#cca43b] font-medium">{job.company}</p>
                        </div>
                        <div className="flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-slate-400 bg-slate-50 px-2 py-1 rounded">
                          <Calendar size={12} /> {job.period}
                        </div>
                      </div>
                      
                      <p className="text-slate-600 mb-4 text-sm leading-relaxed">
                        {job.description}
                      </p>
                      
                      <ul className="space-y-2">
                        {job.details.map((detail, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-slate-500">
                            <CheckCircle2 size={16} className="text-[#1a4d2e] shrink-0 mt-0.5" />
                            <span>{detail.replace(/^• /, '')}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Education Column */}
            <div className="space-y-12">
              <div className="flex items-center gap-3 mb-8 lg:justify-end">
                <h3 className="text-xl font-bold text-[#1a4d2e] order-2 lg:order-1">Education History</h3>
                <div className="p-2 bg-[#cca43b] rounded-lg text-white order-1 lg:order-2">
                  <GraduationCap size={24} />
                </div>
              </div>

              <div className="relative space-y-12 pl-8 lg:pl-12">
                {/* Mobile Line */}
                <div className="lg:hidden absolute left-0 top-2 bottom-0 w-px bg-slate-200"></div>

                {education.map((edu, index) => (
                  <div key={index} className="relative group">
                    {/* Timeline Dot */}
                    <div className="absolute -left-[37px] lg:left-auto lg:-left-[53px] top-2 w-5 h-5 rounded-full border-4 border-white bg-[#1a4d2e] shadow-sm z-10 group-hover:scale-125 transition-transform"></div>

                    <div className="bg-white p-6 rounded-sm border-l-4 border-[#cca43b] shadow-sm hover:shadow-xl transition-all duration-300">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="text-lg font-bold text-[#1a4d2e]">{edu.degree}</h4>
                        <span className={`text-xs font-bold px-2 py-1 rounded uppercase tracking-wider ${edu.status === 'current' ? 'bg-[#1a4d2e] text-white' : 'bg-slate-100 text-slate-500'}`}>
                          {edu.year}
                        </span>
                      </div>
                      <p className="text-slate-700 font-medium mb-1">{edu.institution}</p>
                      <p className="text-sm text-slate-400 flex items-center gap-1">
                        <MapPin size={12} /> {edu.location}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Technical Skills - Cards */}
        <section className="mb-24 md:mb-32">
          <div className="bg-[#1a4d2e] rounded-3xl p-8 md:p-16 text-white overflow-hidden relative">
            <div className="absolute top-0 right-0 -mt-16 -mr-16 w-64 h-64 bg-[#cca43b] rounded-full blur-3xl opacity-20"></div>
            <div className="absolute bottom-0 left-0 -mb-16 -ml-16 w-64 h-64 bg-white rounded-full blur-3xl opacity-10"></div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-12">
                <div className="p-2 bg-white/10 rounded-lg backdrop-blur-sm">
                  <Code size={24} className="text-[#cca43b]" />
                </div>
                <h2 className="text-2xl font-bold">Technical Expertise</h2>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                {[
                  { name: 'Photoshop 0.7/CC', level: 'Expert' },
                  { name: 'CorelDraw', level: 'Expert' },
                  { name: 'Digital Graphics', level: 'Advanced' },
                  { name: 'Advanced Excel', level: 'Advanced' },
                  { name: 'Tally ERP', level: 'Intermediate' },
                  { name: 'Python', level: 'Intermediate' },
                  { name: 'Java', level: 'Intermediate' },
                  { name: 'C/C++', level: 'Intermediate' }
                ].map((skill, idx) => (
                  <div key={idx} className="bg-white/5 border border-white/10 rounded-sm p-4 hover:bg-white/10 transition-colors group">
                    <h3 className="font-medium text-white mb-1 group-hover:text-[#cca43b] transition-colors">{skill.name}</h3>
                    <div className="flex items-center gap-1 text-xs text-slate-300">
                      <Star size={10} className="fill-current text-[#cca43b]" /> {skill.level}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section className="pt-12 mb-20">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-8 h-px bg-[#cca43b]"></span>
                <span className="text-[#cca43b] font-bold uppercase tracking-widest text-xs">Portfolio</span>
              </div>
              <h2 className="text-4xl font-bold text-[#1a4d2e]">Selected Works</h2>
            </div>
          </div>

          {isLoading ? (
            <div className="flex justify-center items-center h-64">
              <Loader2 className="w-10 h-10 animate-spin text-[#1a4d2e]" />
            </div>
          ) : error ? (
            <div className="text-center text-red-500 py-10 bg-red-50 rounded-xl">
              Error loading portfolio. Please try again later.
            </div>
          ) : (
            <MasonryGrid images={images} />
          )}
        </section>

      </div>
    </div>
  );
};

export default Home;
