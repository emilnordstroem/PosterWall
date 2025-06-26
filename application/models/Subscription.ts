import {Userable} from "./Userable.interface";
import {Subscribable} from "./Subscribable.interface";

export class Subscription {
    private _subscriber : Userable;
    private _subscribedTo : Subscribable;

    constructor(subscriber : Userable, subscribedTo : Subscribable) {
        this._subscriber = subscriber;
        this._subscribedTo = subscribedTo;
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