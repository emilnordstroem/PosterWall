import express from 'express'
import { createPosterWall, readPosterWalls, savePosterWallToStorage, createPost, addPostToPosterWall } from '../controller/posterwallController.js'
import { createSubscription, subscribeToPosterWall, unsubscribeToPosterWall } from '../controller/subscriptionController.js'

const router = express.Router()

router.get('/', (request, response) => {
    response.render('createPosterWall')
})

router.post('/', async (request, response) => {
    const { title, description } = request.body
    if (!title || !description) {
        response.sendStatus(401)
    }

    const posterwall = createPosterWall(null, title, description, request.session.userId, [], [])
    await savePosterWallToStorage(posterwall)

    response.status(201).json(
        { 
            path: `/posterwall/${posterwall.id}` 
        }
    )
})

router.get('/:id', async (request, response) => {
    const posterwallId = parseInt(request.params.id)

    const posterwalls = await readPosterWalls()
    const posterwall = posterwalls.find(currentPosterWall => currentPosterWall.id === posterwallId)

    if (!posterwall) {
        response.redirect('/',)
    } else {
        const subscriptions = request.session.subscriptions
        const subscription = subscriptions.find(subscriber => subscriber.posterWallId === posterwallId)

        response.render('posterwall', 
            {
                subscription: subscription,
                posterwall: posterwall
            }
        )
    }
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

router.post('/:id/subscribe', async (request, response) => {
    const posterwallId = parseInt(request.params.id)
    const userId = parseInt(request.session.userId)

    try {
        const subscription = createSubscription(null, userId, posterwallId)
        await subscribeToPosterWall(subscription)

        const subscriptions = request.session.subscriptions
        subscriptions.push(subscription)
        request.session.subscriptions = subscriptions

        response.sendStatus(201)
    } catch (error) {
        console.error(error.message)
        response.sendStatus(401)
    }

})

router.delete('/:id/unsubscribe', async (request, response) => {
    const posterwallId = parseInt(request.params.id)
    const { subscriptionId } = request.body

    const subscription = request.session.subscriptions.find(
        currentSubscription => currentSubscription.id === parseInt(subscriptionId)
    )

    try {
        await unsubscribeToPosterWall(subscription)
        request.session.subscriptions.filter(currentSubscription => currentSubscription.id !== parseInt(subscriptionId))
        response.sendStatus(201)
    } catch (error) {
        console.error(error.message)
        response.sendStatus(401)
    }
})

export default router