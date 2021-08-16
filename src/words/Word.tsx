import moment from 'moment';

export default class Word {

    private date: string;
    private korean: string;
    private japanese: string;

    constructor(date: string, korean: string, japanese: string) {
        if(!moment(date).isValid()) new Error('날짜형식이 올바르지 않습니다:' + date);

        this.date = date;
        this.korean = korean;
        this.japanese = japanese;
    }

    getDate(): string {
        return this.date;
    }

    getKorean(): string {
        return this.korean;
    }

    getJapanese(): string {
        return this.japanese;
    }
}