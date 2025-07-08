import type { SanityDocument } from '@sanity/client';
import { Link } from 'react-router';

export function Welcome({ message, workExperience }: { message: string; workExperience: SanityDocument[] }) {
  return (
    <main>
      <div>
        <header>header</header>
        <div>
          <nav>
            <p>What&apos;s next?</p>
            <ul>
              resources
              <li>{message}</li>
            </ul>
          </nav>
          <h1>Work Experience</h1>
          <ul>
            {workExperience.map((item) => (
              <li key={item._id}>
                <Link to={`/${item.slug.current}`}>
                  <h2>{item.title}</h2>
                  <p>{new Date(item.startDate).toLocaleDateString()}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}
