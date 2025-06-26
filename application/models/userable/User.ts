import {Postable} from "../postable/Postable.interface";
import {TextualPost} from "../postable/TextualPost";
import {Userable} from "./Userable.interface";
import {Subscription} from "../subscription/Subscription";
import {Subscribable} from "../subscribable/Subscribable.interface";

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

    isSubscribedTo(subscribable: Subscribable): boolean {
        let alreadySubscribed = false;
        this._subscriptions.forEach((currentSubscription : Subscription) => {
            if (currentSubscription.getSubscribedTo == subscribable) {
                alreadySubscribed = true;
            }
        });
        return alreadySubscribed;
    }

    createSubscription(subscribable: Subscribable): Subscription {
        const subscription : Subscription = new Subscription(this, subscribable)
        this._subscriptions.add(subscription);
        return subscription;
    }

    findSubscription(subscribable: Subscribable) : Subscription | undefined {
        for (const subscription of this._subscriptions) {
            if (subscription.getSubscribedTo === subscribable) {
                return subscription;
            }
        }
        return undefined;
    }

    unsubscribeFrom(subscription : Subscription): void {
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