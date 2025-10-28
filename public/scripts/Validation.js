
export function isPostContentValid (content) {
    return content !== null 
        && typeof content === 'string'
        && (content.length > 0 && content.length <= 280)
}