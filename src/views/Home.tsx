import React from 'react';
import { motion } from 'motion/react';
import * as Icons from 'lucide-react';
import { SUBJECTS, MENU_ITEMS, RECOMMENDATIONS } from '../constants';

interface HomeProps {
  userName: string;
}

export default function Home({ userName }: HomeProps) {
  return (
    <div className="pb-24 pt-4 px-4 space-y-8 max-w-lg mx-auto">
      {/* HEADER */}
      <header className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden ring-2 ring-blue-50 p-0.5">
            <img
              src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"
              alt="Avatar"
              className="w-full h-full object-cover rounded-full"
              referrerPolicy="no-referrer"
            />
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-900 tracking-tight">
              Hai, {userName}! 👋
            </h2>
            <p className="text-sm font-medium text-gray-500">
              Semangat belajar hari ini!
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button className="w-10 h-10 rounded-full bg-white shadow-sm border border-gray-100 flex items-center justify-center text-gray-600 active:scale-95 transition-transform">
            <Icons.Bell size={20} />
          </button>
          <div className="bg-white px-3 py-1.5 rounded-full shadow-sm border border-gray-100 flex items-center gap-1.5">
            <span className="text-amber-400">⭐</span>
            <span className="text-sm font-bold text-gray-700">120</span>
          </div>
        </div>
      </header>

      {/* HERO BANNER */}
      <section className="relative h-48 rounded-[32px] overflow-hidden bg-gradient-to-br from-blue-500 to-blue-700 p-6 flex flex-col justify-center group">
        <div className="absolute right-0 top-0 h-full w-1/2 overflow-hidden pointer-events-none">
          <img 
            src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=800" 
            alt="Hero Illustration" 
            className="h-full w-full object-cover opacity-60 mix-blend-overlay group-hover:scale-110 transition-transform duration-700"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative z-10 max-w-[60%] space-y-2">
          <h1 className="text-white text-lg font-bold leading-tight">
            Belajar, Latihan, Ulangan, Quiz, dan Ujian TKA
          </h1>
          <p className="text-blue-100 text-[11px] leading-snug">
            Semua untuk bantu kamu belajar lebih mudah dan seru.
          </p>
          <button className="mt-2 bg-white text-blue-600 px-4 py-2 rounded-full text-xs font-bold shadow-md active:scale-95 transition-transform">
            Mulai Sekarang
          </button>
        </div>
        {/* Pagination Dots indicator */}
        <div className="absolute bottom-4 left-6 flex gap-1.5">
          <span className="w-4 h-1.5 rounded-full bg-white"></span>
          <span className="w-1.5 h-1.5 rounded-full bg-white/40"></span>
          <span className="w-1.5 h-1.5 rounded-full bg-white/40"></span>
        </div>
      </section>

      {/* MENU GRID */}
      <section className="space-y-4">
        <h3 className="text-lg font-bold text-gray-900 tracking-tight">Menu Utama</h3>
        <div className="grid grid-cols-5 gap-2">
          {MENU_ITEMS.map((item) => {
            const IconComponent = Icons[item.icon as keyof typeof Icons] as any;
            return (
              <button key={item.id} className="flex flex-col items-center gap-2 group">
                <div className={`w-full aspect-square rounded-2xl bg-white shadow-sm border border-gray-100 flex items-center justify-center p-3 group-active:scale-90 transition-transform`}>
                  <div className={`w-full h-full rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center text-white shadow-sm`}>
                    <IconComponent size={20} strokeWidth={2.5} />
                  </div>
                </div>
                <span className="text-[10px] font-bold text-gray-700 text-center leading-tight">
                  {item.title}
                </span>
              </button>
            );
          })}
        </div>
      </section>

      {/* PROGRESS SECTION */}
      <section className="bg-white p-5 rounded-[28px] shadow-sm border border-gray-100 space-y-4">
        <div className="flex justify-between items-center">
          <h3 className="font-bold text-gray-900">Progress Belajarmu</h3>
          <button className="text-xs font-bold text-blue-600">Lihat Detail &gt;</button>
        </div>
        
        <div className="flex items-center gap-6">
          <div className="relative w-24 h-24 flex items-center justify-center">
            <svg className="w-full h-full -rotate-90">
              <circle
                cx="48"
                cy="48"
                r="40"
                fill="none"
                stroke="#F3F4F6"
                strokeWidth="8"
              />
              <circle
                cx="48"
                cy="48"
                r="40"
                fill="none"
                stroke="#3B82F6"
                strokeWidth="8"
                strokeDasharray="251.2"
                strokeDashoffset="62.8"
                strokeLinecap="round"
              />
            </svg>
            <div className="absolute flex flex-col items-center">
              <span className="text-xl font-black text-gray-900">75%</span>
              <span className="text-[8px] font-bold text-blue-500 uppercase">Hebat! 🚀</span>
            </div>
          </div>
          
          <div className="flex-1 space-y-3">
            <div className="space-y-1">
              <p className="text-[11px] text-gray-500 font-medium">Kamu sudah mengerjakan</p>
              <div className="flex items-baseline gap-1">
                <span className="text-xl font-black text-gray-900">15</span>
                <span className="text-xs font-bold text-gray-400 uppercase tracking-tighter">dari 20 latihan</span>
              </div>
            </div>
            
            <div className="w-full h-2.5 bg-gray-100 rounded-full overflow-hidden">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: '75%' }}
                className="h-full bg-blue-500 rounded-full"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 pt-2">
          <div className="bg-orange-50 p-3 rounded-2xl flex items-center gap-3">
             <span className="text-2xl">🔥</span>
             <div>
               <p className="text-xl font-black text-gray-900 leading-none">7</p>
               <p className="text-[10px] font-bold text-orange-600 uppercase tracking-tight">Hari Beruntun</p>
             </div>
          </div>
          <div className="bg-amber-50 p-3 rounded-2xl flex items-center gap-3">
             <span className="text-2xl">⭐</span>
             <div>
               <p className="text-xl font-black text-gray-900 leading-none">120</p>
               <p className="text-[10px] font-bold text-amber-600 uppercase tracking-tight">Poin Terkumpul</p>
             </div>
          </div>
        </div>
      </section>

      {/* SUBJECT LIST */}
      <section className="space-y-4">
        <div className="flex justify-between items-center px-2">
          <h3 className="font-bold text-gray-900">Pilih Mata Pelajaran</h3>
          <button className="text-xs font-bold text-blue-600">Lihat Semua &gt;</button>
        </div>
        <div className="flex gap-4 overflow-x-auto pb-4 px-2 no-scrollbar">
          {SUBJECTS.map((subject) => {
            const IconComponent = Icons[subject.icon as keyof typeof Icons] as any;
            return (
              <button key={subject.id} className="flex flex-col items-center gap-2 flex-shrink-0 w-16">
                <div className={`w-16 h-16 rounded-2xl ${subject.color} flex items-center justify-center text-white shadow-md active:scale-95 transition-transform`}>
                  <IconComponent size={24} />
                </div>
                <span className="text-[10px] font-bold text-gray-700 text-center leading-tight">
                  {subject.name}
                </span>
              </button>
            );
          })}
        </div>
      </section>

      {/* RECOMMENDATION SECTION */}
      <section className="space-y-4">
        <div className="flex justify-between items-center px-2">
          <h3 className="font-bold text-gray-900">Rekomendasi Untukmu</h3>
          <button className="text-xs font-bold text-blue-600">Lihat Semua &gt;</button>
        </div>
        <div className="grid grid-cols-1 gap-4 px-2">
          {RECOMMENDATIONS.map((rec) => (
            <div 
              key={rec.id} 
              className="bg-white p-4 rounded-3xl border border-gray-100 shadow-sm flex items-center gap-4 hover:border-blue-100 transition-colors"
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-xs font-bold ${rec.color.split(' ')[0]}`}>
                 <span className="text-2xl">
                   {rec.type === 'LATIHAN' && '✏️'}
                   {rec.type === 'ULANGAN' && '📑'}
                   {rec.type === 'QUIZ' && '💡'}
                   {rec.type === 'TKA' && '🎓'}
                 </span>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className={`text-[9px] font-black uppercase px-2 py-0.5 rounded-full ${rec.color}`}>
                    {rec.type}
                  </span>
                  <span className="text-gray-400 text-[10px]">•</span>
                  <span className="text-gray-500 text-[10px] font-bold">{rec.grade}</span>
                </div>
                <h4 className="font-bold text-gray-900 text-sm">{rec.title}</h4>
                <p className="text-[10px] text-gray-400 font-medium">{rec.questions} Soal</p>
              </div>
              <Icons.ChevronRight className="text-gray-300" size={20} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
