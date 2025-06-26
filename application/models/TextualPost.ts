import {Post} from "./Post";
import {User} from "./User";

export class TextualPost extends Post {
    private _content: String;

    constructor(user: User, content: String) {
        super(user);
        this._content = content;
    }

    get content(): String {
        return this._content;
    }

    set content(newContent: String) {
        this._content = newContent;
    }
}