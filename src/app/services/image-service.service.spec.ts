/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { ImageService } from './image-service.service';

describe('Service: ImageService', () => {
  beforeEach(() => {
    addProviders([ImageService]);
  });

  it('should ...',
    inject([ImageService],
      (service: ImageService) => {
        expect(service).toBeTruthy();
      }));
});
