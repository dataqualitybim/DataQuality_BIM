import { Injectable } from '@angular/core';
import { Ifc } from './ifc';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable()
export class BimService {

    //Creating constructor to inject http call over service
    constructor(private _http: Http) { }

    ifccompletedetails(): Observable<Ifc[]>
    {
        return this._http.get("http://localhost:51865/api/checkifc/complete")
            .map((response: Response) => <Ifc[]>response.json());
    }

    ifcincompletedetails(): Observable<Ifc[]> {
        return this._http.get("http://localhost:51865/api/checkifc/incomplete")
            .map((response: Response) => <Ifc[]>response.json());
    }

    ifcvalid(): Observable<Ifc[]> {
        return this._http.get("http://localhost:51865/api/checkifc/complete/valid")
            .map((response: Response) => <Ifc[]>response.json());
    }
    ifcinvalid(): Observable<Ifc[]> {
        return this._http.get("http://localhost:51865/api/checkifc/complete/invalid")
            .map((response: Response) => <Ifc[]>response.json());
    }
    ifcappropriate(): Observable<Ifc[]> {
        return this._http.get("http://localhost:51865/api/checkifc/complete/valid/appropriate")
            .map((response: Response) => <Ifc[]>response.json());
    }
    ifcinappropriate(): Observable<Ifc[]> {
        return this._http.get("http://localhost:51865/api/checkifc/complete/valid/inappropriate")
            .map((response: Response) => <Ifc[]>response.json());
    }
}
