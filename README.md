# Bot-for-aternos 🤖

A simple Minecraft AFK bot made with **Node.js** and **Mineflayer**.

The bot connects to a Minecraft server, automatically handles `/register` and `/login`, walks in circles and reconnects after disconnecting.

## ✨ Features

- 🤖 Minecraft bot using Mineflayer
- 🚶 Automatically walks in circles
- 🔐 Automatic `/register` and `/login`
- 🔄 Automatic reconnect after disconnect
- 💬 Displays server chat in the console
- 🎮 Minecraft 1.16.5 support

## 📋 Requirements

- Node.js
- A Minecraft server
- Internet connection
- A Minecraft account/bot name

## 📥 Installation

Clone the repository:

```bash
git clone https://github.com/loblesty/Bot-for-aternos.git
```

Enter the project folder:

```bash
cd Bot-for-aternos
```

Install dependencies:

```bash
npm install
```

## ⚙️ Configuration

The server settings are located in `index.js`:

```js
const HOST = 'your-server-address';
const PORT = 25565;
const USERNAME = 'YourBotName';
```

The bot uses Minecraft version:

```js
version: '1.16.5'
```

### 🔑 Password

The password is stored separately in `config.js`.

Create a file called:

```text
config.js
```

with:

```js
module.exports = {
    password: 'YOUR_PASSWORD'
};
```

**Do not upload `config.js` to GitHub.**

It is already included in `.gitignore`.

## ▶️ Running

Start the bot with:

```bash
npm start
```

Or:

```bash
node index.js
```

## 🔄 Reconnecting

If the bot is kicked or the connection is closed, it automatically tries to reconnect after **10 seconds**.

## 🚶 Circle movement

After joining the server, the bot starts moving forward and continuously changes its rotation.

This makes the bot walk around in a circle.

## 🛠️ Technologies

- JavaScript
- Node.js
- Mineflayer
- Minecraft 1.16.5

## ⚠️ Disclaimer

This bot is intended for use on your own Minecraft server or on servers where bot usage is allowed.

Do not use the bot to bypass server rules or restrictions.

## 📜 License

This project is licensed under the **MIT License**.

You are free to use, modify and distribute the code according to the license.

## ⭐ Support

If you find this project useful, you can give it a ⭐ on GitHub!
