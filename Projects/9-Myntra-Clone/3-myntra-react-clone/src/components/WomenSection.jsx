
import { useSelector } from 'react-redux'
import HomeItem from './HomeItem';

const WomenSection = () => {

  const items = useSelector(Store => Store.items);
  const WomenItem = items.filter((item) => item.section === "women");
  return (
    <div className='items-container'>
      {WomenItem.map((item) => <HomeItem item={item} />)}
    </div>
  )
}

export default WomenSection