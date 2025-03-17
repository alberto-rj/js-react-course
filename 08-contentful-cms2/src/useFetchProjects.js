import { useEffect, useState } from 'react';
import { createClient } from 'contentful';

const useFetchProjects = () => {
  const [isPending, setIsPending] = useState();
  const [hasError, setHasError] = useState();
  const [projects, setProjects] = useState();

  const spaceId = import.meta.env.VITE_SPACE_ID;
  const accessToken = import.meta.env.VITE_ACCESS_TOKEN;
  const contentTypeId = 'project';

  const client = createClient({
    space: spaceId,
    environment: 'master',
    accessToken: accessToken,
  });

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setHasError(false);
        setIsPending(true);
        const entries = await client.getEntries(contentTypeId);
        const persistedProjects = entries.items.map(
          ({ fields: { title, url, image }, sys: { id } }) => {
            return { id, title, url, image: image.fields.file.url };
          }
        );
        // console.log(entries);
        // console.log(persistedProjects);
        setProjects(persistedProjects);
      } catch (error) {
        setHasError(true);
        console.error(error);
      } finally {
        setIsPending(false);
      }
    };

    fetchProjects();
  }, []);

  return { isPending, hasError, projects };
};

export default useFetchProjects;
