import React from 'react';
import logo from '../assets/logo-text.png'

const footer = () => {
    return (
        <footer className="w-full bg-white border-t border-gray-100 py-12 text-slate-600 text-sm font-sans">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
          
          <div className="md:col-span-2 pr-4 space-y-4">
            <div className="flex items-center gap-2">
              
            
              <img 
                src={logo} 
                alt="Dev Stack Logo" 
                className="h-8 w-auto object-contain" 
              />
            </div>
            <p className="text-slate-500 text-xs leading-relaxed max-w-xs pt-1">
              Curated tools, technologies, and resources for developers building modern software.
            </p>
            <div className="flex gap-4 pt-2 text-xs font-semibold text-slate-700">
              <a href="#" className="hover:text-slate-900 transition-colors">GitHub</a>
              <a href="#" className="hover:text-slate-900 transition-colors">Twitter</a>
              <a href="#" className="hover:text-slate-900 transition-colors">LinkedIn</a>
            </div>
          </div>
          <div className="space-y-3">
            <h3 className="text-xs font-bold text-slate-900">PRODUCT</h3>
            <ul className="space-y-2 text-xs text-slate-500">
              <li className="cursor-pointer hover:text-slate-900 transition-colors">Home</li>
              <li className="cursor-pointer hover:text-slate-900 transition-colors">Technology</li>
              <li className="cursor-pointer hover:text-slate-900 transition-colors">Project</li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="text-xs font-bold text-slate-900">COMPANY</h3>
            <ul className="space-y-2 text-xs text-slate-500">
              <li className="cursor-pointer hover:text-slate-900 transition-colors">About</li>
              <li className="cursor-pointer hover:text-slate-900 transition-colors">Contact</li>
              <li className="cursor-pointer hover:text-slate-900 transition-colors">Careers</li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="text-xs font-bold text-slate-900">LEGAL</h3>
            <ul className="space-y-2 text-xs text-slate-500">
              <li className="cursor-pointer hover:text-slate-900 transition-colors">Privacy Policy</li>
              <li className="cursor-pointer hover:text-slate-900 transition-colors">Terms of Service</li>
            </ul>
          </div>
        </div>
        <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-400 gap-4">
          <p>© 2026 Dev Stack. All rights reserved.</p>
          <div className="flex gap-4">
            <span className="cursor-pointer hover:text-slate-600 transition-colors">Privacy</span>
            <span className="cursor-pointer hover:text-slate-600 transition-colors">Terms</span>
          </div>
        </div>

      </div>
    </footer>
    );
};

export default footer;