import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { StuffService } from '../../services/stuff.service';
import { Thing } from '../../models/Thing.model';

@Component({
	selector: 'app-mermer',
	templateUrl: './mermer.component.html',
	styleUrls: ['./mermer.component.css']
})
export class MermerComponent implements OnInit {

	public stuff: Thing[] = [];

	constructor(private _router: Router, private _stuffService: StuffService) { }

	ngOnInit() {
		this._stuffService.getMermer().subscribe(
			(stuff) => {
				this.stuff = stuff;
			});
	}
}
