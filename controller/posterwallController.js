import { PosterWall } from "../models/posterwall.js";

import fs from 'fs/promises'
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const filePath = path.join(__dirname, '../database/posterwalls.json')

export function createPosterWall (id, title, description, createdByUser) {
    const posterwall = new PosterWall(id, title, description, createdByUser)
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
