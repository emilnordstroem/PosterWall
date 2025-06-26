import {Postable} from "../postable/Postable.interface";
import { Observer } from "../subscription/Observer.interface";
import {Subscribable} from "./Subscribable.interface";

export class Wall implements Subscribable {
    private _titel: string;
    private _description: string;
    private _posts: Set<Postable>;
    private _subscribers: number;
    private _observers: Set<Observer>

    constructor(titel: string, description: string) {
        this._titel = titel;
        this._description = description;
        this._posts = new Set<Postable>();
        this._subscribers = 0;
        this._observers = new Set<Observer>();
    }

    addSubscriber(): void {
        this._subscribers++;
    }

    removeSubscriber(): void {
        this._subscribers--;
    }

    public addPostable(post : Postable) : void {
        this._posts.add(post);
    }

    public removePostable(post : Postable) : void {
        this._posts.delete(post)
    }

    addObserver(observer: Observer): void {
        this._observers.add(observer);
    }

    removeObserver(observer: Observer): void {
        this._observers.delete(observer);
    }

    notifyObservers(): void {
        this._observers.forEach((observer) => observer.update(this))
    }

    get getTitel(): string {
        return this._titel;
    }

    get getDescription(): string {
        return this._description;
    }

    get getPosts(): Set<Postable> {
        return new Set<Postable>(this._posts);
    }

    get getSubscribers(): number {
        return this._subscribers;
    }

    get getObservers(): Set<Observer> {
        return this._observers;
    }

    set setTitel(value: string) {
        this._titel = value;
    }

    set setDescription(value: string) {
        this._description = value;
    }

}
