import { useAppContext } from '../context';

const SearchForm = () => {
  const { setSearch } = useAppContext();

  const handleSubmit = (event) => {
    event.preventDefault();
    const { currentTarget: form } = event;
    const search = form.search.value.trim();

    if (search === '') {
      return;
    }

    setSearch(search);

    form.reset();
  };

  return (
    <section>
      <h1 className='title'>unsplash images</h1>
      <form
        onSubmit={handleSubmit}
        className='search-form'
      >
        <input
          type='text'
          name='search'
          aria-label='Search photos'
          placeholder='Search for anything (eg. animals, places, foods, brands...)'
          className='form-input search-input'
        />
        <button
          type='submit'
          className='btn'
        >
          Search
        </button>
      </form>
    </section>
  );
};

export default SearchForm;
