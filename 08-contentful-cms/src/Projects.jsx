import useFetchProjects from './useFetchProjects';

const Projects = () => {
  const { isPending, hasError, projects } = useFetchProjects();

  if (isPending) {
    return (
      <section className='projects'>
        <div className='title'>
          <h2>projects</h2>
          <div className='title-underline'></div>
        </div>
        <div className='content-center'>
          <div className='loading'></div>
        </div>
      </section>
    );
  }

  if (hasError) {
    return (
      <section className='projects'>
        <div className='title'>
          <h2>projects</h2>
          <div className='title-underline'></div>
        </div>
        <div className='content-center'>
          <p>Something went wrong! Please try again or later.</p>
        </div>
      </section>
    );
  }

  return (
    <section className='projects'>
      <div className='title'>
        <h2>projects</h2>
        <div className='title-underline'></div>
      </div>
      <div className='projects-center'>
        {projects?.map(({ id, title, url, image }) => (
          <a
            key={id}
            href={url}
            target='_blank'
            rel='noreferrer'
            className='project'
          >
            <img
              src={image}
              alt={title}
              className='img'
            />
            <h5>{title}</h5>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;
