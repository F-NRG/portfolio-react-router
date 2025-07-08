import { Link } from 'react-router';
import imageUrlBuilder from '@sanity/image-url';
import type { SanityDocument } from '@sanity/client';
import type { SanityImageSource } from '@sanity/image-url/lib/types/types';
import { PortableText } from '@portabletext/react';

import { client } from '../sanity/client';
import type { Route } from './+types/work-experience';

const { projectId, dataset } = client.config();
const urlFor = (source: SanityImageSource) => (projectId && dataset ? imageUrlBuilder({ projectId, dataset }).image(source) : null);

const POST_QUERY = `*[_type == "workExperience" && slug.current == $slug][0]`;

export async function loader({ params }: Route.LoaderArgs) {
  return { workExperienceItem: await client.fetch<SanityDocument>(POST_QUERY, params) };
}

export default function Component({ loaderData }: Route.ComponentProps) {
  const { workExperienceItem } = loaderData;
  const workExperienceItemImageUrl = workExperienceItem.image ? urlFor(workExperienceItem.image)?.width(550).height(310).url() : null;

  return (
    <main className="container mx-auto min-h-screen max-w-3xl p-8 flex flex-col gap-4">
      <Link
        to="/"
        className="hover:underline"
      >
        ← Back to workExperienceItems
      </Link>
      {workExperienceItemImageUrl && (
        <img
          src={workExperienceItemImageUrl}
          alt={workExperienceItem.title}
          className="aspect-video rounded-xl"
          width="550"
          height="310"
        />
      )}
      <h1 className="text-4xl font-bold mb-8">{workExperienceItem.title}</h1>
      <div className="prose">
        <p>Published: {new Date(workExperienceItem.startDate).toLocaleDateString()}</p>
        {Array.isArray(workExperienceItem.body) && <PortableText value={workExperienceItem.body} />}
      </div>
    </main>
  );
}
