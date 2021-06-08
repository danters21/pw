var push = require('web-push')

//var vapidKeys = push.generateVAPIDKeys();
var vapidKeys = {
    publicKey: 'BJTgpvQBs3U6OdSiX_RL-MUeSt81ljORwXHQdYigSLBUcdMUfeSA7CObwtfrZkWyUdJ25YiO8KuABhkjzHcE6D0',
    privateKey: 'U-jj5JporIauYystguZmGRKBuy7zCTABCKXgwxG8pRI'
};

//console.log(vapidKeys);

push.setVapidDetails('mailto:consult-dsarigumba@cerberus.com', vapidKeys.publicKey, vapidKeys.privateKey);

let sub={"endpoint":"https://fcm.googleapis.com/fcm/send/evZFkW2aPnw:APA91bFp337E2xjbPdkzxJ7SFVFP781Z0mBFzf7JvZJWmW1mEsNCgoH1_BL_ISNagpMYcWnu62jgtRvkZd-57YttV2S-FhzfFeILe-zcDyd-ZrOroQPWfYlAKrgzS4OSnGDTk9AgUivq","expirationTime":null,"keys":{"p256dh":"BEBsaVzmkNbKxBvn1jwPgQegAQDwjth0YSOe70XsW8RH3htT0UtBdqOe_9iE7v9JLmEJB4F3kfRVIBbW1zxB04Q","auth":"5O9wv7iLbdBAtZPbtmebjA"}};

let sub_win = {"endpoint":"https://bn3p.notify.windows.com/w/?token=BQYAAAAfvdeShmbLUEBYcipLQ8EkSROfpDgAQSjtrA8z%2bo12CZYwUDOUZuDr2QKVHiKWq66%2fFjfEngDfWTtj3sCDqg0UKlXOQ5xiUW9ugjEj0x6e4Ox99g35ytKqACbUh%2bVisBVh%2fc4zTymPTg%2fTvVgfjoPoqTbal%2bf3lr0%2b8uoAylYE0wgCWs7JqKQh7FKa2SB1mG1Xrh%2bUayviX9%2fsaHXSVEYwPyyfJH7Flgoo5toS4UK2LVgKFuE%2fMnh9ePGZV1UbhBtYRD3BjWCya7pQ6p2Mq6EDJiCeD6qi78dOKMqqt9zC24lnNoKNB%2b8p9kv%2b8y06RMnCI4yzi%2bkrqnRLPirtW3iUEEi1LeEJLAPbHT5eGEhuCQ%3d%3d","expirationTime":null,"keys":{"p256dh":"BKIZkuyaEayk74hX1lnlFUni_APlJQl8Kk3AmjUWbLsho_pLxWTDjJLuF1YyKJiWm5KDBY4tDSDEIMVXKRU7Ggw","auth":"FugplQWL98_sS8lsXa-d6g"}};

var payload = JSON.stringify({subject: 'New Vehicles', message: 'There are new vehicles that qualifies your filter', url: 'https://www.google.com'});
push.sendNotification(sub, payload);
//push.sendNotification(sub_win, payload);