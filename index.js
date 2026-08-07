const mineflayer = require('mineflayer');
require('dotenv').config();

const HOST = process.env.HOST || 'OrgCoop.aternos.me';
const PORT = Number(process.env.PORT) || 24497;
const USERNAME = process.env.USERNAME || 'Bot_on_AFK';
const PASSWORD = process.env.PASSWORD || '';

let bot;
let reconnecting = false;

function createBot() {
    bot = mineflayer.createBot({
        host: HOST,
        port: PORT,
        username: USERNAME,
        auth: 'offline'
    });

    bot.once('spawn', () => {
        console.log('✅ Бот зайшов на сервер!');

        if (PASSWORD) {
            bot.chat(`/login ${PASSWORD}`);
        }

        startCircle();
    });

    bot.on('end', () => {
        console.log('❌ Бот відключився.');

        if (!reconnecting) {
            reconnecting = true;

            setTimeout(() => {
                reconnecting = false;
                console.log('🔄 Перепідключення...');
                createBot();
            }, 5000);
        }
    });

    bot.on('error', (err) => {
        console.log('⚠️ Помилка:', err.message);
    });

    bot.on('kicked', (reason) => {
        console.log('👢 Бота викинуло:', reason);
    });
}

function startCircle() {
    let angle = 0;

    const radius = 3;
    const centerX = bot.entity.position.x;
    const centerZ = bot.entity.position.z;

    setInterval(() => {
        if (!bot.entity) return;

        angle += 0.15;

        const targetX = centerX + Math.cos(angle) * radius;
        const targetZ = centerZ + Math.sin(angle) * radius;

        const dx = targetX - bot.entity.position.x;
        const dz = targetZ - bot.entity.position.z;

        const yaw = Math.atan2(-dx, -dz);

        bot.look(yaw, 0, true);
        bot.setControlState('forward', true);
    }, 100);
}

createBot();
