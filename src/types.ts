export interface ChineseCharacter {
  char: string;
  pinyin: string;
  radical: string;
  strokes: number;
  type: 'type1' | 'type2'; // type1: 一类字 (writing), type2: 二类字 (reading)
  wordExamples: string[];
  sentenceExample: string;
  visualData?: string; // Optional SVG data or stroke path hint
}

export interface WordTerm {
  text: string;
  pinyin: string;
  meaning?: string;
}

export interface Lesson {
  id: string;
  title: string;
  type1Chars: ChineseCharacter[];
  type2Chars: ChineseCharacter[];
  vocabulary: WordTerm[];
}

export type ViewState = 'home' | 'learn' | 'games' | 'test' | 'mistakes';
