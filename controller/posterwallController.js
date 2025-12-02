import PosterWall from "../models/posterwall.js";
import Post from '../models/post.js'

import fs from 'fs/promises'
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const filePath = path.join(__dirname, '../database/posterwalls.json')

export function createPosterWall (id, title, description, createdByUser, posts, subscribers) {
    const posterwall = new PosterWall(
        id, 
        title, 
        description, 
        createdByUser, 
        posts, 
        subscribers
    )
    return posterwall
}

export async function savePosterWallToStorage (posterwall) {
    try {
        const posterwalls = await readPosterWalls()
        posterwalls.push(posterwall)
        await updatePosterWalls(posterwalls)
    } catch (error) {
        console.error(error.message)
        throw error
    }
}

export async function readPosterWalls () {
    try {
        const data = await fs.readFile(filePath, 'utf-8')
        const json = JSON.parse(data)
        return json
    } catch (error) {
        console.error(error.message)
        throw error
    }
}

export async function updatePosterWalls (posterwalls) {
    try {
        const json = JSON.stringify(posterwalls, null, 2)
        await fs.writeFile(filePath, json, 'utf-8')
    } catch (error) {
        console.error(error.message)
        throw error
    }
}

export function createPost (id, message, postedToPosterWall) {
    const post = new Post(id, message, postedToPosterWall)
    return post
}

export async function addPostToPosterWall (post) {    
    try {
        const posterwalls = await readPosterWalls()
        const posterWall = posterwalls.find(currentPosterWall => currentPosterWall.id === post.postedToPosterWall)
        posterWall.posts.push(post)
        await updatePosterWalls(posterwalls)
    } catch (error) {
        console.error(error.message)
        throw error
    }
}
