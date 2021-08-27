export interface Word {
    id: number;
    date: string;
    korean: string;
    japanese: string;
}

const wordList: Word[] = [
    { id: 1, date: '2021-08-08', korean: '숙제', japanese: '宿題'},
    { id: 2, date: '2021-08-08', korean: '친한', japanese: '親しい'},
    { id: 3, date: '2021-08-08', korean: '반 친구', japanese: 'クラスメート'},
    { id: 4, date: '2021-08-08', korean: '동료', japanese: '同僚'},
    { id: 5, date: '2021-08-08', korean: '등산', japanese: '登山'},
    { id: 6, date: '2021-08-08', korean: '탈의실', japanese: 'ロッカールーム'},
    { id: 7, date: '2021-08-08', korean: '세탁소', japanese: 'クリーニング屋'},
    { id: 8, date: '2021-08-08', korean: '감기에 걸리다', japanese: '風邪をひく'},
    { id: 9, date: '2021-08-08', korean: '감기약', japanese: '風邪薬'},
    { id: 10, date: '2021-08-08', korean: '도시락', japanese: 'お弁当'},
    { id: 11, date: '2021-08-08', korean: '출발', japanese: '出発'},
    { id: 12, date: '2021-08-08', korean: '읽다', japanese: '読む'},
    { id: 13, date: '2021-08-08', korean: '읽고 있습니다', japanese: '読んでいます'},
    { id: 14, date: '2021-08-08', korean: '미래', japanese: '未来'},
    { id: 15, date: '2021-08-08', korean: '과거', japanese: '過去'},
    { id: 16, date: '2021-08-08', korean: '현재', japanese: '現在'},
    { id: 17, date: '2021-08-08', korean: '후에', japanese: '後に'},
    { id: 18, date: '2021-08-08', korean: '전에', japanese: '前に'},
    { id: 19, date: '2021-08-08', korean: '(場所)에서 산', japanese: '～で買った'},
    { id: 20, date: '2021-08-08', korean: '(人)에게서 산', japanese: '~から買った'},
    { id: 21, date: '2021-08-08', korean: '편의점', japanese: 'コンビニ'},
    { id: 22, date: '2021-08-08', korean: '샀습니다', japanese: '買いました'},
    { id: 23, date: '2021-08-08', korean: '팔다', japanese: '売る'},
    { id: 24, date: '2021-08-08', korean: '만난', japanese: '会った・・・'},
    { id: 25, date: '2021-08-08', korean: '만나는', japanese: '会う・・・'},
    { id: 26, date: '2021-08-08', korean: '만나서', japanese: '会って・・・'},
    { id: 27, date: '2021-08-08', korean: '싫어서', japanese: '嫌いで・・・'},
    { id: 28, date: '2021-08-08', korean: '싫은', japanese: '嫌いな・・・'},
    { id: 29, date: '2021-08-08', korean: '나쁘다', japanese: '悪い'},
    { id: 30, date: '2021-08-08', korean: '더', japanese: 'もっと'},
    { id: 31, date: '2021-08-08', korean: '좋지만', japanese: 'いいけど'},
    { id: 32, date: '2021-08-09', korean: '오는', japanese: '来る・・・'},
    { id: 33, date: '2021-08-09', korean: '와서', japanese: '来て・・・'},
    { id: 34, date: '2021-08-09', korean: '오다', japanese: '来る '},
    { id: 35, date: '2021-08-09', korean: '여행', japanese: '旅行'},
    { id: 36, date: '2021-08-09', korean: '갑니다', japanese: '行きます'},
    { id: 37, date: '2021-08-09', korean: '~(으)러 가다', japanese: '～しに行きます'},
    { id: 38, date: '2021-08-09', korean: '가는', japanese: '行く・・・'},
    { id: 39, date: '2021-08-09', korean: '가서', japanese: '行って・・・'},
    { id: 40, date: '2021-08-09', korean: '가다', japanese: '行く'},
    { id: 41, date: '2021-08-09', korean: '건물', japanese: '建物'},
    { id: 42, date: '2021-08-09', korean: '은행', japanese: '銀行'},
    { id: 43, date: '2021-08-09', korean: '사장님', japanese: '社長'},
    { id: 44, date: '2021-08-09', korean: '있는', japanese: 'ある・・・、いる・・・'},
    { id: 45, date: '2021-08-09', korean: '있어서', japanese: 'あって・・・、いて・・・'},
    { id: 46, date: '2021-08-09', korean: '있다', japanese: 'ある、いる'},
    { id: 47, date: '2021-08-09', korean: '못 오다', japanese: '来られない'},
    { id: 48, date: '2021-08-09', korean: '옵니다', japanese: '来ます'},
    { id: 49, date: '2021-08-09', korean: '지난주 / 저번주', japanese: '先週'},
    { id: 50, date: '2021-08-09', korean: '화장실', japanese: 'トイレ'},
    { id: 51, date: '2021-08-09', korean: '지지난주 / 저저번주', japanese: '先々週'},
    { id: 52, date: '2021-08-09', korean: '다다음주', japanese: '再来週'},
    { id: 53, date: '2021-08-09', korean: '다음주', japanese: '来週'},
    { id: 54, date: '2021-08-09', korean: '이번', japanese: 'この'},
    { id: 55, date: '2021-08-10', korean: '~이/가 되다', japanese: '～になる'},
    { id: 56, date: '2021-08-10', korean: '됐어요', japanese: 'なりました'},
    { id: 57, date: '2021-08-10', korean: '춰요', japanese: '踊ります'},
    { id: 58, date: '2021-08-10', korean: '자주', japanese: 'しょっちゅう'},
    { id: 59, date: '2021-08-10', korean: '맵다', japanese: '辛い(からい)'},
    { id: 60, date: '2021-08-10', korean: '음식', japanese: '食べ物'},
    { id: 61, date: '2021-08-10', korean: '지금, ~(하)고 있습니다', japanese: '今、～しています'},
    { id: 62, date: '2021-08-10', korean: '했습니다', japanese: 'しました'},
    { id: 63, date: '2021-08-10', korean: '약을 먹다', japanese: '薬を飲む'},
    { id: 64, date: '2021-08-10', korean: '마셨습니다', japanese: '飲みました'},
    { id: 65, date: '2021-08-10', korean: '콘서트', japanese: 'コンサート'},
    { id: 66, date: '2021-08-10', korean: '마시다', japanese: '飲む'},
    { id: 67, date: '2021-08-10', korean: '열심히', japanese: '一生懸命'},
    { id: 68, date: '2021-08-10', korean: '적다', japanese: '少ない'},
    { id: 69, date: '2021-08-10', korean: '의사', japanese: '医者'},
    { id: 70, date: '2021-08-10', korean: '살다', japanese: '生きる、住む'},
    { id: 71, date: '2021-08-10', korean: '잘하다', japanese: '上手だ'},
    { id: 72, date: '2021-08-12', korean: '봐요', japanese: '見ます'},
    { id: 73, date: '2021-08-12', korean: '쉬는 날', japanese: '休みの日'},
    { id: 74, date: '2021-08-12', korean: '덥네요', japanese: '暑いですね'},
    { id: 75, date: '2021-08-12', korean: '내후년', japanese: '再来年'},
    { id: 76, date: '2021-08-12', korean: '재작년', japanese: 'おととし'},
    { id: 77, date: '2021-08-12', korean: '내년', japanese: '来年'},
    { id: 78, date: '2021-08-12', korean: '작년', japanese: '去年'},
    { id: 79, date: '2021-08-12', korean: '올해', japanese: '今年'},
    { id: 80, date: '2021-08-12', korean: '좀', japanese: 'ちょっと'},
    { id: 81, date: '2021-08-12', korean: '갔다왔습니다', japanese: '行って来ました'},
    { id: 82, date: '2021-08-12', korean: '갔습니다', japanese: '行きました'},
    { id: 83, date: '2021-08-12', korean: '입다', japanese: '着る'},
    { id: 84, date: '2021-08-12', korean: '신다', japanese: '履く'},
    { id: 85, date: '2021-08-13', korean: '주말', japanese: '週末'},
    { id: 86, date: '2021-08-13', korean: '겨울', japanese: '冬'},
    { id: 87, date: '2021-08-13', korean: '봄', japanese: '春'},
    { id: 88, date: '2021-08-13', korean: '덥다', japanese: '暑い'},
    { id: 89, date: '2021-08-13', korean: '가을', japanese: '秋'},
    { id: 90, date: '2021-08-13', korean: '여름', japanese: '夏'},
    { id: 91, date: '2021-08-14', korean: '같이', japanese: '一緒に'},
    { id: 92, date: '2021-08-14', korean: '~을/를 배우는', japanese: '~を学ぶ'},
    { id: 93, date: '2021-08-14', korean: '배웁니다', japanese: '学びます'},
    { id: 94, date: '2021-08-14', korean: '보냅니다', japanese: '過ごします'},
    { id: 95, date: '2021-08-14', korean: '보내다', japanese: '過ごす'},
    { id: 96, date: '2021-08-14', korean: '수영', japanese: '水泳'},
    { id: 97, date: '2021-08-14', korean: '가르치다', japanese: '教える'},
    { id: 98, date: '2021-08-14', korean: '학습하다', japanese: '学習する'},
    { id: 99, date: '2021-08-14', korean: '찍다', japanese: '撮る'},
    { id: 100, date: '2021-08-14', korean: '영화표', japanese: '映画チケット'},
    { id: 101, date: '2021-08-14', korean: '해외여행', japanese: '海外旅行'},
    { id: 102, date: '2021-08-14', korean: '영어', japanese: '英語'},
    { id: 103, date: '2021-08-14', korean: 'O학년', japanese: 'ㅇ年生'},
    { id: 104, date: '2021-08-14', korean: '항상 / 늘', japanese: 'いつも'},
    { id: 105, date: '2021-08-14', korean: '영화관', japanese: '映画館'},
    { id: 106, date: '2021-08-14', korean: 'OO 같이', japanese: 'OOように / OOみたいに'},
    { id: 107, date: '2021-08-15', korean: '찾다', japanese: '探す'},
    { id: 108, date: '2021-08-15', korean: '복습하다', japanese: '復習する'},
    { id: 109, date: '2021-08-15', korean: '돈을 찾다', japanese: 'お金をおろす'},
    { id: 110, date: '2021-08-15', korean: '예습하다', japanese: '予習する'},
    { id: 111, date: '2021-08-15', korean: '유명', japanese: '有名'},
    { id: 112, date: '2021-08-15', korean: '찾으러 가다', japanese: '取りに行く'},
    { id: 113, date: '2021-08-15', korean: '잃다', japanese: 'なくす'},
    { id: 114, date: '2021-08-15', korean: '똑같다', japanese: 'そっくりだ'},
    { id: 115, date: '2021-08-15', korean: '비슷하다', japanese: '似ている'},
    { id: 116, date: '2021-08-15', korean: '바쁘다', japanese: '忙しい'},
    { id: 117, date: '2021-08-15', korean: '바빠서', japanese: '忙しくて・・・'},
    { id: 118, date: '2021-08-15', korean: '못 해요', japanese: '出来ません'},
    { id: 119, date: '2021-08-15', korean: '경찰서', japanese: '警察署'},
    { id: 120, date: '2021-08-16', korean: '마셔서', japanese: '飲んで'},
    { id: 121, date: '2021-08-16', korean: '잃어버린', japanese: '失くした'},
    { id: 122, date: '2021-08-16', korean: '지갑', japanese: '財布'},
    { id: 123, date: '2021-08-16', korean: '취미', japanese: '趣味'},
    { id: 124, date: '2021-08-16', korean: '문제', japanese: '問題'},
    { id: 125, date: '2021-08-16', korean: '나오다', japanese: '出る'},
    { id: 126, date: '2021-08-16', korean: '나왔습니다', japanese: '出ました'},
    { id: 127, date: '2021-08-16', korean: '마실 것', japanese: '飲み物'},
    { id: 128, date: '2021-08-16', korean: '음료수', japanese: '飲料水'},
    { id: 129, date: '2021-08-16', korean: '드시다', japanese: '召し上がる'},
    { id: 130, date: '2021-08-17', korean: '이유', japanese: '理由'},
    { id: 131, date: '2021-08-17', korean: '자신', japanese: '自分'},
    { id: 132, date: '2021-08-17', korean: '읽다', japanese: '読む'},
    { id: 133, date: '2021-08-17', korean: '신문', japanese: '新聞'},
    { id: 134, date: '2021-08-17', korean: '매일 아침', japanese: '毎朝'},
    { id: 135, date: '2021-08-17', korean: '우유', japanese: '牛乳'},
    { id: 136, date: '2021-08-17', korean: '한 잔', japanese: '一杯'},
    { id: 137, date: '2021-08-17', korean: '마십니다', japanese: '飲みます'},
    { id: 138, date: '2021-08-17', korean: '카페', japanese: 'カフェ'},
    { id: 139, date: '2021-08-17', korean: '이야기 했습니다', japanese: '話しました、言いました'},
    { id: 140, date: '2021-08-17', korean: '커피', japanese: 'コーヒー'},
    { id: 141, date: '2021-08-17', korean: '이야기하다(얘기하다), 말하다', japanese: '話す、言う、語る'},
    { id: 142, date: '2021-08-17', korean: '꿈', japanese: '夢'},
    { id: 143, date: '2021-08-17', korean: '이야기 하는', japanese: '話す、言う、語る'},
    { id: 144, date: '2021-08-17', korean: '저녁', japanese: '夜'},
    { id: 145, date: '2021-08-17', korean: '스스로', japanese: '自ら'},
    { id: 146, date: '2021-08-18', korean: '독서', japanese: '読書'},
    { id: 147, date: '2021-08-18', korean: '나중', japanese: '後'},
    { id: 148, date: '2021-08-18', korean: '어떻습니까?', japanese: 'どうですか'},
    { id: 149, date: '2021-08-18', korean: '소설', japanese: '小説'},
    { id: 150, date: '2021-08-18', korean: '어떻다', japanese: 'どうだ'},
    { id: 151, date: '2021-08-18', korean: '요즘', japanese: '最近'},
    { id: 152, date: '2021-08-20', korean: '왔습니다', japanese: '来ました、帰りました'},
    { id: 153, date: '2021-08-20', korean: '갔습니다', japanese: '行きました、帰りました'},
    { id: 154, date: '2021-08-20', korean: '뒤', japanese: '後ろ、今後'},
    { id: 155, date: '2021-08-20', korean: '수업', japanese: '授業'},
    { id: 156, date: '2021-08-20', korean: '이후', japanese: '以降、今後'},
    { id: 157, date: '2021-08-20', korean: '초급', japanese: '初級'},
    { id: 158, date: '2021-08-20', korean: '중급', japanese: '中級'},
    { id: 159, date: '2021-08-20', korean: '일찍', japanese: '早めに'},
    { id: 150, date: '2021-08-20', korean: '상급', japanese: '上級'},
    { id: 161, date: '2021-08-20', korean: '취소', japanese: '取り消し'},
    { id: 162, date: '2021-08-21', korean: '음식점', japanese: '飲食店'},
    { id: 163, date: '2021-08-21', korean: '어떤', japanese: 'どんな'},
    { id: 164, date: '2021-08-21', korean: '무슨', japanese: '何の'},
    { id: 165, date: '2021-08-21', korean: '갈까요?', japanese: '行きましょうか'},
    { id: 166, date: '2021-08-21', korean: '즐겁다', japanese: '楽しい'},
    { id: 167, date: '2021-08-21', korean: '재미없다', japanese: '面白くない'},
    { id: 168, date: '2021-08-21', korean: '식당', japanese: '食堂'},
    { id: 169, date: '2021-08-21', korean: '한식당, 한식집', japanese: '韓国料理屋'},
    { id: 170, date: '2021-08-21', korean: '중식당, 중식집', japanese: '中華料理屋'},
    { id: 171, date: '2021-08-21', korean: '일식당, 일식집', japanese: '日本料理屋'},
    { id: 172, date: '2021-08-21', korean: '양식당, 양식집, 양식점', japanese: '洋食屋'},
    { id: 173, date: '2021-08-22', korean: '이야기하는', japanese: '話す、言う、語る・・・'},
    { id: 174, date: '2021-08-22', korean: '이야기해서', japanese: '話して、言って、語って・・・'},
    { id: 175, date: '2021-08-22', korean: '읽는', japanese: '読む・・・'},
    { id: 176, date: '2021-08-22', korean: '읽어서', japanese: '読んで・・・'},
    { id: 177, date: '2021-08-22', korean: '재미있는', japanese: '面白い・・・'},
    { id: 178, date: '2021-08-22', korean: '재미있어서', japanese: '面白くて・・・'},
    { id: 179, date: '2021-08-22', korean: '본', japanese: '見た・・・'},
    { id: 180, date: '2021-08-22', korean: '봐서', japanese: '見て・・・'},
    { id: 181, date: '2021-08-22', korean: '마시는', japanese: '飲む・・・'},
    { id: 182, date: '2021-08-22', korean: '마셔서', japanese: '飲んで・・・'},
    { id: 183, date: '2021-08-22', korean: '받는', japanese: '貰う、受ける・・・'},
    { id: 184, date: '2021-08-22', korean: '받아서', japanese: '貰って、受けて・・・'},
    { id: 185, date: '2021-08-22', korean: '~마다', japanese: '～毎'},
    { id: 186, date: '2021-08-22', korean: '받다', japanese: '貰う、受ける'},
    { id: 187, date: '2021-08-22', korean: '주다', japanese: 'あげる、くれる'},
    { id: 188, date: '2021-08-22', korean: '알다', japanese: '分かる、知る'},
    { id: 189, date: '2021-08-22', korean: '아는 사람', japanese: '知り合い'},
    { id: 190, date: '2021-08-24', korean: '아는', japanese: '知る、分かる・・・'},
    { id: 191, date: '2021-08-24', korean: '알아서', japanese: '知って、分かって・・・'},
    { id: 192, date: '2021-08-24', korean: '만드는', japanese: '作る・・・'},
    { id: 193, date: '2021-08-24', korean: '만들어서', japanese: '作って・・・'},
    { id: 194, date: '2021-08-24', korean: '작은', japanese: '小さい・・・'},
    { id: 195, date: '2021-08-24', korean: '작아서', japanese: '小さくて・・・'},
    { id: 196, date: '2021-08-24', korean: '가게', japanese: 'お店'},
    { id: 197, date: '2021-08-24', korean: '직접 만들다', japanese: '手作りする'},
    { id: 198, date: '2021-08-24', korean: '만들다', japanese: '作る'},
    { id: 199, date: '2021-08-24', korean: '옷', japanese: '服'},
    { id: 200, date: '2021-08-24', korean: '모르다', japanese: '知らない、分からない'},
    { id: 201, date: '2021-08-24', korean: '신발', japanese: '靴'},
    { id: 202, date: '2021-08-24', korean: '작다', japanese: '小さい'},
    { id: 203, date: '2021-08-24', korean: '크다', japanese: '大きい'},
    { id: 204, date: '2021-08-25', korean: '가게 안', japanese: '店内'},
    { id: 205, date: '2021-08-25', korean: '상점', japanese: '商店'},
    { id: 206, date: '2021-08-25', korean: '공원', japanese: '公園'},
    { id: 207, date: '2021-08-25', korean: '산책하다', japanese: '散歩する'},
    { id: 208, date: '2021-08-25', korean: '놀다', japanese: '遊ぶ'},
    { id: 209, date: '2021-08-25', korean: '물건', japanese: '物 / 商品'},
    { id: 210, date: '2021-08-25', korean: '비싸다', japanese: '高い(値段)'},
    { id: 211, date: '2021-08-25', korean: '상품', japanese: '商品'},
    { id: 212, date: '2021-08-25', korean: '아픈', japanese: '痛い・・・'},
    { id: 213, date: '2021-08-25', korean: '아파서', japanese: '痛くて・・・'},
    { id: 214, date: '2021-08-25', korean: '알맞은', japanese: 'ただしい・・・'},
    { id: 215, date: '2021-08-25', korean: '받았어요', japanese: '貰いました、受けました'},
    { id: 216, date: '2021-08-25', korean: '불러서', japanese: '呼んだので・・・、呼ばれて・・・'},
    { id: 217, date: '2021-08-25', korean: '마음', japanese: '心'},
    { id: 218, date: '2021-08-25', korean: '말씀', japanese: 'お話'},
    { id: 219, date: '2021-08-25', korean: '방', japanese: '部屋'},
    { id: 220, date: '2021-08-25', korean: '좁다', japanese: '狭い'},
    { id: 221, date: '2021-08-25', korean: '넓다', japanese: '広い'},
    { id: 222, date: '2021-08-25', korean: '꽃', japanese: '花'},
    { id: 223, date: '2021-08-25', korean: '손님', japanese: 'お客さん'},
    { id: 224, date: '2021-08-25', korean: '부르다', japanese: '呼ぶ'},
];

export default wordList;