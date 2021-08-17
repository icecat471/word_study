import moment from 'moment';

export const isBetween = 
    (targetDate: Date, startDate: Date, endDate: Date): boolean => {
        const targetDateStr = moment(targetDate).format('yyyy-MM-DD');
        const startDateStr = moment(startDate).format('yyyy-MM-DD');
        const endDateStr = moment(endDate).format('yyyy-MM-DD');
        return (
            targetDateStr === startDateStr ||
            targetDateStr === endDateStr ||
            moment(targetDateStr).isBetween(startDateStr, endDateStr)
        );
    }

