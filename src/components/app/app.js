import './app.css';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployersList from '../employers-list/employers-list';
import EmployersAddForm from '../employers-add-form/employers-add-form';

function App() {
  const data = [
    { name: 'Bob', salary: 800, bonus: true, id: 1 },
    { name: 'John', salary: 900, bonus: false, id: 2 },
    { name: 'Alex', salary: 15000, bonus: true, id: 3 },
  ];

  return (
    <div className="app">
      <AppInfo />
      <div className="search-panel">
        <SearchPanel />
        <AppFilter />
      </div>
      <EmployersList data={data} />
      <EmployersAddForm />
    </div>
  );
}

export default App;
