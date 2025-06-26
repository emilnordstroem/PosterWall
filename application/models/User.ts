import {PostableInterface} from "./Postable.interface";

export class User {
    private _userName: string;
    private _postedPosts: PostableInterface[];

    constructor(userName: string) {
        this._userName = userName;
    }

    public postContent(content: string, dateOfPost : Date, postedBy : User){
    }

    get userName(): string {
        return this._userName;
    }

    get postedPosts(): PostableInterface[] {
        return [this._postedPosts];
    }

}