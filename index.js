import { request } from 'undici';

const { body } = await request('https://api.github.com/user/emails');

console.log(await body.json());
