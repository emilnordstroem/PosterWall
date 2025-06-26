import {User} from "../models/userable/User";
import {Wall} from "../models/subscribable/Wall";
import {Subscribable} from "../models/subscribable/Subscribable.interface";
import {Userable} from "../models/userable/Userable.interface";
import {Observer} from "../models/subscription/Observer.interface";
import {Post} from "../models/postable/Post";
import {Subscription} from "../models/subscription/Subscription";

export class Controller {

    constructor(){}

    public createUser(username : string, dateOfBirth : Date) : User {
        const newUser : User = new User(username, dateOfBirth);
        // storage
        return newUser;
    }

    public createPost(user : User, content : any) : Post {
        const newPost : Post = user.createPost(content);
        // storage
        return newPost;
    }

    public createWall(title : string, description : string) : Wall {
        const newWall : Wall = new Wall(title, description);
        // storage
        return newWall;
    }

    public subscribeTo(user : Userable, subscribable : Subscribable) : Subscription | undefined {
        if (!user.isSubscribedTo(subscribable)) {
            const subscription : Subscription = user.createSubscription(subscribable);
            subscribable.addSubscriber();
            return subscription;
        }
        return undefined;
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

    public postOnWall(user : Userable, post : Post, subscribable : Subscribable) : void {
        if (user.isSubscribedTo(subscribable)) {
            subscribable.addPostable(post);
            subscribable.notifyObservers();
        }
    }

    public removeFromWall(user : Userable, post : Post, subscribable : Subscribable) : void {
        if (user.isSubscribedTo(subscribable)) {
            subscribable.removePostable(post);
        }
    }

}