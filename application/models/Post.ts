import {PostableInterface} from "./Postable.interface";
import {User} from "./User";

class Post implements PostableInterface {
    content: string;
    dateOfPost: Date;
    postedBy: User;

    constructor(content: string, dateOfPost: Date, postedBy: User) {
        this.content = content;
        this.dateOfPost = dateOfPost;
        this.postedBy  = postedBy;
    }

}