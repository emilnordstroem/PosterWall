

function isPostContentValid (content) {
    return content !== null 
        && content instanceof String
        && (content.length > 0 && content.length <= 280)
}
