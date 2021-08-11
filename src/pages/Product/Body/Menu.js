import React from 'react';

import CoffeeMenu from './Menu/CoffeeMenu';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronCircleLeft,
  faChevronCircleRight,
} from '@fortawesome/free-solid-svg-icons';

import './Menu.scss';

class Menu extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  // 캐러셀 기능 구현
  // 1. 이동 조건
  // 버튼 클릭할 때, 횟수 카운트가 올라간다. 카운트에 가로 값을 곱해서 마진left 값을 변경
  // 왼쪽 패딩(25px) + 가로사진 값(157px) = 183px 만큼 좌측으로 이동
  // 방법1 : 왼쪽에 마진 음수 값 적용 margin-left: -183px 적용

  // 2. 기존 위치 조건
  // 갤러리(상위)의 마진레프트가 0일때 > .go-left의 display:none
  // 목데이터 받아오는 값의 this.state.menuList.length * -183 = 슬라이더의 최대거리
  // 왼쪽 버튼 시야: margin-left : 0;
  // 오른쪽 버튼 시야: marginright : this.state.menuList.length * -183

  ClickRight = () => {
    this.setState(zero => ({ count: zero.count + 1 }));
  };

  ClickLeft = () => {
    this.setState(zero => ({ count: zero.count - 1 }));
  };

  render() {
    const { menu, title, type } = this.props;
    let marginLeft = this.state.count * -178;
    let marginRight = this.state.count * -178;
    let rightEnd = menu.length * -178 + 534;
    return (
      <section className="main-mid">
        <div className="mid-container">
          <h2 className="gallery-head">{title}</h2>
          <div
            className="gallery"
            style={{
              marginLeft: `${marginLeft}px`,
              marginRight: `${marginRight}px`,
            }}
          >
            <FontAwesomeIcon
              className="go-css go-left"
              onClick={this.ClickLeft}
              icon={faChevronCircleLeft}
              style={{
                color: '#fafafa',
                display: marginLeft === 0 ? 'none' : 'block',
              }}
            />
            <FontAwesomeIcon
              className="go-css go-right"
              onClick={this.ClickRight}
              icon={faChevronCircleRight}
              style={{
                color: '#fafafa',
                display: marginRight === rightEnd ? 'none' : 'block',
              }}
            />
            {menu.map(menu => (
              <CoffeeMenu menu={menu}>
                {type === 'menu' && (
                  <>
                    <p>{menu.menu_name}</p>
                    <p>{menu.price}</p>
                  </>
                )}
                {type === 'recommend' && (
                  <p className="cafe-center ">{menu.cafe_name}</p>
                )}
              </CoffeeMenu>
            ))}
          </div>
        </div>
      </section>
    );
  }
}

export default Menu;
