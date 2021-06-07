var push = require('web-push')

//var vapidKeys = push.generateVAPIDKeys();
var vapidKeys = {
    publicKey: 'BJTgpvQBs3U6OdSiX_RL-MUeSt81ljORwXHQdYigSLBUcdMUfeSA7CObwtfrZkWyUdJ25YiO8KuABhkjzHcE6D0',
    privateKey: 'U-jj5JporIauYystguZmGRKBuy7zCTABCKXgwxG8pRI'
  };

//console.log(vapidKeys);

push.setVapidDetails('mailto:testbla@gmail.com', vapidKeys.publicKey, vapidKeys.privateKey);

let sub={"endpoint":"https://fcm.googleapis.com/fcm/send/e9P2ttZPyQ0:APA91bExoSQUAu_ROOoJKcY9VCohLp0i5Pgae3_ncTAcvIHYft1GEaUyGbL1a30BDFctg1XowAiP9d8rz8tnKkq4htl6tMJRhljnywhO4-t5SRNs_McJ762_oG0ci0SHFUMjccRHyGVM","expirationTime":null,"keys":{"p256dh":"BKqJOv3oAihxWqJIgHzNCxA1LxL_uwIRudVzeJTUEGxWAaa3gkgPWBEVRuEuINBl1yRCBLtO00Mn66VhsYk5Dz4","auth":"_F-vGdjfPH0cR-EtO8fO6A"}};

let sub_win = {"endpoint":"https://bn3p.notify.windows.com/w/?token=BQYAAAAfvdeShmbLUEBYcipLQ8EkSROfpDgAQSjtrA8z%2bo12CZYwUDOUZuDr2QKVHiKWq66%2fFjfEngDfWTtj3sCDqg0UKlXOQ5xiUW9ugjEj0x6e4Ox99g35ytKqACbUh%2bVisBVh%2fc4zTymPTg%2fTvVgfjoPoqTbal%2bf3lr0%2b8uoAylYE0wgCWs7JqKQh7FKa2SB1mG1Xrh%2bUayviX9%2fsaHXSVEYwPyyfJH7Flgoo5toS4UK2LVgKFuE%2fMnh9ePGZV1UbhBtYRD3BjWCya7pQ6p2Mq6EDJiCeD6qi78dOKMqqt9zC24lnNoKNB%2b8p9kv%2b8y06RMnCI4yzi%2bkrqnRLPirtW3iUEEi1LeEJLAPbHT5eGEhuCQ%3d%3d","expirationTime":null,"keys":{"p256dh":"BKIZkuyaEayk74hX1lnlFUni_APlJQl8Kk3AmjUWbLsho_pLxWTDjJLuF1YyKJiWm5KDBY4tDSDEIMVXKRU7Ggw","auth":"FugplQWL98_sS8lsXa-d6g"}};

var payload = JSON.stringify({subject: 'Testing Subject', message: 'Test Body', url: 'https://www.google.com'});
push.sendNotification(sub, payload);
//push.sendNotification(sub_win, payload);