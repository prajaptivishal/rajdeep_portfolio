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
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-indigo-100 selection:text-indigo-900">
      <div className="container mx-auto px-4 md:px-8 py-12 max-w-6xl">
        
        {/* Header / Hero Section */}
        <header className="mb-20 md:mb-32 pt-8 md:pt-20">
          <div className="flex flex-col md:flex-row gap-8 md:items-center justify-between">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-bold tracking-wide uppercase border border-indigo-100">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                </span>
                Available for work
              </div>
              
              <div>
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 mb-2">
                  Kumar Rajdeep
                </h1>
                <p className="text-xl md:text-2xl font-light text-slate-500 max-w-2xl">
                  Graphic Designer & Technical Professional crafting digital experiences with precision.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 pt-4">
                <a 
                  href="mailto:kumarrajdeep1004@gmail.com" 
                  className="px-6 py-3 rounded-xl bg-slate-900 text-white font-medium hover:bg-indigo-600 transition-all shadow-lg shadow-slate-200 hover:shadow-indigo-200 flex items-center gap-2"
                >
                  Contact Me <ArrowUpRight size={18} />
                </a>
                <a 
                  href="/Rajdeep_CV.pdf" 
                  download 
                  className="px-6 py-3 rounded-xl bg-white text-slate-700 border border-slate-200 font-medium hover:border-slate-300 hover:bg-slate-50 transition-all flex items-center gap-2"
                >
                  Download CV <Download className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="relative hidden md:block">
              <div className="w-64 h-64 rounded-2xl overflow-hidden shadow-2xl shadow-indigo-100 rotate-3 border-4 border-white">
                <img 
                  src="/profile.png" 
                  alt="Kumar Rajdeep" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -z-10 -bottom-6 -right-6 w-full h-full bg-indigo-600/10 rounded-2xl -rotate-6"></div>
            </div>
          </div>
        </header>

        {/* My Journey - Roadmap Structure */}
        <section className="mb-24 md:mb-32">
          <div className="flex items-center gap-4 mb-16">
            <div className="h-px bg-slate-200 flex-1"></div>
            <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
              <MapPin className="text-indigo-600" /> My Journey
            </h2>
            <div className="h-px bg-slate-200 flex-1"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 relative">
            {/* Center Line for Desktop */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-slate-200 -translate-x-1/2"></div>

            {/* Experience Column */}
            <div className="space-y-12">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 bg-indigo-50 rounded-lg text-indigo-600">
                  <Briefcase size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-800">Professional Experience</h3>
              </div>

              <div className="relative space-y-12 pl-8 lg:pl-0">
                {/* Mobile Line */}
                <div className="lg:hidden absolute left-0 top-2 bottom-0 w-px bg-slate-200"></div>

                {experience.map((job, index) => (
                  <div key={index} className="relative group">
                    {/* Timeline Dot */}
                    <div className="absolute -left-[37px] lg:left-auto lg:-right-[53px] top-2 w-5 h-5 rounded-full border-4 border-white bg-indigo-600 shadow-sm z-10 group-hover:scale-125 transition-transform"></div>
                    
                    <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-indigo-100/50 transition-all duration-300">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-4">
                        <div>
                          <h4 className="text-lg font-bold text-slate-900">{job.title}</h4>
                          <p className="text-indigo-600 font-medium">{job.company}</p>
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
                            <CheckCircle2 size={16} className="text-indigo-400 shrink-0 mt-0.5" />
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
                <h3 className="text-xl font-bold text-slate-800 order-2 lg:order-1">Education History</h3>
                <div className="p-2 bg-emerald-50 rounded-lg text-emerald-600 order-1 lg:order-2">
                  <GraduationCap size={24} />
                </div>
              </div>

              <div className="relative space-y-12 pl-8 lg:pl-12">
                {/* Mobile Line */}
                <div className="lg:hidden absolute left-0 top-2 bottom-0 w-px bg-slate-200"></div>

                {education.map((edu, index) => (
                  <div key={index} className="relative group">
                    {/* Timeline Dot */}
                    <div className="absolute -left-[37px] lg:left-auto lg:-left-[53px] top-2 w-5 h-5 rounded-full border-4 border-white bg-emerald-500 shadow-sm z-10 group-hover:scale-125 transition-transform"></div>

                    <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-emerald-100/50 transition-all duration-300">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="text-lg font-bold text-slate-900">{edu.degree}</h4>
                        <span className={`text-xs font-bold px-2 py-1 rounded uppercase tracking-wider ${edu.status === 'current' ? 'bg-indigo-50 text-indigo-600' : 'bg-slate-100 text-slate-500'}`}>
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
          <div className="bg-slate-900 rounded-3xl p-8 md:p-16 text-white overflow-hidden relative">
            <div className="absolute top-0 right-0 -mt-16 -mr-16 w-64 h-64 bg-indigo-500 rounded-full blur-3xl opacity-20"></div>
            <div className="absolute bottom-0 left-0 -mb-16 -ml-16 w-64 h-64 bg-emerald-500 rounded-full blur-3xl opacity-20"></div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-12">
                <div className="p-2 bg-white/10 rounded-lg backdrop-blur-sm">
                  <Code size={24} className="text-indigo-300" />
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
                  <div key={idx} className="bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-colors">
                    <h3 className="font-medium text-indigo-100 mb-1">{skill.name}</h3>
                    <div className="flex items-center gap-1 text-xs text-slate-400">
                      <Star size={10} className="fill-current text-indigo-400" /> {skill.level}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section className="pt-12">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-8 h-px bg-indigo-500"></span>
                <span className="text-indigo-600 font-bold uppercase tracking-widest text-xs">Portfolio</span>
              </div>
              <h2 className="text-4xl font-bold text-slate-900">Selected Works</h2>
            </div>
          </div>

          {isLoading ? (
            <div className="flex justify-center items-center h-64">
              <Loader2 className="w-10 h-10 animate-spin text-indigo-600" />
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
