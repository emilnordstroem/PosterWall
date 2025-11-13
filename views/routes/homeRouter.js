import express from "express";

const router = express.Router();

router.get('/', (request, response) => {
    if (request.session.isUserLoggedIn) {
        response.redirect('/home')
    } else {
        response.render('index')
    }
})

router.get('/home', (request, response) => {
    if (request.session.isUserLoggedIn) {
        response.render(
            'home',
            { user: request.session.user.username } 
        )
    } else {
        response.render('index');
    }
})

router.get('/logout', (request, response) => {
    request.session.destroy()
    response.redirect('/')
})


export default router;