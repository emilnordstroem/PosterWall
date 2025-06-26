import {Subscribable} from "../subscribable/Subscribable.interface";
import {Subscription} from "../subscription/Subscription";
import {Post} from "../postable/Post";

export interface Userable {
    createPost(content : string) : Post;
    deletePost(post : Post) : void;
    getPosts() : Set<Post>;
    isSubscribedTo(subscribable : Subscribable) : boolean;
    createSubscription(subscribable : Subscribable) : Subscription;
    findSubscription(subscribable: Subscribable) : Subscription | undefined;
    unsubscribeFrom(subscription : Subscription): void;
    getSubscriptions() : Set<Subscription>;
}
