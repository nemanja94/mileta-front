import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

import { Thing } from '../models/Thing.model';

@Injectable({
	providedIn: 'root'
})
export class StuffService {

	constructor(private _http: HttpClient) { }

	getStuff(): Observable<Thing[]> {
		return this._http.get('https://mileta-back.azurewebsites.net/api/stuff').pipe(map((res: Thing[]) => {
			return res;
		}));
	}

	getOne(id: string): Observable<Thing> {
		return this._http.get('https://mileta-back.azurewebsites.net/api/stuff/' + id).pipe(map((res: Thing) => {
			return res;
		}));
	}

	getGranit(): Observable<Thing[]> {
		return this._http.get('https://mileta-back.azurewebsites.net/api/stuff/granit').pipe(map((res: Thing[]) => {
			return res;
		}));
	}

	getMermer(): Observable<Thing[]> {
		return this._http.get('https://mileta-back.azurewebsites.net/api/stuff/mermer').pipe(map((res: Thing[]) => {
			return res;
		}));
	}
}