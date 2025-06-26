import {Postable} from "./Postable.interface";
import {User} from "./User";

export abstract class Post implements Postable {
    private _postedBy : User;
    private _dateOfPost: Date;
    private _upvote: number;
    private _downvote: number;

    constructor(user: User) {
        this._postedBy = user;
        this._dateOfPost = new Date();
        this._upvote = 0;
        this._downvote = 0;
    }

    upvote(): void {
        this._upvote++;
    }

    downvote(): void {
        this._downvote++;
    }

    get getPostedBy(): User {
        return this._postedBy;
    }

    get getDateOfPost(): Date {
        return this._dateOfPost;
    }

    get getUpvote(): number {
        return this._upvote;
    }

    get getDownvote(): number {
        return this._downvote;
    }

}