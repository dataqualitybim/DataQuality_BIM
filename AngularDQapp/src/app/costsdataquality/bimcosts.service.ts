import { Injectable } from '@angular/core';
import { Costs } from './costs';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';



@Injectable()
export class BimService {

    //Creating constructor to inject http call over service
    constructor(private _http: Http) { }

    costscompletedetails(): Observable<Costs[]> {
        return this._http.get("http://localhost:51865/api/checkcost/complete")
            .map((response: Response) => <Costs[]>response.json());

    }
    costsincompletedetails(): Observable<Costs[]> {
        return this._http.get("http://localhost:51865/api/checkcost/incomplete")
            .map((response: Response) => <Costs[]>response.json());

    }
    costsvaliddetails(): Observable<Costs[]> {
        return this._http.get("http://localhost:51865/api/checkcost/complete/valid")
            .map((response: Response) => <Costs[]>response.json());

    }
    costsinvaliddetails(): Observable<Costs[]> {
        return this._http.get("http://localhost:51865/api/checkcost/complete/invalid")
            .map((response: Response) => <Costs[]>response.json());

    }
    costsappropriatedetails(): Observable<Costs[]> {
        return this._http.get("http://localhost:51865/api/checkcost/complete/valid/appropriate")
            .map((response: Response) => <Costs[]>response.json());

    }
    costsinappropriatedetails(): Observable<Costs[]> {
        return this._http.get("http://localhost:51865/api/checkcost/complete/valid/inappropriate")
            .map((response: Response) => <Costs[]>response.json());

    }
}

