import { FlashPost } from '@_src/models/flashpost.model';
import { faker } from '@faker-js/faker';

export function generateFlashPost(): FlashPost {
  return {
    content: faker.lorem.sentences(2),
  };
}
