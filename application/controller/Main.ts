import {Controller} from "./Controller";
import {User} from "../models/userable/User";
import {Wall} from "../models/subscribable/Wall";
import {Subscription} from "../models/subscription/Subscription";
import {Post} from "../models/postable/Post";

const controller : Controller = new Controller();

const user : User = controller.createUser("Emil", new Date());
const post : Post = controller.createPost(user, "Hello, World!");
const wall : Wall = controller.createWall("Q/A Coding", "Post questions about coding");

const subscription : Subscription | undefined = controller.subscribeTo(user, wall);
controller.postOnWall(user, post, wall);
console.log("Should show a subscriber: " + wall.getSubscribers + " Number of posts: " + wall.getPosts.size)

if (subscription instanceof Subscription) {
    controller.turnOnNotifications(subscription, subscription.getSubscribedTo);
}

controller.removeFromWall(user, post, wall);
controller.unsubscribeFrom(user, wall);
console.log("Shouldn't show a subscriber: " + wall.getSubscribers + " Number of posts: " + wall.getPosts.size)
