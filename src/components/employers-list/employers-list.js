import EmployerListItem from '../employers-list-item/employers-list-item';
import './employers-list.css';

const EmployersList = ({ data }) => {
  const elements = data.map((item) => {
    const { id, ...propsItem } = item;
    return <EmployerListItem key={id} {...propsItem} />;
  });

  return <ul className="app-list list-group">{elements}</ul>;
};

export default EmployersList;
