import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import Appfilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

function App() {
  const data = [
    {name:'Baranova S.', salary: 3000, increase: false, id: 1},
    {name:'Lazovskii G.', salary: 2500, increase: true, id: 2},
    {name:'Lozovskii A.', salary: 5000, increase: false, id: 3},
  ];
  return (
    <div className='app'>
      <AppInfo/>

      <div className="search-panel">
        <SearchPanel/>
        <Appfilter/>
      </div>

      <EmployeesList data={data}/>
      <EmployeesAddForm/>
    </div>
  );
}

export default App;