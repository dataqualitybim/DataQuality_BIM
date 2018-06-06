import { Injectable } from '@angular/core';
import { Material } from './material';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable()
export class BimService {

    //Creating constructor to inject http call over service
    constructor(private _http: Http) { }

    getmaterialdetails(): Observable<Material[]> {
        return this._http.get("http://localhost:51865/api/aom/")
            .map((response: Response) => <Material[]>response.json());

    }
}