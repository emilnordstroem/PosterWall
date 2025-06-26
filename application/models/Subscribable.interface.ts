import {Postable} from "./Postable.interface";

export interface Subscribable {
    addSubscriber() : void;
    removeSubscriber() : void;
    addPostable(post : Postable) : void;
    removePostable(post : Postable) : void;
}