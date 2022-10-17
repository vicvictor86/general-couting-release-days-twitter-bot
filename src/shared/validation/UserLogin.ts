import { TwitterApi, TwitterApiv2 } from "twitter-api-v2";

export default function userLogin(): TwitterApiv2 {
    const userClient = new TwitterApi({
        appKey: process.env.API_KEY || '',
        appSecret: process.env.API_KEY_SECRET || '',
        accessToken: process.env.ACESS_TOKEN || '',
        accessSecret: process.env.ACESS_TOKEN_SECRET || '',
    });

    return userClient.v2;
}
