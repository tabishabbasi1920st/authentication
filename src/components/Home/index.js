import {Link} from 'react-router-dom'
import {Component} from 'react'
import './index.css'

class Home extends Component {
  render() {
    return (
      <div className="home-page-bg-container">
        {/* header */}
        <div className="header">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="website logo"
            className="main-header-image"
          />

          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
            alt="nav logout"
            className="logout-logo"
          />
        </div>

        {/* header second */}

        <div className="large-header-main-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="website logo"
            className="main-header-image"
          />

          <ul className="nav-icon-container">
            <Link className="link" to="/">
              <li>Home</li>
            </Link>
            <Link className="link" to="/product">
              <li>Products</li>
            </Link>
            <Link className="link" to="/cart">
              <li>Cart</li>
            </Link>
            <button className="logout-button" type="button">
              Logout
            </button>
          </ul>
        </div>

        <nav className="home-nav-bar">
          <Link to="/">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
              alt="nav home"
              className="nav-icon"
            />
          </Link>
          <Link to="/product">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
              alt="nav product"
              className="nav-icon"
            />
          </Link>
          <Link to="/cart">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
              alt="nav cart"
              className="nav-icon"
            />
          </Link>
        </nav>

        <div className="body">
          <h1 className="cloth-heading">Clothes That Get YOU Noticed</h1>
          <div className="cloth-person-img-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
              alt="clothes that get you noticed"
              className="cloth-person-img"
            />
          </div>
          <p className="content-para">
            Fashion is part of the daily air and it does not quite help that it
            changes all the time. Clothes have always been a marker of the era
            and we are in a revolution. Your fashion makes you been seen and
            heeard that way you are. So, celebrate the seasons new and exciting
            fashion in your own way.
          </p>
          <div className="shop-now-button-container">
            <button className="shop-now-button" type="button">
              Shop Now
            </button>
          </div>
        </div>

        <div className="second-body">
          <div className="content-container">
            <h1 className="cloth-heading">Clothes That Get YOU Noticed</h1>
            <p className="content-para">
              Fashion is part of the daily air and it does not quite help that
              it changes all the time. Clothes have always been a marker of the
              era and we are in a revolution. Your fashion makes you been seen
              and heard that way you are. So, celebrate the seasons new and
              exciting fashion in your own way.
            </p>
            <div className="shop-now-button-container">
              <button className="shop-now-button" type="button">
                Shop Now
              </button>
            </div>
          </div>
          <div className="image-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
              alt="clothes that get you noticed"
              className="second-body-cloth-person-img"
            />
          </div>
        </div>
      </div>
    )
  }
}

export default Home
