import {Postable} from "./Postable.interface";
import {Subscribable} from "./Subscribable.interface";
import {Subscription} from "./Subscription";

export interface Userable {
    createPost(content : string) : Postable;
    deletePost(post : Postable) : void;
    getPosts() : Set<Postable>;
    createSubscription(subscribable : Subscribable) : Subscription;
    subscribeTo(subscription : Subscription) : void;
    unsubscribeTo(subscription : Subscription): void;
    getSubscriptions() : Set<Subscription>;
}
