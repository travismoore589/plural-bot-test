module.exports = {
	help: cfg => "Invite the bot to your server",
	usage: cfg =>  ["invite - sends the bot's invite URL to this channel, which can be used to invite the bot to another server in which you have Manage Server permissions"],
	permitted: (msg) => true,
	execute: (bot, msg, args, cfg) => {
		return `Click/tap this link to invite the bot to your server: <https://discord.com/oauth2/authorize?client_id=${process.env.BOT_INVITE}&scope=bot&permissions=536996928>\nIf you are on mobile and are having issues, copy the link and paste it into a browser.`;
	}
};