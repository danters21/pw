var push = require('web-push')

//var vapidKeys = push.generateVAPIDKeys();
var vapidKeys = {
    publicKey: 'BJTgpvQBs3U6OdSiX_RL-MUeSt81ljORwXHQdYigSLBUcdMUfeSA7CObwtfrZkWyUdJ25YiO8KuABhkjzHcE6D0',
    privateKey: 'U-jj5JporIauYystguZmGRKBuy7zCTABCKXgwxG8pRI'
  };

//console.log(vapidKeys);

push.setVapidDetails('mailto:testbla@gmail.com', vapidKeys.publicKey, vapidKeys.privateKey);

let sub={"endpoint":"https://fcm.googleapis.com/fcm/send/dOJSugPiYI8:APA91bGoY2byMAr62zFwnsQpAgukRn1ulFMUUMHo_zbbo7tXcIjKiKLLSyj0AQcRTO-Cuiqu5F-GNIH9ZKYaCgJZvZ33lzmEhm6apI2Vsur6N_e8IGVlOk0cQKM3pd6fuxGBzr13HxfG","expirationTime":null,"keys":{"p256dh":"BCwP9Vc2fGE_VFDltKljY8B_RVrY9TeWDFweeErK_XCvRJaJjWv5hcseBQV8wR55JWDicVJYLDC4BTrozsUfUcY","auth":"gSs1sdf-N8xC5WSBY1g40Q"}};

push.sendNotification(sub);