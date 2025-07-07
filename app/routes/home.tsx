import type { Route } from './+types/home';
import { Welcome } from '../welcome/welcome';
import type { SanityDocument } from '@sanity/client';
import { client } from '~/sanity/client';

const WORK_EXPERIENCE_QUERY = `*[
  _type == "workExperience"
  && defined(slug.current)
]|order(startDate desc)[0...12]{_id, title, slug, startDate}`;

export function meta({}: Route.MetaArgs) {
  return [{ title: 'Resumé of Jonathan Verstraten' }, { name: 'description', content: 'Resumé of Jonathan Verstraten' }];
}

export async function loader({ context }: Route.LoaderArgs) {
  return {
    message: context.VALUE_FROM_NETLIFY,
    workExperience: await client.fetch<SanityDocument[]>(WORK_EXPERIENCE_QUERY),
  };
}

export default function Home({ loaderData }: Route.ComponentProps) {
  const { workExperience, message } = loaderData;
  console.log('workExperience', workExperience);
  return (
    <Welcome
      message={message}
      workExperience={workExperience}
    />
  );
}
