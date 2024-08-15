
import { useSelector } from 'react-redux'
import HomeItem from './HomeItem';

const HomeLivingSection = () => {

  const items = useSelector(Store => Store.items);
  const HomeLivingitem = items.filter((item) => item.section === "home");
  return (
    <div className='items-container'>
      {HomeLivingitem.map((item) => <HomeItem item={item} />)}
    </div>
  )
}

export default HomeLivingSection