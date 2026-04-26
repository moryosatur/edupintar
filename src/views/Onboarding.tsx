import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight } from 'lucide-react';

interface OnboardingProps {
  onComplete: (name: string, grade: string) => void;
}

const STEPS = [
  { id: 'welcome', title: 'Selamat Datang!', subtitle: 'Ayo mulai petualangan belajarmu hari ini.', image: '👋' },
  { id: 'name', title: 'Siapa Namamu?', subtitle: 'Masukkan nama panggilanmu ya.', type: 'input' },
  { id: 'grade', title: 'Kelas Berapa?', subtitle: 'Pilih kelasmu sekarang.', type: 'grid' },
  { id: 'paywall', title: 'Belajar Tanpa Batas', subtitle: 'Dapatkan akses ke semua soal dan fitur premium.', type: 'paywall' },
  { id: 'ready', title: 'Siap Belajar?', subtitle: 'Semua sudah siap! Mari kita mulai.', image: '🚀' },
];

export default function Onboarding({ onComplete }: OnboardingProps) {
  const [currentStep, setCurrentStep] = React.useState(0);
  const [name, setName] = React.useState('');
  const [grade, setGrade] = React.useState('');

  const handleNext = () => {
    if (currentStep < STEPS.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      onComplete(name || 'Adik', grade || 'Kelas 4');
    }
  };

  const step = STEPS[currentStep];

  return (
    <div className="fixed inset-0 bg-white z-50 flex flex-col p-8 safe-area-inset">
      <div className="flex-1 flex flex-col justify-center items-center text-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="w-full max-w-md space-y-6"
          >
            {step.image && (
              <div className="text-8xl mb-8">{step.image}</div>
            )}
            
            <h1 className="text-3xl font-bold text-gray-900 leading-tight">
              {step.title}
            </h1>
            <p className="text-lg text-gray-500">
              {step.subtitle}
            </p>

            {step.id === 'name' && (
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Nama kamu..."
                className="w-full p-4 bg-gray-100 rounded-2xl text-xl focus:ring-2 focus:ring-blue-500 outline-none"
                autoFocus
              />
            )}

            {step.id === 'grade' && (
              <div className="grid grid-cols-2 gap-4">
                {['Kelas 1', 'Kelas 2', 'Kelas 3', 'Kelas 4', 'Kelas 5', 'Kelas 6'].map((g) => (
                  <button
                    key={g}
                    onClick={() => setGrade(g)}
                    className={`p-4 rounded-2xl border-2 transition-all ${
                      grade === g
                        ? 'border-blue-500 bg-blue-50 text-blue-600 shadow-sm'
                        : 'border-gray-200 hover:border-blue-200'
                    }`}
                  >
                    {g}
                  </button>
                ))}
              </div>
            )}

            {step.id === 'paywall' && (
              <div className="space-y-4">
                <div className="p-6 bg-blue-600 rounded-3xl text-white text-left relative overflow-hidden ring-4 ring-blue-100">
                  <div className="relative z-10">
                    <p className="text-sm font-bold opacity-80 mb-2 uppercase tracking-wider">Berlangganan Sekarang</p>
                    <h3 className="text-2xl font-bold mb-1">Cerdas Premium</h3>
                    <p className="text-4xl font-black">Rp 29.000<span className="text-lg font-normal opacity-80">/bln</span></p>
                    <ul className="mt-4 space-y-2 opacity-90">
                      <li>✅ Akses Semua Bank Soal</li>
                      <li>✅ Pembahasan Lengkap</li>
                      <li>✅ Tanpa Iklan</li>
                    </ul>
                  </div>
                  <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
                </div>
                <button className="w-full text-gray-400 text-sm font-medium py-2">
                  Mungkin nanti
                </button>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="pt-8">
        <button
          onClick={handleNext}
          disabled={step.id === 'name' && !name || step.id === 'grade' && !grade}
          className="w-full bg-blue-600 text-white p-5 rounded-[22px] font-bold text-lg flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg active:scale-95 transition-all"
        >
          {currentStep === STEPS.length - 1 ? 'Mulai Belajar' : 'Lanjut'}
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
}
