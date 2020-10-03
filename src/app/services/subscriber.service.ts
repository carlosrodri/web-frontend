import { map } from 'rxjs/operators';
import { Subscriber } from './../models/subscriber';
import { Observable } from 'rxjs';
import { EndPointsService } from './end-points.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SubscriberService {

  constructor(private http: HttpClient, private endPoint: EndPointsService) { }

  getSubscribers(): Observable<Subscriber[]> {
    return this.http.get(this.endPoint.SUBSCRIBERS_URL).pipe(
      map((res) => res as Subscriber[])
    )
  }

  getSubscriberById(id: string): Observable<Subscriber> {
    return this.http.get(this.endPoint.SUBSCRIBERS_URL + id).pipe(
      map((res) => res as Subscriber)
    )
  }

  addSubscriber(subscriber: Subscriber) {
    return this.http.post(this.endPoint.SUBSCRIBERS_URL, subscriber)
  }
}
