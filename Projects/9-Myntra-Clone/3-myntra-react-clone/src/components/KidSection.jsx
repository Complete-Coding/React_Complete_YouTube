import React from 'react'
import { useSelector } from 'react-redux'
import HomeItem from './HomeItem';

const KidSection = () => {
  const items = useSelector(Store => Store.items);
  const KidItems = items.filter((item) => item.section === "kids");
  return (
    <div className='items-container'>
      {KidItems.map((item) => <HomeItem item={item} />)}
    </div>
  )
}

export default KidSection