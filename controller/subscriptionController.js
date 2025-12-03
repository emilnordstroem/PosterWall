import { readUsers, updateUsers } from './userController.js'
import { readPosterWalls, updatePosterWalls } from './posterwallController.js'
import Subscription from '../models/subscription.js'

export function createSubscription (id, userId, posterwallId) {
    const subscription = new Subscription(id, userId, posterwallId)
    return subscription
}

export async function subscribeToPosterWall (subscription) {
    const users = await readUsers()
    const user = users.find(currentUser => currentUser.id === subscription.userId)

    const posterwalls = await readPosterWalls()
    const posterwall = posterwalls.find(currentPosterWall => currentPosterWall.id === subscription.posterwallId) 

    if (!user || !posterwall) {
        throw new Error(`either user: ${user} or posterwall ${posterwall} does not exist`)
    }

    user.subscriptions.push(subscription)
    posterwall.subscribers.push(subscription)

    try {
        updateUsers(users)
        updatePosterWalls(posterwalls)
    } catch (error) {
        console.error('error in either updateusers() or updatePosterWalls() in subscribeToPosterWall(): ', error)
    }
}

export async function unsubscribeToPosterWall (subscription) {
    const users = await readUsers()
    const user = users.find(currentUser => currentUser.id === subscription.userId)

    const posterwalls = await readPosterWalls()
    const posterwall = posterwalls.find(currentPosterWall => currentPosterWall.id === subscription.posterwallId) 

    if (!user || !posterwall) {
        throw new Error(`either user: ${user} or posterwall ${posterwall} does not exist`)
    }

    user.subscriptions.filter(currentSubscription => currentSubscription.id !== subscription.id)
    posterwall.subscribers.filter(currentSubscription => currentSubscription.id !== subscription.id)

    try {
        updateUsers(users)
        updatePosterWalls(posterwalls)
    } catch (error) {
        console.error('error in either updateusers() or updatePosterWalls() in subscribeToPosterWall(): ', error)
    }
}