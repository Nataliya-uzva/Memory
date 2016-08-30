/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { ItemService } from './item-service.service';

describe('Service: ItemService', () => {
  beforeEach(() => {
    addProviders([ItemService]);
  });

  it('should ...',
    inject([ItemService],
      (service: ItemService) => {
        expect(service).toBeTruthy();
      }));
});
