import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { StuffService } from '../../services/stuff.service';
import { Thing } from '../../models/Thing.model';

@Component({
	selector: 'app-detalji',
	templateUrl: './detalji.component.html',
	styleUrls: ['./detalji.component.css']
})
export class DetaljiComponent implements OnInit {

	public stuff: Thing;
	public tip: string;

	constructor(private _activatedRoute: ActivatedRoute, private _stuffService: StuffService) { }

	ngOnInit() {
		this.loadThing();
	}

	loadThing() {
		const thingId = this._activatedRoute.snapshot.paramMap.get('id');

		this._stuffService.getOne(thingId).subscribe(
			(stuff) => {
				this.stuff = stuff;
				this.tip = stuff.tip;
			});
	}

}
