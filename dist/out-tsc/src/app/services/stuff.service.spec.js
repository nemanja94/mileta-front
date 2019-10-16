import { TestBed } from '@angular/core/testing';
import { StuffService } from './stuff.service';
describe('StuffService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));
    it('should be created', () => {
        const service = TestBed.get(StuffService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=stuff.service.spec.js.map