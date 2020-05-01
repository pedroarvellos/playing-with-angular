import { Injectable } from "@angular/core";
import { of, Observable, Subscriber } from "rxjs";

export type Technology = {
  technology: string;
  experience: number;
};

@Injectable({
  providedIn: "root",
})
export class TechnologiesService {
  technologyList: Technology[] = [{ technology: "JS", experience: 35 }];

  getAll(): Observable<Technology[]> {
    return of(this.technologyList);
  }

  add(technology: Technology): Observable<Technology[]> {
    return new Observable(subscriber => {
      this.technologyList.push(technology);
      subscriber.next(this.technologyList);
      subscriber.complete();
    })
  }

  mergeObjects(obj1: any, obj2: any) {
    return {...obj1, ...obj2}
  }
}
