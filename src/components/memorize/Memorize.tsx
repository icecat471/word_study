import React, { useState, useRef, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import { ja } from 'date-fns/esm/locale';
import Button from '@material-ui/core/Button';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import 'react-datepicker/dist/react-datepicker.css';
import './Memorize.css';

import wordList, { Word } from '../../words/wordList';
import getRandomNumber from '../../common/random';

import { isBetween } from '../../common/date';

const useStyles = makeStyles((thime: Theme) => 
    createStyles({
        root: {
            margin: '20px 12px',
        },
    }),
);

const Memorize: React.FC = () => {
    const classes = useStyles();

    const [startDate, setStartDate] = useState<Date>(new Date());
    const [endDate, setEndDate] = useState<Date>(new Date());
    const [words, setWords] = useState<Word[]>([]);
    const [wordIndex, setWordIndex] = useState(0);

    useEffect(() => {
        if(wordCard) wordCard.innerText = words[wordIndex].korean;
    }, [wordIndex]);

    const wordCard = document.getElementById('word-card') as HTMLDivElement;

    const onStartDateChanged = (date:Date) => {
        setStartDate(date);
    }

    const onEndDateChanged = (date:Date) => {
        setEndDate(date);
    }

    const onStartButtonClicked = () => {
        const tempWords = wordList.filter((element) => {
            return isBetween(new Date(element.date), startDate, endDate);
        });

        if(tempWords.length === 0) {
            alert('단어가 없습니다.');
            return;
        }

        setWords(tempWords);

        let temp: number;
        while(true) {
            temp = getRandomNumber(tempWords.length);
            if(temp !== wordIndex) break;
        }
        setWordCard(temp); // 랜덤으로 변경
    }

    const setWordCard = (index:number) => {
        setWordIndex(index);
    }

    const showKorean = () => {
        if(words.length === 0) return;
        if(wordCard) wordCard.innerText =  words[wordIndex].korean;
    }

    const showJapanese = () => {
        if(words.length === 0) return;
        if(wordCard) wordCard.innerText =  words[wordIndex].japanese;
    }

    const showNextWord = () => {
        if(words.length === 0) return;
        let temp: number;
        while(true) {
            temp = getRandomNumber(words.length);
            if(temp !== wordIndex) break;
        }
        setWordCard(temp);
    }

    return (
        <>
            <div>
                <DatePicker
                    selected={startDate} 
                    onChange={onStartDateChanged} 
                    selectsStart
                    startDate={startDate}
                    endDate={endDate}
                    locale={ja}
                    dateFormat="yyyy年 MM月 dd日"
                />
                <p className="dateText"> から </p>
                <br/>
                <DatePicker 
                    selected={endDate}
                    onChange={onEndDateChanged} 
                    selectsEnd
                    startDate={startDate}
                    endDate={endDate}
                    minDate={startDate}
                    locale={ja}
                    dateFormat="yyyy年 MM月 dd日"
                />
                <p className="dateText"> までの単語</p>
            </div>
            <div className="btn-start">
                <Button 
                    variant="outlined" 
                    color="primary"
                    classes={classes}
                    onClick={onStartButtonClicked}
                >
                    スタート
                </Button>
            </div>
            <div className="btns">
                <Button 
                    variant="outlined" 
                    color="primary"
                    classes={classes}
                    onClick={showKorean}
                >
                    韓国語
                </Button>
                <Button 
                    variant="outlined" 
                    color="primary"
                    classes={classes}
                    onClick={showJapanese}
                >
                    日本語
                </Button>
                <Button 
                    variant="outlined" 
                    color="primary"
                    classes={classes}
                    onClick={showNextWord}
                >
                    次の単語
                </Button>
            </div>
            <div className="word-card-wrapper">
                <div className="word-card" id="word-card"> </div>
            </div>
            
        </>
    );
}

export default Memorize;