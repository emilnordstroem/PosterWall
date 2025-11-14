import express from "express";

const router = express.Router();

const title = 'posterwall'

router.get('/', (request, response) => {
    if (!request.session.isUserLoggedIn) {
        response.render('login')
    } else {
        response.redirect('/home')
    }
})

router.get('/home', (request, response) => {
    if (request.session.isUserLoggedIn) {
        response.render(
            'home',
            {
                title: title,
                user: request.session.user.username 
            } 
        )
    } else {
        response.redirect('/')
    }
})

router.get('/logout', (request, response) => {
    request.session.destroy()
    response.redirect('/')
})


export default router;