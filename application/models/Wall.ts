import {Postable} from "./Postable.interface";
import {Subscribable} from "./Subscribable.interface";

export class Wall implements Subscribable {
    private _titel : string;
    private _description : string;
    private _posts : Set<Postable>;
    private _subscribers : number;

    constructor(titel: string, description: string) {
        this._titel = titel;
        this._description = description;
        this._posts = new Set<Postable>();
        this._subscribers = 0;
    }

    public addPostable(post : Postable) : void {
        this._posts.add(post);
    }

    public removePostable(post : Postable) : void {
        this._posts.delete(post)
    }

    get getTitel(): string {
        return this._titel;
    }

    get getDescription(): string {
        return this._description;
    }

    get getPosts(): Set<Postable> {
        return new Set<Postable>(this._posts);
    }

    get getSubscribers(): number {
        return this._subscribers;
    }

    set setTitel(value: string) {
        this._titel = value;
    }

    set setDescription(value: string) {
        this._description = value;
    }

    addSubscriber(): void {
        this._subscribers++;
    }

    removeSubscriber(): void {
        this._subscribers--;
    }

}
