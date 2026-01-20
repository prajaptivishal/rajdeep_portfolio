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
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-zinc-200 to-stone-200 opacity-60 blur-2xl"></div>
            <img 
              src="/profile.png" 
              alt="Kumar Rajdeep" 
              className="relative w-full h-full object-cover rounded-full border-4 border-white shadow-2xl ring-1 ring-zinc-200"
            />
          </div>

          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-zinc-900 uppercase">
              Kumar Rajdeep
            </h1>
            <p className="text-xl md:text-2xl text-zinc-500 font-light tracking-wide">
              Graphic Designer & Technical Professional
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 text-zinc-600 text-sm md:text-base font-medium">
            <a href="mailto:kumarrajdeep1004@gmail.com" className="flex items-center gap-2 hover:text-zinc-900 transition-colors bg-white px-5 py-2.5 rounded-full shadow-sm border border-zinc-200 hover:border-zinc-300">
              <Mail className="w-4 h-4" /> kumarrajdeep1004@gmail.com
            </a>
            <span className="flex items-center gap-2 bg-white px-5 py-2.5 rounded-full shadow-sm border border-zinc-200">
              <Phone className="w-4 h-4" /> 7033682250
            </span>
            <span className="flex items-center gap-2 bg-white px-5 py-2.5 rounded-full shadow-sm border border-zinc-200">
              <MapPin className="w-4 h-4" /> Gopalganj, Bihar
            </span>
          </div>

          <div className="flex justify-center pt-6">
            <a 
              href="/Rajdeep_CV.pdf" 
              download 
              className="inline-flex items-center gap-2 px-8 py-4 bg-zinc-900 text-white rounded-full font-semibold hover:bg-zinc-800 transition-all transform hover:scale-105 shadow-xl hover:shadow-2xl"
            >
              <Download className="w-4 h-4" /> Download Resume
            </a>
          </div>
        </div>

        {/* Summary */}
        <div className="max-w-4xl mx-auto bg-white p-10 rounded-3xl shadow-sm border border-zinc-100">
          <p className="text-zinc-600 leading-relaxed text-lg text-center font-medium">
            Highly skilled Graphic Designer and Technical Professional with over 7 years of experience in computer operations and 5+ years specializing in advanced digital design. Proven expertise in high-impact visual communication, ranging from political campaigns to commercial branding, combined with a strong academic background in Computer Applications (MCA/BCA).
          </p>
        </div>

        {/* Details Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          
          {/* Experience */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-zinc-800 flex items-center gap-3 pb-2 border-b border-zinc-200">
              <div className="p-2 bg-zinc-100 rounded-lg text-zinc-600">
                <Briefcase className="w-5 h-5" />
              </div>
              Experience
            </h3>
            
            <div className="space-y-4">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-zinc-100 hover:shadow-md transition-all group">
                <div className="flex justify-between items-start mb-3">
                  <h4 className="text-xl font-bold text-zinc-800 group-hover:text-zinc-600 transition-colors">Senior Graphic Designer</h4>
                  <span className="text-sm font-semibold text-zinc-500 bg-zinc-50 px-3 py-1 rounded-full border border-zinc-100">Feb 2021 – Present</span>
                </div>
                <p className="text-zinc-600 mb-4 font-medium">Nayan Press • Gopalganj, Bihar</p>
                <ul className="list-disc list-inside text-zinc-500 space-y-2 text-sm leading-relaxed">
                  <li>Specialized in designing high-visibility political banners, hoardings, and social media posters.</li>
                  <li>Created comprehensive branding materials including menus, logos, and advertisement posters.</li>
                  <li>Managed end-to-end design-to-print workflow for large format printing.</li>
                  <li>Provided creative direction and managed client relationships.</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm border border-zinc-100 hover:shadow-md transition-all group">
                <div className="flex justify-between items-start mb-3">
                  <h4 className="text-xl font-bold text-zinc-800 group-hover:text-zinc-600 transition-colors">Computer Operator Analyst</h4>
                  <span className="text-sm font-semibold text-zinc-500 bg-zinc-50 px-3 py-1 rounded-full border border-zinc-100">2017 – 2021</span>
                </div>
                <p className="text-zinc-600 mb-4 font-medium">Lighting Electronics Sector • Bihar, India</p>
                <ul className="list-disc list-inside text-zinc-500 space-y-2 text-sm leading-relaxed">
                  <li>Managed complex data entry tasks and back-office operations.</li>
                  <li>Handled inventory tracking and financial records using Tally.</li>
                  <li>Maintained high-performance typing speed (55 WPM).</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right Column: Education & Skills */}
          <div className="space-y-8">
            {/* Education */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-zinc-800 flex items-center gap-3 pb-2 border-b border-zinc-200">
                <div className="p-2 bg-zinc-100 rounded-lg text-zinc-600">
                  <GraduationCap className="w-5 h-5" />
                </div>
                Education
              </h3>
              
              <div className="space-y-4">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-zinc-100 flex justify-between items-center group hover:shadow-md transition-all">
                  <div>
                    <h4 className="text-lg font-bold text-zinc-800 group-hover:text-zinc-600 transition-colors">MCA</h4>
                    <p className="text-zinc-500 text-sm">S.K. University, MP</p>
                  </div>
                  <span className="text-xs font-semibold text-zinc-400 bg-zinc-50 px-3 py-1 rounded-full border border-zinc-100">Ongoing</span>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-sm border border-zinc-100 flex justify-between items-center group hover:shadow-md transition-all">
                  <div>
                    <h4 className="text-lg font-bold text-zinc-800 group-hover:text-zinc-600 transition-colors">BCA</h4>
                    <p className="text-zinc-500 text-sm">MMHA&P University, Patna</p>
                  </div>
                  <span className="text-xs font-semibold text-zinc-400 bg-zinc-50 px-3 py-1 rounded-full border border-zinc-100">2025</span>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-sm border border-zinc-100 flex justify-between items-center group hover:shadow-md transition-all">
                  <div>
                    <h4 className="text-lg font-bold text-zinc-800 group-hover:text-zinc-600 transition-colors">ADCA</h4>
                    <p className="text-zinc-500 text-sm">Chitransh Institute</p>
                  </div>
                  <span className="text-xs font-semibold text-zinc-400 bg-zinc-50 px-3 py-1 rounded-full border border-zinc-100">2018</span>
                </div>
              </div>
            </div>

            {/* Skills */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-zinc-800 flex items-center gap-3 pb-2 border-b border-zinc-200">
                <div className="p-2 bg-zinc-100 rounded-lg text-zinc-600">
                  <Code className="w-5 h-5" />
                </div>
                Technical Skills
              </h3>
              
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-zinc-100">
                <div className="flex flex-wrap gap-2">
                  {['Photoshop 0.7/CC', 'CorelDraw', 'Digital Graphics', 'Advanced Excel', 'Tally ERP', 'Python', 'Java', 'C/C++', 'MS Office Suite'].map((skill) => (
                    <span key={skill} className="px-4 py-2 bg-zinc-50 text-zinc-700 rounded-lg text-sm font-medium border border-zinc-100 hover:bg-zinc-100 hover:border-zinc-200 transition-colors cursor-default">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Languages & Hobbies */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-zinc-800 flex items-center gap-3 pb-2 border-b border-zinc-200">
                <div className="p-2 bg-zinc-100 rounded-lg text-zinc-600">
                  <Globe className="w-5 h-5" />
                </div>
                More Info
              </h3>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-zinc-100">
                  <h4 className="font-semibold text-zinc-800 mb-2">Languages</h4>
                  <p className="text-zinc-500 text-sm">Hindi (Native), English (Professional)</p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-zinc-100">
                  <h4 className="font-semibold text-zinc-800 mb-2">Hobbies</h4>
                  <p className="text-zinc-500 text-sm">Cricket, Internet Research, Design Trends</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Portfolio Header */}
      <div className="text-center mb-12 space-y-4">
        <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 tracking-tight">Featured Work</h2>
        <p className="text-zinc-500 max-w-2xl mx-auto text-lg">
          A showcase of my recent design projects. Click on any image to view full size.
        </p>
      </div>

      {/* Portfolio Grid */}
      {isLoading ? (
        <div className="flex justify-center items-center h-64">
          <Loader2 className="w-10 h-10 animate-spin text-zinc-400" />
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