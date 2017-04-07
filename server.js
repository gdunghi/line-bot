var express = require('express')
var bodyParser = require('body-parser')
var request = require('request')
var app = express()


app.use(bodyParser.json())

app.set('port', (process.env.PORT || 4000))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.post('/webhook', (req, res) => {

    res.sendStatus(200)
})

function sendText(sender, text) {
    let data = {
        to: sender,
        messages: [
            {
                type: 'text',
                text: 'สวัสดีค่ะ Test line bot'
            }
        ]
    }
    request({
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer 3hEGjkO7IobplSxdgSwly5svunjb6K8jpSw4eaCG09kn2wHK8T0HTN25PwIp6j6cu3sSDQDQMXEppIB5C3m9ugsXQxgxN4xf+fEKHE7782nWgFzOJdj2tmY3B3wGD3D/Y7AmjJflW+UiVAqUDu9tbwdB04t89/1O/w1cDnyilFU='
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