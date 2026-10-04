
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#FDFCF8] py-20 px-6 border-t border-earthy-olive/20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
        <div className="space-y-6 text-center md:text-left">
          <div className="space-y-2">
            <div className="text-3xl font-serif font-bold text-earthy-olive">Annie Wu.</div>
            <p className="text-earthy-olive font-bold max-w-xs">
              Mercersburg Class of 2027
            </p>
          </div>

        </div>

        <div className="text-center md:text-right">
          <p className="text-earthy-sand font-black uppercase tracking-widest text-[0.65rem]">
            &copy; {new Date().getFullYear()} Annie Wu.
          </p>
        </div>
      </div>
    </footer>
  );
};
