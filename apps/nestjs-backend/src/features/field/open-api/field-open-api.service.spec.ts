import type { TestingModule } from '@nestjs/testing';
import { Test } from '@nestjs/testing';
import { FieldOpenApiService } from './field-open-api.service';

describe('FieldOpenApiService', () => {
  let service: FieldOpenApiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FieldOpenApiService],
    }).compile();

    service = module.get<FieldOpenApiService>(FieldOpenApiService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});