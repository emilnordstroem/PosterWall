
export function getCreatePostSection () {
    return `<header>
        <h2>
            PosterWall
        </h2>
    </header>

    <div id="createPostSection">
        <h3>
            Home
        </h3>
        <form id="creatPostForm" action="/" method="POST">
            <textarea name="text" placeholder="What's on your mind?" required></textarea>
            <button type="submit">Post</button>
        </form>
    </div>`
}
