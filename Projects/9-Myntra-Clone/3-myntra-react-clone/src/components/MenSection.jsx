import React from 'react'
import { useSelector } from 'react-redux'
import HomeItem from './HomeItem';

const MenSection = () => {

  const items = useSelector(Store => Store.items);
  const MenItems = items.filter((item) => item.section === "men");
  return (
    <div className='items-container'>
      {MenItems.map((item) => <HomeItem item={item} />)}
    </div>
  )
}

export default MenSection