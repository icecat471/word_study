export interface Word {
  id: number;
  date: string;
  korean: string;
  japanese: string;
}

let number = 0;

const words: Word[] = [
  { id: 1, date: '2021-08-08', korean: '숙제', japanese: '宿題' },
  { id: 2, date: '2021-08-08', korean: '친한', japanese: '親しい' },
  { id: 3, date: '2021-08-08', korean: '반 친구', japanese: 'クラスメート' },
  { id: 4, date: '2021-08-08', korean: '동료', japanese: '同僚' },
  { id: 5, date: '2021-08-08', korean: '등산', japanese: '登山' },
  { id: 6, date: '2021-08-08', korean: '탈의실', japanese: 'ロッカールーム' },
  { id: 7, date: '2021-08-08', korean: '세탁소', japanese: 'クリーニング屋' },
  { id: 8, date: '2021-08-08', korean: '감기에 걸리다', japanese: '風邪をひく' },
  { id: 9, date: '2021-08-08', korean: '감기약', japanese: '風邪薬' },
  { id: 10, date: '2021-08-08', korean: '도시락', japanese: 'お弁当' },
  { id: 11, date: '2021-08-08', korean: '출발', japanese: '出発' },
  { id: 12, date: '2021-08-08', korean: '읽다', japanese: '読む' },
  { id: 13, date: '2021-08-08', korean: '읽고 있습니다', japanese: '読んでいます' },
  { id: 14, date: '2021-08-08', korean: '미래', japanese: '未来' },
  { id: 15, date: '2021-08-08', korean: '과거', japanese: '過去' },
  { id: 16, date: '2021-08-08', korean: '현재', japanese: '現在' },
  { id: 17, date: '2021-08-08', korean: '후에', japanese: '後に' },
  { id: 18, date: '2021-08-08', korean: '전에', japanese: '前に' },
  { id: 19, date: '2021-08-08', korean: '(場所)에서 산', japanese: '～で買った' },
  { id: 20, date: '2021-08-08', korean: '(人)에게서 산', japanese: '~から買った' },
  { id: 21, date: '2021-08-08', korean: '편의점', japanese: 'コンビニ' },
  { id: 22, date: '2021-08-08', korean: '샀습니다', japanese: '買いました' },
  { id: 23, date: '2021-08-08', korean: '팔다', japanese: '売る' },
  { id: 24, date: '2021-08-08', korean: '만난', japanese: '会った・・・' },
  { id: 25, date: '2021-08-08', korean: '만나는', japanese: '会う・・・' },
  { id: 26, date: '2021-08-08', korean: '만나서', japanese: '会って・・・' },
  { id: 27, date: '2021-08-08', korean: '싫어서', japanese: '嫌いで・・・' },
  { id: 28, date: '2021-08-08', korean: '싫은', japanese: '嫌いな・・・' },
  { id: 29, date: '2021-08-08', korean: '나쁘다', japanese: '悪い' },
  { id: 30, date: '2021-08-08', korean: '더', japanese: 'もっと' },
  { id: 31, date: '2021-08-08', korean: '좋지만', japanese: 'いいけど' },
  { id: 32, date: '2021-08-09', korean: '오는', japanese: '来る・・・' },
  { id: 33, date: '2021-08-09', korean: '와서', japanese: '来て・・・' },
  { id: 34, date: '2021-08-09', korean: '오다', japanese: '来る ' },
  { id: 35, date: '2021-08-09', korean: '여행', japanese: '旅行' },
  { id: 36, date: '2021-08-09', korean: '갑니다', japanese: '行きます' },
  { id: 37, date: '2021-08-09', korean: '~(으)러 가다', japanese: '～しに行きます' },
  { id: 38, date: '2021-08-09', korean: '가는', japanese: '行く・・・' },
  { id: 39, date: '2021-08-09', korean: '가서', japanese: '行って・・・' },
  { id: 40, date: '2021-08-09', korean: '가다', japanese: '行く' },
  { id: 41, date: '2021-08-09', korean: '건물', japanese: '建物' },
  { id: 42, date: '2021-08-09', korean: '은행', japanese: '銀行' },
  { id: 43, date: '2021-08-09', korean: '사장님', japanese: '社長' },
  { id: 44, date: '2021-08-09', korean: '있는', japanese: 'ある・・・、いる・・・' },
  { id: 45, date: '2021-08-09', korean: '있어서', japanese: 'あって・・・、いて・・・' },
  { id: 46, date: '2021-08-09', korean: '있다', japanese: 'ある、いる' },
  { id: 47, date: '2021-08-09', korean: '못 오다', japanese: '来られない' },
  { id: 48, date: '2021-08-09', korean: '옵니다', japanese: '来ます' },
  { id: 49, date: '2021-08-09', korean: '지난주 / 저번주', japanese: '先週' },
  { id: 50, date: '2021-08-09', korean: '화장실', japanese: 'トイレ' },
  { id: 51, date: '2021-08-09', korean: '지지난주 / 저저번주', japanese: '先々週' },
  { id: 52, date: '2021-08-09', korean: '다다음주', japanese: '再来週' },
  { id: 53, date: '2021-08-09', korean: '다음주', japanese: '来週' },
  { id: 54, date: '2021-08-09', korean: '이번', japanese: 'この' },
  { id: 55, date: '2021-08-10', korean: '~이/가 되다', japanese: '～になる' },
  { id: 56, date: '2021-08-10', korean: '됐어요', japanese: 'なりました' },
  { id: 57, date: '2021-08-10', korean: '춰요', japanese: '踊ります' },
  { id: 58, date: '2021-08-10', korean: '자주', japanese: 'しょっちゅう' },
  { id: 59, date: '2021-08-10', korean: '맵다', japanese: '辛い(からい)' },
  { id: 60, date: '2021-08-10', korean: '음식', japanese: '食べ物' },
  { id: 61, date: '2021-08-10', korean: '지금, ~(하)고 있습니다', japanese: '今、～しています' },
  { id: 62, date: '2021-08-10', korean: '했습니다', japanese: 'しました' },
  { id: 63, date: '2021-08-10', korean: '약을 먹다', japanese: '薬を飲む' },
  { id: 64, date: '2021-08-10', korean: '마셨습니다', japanese: '飲みました' },
  { id: 65, date: '2021-08-10', korean: '콘서트', japanese: 'コンサート' },
  { id: 66, date: '2021-08-10', korean: '마시다', japanese: '飲む' },
  { id: 67, date: '2021-08-10', korean: '열심히', japanese: '一生懸命' },
  { id: 68, date: '2021-08-10', korean: '적다', japanese: '少ない' },
  { id: 69, date: '2021-08-10', korean: '의사', japanese: '医者' },
  { id: 70, date: '2021-08-10', korean: '살다', japanese: '生きる、住む' },
  { id: 71, date: '2021-08-10', korean: '잘하다', japanese: '上手だ' },
  { id: 72, date: '2021-08-12', korean: '봐요', japanese: '見ます' },
  { id: 73, date: '2021-08-12', korean: '쉬는 날', japanese: '休みの日' },
  { id: 74, date: '2021-08-12', korean: '덥네요', japanese: '暑いですね' },
  { id: 75, date: '2021-08-12', korean: '내후년', japanese: '再来年' },
  { id: 76, date: '2021-08-12', korean: '재작년', japanese: 'おととし' },
  { id: 77, date: '2021-08-12', korean: '내년', japanese: '来年' },
  { id: 78, date: '2021-08-12', korean: '작년', japanese: '去年' },
  { id: 79, date: '2021-08-12', korean: '올해', japanese: '今年' },
  { id: 80, date: '2021-08-12', korean: '좀', japanese: 'ちょっと' },
  { id: 81, date: '2021-08-12', korean: '갔다왔습니다', japanese: '行って来ました' },
  { id: 82, date: '2021-08-12', korean: '갔습니다', japanese: '行きました' },
  { id: 83, date: '2021-08-12', korean: '입다', japanese: '着る' },
  { id: 84, date: '2021-08-12', korean: '신다', japanese: '履く' },
  { id: 85, date: '2021-08-13', korean: '주말', japanese: '週末' },
  { id: 86, date: '2021-08-13', korean: '겨울', japanese: '冬' },
  { id: 87, date: '2021-08-13', korean: '봄', japanese: '春' },
  { id: 88, date: '2021-08-13', korean: '덥다', japanese: '暑い' },
  { id: 89, date: '2021-08-13', korean: '가을', japanese: '秋' },
  { id: 90, date: '2021-08-13', korean: '여름', japanese: '夏' },
  { id: 91, date: '2021-08-14', korean: '같이', japanese: '一緒に' },
  { id: 92, date: '2021-08-14', korean: '~을/를 배우는', japanese: '~を学ぶ' },
  { id: 93, date: '2021-08-14', korean: '배웁니다', japanese: '学びます' },
  { id: 94, date: '2021-08-14', korean: '보냅니다', japanese: '過ごします' },
  { id: 95, date: '2021-08-14', korean: '보내다', japanese: '過ごす' },
  { id: 96, date: '2021-08-14', korean: '수영', japanese: '水泳' },
  { id: 97, date: '2021-08-14', korean: '가르치다', japanese: '教える' },
  { id: 98, date: '2021-08-14', korean: '학습하다', japanese: '学習する' },
  { id: 99, date: '2021-08-14', korean: '찍다', japanese: '撮る' },
  { id: 100, date: '2021-08-14', korean: '영화표', japanese: '映画チケット' },
  { id: 101, date: '2021-08-14', korean: '해외여행', japanese: '海外旅行' },
  { id: 102, date: '2021-08-14', korean: '영어', japanese: '英語' },
  { id: 103, date: '2021-08-14', korean: 'O학년', japanese: 'ㅇ年生' },
  { id: 104, date: '2021-08-14', korean: '항상 / 늘', japanese: 'いつも' },
  { id: 105, date: '2021-08-14', korean: '영화관', japanese: '映画館' },
  { id: 106, date: '2021-08-14', korean: 'OO 같이', japanese: 'OOように / OOみたいに' },
  { id: 107, date: '2021-08-15', korean: '찾다', japanese: '探す' },
  { id: 108, date: '2021-08-15', korean: '복습하다', japanese: '復習する' },
  { id: 109, date: '2021-08-15', korean: '돈을 찾다', japanese: 'お金をおろす' },
  { id: 110, date: '2021-08-15', korean: '예습하다', japanese: '予習する' },
  { id: 111, date: '2021-08-15', korean: '유명', japanese: '有名' },
  { id: 112, date: '2021-08-15', korean: '찾으러 가다', japanese: '取りに行く' },
  { id: 113, date: '2021-08-15', korean: '잃다', japanese: 'なくす' },
  { id: 114, date: '2021-08-15', korean: '똑같다', japanese: 'そっくりだ' },
  { id: 115, date: '2021-08-15', korean: '비슷하다', japanese: '似ている' },
  { id: 116, date: '2021-08-15', korean: '바쁘다', japanese: '忙しい' },
  { id: 117, date: '2021-08-15', korean: '바빠서', japanese: '忙しくて・・・' },
  { id: 118, date: '2021-08-15', korean: '못 해요', japanese: '出来ません' },
  { id: 119, date: '2021-08-15', korean: '경찰서', japanese: '警察署' },
  { id: 120, date: '2021-08-16', korean: '마셔서', japanese: '飲んで' },
  { id: 121, date: '2021-08-16', korean: '잃어버린', japanese: '失くした' },
  { id: 122, date: '2021-08-16', korean: '지갑', japanese: '財布' },
  { id: 123, date: '2021-08-16', korean: '취미', japanese: '趣味' },
  { id: 124, date: '2021-08-16', korean: '문제', japanese: '問題' },
  { id: 125, date: '2021-08-16', korean: '나오다', japanese: '出る' },
  { id: 126, date: '2021-08-16', korean: '나왔습니다', japanese: '出ました' },
  { id: 127, date: '2021-08-16', korean: '마실 것', japanese: '飲み物' },
  { id: 128, date: '2021-08-16', korean: '음료수', japanese: '飲料水' },
  { id: 129, date: '2021-08-16', korean: '드시다', japanese: '召し上がる' },
  { id: 130, date: '2021-08-17', korean: '이유', japanese: '理由' },
  { id: 131, date: '2021-08-17', korean: '자신', japanese: '自分' },
  { id: 132, date: '2021-08-17', korean: '읽다', japanese: '読む' },
  { id: 133, date: '2021-08-17', korean: '신문', japanese: '新聞' },
  { id: 134, date: '2021-08-17', korean: '매일 아침', japanese: '毎朝' },
  { id: 135, date: '2021-08-17', korean: '우유', japanese: '牛乳' },
  { id: 136, date: '2021-08-17', korean: '한 잔', japanese: '一杯' },
  { id: 137, date: '2021-08-17', korean: '마십니다', japanese: '飲みます' },
  { id: 138, date: '2021-08-17', korean: '카페', japanese: 'カフェ' },
  { id: 139, date: '2021-08-17', korean: '이야기 했습니다', japanese: '話しました、言いました' },
  { id: 140, date: '2021-08-17', korean: '커피', japanese: 'コーヒー' },
  { id: 141, date: '2021-08-17', korean: '이야기하다(얘기하다), 말하다', japanese: '話す、言う、語る' },
  { id: 142, date: '2021-08-17', korean: '꿈', japanese: '夢' },
  { id: 143, date: '2021-08-17', korean: '이야기 하는', japanese: '話す、言う、語る' },
  { id: 144, date: '2021-08-17', korean: '저녁', japanese: '夜' },
  { id: 145, date: '2021-08-17', korean: '스스로', japanese: '自ら' },
  { id: 146, date: '2021-08-18', korean: '독서', japanese: '読書' },
  { id: 147, date: '2021-08-18', korean: '나중', japanese: '後' },
  { id: 148, date: '2021-08-18', korean: '어떻습니까?', japanese: 'どうですか' },
  { id: 149, date: '2021-08-18', korean: '소설', japanese: '小説' },
  { id: 150, date: '2021-08-18', korean: '어떻다', japanese: 'どうだ' },
  { id: 151, date: '2021-08-18', korean: '요즘', japanese: '最近' },
  { id: 152, date: '2021-08-20', korean: '왔습니다', japanese: '来ました、帰りました' },
  { id: 153, date: '2021-08-20', korean: '갔습니다', japanese: '行きました、帰りました' },
  { id: 154, date: '2021-08-20', korean: '뒤', japanese: '後ろ、今後' },
  { id: 155, date: '2021-08-20', korean: '수업', japanese: '授業' },
  { id: 156, date: '2021-08-20', korean: '이후', japanese: '以降、今後' },
  { id: 157, date: '2021-08-20', korean: '초급', japanese: '初級' },
  { id: 158, date: '2021-08-20', korean: '중급', japanese: '中級' },
  { id: 159, date: '2021-08-20', korean: '일찍', japanese: '早めに' },
  { id: 150, date: '2021-08-20', korean: '상급', japanese: '上級' },
  { id: 161, date: '2021-08-20', korean: '취소', japanese: '取り消し' },
  { id: 162, date: '2021-08-21', korean: '음식점', japanese: '飲食店' },
  { id: 163, date: '2021-08-21', korean: '어떤', japanese: 'どんな' },
  { id: 164, date: '2021-08-21', korean: '무슨', japanese: '何の' },
  { id: 165, date: '2021-08-21', korean: '갈까요?', japanese: '行きましょうか' },
  { id: 166, date: '2021-08-21', korean: '즐겁다', japanese: '楽しい' },
  { id: 167, date: '2021-08-21', korean: '재미없다', japanese: '面白くない' },
  { id: 168, date: '2021-08-21', korean: '식당', japanese: '食堂' },
  { id: 169, date: '2021-08-21', korean: '한식당, 한식집', japanese: '韓国料理屋' },
  { id: 170, date: '2021-08-21', korean: '중식당, 중식집', japanese: '中華料理屋' },
  { id: 171, date: '2021-08-21', korean: '일식당, 일식집', japanese: '日本料理屋' },
  { id: 172, date: '2021-08-21', korean: '양식당, 양식집, 양식점', japanese: '洋食屋' },
  { id: 173, date: '2021-08-22', korean: '이야기하는', japanese: '話す、言う、語る・・・' },
  { id: 174, date: '2021-08-22', korean: '이야기해서', japanese: '話して、言って、語って・・・' },
  { id: 175, date: '2021-08-22', korean: '읽는', japanese: '読む・・・' },
  { id: 176, date: '2021-08-22', korean: '읽어서', japanese: '読んで・・・' },
  { id: 177, date: '2021-08-22', korean: '재미있는', japanese: '面白い・・・' },
  { id: 178, date: '2021-08-22', korean: '재미있어서', japanese: '面白くて・・・' },
  { id: 179, date: '2021-08-22', korean: '본', japanese: '見た・・・' },
  { id: 180, date: '2021-08-22', korean: '봐서', japanese: '見て・・・' },
  { id: 181, date: '2021-08-22', korean: '마시는', japanese: '飲む・・・' },
  { id: 182, date: '2021-08-22', korean: '마셔서', japanese: '飲んで・・・' },
  { id: 183, date: '2021-08-22', korean: '받는', japanese: '貰う、受ける・・・' },
  { id: 184, date: '2021-08-22', korean: '받아서', japanese: '貰って、受けて・・・' },
  { id: 185, date: '2021-08-22', korean: '~마다', japanese: '～毎' },
  { id: 186, date: '2021-08-22', korean: '받다', japanese: '貰う、受ける' },
  { id: 187, date: '2021-08-22', korean: '주다', japanese: 'あげる、くれる' },
  { id: 188, date: '2021-08-22', korean: '알다', japanese: '分かる、知る' },
  { id: 189, date: '2021-08-22', korean: '아는 사람', japanese: '知り合い' },
  { id: 190, date: '2021-08-24', korean: '아는', japanese: '知る、分かる・・・' },
  { id: 191, date: '2021-08-24', korean: '알아서', japanese: '知って、分かって・・・' },
  { id: 192, date: '2021-08-24', korean: '만드는', japanese: '作る・・・' },
  { id: 193, date: '2021-08-24', korean: '만들어서', japanese: '作って・・・' },
  { id: 194, date: '2021-08-24', korean: '작은', japanese: '小さい・・・' },
  { id: 195, date: '2021-08-24', korean: '작아서', japanese: '小さくて・・・' },
  { id: 196, date: '2021-08-24', korean: '가게', japanese: 'お店' },
  { id: 197, date: '2021-08-24', korean: '직접 만들다', japanese: '手作りする' },
  { id: 198, date: '2021-08-24', korean: '만들다', japanese: '作る' },
  { id: 199, date: '2021-08-24', korean: '옷', japanese: '服' },
  { id: 200, date: '2021-08-24', korean: '모르다', japanese: '知らない、分からない' },
  { id: 201, date: '2021-08-24', korean: '신발', japanese: '靴' },
  { id: 202, date: '2021-08-24', korean: '작다', japanese: '小さい' },
  { id: 203, date: '2021-08-24', korean: '크다', japanese: '大きい' },
  { id: 204, date: '2021-08-25', korean: '가게 안', japanese: '店内' },
  { id: 205, date: '2021-08-25', korean: '상점', japanese: '商店' },
  { id: 206, date: '2021-08-25', korean: '공원', japanese: '公園' },
  { id: 207, date: '2021-08-25', korean: '산책하다', japanese: '散歩する' },
  { id: 208, date: '2021-08-25', korean: '놀다', japanese: '遊ぶ' },
  { id: 209, date: '2021-08-25', korean: '물건', japanese: '物 / 品物' },
  { id: 210, date: '2021-08-25', korean: '비싸다', japanese: '高い(値段)' },
  { id: 211, date: '2021-08-25', korean: '상품', japanese: '商品' },
  { id: 212, date: '2021-08-27', korean: '아픈', japanese: '痛い・・・' },
  { id: 213, date: '2021-08-27', korean: '아파서', japanese: '痛くて・・・' },
  { id: 214, date: '2021-08-27', korean: '알맞은', japanese: '正しい・・・' },
  { id: 215, date: '2021-08-27', korean: '받았어요', japanese: '貰いました、受けました' },
  { id: 216, date: '2021-08-27', korean: '불러서', japanese: '呼んだので・・・、呼ばれて・・・' },
  { id: 217, date: '2021-08-27', korean: '마음', japanese: '心' },
  { id: 218, date: '2021-08-27', korean: '말씀', japanese: 'お話' },
  { id: 219, date: '2021-08-27', korean: '방', japanese: '部屋' },
  { id: 220, date: '2021-08-27', korean: '좁다', japanese: '狭い' },
  { id: 221, date: '2021-08-27', korean: '넓다', japanese: '広い' },
  { id: 222, date: '2021-08-27', korean: '꽃', japanese: '花' },
  { id: 223, date: '2021-08-27', korean: '손님', japanese: 'お客さん' },
  { id: 224, date: '2021-08-27', korean: '부르다', japanese: '呼ぶ' },
  { id: 225, date: '2021-08-29', korean: '선물로 받았어요', japanese: 'プレゼントを貰いました' },
  { id: 226, date: '2021-08-29', korean: '받으러 갔어요', japanese: '受けに行きました' },
  { id: 227, date: '2021-08-29', korean: '압니다', japanese: '分かります' },
  { id: 228, date: '2021-08-29', korean: '제가 직접 만든 거에요', japanese: '私が直接作ったものです' },
  { id: 229, date: '2021-08-29', korean: '키가 작습니다', japanese: '背が小さいです' },
  { id: 230, date: '2021-08-29', korean: '가게에서', japanese: 'お店で' },
  { id: 231, date: '2021-08-29', korean: '어떤 가게', japanese: 'どんなお店' },
  { id: 232, date: '2021-08-29', korean: '주문', japanese: '注文' },
  { id: 233, date: '2021-08-29', korean: '공항', japanese: '空港' },
  { id: 234, date: '2021-08-29', korean: '이', japanese: 'この' },
  { id: 235, date: '2021-08-29', korean: '이것', japanese: 'これ' },
  { id: 236, date: '2021-08-29', korean: '그', japanese: 'その' },
  { id: 237, date: '2021-08-29', korean: '그것', japanese: 'それ' },
  { id: 238, date: '2021-08-29', korean: '저', japanese: 'あの' },
  { id: 239, date: '2021-08-29', korean: '저것', japanese: 'あれ' },
  { id: 240, date: '2021-08-29', korean: '불편', japanese: '不便' },
  { id: 241, date: '2021-08-29', korean: '앞', japanese: '前' },
  { id: 242, date: '2021-09-03', korean: '-보다~', japanese: '-より~' },
  { id: 243, date: '2021-09-03', korean: '동대문 / 남대문', japanese: '東大門 / 南大門' },
  { id: 244, date: '2021-09-03', korean: '시장에 가다', japanese: '買い物に行く' },
  { id: 245, date: '2021-09-03', korean: '더', japanese: 'もっと' },
  { id: 246, date: '2021-09-03', korean: '좀 더', japanese: 'もうちょっと' },
  { id: 247, date: '2021-09-03', korean: '약사', japanese: '薬剤師' },
  { id: 248, date: '2021-09-03', korean: '~마리', japanese: '~匹' },
  { id: 249, date: '2021-09-03', korean: '~권', japanese: '~冊' },
  { id: 250, date: '2021-09-03', korean: '약국', japanese: '薬局' },
  { id: 251, date: '2021-09-03', korean: '시장', japanese: '市場' },
  { id: 252, date: '2021-09-03', korean: '장을 보다', japanese: '買い物する' },
  { id: 253, date: '2021-09-10', korean: '빌리다', japanese: '借りる' },
  { id: 254, date: '2021-09-10', korean: '처방전', japanese: '処方箋' },
  { id: 255, date: '2021-09-10', korean: '속옷', japanese: '下着' },
  { id: 256, date: '2021-09-10', korean: '세일', japanese: 'セール' },
  { id: 257, date: '2021-09-10', korean: '쇼핑몰', japanese: 'ショッピングモール' },
  { id: 258, date: '2021-09-10', korean: '도서관', japanese: '図書館' },
  { id: 259, date: '2021-09-10', korean: '매장', japanese: '売り場' },
  { id: 260, date: '2021-09-10', korean: '서고', japanese: '書庫' },
  { id: 261, date: '2021-09-10', korean: '옷장', japanese: '箪笥、クローゼット ' },
  { id: 262, date: '2021-09-10', korean: '백화점', japanese: 'デパート' },
  { id: 263, date: '2021-09-10', korean: '아주 / 매우', japanese: 'とても' },
  { id: 264, date: '2021-09-10', korean: '벗다', japanese: '脱ぐ' },
  { id: 265, date: '2021-09-10', korean: '보내는', japanese: '送る・・・' },
  { id: 266, date: '2021-09-10', korean: '보내서', japanese: '送って・・・' },
  { id: 267, date: '2021-09-10', korean: '열람실', japanese: '閲覧室' },
  { id: 268, date: '2021-09-10', korean: '편지', japanese: '手紙' },
  { id: 269, date: '2021-09-10', korean: '도서실', japanese: '図書室' },
  { id: 270, date: '2021-09-11', korean: '부치다', japanese: '送る' },
  { id: 271, date: '2021-09-11', korean: '지내다', japanese: '過ごす' },
  { id: 272, date: '2021-09-11', korean: '건너다', japanese: '渡る' },
  { id: 273, date: '2021-09-11', korean: '건너편 / 맞은편', japanese: '向こう側' },
  { id: 274, date: '2021-09-11', korean: '횡단보도', japanese: '横断歩道' },
  { id: 275, date: '2021-09-11', korean: '육교', japanese: '歩道橋' },
  { id: 276, date: '2021-09-11', korean: '건너는', japanese: '渡る・・・' },
  { id: 277, date: '2021-09-11', korean: '건너서', japanese: '渡って・・・' },
  { id: 278, date: '2021-09-11', korean: '기다리는', japanese: '待つ・・・' },
  { id: 279, date: '2021-09-11', korean: '기다려서', japanese: '待って・・・' },
  { id: 280, date: '2021-09-12', korean: '순서', japanese: '順番' },
  { id: 281, date: '2021-09-12', korean: '방학', japanese: '休み' },
  { id: 282, date: '2021-09-12', korean: '간 후에는~', japanese: '行った後には' },
  { id: 283, date: '2021-09-12', korean: '싸다', japanese: '安い' },
  { id: 284, date: '2021-09-12', korean: '이메일', japanese: 'イーメール' },
  { id: 285, date: '2021-09-12', korean: '휴가', japanese: '休暇' },
  { id: 286, date: '2021-09-12', korean: '서점', japanese: '書店' },
  { id: 287, date: '2021-09-12', korean: '해외', japanese: '海外' },
  { id: 288, date: '2021-10-12', korean: '전철', japanese: '電車' },
  { id: 289, date: '2021-10-12', korean: '바지', japanese: 'ズボン' },
  { id: 290, date: '2021-10-12', korean: '입원', japanese: '入院' },
  { id: 291, date: '2021-10-12', korean: '일하다', japanese: '働く' },
  { id: 292, date: '2021-10-12', korean: '요즘 / 최근', japanese: '最近、この頃' },
  { id: 293, date: '2021-10-12', korean: '옛날', japanese: '昔' },
  { id: 294, date: '2021-10-12', korean: '조금씩', japanese: '少しずつ' },
  { id: 295, date: '2021-10-12', korean: '입는~', japanese: '着る・・・' },
  { id: 296, date: '2021-10-12', korean: '입어서~', japanese: '着て・・・' },
  { id: 297, date: '2021-10-12', korean: '다니는~', japanese: '通う・・・' },
  { id: 298, date: '2021-10-12', korean: '다녀서~', japanese: '通って・・・' },
  { id: 299, date: '2021-10-12', korean: '굉장히', japanese: 'ものすごく' },
  { id: 300, date: '2021-10-12', korean: '함께 / 같이', japanese: '一緒に' },
  { id: 301, date: '2021-10-12', korean: '따로', japanese: '別に' },
  { id: 302, date: '2021-10-12', korean: '혼자', japanese: 'ひとりで' },
  { id: 303, date: '2021-10-12', korean: '맛없다', japanese: 'まずい' },
  { id: 304, date: '2021-10-12', korean: '쓰다', japanese: '書く、使う、被る、苦い' },
  { id: 305, date: '2021-10-12', korean: '엽서', japanese: 'はがき' },
  { id: 306, date: '2021-10-12', korean: '연하장', japanese: '年賀状' },
  { id: 307, date: '2021-10-12', korean: '창구', japanese: '窓口' },
  { id: 308, date: '2021-10-12', korean: '계좌', japanese: '口座' },
  { id: 309, date: '2021-10-12', korean: '촬영', japanese: '撮影' },
  { id: 310, date: '2021-10-12', korean: '사진첩', japanese: 'アルバム' },
  { id: 311, date: '2021-10-12', korean: '가지다', japanese: '持つ' },
  { id: 312, date: '2021-10-12', korean: '바쁜~', japanese: '忙しい・・・' },
  { id: 313, date: '2021-10-12', korean: '바빠서~', japanese: '忙しくて・・・' },
  { id: 314, date: '2021-10-12', korean: '바쁘다', japanese: '忙しい' },
  { id: 315, date: '2021-10-12', korean: '급하다', japanese: '急だ、緊急だ' },
  { id: 316, date: '2021-10-12', korean: '한가하다', japanese: '暇だ' },
  { id: 317, date: '2021-10-12', korean: '청소하다', japanese: '掃除する' },
  { id: 318, date: '2021-10-12', korean: '깨끗하게~', japanese: '綺麗に' },
  { id: 319, date: '2021-10-12', korean: '정리하다', japanese: '整理する' },
  { id: 320, date: '2021-10-12', korean: '치우다', japanese: '片付ける' },
  { id: 321, date: '2021-10-12', korean: '안내', japanese: '案内' },
  { id: 322, date: '2021-10-12', korean: '청소하는', japanese: '掃除する・・・' },
  { id: 323, date: '2021-10-12', korean: '청소해서', japanese: '掃除して・・・' },
  { id: 324, date: '2021-10-12', korean: '듣다', japanese: '聞く' },
  { id: 325, date: '2021-10-12', korean: '음악', japanese: '音楽' },
  { id: 326, date: '2021-10-12', korean: '라디오', japanese: 'ラジオ' },
  { id: 327, date: '2021-10-12', korean: '들리다', japanese: '聞こえる' },
  { id: 328, date: '2021-10-12', korean: '듣는', japanese: '聞く・・・' },
  { id: 329, date: '2021-10-12', korean: '들어서', japanese: '聞いて・・・' },
  { id: 330, date: '2021-10-12', korean: '관광', japanese: '観光' },
  { id: 331, date: '2021-10-12', korean: '안내원', japanese: '案内員' },
  { id: 332, date: '2021-10-12', korean: '얼굴', japanese: '顔' },
  { id: 333, date: '2021-10-12', korean: '아름답다', japanese: '美しい' },
  { id: 334, date: '2021-10-12', korean: '밉다', japanese: '醜い、にくい' },
  { id: 335, date: '2021-10-12', korean: '가끔', japanese: 'たまに' },
  { id: 336, date: '2021-10-12', korean: '늦다', japanese: '遅れる、遅い' },
  { id: 337, date: '2021-10-12', korean: '쉬는날', japanese: '休みの日' },
  { id: 338, date: '2021-10-12', korean: '갈아입다', japanese: '着替える' },
  { id: 339, date: '2021-10-12', korean: '입어보다', japanese: '試着する' },
  { id: 340, date: '2021-10-12', korean: '다니다', japanese: '通う、勤める' },
  { id: 341, date: '2021-10-12', korean: '걸리다', japanese: 'かかる' },
  { id: 342, date: '2021-10-12', korean: '비싸다', japanese: '高い' },
  { id: 343, date: '2021-10-12', korean: '고가이다', japanese: '高価だ' },
  { id: 344, date: '2021-10-12', korean: '저렴하다, 싸다', japanese: '安い' },
  { id: 345, date: '2021-10-12', korean: '빠르다', japanese: '速い' },
  { id: 346, date: '2021-10-12', korean: '천천히', japanese: 'ゆっくり' },
  { id: 347, date: '2021-10-12', korean: '장소', japanese: '場所' },
  { id: 348, date: '2021-10-12', korean: '곳', japanese: '所' },
  { id: 349, date: '2021-10-12', korean: '교육하다', japanese: '教育する' },
  { id: 350, date: '2021-10-12', korean: '시작하다', japanese: '始める' },
  { id: 351, date: '2021-10-12', korean: '끝나다', japanese: '終わる' },
  { id: 352, date: '2021-10-12', korean: '끝내다', japanese: '終える' },
  { id: 353, date: '2021-10-12', korean: '치다', japanese: '打つ、弾く' },
  { id: 354, date: '2021-10-12', korean: '지하철', japanese: '地下鉄' },
  { id: 355, date: '2021-10-12', korean: '타다', japanese: '乗る' },
  { id: 356, date: '2021-10-12', korean: '~로 갈아타다', japanese: '〜に乗り換える' },
  { id: 357, date: '2021-10-12', korean: '역', japanese: '駅' },
  { id: 358, date: '2021-10-12', korean: '갖다', japanese: '持つ' },
  { id: 359, date: '2021-10-12', korean: '소유하다', japanese: '所有する' },
  { id: 360, date: '2021-10-12', korean: '길', japanese: '道' },
  { id: 361, date: '2021-10-12', korean: '다른', japanese: '違う・・・、他の・・・、別の・・・' },
  { id: 362, date: '2021-10-12', korean: '꽃', japanese: '花' },
  { id: 363, date: '2021-10-12', korean: '너무하다', japanese: 'ひどい' },
  { id: 364, date: '2021-10-12', korean: '서점', japanese: '書店、本屋' },
  { id: 365, date: '2021-10-12', korean: '이사', japanese: '引越し' },
  { id: 366, date: '2021-10-12', korean: '준비', japanese: '準備' },
  { id: 367, date: '2021-10-12', korean: '빌리다', japanese: '借りる' },
  { id: 368, date: '2021-10-12', korean: '막히다', japanese: '混んでいる' },
  { id: 369, date: '2021-10-12', korean: '좁다', japanese: '狭い' },
  { id: 370, date: '2021-10-12', korean: '색', japanese: '色' },
  { id: 371, date: '2021-10-12', korean: '딴', japanese: '別の' },
  { id: 372, date: '2021-10-12', korean: '꽃놀이', japanese: '花見' },
  { id: 373, date: '2021-10-12', korean: '꽃구경', japanese: '花見' },
  { id: 373, date: '2021-10-12', korean: '꽃가게', japanese: '花屋' },
  { id: 374, date: '2021-10-12', korean: '꽃집', japanese: '花屋' },
  { id: 375, date: '2021-10-12', korean: '지다', japanese: '散る' },
  { id: 376, date: '2021-10-12', korean: '생신', japanese: 'お誕生日' },
  { id: 377, date: '2021-10-12', korean: '인터넷', japanese: 'インターネット' },
  { id: 378, date: '2021-10-12', korean: '책방', japanese: '本屋' },
  { id: 379, date: '2021-10-12', korean: '수영하다', japanese: '泳ぐ' },
  { id: 380, date: '2021-10-12', korean: '수영', japanese: '水泳' },
  { id: 381, date: '2021-10-12', korean: '선수', japanese: '選手' },
  { id: 382, date: '2021-10-12', korean: '수영장', japanese: 'プール' },
  { id: 383, date: '2021-10-12', korean: '짐', japanese: '荷物' },
  { id: 384, date: '2021-10-12', korean: '센터', japanese: 'センター' },
  { id: 385, date: '2021-10-12', korean: '시험', japanese: '試験' },
  { id: 386, date: '2021-10-12', korean: '준비물', japanese: '持ち物' },
  { id: 387, date: '2021-10-12', korean: '무료', japanese: '無料、タダ' },
  { id: 388, date: '2021-10-12', korean: '빌려주다', japanese: '貸す' },
  { id: 389, date: '2021-10-12', korean: '돌려주다', japanese: '返す' },
  { id: 390, date: '2021-10-12', korean: '하루', japanese: '１日' },
  { id: 391, date: '2021-10-12', korean: '이틀', japanese: '２日' },
  { id: 392, date: '2021-10-12', korean: '사흘', japanese: '３日' },
  { id: 393, date: '2021-10-12', korean: '나흘', japanese: '４日' },
  { id: 394, date: '2021-10-12', korean: '닷새', japanese: '５日' },
  { id: 395, date: '2021-10-12', korean: '일개월 / 한 달', japanese: '１ヶ月' },
  { id: 396, date: '2021-10-12', korean: '이개월 / 두 달', japanese: '２ヶ月' },
  { id: 397, date: '2021-10-12', korean: '삼개월 / 석 달 / 세 달', japanese: '３ヶ月' },
  { id: 398, date: '2021-10-12', korean: '사개월 / 넉 달 / 네 달', japanese: '４ヶ月' },
  { id: 399, date: '2021-10-12', korean: '주말', japanese: '週末' },
  { id: 400, date: '2021-10-12', korean: '월말', japanese: '月末' },
  { id: 401, date: '2021-10-12', korean: '평일', japanese: '平日' },
  { id: 402, date: '2021-10-12', korean: '휴일', japanese: '休日' },
  { id: 403, date: '2021-10-12', korean: '초', japanese: '初旬' },
  { id: 404, date: '2021-10-12', korean: '중순', japanese: '中旬' },
  { id: 405, date: '2021-10-12', korean: '하순', japanese: '下旬' },
  { id: 406, date: '2021-10-12', korean: '사계절', japanese: '四季' },
  { id: 407, date: '2021-10-12', korean: '춘하추동', japanese: '春夏秋冬' },
  { id: 408, date: '2021-10-12', korean: '인사', japanese: 'あいさつ' },
  { id: 409, date: '2021-10-12', korean: '나누다', japanese: '交わす' },
  { id: 410, date: '2021-10-12', korean: '가깝다', japanese: '近い' },
  { id: 411, date: '2021-10-12', korean: '가까운 곳', japanese: '近場' },
  { id: 412, date: '2021-10-12', korean: '멀다', japanese: '遠い' },
  { id: 413, date: '2021-10-12', korean: '고향', japanese: '故郷' },
  { id: 414, date: '2021-10-12', korean: '(고향에)내려가다', japanese: '帰る' },
  { id: 415, date: '2021-10-12', korean: '고향집', japanese: '実家' },
  { id: 416, date: '2021-10-12', korean: '공항', japanese: '空港' },
  { id: 417, date: '2021-10-12', korean: '국제', japanese: '国際' },
  { id: 418, date: '2021-10-12', korean: '공항 버스', japanese: 'リムジンバス' },
  { id: 419, date: '2021-10-12', korean: '마중가다', japanese: '迎えに行く' },
  { id: 420, date: '2021-10-12', korean: '맛', japanese: '味' },
  { id: 421, date: '2021-10-12', korean: '(노래를)부르다', japanese: '歌う' },
  { id: 422, date: '2021-10-12', korean: '노래방', japanese: 'カラオケ' },
  { id: 423, date: '2021-10-12', korean: '가사', japanese: '歌詞' },
  { id: 424, date: '2021-10-12', korean: '건강하다', japanese: '健康だ、元気だ' },
  { id: 425, date: '2021-10-12', korean: '과일', japanese: '果物' },
  { id: 426, date: '2021-10-12', korean: '사무실', japanese: '事務室' },
  { id: 427, date: '2021-10-12', korean: '사무직원', japanese: '事務員' },
  { id: 428, date: '2021-10-12', korean: '아직', japanese: 'まだ' },
  { id: 429, date: '2021-10-12', korean: '이미', japanese: 'すでに' },
  { id: 430, date: '2021-10-12', korean: '벌써', japanese: 'もう、とっくに' },
  { id: 431, date: '2021-10-12', korean: '일찍', japanese: '早く' },
  { id: 432, date: '2021-10-12', korean: '아침 일찍', japanese: '朝早く' },
  { id: 433, date: '2021-10-12', korean: '이르다', japanese: '早い' },
  { id: 434, date: '2021-10-12', korean: '늦게', japanese: '遅く' },
  { id: 435, date: '2021-10-12', korean: '구두', japanese: '靴' },
  { id: 436, date: '2021-10-12', korean: '신발', japanese: '履物' },
  { id: 437, date: '2021-10-14', korean: '근처', japanese: '近所' },
  { id: 438, date: '2021-10-14', korean: '주위', japanese: '周囲' },
  { id: 439, date: '2021-10-14', korean: '자기소개', japanese: '自己紹介' },
  { id: 440, date: '2021-10-14', korean: '잠', japanese: '睡眠' },
  { id: 441, date: '2021-10-14', korean: '일어나다', japanese: '起きる' },
  { id: 442, date: '2021-10-14', korean: '소극장', japanese: '小劇場' },
  { id: 443, date: '2021-10-14', korean: '소개', japanese: '紹介' },
  { id: 444, date: '2021-10-14', korean: '소개 받다', japanese: '紹介してもらう' },
  { id: 445, date: '2021-10-14', korean: '잠을 자다', japanese: '睡眠を取る' },
  { id: 446, date: '2021-10-14', korean: '극장', japanese: '劇場' },
  { id: 447, date: '2021-10-14', korean: '끝나다', japanese: '終わる' },
  { id: 448, date: '2021-10-16', korean: '벌다', japanese: '稼ぐ' },
  { id: 449, date: '2021-10-16', korean: '동전', japanese: 'コイン' },
  { id: 450, date: '2021-10-16', korean: '들어가다', japanese: '入る、入っていく' },
  { id: 451, date: '2021-10-16', korean: '나가다', japanese: '出ていく' },
  { id: 452, date: '2021-10-16', korean: '모으다', japanese: '貯める' },
  { id: 453, date: '2021-10-16', korean: '지폐', japanese: '紙幣' },
  { id: 454, date: '2021-10-16', korean: '들어가는 곳', japanese: '入口' },
  { id: 455, date: '2021-10-16', korean: '들어오다', japanese: '入ってくる' },
  { id: 456, date: '2021-10-17', korean: '바꾸다', japanese: '変える、切り替わる' },
  { id: 457, date: '2021-10-17', korean: '바꿔서', japanese: '変えて・・・' },
  { id: 458, date: '2021-10-17', korean: '변하다', japanese: '変わる' },
  { id: 459, date: '2021-10-17', korean: '교환하다', japanese: '交換する' },
  { id: 460, date: '2021-10-17', korean: '생활', japanese: '生活' },
  { id: 461, date: '2021-10-17', korean: '필수품', japanese: '必需品' },
  { id: 462, date: '2021-10-17', korean: '신문사', japanese: '新聞社' },
  { id: 463, date: '2021-10-17', korean: '기사', japanese: '記事' },
  { id: 464, date: '2021-10-17', korean: '광고', japanese: '広告' },
  { id: 465, date: '2021-10-17', korean: '모자를 쓰다', japanese: '帽子をかぶる' },
  { id: 466, date: '2021-10-17', korean: '벗다', japanese: '脱ぐ' },
  { id: 467, date: '2021-10-17', korean: '-(으)ㄹ 생각이다', japanese: '~するつもりだ' },
  { id: 468, date: '2021-10-18', korean: '생각이 나다', japanese: '思い出す' },
  { id: 469, date: '2021-10-18', korean: '생각이 다르다', japanese: '考えが違う' },
  { id: 470, date: '2021-10-18', korean: '부르다', japanese: '呼ぶ' },
  { id: 470, date: '2021-10-18', korean: '성함', japanese: 'お名前' },
  { id: 471, date: '2021-10-18', korean: '성', japanese: '名字' },
  { id: 472, date: '2021-10-18', korean: '성명', japanese: '姓名' },
  { id: 473, date: '2021-10-18', korean: '팔다', japanese: '売る' },
  { id: 474, date: '2021-10-18', korean: '팔리다', japanese: '売れる' },
  { id: 475, date: '2021-10-18', korean: '판매하다', japanese: '販売する' },
  { id: 476, date: '2021-10-18', korean: '사다', japanese: '買う' },
  { id: 477, date: '2021-10-18', korean: '다시', japanese: '再び / また' },
  { id: 478, date: '2021-10-18', korean: '일하러 가다', japanese: '働きに行く' },
  { id: 479, date: '2021-10-18', korean: '근무', japanese: '勤務' },
  { id: 480, date: '2021-10-18', korean: '참', japanese: '本当に' },
  { id: 481, date: '2021-10-18', korean: '거짓말', japanese: '嘘' },
  { id: 482, date: '2021-10-18', korean: '다시 한 번', japanese: 'もう一度' },
  { id: 483, date: '2021-10-18', korean: '다시 하다', japanese: 'やり直す' },
  { id: 484, date: '2021-10-20', korean: '걷다', japanese: '歩く' },
  { id: 485, date: '2021-10-20', korean: '걸어서・・・', japanese: '歩いて・・・' },
  { id: 486, date: '2021-10-20', korean: '걷기 운동', japanese: 'ウォーキング' },
  { id: 487, date: '2021-10-20', korean: '걸어가다', japanese: '歩いていく' },
  { id: 488, date: '2021-10-20', korean: '뛰다', japanese: '走る' },
  { id: 489, date: '2021-10-20', korean: '구경하다', japanese: '見物 / 観覧する' },
  { id: 490, date: '2021-10-20', korean: '단풍구경', japanese: '紅葉狩り' },
  { id: 491, date: '2021-10-20', korean: '쉽다', japanese: '優しい / 簡単だ' },
  { id: 492, date: '2021-10-20', korean: '쉬운・・・', japanese: '優しい・・・' },
  { id: 493, date: '2021-10-20', korean: '쉬워서・・・', japanese: '優しくて・・・ / 簡単で・・・' },
  { id: 494, date: '2021-10-20', korean: '〜기 쉽다', japanese: '〜しやすい' },
  { id: 495, date: '2021-10-20', korean: '간단하다', japanese: '簡単だ' },
  { id: 496, date: '2021-10-20', korean: '어렵다', japanese: '難しい' },
  { id: 497, date: '2021-10-20', korean: '시험', japanese: '試験 / テスト' },
  { id: 498, date: '2021-10-20', korean: '시험을 못 보다', japanese: '試験の結果が悪い' },
  { id: 499, date: '2021-10-20', korean: '시험을 보다', japanese: '試験を受ける' },
  { id: 500, date: '2021-10-20', korean: '기간', japanese: '期間' },
  { id: 501, date: '2021-10-20', korean: '어려운・・・', japanese: '難しい・・・' },
  { id: 502, date: '2021-10-20', korean: '어려워서・・・', japanese: '難しくて・・・' },
  { id: 503, date: '2021-10-20', korean: '~기 어렵다', japanese: '〜しにくい' },
  { id: 504, date: '2021-10-23', korean: '힘들다', japanese: '大変だ' },
  { id: 505, date: '2021-10-23', korean: '우산', japanese: '傘' },
  { id: 506, date: '2021-10-23', korean: '자리', japanese: '席' },
  { id: 507, date: '2021-10-23', korean: '자리에서 일어나다', japanese: '席から立ち上がる' },
  { id: 508, date: '2021-10-23', korean: '우산을 쓰다', japanese: '傘をさす' },
  { id: 509, date: '2021-10-23', korean: '양산', japanese: '日傘' },
  { id: 510, date: '2021-10-23', korean: '눕다', japanese: '横になる' },
  { id: 511, date: '2021-10-23', korean: '촬영하다', japanese: '撮影する' },
  { id: 512, date: '2021-10-23', korean: '먼저', japanese: '先に / まず' },
  { id: 513, date: '2021-10-23', korean: '우선', japanese: 'まず' },
  { id: 514, date: '2021-10-23', korean: '~기가 힘들다', japanese: '~するのが大変だ' },
  { id: 515, date: '2021-10-23', korean: '나중에', japanese: '後で' },
  { id: 516, date: '2021-10-23', korean: '모르다', japanese: '分からない / 知らない' },
  { id: 517, date: '2021-10-23', korean: '몰라서', japanese: '分からなくて' },
  { id: 518, date: '2021-10-23', korean: '계획', japanese: '計画 / 予定' },
  { id: 519, date: '2021-10-23', korean: '계획을 세우다', japanese: '計画を立てる' },
  { id: 520, date: '2021-10-23', korean: '바다', japanese: '海' },
  { id: 521, date: '2021-10-23', korean: '해수욕장', japanese: '海水浴場' },
  { id: 522, date: '2021-10-23', korean: '해변 / 바닷가', japanese: '海辺' },
  { id: 523, date: '2021-10-23', korean: '알리다', japanese: '知らせる' },
  { id: 524, date: '2021-10-23', korean: '알려서・・・', japanese: '知らせて・・・' },
  { id: 525, date: '2021-10-24', korean: '알림', japanese: 'お知らせ' },
  { id: 526, date: '2021-10-24', korean: '알려주다', japanese: '教える' },
  { id: 527, date: '2021-10-24', korean: '책상', japanese: '机' },
  { id: 528, date: '2021-10-24', korean: '의자', japanese: '椅子' },
  { id: 529, date: '2021-10-24', korean: '책장 / 책꽂이', japanese: '本棚' },
  { id: 530, date: '2021-10-24', korean: '서재', japanese: '書斎' },
  { id: 531, date: '2021-10-24', korean: '꼭', japanese: '必ず / ぜひ' },
  { id: 532, date: '2021-10-24', korean: '반드시', japanese: '必ず' },
  { id: 533, date: '2021-10-24', korean: '절대로', japanese: '絶対に' },
  { id: 534, date: '2021-10-24', korean: '대하다', japanese: '対する' },
  { id: 535, date: '2021-10-24', korean: '대해서・・・', japanese: '対して・・・' },
  { id: 536, date: '2021-10-24', korean: '~에 대해', japanese: '~について' },
  { id: 537, date: '2021-10-24', korean: '~에 대한', japanese: '~についての' },
  { id: 538, date: '2021-10-24', korean: '관하다', japanese: '関する' },
  { id: 539, date: '2021-10-24', korean: '등산', japanese: '登山' },
  { id: 540, date: '2021-10-24', korean: '등산화', japanese: '登山靴' },
  { id: 541, date: '2021-10-24', korean: '등산용품', japanese: '登山グッズ' },
  { id: 542, date: '2021-10-24', korean: '박물관', japanese: '博物館' },
  { id: 543, date: '2021-10-24', korean: '박물관 관람', japanese: '博物館観覧' },
  { id: 544, date: '2021-10-24', korean: '견학', japanese: '見学' },
  { id: 545, date: '2021-10-24', korean: '미술관', japanese: '美術館' },
  { id: 546, date: '2021-10-24', korean: '차', japanese: 'お茶' },
  { id: 547, date: '2021-10-24', korean: '차를 타다', japanese: 'お茶お入れる' },
  { id: 548, date: '2021-10-24', korean: '녹차', japanese: '禄茶' },
  { id: 549, date: '2021-10-24', korean: '홍차', japanese: '紅茶' },
  { id: 550, date: '2021-10-24', korean: '안 좋다', japanese: '良くない' },
  { id: 551, date: '2021-10-24', korean: '나오다', japanese: '出る / 出てくる' },
  { id: 552, date: '2021-10-24', korean: '나와서・・・', japanese: '出て・・・' },
  { id: 553, date: '2021-10-24', korean: '나가다', japanese: '出ていく' },
  { id: 554, date: '2021-10-24', korean: '들어오다', japanese: '入ってくる' },
  {
    "id": 555,
    "date": "2021-10-25",
    "japanese": "모두",
    "korean": "すべて / 皆"
  },
  {
    "id": 556,
    "date": "2021-10-25",
    "japanese": "전부",
    "korean": "全部"
  },
  {
    "id": 557,
    "date": "2021-10-25",
    "japanese": "다",
    "korean": "皆"
  },
  {
    "id": 558,
    "date": "2021-10-25",
    "japanese": "전혀",
    "korean": "全然"
  },
  {
    "id": 559,
    "date": "2021-10-25",
    "japanese": "지나다",
    "korean": "経つ / 過ぎる"
  },
  {
    "id": 560,
    "date": "2021-10-25",
    "japanese": "지난주",
    "korean": "先週"
  },
  {
    "id": 561,
    "date": "2021-10-25",
    "japanese": "지난달",
    "korean": "先月"
  },
  {
    "id": 562,
    "date": "2021-10-25",
    "japanese": "지난해",
    "korean": "去年"
  },
  {
    "id": 563,
    "date": "2021-10-25",
    "japanese": "도착하다",
    "korean": "到着する"
  },
  {
    "id": 564,
    "date": "2021-10-25",
    "japanese": "시간이 지나다",
    "korean": "時間が経つ"
  },
  {
    "id": 565,
    "date": "2021-10-25",
    "japanese": "도와주다",
    "korean": "助けてあげる / 助けてくれる / 手伝う"
  },
  {
    "id": 566,
    "date": "2021-10-25",
    "japanese": "돕다",
    "korean": "助ける"
  },
  {
    "id": 567,
    "date": "2021-10-25",
    "japanese": "돌보다",
    "korean": "面倒見る"
  },
  {
    "id": 568,
    "date": "2021-10-25",
    "japanese": "운전",
    "korean": "運転"
  },
  {
    "id": 569,
    "date": "2021-10-25",
    "japanese": "운전면허증",
    "korean": "運転免許書"
  },
  {
    "id": 570,
    "date": "2021-10-25",
    "japanese": "따다",
    "korean": "取る"
  },
  {
    "id": 571,
    "date": "2021-10-25",
    "japanese": "운전면허를 따다",
    "korean": "運転免許を取る"
  },
  {
    "id": 572,
    "date": "2021-10-25",
    "japanese": "~아/어 주다",
    "korean": "~してあげる / ~してくれる"
  },
  {
    "id": 573,
    "date": "2021-10-25",
    "japanese": "받다",
    "korean": "もらう"
  },
  {
    "id": 574,
    "date": "2021-10-25",
    "japanese": "주시다",
    "korean": "くださる"
  },
  {
    "id": 575,
    "date": "2021-10-25",
    "japanese": "드리다",
    "korean": "差し上げる"
  },
  {
    "id": 576,
    "date": "2021-10-26",
    "japanese": "지갑",
    "korean": "財布"
  },
  {
    "id": 577,
    "date": "2021-10-26",
    "japanese": "(지갑에) 넣다",
    "korean": "(財布に)入れる"
  },
  {
    "id": 578,
    "date": "2021-10-26",
    "japanese": "(지갑에서) 꺼내다",
    "korean": "(財布から)取り出す"
  },
  {
    "id": 579,
    "date": "2021-10-26",
    "japanese": "친하게 지내다",
    "korean": "仲良くする"
  },
  {
    "id": 580,
    "date": "2021-10-26",
    "japanese": "초대",
    "korean": "招待"
  },
  {
    "id": 581,
    "date": "2021-10-26",
    "japanese": "초대장",
    "korean": "招待状"
  },
  {
    "id": 582,
    "date": "2021-10-26",
    "japanese": "초대를 받다",
    "korean": "招待をされる"
  },
  {
    "id": 583,
    "date": "2021-10-26",
    "japanese": "초대 손님",
    "korean": "招待客"
  },
  {
    "id": 584,
    "date": "2021-10-26",
    "japanese": "내리다",
    "korean": "降りる / 降る"
  },
  {
    "id": 585,
    "date": "2021-10-26",
    "japanese": "비가 내리다",
    "korean": "雨が降る"
  },
  {
    "id": 586,
    "date": "2021-10-26",
    "japanese": "차에서 내리다",
    "korean": "車から降りる"
  },
  {
    "id": 587,
    "date": "2021-10-26",
    "japanese": "돌아가다",
    "korean": "帰っていく / 戻る"
  },
  {
    "id": 588,
    "date": "2021-10-26",
    "japanese": "자리로 돌아가다",
    "korean": "席に戻る"
  },
  {
    "id": 589,
    "date": "2021-10-26",
    "japanese": "돌아오다",
    "korean": "帰ってくる"
  },
  {
    "id": 590,
    "date": "2021-10-26",
    "japanese": "돌아가시다",
    "korean": "お戻りにする / 亡くなる"
  },
  {
    "id": 591,
    "date": "2021-10-26",
    "japanese": "내려서・・・",
    "korean": "降りて・・・ / 降って・・・"
  },
  {
    "id": 592,
    "date": "2021-10-26",
    "japanese": "사전",
    "korean": "辞書"
  },
  {
    "id": 593,
    "date": "2021-10-26",
    "japanese": "사전을 찾다",
    "korean": "辞書を引く"
  },
  {
    "id": 594,
    "date": "2021-10-26",
    "japanese": "방송",
    "korean": "放送"
  },
  {
    "id": 595,
    "date": "2021-10-26",
    "japanese": "방송국",
    "korean": "放送局"
  },
  {
    "id": 596,
    "date": "2021-10-26",
    "japanese": "음악 방송",
    "korean": "音楽番組"
  },
  {
    "id": 597,
    "date": "2021-10-26",
    "japanese": "시사 프로그램",
    "korean": "時事番組"
  },
  {
    "id": 598,
    "date": "2021-10-26",
    "japanese": "부탁하다",
    "korean": "頼む / 願う"
  },
  {
    "id": 599,
    "date": "2021-10-26",
    "japanese": "아이를 부탁하다",
    "korean": "子供の世話を頼む"
  },
  {
    "id": 600,
    "date": "2021-10-26",
    "japanese": "부탁하시다",
    "korean": "お頼みする / お願いする"
  },
  {
    "id": 601,
    "date": "2021-10-26",
    "japanese": "부탁해서",
    "korean": "頼んで / 願って"
  },
  {
    "id": 602,
    "date": "2021-10-26",
    "japanese": "언제나",
    "korean": "いつも"
  },
  {
    "id": 603,
    "date": "2021-10-26",
    "japanese": "늦다",
    "korean": "遅れる"
  },
  {
    "id": 604,
    "date": "2021-10-26",
    "japanese": "늘",
    "korean": "いつも"
  },
  {
    "id": 605,
    "date": "2021-10-26",
    "japanese": "연습",
    "korean": "練習"
  },
  {
    "id": 606,
    "date": "2021-10-26",
    "japanese": "열심히 연습을 하다",
    "korean": "一生懸命に練習する"
  },
  {
    "id": 607,
    "date": "2021-10-26",
    "japanese": "이용하다",
    "korean": "利用する"
  },
  {
    "id": 608,
    "date": "2021-10-26",
    "japanese": "나이",
    "korean": "年 / 年齢"
  },
  {
    "id": 609,
    "date": "2021-10-26",
    "japanese": "바지",
    "korean": "ズボン"
  },
  {
    "id": 610,
    "date": "2021-10-26",
    "japanese": "천천히",
    "korean": "(スピード)ゆっくり"
  },
  {
    "id": 611,
    "date": "2021-10-26",
    "japanese": "그림",
    "korean": "絵"
  },
  {
    "id": 612,
    "date": "2021-10-26",
    "japanese": "나무",
    "korean": "木"
  },
  {
    "id": 613,
    "date": "2021-10-26",
    "japanese": "놀다",
    "korean": "遊ぶ"
  },
  {
    "id": 614,
    "date": "2021-10-26",
    "japanese": "앉다",
    "korean": "座る"
  },
  {
    "id": 615,
    "date": "2021-10-26",
    "japanese": "예약하다",
    "korean": "予約する"
  },
  {
    "id": 616,
    "date": "2021-10-26",
    "japanese": "덥다",
    "korean": "暑い"
  },
  {
    "id": 617,
    "date": "2021-11-01",
    "japanese": "이용하는・・・",
    "korean": "利用する・・・"
  },
  {
    "id": 618,
    "date": "2021-11-01",
    "japanese": "이용해서・・・",
    "korean": "利用して・・・"
  },
  {
    "id": 619,
    "date": "2021-11-01",
    "japanese": "이용자",
    "korean": "利用者"
  },
  {
    "id": 620,
    "date": "2021-11-01",
    "japanese": "(나이가) 많다",
    "korean": "年上だ"
  },
  {
    "id": 621,
    "date": "2021-11-01",
    "japanese": "(나이가) 적다",
    "korean": "年下だ"
  },
  {
    "id": 622,
    "date": "2021-11-01",
    "japanese": "(나이가) 같다",
    "korean": "同い年だ"
  },
  {
    "id": 623,
    "date": "2021-11-01",
    "japanese": "나이가 들다",
    "korean": "年を取る"
  },
  {
    "id": 624,
    "date": "2021-11-01",
    "japanese": "동갑",
    "korean": "同い年"
  },
  {
    "id": 625,
    "date": "2021-11-01",
    "japanese": "벗다",
    "korean": "脱ぐ"
  },
  {
    "id": 626,
    "date": "2021-11-01",
    "japanese": "치마",
    "korean": "スカート"
  },
  {
    "id": 627,
    "date": "2021-11-01",
    "japanese": "반바지",
    "korean": "半ズボン"
  },
  {
    "id": 628,
    "date": "2021-11-01",
    "japanese": "바지를 입다",
    "korean": "ズボンを履く"
  },
  {
    "id": 629,
    "date": "2021-11-01",
    "japanese": "청바지",
    "korean": "ジーパン"
  },
  {
    "id": 630,
    "date": "2021-11-01",
    "japanese": "어서",
    "korean": "早く"
  },
  {
    "id": 631,
    "date": "2021-11-01",
    "japanese": "그리다",
    "korean": "描く"
  },
  {
    "id": 632,
    "date": "2021-11-01",
    "japanese": "걸다",
    "korean": "掛ける"
  },
  {
    "id": 633,
    "date": "2021-11-01",
    "japanese": "그림을 그리다",
    "korean": "絵を描く"
  },
  {
    "id": 634,
    "date": "2021-11-01",
    "japanese": "그림을 걸다",
    "korean": "絵を掛ける"
  },
  {
    "id": 635,
    "date": "2021-11-01",
    "japanese": "그림책",
    "korean": "絵本"
  },
  {
    "id": 636,
    "date": "2021-11-01",
    "japanese": "화가",
    "korean": "画家"
  },
  {
    "id": 637,
    "date": "2021-11-01",
    "japanese": "심다",
    "korean": "植える"
  },
  {
    "id": 638,
    "date": "2021-11-01",
    "japanese": "나무를 심다",
    "korean": "木を植える"
  },
  {
    "id": 639,
    "date": "2021-11-01",
    "japanese": "벚나무",
    "korean": "桜の木"
  },
  {
    "id": 640,
    "date": "2021-11-01",
    "japanese": "나뭇잎",
    "korean": "葉っぱ"
  },
  {
    "id": 641,
    "date": "2021-11-01",
    "japanese": "숲",
    "korean": "森"
  },
  {
    "id": 642,
    "date": "2021-11-01",
    "japanese": "놀러 가다",
    "korean": "遊びにいく"
  },
  {
    "id": 643,
    "date": "2021-11-01",
    "japanese": "노는 날",
    "korean": "休みの日"
  },
  {
    "id": 644,
    "date": "2021-11-01",
    "japanese": "쉬는 날",
    "korean": "休みの日"
  },
  {
    "id": 645,
    "date": "2021-11-01",
    "japanese": "눕다",
    "korean": "横になる"
  },
  {
    "id": 646,
    "date": "2021-11-01",
    "japanese": "서다",
    "korean": "立つ"
  },
  {
    "id": 647,
    "date": "2021-11-01",
    "japanese": "예매하다",
    "korean": "前売りする / 前もって買う"
  },
  {
    "id": 648,
    "date": "2021-11-01",
    "japanese": "취소하다",
    "korean": "キャンセルする / 取り消しする"
  },
  {
    "id": 649,
    "date": "2021-11-01",
    "japanese": "따뜻하다",
    "korean": "暖かい"
  },
  {
    "id": 650,
    "date": "2021-11-01",
    "japanese": "춥다",
    "korean": "寒い"
  },
  {
    "id": 651,
    "date": "2021-11-02",
    "japanese": "노는・・・",
    "korean": "遊ぶ・・・"
  },
  {
    "id": 652,
    "date": "2021-11-02",
    "japanese": "놀아서・・・",
    "korean": "遊んで・・・"
  },
  {
    "id": 653,
    "date": "2021-11-02",
    "japanese": "앉아서・・・",
    "korean": "座って・・・"
  },
  {
    "id": 654,
    "date": "2021-11-02",
    "japanese": "더운・・・",
    "korean": "暑い・・・"
  },
  {
    "id": 655,
    "date": "2021-11-02",
    "japanese": "더워서・・・",
    "korean": "暑くて・・・"
  },
  {
    "id": 656,
    "date": "2021-11-02",
    "japanese": "멀다",
    "korean": "遠い"
  },
  {
    "id": 657,
    "date": "2021-11-02",
    "japanese": "보이다",
    "korean": "見える"
  },
  {
    "id": 658,
    "date": "2021-11-02",
    "japanese": "부르다",
    "korean": "呼ぶ / 歌う"
  },
  {
    "id": 659,
    "date": "2021-11-02",
    "japanese": "사용하다",
    "korean": "使用する"
  },
  {
    "id": 660,
    "date": "2021-11-02",
    "japanese": "역사",
    "korean": "歴史"
  },
  {
    "id": 661,
    "date": "2021-11-02",
    "japanese": "잠",
    "korean": "睡眠"
  },
  {
    "id": 662,
    "date": "2021-11-02",
    "japanese": "내용",
    "korean": "内容"
  },
  {
    "id": 663,
    "date": "2021-11-02",
    "japanese": "도착하다",
    "korean": "到着する"
  },
  {
    "id": 664,
    "date": "2021-11-02",
    "japanese": "마음",
    "korean": "心"
  },
  {
    "id": 665,
    "date": "2021-11-02",
    "japanese": "모임",
    "korean": "集まり"
  },
  {
    "id": 666,
    "date": "2021-11-02",
    "japanese": "먼・・・",
    "korean": "遠い・・・"
  },
  {
    "id": 667,
    "date": "2021-11-02",
    "japanese": "멀어서・・・",
    "korean": "遠くて・・・"
  },
  {
    "id": 668,
    "date": "2021-11-02",
    "japanese": "보여서・・・",
    "korean": "見えて・・・"
  },
  {
    "id": 669,
    "date": "2021-11-02",
    "japanese": "불러서・・・",
    "korean": "呼んで・・・ / 歌って・・・"
  },
  {
    "id": 670,
    "date": "2021-11-02",
    "japanese": "여기에서 멀다",
    "korean": "ここから遠い"
  },
  {
    "id": 671,
    "date": "2021-11-02",
    "japanese": "~아/어 보이다",
    "korean": "~く見える"
  },
  {
    "id": 672,
    "date": "2021-11-02",
    "japanese": "가깝다",
    "korean": "近い"
  },
  {
    "id": 673,
    "date": "2021-11-02",
    "japanese": "학자",
    "korean": "学者"
  },
  {
    "id": 674,
    "date": "2021-11-02",
    "japanese": "수면",
    "korean": "睡眠"
  },
  {
    "id": 675,
    "date": "2021-11-02",
    "japanese": "확인하다",
    "korean": "確認する"
  },
  {
    "id": 676,
    "date": "2021-11-02",
    "japanese": "도착지",
    "korean": "到着地"
  },
  {
    "id": 677,
    "date": "2021-11-02",
    "japanese": "배가 부르다",
    "korean": "お腹がいっぱいだ"
  },
  {
    "id": 678,
    "date": "2021-11-02",
    "japanese": "역사 소설",
    "korean": "歴史小説"
  },
  {
    "id": 679,
    "date": "2021-11-02",
    "japanese": "역사 박물관",
    "korean": "歴史博物館"
  },
  {
    "id": 680,
    "date": "2021-11-02",
    "japanese": "역사 학자",
    "korean": "歴史学者"
  },
  {
    "id": 681,
    "date": "2021-11-02",
    "japanese": "잠이 오다",
    "korean": "眠くなる"
  },
  {
    "id": 682,
    "date": "2021-11-02",
    "japanese": "잠이 들다",
    "korean": "眠る"
  },
  {
    "id": 683,
    "date": "2021-11-02",
    "japanese": "내용을 확인하다",
    "korean": "内容を確認する"
  },
  {
    "id": 684,
    "date": "2021-11-02",
    "japanese": "회식",
    "korean": "会食"
  },
  {
    "id": 685,
    "date": "2021-11-02",
    "japanese": "미팅",
    "korean": "ミーティング"
  },
  {
    "id": 686,
    "date": "2021-11-02",
    "japanese": "마음이 아프다",
    "korean": "心が痛い"
  },
  {
    "id": 687,
    "date": "2021-11-02",
    "japanese": "마음에 들다",
    "korean": "気に入る"
  },
  {
    "id": 688,
    "date": "2021-11-02",
    "japanese": "마음을 먹다",
    "korean": "決心する"
  },
  {
    "id": 689,
    "date": "2021-11-02",
    "japanese": "모이다",
    "korean": "集まる"
  },
  {
    "id": 690,
    "date": "2021-11-04",
    "japanese": "바라다",
    "korean": "望む / 願う"
  },
  {
    "id": 691,
    "date": "2021-11-04",
    "japanese": "잠깐",
    "korean": "ちょっと / しばらく"
  },
  {
    "id": 692,
    "date": "2021-11-04",
    "japanese": "하숙집",
    "korean": "下宿屋"
  },
  {
    "id": 693,
    "date": "2021-11-04",
    "japanese": "회의",
    "korean": "会議"
  },
  {
    "id": 694,
    "date": "2021-11-04",
    "japanese": "곧",
    "korean": "すぐ / 間もなく"
  },
  {
    "id": 695,
    "date": "2021-11-04",
    "japanese": "나쁘다",
    "korean": "悪い"
  },
  {
    "id": 696,
    "date": "2021-11-04",
    "japanese": "문화",
    "korean": "文化"
  },
  {
    "id": 697,
    "date": "2021-11-04",
    "japanese": "벌써",
    "korean": "もう / すでに"
  },
  {
    "id": 698,
    "date": "2021-11-04",
    "japanese": "여러",
    "korean": "色々 / 様々な"
  },
  {
    "id": 699,
    "date": "2021-11-04",
    "japanese": "휴가",
    "korean": "休暇"
  },
  {
    "id": 700,
    "date": "2021-11-04",
    "japanese": "바람",
    "korean": "願い"
  },
  {
    "id": 701,
    "date": "2021-11-04",
    "japanese": "~기 바라다",
    "korean": "~することを願う"
  },
  {
    "id": 702,
    "date": "2021-11-04",
    "japanese": "원하다",
    "korean": "願う"
  },
  {
    "id": 703,
    "date": "2021-11-04",
    "japanese": "잠시",
    "korean": "しばらく"
  },
  {
    "id": 704,
    "date": "2021-11-04",
    "japanese": "오래",
    "korean": "長く"
  },
  {
    "id": 705,
    "date": "2021-11-04",
    "japanese": "오랫동안",
    "korean": "長い間"
  },
  {
    "id": 706,
    "date": "2021-11-04",
    "japanese": "회의를 시작하다",
    "korean": "会議を始める"
  },
  {
    "id": 707,
    "date": "2021-11-04",
    "japanese": "회의를 열다",
    "korean": "会議を開く"
  },
  {
    "id": 708,
    "date": "2021-11-04",
    "japanese": "하숙생",
    "korean": "下宿者"
  },
  {
    "id": 709,
    "date": "2021-11-04",
    "japanese": "기숙사",
    "korean": "寄宿者 / 寮"
  },
  {
    "id": 710,
    "date": "2021-11-04",
    "japanese": "열다",
    "korean": "開く"
  },
  {
    "id": 711,
    "date": "2021-11-04",
    "japanese": "회의실",
    "korean": "会議室"
  },
  {
    "id": 712,
    "date": "2021-11-04",
    "japanese": "금방",
    "korean": "すぐ / 間もなく"
  },
  {
    "id": 713,
    "date": "2021-11-04",
    "japanese": "즉시",
    "korean": "即時"
  },
  {
    "id": 714,
    "date": "2021-11-04",
    "japanese": "나쁜・・・",
    "korean": "悪い・・・"
  },
  {
    "id": 715,
    "date": "2021-11-04",
    "japanese": "이제 곧",
    "korean": "もうじき"
  },
  {
    "id": 716,
    "date": "2021-11-04",
    "japanese": "에도시대",
    "korean": "江戸時代"
  },
  {
    "id": 717,
    "date": "2021-11-04",
    "japanese": "에도시대 문화",
    "korean": "江戸時代の文化"
  },
  {
    "id": 718,
    "date": "2021-11-04",
    "japanese": "한국 문화",
    "korean": "韓国文化"
  },
  {
    "id": 719,
    "date": "2021-11-04",
    "japanese": "문화 생활",
    "korean": "文化生活"
  },
  {
    "id": 720,
    "date": "2021-11-04",
    "japanese": "이미",
    "korean": "もう / すでに"
  },
  {
    "id": 721,
    "date": "2021-11-04",
    "japanese": "아직",
    "korean": "まだ"
  },
  {
    "id": 722,
    "date": "2021-11-04",
    "japanese": "나라",
    "korean": "国"
  },
  {
    "id": 723,
    "date": "2021-11-04",
    "japanese": "종류",
    "korean": "種類"
  },
  {
    "id": 724,
    "date": "2021-11-04",
    "japanese": "여러 번",
    "korean": "何回も"
  },
  {
    "id": 725,
    "date": "2021-11-08",
    "japanese": "공연",
    "korean": "公演"
  },
  {
    "id": 726,
    "date": "2021-11-08",
    "japanese": "눈",
    "korean": "雪"
  },
  {
    "id": 727,
    "date": "2021-11-08",
    "japanese": "막히다",
    "korean": "詰まる / 渋滞する"
  },
  {
    "id": 728,
    "date": "2021-11-08",
    "japanese": "사랑하다",
    "korean": "愛する"
  },
  {
    "id": 729,
    "date": "2021-11-08",
    "japanese": "산책",
    "korean": "散歩"
  },
  {
    "id": 730,
    "date": "2021-11-08",
    "japanese": "신발",
    "korean": "履物 / 靴"
  },
  {
    "id": 731,
    "date": "2021-11-08",
    "japanese": "연필",
    "korean": "鉛筆"
  },
  {
    "id": 732,
    "date": "2021-11-08",
    "japanese": "전공",
    "korean": "専攻"
  },
  {
    "id": 733,
    "date": "2021-11-08",
    "japanese": "졸업",
    "korean": "卒業"
  },
  {
    "id": 734,
    "date": "2021-11-08",
    "japanese": "춥다",
    "korean": "寒い"
  },
  {
    "id": 735,
    "date": "2021-11-08",
    "japanese": "공연장",
    "korean": "会場 / 公演場"
  },
  {
    "id": 736,
    "date": "2021-11-08",
    "japanese": "공연을 보다",
    "korean": "公演を見る"
  },
  {
    "id": 737,
    "date": "2021-11-08",
    "japanese": "눈이 오다",
    "korean": "雪が降る"
  },
  {
    "id": 738,
    "date": "2021-11-08",
    "japanese": "눈이 내리다",
    "korean": "雪が降る"
  },
  {
    "id": 739,
    "date": "2021-11-08",
    "japanese": "쌓이다",
    "korean": "積もる"
  },
  {
    "id": 740,
    "date": "2021-11-08",
    "japanese": "눈이 쌓이다",
    "korean": "雪が積もる"
  },
  {
    "id": 741,
    "date": "2021-11-08",
    "japanese": "눈사람",
    "korean": "雪だるま"
  },
  {
    "id": 742,
    "date": "2021-11-08",
    "japanese": "눈썰매",
    "korean": "雪そり"
  },
  {
    "id": 743,
    "date": "2021-11-08",
    "japanese": "눈싸움",
    "korean": "雪合戦"
  },
  {
    "id": 744,
    "date": "2021-11-08",
    "japanese": "길",
    "korean": "道"
  },
  {
    "id": 745,
    "date": "2021-11-08",
    "japanese": "목",
    "korean": "喉"
  },
  {
    "id": 746,
    "date": "2021-11-08",
    "japanese": "길이 막히다",
    "korean": "道が混む / 渋滞する"
  },
  {
    "id": 747,
    "date": "2021-11-08",
    "japanese": "목이 막히다",
    "korean": "喉が詰まる"
  },
  {
    "id": 748,
    "date": "2021-11-08",
    "japanese": "사랑에 빠지다",
    "korean": "恋に落ちる"
  },
  {
    "id": 749,
    "date": "2021-11-08",
    "japanese": "미워하다",
    "korean": "憎む"
  },
  {
    "id": 750,
    "date": "2021-11-09",
    "japanese": "공원에서 산책하다",
    "korean": "公園で散歩する"
  },
  {
    "id": 751,
    "date": "2021-11-09",
    "japanese": "벗다",
    "korean": "脱ぐ"
  },
  {
    "id": 752,
    "date": "2021-11-09",
    "japanese": "신발장",
    "korean": "下駄箱"
  },
  {
    "id": 753,
    "date": "2021-11-09",
    "japanese": "굽",
    "korean": "かかと"
  },
  {
    "id": 754,
    "date": "2021-11-09",
    "japanese": "높다",
    "korean": "高い"
  },
  {
    "id": 755,
    "date": "2021-11-09",
    "japanese": "깎다",
    "korean": "削る"
  },
  {
    "id": 756,
    "date": "2021-11-09",
    "japanese": "지우개",
    "korean": "消しゴム"
  },
  {
    "id": 757,
    "date": "2021-11-09",
    "japanese": "신발을 신다",
    "korean": "靴を履く"
  },
  {
    "id": 758,
    "date": "2021-11-09",
    "japanese": "신발을 벗다",
    "korean": "靴を脱ぐ"
  },
  {
    "id": 759,
    "date": "2021-11-09",
    "japanese": "굽이 높은 신발",
    "korean": "かかとの高い靴"
  },
  {
    "id": 760,
    "date": "2021-11-09",
    "japanese": "연필로 쓰다",
    "korean": "鉛筆で書く"
  },
  {
    "id": 761,
    "date": "2021-11-09",
    "japanese": "연필을 깎다",
    "korean": "鉛筆を削る"
  },
  {
    "id": 762,
    "date": "2021-11-09",
    "japanese": "볼펜",
    "korean": "ボールペン"
  },
  {
    "id": 763,
    "date": "2021-11-09",
    "japanese": "분야",
    "korean": "分野"
  },
  {
    "id": 764,
    "date": "2021-11-09",
    "japanese": "과목",
    "korean": "科目"
  },
  {
    "id": 765,
    "date": "2021-11-09",
    "japanese": "전공 분야",
    "korean": "専攻分野"
  },
  {
    "id": 766,
    "date": "2021-11-09",
    "japanese": "전공 과목",
    "korean": "専攻科目"
  },
  {
    "id": 767,
    "date": "2021-11-09",
    "japanese": "졸업생",
    "korean": "卒業生"
  },
  {
    "id": 768,
    "date": "2021-11-09",
    "japanese": "졸업자",
    "korean": "卒業者"
  },
  {
    "id": 769,
    "date": "2021-11-09",
    "japanese": "졸업식",
    "korean": "卒業式"
  },
  {
    "id": 770,
    "date": "2021-11-09",
    "japanese": "입학",
    "korean": "入学"
  },
  {
    "id": 771,
    "date": "2021-11-09",
    "japanese": "날씨",
    "korean": "天気"
  },
  {
    "id": 772,
    "date": "2021-11-09",
    "japanese": "날씨가 춥다",
    "korean": "天気が寒い"
  },
  {
    "id": 773,
    "date": "2021-11-09",
    "japanese": "시원하다",
    "korean": "涼しい"
  },
  {
    "id": 774,
    "date": "2021-11-09",
    "japanese": "쌀쌀하다",
    "korean": "肌寒い"
  },
  {
    "id": 775,
    "date": "2021-11-11",
    "japanese": "필요하다",
    "korean": "必要だ"
  },
  {
    "id": 776,
    "date": "2021-11-11",
    "japanese": "혼자",
    "korean": "ひとり"
  },
  {
    "id": 777,
    "date": "2021-11-11",
    "japanese": "걸다",
    "korean": "掛ける"
  },
  {
    "id": 778,
    "date": "2021-11-11",
    "japanese": "모이다",
    "korean": "集まる"
  },
  {
    "id": 779,
    "date": "2021-11-11",
    "japanese": "못하다",
    "korean": "できない / 下手だ"
  },
  {
    "id": 780,
    "date": "2021-11-11",
    "japanese": "반",
    "korean": "半 / 半分"
  },
  {
    "id": 781,
    "date": "2021-11-11",
    "japanese": "복잡하다",
    "korean": "複雑だ / 混んでいる"
  },
  {
    "id": 782,
    "date": "2021-11-13",
    "japanese": "필요한・・・",
    "korean": "必要な・・・"
  },
  {
    "id": 783,
    "date": "2021-11-13",
    "japanese": "필요해서・・・",
    "korean": "必要で・・・"
  },
  {
    "id": 784,
    "date": "2021-11-13",
    "japanese": "필요한 물건",
    "korean": "必要なもの"
  },
  {
    "id": 785,
    "date": "2021-11-13",
    "japanese": "필요 없다",
    "korean": "必要ない"
  },
  {
    "id": 786,
    "date": "2021-11-13",
    "japanese": "불필요하다",
    "korean": "不要だ"
  },
  {
    "id": 787,
    "date": "2021-11-13",
    "japanese": "언제나",
    "korean": "いつも"
  },
  {
    "id": 788,
    "date": "2021-11-13",
    "japanese": "가끔",
    "korean": "たまに"
  },
  {
    "id": 789,
    "date": "2021-11-13",
    "japanese": "혼자서",
    "korean": "ひとりで"
  },
  {
    "id": 790,
    "date": "2021-11-13",
    "japanese": "혼자 살다",
    "korean": "一人暮らしする"
  },
  {
    "id": 791,
    "date": "2021-11-13",
    "japanese": "둘이서",
    "korean": "2人で"
  },
  {
    "id": 792,
    "date": "2021-11-13",
    "japanese": "홀로",
    "korean": "ひとりきりで"
  },
  {
    "id": 793,
    "date": "2021-11-13",
    "japanese": "말",
    "korean": "言葉 / 話す"
  },
  {
    "id": 794,
    "date": "2021-11-13",
    "japanese": "스스로",
    "korean": "自ら"
  },
  {
    "id": 795,
    "date": "2021-11-13",
    "japanese": "옷걸이",
    "korean": "ハンガー"
  },
  {
    "id": 796,
    "date": "2021-11-13",
    "japanese": "전화를 걸다",
    "korean": "電話を掛ける"
  },
  {
    "id": 797,
    "date": "2021-11-13",
    "japanese": "말을 걸다",
    "korean": "話しかける"
  },
  {
    "id": 798,
    "date": "2021-11-13",
    "japanese": "옷걸이에 옷을 걸다",
    "korean": "ハンガーに服を掛ける"
  },
  {
    "id": 799,
    "date": "2021-11-13",
    "japanese": "거는・・・",
    "korean": "掛ける・・・"
  },
  {
    "id": 800,
    "date": "2021-11-13",
    "japanese": "걸어서・・・",
    "korean": "掛けて・・・"
  },
  {
    "id": 801,
    "date": "2021-11-13",
    "japanese": "간식",
    "korean": "おやつ / 間食"
  },
  {
    "id": 802,
    "date": "2021-11-13",
    "japanese": "한과",
    "korean": "韓国の伝統菓子"
  },
  {
    "id": 803,
    "date": "2021-11-13",
    "japanese": "모임",
    "korean": "集まり"
  },
  {
    "id": 804,
    "date": "2021-11-13",
    "japanese": "모이는・・・",
    "korean": "集まる・・・"
  },
  {
    "id": 805,
    "date": "2021-11-13",
    "japanese": "모여서・・・",
    "korean": "集まって・・・"
  },
  {
    "id": 806,
    "date": "2021-11-13",
    "japanese": "정문",
    "korean": "正門"
  },
  {
    "id": 807,
    "date": "2021-11-13",
    "japanese": "헤어지다",
    "korean": "別れる"
  },
  {
    "id": 808,
    "date": "2021-11-13",
    "japanese": "기숙사에서 살다",
    "korean": "寄宿舎に住む"
  },
  {
    "id": 809,
    "date": "2021-11-13",
    "japanese": "기숙사에 들어가다",
    "korean": "寄宿舎に入る"
  },
  {
    "id": 810,
    "date": "2021-11-13",
    "japanese": "~을/를 못하다",
    "korean": "~が下手だ"
  },
  {
    "id": 811,
    "date": "2021-11-13",
    "japanese": "~지 못하다",
    "korean": "~ができない"
  },
  {
    "id": 812,
    "date": "2021-11-13",
    "japanese": "정문에서 모이다",
    "korean": "正門で集まる"
  },
  {
    "id": 813,
    "date": "2021-11-13",
    "japanese": "나누다",
    "korean": "分ける"
  },
  {
    "id": 814,
    "date": "2021-11-13",
    "japanese": "1시 반",
    "korean": "1時半"
  },
  {
    "id": 815,
    "date": "2021-11-13",
    "japanese": "반으로 나누다",
    "korean": "半分に分ける"
  },
  {
    "id": 816,
    "date": "2021-11-13",
    "japanese": "잘하다",
    "korean": "上手だ"
  },
  {
    "id": 817,
    "date": "2021-11-13",
    "japanese": "못하는・・・",
    "korean": "できない・・・"
  },
  {
    "id": 818,
    "date": "2021-11-13",
    "japanese": "못해서・・・",
    "korean": "できなくて・・・"
  },
  {
    "id": 819,
    "date": "2021-11-15",
    "japanese": "숙제",
    "korean": "宿題"
  },
  {
    "id": 820,
    "date": "2021-11-15",
    "japanese": "시청",
    "korean": "市庁"
  },
  {
    "id": 821,
    "date": "2021-11-15",
    "japanese": "오래",
    "korean": "長く"
  },
  {
    "id": 822,
    "date": "2021-11-15",
    "japanese": "의자",
    "korean": "椅子"
  },
  {
    "id": 823,
    "date": "2021-11-15",
    "japanese": "이제",
    "korean": "もう / すでに"
  },
  {
    "id": 824,
    "date": "2021-11-15",
    "japanese": "즐겁다",
    "korean": "楽しい"
  },
  {
    "id": 825,
    "date": "2021-11-15",
    "japanese": "걱정하다",
    "korean": "心配する"
  },
  {
    "id": 826,
    "date": "2021-11-15",
    "japanese": "건물",
    "korean": "建物"
  },
  {
    "id": 827,
    "date": "2021-11-15",
    "japanese": "담배",
    "korean": "タバコ"
  },
  {
    "id": 828,
    "date": "2021-11-15",
    "japanese": "방법",
    "korean": "方法"
  },
  {
    "id": 829,
    "date": "2021-11-15",
    "japanese": "어서",
    "korean": "どうぞ"
  },
  {
    "id": 830,
    "date": "2021-11-15",
    "japanese": "여행사",
    "korean": "旅行会社"
  },
  {
    "id": 831,
    "date": "2021-11-15",
    "japanese": "오랜만",
    "korean": "久しぶり"
  },
  {
    "id": 832,
    "date": "2021-11-15",
    "japanese": "잃어버리다",
    "korean": "失くしてしまう"
  },
  {
    "id": 833,
    "date": "2021-11-15",
    "japanese": "행사",
    "korean": "行事 / イベント"
  },
  {
    "id": 834,
    "date": "2021-11-15",
    "japanese": "값",
    "korean": "値段"
  },
  {
    "id": 835,
    "date": "2021-11-15",
    "japanese": "결혼",
    "korean": "結構"
  },
  {
    "id": 836,
    "date": "2021-11-15",
    "japanese": "꽃집",
    "korean": "花屋"
  },
  {
    "id": 837,
    "date": "2021-11-15",
    "japanese": "들어오다",
    "korean": "入る / 入ってくる"
  },
  {
    "id": 838,
    "date": "2021-11-18",
    "japanese": "안경",
    "korean": "メガネ"
  },
  {
    "id": 839,
    "date": "2021-11-18",
    "japanese": "열다",
    "korean": "開ける / 開く"
  },
  {
    "id": 840,
    "date": "2021-11-18",
    "japanese": "요금",
    "korean": "料金"
  },
  {
    "id": 841,
    "date": "2021-11-18",
    "japanese": "제일",
    "korean": "一番 / 最も / 一番に"
  },
  {
    "id": 842,
    "date": "2021-11-18",
    "japanese": "집",
    "korean": "家"
  },
  {
    "id": 843,
    "date": "2021-11-18",
    "japanese": "창문",
    "korean": "窓"
  },
  {
    "id": 844,
    "date": "2021-11-18",
    "japanese": "치마",
    "korean": "スカート"
  },
  {
    "id": 845,
    "date": "2021-11-18",
    "japanese": "감기",
    "korean": "風邪"
  },
  {
    "id": 846,
    "date": "2021-11-18",
    "japanese": "관심",
    "korean": "関心 / 興味"
  },
  {
    "id": 847,
    "date": "2021-11-18",
    "japanese": "교실",
    "korean": "教室"
  },
];

const wordList = words.map((word) => {
  return {
    ...word,
    id: ++number,
  }
});

export default wordList;