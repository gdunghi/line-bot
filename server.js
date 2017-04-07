var express = require('express')
var bodyParser = require('body-parser')
var request = require('request')
var app = express()


app.use(bodyParser.json())

app.set('port', (process.env.PORT || 4000))
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.post('/webhook', (req, res) => {
  
  res.sendStatus(200)
})

function sendText (sender, text) {
  let data = {
    to: sender,
    messages: [
      {
        type: 'text',
        text: 'สวัสดีค่ะ เราเป็นผู้ช่วยปรึกษาด้านความรัก สำหรับหมามิ้น 💞'
      }
    ]
  }
  request({
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer qs8fKYnmiSfdWYcQwJnJENMtqrZKswlJoBSKg2ka6a1BNlphgNQ9LAQjT9+tSvsts9ToiNoX82LF6rWfHMMM9yPTHfPQhFdJjecjjbmr2RBRatGFsVgkDhITHsO4TD2x98ybbmRWcuNXv9/fNuDHJAdB04t89/1O/w1cDnyilFU='
    },
    url: 'https://api.line.me/v2/bot/message/push',
    method: 'POST',
    body: data,
    json: true
  }, function (err, res, body) {
    if (err) console.log('error')
    if (res) console.log('success')
    if (body) console.log(body)
  })
}

app.listen(app.get('port'), function () {
  console.log('run at port', app.get('port'))
})