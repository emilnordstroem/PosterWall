import {User} from "../models/User";
import {Postable} from "../models/Postable.interface";
import {Wall} from "../models/Wall";
import {Subscribable} from "../models/Subscribable.interface";
import {Userable} from "../models/Userable.interface";
import {Subscription} from "../models/Subscription";

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

    public subscribeTo(subscriber : Userable, subscribeTo : Subscribable) : void {
        let alreadySubscribed : boolean = false;
        const proxy : Set<Subscription> = subscriber.getSubscriptions();
        proxy.forEach((currentSubscription : Subscription) => {
            if (currentSubscription.getSubscribedTo == subscribeTo) {
                alreadySubscribed  = true;
            }
        });
        if (!alreadySubscribed) {
            subscriber.createSubscription(subscribeTo);
            subscribeTo.addSubscriber();
        }
    }

    public unsubscribeTo(subscriber : Userable, subscribedTo : Subscribable) : void {
        const proxy : Set<Subscription> = subscriber.getSubscriptions();
        proxy.forEach((subscription : Subscription) => {
            if (subscription.getSubscribedTo == subscribedTo) {
                subscriber.unsubscribeTo(subscription);
                subscribedTo.removeSubscriber();
            }
        });
    }

    public postOnWall(postable : Postable, subscribable : Subscribable) : void {
        subscribable.addPostable(postable)
    }

    public removeFromWall(postable : Postable, subscribable : Subscribable) : void {
        subscribable.removePostable(postable);
    }

}