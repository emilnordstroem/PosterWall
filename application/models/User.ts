import {Postable} from "./Postable.interface";
import {TextualPost} from "./TextualPost";
import {Userable} from "./Userable.interface";
import {Subscription} from "./Subscription";
import {Subscribable} from "./Subscribable.interface";

export class User implements Userable {
    private _username: string;
    private _dateOfBirth: Date;
    private _posts: Set<Postable>;
    private _subscriptions: Set<Subscription>;

    constructor(username: string, dateOfBirth: Date) {
        this._username = username;
        this._dateOfBirth = dateOfBirth;
        this._posts = new Set<Postable>();
        this._subscriptions = new Set<Subscription>();
    };

    createPost(content: string): Postable {
        const newTextualPost: Postable = new TextualPost(this, content);
        this.addPost(newTextualPost);
        return newTextualPost;
    }

    deletePost(post: Postable): void {
        this._posts.delete(post);
    }

    getPosts(): Set<Postable> {
        return new Set<Postable>(this._posts);
    }

    createSubscription(subscribable: Subscribable): Subscription {
        const subscription : Subscription = new Subscription(this, subscribable)
        this.subscribeTo(subscription)
        return subscription;
    }

    subscribeTo(subscription : Subscription) : void {
        this._subscriptions.add(subscription);
    }

    unsubscribeTo(subscription : Subscription): void {
        this._subscriptions.delete(subscription);
    }

    getSubscriptions(): Set<Subscription> {
        return new Set<Subscription>(this._subscriptions);
    }

    private addPost(post : Postable) : void{
        this._posts.add(post);
    }

    public removePost(post : Postable) : void{
        this._posts.delete(post);
    }

    get getUsername(): string {
        return this._username;
    }

    get getDateOfBirth(): Date {
        return this._dateOfBirth;
    }

}