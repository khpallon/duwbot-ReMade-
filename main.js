/* import { StaticAuthProvider } from '@twurple/auth';
import { Bot, createBotCommand } from '@twurple/easy-bot'; */

const { StaticAuthProvider } = require('@twurple/auth')
const { RefreshingAuthProvider } = require('@twurple/auth'); 
const { Bot, createBotCommand } = require('@twurple/easy-bot')
const { ApiClient } = require('@twurple/api')
const { fsPromises } = require('fs').promises;



const clientId = 'v7hg69jjwt25b70af1j1svqaenk5cl';
const clientSecret = 'lz368k0k5jjalnyeqgmm73yi7jp2us';

const tokenData = async() => {
	JSON.parse(await fs.readFile('./tokens.125328655.json', 'UTF-8'));
}
const authProvider = new RefreshingAuthProvider(
	{
		clientId,
		clientSecret
	}
);

// 134728614

authProvider.onRefresh(async (userId, newTokenData) => await fs.writeFile(`./tokens.${userId}.json`, JSON.stringify(newTokenData, null, 4), 'UTF-8'));

async () => {
	await authProvider.addUserForToken(tokenData, ['chat']);
}

/* const accessToken = 'x8k08p4fp8960kp72gynkkyl515e2d';
const refreshToken = '9qk8f3ybbr9c7ne3djj21xikxv6vdnc95jmsv0hiwl4x22br2u';
const authProvider = new StaticAuthProvider(clientId, accessToken); */

const api = new ApiClient({ authProvider });

const bot = new Bot({
	authProvider,
	channels: ['duwinz'],
	commands: [
		createBotCommand('dice', (params, { reply }) => {
			const diceRoll = Math.floor(Math.random() * 6) + 1;
			say(`You rolled a ${diceRoll}`);
		}),
		createBotCommand('slap', (params, { userName, say }) => {
			say(`${userName} slaps ${params.join(' ')} around a bit with a large trout`);
		}),
		createBotCommand('something', (params, { userName, say }) => {
			say(`${userName} slaps ${params.join(' ')} around a bit with a large trout`);
		})
	]
});

bot.onSub(({ broadcasterName, userName }) => {
	bot.say(broadcasterName, `Thanks to @${userName} for subscribing to the channel!`);
});

/* async function request(userName) {
	const user = await api.users.getUserByName(userName);
	if (!user) {
		return false;
	}
	console.log(user.displayName)
}

request('duwinz') */


function dog(game){
	const rewards = api.chat.getChattersPaginated(game);
	console.log(rewards.currentCursor)
}

async function cat(game){
	const rewards = await api.users.getUserByName(game);
	console.log(rewards.id)
}

dog('26490481')
cat('duwinz')

/* async function please() {
    const rewards = await api.chat.getChannelBadges('duwinz');
    console.log(rewards)
    if (rewards) return console.log('yasdsa')
}

console.log(please) */

/* const UserGreatListener = chatClient.onMessage(async (channel, user, message, msg) => {
	console.log(user)
	if (message === '!followage') {
		const user = await ApiClient.helix.users.getUserByName(user);

	}
}) */
    


/* const onlineSubscription = await api.chat.getChannelBadges(username => {
    console.log(`${e.broadcasterDisplayName} just went live!`);
    });


console.log(onlineSubscription) */
/* 
const user = await ApiClient.helix.users.getUserByName(username);
    if (user) return twitchApi.badges.getChannelBadges(user, false);
 */
