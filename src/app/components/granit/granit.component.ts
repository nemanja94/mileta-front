import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { StuffService } from '../../services/stuff.service';
import { Thing } from '../../models/Thing.model';

@Component({
	selector: 'app-granit',
	templateUrl: './granit.component.html',
	styleUrls: ['./granit.component.css']
})
export class GranitComponent implements OnInit {

	public stuff: Thing[] = [];

	constructor(private _router: Router, private _stuffService: StuffService) { }

	ngOnInit() {
		this._stuffService.getGranit().subscribe(
			(stuff) => {
				this.stuff = stuff;
			});
	}

}
