import {Observer} from "../subscription/Observer.interface";
import {Post} from "../postable/Post";

export interface Subscribable {
    addSubscriber() : void;
    removeSubscriber() : void;
    addPostable(post : Post) : void;
    removePostable(post : Post) : void;
    addObserver(observer : Observer) : void;
    removeObserver(observer : Observer) : void;
    notifyObservers() : void;
}