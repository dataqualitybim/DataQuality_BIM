import { Injectable } from '@angular/core';
import { Ifc } from './ifc';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable()
export class BimService {

    //Creating constructor to inject http call over service 
    //// Inject Angular http service
    constructor(private _http: Http) { }

    getifdetails(): Observable<Ifc[]> {
        // To convert Observable<Response> to Observable<IEmployee[]>
        // we are using the map operator
        return this._http.get("http://localhost:51865/api/checkifc/")
            .map((response: Response) => <Ifc[]>response.json());

    }
}
   