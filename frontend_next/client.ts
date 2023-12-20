import { createClient, ClientConfig } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url'
import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import { ImageUrlBuilder } from 'sanity'

const clientConfig: ClientConfig = {
  projectId: '9mypfkmd',
  dataset: 'production',
  apiVersion: '2022-02-01',
  useCdn: true,
  token: process.env.NEXT_APP_SANITY_PROJECT_TOKEN,
};

export const client = createClient(clientConfig);

const builder = imageUrlBuilder(client);

export const urlFor = (source: SanityImageSource): ImageUrlBuilder => builder.image(source);
