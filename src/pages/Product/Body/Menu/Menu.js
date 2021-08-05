import React from 'react';
import CoffeeMenu from './CoffeeMenu/CoffeeMenu';
// import './Body.scss';
// import imgA from '../../../../assets/images/backimg1.jpg';
// import imgB from '../../../../assets/images/backimg2.jpg';
// import imgC from '../../../../assets/images/backimg3.jpg';
// import imgD from '../../../../assets/images/backimg4.jpg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';
// import { faComment } from '@fortawesome/free-solid-svg-icons';
// import { ReactComponent as Star } from '../../../assets/images/star.svg';
// import { ReactComponent as StarOn } from '../../../assets/images/starbrown.svg';

class Menu extends React.Component {
  constructor() {
    super();
    this.state = {
      menuList: [],
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/data/Mockdata.json')
      .then(res => res.json())
      .then(data => {
        this.setState({
          menuList: data.menu,
        });
      });
  }

  render() {
    const { menuList } = this.state;
    return (
      <section className="main-mid">
        <div className="mid-container">
          <h2 className="gallery-head">메뉴</h2>
          <div className="gallery">
            <FontAwesomeIcon
              className="go-left"
              onClick=""
              icon={faChevronCircleLeft}
              style={{ color: '#fafafa' }}
            />
            <FontAwesomeIcon
              className="go-right"
              onClick=""
              icon={faChevronCircleRight}
              style={{ color: '#fafafa' }}
            />
            {menuList.map(menu => (
              <CoffeeMenu
                url={menu.url}
                name={menu.coffeeName}
                price={menu.coffeePrice}
              />
            ))}
          </div>
        </div>
      </section>
    );
  }
}

export default Menu;
