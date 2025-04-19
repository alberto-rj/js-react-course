import { Theme, ThemeProvider, useTheme } from './context';

function ParentComponent() {
  return (
    <ThemeProvider>
      <Component />
    </ThemeProvider>
  );
}

function Component() {
  const state = useTheme();
  console.log(state);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    state.setTheme(e.target.value as Theme);
  };

  return (
    <div>
      <h2>React & Typescript</h2>
      <div>
        <label
          htmlFor='theme'
          className='form-label'
        >
          Theme
        </label>
        <br />
        <select
          id='theme'
          onChange={handleChange}
          value={state.theme}
          className='form-input'
        >
          <option value='dark'>Dark</option>
          <option value='light'>Light</option>
          <option value='system'>System</option>
        </select>
      </div>
    </div>
  );
}

export default ParentComponent;
