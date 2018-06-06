import { Injectable } from '@angular/core';
import { Costs } from './costs';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';



@Injectable()
export class BimService {

    //Creating constructor to inject http call over service
    constructor(private _http: Http) { }

    getcostdetails(): Observable<Costs[]> {
        return this._http.get("http://localhost:51865/api/checkcost")
            .map((response: Response) => <Costs[]>response.json());

    }
}

