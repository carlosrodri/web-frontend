import { DeviceDetectorService } from 'ngx-device-detector';
import { map } from 'rxjs/operators';
import { Visit } from './../models/visit';
import { Observable } from 'rxjs';
import { EndPointsService } from './end-points.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VisitService {

  deviceInfo
  device: string = ''

  constructor(private deviceService: DeviceDetectorService, private http: HttpClient, private endPoint: EndPointsService) { }

  getDeviceInformation() {
    this.deviceInfo = this.deviceService.getDeviceInfo();
    if (this.deviceService.isMobile()) {
      this.device = 'Mobile';
    } else if (this.deviceService.isTablet()) {
      this.device = 'Tablet';
    } else if (this.deviceService.isDesktop()) {
      this.device = 'Desktop';
    }
    console.log(this.deviceInfo['browser']);
  }

  getAllVisits(): Observable<Visit[]> {
    return this.http.get(this.endPoint.VISITS_URL).pipe(
      map((res) => res as Visit[])
    )
  }

  getAllVisitsByDate(date: Date): Observable<Visit[]> {
    return this.http.get(this.endPoint.VISITS_URL + date).pipe(
      map((res) => res as Visit[])
    )
  }

  addVisit() {
    let visit: Visit = new Visit()
    visit.device = this.device
    visit.deviceInfo = this.deviceInfo['browser']
    return this.http.post(this.endPoint.VISITS_URL, visit)
  }

}
