import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Information} from '../models/information.model';




@Injectable()
export class InformationService {
  constructor(private http: HttpClient) {}


  createNewInformationUser(information: Information): Observable<Information> {
    return this.http.post<Information>('http://localhost:3000/information', information);
  }

  getInformationById(id: number | undefined): Observable<Information | undefined> {
    return this.http.get<Information[]>(`http://localhost:3000/information?id=${id}`)
      .pipe(
        map((information: Information[]) => information[0] ? information[0] : undefined)
      );
  }

  updateInformation(information: Information): Observable<Information> {
    return this.http.put<Information>(`http://localhost:3000/information/${information.id}`, information);
  }
}

