import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { StuffService } from '../../services/stuff.service';
import { Thing } from '../../models/Thing.model';

@Component({
	selector: 'app-home-page',
	templateUrl: './home-page.component.html',
	styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

	public stuff: Thing[] = [];
	public tip: string = "svi";

	constructor(private _router: Router, private _stuffService: StuffService) { }

	ngOnInit() {
		this._stuffService.getStuff().subscribe(
			(stuff) => {
				this.stuff = stuff;
			});
	}
}
