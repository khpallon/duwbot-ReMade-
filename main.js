/* import { StaticAuthProvider } from '@twurple/auth';
import { Bot, createBotCommand } from '@twurple/easy-bot'; */

const { StaticAuthProvider } = require('@twurple/auth')
const { Bot, createBotCommand } = require('@twurple/easy-bot')
const { ApiClient } = require('@twurple/api')


const clientId = 'v7hg69jjwt25b70af1j1svqaenk5cl';
const accessToken = 'oy4r8lqpz8993zf72469as3og3vnb7';
const authProvider = new StaticAuthProvider(clientId, accessToken);

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
cat('summit1g')

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
