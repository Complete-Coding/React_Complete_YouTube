
import { useSelector } from 'react-redux'
import HomeItem from './HomeItem';

const ElectronicSection = () => {

  const items = useSelector(Store => Store.items);
  const electronicItem = items.filter((item) => item.section === "electronic");
  return (
    <div className='items-container'>
      {electronicItem.map((item) => <HomeItem item={item} />)}
    </div>
  )
}

export default ElectronicSection