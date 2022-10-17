import { differenceInDays, differenceInHours } from 'date-fns';
import { formatISO, sub } from 'date-fns';
import { zonedTimeToUtc } from 'date-fns-tz';

function getNowInUTC(): Date {
    const now = new Date()
    return new Date(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(), now.getUTCHours(), now.getUTCMinutes(), now.getUTCSeconds(), now.getUTCMilliseconds());
}

function calculateHoursToRelease(releaseDay: Date, timeZone: string): number {
    const nowInUTC = getNowInUTC();
    const releaseDayInUTC = zonedTimeToUtc(releaseDay, timeZone);

    const hoursToRelease = differenceInHours(releaseDayInUTC, nowInUTC);
    return hoursToRelease;
}

function calculateDaysToRelease(releaseDay: Date, timeZone: string): number {
    const nowInUTC = getNowInUTC();
    const releaseDayInUTC = zonedTimeToUtc(releaseDay, timeZone);

    const daysToRelease = differenceInDays(releaseDayInUTC, nowInUTC);

    return daysToRelease;
}

function formatDateToISO() {
    return formatISO(sub(new Date(), { minutes: 2 }));
}

function millisToPostingTime(hourToPost: number, timeZone: string): number {
    const nowInUTC = getNowInUTC();
    const dateToPost = new Date(nowInUTC.getFullYear(), nowInUTC.getMonth(), nowInUTC.getDate(), hourToPost);

    const dateToPostInUTC = zonedTimeToUtc(dateToPost, timeZone);

    let millisToNoon = dateToPostInUTC.getTime() - nowInUTC.getTime();
    const oneDayInMili = 86400000;

    if (millisToNoon < 0) {
        millisToNoon += oneDayInMili;
    }

    return millisToNoon;
}

export { calculateDaysToRelease, calculateHoursToRelease, formatDateToISO, millisToPostingTime };