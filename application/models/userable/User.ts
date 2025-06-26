import {TextualPost} from "../postable/TextualPost";
import {Userable} from "./Userable.interface";
import {Subscription} from "../subscription/Subscription";
import {Subscribable} from "../subscribable/Subscribable.interface";
import {Post} from "../postable/Post";

export class User implements Userable {
    private _username: string;
    private _dateOfBirth: Date;
    private _posts: Set<Post>;
    private _subscriptions: Set<Subscription>;

    constructor(username: string, dateOfBirth: Date) {
        this._username = username;
        this._dateOfBirth = dateOfBirth;
        this._posts = new Set<Post>();
        this._subscriptions = new Set<Subscription>();
    };

    createPost(content: string): Post {
        const newTextualPost: Post = new TextualPost(this, content);
        this.addPost(newTextualPost);
        return newTextualPost;
    }

    deletePost(post: Post): void {
        this._posts.delete(post);
    }

    getPosts(): Set<Post> {
        return new Set<Post>(this._posts);
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

    private addPost(post : Post) : void{
        this._posts.add(post);
    }

    public removePost(post : Post) : void{
        this._posts.delete(post);
    }

    get getUsername(): string {
        return this._username;
    }

    get getDateOfBirth(): Date {
        return this._dateOfBirth;
    }

}