import {Controller} from "./Controller";
import {User} from "../models/User";
import {Postable} from "../models/Postable.interface";
import {Wall} from "../models/Wall";


const controller : Controller = new Controller();
const user : User = controller.createUser("Emil", new Date());
const post : Postable = controller.createPost(user, "Hello, World!");
const wall : Wall = controller.createWall("Q/A Coding", "Post questions about coding");
controller.postOnWall(post, wall);



