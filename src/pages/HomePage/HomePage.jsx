import css from './HomePage.module.css';

const HomePage = () => {
  return (
    <div className={css.container}>
      <h1 className={css.title}>Welcome to Home page!</h1>
      <p className={css.text}>Add your contacts to the Phonebook.</p>
    </div>
  );
};

export default HomePage;
