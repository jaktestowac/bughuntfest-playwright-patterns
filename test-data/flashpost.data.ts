import { FlashPost } from '@_src/models/flashpost.model';

interface FlashPostTestData {
  testTitle: string;
  flashPost: FlashPost;
}

export const sampleFlashpost: FlashPost = {
  content: 'This is a sample flash post',
};

export const flashPostTestData: FlashPostTestData[] = [
  {
    testTitle: 'Create a flash post',
    flashPost: {
      content: 'This is a flash post',
    },
  },
  {
    testTitle: 'Create a flash post with a long content',
    flashPost: {
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc.',
    },
  },
  {
    testTitle: 'Create a flash post with emojis',
    flashPost: {
      content: '🎉🎉🎉',
    },
  },
  {
    testTitle: 'Create a flash post with special characters',
    flashPost: {
      content: '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~',
    },
  },
];
