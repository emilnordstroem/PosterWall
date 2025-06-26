import {Postable} from "../postable/Postable.interface";
import {Observer} from "../subscription/Observer.interface";

export interface Subscribable {
    addSubscriber() : void;
    removeSubscriber() : void;
    addPostable(post : Postable) : void;
    removePostable(post : Postable) : void;
    addObserver(observer : Observer) : void;
    removeObserver(observer : Observer) : void;
    notifyObservers() : void;
}