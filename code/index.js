const RPC = require('discord-rpc');
const rpc = new RPC.Client({
  transport: 'ipc'
});

rpc.on('ready', () => {
  rpc.setActivity({
    details: "Hey, I'm Prifixy!",
    state: "🧑‍💻 - Coding",
    startTimestamp: new Date(),
    largeImageKey: "pingu",
    largeImageText: "AURGHHHH",
    smallImageText: "Ahwx.org hehe",
    buttons: [{
      label: "Website",
      url: "https://jaapvd.nl"
    }, {
      label: "GitHub",
      url: "https://github.com/Ahwxx"
    }]
  });
  console.log('RPC is ready hehe');
})

rpc.login(
  {
    clientId: ""
  }
)
