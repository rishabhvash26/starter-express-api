const express = require('express')
const app = express()
app.use('/Rishabh', (req, res) => {
    console.log("Just got a request!")
    res.send('Hi Rishabh!')
})
app.listen(process.env.PORT || 3000)
