import React from 'react';
import { Home as HomeIcon, Library, Edit3, History, User } from 'lucide-react';
import Onboarding from './views/Onboarding';
import Home from './views/Home';
import { motion, AnimatePresence } from 'motion/react';

type Tab = 'beranda' | 'bank' | 'kerjakan' | 'riwayat' | 'profil';

export default function App() {
  const [showOnboarding, setShowOnboarding] = React.useState(true);
  const [userName, setUserName] = React.useState('Adik');
  const [activeTab, setActiveTab] = React.useState<Tab>('beranda');

  const handleOnboardingComplete = (name: string) => {
    setUserName(name);
    setShowOnboarding(false);
  };

  if (showOnboarding) {
    return <Onboarding onComplete={handleOnboardingComplete} />;
  }

  return (
    <div className="min-h-screen bg-[#F2F2F7] selection:bg-blue-100">
      <main className="max-w-lg mx-auto bg-[#F2F2F7] min-h-screen relative shadow-2xl">
        <AnimatePresence mode="wait">
          {activeTab === 'beranda' && (
            <motion.div
              key="home"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
            >
              <Home userName={userName} />
            </motion.div>
          )}
          
          {activeTab !== 'beranda' && (
             <motion.div
               key="placeholder"
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               className="flex flex-col items-center justify-center min-h-[80vh] text-center p-8"
             >
               <div className="w-20 h-20 bg-gray-200 rounded-full mb-4 animate-pulse" />
               <h2 className="text-xl font-bold text-gray-900 capitalize">{activeTab}</h2>
               <p className="text-gray-500 mt-2">Halaman ini akan segera hadir!</p>
             </motion.div>
          )}
        </AnimatePresence>

        {/* BOTTOM TAB BAR */}
        <nav className="fixed bottom-0 left-0 right-0 max-w-lg mx-auto bg-white/80 backdrop-blur-xl border-t border-gray-200 safe-area-bottom z-40">
          <div className="flex justify-around items-center h-16 px-2">
            {[
              { id: 'beranda', icon: HomeIcon, label: 'Beranda' },
              { id: 'bank', icon: Library, label: 'Bank Soal' },
              { id: 'kerjakan', icon: Edit3, label: 'Kerjakan', fab: true },
              { id: 'riwayat', icon: History, label: 'Riwayat' },
              { id: 'profil', icon: User, label: 'Profil' },
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              
              if (tab.fab) {
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as Tab)}
                    className="relative -top-6"
                  >
                    <div className={`w-14 h-14 rounded-full flex items-center justify-center text-white shadow-lg transition-all ${
                      isActive ? 'bg-blue-600 scale-110 shadow-blue-200' : 'bg-blue-500 hover:bg-blue-600'
                    }`}>
                      <Icon size={24} />
                    </div>
                    <span className={`text-[10px] font-bold mt-1 block text-center ${isActive ? 'text-blue-600' : 'text-gray-400'}`}>
                      {tab.label}
                    </span>
                  </button>
                );
              }

              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as Tab)}
                  className="flex flex-col items-center justify-center flex-1 gap-1 group"
                >
                  <Icon 
                    size={22} 
                    className={`transition-colors ${isActive ? 'text-blue-600' : 'text-gray-400 group-active:text-gray-600'}`} 
                    strokeWidth={isActive ? 2.5 : 2}
                  />
                  <span className={`text-[10px] font-bold transition-colors ${isActive ? 'text-blue-600' : 'text-gray-400'}`}>
                    {tab.label}
                  </span>
                </button>
              );
            })}
          </div>
        </nav>
      </main>
    </div>
  );
}
