import express from 'express'
import { createPosterWall, savePosterWallToStorage } from '../controller/posterwallController.js'

const router = express.Router()

router.get('/', (request, response) => {
    response.render('createPosterWall')
})

router.post('/', async (request, response) => {
    const { title, description } = request.body
    if (!title || !description) {
        response.sendStatus(401)
    }

    const posterwall = createPosterWall(null, title, description, request.session.userId)
    await savePosterWallToStorage(posterwall)

    response.redirect(`/posterwall/${posterwall.id}`)
})

router.get('/:id', (request, response) => {

})

export default router