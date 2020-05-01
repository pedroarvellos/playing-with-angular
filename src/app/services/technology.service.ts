import { Injectable } from "@angular/core";
import { of, Observable, Subscriber } from "rxjs";

export type Technology = {
  id?: number,
  technology: string;
  experience: number;
};

@Injectable({
  providedIn: "root",
})
export class TechnologiesService {
  technologyList: Technology[] = [{ id: 1, technology: "JavaScript", experience: 68 }];

  getAll(): Observable<Technology[]> {
    return of(this.technologyList);
  }

  add(technology: Technology): Observable<Technology> {
    return new Observable((subscriber) => {
      this.technologyList.push({...technology, id: Math.floor(Math.random() * 1000) + 1  });
      subscriber.next(technology);
      subscriber.complete();
    });
  }

  delete(id: number): Observable<Technology[]> {
    return new Observable((subscriber) => {
      this.technologyList = this.technologyList.filter(t => t.id !== id);
      subscriber.next(this.technologyList);
      subscriber.complete();
    });
  }

  mergeObjects(obj1: any, obj2: any) {
    return { ...obj1, ...obj2 };
  }
}
