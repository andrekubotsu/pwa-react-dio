import express from 'express'
import cors from 'cors'
import economy from '../data/economy.json'
import technology from '../data/technology.json'
import world from '../data/world.json'

const GROUP_NEWS = {
  economy,
  technology,
  world
}

const app = express()
const PORT = process.env.PORT || 3001

app.use(cors())

app.get('/api', (req, res) => {
    res.json({
        economy,
        technology,
        world
    })
})

app.get('/api/:subject', (req, res) => {
    const { subject } = req.params
    res.json(GROUP_NEWS[subject])
})

app.get('/api/:subject/:id', (req, res) => {
    const { subject , id} = req.params
    const allNews = GROUP_NEWS[subject]
    const news = allNews.value.find(news => news.id === id)
    res.json(news)
})

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT} port`)
})