const mineflayer = require('mineflayer');

const HOST = 'Example.aternos.me';
const PORT = 24497;
const USERNAME = 'Bot_on_AFK';

const PASSWORD = 'YOUR_PASSWORD';

let bot;
let reconnecting = false;

function startBot() {
    console.log('🔄 Спроба підключення...');

    bot = mineflayer.createBot({
        host: HOST,
        port: PORT,
        username: USERNAME,
        version: '1.16.5'
    });

    bot.on('login', () => {
        console.log('✅ Підключився до сервера');
    });

    bot.once('spawn', () => {
        console.log('✅ Зайшов у світ');

        bot.setControlState('forward', true);

        let angle = 0;

        setInterval(() => {
            if (!bot || !bot.entity) return;

            angle += Math.PI / 18;

            if (angle >= Math.PI * 2) {
                angle -= Math.PI * 2;
            }

            bot.look(angle, 0, true);
        }, 100);
    });

    bot.on('messagestr', (msg) => {
        console.log('[CHAT]', msg);

        const text = msg.toLowerCase();

        if (text.includes('/register')) {
            setTimeout(() => {
                if (bot && bot.player) {
                    bot.chat(`/register ${PASSWORD} ${PASSWORD}`);
                }
            }, 1000);
        }

        if (text.includes('/login')) {
            setTimeout(() => {
                if (bot && bot.player) {
                    bot.chat(`/login ${PASSWORD}`);
                }
            }, 1000);
        }
    });

    bot.on('kicked', (reason) => {
        console.log('❌ Kicked:', reason);
    });

    bot.on('error', (err) => {
        console.log('⚠️ Error:', err.message);
    });

    bot.on('end', () => {
        console.log('🔌 З\'єднання закрито');
        reconnect();
    });
}

function reconnect() {
    if (reconnecting) return;

    reconnecting = true;

    console.log('⏳ Повторна спроба через 10 секунд...');

    setTimeout(() => {
        reconnecting = false;
        startBot();
    }, 10000);
}

startBot();
