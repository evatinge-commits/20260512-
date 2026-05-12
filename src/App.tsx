/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Home, 
  BookOpen, 
  Gamepad2, 
  PenTool, 
  ChevronRight, 
  Volume2, 
  Star,
  CheckCircle2,
  XCircle,
  ArrowLeft,
  Eraser
} from 'lucide-react';
import { ALL_LESSONS } from './data/lessons';
import { Lesson, ViewState, ChineseCharacter, WordTerm } from './types';

// --- Components ---

const CanvasDrawing = ({ onClear, canvasRef }: { onClear?: () => void, canvasRef: React.RefObject<HTMLCanvasElement | null> }) => {
  const [isDrawing, setIsDrawing] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * (window.devicePixelRatio || 1);
    canvas.height = rect.height * (window.devicePixelRatio || 1);
    ctx.scale(window.devicePixelRatio || 1, window.devicePixelRatio || 1);
    
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.lineWidth = 6;
    ctx.strokeStyle = '#2D3436';
  }, [canvasRef]);

  const getPos = (e: React.MouseEvent | React.TouchEvent) => {
    const canvas = canvasRef.current;
    if (!canvas) return { x: 0, y: 0 };
    const rect = canvas.getBoundingClientRect();
    const clientX = 'touches' in e ? e.touches[0].clientX : (e as React.MouseEvent).clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : (e as React.MouseEvent).clientY;
    return { x: clientX - rect.left, y: clientY - rect.top };
  };

  const startDrawing = (e: React.MouseEvent | React.TouchEvent) => {
    setIsDrawing(true);
    const { x, y } = getPos(e);
    const ctx = canvasRef.current?.getContext('2d');
    if (ctx) { ctx.beginPath(); ctx.moveTo(x, y); }
  };

  const draw = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDrawing) return;
    const { x, y } = getPos(e);
    const ctx = canvasRef.current?.getContext('2d');
    if (ctx) { ctx.lineTo(x, y); ctx.stroke(); }
    if (e.cancelable) e.preventDefault();
  };

  return (
    <div className="relative w-full aspect-square bg-white tianzige rounded-3xl shadow-inner cursor-crosshair touch-none">
      <canvas
        ref={canvasRef}
        onMouseDown={startDrawing} onMouseMove={draw} onMouseUp={() => setIsDrawing(false)} onMouseLeave={() => setIsDrawing(false)}
        onTouchStart={startDrawing} onTouchMove={draw} onTouchEnd={() => setIsDrawing(false)}
        className="w-full h-full"
      />
      <button 
        type="button"
        onClick={() => {
          const ctx = canvasRef.current?.getContext('2d');
          if (ctx && canvasRef.current) ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
          onClear?.();
        }}
        className="absolute bottom-4 right-4 w-10 h-10 bg-gray-100 text-gray-500 rounded-xl flex items-center justify-center active:bg-gray-200 transition-colors shadow-sm"
      >
        <Eraser size={20} />
      </button>
    </div>
  );
};

const Layout = ({ children, activeView, setView }: { children: React.ReactNode, activeView: string, setView: (v: ViewState) => void }) => {
  return (
    <div className="flex flex-col h-screen max-w-md mx-auto relative shadow-2xl bg-[#FFF9F9]">
      <div className="pt-8 pb-4 px-6 bg-brand-pink/20 rounded-b-[40px] flex justify-between items-center shadow-sm">
        <div>
          <h1 className="text-2xl font-bold text-gray-700 tracking-tight flex items-center gap-2">
            小浪花语文 <span className="rotate-12">🌸</span>
          </h1>
          <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mt-1">Grade 2 · Lower Term</p>
        </div>
        <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm border-2 border-brand-yellow/30">
          <Star className="text-brand-yellow fill-brand-yellow" size={24} />
        </div>
      </div>

      <main className="flex-1 overflow-y-auto px-6 py-6 no-scrollbar pb-24">
        {children}
      </main>

      <nav className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md border border-white flex justify-around items-center h-18 rounded-[32px] shadow-xl">
        {[
          { icon: Home, label: '主页', view: 'home' as ViewState, color: 'text-brand-pink' },
          { icon: BookOpen, label: '探索', view: 'learn' as ViewState, color: 'text-brand-blue' },
          { icon: Gamepad2, label: '闯关', view: 'games' as ViewState, color: 'text-brand-purple' },
          { icon: PenTool, label: '听写', view: 'test' as ViewState, color: 'text-brand-green' },
        ].map((item) => (
          <button
            key={item.view}
            onClick={() => setView(item.view)}
            className={`flex flex-col items-center justify-center space-y-1 w-14 btn-active transition-all ${
              activeView === item.view ? item.color : 'text-gray-300'
            }`}
          >
            <item.icon size={activeView === item.view ? 24 : 20} strokeWidth={activeView === item.view ? 3 : 2} />
            <span className="text-[9px] font-bold tracking-wider">{item.label}</span>
            {activeView === item.view && (
              <motion.div layoutId="navIndicator" className={`w-1 h-1 rounded-full ${item.color.replace('text-', 'bg-')} mt-0.5`} />
            )}
          </button>
        ))}
      </nav>
    </div>
  );
};

// --- App Main ---

export default function App() {
  const [view, setView] = useState<ViewState | 'homophones'>('home');
  const [selectedLesson, setSelectedLesson] = useState<Lesson>(ALL_LESSONS[0]);
  const [masteredCount, setMasteredCount] = useState(0);

  useEffect(() => {
    const saved = localStorage.getItem('mastered_count');
    if (saved) setMasteredCount(parseInt(saved));
  }, []);

  return (
    <Layout activeView={view === 'homophones' ? 'games' : view} setView={setView}>
      <AnimatePresence mode="wait">
        {view === 'home' && (
          <motion.div key="home" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="space-y-6">
            <div className="bg-gradient-to-br from-brand-pink to-[#FF8FA3] p-6 rounded-[32px] text-white shadow-lg relative overflow-hidden">
              <div className="relative z-10">
                <p className="text-sm opacity-90 font-medium">今日掌握进度</p>
                <div className="flex items-baseline space-x-2 mt-2">
                  <span className="text-4xl font-bold">{masteredCount}</span>
                  <span className="text-sm opacity-80 italic">/ 500 个生字</span>
                </div>
                <div className="w-full bg-white/20 h-2 rounded-full mt-4 overflow-hidden">
                  <motion.div initial={{ width: 0 }} animate={{ width: `${(masteredCount / 500) * 100}%` }} className="h-full bg-white rounded-full shadow-sm" />
                </div>
              </div>
              <div className="absolute -right-4 -bottom-4 opacity-10"><BookOpen size={120} /></div>
            </div>

            <div className="space-y-4">
              <h2 className="text-lg font-bold text-gray-700 flex items-center space-x-2">
                <span>同步课文目录</span>
                <span className="text-[10px] bg-brand-yellow px-2 py-0.5 rounded-full text-amber-800 font-bold border border-amber-200">二下</span>
              </h2>
              <div className="grid gap-3">
                {ALL_LESSONS.map((lesson, idx) => (
                  <button
                    key={lesson.id}
                    onClick={() => { setSelectedLesson(lesson); setView('learn'); }}
                    className="w-full bg-white p-4 rounded-3x border-2 border-transparent hover:border-brand-pink/20 transition-all flex items-center justify-between shadow-[0_4px_12px_rgba(0,0,0,0.02)] btn-active group"
                  >
                    <div className="flex items-center space-x-4 text-left">
                      <div className={`w-10 h-10 rounded-2xl flex items-center justify-center font-bold transition-all shadow-sm ${
                        ['bg-brand-pink/10 text-brand-pink', 'bg-brand-blue/10 text-brand-blue', 'bg-brand-green/10 text-brand-green', 'bg-brand-purple/10 text-brand-purple'][idx % 4]
                      }`}>
                        {lesson.id}
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-600 group-hover:text-gray-800 transition-colors uppercase tracking-tight">{lesson.title}</h3>
                        <p className="text-[10px] text-gray-400 mt-0.5 font-medium tracking-wide">
                          含 {lesson.type1Chars.length + lesson.type2Chars.length} 个生字 · {lesson.vocabulary.length} 个词语
                        </p>
                      </div>
                    </div>
                    <ChevronRight className="text-gray-300 group-hover:text-brand-pink transition-colors" size={16} />
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {view === 'learn' && selectedLesson && (
          <LearnDetailView lesson={selectedLesson} onBack={() => setView('home')} />
        )}

        {view === 'games' && (
          <GamesMenuView onBack={() => setView('home')} onPlay={() => setView('homophones')} />
        )}

        {view === 'homophones' && (
          <HomophoneGameView onBack={() => setView('games')} />
        )}

        {view === 'test' && selectedLesson && (
          <DictationView lesson={selectedLesson} onBack={() => setView('home')} />
        )}
      </AnimatePresence>
    </Layout>
  );
}

// --- Detail Views ---

function LearnDetailView({ lesson, onBack }: { lesson: Lesson, onBack: () => void }) {
  const [activeTab, setActiveTab] = useState<'type1' | 'type2' | 'vocab'>('type1');
  const [selectedChar, setSelectedChar] = useState<ChineseCharacter | null>(null);

  const speak = (text: string) => {
    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = 'zh-CN'; utter.rate = 0.8;
    window.speechSynthesis.speak(utter);
  };

  return (
    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-6 pb-12">
      <div className="flex items-center space-x-2">
        <button onClick={onBack} className="p-2 -ml-2 rounded-full hover:bg-gray-100 transition-colors"><ArrowLeft size={20} className="text-gray-500" /></button>
        <h2 className="text-xl font-bold text-gray-800 truncate">{lesson.title}</h2>
      </div>

      <div className="flex bg-gray-100 p-1 rounded-2xl">
        {(['type1', 'type2', 'vocab'] as const).map(tab => (
          <button
            key={tab} onClick={() => setActiveTab(tab)}
            className={`flex-1 py-3 text-xs font-bold rounded-[14px] transition-all ${
              activeTab === tab ? 'bg-white text-brand-green shadow-sm scale-[1.02]' : 'text-gray-400'
            }`}
          >
            {tab === 'type1' ? '写字表' : tab === 'type2' ? '识字表' : '词语表'}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-4 gap-4">
        {activeTab === 'vocab' ? (
          <div className="col-span-4 space-y-3">
             {lesson.vocabulary.map((v, i) => (
                <button key={i} onClick={() => speak(v.text)} className="w-full h-16 bg-white rounded-2xl flex items-center justify-between px-6 shadow-sm border border-brand-green/10 btn-active text-left">
                  <div>
                    <p className="text-lg font-bold tracking-widest text-[#2D3436]">{v.text}</p>
                    <p className="text-[10px] text-brand-green font-mono tracking-tighter uppercase">{v.pinyin}</p>
                  </div>
                  <Volume2 size={20} className="text-brand-green/40" />
                </button>
             ))}
          </div>
        ) : (
          (activeTab === 'type1' ? lesson.type1Chars : lesson.type2Chars).map((c, i) => (
            <motion.button key={i} whileTap={{ scale: 0.9 }} onClick={() => setSelectedChar(c)} className="aspect-square bg-white tianzige rounded-xl flex items-center justify-center text-3xl font-serif text-gray-800 shadow-sm">
              {c.char}
            </motion.button>
          ))
        )}
      </div>

      <AnimatePresence>
        {selectedChar && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelectedChar(null)} className="fixed inset-0 bg-black/40 z-40 backdrop-blur-sm" />
            <motion.div initial={{ y: '100%' }} animate={{ y: 0 }} exit={{ y: '100%' }} className="fixed bottom-0 left-0 right-0 bg-[#FDFCF0] rounded-t-[40px] z-50 p-8 shadow-2xl max-w-md mx-auto h-[75vh] overflow-y-auto">
              <div className="w-12 h-1.5 bg-gray-200 rounded-full mx-auto mb-8" onClick={() => setSelectedChar(null)} />
              <div className="flex flex-col items-center">
                <div className="w-40 h-40 bg-white tianzige rounded-3xl flex items-center justify-center text-8xl font-serif mb-6 shadow-md relative">
                  {selectedChar.char}
                  <button onClick={() => speak(selectedChar.char)} className="absolute -top-4 -right-4 w-12 h-12 bg-brand-green text-white rounded-2xl shadow-lg flex items-center justify-center active:scale-90"><Volume2 size={24} /></button>
                </div>
                <div className="text-center mb-8">
                  <p className="text-2xl font-mono text-brand-green font-bold">{selectedChar.pinyin}</p>
                  <div className="flex space-x-3 mt-3">
                    <span className="px-3 py-1 bg-brand-yellow/30 text-amber-900 text-xs rounded-full font-bold">部首：{selectedChar.radical}</span>
                    <span className="px-3 py-1 bg-blue-50 text-blue-800 text-xs rounded-full font-bold">笔画：{selectedChar.strokes}画</span>
                  </div>
                </div>
                <div className="w-full space-y-6 text-left">
                  <div><h4 className="font-bold text-gray-500 text-sm mb-3 border-l-4 border-brand-green pl-3">组词练习</h4>
                    <div className="flex flex-wrap gap-2">{selectedChar.wordExamples.map((w, i) => (
                      <button key={i} onClick={() => speak(w)} className="px-4 py-2 bg-white rounded-xl text-sm font-bold shadow-sm border border-gray-100 flex items-center space-x-2 active:bg-brand-green active:text-white transition-colors">
                        <span>{w}</span><Volume2 size={12} className="opacity-30" />
                      </button>
                    ))}</div>
                  </div>
                  <div><h4 className="font-bold text-gray-500 text-sm mb-3 border-l-4 border-brand-green pl-3">造句示例</h4>
                    <div className="p-4 bg-white/60 rounded-2xl border border-dashed border-brand-green/30 italic text-sm text-gray-600 leading-relaxed">“{selectedChar.sentenceExample}”</div>
                  </div>
                </div>
                <button onClick={() => setSelectedChar(null)} className="w-full mt-10 py-4 bg-brand-green text-white font-bold rounded-2xl shadow-lg">学会了！</button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function GamesMenuView({ onBack, onPlay }: { onBack: () => void, onPlay: () => void }) {
  return (
    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-6">
      <div className="flex items-center space-x-2">
        <button onClick={onBack} className="p-2 -ml-2 rounded-full hover:bg-gray-100 transition-colors"><ArrowLeft size={20} className="text-gray-500" /></button>
        <h2 className="text-xl font-bold text-gray-800">游戏闯关</h2>
      </div>
      <div className="grid gap-4">
        {[
          { title: '同音消消乐', icon: '🎯', desc: '选出句中正确的同音字', action: onPlay, color: 'bg-brand-green' },
          { title: '生字捉迷藏', icon: '🔍', desc: '找出那个写错的“顽皮字”', action: () => {}, color: 'bg-indigo-400' },
          { title: '词语连连看', icon: '🔗', desc: '词语与意思的完美对接', action: () => {}, color: 'bg-brand-yellow' }
        ].map((g, i) => (
          <button key={i} onClick={g.action} className="w-full bg-white p-6 rounded-[32px] shadow-sm border border-gray-100 flex items-center space-x-4 btn-active text-left">
            <div className={`${g.color} w-14 h-14 rounded-2xl flex items-center justify-center text-2xl shadow-lg`}>{g.icon}</div>
            <div><h3 className="font-bold text-gray-800">{g.title}</h3><p className="text-xs text-gray-400">{g.desc}</p></div>
          </button>
        ))}
      </div>
    </motion.div>
  );
}

function HomophoneGameView({ onBack }: { onBack: () => void }) {
  const QUESTIONS = [
    { sentence: '春天到了，到处都是（  ）歌燕舞。', options: ['莺', '樱'], answer: '莺', pinyin: 'yīng' },
    { sentence: '上课了，老师（  ）走进教室。', options: ['步', '补'], answer: '步', pinyin: 'bù' },
    { sentence: '我的作业（  ）写完了。', options: ['已', '己'], answer: '已', pinyin: 'yǐ' },
    { sentence: '这件事（  ）实上不是这样的。', options: ['事', '是'], answer: '事', pinyin: 'shì' },
  ];
  const [idx, setIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [feedback, setFeedback] = useState<'correct' | 'wrong' | null>(null);

  const handleSelect = (opt: string) => {
    if (feedback) return;
    if (opt === QUESTIONS[idx].answer) { setScore(s => s + 1); setFeedback('correct'); } else { setFeedback('wrong'); }
    setTimeout(() => {
      setFeedback(null);
      if (idx < QUESTIONS.length - 1) setIdx(idx + 1); else setFinished(true);
    }, 1200);
  };

  if (finished) return (
    <div className="flex flex-col items-center space-y-8 bg-white p-10 rounded-[40px] shadow-sm text-center">
      <div className="text-7xl animate-bounce">🏆</div>
      <div><h3 className="text-2xl font-bold">成绩：{score * 25}分</h3><p className="text-gray-400 mt-2">你掌握得非常棒！</p></div>
      <button onClick={onBack} className="w-full py-4 bg-brand-green text-white font-bold rounded-2xl">返回</button>
    </div>
  );

  const q = QUESTIONS[idx];
  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-2">
        <button onClick={onBack} className="p-2 -ml-2 rounded-full hover:bg-gray-100 transition-colors"><ArrowLeft size={20} className="text-gray-500" /></button>
        <h2 className="text-xl font-bold font-serif">同音消消乐</h2>
      </div>
      <div className="bg-white p-8 rounded-[40px] shadow-sm border border-brand-green/10 min-h-[350px] flex flex-col justify-center relative">
        <p className="text-center text-xs text-brand-green mb-6 font-mono tracking-widest">{q.pinyin}</p>
        <p className="text-xl leading-loose text-center mb-10 px-4 text-gray-700">
           {q.sentence.split('（  ）')[0]}
           <span className="inline-block w-12 h-10 border-b-2 border-brand-green mx-2 font-bold text-brand-green text-center">{feedback ? q.answer : ''}</span>
           {q.sentence.split('（  ）')[1]}
        </p>
        <div className="grid grid-cols-2 gap-4">
          {q.options.map(opt => (
            <button key={opt} onClick={() => handleSelect(opt)} disabled={!!feedback} className={`py-6 rounded-2xl text-2xl font-serif shadow-sm border-2 transition-all ${
              feedback === 'correct' && opt === q.answer ? 'bg-brand-green border-brand-green text-white' : 
              feedback === 'wrong' && opt !== q.answer ? 'bg-red-50 border-red-200 text-red-500' : 'bg-white border-gray-100'
            }`}>{opt}</button>
          ))}
        </div>
      </div>
    </div>
  );
}

function DictationView({ lesson, onBack }: { lesson: Lesson, onBack: () => void }) {
  const [idx, setIdx] = useState(0);
  const [finished, setFinished] = useState(false);
  const [results, setResults] = useState<{word: WordTerm, correct: boolean}[]>([]);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const speak = (text: string) => {
    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = 'zh-CN'; utter.rate = 0.7;
    window.speechSynthesis.speak(utter);
  };

  const handleNext = (correct: boolean) => {
    setResults([...results, { word: lesson.vocabulary[idx], correct }]);
    const canvas = canvasRef.current;
    if (canvas) canvas.getContext('2d')?.clearRect(0, 0, canvas.width, canvas.height);
    if (idx < lesson.vocabulary.length - 1) {
      setIdx(idx + 1);
      setTimeout(() => speak(lesson.vocabulary[idx + 1].text), 500);
    } else setFinished(true);
  };

  if (finished) return (
    <div className="space-y-6">
      <div className="bg-white p-8 rounded-[40px] shadow-sm text-center">
        <div className="text-6xl mb-4">💮</div>
        <h3 className="text-xl font-bold mb-8">听写完成！</h3>
        <div className="space-y-3">
          {results.map((r, i) => (
            <div key={i} className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl">
              <div className="text-left font-bold text-gray-700">{r.word.text}<span className="text-[10px] block font-mono text-gray-400">{r.word.pinyin}</span></div>
              {r.correct ? <CheckCircle2 className="text-brand-green" /> : <XCircle className="text-red-400" />}
            </div>
          ))}
        </div>
        <button onClick={onBack} className="w-full mt-8 py-4 bg-brand-green text-white font-bold rounded-2xl">回首页</button>
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-2">
        <button onClick={onBack} className="p-2 -ml-2 rounded-full hover:bg-gray-100 transition-colors"><ArrowLeft size={20} className="text-gray-500" /></button>
        <h2 className="text-xl font-bold">听写挑战</h2>
      </div>
      <div className="bg-white p-8 rounded-[40px] shadow-sm border border-brand-green/10 text-center">
        <div className="flex justify-center mb-8 gap-4">
           <button onClick={() => speak(lesson.vocabulary[idx].text)} className="w-20 h-20 bg-brand-green/10 text-brand-green rounded-full flex items-center justify-center shadow-inner"><Volume2 size={32} /></button>
        </div>
        <CanvasDrawing canvasRef={canvasRef} />
        <div className="flex gap-4 mt-8">
           <button onClick={() => handleNext(false)} className="flex-1 py-4 bg-red-50 text-red-500 font-bold rounded-2xl">写错了</button>
           <button onClick={() => handleNext(true)} className="flex-1 py-4 bg-brand-green text-white font-bold rounded-2xl">写对了</button>
        </div>
      </div>
    </div>
  );
}
