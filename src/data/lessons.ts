import { Lesson } from '../types';

export const ALL_LESSONS: Lesson[] = [
  {
    id: '1',
    title: '课文1 古诗二首',
    type1Chars: [
      { char: '诗', pinyin: 'shī', radical: '讠', strokes: 8, type: 'type1', wordExamples: ['古诗', '诗人'], sentenceExample: '我会背诵《咏柳》这首古诗。' },
      { char: '碧', pinyin: 'bì', radical: '石', strokes: 14, type: 'type1', wordExamples: ['碧玉', '碧绿'], sentenceExample: '春天到了，湖水碧绿碧绿的。' },
      { char: '妆', pinyin: 'zhuāng', radical: '丬', strokes: 6, type: 'type1', wordExamples: ['化妆', '红妆'], sentenceExample: '柳树像是在对着湖面化妆。' },
      { char: '绿', pinyin: 'lǜ', radical: '纟', strokes: 11, type: 'type1', wordExamples: ['绿色', '绿化'], sentenceExample: '森林里一片绿油油。' },
      { char: '丝', pinyin: 'sī', radical: '一', strokes: 5, type: 'type1', wordExamples: ['丝线', '丝带'], sentenceExample: '垂下的柳条像绿色的丝带。' },
      { char: '剪', pinyin: 'jiǎn', radical: '刀', strokes: 11, type: 'type1', wordExamples: ['剪刀', '剪纸'], sentenceExample: '二月春风似剪刀。' },
      { char: '童', pinyin: 'tóng', radical: '立', strokes: 12, type: 'type1', wordExamples: ['儿童', '童年'], sentenceExample: '儿童散学归来早。' },
      { char: '归', pinyin: 'guī', radical: '刂', strokes: 5, type: 'type1', wordExamples: ['归来', '回归'], sentenceExample: '忙趁东风放纸鸢。' }
    ],
    type2Chars: [
      { char: '咏', pinyin: 'yǒng', radical: '口', strokes: 8, type: 'type2', wordExamples: ['咏柳', '歌咏'], sentenceExample: '贺知章写了《咏柳》这首诗。' },
      { char: '贺', pinyin: 'hè', radical: '贝', strokes: 9, type: 'type2', wordExamples: ['祝贺', '贺卡'], sentenceExample: '大家纷纷向他表示祝贺。' },
      { char: '妆', pinyin: 'zhuāng', radical: '丬', strokes: 6, type: 'type2', wordExamples: ['化妆', '红妆'], sentenceExample: '柳树像是在对着湖面化妆。' },
      { char: '丝', pinyin: 'sī', radical: '一', strokes: 5, type: 'type2', wordExamples: ['丝线', '丝带'], sentenceExample: '垂下的柳条像绿色的丝带。' },
      { char: '裁', pinyin: 'cái', radical: '衣', strokes: 12, type: 'type2', wordExamples: ['裁剪', '裁判'], sentenceExample: '裁缝正在裁剪布料。' },
      { char: '剪', pinyin: 'jiǎn', radical: '刀', strokes: 11, type: 'type2', wordExamples: ['剪刀', '剪纸'], sentenceExample: '二月春风似剪刀。' },
      { char: '莺', pinyin: 'yīng', radical: '艹', strokes: 10, type: 'type2', wordExamples: ['黄莺', '莺歌燕舞'], sentenceExample: '草长莺飞二月天。' },
      { char: '拂', pinyin: 'fú', radical: '扌', strokes: 8, type: 'type2', wordExamples: ['拂过', '拂晓'], sentenceExample: '春风拂过嫩绿的柳条。' },
      { char: '堤', pinyin: 'dī', radical: '土', strokes: 12, type: 'type2', wordExamples: ['河堤', '堤岸'], sentenceExample: '拂堤杨柳醉春烟。' },
      { char: '醉', pinyin: 'zuì', radical: '酉', strokes: 15, type: 'type2', wordExamples: ['醉酒', '陶醉'], sentenceExample: '拂堤杨柳醉春烟。' },
      { char: '趁', pinyin: 'chèn', radical: '走', strokes: 12, type: 'type2', wordExamples: ['趁着', '趁早'], sentenceExample: '忙趁东风放纸鸢。' }
    ],
    vocabulary: [
      { text: '春天', pinyin: 'chūn tiān' },
      { text: '古诗', pinyin: 'gǔ shī' },
      { text: '村居', pinyin: 'cūn jū' },
      { text: '咏柳', pinyin: 'yǒng liǔ' },
      { text: '碧玉', pinyin: 'bì yù' },
      { text: '化妆', pinyin: 'huà zhuāng' },
      { text: '丝线', pinyin: 'sī xiàn' },
      { text: '剪刀', pinyin: 'jiǎn dāo' },
      { text: '儿童', pinyin: 'ér tóng' },
      { text: '归来', pinyin: 'guī lái' }
    ]
  },
  {
    id: '2',
    title: '课文2 找春天',
    type1Chars: [
      { char: '冲', pinyin: 'chōng', radical: '冫', strokes: 6, type: 'type1', wordExamples: ['冲出', '冲破'], sentenceExample: '我们冲出家门去寻找春天。' },
      { char: '寻', pinyin: 'xún', radical: '寸', strokes: 6, type: 'type1', wordExamples: ['寻找', '遍寻'], sentenceExample: '我们在田野里寻找春天的足迹。' },
      { char: '眉', pinyin: 'méi', radical: '目', strokes: 9, type: 'type1', wordExamples: ['眉毛', '眉目'], sentenceExample: '柳枝嫩芽像春天的眉毛。' },
      { char: '吐', pinyin: 'tǔ', radical: '口', strokes: 6, type: 'type1', wordExamples: ['吐芽', '吞吐'], sentenceExample: '柳树吐出嫩绿的芽。' },
      { char: '闻', pinyin: 'wén', radical: '门', strokes: 9, type: 'type1', wordExamples: ['新闻', '闻到'], sentenceExample: '我闻到了春天的气息。' },
      { char: '柳', pinyin: 'liǔ', radical: '木', strokes: 9, type: 'type1', wordExamples: ['柳条', '柳树'], sentenceExample: '柳树摇摆着长长的辫子。' },
      { char: '荡', pinyin: 'dàng', radical: '艹', strokes: 9, type: 'type1', wordExamples: ['荡秋千', '晃荡'], sentenceExample: '小草在春风中晃荡。' },
      { char: '桃', pinyin: 'táo', radical: '木', strokes: 10, type: 'type1', wordExamples: ['桃花', '桃子'], sentenceExample: '桃花笑红了脸。' }
    ],
    type2Chars: [
      { char: '脱', pinyin: 'tuō', radical: '月', strokes: 11, type: 'type2', wordExamples: ['脱掉', '脱落'], sentenceExample: '我们脱掉棉袄寻找春天。' },
      { char: '袄', pinyin: 'ǎo', radical: '衤', strokes: 9, type: 'type2', wordExamples: ['棉袄', '夹袄'], sentenceExample: '我们脱掉棉袄寻找春天。' },
      { char: '遮', pinyin: 'zhē', radical: '辶', strokes: 14, type: 'type2', wordExamples: ['遮掩', '遮挡'], sentenceExample: '春天遮遮掩掩，躲躲藏藏。' },
      { char: '掩', pinyin: 'yǎn', radical: '扌', strokes: 11, type: 'type2', wordExamples: ['掩盖', '遮掩'], sentenceExample: '春天遮遮掩掩，躲躲藏藏。' },
      { char: '探', pinyin: 'tàn', radical: '扌', strokes: 11, type: 'type2', wordExamples: ['探头', '探望'], sentenceExample: '小草从地下探出头来。' },
      { char: '眉', pinyin: 'méi', radical: '目', strokes: 9, type: 'type2', wordExamples: ['眉毛', '眉目'], sentenceExample: '柳枝嫩芽像春天的眉毛。' },
      { char: '吐', pinyin: 'tǔ', radical: '口', strokes: 6, type: 'type2', wordExamples: ['吐芽', '吞吐'], sentenceExample: '柳树吐出嫩绿的芽。' },
      { char: '芽', pinyin: 'yá', radical: '艹', strokes: 7, type: 'type2', wordExamples: ['嫩芽', '发芽'], sentenceExample: '柳树吐出嫩绿的芽。' },
      { char: '符', pinyin: 'fú', radical: '⺮', strokes: 11, type: 'type2', wordExamples: ['音符', '符号'], sentenceExample: '那是春天的音符吧？' },
      { char: '解', pinyin: 'jiě', radical: '角', strokes: 13, type: 'type2', wordExamples: ['解冻', '理解'], sentenceExample: '小溪里的冰解冻了。' },
      { char: '触', pinyin: 'chù', radical: '角', strokes: 13, type: 'type2', wordExamples: ['触碰', '感觉'], sentenceExample: '我们触到了她的笑脸。' },
      { char: '杜', pinyin: 'dù', radical: '木', strokes: 7, type: 'type2', wordExamples: ['杜鹃', '杜绝'], sentenceExample: '杜鹃在林间欢乐地歌唱。' },
      { char: '鹃', pinyin: 'juān', radical: '鸟', strokes: 12, type: 'type2', wordExamples: ['杜鹃', '子规'], sentenceExample: '杜鹃在林间欢乐地歌唱。' }
    ],
    vocabulary: [
      { text: '寻找', pinyin: 'xún zhǎo' },
      { text: '眉毛', pinyin: 'méi mao' },
      { text: '野花', pinyin: 'yě huā' },
      { text: '柳枝', pinyin: 'liǔ zhī' },
      { text: '桃花', pinyin: 'táo huā' },
      { text: '冲出', pinyin: 'chōng chū' },
      { text: '春天', pinyin: 'chūn tiān' },
      { text: '姑娘', pinyin: 'gū niang' }
    ]
  },
  {
    id: '3',
    title: '课文3 开满鲜花的小路',
    type1Chars: [
      { char: '鲜', pinyin: 'xiān', radical: '鱼', strokes: 14, type: 'type1', wordExamples: ['鲜花', '鲜艳'], sentenceExample: '开满鲜花的小路真美。' },
      { char: '原', pinyin: 'yuán', radical: '厂', strokes: 10, type: 'type1', wordExamples: ['原来', '草原'], sentenceExample: '原来是鼹鼠先生。' },
      { char: '叔', pinyin: 'shū', radical: '又', strokes: 8, type: 'type1', wordExamples: ['大叔', '叔叔'], sentenceExample: '长颈鹿大叔寄来一个包裹。' },
      { char: '通', pinyin: 'tōng', radical: '辶', strokes: 10, type: 'type1', wordExamples: ['通向', '通过'], sentenceExample: '这是一条通向家乡的小路。' },
      { char: '巧', pinyin: 'qiǎo', radical: '工', strokes: 5, type: 'type1', wordExamples: ['正巧', '灵巧'], sentenceExample: '正巧，松鼠太太走过来。' },
      { char: '惊', pinyin: 'jīng', radical: '忄', strokes: 11, type: 'type1', wordExamples: ['惊奇', '吃惊'], sentenceExample: '他非常惊奇地看着包裹。' },
      { char: '礼', pinyin: 'lǐ', radical: '礻', strokes: 5, type: 'type1', wordExamples: ['礼物', '礼貌'], sentenceExample: '这是多么美好的礼物啊！' }
    ],
    type2Chars: [
      { char: '裹', pinyin: 'guǒ', radical: '衣', strokes: 14, type: 'type2', wordExamples: ['包裹', '裹着'], sentenceExample: '鼹鼠先生收到了一个包裹。' },
      { char: '颈', pinyin: 'jǐng', radical: '页', strokes: 11, type: 'type2', wordExamples: ['颈部', '长颈鹿'], sentenceExample: '长颈鹿大叔送来了包裹。' },
      { char: '寄', pinyin: 'jì', radical: '宀', strokes: 11, type: 'type2', wordExamples: ['寄信', '寄语'], sentenceExample: '长颈鹿大叔寄来了一个包裹。' },
      { char: '粒', pinyin: 'lì', radical: '米', strokes: 11, type: 'type2', wordExamples: ['颗粒', '一粒'], sentenceExample: '包裹里是一堆小颗粒。' },
      { char: '破', pinyin: 'pò', radical: '石', strokes: 10, type: 'type1', wordExamples: ['破旧', '破漏'], sentenceExample: '包裹破了，东西掉了一路。' },
      { char: '漏', pinyin: 'lòu', radical: '氵', strokes: 14, type: 'type2', wordExamples: ['漏洞', '破漏'], sentenceExample: '包裹弄破了，种子漏了。' },
      { char: '懊', pinyin: 'ào', radical: '忄', strokes: 15, type: 'type2', wordExamples: ['懊丧', '懊恼'], sentenceExample: '鼹鼠先生很懊丧。' },
      { char: '丧', pinyin: 'sàng', radical: '一', strokes: 8, type: 'type2', wordExamples: ['丧气', '懊丧'], sentenceExample: '鼹鼠先生很懊丧。' },
      { char: '绢', pinyin: 'juàn', radical: '纟', strokes: 10, type: 'type2', wordExamples: ['手绢', '绢花'], sentenceExample: '松鼠太太拿着绢花。' },
      { char: '束', pinyin: 'shù', radical: '木', strokes: 7, type: 'type2', wordExamples: ['花束', '束缚'], sentenceExample: '这是一束美丽的鲜花。' },
      { char: '礼', pinyin: 'lǐ', radical: '礻', strokes: 5, type: 'type2', wordExamples: ['礼物', '礼貌'], sentenceExample: '这是多么美好的礼物啊！' }
    ],
    vocabulary: [
      { text: '鲜花', pinyin: 'xiān huā' },
      { text: '先生', pinyin: 'xiān sheng' },
      { text: '原来', pinyin: 'yuán lái' },
      { text: '大叔', pinyin: 'dà shū' },
      { text: '太太', pinyin: 'tài tai' },
      { text: '做客', pinyin: 'zuò kè' },
      { text: '正巧', pinyin: 'zhèng qiǎo' },
      { text: '惊奇', pinyin: 'jīng qí' },
      { text: '快活', pinyin: 'kuài huo' },
      { text: '美好', pinyin: 'měi hǎo' },
      { text: '礼物', pinyin: 'lǐ wù' }
    ]
  },
  {
    id: '4',
    title: '课文4 邓小平爷爷植树',
    type1Chars: [
      { char: '邓', pinyin: 'dèng', radical: '阝', strokes: 4, type: 'type1', wordExamples: ['邓公', '姓邓'], sentenceExample: '邓爷爷来植树了。' },
      { char: '植', pinyin: 'zhí', radical: '木', strokes: 12, type: 'type1', wordExamples: ['植树', '植物'], sentenceExample: '这是一个植树节。' },
      { char: '格', pinyin: 'gé', radical: '木', strokes: 10, type: 'type1', wordExamples: ['格外', '合格'], sentenceExample: '邓爷爷格外引人注目。' },
      { char: '引', pinyin: 'yǐn', radical: '弓', strokes: 4, type: 'type1', wordExamples: ['引起', '引领'], sentenceExample: '那是引人注目的地方。' },
      { char: '注', pinyin: 'zhù', radical: '氵', strokes: 8, type: 'type1', wordExamples: ['注目', '注意'], sentenceExample: '人人都注目远望。' },
      { char: '满', pinyin: 'mǎn', radical: '氵', strokes: 13, type: 'type1', wordExamples: ['满意', '充满'], sentenceExample: '邓爷爷脸上露出了满意的笑容。' }
    ],
    type2Chars: [
      { char: '邓', pinyin: 'dèng', radical: '阝', strokes: 4, type: 'type2', wordExamples: ['姓邓', '邓公'], sentenceExample: '邓爷爷是个伟大人。' },
      { char: '坛', pinyin: 'tán', radical: '土', strokes: 7, type: 'type2', wordExamples: ['花坛', '天坛'], sentenceExample: '花坛里开满了花。' },
      { char: '龄', pinyin: 'líng', radical: '齿', strokes: 13, type: 'type2', wordExamples: ['高龄', '年龄'], sentenceExample: '邓爷爷虽然高龄，但精力充沛。' },
      { char: '格', pinyin: 'gé', radical: '木', strokes: 10, type: 'type2', wordExamples: ['格外', '合格'], sentenceExample: '邓爷爷格外引人注目。' },
      { char: '致', pinyin: 'zhì', radical: '至', strokes: 10, type: 'type2', wordExamples: ['兴致', '精致'], sentenceExample: '他是那么兴致勃勃。' },
      { char: '勃', pinyin: 'bó', radical: '力', strokes: 9, type: 'type2', wordExamples: ['勃勃', '生机'], sentenceExample: '那是兴致勃勃的样子。' },
      { char: '挖', pinyin: 'wā', radical: '扌', strokes: 9, type: 'type2', wordExamples: ['挖坑', '挖掘'], sentenceExample: '邓爷爷在心无旁骛地挖坑。' },
      { char: '额', pinyin: 'é', radical: '页', strokes: 15, type: 'type2', wordExamples: ['额头', '名额'], sentenceExample: '邓爷爷额头上有汗。' },
      { char: '汗', pinyin: 'hàn', radical: '氵', strokes: 6, type: 'type2', wordExamples: ['汗水', '流汗'], sentenceExample: '邓爷爷流了不少汗。' },
      { char: '肯', pinyin: 'kěn', radical: '止', strokes: 8, type: 'type2', wordExamples: ['肯定', '不肯'], sentenceExample: '他不肯休息，一直干活。' },
      { char: '苗', pinyin: 'miáo', radical: '艹', strokes: 8, type: 'type2', wordExamples: ['幼苗', '禾苗'], sentenceExample: '这是一棵小树苗。' },
      { char: '挥', pinyin: 'huī', radical: '扌', strokes: 9, type: 'type2', wordExamples: ['挥手', '挥汗'], sentenceExample: '他挥动铁锹。' },
      { char: '扶', pinyin: 'fú', radical: '扌', strokes: 7, type: 'type2', wordExamples: ['扶住', '掺扶'], sentenceExample: '他把树苗扶正。' }
    ],
    vocabulary: [
      { text: '植树', pinyin: 'zhí shù' },
      { text: '碧空如洗', pinyin: 'bì kōng rú xǐ' },
      { text: '万里无云', pinyin: 'wàn lǐ wú yún' },
      { text: '格外', pinyin: 'gé wài' },
      { text: '引人注目', pinyin: 'yǐn rén zhù mù' },
      { text: '休息', pinyin: 'xiū xi' },
      { text: '小心', pinyin: 'xiǎo xīn' },
      { text: '笔直', pinyin: 'bǐ zhí' }
    ]
  },
  {
    id: '5',
    title: '课文5 雷锋叔叔，你在哪里',
    type1Chars: [
      { char: '雷', pinyin: 'léi', radical: '雨', strokes: 13, type: 'type1', wordExamples: ['雷雨', '打雷'], sentenceExample: '雷锋叔叔是一个伟大的人。' },
      { char: '锋', pinyin: 'fēng', radical: '钅', strokes: 12, type: 'type1', wordExamples: ['锋利', '先锋'], sentenceExample: '我们要学习雷锋叔叔。' },
      { char: '昨', pinyin: 'zuó', radical: '日', strokes: 9, type: 'type1', wordExamples: ['昨天', '昨晚'], sentenceExample: '昨天，他在雨中背着大娘。' },
      { char: '背', pinyin: 'bèi', radical: '月', strokes: 9, type: 'type1', wordExamples: ['背面', '背着'], sentenceExample: '他在雨中背着大娘。' },
      { char: '洒', pinyin: 'sǎ', radical: '氵', strokes: 9, type: 'type1', wordExamples: ['洒水', '洒满'], sentenceExample: '晶莹的露珠洒在叶子上。' },
      { char: '汗', pinyin: 'hàn', radical: '氵', strokes: 6, type: 'type1', wordExamples: ['汗水', '流汗'], sentenceExample: '他流了一身大汗。' },
      { char: '温', pinyin: 'wēn', radical: '氵', strokes: 12, type: 'type1', wordExamples: ['温暖', '温和'], sentenceExample: '春天真温暖。' },
      { char: '暖', pinyin: 'nuǎn', radical: '日', strokes: 13, type: 'type1', wordExamples: ['暖和', '暖气'], sentenceExample: '太阳照在身上真暖和。' }
    ],
    type2Chars: [
      { char: '迹', pinyin: 'jì', radical: '辶', strokes: 9, type: 'type2', wordExamples: ['足迹', '奇迹'], sentenceExample: '我们寻找雷锋叔叔的足迹。' },
      { char: '曾', pinyin: 'céng', radical: '日', strokes: 12, type: 'type2', wordExamples: ['曾经', '未曾'], sentenceExample: '他曾经走过这片草丛。' },
      { char: '冒', pinyin: 'mào', radical: '冂', strokes: 9, type: 'type2', wordExamples: ['冒雨', '感冒'], sentenceExample: '雷锋叔叔冒雨送孩子回家。' },
      { char: '蒙', pinyin: 'méng', radical: '艹', strokes: 13, type: 'type2', wordExamples: ['细雨蒙蒙', '启蒙'], sentenceExample: '细雨蒙蒙，他背着大娘往前走。' },
      { char: '瞧', pinyin: 'qiáo', radical: '目', strokes: 17, type: 'type2', wordExamples: ['瞧见', '看看'], sentenceExample: '你瞧，那是什么？' },
      { char: '泞', pinyin: 'nìng', radical: '氵', strokes: 8, type: 'type2', wordExamples: ['泥泞', '泞路'], sentenceExample: '泥泞的路真难走。' },
      { char: '窝', pinyin: 'wō', radical: '穴', strokes: 12, type: 'type2', wordExamples: ['鸟窝', '耳窝'], sentenceExample: '小鸟在一个窝里。' },
      { char: '顺', pinyin: 'shùn', radical: '页', strokes: 9, type: 'type2', wordExamples: ['顺着', '顺利'], sentenceExample: '顺着小路一直走。' },
      { char: '荆', pinyin: 'jīng', radical: '艹', strokes: 9, type: 'type2', wordExamples: ['荆棘', '披荆斩棘'], sentenceExample: '路边长满了荆棘。' },
      { char: '棘', pinyin: 'jí', radical: '木', strokes: 12, type: 'type2', wordExamples: ['荆棘', '棘手'], sentenceExample: '荆棘刺痛了他的手。' },
      { char: '莹', pinyin: 'yíng', radical: '艹', strokes: 10, type: 'type2', wordExamples: ['晶莹', '莹白'], sentenceExample: '叶子上有晶莹的露珠。' },
      { char: '觅', pinyin: 'mì', radical: '见', strokes: 8, type: 'type2', wordExamples: ['寻觅', '觅食'], sentenceExample: '蝴蝶在草丛中寻觅。' },
      { char: '需', pinyin: 'xū', radical: '雨', strokes: 14, type: 'type2', wordExamples: ['需要', '需求'], sentenceExample: '哪里需要，他就出现在哪里。' },
      { char: '献', pinyin: 'xiàn', radical: '虍', strokes: 13, type: 'type2', wordExamples: ['献出', '奉献'], sentenceExample: '我们要向社会献出一份爱。' }
    ],
    vocabulary: [
      { text: '雷锋', pinyin: 'léi fēng' },
      { text: '叔叔', pinyin: 'shū shu' },
      { text: '昨天', pinyin: 'zuó tiān' },
      { text: '温暖', pinyin: 'wēn nuǎn' },
      { text: '爱心', pinyin: 'ài xīn' },
      { text: '足迹', pinyin: 'zú jì' },
      { text: '迷路', pinyin: 'mí lù' },
      { text: '露珠', pinyin: 'lù zhū' }
    ]
  },
  {
    id: '6',
    title: '课文6 千人糕',
    type1Chars: [
      { char: '桌', pinyin: 'zhuō', radical: '木', strokes: 10, type: 'type1', wordExamples: ['桌子', '讲桌'], sentenceExample: '课桌上放着一盒千人糕。' },
      { char: '尝', pinyin: 'cháng', radical: '小', strokes: 9, type: 'type1', wordExamples: ['尝尝', '品尝'], sentenceExample: '我想尝尝这块糕。' },
      { char: '买', pinyin: 'mǎi', radical: '乙', strokes: 6, type: 'type1', wordExamples: ['买卖', '收买'], sentenceExample: '这块糕不是买来的。' },
      { char: '具', pinyin: 'jù', radical: '八', strokes: 8, type: 'type1', wordExamples: ['农具', '文具'], sentenceExample: '那是用来耕种的农具。' },
      { char: '甘', pinyin: 'gān', radical: '甘', strokes: 5, type: 'type1', wordExamples: ['甘甜', '甘蔗'], sentenceExample: '这糕是用甘蔗做的。' },
      { char: '汁', pinyin: 'zhī', radical: '氵', strokes: 5, type: 'type1', wordExamples: ['果汁', '果汁'], sentenceExample: '甘蔗汁甜极了。' },
      { char: '劳', pinyin: 'láo', radical: '力', strokes: 7, type: 'type1', wordExamples: ['劳动', '辛劳'], sentenceExample: '这是通过辛勤劳动得到的。' },
      { char: '应', pinyin: 'yīng', radical: '广', strokes: 7, type: 'type1', wordExamples: ['应该', '应答'], sentenceExample: '那是我们应该做的。' }
    ],
    type2Chars: [
      { char: '糕', pinyin: 'gāo', radical: '米', strokes: 16, type: 'type2', wordExamples: ['蛋糕', '千人糕'], sentenceExample: '这就是千人糕。' },
      { char: '糖', pinyin: 'táng', radical: '米', strokes: 16, type: 'type2', wordExamples: ['白糖', '太妃糖'], sentenceExample: '千人糕里放了糖。' },
      { char: '嘛', pinyin: 'ma', radical: '口', strokes: 13, type: 'type2', wordExamples: ['干嘛', '行嘛'], sentenceExample: '那是当然的嘛。' },
      { char: '磨', pinyin: 'mó', radical: '麻', strokes: 16, type: 'type2', wordExamples: ['磨面', '石磨'], sentenceExample: '农民在石磨前磨粉。' },
      { char: '粉', pinyin: 'fěn', radical: '米', strokes: 10, type: 'type2', wordExamples: ['米粉', '粉色'], sentenceExample: '大米磨成了粉。' },
      { char: '甘', pinyin: 'gān', radical: '甘', strokes: 5, type: 'type2', wordExamples: ['甘甜', '同甘共苦'], sentenceExample: '这也是甘蔗做的。' },
      { char: '蔗', pinyin: 'zhè', radical: '艹', strokes: 14, type: 'type2', wordExamples: ['甘蔗', '蔗糖'], sentenceExample: '甘蔗是甜的。' },
      { char: '汁', pinyin: 'zhī', radical: '氵', strokes: 5, type: 'type2', wordExamples: ['果汁', '汗汁'], sentenceExample: '甘蔗汁真好喝。' },
      { char: '菜', pinyin: 'cài', radical: '艹', strokes: 11, type: 'type2', wordExamples: ['白菜', '菜谱'], sentenceExample: '我们要多吃蔬菜。' },
      { char: '销', pinyin: 'xiāo', radical: '钅', strokes: 12, type: 'type2', wordExamples: ['销售', '注销'], sentenceExample: '这块糕正在销售。' },
      { char: '售', pinyin: 'shòu', radical: '口', strokes: 11, type: 'type2', wordExamples: ['售货', '销售'], sentenceExample: '售货员在忙碌。' },
      { char: '的', pinyin: 'de', radical: '白', strokes: 8, type: 'type2', wordExamples: ['美丽的', '的确'], sentenceExample: '那是我的书。' },
      { char: '确', pinyin: 'què', radical: '石', strokes: 12, type: 'type2', wordExamples: ['确实', '正确'], sentenceExample: '这的确是一块千人糕。' },
      { char: '应', pinyin: 'yīng', radical: '广', strokes: 7, type: 'type2', wordExamples: ['应该', '响应'], sentenceExample: '那是应该的。' }
    ],
    vocabulary: [
      { text: '好奇', pinyin: 'hào qí' },
      { text: '也许', pinyin: 'yě xǔ' },
      { text: '桌子', pinyin: 'zhuō zi' },
      { text: '平时', pinyin: 'píng shí' },
      { text: '难道', pinyin: 'nán dào' },
      { text: '平常', pinyin: 'píng cháng' },
      { text: '农民', pinyin: 'nóng mín' },
      { text: '加工', pinyin: 'jiā gōng' },
      { text: '农具', pinyin: 'nóng jù' },
      { text: '甜菜', pinyin: 'tián cài' },
      { text: '工具', pinyin: 'gōng jù' },
      { text: '劳动', pinyin: 'láo dòng' },
      { text: '经过', pinyin: 'jīng guò' },
      { text: '应该', pinyin: 'yīng gāi' }
    ]
  },
  {
    id: '7',
    title: '课文7 一匹出色的小马',
    type1Chars: [
      { char: '匹', pinyin: 'pǐ', radical: '匚', strokes: 4, type: 'type1' },
      { char: '妹', pinyin: 'mèi', radical: '女', strokes: 8, type: 'type1' },
      { char: '波', pinyin: 'bō', radical: '氵', strokes: 8, type: 'type1' },
      { char: '纹', pinyin: 'wén', radical: '纟', strokes: 7, type: 'type1' },
      { char: '恋', pinyin: 'liàn', radical: '心', strokes: 10, type: 'type1' },
      { char: '舍', pinyin: 'shě', radical: '舌', strokes: 8, type: 'type1' },
      { char: '求', pinyin: 'qiú', radical: '水', strokes: 7, type: 'type1' },
      { char: '奔', pinyin: 'bēn', radical: '大', strokes: 8, type: 'type1' }
    ],
    type2Chars: [
      { char: '郊', pinyin: 'jiāo', radical: '⻏', strokes: 8, type: 'type2' },
      { char: '泛', pinyin: 'fàn', radical: '氵', strokes: 7, type: 'type2' },
      { char: '葱', pinyin: 'cōng', radical: '艹', strokes: 12, type: 'type2' },
      { char: '软', pinyin: 'ruǎn', radical: '车', strokes: 8, type: 'type2' },
      { char: '毯', pinyin: 'tǎn', radical: '毛', strokes: 12, type: 'type2' },
      { char: '恋', pinyin: 'liàn', radical: '心', strokes: 10, type: 'type2' },
      { char: '舍', pinyin: 'shě', radical: '舌', strokes: 8, type: 'type2' }
    ],
    vocabulary: [
      { text: '出色', pinyin: 'chū sè' },
      { text: '妹妹', pinyin: 'mèi mei' },
      { text: '碧绿', pinyin: 'bì lǜ' },
      { text: '波纹', pinyin: 'bō wén' },
      { text: '恋恋不舍', pinyin: 'liàn liàn bù shě' },
      { text: '柳树', pinyin: 'liǔ shù' },
      { text: '枝条', pinyin: 'zhī tiáo' }
    ]
  },
  {
    id: '园地二',
    title: '语文园地二',
    type1Chars: [
      { char: '程', pinyin: 'chéng', radical: '禾', strokes: 12, type: 'type1' },
      { char: '术', pinyin: 'shù', radical: '木', strokes: 5, type: 'type1' },
      { char: '服', pinyin: 'fú', radical: '月', strokes: 8, type: 'type1' },
      { char: '务', pinyin: 'wù', radical: '力', strokes: 5, type: 'type1' }
    ],
    type2Chars: [
      { char: '魔', pinyin: 'mó', radical: '麻', strokes: 20, type: 'type2' },
      { char: '建', pinyin: 'jiàn', radical: '廴', strokes: 8, type: 'type2' },
      { char: '筑', pinyin: 'zhù', radical: '⺮', strokes: 12, type: 'type2' },
      { char: '演', pinyin: 'yǎn', radical: '氵', strokes: 14, type: 'type2' },
      { char: '营', pinyin: 'yíng', radical: '艹', strokes: 11, type: 'type2' },
      { char: '判', pinyin: 'pàn', radical: '刂', strokes: 7, type: 'type2' },
      { char: '饲', pinyin: 'sì', radical: '饣', strokes: 8, type: 'type2' },
      { char: '养', pinyin: 'yǎng', radical: '⺷', strokes: 9, type: 'type2' }
    ],
    vocabulary: [
      { text: '工程', pinyin: 'gōng chéng' },
      { text: '魔术', pinyin: 'mó shù' },
      { text: '建筑', pinyin: 'jiàn zhù' },
      { text: '服务', pinyin: 'fú wù' },
      { text: '表演', pinyin: 'biǎo yǎn' },
      { text: '营地', pinyin: 'yíng dì' },
      { text: '饲养', pinyin: 'sì yǎng' }
    ]
  },
  {
    id: '识1',
    title: '识字1 神州谣',
    type1Chars: [
      { char: '神', pinyin: 'shén', radical: '礻', strokes: 9, type: 'type1' },
      { char: '州', pinyin: 'zhōu', radical: '丶', strokes: 6, type: 'type1' },
      { char: '华', pinyin: 'huá', radical: '十', strokes: 6, type: 'type1' },
      { char: '各', pinyin: 'gè', radical: '口', strokes: 6, type: 'type1' },
      { char: '族', pinyin: 'zú', radical: '方', strokes: 11, type: 'type1' },
      { char: '情', pinyin: 'qíng', radical: '忄', strokes: 11, type: 'type1' },
      { char: '谊', pinyin: 'yì', radical: '讠', strokes: 10, type: 'type1' },
      { char: '齐', pinyin: 'qí', radical: '文', strokes: 6, type: 'type1' }
    ],
    type2Chars: [
      { char: '谣', pinyin: 'yáo', radical: '讠', strokes: 12, type: 'type2' },
      { char: '涌', pinyin: 'yǒng', radical: '氵', strokes: 10, type: 'type2' },
      { char: '耸', pinyin: 'sǒng', radical: '耳', strokes: 10, type: 'type2' },
      { char: '隔', pinyin: 'gé', radical: '⻏', strokes: 12, type: 'type2' },
      { char: '峡', pinyin: 'xiá', radical: '山', strokes: 9, type: 'type2' },
      { char: '陆', pinyin: 'lù', radical: '⻏', strokes: 7, type: 'type2' },
      { char: '浓', pinyin: 'nóng', radical: '氵', strokes: 9, type: 'type2' },
      { char: '奋', pinyin: 'fèn', radical: '大', strokes: 8, type: 'type2' },
      { char: '繁', pinyin: 'fán', radical: '糸', strokes: 17, type: 'type2' }
    ],
    vocabulary: [
      { text: '神州', pinyin: 'shén zhōu' },
      { text: '中华', pinyin: 'zhōng huá' },
      { text: '山川', pinyin: 'shān chuān' },
      { text: '长江', pinyin: 'cháng jiāng' },
      { text: '长城', pinyin: 'cháng chéng' },
      { text: '民族', pinyin: 'mín zú' },
      { text: '情谊', pinyin: 'qíng yì' }
    ]
  },
  {
    id: '识2',
    title: '识字2 传统节日',
    type1Chars: [
      { char: '传', pinyin: 'chuán', radical: '亻', strokes: 6, type: 'type1' },
      { char: '统', pinyin: 'tǒng', radical: '纟', strokes: 9, type: 'type1' },
      { char: '贴', pinyin: 'tiē', radical: '贝', strokes: 9, type: 'type1' },
      { char: '街', pinyin: 'jiē', radical: '行', strokes: 12, type: 'type1' },
      { char: '扫', pinyin: 'sǎo', radical: '扌', strokes: 6, type: 'type1' },
      { char: '龙', pinyin: 'lóng', radical: '龙', strokes: 5, type: 'type1' },
      { char: '艾', pinyin: 'ài', radical: '艹', strokes: 5, type: 'type1' },
      { char: '全', pinyin: 'quán', radical: '入', strokes: 6, type: 'type1' },
      { char: '团', pinyin: 'tuán', radical: '囗', strokes: 6, type: 'type1' },
      { char: '真', pinyin: 'zhēn', radical: '目', strokes: 10, type: 'type1' }
    ],
    type2Chars: [
      { char: '宵', pinyin: 'xiāo', radical: '宀', strokes: 10, type: 'type2' },
      { char: '巷', pinyin: 'xiàng', radical: '己', strokes: 9, type: 'type2' },
      { char: '堂', pinyin: 'táng', radical: '土', strokes: 11, type: 'type2' },
      { char: '乞', pinyin: 'qǐ', radical: '乙', strokes: 3, type: 'type2' },
      { char: '郎', pinyin: 'láng', radical: '⻏', strokes: 8, type: 'type2' },
      { char: '饼', pinyin: 'bǐng', radical: '饣', strokes: 9, type: 'type2' },
      { char: '赏', pinyin: 'shǎng', radical: '贝', strokes: 12, type: 'type2' },
      { char: '菊', pinyin: 'jú', radical: '艹', strokes: 11, type: 'type2' }
    ],
    vocabulary: [
      { text: '传统', pinyin: 'chuán tǒng' },
      { text: '节日', pinyin: 'jié rì' },
      { text: '春节', pinyin: 'chūn jié' },
      { text: '花灯', pinyin: 'huā dēng' },
      { text: '清明节', pinyin: 'qīng míng jié' },
      { text: '先人', pinyin: 'xiān rén' },
      { text: '龙舟', pinyin: 'lóng zhōu' },
      { text: '中秋', pinyin: 'zhōng qiū' },
      { text: '团圆', pinyin: 'tuán yuán' }
    ]
  },
  {
    id: '识3',
    title: '识字3 “贝”的故事',
    type1Chars: [
      { char: '甲', pinyin: 'jiǎ', radical: '丨', strokes: 5, type: 'type1' },
      { char: '骨', pinyin: 'gǔ', radical: '骨', strokes: 9, type: 'type1' },
      { char: '觉', pinyin: 'jué', radical: '见', strokes: 9, type: 'type1' },
      { char: '品', pinyin: 'pǐn', radical: '口', strokes: 9, type: 'type1' },
      { char: '钱', pinyin: 'qián', radical: '钅', strokes: 10, type: 'type1' },
      { char: '币', pinyin: 'bì', radical: '巾', strokes: 4, type: 'type1' },
      { char: '与', pinyin: 'yǔ', radical: '一', strokes: 3, type: 'type1' },
      { char: '财', pinyin: 'cái', radical: '贝', strokes: 7, type: 'type1' }
    ],
    type2Chars: [
      { char: '漂', pinyin: 'piāo', radical: '氵', strokes: 14, type: 'type2' },
      { char: '贵', pinyin: 'guì', radical: '贝', strokes: 9, type: 'type2' },
      { char: '饰', pinyin: 'shì', radical: '饣', strokes: 8, type: 'type2' },
      { char: '携', pinyin: 'xié', radical: '扌', strokes: 13, type: 'type2' },
      { char: '损', pinyin: 'sǔn', radical: '扌', strokes: 10, type: 'type2' },
      { char: '赚', pinyin: 'zhuàn', radical: '贝', strokes: 14, type: 'type2' },
      { char: '赔', pinyin: 'péi', radical: '贝', strokes: 12, type: 'type2' },
      { char: '购', pinyin: 'gòu', radical: '贝', strokes: 8, type: 'type2' }
    ],
    vocabulary: [
      { text: '故事', pinyin: 'gù shi' },
      { text: '生活', pinyin: 'shēng huó' },
      { text: '甲骨文', pinyin: 'jiǎ gǔ wén' },
      { text: '样子', pinyin: 'yàng zi' },
      { text: '钱币', pinyin: 'qián bì' },
      { text: '钱财', pinyin: 'qián cái' },
      { text: '有关', pinyin: 'yǒu guān' }
    ]
  },
  {
    id: '识4',
    title: '识字4 中国美食',
    type1Chars: [
      { char: '食', pinyin: 'shí', radical: '饣', strokes: 9, type: 'type1' },
      { char: '茄', pinyin: 'qié', radical: '艹', strokes: 8, type: 'type1' },
      { char: '烤', pinyin: 'kǎo', radical: '火', strokes: 10, type: 'type1' },
      { char: '鸭', pinyin: 'yā', radical: '鸟', strokes: 10, type: 'type1' },
      { char: '煮', pinyin: 'zhǔ', radical: '灬', strokes: 12, type: 'type1' },
      { char: '鸡', pinyin: 'jī', radical: '鸟', strokes: 7, type: 'type1' },
      { char: '蛋', pinyin: 'dàn', radical: '虫', strokes: 11, type: 'type1' },
      { char: '饭', pinyin: 'fàn', radical: '饣', strokes: 7, type: 'type1' }
    ],
    type2Chars: [
      { char: '拌', pinyin: 'bàn', radical: '扌', strokes: 8, type: 'type2' },
      { char: '菠', pinyin: 'bō', radical: '艹', strokes: 11, type: 'type2' },
      { char: '煎', pinyin: 'jiān', radical: '灬', strokes: 13, type: 'type2' },
      { char: '腐', pinyin: 'fǔ', radical: '广', strokes: 14, type: 'type2' },
      { char: '葱', pinyin: 'cōng', radical: '艹', strokes: 12, type: 'type2' },
      { char: '顿', pinyin: 'dùn', radical: '页', strokes: 10, type: 'type2' },
      { char: '蘑', pinyin: 'mó', radical: '艹', strokes: 18, type: 'type2' },
      { char: '菇', pinyin: 'gū', radical: '艹', strokes: 11, type: 'type2' },
      { char: '蒸', pinyin: 'zhēng', radical: '灬', strokes: 13, type: 'type2' },
      { char: '饺', pinyin: 'jiǎo', radical: '饣', strokes: 9, type: 'type2' },
      { char: '炸', pinyin: 'zhá', radical: '火', strokes: 9, type: 'type2' },
      { char: '酱', pinyin: 'jiàng', radical: '酉', strokes: 13, type: 'type2' },
      { char: '粥', pinyin: 'zhōu', radical: '米', strokes: 12, type: 'type2' }
    ],
    vocabulary: [
      { text: '美食', pinyin: 'měi shí' },
      { text: '茄子', pinyin: 'qié zi' },
      { text: '烤鸭', pinyin: 'kǎo yā' },
      { text: '水煮鱼', pinyin: 'shuǐ zhǔ yú' },
      { text: '羊肉', pinyin: 'yáng ròu' },
      { text: '蛋炒饭', pinyin: 'dàn chǎo fàn' }
    ]
  },
  {
    id: '园地三',
    title: '语文园地三',
    type1Chars: [
      { char: '辣', pinyin: 'là', radical: '辛', strokes: 14, type: 'type1' },
      { char: '乎', pinyin: 'hū', radical: '丿', strokes: 5, type: 'type1' }
    ],
    type2Chars: [
      { char: '津', pinyin: 'jīn', radical: '氵', strokes: 9, type: 'type2' },
      { char: '酸', pinyin: 'suān', radical: '酉', strokes: 14, type: 'type2' },
      { char: '溜', pinyin: 'liū', radical: '氵', strokes: 13, type: 'type2' },
      { char: '喷', pinyin: 'pēn', radical: '口', strokes: 12, type: 'type2' },
      { char: '腻', pinyin: 'nì', radical: '月', strokes: 13, type: 'type2' },
      { char: '绵', pinyin: 'mián', radical: '纟', strokes: 11, type: 'type2' },
      { char: '脆', pinyin: 'cuì', radical: '月', strokes: 10, type: 'type2' },
      { char: '邦', pinyin: 'bāng', radical: '⻏', strokes: 6, type: 'type2' }
    ],
    vocabulary: [
      { text: '辣乎乎', pinyin: 'là hū hū' },
      { text: '香喷喷', pinyin: 'xiāng pēn pēn' },
      { text: '酸溜溜', pinyin: 'suān liū liū' },
      { text: '油腻', pinyin: 'yóu nì' },
      { text: '绵软', pinyin: 'mián ruǎn' },
      { text: '清脆', pinyin: 'qīng cuì' }
    ]
  },
  {
    id: '8',
    title: '课文8 彩色的梦',
    type1Chars: [
      { char: '梦', pinyin: 'mèng', radical: '夕', strokes: 11, type: 'type1' },
      { char: '硬', pinyin: 'yìng', radical: '石', strokes: 12, type: 'type1' },
      { char: '铅', pinyin: 'qiān', radical: '钅', strokes: 10, type: 'type1' },
      { char: '盒', pinyin: 'hé', radical: '皿', strokes: 11, type: 'type1' },
      { char: '森', pinyin: 'sēn', radical: '木', strokes: 12, type: 'type1' },
      { char: '结', pinyin: 'jié', radical: '纟', strokes: 9, type: 'type1' },
      { char: '苹', pinyin: 'píng', radical: '艹', strokes: 8, type: 'type1' },
      { char: '精', pinyin: 'jīng', radical: '米', strokes: 14, type: 'type1' },
      { char: '灵', pinyin: 'líng', radical: '火', strokes: 7, type: 'type1' },
      { char: '流', pinyin: 'liú', radical: '氵', strokes: 10, type: 'type1' }
    ],
    type2Chars: [
      { char: '躺', pinyin: 'tǎng', radical: '身', strokes: 15, type: 'type2' },
      { char: '聊', pinyin: 'liáo', radical: '耳', strokes: 11, type: 'type2' },
      { char: '蹦', pinyin: 'bèng', radical: '足', strokes: 18, type: 'type2' },
      { char: '郁', pinyin: 'yù', radical: '⻏', strokes: 8, type: 'type2' },
      { char: '囱', pinyin: 'cōng', radical: '口', strokes: 7, type: 'type2' },
      { char: '般', pinyin: 'bān', radical: '舟', strokes: 10, type: 'type2' },
      { char: '境', pinyin: 'jìng', radical: '土', strokes: 14, type: 'type2' },
      { char: '叮', pinyin: 'dīng', radical: '口', strokes: 5, type: 'type2' },
      { char: '咛', pinyin: 'níng', radical: '口', strokes: 8, type: 'type2' }
    ],
    vocabulary: [
      { text: '彩色', pinyin: 'cǎi sè' },
      { text: '铅笔盒', pinyin: 'qiān bǐ hé' },
      { text: '森林', pinyin: 'sēn lín' },
      { text: '雪松', pinyin: 'xuě sōng' },
      { text: '歌声', pinyin: 'gē shēng' },
      { text: '苹果', pinyin: 'píng guǒ' },
      { text: '精灵', pinyin: 'jīng líng' },
      { text: '季节', pinyin: 'jì jié' },
      { text: '流动', pinyin: 'liú dòng' }
    ]
  },
  {
    id: '9',
    title: '课文9 枫树上的喜鹊',
    type1Chars: [
      { char: '伞', pinyin: 'sǎn', radical: '人', strokes: 6, type: 'type1' },
      { char: '姨', pinyin: 'yí', radical: '女', strokes: 9, type: 'type1' },
      { char: '弟', pinyin: 'dì', radical: '弓', strokes: 7, type: 'type1' },
      { char: '便', pinyin: 'biàn', radical: '亻', strokes: 9, type: 'type1' },
      { char: '教', pinyin: 'jiāo', radical: '攵', strokes: 11, type: 'type1' },
      { char: '游', pinyin: 'yóu', radical: '氵', strokes: 12, type: 'type1' },
      { char: '戏', pinyin: 'xì', radical: '又', strokes: 6, type: 'type1' },
      { char: '母', pinyin: 'mǔ', radical: '毋', strokes: 5, type: 'type1' }
    ],
    type2Chars: [
      { char: '渡', pinyin: 'dù', radical: '氵', strokes: 12, type: 'type2' },
      { char: '荫', pinyin: 'yīn', radical: '艹', strokes: 9, type: 'type2' },
      { char: '蔽', pinyin: 'bì', radical: '艹', strokes: 15, type: 'type2' },
      { char: '撑', pinyin: 'chēng', radical: '扌', strokes: 15, type: 'type2' },
      { char: '拼', pinyin: 'pīn', radical: '扌', strokes: 9, type: 'type2' },
      { char: '案', pinyin: 'àn', radical: '木', strokes: 10, type: 'type2' }
    ],
    vocabulary: [
      { text: '枫树', pinyin: 'fēng shù' },
      { text: '喜鹊', pinyin: 'xǐ què' },
      { text: '阿姨', pinyin: 'ā yí' },
      { text: '弟弟', pinyin: 'dì di' },
      { text: '游戏', pinyin: 'yóu xì' },
      { text: '字母', pinyin: 'zì mǔ' }
    ]
  },
  {
    id: '10',
    title: '课文10 沙滩上的童话',
    type1Chars: [
      { char: '幸', pinyin: 'xìng', radical: '干', strokes: 8, type: 'type1' },
      { char: '运', pinyin: 'yùn', radical: '辶', strokes: 7, type: 'type1' },
      { char: '充', pinyin: 'chōng', radical: '儿', strokes: 6, type: 'type1' },
      { char: '满', pinyin: 'mǎn', radical: '氵', strokes: 13, type: 'type1' },
      { char: '童', pinyin: 'tóng', radical: '立', strokes: 12, type: 'type1' },
      { char: '话', pinyin: 'huà', radical: '讠', strokes: 8, type: 'type1' },
      { char: '姨', pinyin: 'yí', radical: '女', strokes: 9, type: 'type1' }
    ],
    type2Chars: [
      { char: '堡', pinyin: 'bǎo', radical: '土', strokes: 12, type: 'type2' },
      { char: '插', pinyin: 'chā', radical: '扌', strokes: 12, type: 'type2' },
      { char: '凶', pinyin: 'xiōng', radical: '凵', strokes: 4, type: 'type2' },
      { char: '狠', pinyin: 'hěn', radical: '犭', strokes: 9, type: 'type2' },
      { char: '攻', pinyin: 'gōng', radical: '攵', strokes: 7, type: 'type2' },
      { char: '商', pinyin: 'shāng', radical: '口', strokes: 11, type: 'type2' },
      { char: '驾', pinyin: 'jià', radical: '马', strokes: 8, type: 'type2' },
      { char: '轰', pinyin: 'hōng', radical: '车', strokes: 8, type: 'type2' },
      { char: '驳', pinyin: 'bó', radical: '马', strokes: 7, type: 'type2' },
      { char: '药', pinyin: 'yào', radical: '艹', strokes: 9, type: 'type2' }
    ],
    vocabulary: [
      { text: '海边', pinyin: 'hǎi biān' },
      { text: '沙滩', pinyin: 'shā tān' },
      { text: '童话', pinyin: 'tóng huà' },
      { text: '城堡', pinyin: 'chéng bǎo' },
      { text: '公主', pinyin: 'gōng zhǔ' },
      { text: '勇士', pinyin: 'yǒng shì' },
      { text: '飞机', pinyin: 'fēi jī' },
      { text: '地道', pinyin: 'dì dào' },
      { text: '火药', pinyin: 'huǒ yào' },
      { text: '胜利', pinyin: 'shèng lì' }
    ]
  },
  {
    id: '园地四',
    title: '语文园地四',
    type1Chars: [
      { char: '坦', pinyin: 'tǎn', radical: '土', strokes: 8, type: 'type1' },
      { char: '克', pinyin: 'kè', radical: '儿', strokes: 7, type: 'type1' }
    ],
    type2Chars: [
      { char: '陀', pinyin: 'tuó', radical: '⻏', strokes: 7, type: 'type2' },
      { char: '螺', pinyin: 'luó', radical: '虫', strokes: 17, type: 'type2' },
      { char: '毽', pinyin: 'jiàn', radical: '毛', strokes: 13, type: 'type2' },
      { char: '倒', pinyin: 'dǎo', radical: '亻', strokes: 10, type: 'type2' },
      { char: '翁', pinyin: 'wēng', radical: '羽', strokes: 10, type: 'type2' },
      { char: '枪', pinyin: 'qiāng', radical: '木', strokes: 8, type: 'type2' },
      { char: '橡', pinyin: 'xiàng', radical: '木', strokes: 15, type: 'type2' }
    ],
    vocabulary: [
      { text: '不倒翁', pinyin: 'bù dǎo wēng' },
      { text: '玩具', pinyin: 'wán jù' },
      { text: '坦克', pinyin: 'tǎn kè' },
      { text: '模型', pinyin: 'mó xíng' },
      { text: '遥控', pinyin: 'yáo kòng' }
    ]
  },
  {
    id: '11',
    title: '课文11 寓言二则',
    type1Chars: [
      { char: '亡', pinyin: 'wáng', radical: '亠', strokes: 3, type: 'type1' },
      { char: '补', pinyin: 'bǔ', radical: '衤', strokes: 7, type: 'type1' },
      { char: '牢', pinyin: 'láo', radical: '宀', strokes: 7, type: 'type1' },
      { char: '劝', pinyin: 'quàn', radical: '又', strokes: 4, type: 'type1' },
      { char: '丢', pinyin: 'diū', radical: '丿', strokes: 6, type: 'type1' },
      { char: '助', pinyin: 'zhù', radical: '力', strokes: 7, type: 'type1' },
      { char: '坏', pinyin: 'huài', radical: '土', strokes: 7, type: 'type1' },
      { char: '死', pinyin: 'sǐ', radical: '歹', strokes: 6, type: 'type1' }
    ],
    type2Chars: [
      { char: '寓', pinyin: 'yù', radical: '宀', strokes: 12, type: 'type2' },
      { char: '则', pinyin: 'zé', radical: '刂', strokes: 6, type: 'type2' },
      { char: '圈', pinyin: 'quān', radical: '囗', strokes: 11, type: 'type2' },
      { char: '叼', pinyin: 'diāo', radical: '口', strokes: 5, type: 'type2' },
      { char: '修', pinyin: 'xiū', radical: '亻', strokes: 9, type: 'type2' },
      { char: '堵', pinyin: 'dǔ', radical: '土', strokes: 11, type: 'type2' },
      { char: '悔', pinyin: 'huǐ', radical: '忄', strokes: 10, type: 'type2' },
      { char: '焦', pinyin: 'jiāo', radical: '灬', strokes: 12, type: 'type2' },
      { char: '筋', pinyin: 'jīn', radical: '⺮', strokes: 12, type: 'type2' },
      { char: '喘', pinyin: 'chuǎn', radical: '口', strokes: 12, type: 'type2' },
      { char: '截', pinyin: 'jié', radical: '戈', strokes: 14, type: 'type2' }
    ],
    vocabulary: [
      { text: '亡羊补牢', pinyin: 'wáng yáng bǔ láo' },
      { text: '劝告', pinyin: 'quàn gào' },
      { text: '禾苗', pinyin: 'hé miáo' },
      { text: '力气', pinyin: 'lì qi' },
      { text: '明白', pinyin: 'míng bai' }
    ]
  },
  {
    id: '12',
    title: '课文12 画杨桃',
    type1Chars: [
      { char: '室', pinyin: 'shì', radical: '宀', strokes: 9, type: 'type1' },
      { char: '排', pinyin: 'pái', radical: '扌', strokes: 11, type: 'type1' },
      { char: '而', pinyin: 'ér', radical: '而', strokes: 6, type: 'type1' },
      { char: '实', pinyin: 'shí', radical: '宀', strokes: 8, type: 'type1' },
      { char: '候', pinyin: 'hòu', radical: '亻', strokes: 10, type: 'type1' },
      { char: '班', pinyin: 'bān', radical: '王', strokes: 10, type: 'type1' },
      { char: '哈', pinyin: 'hā', radical: '口', strokes: 9, type: 'type1' },
      { char: '举', pinyin: 'jǔ', radical: '丶', strokes: 9, type: 'type1' }
    ],
    type2Chars: [
      { char: '幅', pinyin: 'fú', radical: '巾', strokes: 12, type: 'type2' },
      { char: '审', pinyin: 'shěn', radical: '宀', strokes: 8, type: 'type2' },
      { char: '肃', pinyin: 'sù', radical: '肀', strokes: 8, type: 'type2' },
      { char: '晌', pinyin: 'shǎng', radical: '日', strokes: 10, type: 'type2' },
      { char: '嘻', pinyin: 'xī', radical: '口', strokes: 15, type: 'type2' },
      { char: '悦', pinyin: 'yuè', radical: '忄', strokes: 10, type: 'type2' },
      { char: '诲', pinyin: 'huì', radical: '讠', strokes: 9, type: 'type2' }
    ],
    vocabulary: [
      { text: '杨桃', pinyin: 'yáng táo' },
      { text: '图画', pinyin: 'tú huà' },
      { text: '讲桌', pinyin: 'jiǎng zhuō' },
      { text: '座位', pinyin: 'zuò wèi' },
      { text: '教室', pinyin: 'jiào shì' },
      { text: '时候', pinyin: 'shí hou' },
      { text: '神情', pinyin: 'shén qíng' }
    ]
  },
  {
    id: '13',
    title: '课文13 小马过河',
    type1Chars: [
      { char: '愿', pinyin: 'yuàn', radical: '厂', strokes: 14, type: 'type1' },
      { char: '意', pinyin: 'yì', radical: '心', strokes: 13, type: 'type1' },
      { char: '麦', pinyin: 'mài', radical: '麦', strokes: 7, type: 'type1' },
      { char: '伯', pinyin: 'bó', radical: '亻', strokes: 7, type: 'type1' },
      { char: '刻', pinyin: 'kè', radical: '刂', strokes: 8, type: 'type1' },
      { char: '突', pinyin: 'tū', radical: '穴', strokes: 9, type: 'type1' },
      { char: '然', pinyin: 'rán', radical: '灬', strokes: 12, type: 'type1' },
      { char: '掉', pinyin: 'diào', radical: '扌', strokes: 11, type: 'type1' }
    ],
    type2Chars: [
      { char: '棚', pinyin: 'péng', radical: '木', strokes: 12, type: 'type2' },
      { char: '驮', pinyin: 'tuó', radical: '马', strokes: 6, type: 'type2' },
      { char: '坊', pinyin: 'fāng', radical: '土', strokes: 7, type: 'type2' },
      { char: '挡', pinyin: 'dǎng', radical: '扌', strokes: 9, type: 'type2' },
      { char: '浅', pinyin: 'qiǎn', radical: '氵', strokes: 8, type: 'type2' },
      { char: '淹', pinyin: 'yān', radical: '氵', strokes: 11, type: 'type2' },
      { char: '唉', pinyin: 'āi', radical: '口', strokes: 10, type: 'type2' },
      { char: '既', pinyin: 'jì', radical: '旡', strokes: 9, type: 'type2' }
    ],
    vocabulary: [
      { text: '愿意', pinyin: 'yuàn yì' },
      { text: '麦子', pinyin: 'mài zi' },
      { text: '伯伯', pinyin: 'bó bo' },
      { text: '立刻', pinyin: 'lì kè' },
      { text: '突然', pinyin: 'tū rán' },
      { text: '认真', pinyin: 'rèn zhēn' }
    ]
  },
  {
    id: '园地五',
    title: '语文园地五',
    type1Chars: [
      { char: '商', pinyin: 'shāng', radical: '口', strokes: 11, type: 'type1' },
      { char: '厦', pinyin: 'shà', radical: '厂', strokes: 12, type: 'type1' },
      { char: '洞', pinyin: 'dòng', radical: '氵', strokes: 9, type: 'type1' },
      { char: '穴', pinyin: 'xué', radical: '穴', strokes: 5, type: 'type1' }
    ],
    type2Chars: [
      { char: '厨', pinyin: 'chú', radical: '厂', strokes: 12, type: 'type2' },
      { char: '柜', pinyin: 'guì', radical: '木', strokes: 8, type: 'type2' },
      { char: '厢', pinyin: 'xiāng', radical: '厂', strokes: 11, type: 'type2' },
      { char: '窟', pinyin: 'kū', radical: '穴', strokes: 13, type: 'type2' },
      { char: '窿', pinyin: 'lóng', radical: '穴', strokes: 16, type: 'type2' },
      { char: '窄', pinyin: 'zhǎi', radical: '穴', strokes: 10, type: 'type2' }
    ],
    vocabulary: [
      { text: '厨房', pinyin: 'chú fáng' },
      { text: '书柜', pinyin: 'shū guì' },
      { text: '大厦', pinyin: 'dà shà' },
      { text: '窟窿', pinyin: 'kū long' }
    ]
  },
  {
    id: '14',
    title: '课文14 古诗二首',
    type1Chars: [
      { char: '窗', pinyin: 'chuāng', radical: '穴', strokes: 12, type: 'type1' },
      { char: '含', pinyin: 'hán', radical: '口', strokes: 7, type: 'type1' },
      { char: '岭', pinyin: 'lǐng', radical: '山', strokes: 8, type: 'type1' },
      { char: '泊', pinyin: 'bó', radical: '氵', strokes: 8, type: 'type1' },
      { char: '吴', pinyin: 'wú', radical: '口', strokes: 7, type: 'type1' },
      { char: '净', pinyin: 'jìng', radical: '氵', strokes: 8, type: 'type1' },
      { char: '莲', pinyin: 'lián', radical: '艹', strokes: 10, type: 'type1' },
      { char: '映', pinyin: 'yìng', radical: '日', strokes: 9, type: 'type1' }
    ],
    type2Chars: [
      { char: '甫', pinyin: 'fǔ', radical: '用', strokes: 7, type: 'type2' },
      { char: '鸣', pinyin: 'míng', radical: '口', strokes: 8, type: 'type2' },
      { char: '晓', pinyin: 'xiǎo', radical: '日', strokes: 10, type: 'type2' },
      { char: '寺', pinyin: 'sì', radical: '寸', strokes: 6, type: 'type2' },
      { char: '宋', pinyin: 'sòng', radical: '宀', strokes: 7, type: 'type2' },
      { char: '毕', pinyin: 'bì', radical: '比', strokes: 6, type: 'type2' },
      { char: '竟', pinyin: 'jìng', radical: '立', strokes: 11, type: 'type2' }
    ],
    vocabulary: [
      { text: '古诗', pinyin: 'gǔ shī' },
      { text: '绝句', pinyin: 'jué jù' },
      { text: '鸣叫', pinyin: 'míng jiào' },
      { text: '山岭', pinyin: 'shān lǐng' },
      { text: '湖泊', pinyin: 'hú bó' },
      { text: '莲花', pinyin: 'lián huā' }
    ]
  },
  {
    id: '15',
    title: '课文15 雷雨',
    type1Chars: [
      { char: '乌', pinyin: 'wū', radical: '丿', strokes: 4, type: 'type1' },
      { char: '黑', pinyin: 'hēi', radical: '黑', strokes: 12, type: 'type1' },
      { char: '沉', pinyin: 'chén', radical: '氵', strokes: 7, type: 'type1' },
      { char: '压', pinyin: 'yā', radical: '厂', strokes: 6, type: 'type1' },
      { char: '响', pinyin: 'xiǎng', radical: '口', strokes: 9, type: 'type1' },
      { char: '新', pinyin: 'xīn', radical: '斤', strokes: 13, type: 'type1' },
      { char: '迎', pinyin: 'yíng', radical: '辶', strokes: 7, type: 'type1' },
      { char: '扑', pinyin: 'pū', radical: '扌', strokes: 5, type: 'type1' }
    ],
    type2Chars: [
      { char: '蝉', pinyin: 'chán', radical: '虫', strokes: 14, type: 'type2' },
      { char: '蜘', pinyin: 'zhī', radical: '虫', strokes: 14, type: 'type2' },
      { char: '蛛', pinyin: 'zhū', radical: '虫', strokes: 12, type: 'type2' },
      { char: '哗', pinyin: 'huā', radical: '口', strokes: 9, type: 'type2' },
      { char: '渐', pinyin: 'jiàn', radical: '氵', strokes: 11, type: 'type2' }
    ],
    vocabulary: [
      { text: '雷雨', pinyin: 'léi yǔ' },
      { text: '乌云', pinyin: 'wū yún' },
      { text: '雷声', pinyin: 'léi shēng' },
      { text: '窗户', pinyin: 'chuāng hu' },
      { text: '清新', pinyin: 'qīng xīn' }
    ]
  },
  {
    id: '16',
    title: '课文16 要是你在野外迷了路',
    type1Chars: [
      { char: '指', pinyin: 'zhǐ', radical: '扌', strokes: 9, type: 'type1' },
      { char: '针', pinyin: 'zhēn', radical: '钅', strokes: 7, type: 'type1' },
      { char: '帮', pinyin: 'bāng', radical: '巾', strokes: 9, type: 'type1' },
      { char: '助', pinyin: 'zhù', radical: '力', strokes: 7, type: 'type1' },
      { char: '导', pinyin: 'dǎo', radical: '寸', strokes: 6, type: 'type1' },
      { char: '永', pinyin: 'yǒng', radical: '丶', strokes: 5, type: 'type1' },
      { char: '碰', pinyin: 'pèng', radical: '石', strokes: 13, type: 'type1' },
      { char: '特', pinyin: 'tè', radical: '牜', strokes: 10, type: 'type1' },
      { char: '积', pinyin: 'jī', radical: '禾', strokes: 10, type: 'type1' }
    ],
    type2Chars: [
      { char: '慌', pinyin: 'huāng', radical: '忄', strokes: 12, type: 'type2' },
      { char: '辨', pinyin: 'biàn', radical: '辛', strokes: 16, type: 'type2' },
      { char: '忠', pinyin: 'zhōng', radical: '心', strokes: 8, type: 'type2' },
      { char: '实', pinyin: 'shí', radical: '宀', strokes: 8, type: 'type2' },
      { char: '稠', pinyin: 'chóu', radical: '禾', strokes: 13, type: 'type2' },
      { char: '稀', pinyin: 'xī', radical: '禾', strokes: 12, type: 'type2' },
      { char: '渠', pinyin: 'qú', radical: '氵', strokes: 11, type: 'type2' }
    ],
    vocabulary: [
      { text: '野外', pinyin: 'yě wài' },
      { text: '指南针', pinyin: 'zhǐ nán zhēn' },
      { text: '帮助', pinyin: 'bāng zhù' },
      { text: '向导', pinyin: 'xiàng dǎo' },
      { text: '特别', pinyin: 'tè bié' },
      { text: '积雪', pinyin: 'jī xuě' }
    ]
  },
  {
    id: '17',
    title: '课文17 太空生活趣事多',
    type1Chars: [
      { char: '宇', pinyin: 'yǔ', radical: '宀', strokes: 6, type: 'type1' },
      { char: '宙', pinyin: 'zhòu', radical: '宀', strokes: 8, type: 'type1' },
      { char: '杯', pinyin: 'bēi', radical: '木', strokes: 8, type: 'type1' },
      { char: '失', pinyin: 'shī', radical: '丿', strokes: 5, type: 'type1' },
      { char: '板', pinyin: 'bǎn', radical: '木', strokes: 8, type: 'type1' },
      { char: '容', pinyin: 'róng', radical: '宀', strokes: 10, type: 'type1' },
      { char: '易', pinyin: 'yì', radical: '日', strokes: 8, type: 'type1' },
      { char: '浴', pinyin: 'yù', radical: '氵', strokes: 10, type: 'type1' },
      { char: '室', pinyin: 'shì', radical: '宀', strokes: 9, type: 'type1' }
    ],
    type2Chars: [
      { char: '航', pinyin: 'háng', radical: '舟', strokes: 10, type: 'type2' },
      { char: '稳', pinyin: 'wěn', radical: '禾', strokes: 14, type: 'type2' },
      { char: '固', pinyin: 'gù', radical: '囗', strokes: 8, type: 'type2' },
      { char: '舱', pinyin: 'cāng', radical: '舟', strokes: 10, type: 'type2' },
      { char: '杯', pinyin: 'bēi', radical: '木', strokes: 8, type: 'type2' },
      { char: '饮', pinyin: 'yǐn', radical: '饣', strokes: 7, type: 'type2' },
      { char: '件', pinyin: 'jiàn', radical: '亻', strokes: 6, type: 'type2' },
      { char: '题', pinyin: 'tí', radical: '页', strokes: 15, type: 'type2' }
    ],
    vocabulary: [
      { text: '太空', pinyin: 'tài kōng' },
      { text: '宇宙', pinyin: 'yǔ zhòu' },
      { text: '飞船', pinyin: 'fēi chuán' },
      { text: '安稳', pinyin: 'ān wěn' },
      { text: '杯子', pinyin: 'bēi zi' },
      { text: '浴室', pinyin: 'yù shì' }
    ]
  },
  {
    id: '园地六',
    title: '语文园地六',
    type1Chars: [
      { char: '博', pinyin: 'bó', radical: '十', strokes: 12, type: 'type1' },
      { char: '馆', pinyin: 'guǎn', radical: '饣', strokes: 11, type: 'type1' },
      { char: '览', pinyin: 'lǎn', radical: '见', strokes: 9, type: 'type1' },
      { char: '研', pinyin: 'yán', radical: '石', strokes: 7, type: 'type1' },
      { char: '究', pinyin: 'jiū', radical: '穴', strokes: 7, type: 'type1' }
    ],
    type2Chars: [
      { char: '哨', pinyin: 'shào', radical: '口', strokes: 10, type: 'type2' },
      { char: '诊', pinyin: 'zhěn', radical: '讠', strokes: 7, type: 'type2' },
      { char: '疗', pinyin: 'liáo', radical: '疒', strokes: 7, type: 'type2' },
      { char: '阅', pinyin: 'yuè', radical: '门', strokes: 10, type: 'type2' },
      { char: '技', pinyin: 'jì', radical: '扌', strokes: 7, type: 'type2' }
    ],
    vocabulary: [
      { text: '博物馆', pinyin: 'bó wù guǎn' },
      { text: '展览馆', pinyin: 'zhǎn lǎn guǎn' },
      { text: '研究所', pinyin: 'yán jiū suǒ' },
      { text: '科技馆', pinyin: 'kē jì guǎn' },
      { text: '影剧院', pinyin: 'yǐng jù yuàn' }
    ]
  },
  {
    id: '18',
    title: '课文18 大象的耳朵',
    type1Chars: [
      { char: '扇', pinyin: 'shàn', radical: '户', strokes: 10, type: 'type1' },
      { char: '慢', pinyin: 'màn', radical: '忄', strokes: 14, type: 'type1' },
      { char: '遇', pinyin: 'yù', radical: '辶', strokes: 12, type: 'type1' },
      { char: '兔', pinyin: 'tù', radical: '刀', strokes: 8, type: 'type1' },
      { char: '安', pinyin: 'ān', radical: '宀', strokes: 6, type: 'type1' },
      { char: '根', pinyin: 'gēn', radical: '木', strokes: 10, type: 'type1' },
      { char: '痛', pinyin: 'tòng', radical: '疒', strokes: 12, type: 'type1' },
      { char: '最', pinyin: 'zuì', radical: '日', strokes: 12, type: 'type1' }
    ],
    type2Chars: [
      { char: '耷', pinyin: 'dā', radical: '大', strokes: 9, type: 'type2' },
      { char: '咦', pinyin: 'yí', radical: '口', strokes: 9, type: 'type2' },
      { char: '竖', pinyin: 'shù', radical: '立', strokes: 9, type: 'type2' },
      { char: '竿', pinyin: 'gān', radical: '⺮', strokes: 9, type: 'type2' },
      { char: '舞', pinyin: 'wǔ', radical: '夕', strokes: 14, type: 'type2' },
      { char: '烦', pinyin: 'fán', radical: '火', strokes: 10, type: 'type2' }
    ],
    vocabulary: [
      { text: '耳朵', pinyin: 'ěr duo' },
      { text: '扇子', pinyin: 'shàn zi' },
      { text: '慢慢', pinyin: 'màn màn' },
      { text: '兔子', pinyin: 'tù zi' },
      { text: '不安', pinyin: 'bù ān' },
      { text: '头痛', pinyin: 'tóu tòng' },
      { text: '最后', pinyin: 'zuì hòu' }
    ]
  },
  {
    id: '19',
    title: '课文19 蜘蛛开店',
    type1Chars: [
      { char: '店', pinyin: 'diàn', radical: '广', strokes: 8, type: 'type1' },
      { char: '决', pinyin: 'jué', radical: '冫', strokes: 6, type: 'type1' },
      { char: '定', pinyin: 'dìng', radical: '宀', strokes: 8, type: 'type1' },
      { char: '商', pinyin: 'shāng', radical: '口', strokes: 11, type: 'type1' },
      { char: '夫', pinyin: 'fū', radical: '一', strokes: 4, type: 'type1' },
      { char: '终', pinyin: 'zhōng', radical: '纟', strokes: 8, type: 'type1' },
      { char: '完', pinyin: 'wán', radical: '宀', strokes: 7, type: 'type1' },
      { char: '换', pinyin: 'huàn', radical: '扌', strokes: 10, type: 'type1' },
      { char: '期', pinyin: 'qī', radical: '月', strokes: 12, type: 'type1' }
    ],
    type2Chars: [
      { char: '蹲', pinyin: 'dūn', radical: '足', strokes: 19, type: 'type2' },
      { char: '寂', pinyin: 'jì', radical: '宀', strokes: 11, type: 'type2' },
      { char: '寞', pinyin: 'mò', radical: '艹', strokes: 13, type: 'type2' },
      { char: '罩', pinyin: 'zhào', radical: '罒', strokes: 13, type: 'type2' },
      { char: '编', pinyin: 'biān', radical: '纟', strokes: 12, type: 'type2' },
      { char: '顾', pinyin: 'gù', radical: '页', strokes: 10, type: 'type2' },
      { char: '付', pinyin: 'fù', radical: '亻', strokes: 5, type: 'type2' },
      { char: '蚣', pinyin: 'gōng', radical: '虫', strokes: 10, type: 'type2' }
    ],
    vocabulary: [
      { text: '商店', pinyin: 'shāng diàn' },
      { text: '决定', pinyin: 'jué dìng' },
      { text: '功夫', pinyin: 'gōng fu' },
      { text: '终于', pinyin: 'zhōng yú' },
      { text: '完成', pinyin: 'wán chéng' },
      { text: '星期', pinyin: 'xīng qī' }
    ]
  },
  {
    id: '20',
    title: '课文20 青蛙卖泥塘',
    type1Chars: [
      { char: '蛙', pinyin: 'wā', radical: '虫', strokes: 12, type: 'type1' },
      { char: '卖', pinyin: 'mài', radical: '十', strokes: 8, type: 'type1' },
      { char: '搬', pinyin: 'bān', radical: '扌', strokes: 13, type: 'type1' },
      { char: '倒', pinyin: 'dào', radical: '亻', strokes: 10, type: 'type1' },
      { char: '籽', pinyin: 'zǐ', radical: '米', strokes: 9, type: 'type1' },
      { char: '泉', pinyin: 'quán', radical: '水', strokes: 9, type: 'type1' },
      { char: '破', pinyin: 'pò', radical: '石', strokes: 10, type: 'type1' },
      { char: '应', pinyin: 'yīng', radical: '广', strokes: 7, type: 'type1' }
    ],
    type2Chars: [
      { char: '牌', pinyin: 'pái', radical: '片', strokes: 12, type: 'type2' },
      { char: '吭', pinyin: 'kēng', radical: '口', strokes: 7, type: 'type2' },
      { char: '吆', pinyin: 'yāo', radical: '口', strokes: 6, type: 'type2' },
      { char: '喝', pinyin: 'hè', radical: '口', strokes: 12, type: 'type2' },
      { char: '挺', pinyin: 'tǐng', radical: '扌', strokes: 9, type: 'type2' },
      { char: '舒', pinyin: 'shū', radical: '舌', strokes: 12, type: 'type2' },
      { char: '适', pinyin: 'shì', radical: '辶', strokes: 9, type: 'type2' }
    ],
    vocabulary: [
      { text: '泥塘', pinyin: 'ní táng' },
      { text: '青蛙', pinyin: 'qīng wā' },
      { text: '草籽', pinyin: 'cǎo zǐ' },
      { text: '野鸭', pinyin: 'yě yā' },
      { text: '泉水', pinyin: 'quán shuǐ' },
      { text: '应该', pinyin: 'yīng gāi' }
    ]
  },
  {
    id: '21',
    title: '课文21 小毛虫',
    type1Chars: [
      { char: '整', pinyin: 'zhěng', radical: '束', strokes: 16, type: 'type1' },
      { char: '抽', pinyin: 'chōu', radical: '扌', strokes: 8, type: 'type1' },
      { char: '纺', pinyin: 'fǎng', radical: '纟', strokes: 7, type: 'type1' },
      { char: '织', pinyin: 'zhī', radical: '纟', strokes: 8, type: 'type1' },
      { char: '编', pinyin: 'biān', radical: '纟', strokes: 12, type: 'type1' },
      { char: '怎', pinyin: 'zěn', radical: '心', strokes: 9, type: 'type1' },
      { char: '布', pinyin: 'bù', radical: '巾', strokes: 5, type: 'type1' },
      { char: '消', pinyin: 'xiāo', radical: '氵', strokes: 10, type: 'type1' }
    ],
    type2Chars: [
      { char: '昆', pinyin: 'kūn', radical: '日', strokes: 8, type: 'type2' },
      { char: '怜', pinyin: 'lián', radical: '忄', strokes: 8, type: 'type2' },
      { char: '挪', pinyin: 'nuó', radical: '扌', strokes: 9, type: 'type2' },
      { char: '隔', pinyin: 'gé', radical: '⻏', strokes: 12, type: 'type2' },
      { char: '丝', pinyin: 'sī', radical: '一', strokes: 5, type: 'type2' },
      { char: '锦', pinyin: 'jǐn', radical: '钅', strokes: 13, type: 'type2' },
      { char: '竭', pinyin: 'jié', radical: '立', strokes: 14, type: 'type2' }
    ],
    vocabulary: [
      { text: '毛虫', pinyin: 'máo chóng' },
      { text: '昆虫', pinyin: 'kūn chóng' },
      { text: '目光', pinyin: 'mù guāng' },
      { text: '周游', pinyin: 'zhōu yóu' },
      { text: '珍惜', pinyin: 'zhēn xī' }
    ]
  },
  {
    id: '园地七',
    title: '语文园地七',
    type1Chars: [
      { char: '瑞', pinyin: 'ruì', radical: '王', strokes: 13, type: 'type1' },
      { char: '祥', pinyin: 'xiáng', radical: '礻', strokes: 10, type: 'type1' }
    ],
    type2Chars: [
      { char: '帚', pinyin: 'zhǒu', radical: '彐', strokes: 8, type: 'type2' },
      { char: '簸', pinyin: 'bǒ', radical: '⺮', strokes: 19, type: 'type2' },
      { char: '箕', pinyin: 'jī', radical: '⺮', strokes: 14, type: 'type2' },
      { char: '玻璃', pinyin: 'bō li', radical: '王', strokes: 10, type: 'type2' },
      { char: '咳', pinyin: 'ké', radical: '口', strokes: 9, type: 'type2' },
      { char: '嗽', pinyin: 'sòu', radical: '口', strokes: 14, type: 'type2' }
    ],
    vocabulary: [
      { text: '打扫', pinyin: 'dǎ sǎo' },
      { text: '簸箕', pinyin: 'bò ji' },
      { text: '扫帚', pinyin: 'sào zhǒu' },
      { text: '抹布', pinyin: 'mā bù' },
      { text: '咳嗽', pinyin: 'ké sou' }
    ]
  },
  {
    id: '22',
    title: '课文22 羿射九日',
    type1Chars: [
      { char: '觉', pinyin: 'jué', radical: '见', strokes: 9, type: 'type1' },
      { char: '值', pinyin: 'zhí', radical: '亻', strokes: 10, type: 'type1' },
      { char: '类', pinyin: 'lèi', radical: '米', strokes: 9, type: 'type1' },
      { char: '艰', pinyin: 'jiān', radical: '艮', strokes: 8, type: 'type1' },
      { char: '弓', pinyin: 'gōng', radical: '弓', strokes: 3, type: 'type1' },
      { char: '箭', pinyin: 'jiàn', radical: '⺮', strokes: 15, type: 'type1' },
      { char: '炎', pinyin: 'yán', radical: '火', strokes: 8, type: 'type1' },
      { char: '害', pinyin: 'hài', radical: '宀', strokes: 10, type: 'type1' }
    ],
    type2Chars: [
      { char: '羿', pinyin: 'yì', radical: '羽', strokes: 9, type: 'type2' },
      { char: '射', pinyin: 'shè', radical: '寸', strokes: 10, type: 'type2' },
      { char: '窜', pinyin: 'cuàn', radical: '穴', strokes: 12, type: 'type2' },
      { char: '滋', pinyin: 'zī', radical: '氵', strokes: 12, type: 'type2' },
      { char: '腾', pinyin: 'téng', radical: '月', strokes: 13, type: 'type2' },
      { char: '塌', pinyin: 'tā', radical: '土', strokes: 13, type: 'type2' },
      { char: '庄', pinyin: 'zhuāng', radical: '广', strokes: 6, type: 'type2' },
      { char: '稼', pinyin: 'jià', radical: '禾', strokes: 15, type: 'type2' }
    ],
    vocabulary: [
      { text: '觉得', pinyin: 'jué de' },
      { text: '值日', pinyin: 'zhí rì' },
      { text: '人类', pinyin: 'rén lèi' },
      { text: '艰难', pinyin: 'jiān nán' },
      { text: '神箭手', pinyin: 'shén jiàn shǒu' },
      { text: '炎热', pinyin: 'yán rè' },
      { text: '害怕', pinyin: 'hài pà' }
    ]
  },
  {
    id: '23',
    title: '课文23 黄帝的传说',
    type1Chars: [
      { char: '帝', pinyin: 'dì', radical: '巾', strokes: 9, type: 'type1' },
      { char: '传', pinyin: 'chuán', radical: '亻', strokes: 6, type: 'type1' },
      { char: '统', pinyin: 'tǒng', radical: '纟', strokes: 9, type: 'type1' },
      { char: '设', pinyin: 'shè', radical: '讠', strokes: 6, type: 'type1' },
      { char: '计', pinyin: 'jì', radical: '讠', strokes: 4, type: 'type1' },
      { char: '改', pinyin: 'gǎi', radical: '攵', strokes: 7, type: 'type1' },
      { char: '推', pinyin: 'tuī', radical: '扌', strokes: 11, type: 'type1' },
      { char: '尊', pinyin: 'zūn', radical: '寸', strokes: 12, type: 'type1' }
    ],
    type2Chars: [
      { char: '禹', pinyin: 'yǔ', radical: '丿', strokes: 9, type: 'type2' },
      { char: '舜', pinyin: 'shùn', radical: '夕', strokes: 12, type: 'type2' },
      { char: '启', pinyin: 'qǐ', radical: '户', strokes: 7, type: 'type2' },
      { char: '首', pinyin: 'shǒu', radical: '首', strokes: 9, type: 'type2' },
      { char: '创', pinyin: 'chuàng', radical: '刂', strokes: 6, type: 'type2' },
      { char: '造', pinyin: 'zào', radical: '辶', strokes: 10, type: 'type2' }
    ],
    vocabulary: [
      { text: '黄帝', pinyin: 'huáng dì' },
      { text: '传说', pinyin: 'chuán shuō' },
      { text: '设计', pinyin: 'shè jì' },
      { text: '改进', pinyin: 'gǎi jìn' },
      { text: '推进', pinyin: 'tuī jìn' },
      { text: '尊重', pinyin: 'zūn zhòng' }
    ]
  },
  {
    id: '24',
    title: '课文24 大禹治水',
    type1Chars: [
      { char: '洪', pinyin: 'hóng', radical: '氵', strokes: 9, type: 'type1' },
      { char: '毒', pinyin: 'dú', radical: '母', strokes: 9, type: 'type1' },
      { char: '蛇', pinyin: 'shé', radical: '虫', strokes: 11, type: 'type1' },
      { char: '兽', pinyin: 'shòu', radical: '丷', strokes: 11, type: 'type1' },
      { char: '伤', pinyin: 'shāng', radical: '亻', strokes: 6, type: 'type1' },
      { char: '灾', pinyin: 'zāi', radical: '宀', strokes: 7, type: 'type1' },
      { char: '难', pinyin: 'nán', radical: '隹', strokes: 10, type: 'type1' },
      { char: '道', pinyin: 'dào', radical: '辶', strokes: 12, type: 'type1' }
    ],
    type2Chars: [
      { char: '治', pinyin: 'zhì', radical: '氵', strokes: 8, type: 'type2' },
      { char: '野', pinyin: 'yě', radical: '里', strokes: 11, type: 'type2' },
      { char: '耕', pinyin: 'gēng', radical: '耒', strokes: 10, type: 'type2' },
      { char: '制', pinyin: 'zhì', radical: '刂', strokes: 8, type: 'type2' },
      { char: '吸', pinyin: 'xī', radical: '口', strokes: 6, type: 'type2' }
    ],
    vocabulary: [
      { text: '洪水', pinyin: 'hóng shuǐ' },
      { text: '毒蛇', pinyin: 'dú shé' },
      { text: '野兽', pinyin: 'yě shòu' },
      { text: '伤害', pinyin: 'shāng hài' },
      { text: '灾难', pinyin: 'zāi nàn' },
      { text: '治理', pinyin: 'zhì lǐ' }
    ]
  },
  {
    id: '园地八',
    title: '语文园地八',
    type1Chars: [
      { char: '钩', pinyin: 'gōu', radical: '钅', strokes: 9, type: 'type1' },
      { char: '铲', pinyin: 'chǎn', radical: '钅', strokes: 11, type: 'type1' },
      { char: '枪', pinyin: 'qiāng', radical: '木', strokes: 8, type: 'type1' }
    ],
    type2Chars: [
      { char: '炬', pinyin: 'jù', radical: '火', strokes: 8, type: 'type2' },
      { char: '灿', pinyin: 'càn', radical: '火', strokes: 7, type: 'type2' },
      { char: '烂', pinyin: 'làn', radical: '火', strokes: 9, type: 'type2' },
      { char: '涨', pinyin: 'zhǎng', radical: '氵', strokes: 10, type: 'type2' },
      { char: '饱', pinyin: 'bǎo', radical: '饣', strokes: 8, type: 'type2' }
    ],
    vocabulary: [
      { text: '火炬', pinyin: 'huǒ jù' },
      { text: '灿烂', pinyin: 'càn làn' },
      { text: '钩子', pinyin: 'gōu zi' },
      { text: '铲子', pinyin: 'chǎn zi' },
      { text: '饱满', pinyin: 'bǎo mǎn' }
    ]
  }
];
