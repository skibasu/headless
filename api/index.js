import express from 'express'
import Mailchimp from 'mailchimp-api-v3'

// const apiKey = '90e3b3831f93cb106e8322838b5951c3-us4'
// const audienceId = 'beba7f6c2e'


const app = express()
app.use(express.json())

app.post('/subscribe', async (req, res) => {
    const { email: email_address, apiKey, audienceId } = req.body
    const mailchimp = new Mailchimp(apiKey)
    try {
        const response = await mailchimp.request({
            method: 'post',
            path: `/lists/${audienceId}/members`,
            body: {
                email_address,
                status: "subscribed"
            }
        })
        const { _links, ...result } = response
        return res.status(result.statusCode).json(result)
    } catch (err) {
        res.status(err.status).send(err.detail)
    }
})

export default {
    path: '/api',
    handler: app
}