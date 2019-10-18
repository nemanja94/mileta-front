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

	public thing: Thing = new Thing();
	public tip: string;
	public imageUrl: string;

	constructor(private _activatedRoute: ActivatedRoute, private _stuffService: StuffService) { }

	ngOnInit() {
		const thingId = this._activatedRoute.snapshot.paramMap.get('id');

		this._stuffService.getOne(thingId).subscribe(
			(thing) => {
				this.thing = thing;
				this.tip = thing.tip;
				this.imageUrl = thing.imageUrl;
			});
	}
}
