import express from 'express'
import { createPosterWall, readPosterWalls, savePosterWallToStorage, createPost, addPostToPosterWall } from '../controller/posterwallController.js'

const router = express.Router()

router.get('/', (request, response) => {
    response.render('createPosterWall')
})

router.post('/', async (request, response) => {
    const { title, description } = request.body
    if (!title || !description) {
        response.sendStatus(401)
    }

    const posterwall = createPosterWall(null, title, description, request.session.userId, [])
    await savePosterWallToStorage(posterwall)

    response.redirect(`/posterwall/${posterwall.id}`)
})

router.get('/:id', async (request, response) => {
    const posterwallId = parseInt(request.params.id)

    const posterwalls = await readPosterWalls()
    const posterwall = posterwalls.find(currentPosterWall => currentPosterWall.id === posterwallId)

    if (!posterwall) {
        response.redirect('/')
    }

    response.render('posterwall', 
        {
            posterwall: posterwall
        }
    )
})

router.post('/:id', async (request, response) => {
    const posterWallId = parseInt(request.params.id)
    const { message } = request.body
    if (!posterWallId || !message) {
        response.sendStatus(401)
    }

    try {
        const post = createPost(null, message, posterWallId)
        await addPostToPosterWall(post)
        response.sendStatus(201)
    } catch (error) {
        console.error(error.message)
        response.sendStatus(401)
    }
})

export default router