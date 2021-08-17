import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import { ja } from 'date-fns/esm/locale';
import Button from '@material-ui/core/Button';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

import 'react-datepicker/dist/react-datepicker.css';
import './Memorize.css';

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

    const onStartDateChanged = (date:Date) => {
        setStartDate(date);
    }

    const onEndDateChanged = (date:Date) => {
        setEndDate(date);
    }

    const onStartButtonClicked = () => {
        console.log('start');
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
                <p className="dateText"> から</p>
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
            <div style={{
                textAlign: 'center',
            }}>
                <Button 
                    variant="outlined" 
                    color="primary"
                    classes={classes}
                    onClick={onStartButtonClicked}
                >
                    スタート
                </Button>
            </div>
        </>
    );
}

export default Memorize;