import {Userable} from "../userable/Userable.interface";
import {Subscribable} from "../subscribable/Subscribable.interface";
import {Observer} from "./Observer.interface";

export class Subscription implements Observer {
    private _subscriber : Userable;
    private _subscribedTo : Subscribable;

    constructor(subscriber : Userable, subscribedTo : Subscribable) {
        this._subscriber = subscriber;
        this._subscribedTo = subscribedTo;
    }

    update(subscribable: Subscribable): void {
        if (this._subscribedTo === subscribable) {
            console.log("New post on " + subscribable);
        }
    }

    get getSubscriber(): Userable {
        return this._subscriber;
    }

    get getSubscribedTo(): Subscribable {
        return this._subscribedTo;
    }

    set setSubscriber(value: Userable) {
        this._subscriber = value;
    }

    set subScribedTo(value: Subscribable) {
        this._subscribedTo = value;
    }

}