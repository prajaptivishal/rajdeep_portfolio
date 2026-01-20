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
    <div className="container mx-auto px-4 py-8">
      {/* Hero / Resume Section */}
      <div className="mb-20 space-y-12">
        {/* Header */}
        <div className="text-center space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-r from-stone-100 to-stone-400 bg-clip-text text-transparent uppercase">
            Kumar Rajdeep
          </h1>
          <p className="text-xl md:text-2xl text-stone-400 font-light tracking-wide">
            Graphic Designer & Technical Professional
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 text-stone-500 text-sm md:text-base">
            <a href="mailto:kumarrajdeep1004@gmail.com" className="flex items-center gap-2 hover:text-stone-300 transition-colors">
              <Mail className="w-4 h-4" /> kumarrajdeep1004@gmail.com
            </a>
            <span className="flex items-center gap-2">
              <Phone className="w-4 h-4" /> 7033682250
            </span>
            <span className="flex items-center gap-2">
              <MapPin className="w-4 h-4" /> Gopalganj, Bihar
            </span>
          </div>

          <div className="flex justify-center pt-4">
            <a 
              href="/Rajdeep_CV.pdf" 
              download 
              className="inline-flex items-center gap-2 px-6 py-3 bg-stone-100 text-stone-900 rounded-full font-semibold hover:bg-white transition-all transform hover:scale-105"
            >
              <Download className="w-4 h-4" /> Download Resume
            </a>
          </div>
        </div>

        {/* Summary */}
        <div className="max-w-4xl mx-auto bg-stone-900/50 p-8 rounded-2xl border border-stone-800/50 backdrop-blur-sm">
          <p className="text-stone-300 leading-relaxed text-lg text-center">
            Highly skilled Graphic Designer and Technical Professional with over 7 years of experience in computer operations and 5+ years specializing in advanced digital design. Proven expertise in high-impact visual communication, ranging from political campaigns to commercial branding, combined with a strong academic background in Computer Applications (MCA/BCA).
          </p>
        </div>

        {/* Details Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          
          {/* Experience */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-stone-200 flex items-center gap-2 border-b border-stone-800 pb-2">
              <Briefcase className="w-5 h-5 text-stone-500" /> Experience
            </h3>
            
            <div className="space-y-4">
              <div className="bg-stone-900 p-6 rounded-xl border border-stone-800 hover:border-stone-700 transition-colors">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-xl font-semibold text-stone-100">Senior Graphic Designer</h4>
                  <span className="text-sm text-stone-500">Feb 2021 – Present</span>
                </div>
                <p className="text-stone-400 mb-2">Nayan Press • Gopalganj, Bihar</p>
                <ul className="list-disc list-inside text-stone-400 space-y-1 text-sm">
                  <li>Specialized in designing high-visibility political banners, hoardings, and social media posters.</li>
                  <li>Created comprehensive branding materials including menus, logos, and advertisement posters.</li>
                  <li>Managed end-to-end design-to-print workflow for large format printing.</li>
                  <li>Provided creative direction and managed client relationships.</li>
                </ul>
              </div>

              <div className="bg-stone-900 p-6 rounded-xl border border-stone-800 hover:border-stone-700 transition-colors">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-xl font-semibold text-stone-100">Computer Operator Analyst</h4>
                  <span className="text-sm text-stone-500">2017 – 2021</span>
                </div>
                <p className="text-stone-400 mb-2">Lighting Electronics Sector • Bihar, India</p>
                <ul className="list-disc list-inside text-stone-400 space-y-1 text-sm">
                  <li>Managed complex data entry tasks and back-office operations.</li>
                  <li>Handled inventory tracking and financial records using Tally ERP.</li>
                  <li>Maintained high-performance environment with 55 WPM typing speed.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Education & Skills */}
          <div className="space-y-8">
            {/* Education */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-stone-200 flex items-center gap-2 border-b border-stone-800 pb-2">
                <GraduationCap className="w-5 h-5 text-stone-500" /> Education
              </h3>
              <div className="grid gap-4">
                <div className="bg-stone-900 p-4 rounded-xl border border-stone-800">
                  <div className="flex justify-between">
                    <span className="font-semibold text-stone-200">MCA (Master of Computer Applications)</span>
                    <span className="text-stone-500 text-sm">Ongoing</span>
                  </div>
                  <p className="text-stone-400 text-sm">S.K. University, MP</p>
                </div>
                <div className="bg-stone-900 p-4 rounded-xl border border-stone-800">
                  <div className="flex justify-between">
                    <span className="font-semibold text-stone-200">BCA</span>
                    <span className="text-stone-500 text-sm">2025</span>
                  </div>
                  <p className="text-stone-400 text-sm">MMHA&P University, Patna (87.60%)</p>
                </div>
              </div>
            </div>

            {/* Skills */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-stone-200 flex items-center gap-2 border-b border-stone-800 pb-2">
                <Code className="w-5 h-5 text-stone-500" /> Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {['Photoshop 0.7/CC', 'Digital Graphics', 'Advanced Excel', 'Tally ERP', 'Typing (55 WPM)', 'Creative Design', 'Team Leadership', 'Client Relations'].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-stone-800 text-stone-300 rounded-md text-sm border border-stone-700">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Hobbies */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-stone-200 flex items-center gap-2 border-b border-stone-800 pb-2">
                <Globe className="w-5 h-5 text-stone-500" /> Hobbies & Interests
              </h3>
              <p className="text-stone-400">
                Cricket, Internet Research, Exploring Graphic Trends
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Portfolio Header */}
      <div className="border-t border-stone-800 pt-16 mb-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-stone-100">
          Selected Works
        </h2>
        <p className="text-stone-400">
          A showcase of my recent design projects
        </p>
      </div>

      {/* Portfolio Grid */}
      {isLoading ? (
        <div className="flex justify-center items-center h-64">
          <Loader2 className="w-8 h-8 animate-spin text-stone-500" />
        </div>
      ) : error ? (
        <div className="text-center text-red-400 py-10">
          Error loading portfolio. Please try again later.
        </div>
      ) : (
        <MasonryGrid images={images} />
      )}
    </div>
  );
};

export default Home;