import dayjs from "dayjs";

export function getRemainingTime(timeStampMs) {
    const timestampDayjs = dayjs(timeStampMs)
    const nowDayjs = dayjs();
    return {
        seconds: getRemainingSeconds(nowDayjs, timestampDayjs),
        minutes: getRemainingMinutes(nowDayjs, timestampDayjs),
        hours: getRemainingHours(nowDayjs, timestampDayjs),
    }
}

function getRemainingSeconds(nowDayjs, timestampDayjs) {
    const seconds = timestampDayjs.diff(nowDayjs, 'seconds') % 60;
    return seconds
}

function getRemainingMinutes(nowDayjs, timestampDayjs) {
    const minutes = timestampDayjs.diff(nowDayjs, 'minutes') % 60;
    return minutes
}

function getRemainingHours(nowDayjs, timestampDayjs) {
    const hours = timestampDayjs.diff(nowDayjs, 'hours') % 60
    return hours
}



