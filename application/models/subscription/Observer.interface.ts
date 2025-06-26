import {Subscribable} from "../subscribable/Subscribable.interface";

export interface Observer {
    update(subscribable : Subscribable) : void;
}
