import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { getImages } from '../lib/api';
import MasonryGrid from '../components/MasonryGrid';
import { Loader2, Download, Mail, Phone, MapPin, Briefcase, GraduationCap, Code, Globe } from 'lucide-react';

const Home = () => {
  const { data: images, isLoading, error } = useQuery({
    queryKey: ['images'],
    queryFn: getImages,
  });

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      {/* Hero / Resume Section */}
      <div className="mb-24 space-y-16">
        {/* Header */}
        <div className="text-center space-y-8 pt-10">
          {/* Profile Image */}
          <div className="relative mx-auto w-32 h-32 md:w-48 md:h-48 mb-8">
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-100 to-purple-100 opacity-60 blur-2xl"></div>
            <img 
              src="/profile.png" 
              alt="Kumar Rajdeep" 
              className="relative w-full h-full object-cover rounded-full border-4 border-white shadow-xl ring-1 ring-slate-100"
            />
          </div>

          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-r from-slate-900 to-slate-600 bg-clip-text text-transparent uppercase">
              Kumar Rajdeep
            </h1>
            <p className="text-xl md:text-2xl text-slate-500 font-light tracking-wide">
              Graphic Designer & Technical Professional
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 text-slate-500 text-sm md:text-base font-medium">
            <a href="mailto:kumarrajdeep1004@gmail.com" className="flex items-center gap-2 hover:text-blue-600 transition-colors bg-white px-4 py-2 rounded-full shadow-sm border border-slate-100">
              <Mail className="w-4 h-4" /> kumarrajdeep1004@gmail.com
            </a>
            <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-slate-100">
              <Phone className="w-4 h-4" /> 7033682250
            </span>
            <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-slate-100">
              <MapPin className="w-4 h-4" /> Gopalganj, Bihar
            </span>
          </div>

          <div className="flex justify-center pt-6">
            <a 
              href="/Rajdeep_CV.pdf" 
              download 
              className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 text-white rounded-full font-semibold hover:bg-slate-800 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <Download className="w-4 h-4" /> Download Resume
            </a>
          </div>
        </div>

        {/* Summary */}
        <div className="max-w-4xl mx-auto bg-white p-10 rounded-3xl shadow-sm border border-slate-100">
          <p className="text-slate-600 leading-relaxed text-lg text-center font-medium">
            Highly skilled Graphic Designer and Technical Professional with over 7 years of experience in computer operations and 5+ years specializing in advanced digital design. Proven expertise in high-impact visual communication, ranging from political campaigns to commercial branding, combined with a strong academic background in Computer Applications (MCA/BCA).
          </p>
        </div>

        {/* Details Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          
          {/* Experience */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-slate-800 flex items-center gap-3 pb-2 border-b border-slate-200">
              <div className="p-2 bg-blue-50 rounded-lg text-blue-600">
                <Briefcase className="w-5 h-5" />
              </div>
              Experience
            </h3>
            
            <div className="space-y-4">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-all group">
                <div className="flex justify-between items-start mb-3">
                  <h4 className="text-xl font-bold text-slate-800 group-hover:text-blue-600 transition-colors">Senior Graphic Designer</h4>
                  <span className="text-sm font-semibold text-slate-500 bg-slate-50 px-3 py-1 rounded-full">Feb 2021 – Present</span>
                </div>
                <p className="text-slate-600 mb-4 font-medium">Nayan Press • Gopalganj, Bihar</p>
                <ul className="list-disc list-inside text-slate-500 space-y-2 text-sm leading-relaxed">
                  <li>Specialized in designing high-visibility political banners, hoardings, and social media posters.</li>
                  <li>Created comprehensive branding materials including menus, logos, and advertisement posters.</li>
                  <li>Managed end-to-end design-to-print workflow for large format printing.</li>
                  <li>Provided creative direction and managed client relationships.</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-all group">
                <div className="flex justify-between items-start mb-3">
                  <h4 className="text-xl font-bold text-slate-800 group-hover:text-blue-600 transition-colors">Computer Operator Analyst</h4>
                  <span className="text-sm font-semibold text-slate-500 bg-slate-50 px-3 py-1 rounded-full">2017 – 2021</span>
                </div>
                <p className="text-slate-600 mb-4 font-medium">Lighting Electronics Sector • Bihar, India</p>
                <ul className="list-disc list-inside text-slate-500 space-y-2 text-sm leading-relaxed">
                  <li>Managed complex data entry tasks and back-office operations.</li>
                  <li>Handled inventory tracking and financial records using Tally ERP.</li>
                  <li>Maintained high-performance environment with 55 WPM typing speed.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Education & Skills */}
          <div className="space-y-10">
            {/* Education */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-slate-800 flex items-center gap-3 pb-2 border-b border-slate-200">
                <div className="p-2 bg-purple-50 rounded-lg text-purple-600">
                  <GraduationCap className="w-5 h-5" />
                </div>
                Education
              </h3>
              <div className="grid gap-4">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-all">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-bold text-slate-800">MCA (Master of Computer Applications)</span>
                    <span className="text-xs font-bold text-purple-600 bg-purple-50 px-2 py-1 rounded">Ongoing</span>
                  </div>
                  <p className="text-slate-500 text-sm">S.K. University, MP</p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-all">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-bold text-slate-800">BCA</span>
                    <span className="text-xs font-bold text-purple-600 bg-purple-50 px-2 py-1 rounded">2025</span>
                  </div>
                  <p className="text-slate-500 text-sm">MMHA&P University, Patna (87.60%)</p>
                </div>
              </div>
            </div>

            {/* Skills */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-slate-800 flex items-center gap-3 pb-2 border-b border-slate-200">
                <div className="p-2 bg-emerald-50 rounded-lg text-emerald-600">
                  <Code className="w-5 h-5" />
                </div>
                Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {['Photoshop 0.7/CC', 'Digital Graphics', 'Advanced Excel', 'Tally ERP', 'Typing (55 WPM)', 'Creative Design', 'Team Leadership', 'Client Relations'].map((skill) => (
                  <span key={skill} className="px-4 py-2 bg-white text-slate-600 rounded-lg text-sm font-medium border border-slate-200 shadow-sm hover:border-emerald-200 hover:text-emerald-700 hover:shadow-md transition-all cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Hobbies */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-slate-800 flex items-center gap-3 pb-2 border-b border-slate-200">
                <div className="p-2 bg-orange-50 rounded-lg text-orange-600">
                  <Globe className="w-5 h-5" />
                </div>
                Hobbies & Interests
              </h3>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                <p className="text-slate-600 font-medium">
                  Cricket, Internet Research, Exploring Graphic Trends
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Portfolio Header */}
      <div className="border-t border-slate-200 pt-16 mb-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-slate-900">
          Selected Works
        </h2>
        <p className="text-slate-500 max-w-2xl mx-auto">
          A showcase of my recent design projects. Click on any image to view full size.
        </p>
      </div>

      {/* Portfolio Grid */}
      {isLoading ? (
        <div className="flex justify-center items-center h-64">
          <Loader2 className="w-10 h-10 animate-spin text-slate-400" />
        </div>
      ) : error ? (
        <div className="text-center bg-red-50 text-red-600 py-10 rounded-xl border border-red-100">
          Error loading portfolio. Please try again later.
        </div>
      ) : (
        <MasonryGrid images={images} />
      )}
    </div>
  );
};

export default Home;