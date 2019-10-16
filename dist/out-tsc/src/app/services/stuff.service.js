import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
let StuffService = class StuffService {
    constructor(_http) {
        this._http = _http;
        this.stuff = [];
        this.stuff$ = new Subject();
    }
    getStuff() {
        this._http.get('http://localhost:3000/api/stuff').subscribe((stuff) => {
            if (stuff) {
                this.stuff = stuff;
                this.emitStuff();
            }
        }, (error) => {
            console.log(error);
        });
    }
    emitStuff() {
        this.stuff$.next(this.stuff);
    }
};
StuffService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], StuffService);
export { StuffService };
//# sourceMappingURL=stuff.service.js.map