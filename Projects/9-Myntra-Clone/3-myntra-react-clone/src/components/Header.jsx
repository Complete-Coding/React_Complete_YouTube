import React, { useState } from 'react';
import { IoPerson } from "react-icons/io5";
import { GoHeartFill } from "react-icons/go";
import { FaCartPlus } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { IoIosSearch } from "react-icons/io";
import { TfiFaceSad } from "react-icons/tfi";
import WelcomeCard from './profile';

const Header = () => {
  const bag = useSelector(store => store.bag);
  const items = useSelector(store => store.items);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredItems, setFilteredItems] = useState([]);

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    const results = items.filter(item =>
      item.item_name.toLowerCase().includes(query)
    );
    setFilteredItems(results);
  };

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <header>
      <div className="logo_container">
        <Link to="/"><img className="myntra_home" src="images/myntra_logo.webp" alt="Myntra Home" /></Link>
      </div>
      <nav className="nav_bar">
        <Link to="/">ALL</Link>
        <Link to="/men">Men</Link>
        <Link to="/women">Women</Link>
        <Link to="/kids">Kids</Link>
        <Link to="/home&Living">Home & Living</Link>
        <Link to="/electronics">Electronic<sup>New</sup></Link>
      </nav>
      <div className="search_bar">
        <span className="material-symbols-outlined search_icon"><IoIosSearch size={27} /></span>
        <input
          className="search_input"
          placeholder="Search for products, brands and more"
          value={searchQuery}
          onChange={handleSearch}
        />
        {searchQuery && (
          <div className="search_results">
            {filteredItems.length > 0 ? (
              filteredItems.map(item => (
                <div key={item.id} className="search_item">
                  <img src={item.image} alt={item.item_name} width="50" height="60" />
                  <span>
                    <p>{item.item_name}</p>
                  </span>
                </div>
              ))
            ) : (
              <p> <TfiFaceSad /> No results found</p>
            )}
          </div>
        )}
      </div>
      <div className="action_bar">
        <div
          className="action_container"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{ position: 'relative' }}  // Ensures WelcomeCard is positioned relative to this div
        >
          <IoPerson />
          <span className="action_name">Profile</span>
          {isHovered && (
            <div style={styles.welcomeCardContainer}>
              <WelcomeCard />
            </div>
          )}
        </div>

        <div className="action_container">
          <GoHeartFill />
          <span className="action_name">Wishlist</span>
        </div>

        <Link className="action_container" to="/bag">
          <FaCartPlus />
          <span className="action_name">Bag</span>
          <span className="bag-item-count">{bag.length}</span>
        </Link>
      </div>
    </header>
  );
};

const styles = {
  welcomeCardContainer: {
    position: 'absolute',
    top: '100%', // Positions the card directly below the profile icon
    left: '-10',
    zIndex: '1000',
  }
};

export default Header;
