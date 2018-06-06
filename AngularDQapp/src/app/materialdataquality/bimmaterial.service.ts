import { Injectable } from '@angular/core';
import { Material } from './material';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable()
export class BimService {

    //Creating constructor to inject http call over service
    constructor(private _http: Http) { }

    materialcompletedetails(): Observable<Material[]>
    {
        return this._http.get("http://localhost:51865/api/aom/complete")
            .map((response: Response) => <Material[]>response.json());
    }
    materialincompletedetails(): Observable<Material[]> {
        return this._http.get("http://localhost:51865/api/aom/incomplete")
            .map((response: Response) => <Material[]>response.json());
    }
    materialvaliddetails(): Observable<Material[]> {
        return this._http.get("http://localhost:51865/api/aom/complete/valid")
            .map((response: Response) => <Material[]>response.json());
    }
    materialinvaliddetails(): Observable<Material[]> {
        return this._http.get("http://localhost:51865/api/aom/complete/invalid")
            .map((response: Response) => <Material[]>response.json());
    }
    materialappropriatedetails(): Observable<Material[]> {
        return this._http.get("http://localhost:51865/api/aom/complete/valid/appropriate")
            .map((response: Response) => <Material[]>response.json());
    }
    materialinappropriatedetails(): Observable<Material[]> {
        return this._http.get("http://localhost:51865/api/aom/complete/valid/inappropriate")
            .map((response: Response) => <Material[]>response.json());
    }
}
