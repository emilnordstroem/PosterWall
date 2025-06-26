import {Postable} from "../postable/Postable.interface";
import {Subscribable} from "../subscribable/Subscribable.interface";
import {Subscription} from "../subscription/Subscription";

export interface Userable {
    createPost(content : string) : Postable;
    deletePost(post : Postable) : void;
    getPosts() : Set<Postable>;
    isSubscribedTo(subscribable : Subscribable) : boolean;
    createSubscription(subscribable : Subscribable) : Subscription;
    findSubscription(subscribable: Subscribable) : Subscription | undefined;
    unsubscribeFrom(subscription : Subscription): void;
    getSubscriptions() : Set<Subscription>;
}
