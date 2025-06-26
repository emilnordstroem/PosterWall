import {User} from "../models/userable/User";
import {Postable} from "../models/postable/Postable.interface";
import {Wall} from "../models/subscribable/Wall";
import {Subscribable} from "../models/subscribable/Subscribable.interface";
import {Userable} from "../models/userable/Userable.interface";
import {Observer} from "../models/subscription/Observer.interface";

export class Controller {

    constructor(){}

    public createUser(username : string, dateOfBirth : Date) : User {
        const newUser : User = new User(username, dateOfBirth);
        // storage
        return newUser;
    }

    public createPost(user : User, content : any) : Postable {
        const newPost : Postable = user.createPost(content);
        // storage
        return newPost;
    }

    public createWall(title : string, description : string) : Wall {
        const newWall : Wall = new Wall(title, description);
        // storage
        return newWall;
    }

    public subscribeTo(user : Userable, subscribable : Subscribable) : void {
        if (!user.isSubscribedTo(subscribable)) {
            user.createSubscription(subscribable);
            subscribable.addSubscriber();
        }
    }

    public turnOnNotifications (observer : Observer, subscribable : Subscribable) : void {
        subscribable.addObserver(observer);
    }

    public turnOffNotifications (observer : Observer, subscribable : Subscribable) {
        subscribable.removeObserver(observer);
    }

    public notifyAllObservers (subscribable : Subscribable) : void {
        subscribable.notifyObservers();
    }

    public unsubscribeFrom(user : Userable, subscribable : Subscribable) : void {
        const subscription = user.findSubscription(subscribable);
        if (subscription) {
            user.unsubscribeFrom(subscription);
            subscribable.removeSubscriber();
        }
    }

    public postOnWall(user : Userable, postable : Postable, subscribable : Subscribable) : void {
        if (user.isSubscribedTo(subscribable)) {
            subscribable.addPostable(postable)
        }
    }

    public removeFromWall(user : Userable, postable : Postable, subscribable : Subscribable) : void {
        if (user.isSubscribedTo(subscribable)) {
            subscribable.removePostable(postable);
        }
    }

}