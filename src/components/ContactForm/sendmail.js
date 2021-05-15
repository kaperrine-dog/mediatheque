var AWS = require('aws-sdk');
var ses = new AWS.SES();

var RECEIVER = process.env.EMAIL_RECIEVER;
var SENDER = process.env.EMAIL_SENDER;

//response header
var response = {
    "isBase64Encoded": false,
    "headers": {
        "Content-Type": 'application/json',
        "Access-Control-Allow-Headers": "Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token,Accept",
        "Access-Control-Allow-Methods": "POST,GET,OPTIONS",
        "Access-Control-Allow-Origin": "*",
    },
    "statusCode": 200,
    "body": "{\"result\": \"テスト成功!\"}"
};

exports.handler = function(event, context, callback) {
    console.log('受理したイベント:', event);
    sendEmailToUser(event, function(err, data) {
      context.done(err, null);
    });
    console.log(event.email)
    sendEmailToOwner(event, function(err, data) {
      context.done(err, null);
    });
    callback(null, response);
};

//サイトオーナーへメール送信処理
function sendEmailToOwner(event, done) {
    const sendOwnerParams = {
        Destination: {
            ToAddresses: [
                RECEIVER
            ]
        },
        Message: {
            Body: {
                Text: {
                    Data: `
【お問い合わせフォームの内容】\n
● お名前: \n ${event.name} \n\n
● 件名: \n ${event.subject}  \n\n
● メール: \n ${event.email} \n\n
● URL: \n ${event.url} \n\n
● 内容: \n  ${event.message}`,
                    Charset: 'UTF-8'
                }
            },
            Subject: {
                Data: `【問い合わせ coro-lab.com】${event.name}様からのお問い合わせが来ました！`,
                Charset: 'UTF-8'
            }
        },
        Source: SENDER
    };
    ses.sendEmail(sendOwnerParams, done);
    return {
        response,
        body: JSON.stringify(sendOwnerParams),
        statusCode: 200
    }
}

//但しサンドボックスの解除が必要
function sendEmailToUser(event, done){
  const sendUserParams = {
    Destination: {
        ToAddresses: [
            event.email,
        ]
    },
    Message: {
        Body: {
            Text: {
                Data: `
\n
\n
----------------------------------------------------\n
\n
このメールは${event.host}から自動的に送信されています。\n
心当たりのない場合は${SENDER}までご連絡ください。\n
\n
----------------------------------------------------\n
\n
以下、入力されたお問い合わせ内容です。
\n
【お問い合わせフォームの内容】\n
● お名前: \n
${event.name}\n
\n
● 件名: \n 
${event.subject}\n
\n
● メール: \n
${event.email}\n
\n
● URL: \n 
${event.url}\n
\n
● 内容: \n  ${event.message}\n
\n
----------------------------------------------------\n
© ${event.host}, All Rights Reserved 
`,
                Charset: 'UTF-8'
            }
        },
        Subject: {
            Data: `【お問い合わせ送信内容のご確認】(${event.name}様)`,
            Charset: 'UTF-8'
        }
    },
    Source: SENDER
  };
  ses.sendEmail(sendUserParams, done);
  return {
      response,
      body: JSON.stringify(sendUserParams),
      statusCode: 200
  }
}