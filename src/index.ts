import 'dotenv/config';
import { millisToPostingTime } from './modules/dates/implementations/CalculateDates';
import { replyTweets, tweet } from './modules/messages/implementations/Tweets';
import userLogin from './shared/validation/UserLogin';

const clientV2 = userLogin();

const releaseDay = new Date(2022, 7, 12, 12, 0, 0);
const timeZone = 'America/Sao_Paulo';
const halfMinuteInMili = 30000;
const oneDayInMili = 86400000;

const millisToNoon = millisToPostingTime(12, timeZone);

console.log("Bot running");
try {
    setInterval(() => { return replyTweets(releaseDay, timeZone, clientV2); }, halfMinuteInMili);
} catch (err) {
    console.log(err)
}

try {
    setTimeout(() => {
        tweet(releaseDay, timeZone, clientV2);
        setInterval(() => { return tweet(releaseDay, timeZone, clientV2) }, oneDayInMili);
    }, millisToNoon);
} catch (err) {
    console.log(err)
}

tweet(releaseDay, timeZone, clientV2);