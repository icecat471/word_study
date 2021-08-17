import moment from 'moment';

export interface WordDataSource {
    key: string;
    date: string;
    korean: string;
    japanese: string;
};

export default class Word {

    private no: number;
    private date: string;
    private korean: string;
    private japanese: string;

    constructor(no:number, date: string, korean: string, japanese: string) {
        if(!moment(date).isValid()) new Error('날짜형식이 올바르지 않습니다:' + date);

        this.no = no;
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

    getDataSoruce(): WordDataSource {
        return {
            key: this.no.toString(),
            date: this.date,
            korean: this.korean,
            japanese: this.japanese,
        }
    }
}