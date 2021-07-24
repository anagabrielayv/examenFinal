import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons';
import './MainBar.css';

function MainBar(props) {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-transparent header-light fixed-top navbar-boxed header-reverse-scroll">
      <div className="container-fluid nav-header-container">
          <div className="col-auto col-sm-6 col-lg-2 mr-auto pl-lg-0">
          <a className="navbar-brand" href="/">LITHO</a>
          </div>
          <div className="col-auto col-lg-8 menu-order px-lg-0">
              <button className="navbar-toggler float-right" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-label="Toggle navigation">
                  <span className="navbar-toggler-line"></span>
                  <span className="navbar-toggler-line"></span>
                  <span className="navbar-toggler-line"></span>
                  <span className="navbar-toggler-line"></span>
              </button>
              <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                  <ul className="navbar-nav alt-font">
                      <li className="nav-item dropdown megamenu">
                          
                          <a ><Link className="nav-link" to="/menuinteractivo">Menu interactivo</Link></a>
                         
                          <div className="menu-back-div dropdown-menu megamenu-content" role="menu">
                              <div className="d-lg-flex justify-content-center">
                                  
                             
                              </div>
                          </div>
                      </li>
                      <li className="nav-item dropdown simple-dropdown">
                         
                          <a ><Link className="nav-link" to="/fichas">Fichas</Link></a>
                        
                          </li>
                      <li className="nav-item dropdown simple-dropdown">
                          <a href="#" className="nav-link">Portfolio</a>
                         
                          <ul className="dropdown-menu" role="menu">
                              <li className="dropdown">
                                  <a data-toggle="dropdown" href="javascript:void(0);">Portfolio classNameic<i className="fas fa-angle-right dropdown-toggle"></i></a>
                                  <ul className="dropdown-menu">
                                      <li><a href="portfolio-classNameic-two-column.html">classNameic 2 column</a></li>
                                      <li><a href="portfolio-classNameic-three-column.html">classNameic 3 column</a></li>
                                      <li><a href="portfolio-classNameic-four-column.html">classNameic 4 column</a></li>
                                      <li><a href="portfolio-classNameic-masonry.html">classNameic masonry</a></li>
                                      <li><a href="portfolio-classNameic-metro.html">classNameic metro</a></li>
                                  </ul>
                              </li>
                             

                      
                          </ul>
                      </li>
                      <li className="nav-item dropdown megamenu">
                          <a href="javascript:void(0);" className="nav-link">Elements</a>
                         
                          <div className="menu-back-div dropdown-menu megamenu-content" role="menu">
                        
                          </div>
                      </li>
                      <li className="nav-item dropdown simple-dropdown">
                          <a href="#" className="nav-link">Features</a>
                         
                          <ul className="dropdown-menu" role="menu">
                              <li className="dropdown">
                                  <a data-toggle="dropdown" href="javascript:void(0);">Header and menu<i className="fas fa-angle-right dropdown-toggle"></i></a>
                                  </li>
                             
                           
                              <li className="dropdown">
                                  <a href="animations.html">Animations</a>
                              </li>
                          </ul>
                      </li>
                      <li className="nav-item dropdown simple-dropdown">
                          <a href="#" className="nav-link">Blog</a>
                          
                 </li>
                      <li className="nav-item dropdown megamenu">
                          <a href="javascript:void(0);" className="nav-link">Shop</a>
                          
                          <div className="menu-back-div dropdown-menu megamenu-content" role="menu">
                              <div className="d-lg-flex justify-content-center">
                                  <ul className="d-lg-inline-block md-margin-15px-bottom">
                                      <li className="dropdown-header">Shop layout</li>
                                      <li><a href="shop-wide.html">Shop wide</a></li>
                                      <li><a href="shop-left-sidebar.html">Left sidebar</a></li>
                                      <li><a href="shop-right-sidebar.html">Right sidebar</a></li>
                                      <li><a href="shop-only-categories.html">Only categories</a></li>
                                      <li><a href="single-product.html">Single product</a></li>
                                      <li className="dropdown-header">Utility pages</li>
                                      <li><a href="shopping-cart.html">Shopping cart</a></li>
                                      <li><a href="checkout.html">Checkout</a></li>
                                      <li><a href="login-register.html">Login / Register</a></li>
                                  </ul>
                                  <ul className="d-lg-inline-block d-none small-gap">
                                      <li>
                                          <a href="index.html" className="menu-banner-image"><img src="images/menu-banner-01.jpg" alt=""/></a>
                                      </li>
                                  </ul>
                                  <ul className="d-lg-inline-block d-none no-padding-right">
                                      <li>
                                          <a href="index.html" className="menu-banner-image"><img src="images/menu-banner-02.jpg" alt=""/></a>
                                      </li>
                                  </ul>
                              </div>
                          </div>
                      </li>
                  </ul>
              </div>
          </div>
          <div className="col-auto col-lg-2 text-right pr-0 font-size-0">
              <div className="header-search-icon search-form-wrapper">
                  <a href="javascript:void(0)" className="search-form-icon header-search-form"><i className="feather icon-feather-search"></i></a>
                  
                 
                  
              </div>
              <div className="header-push-button d-none d-lg-inline-block hidden-xs">
                  <a href="javascript:void(0);" className="push-button">
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                  </a>
              </div>
          </div>
      </div>
     
  </nav>



    );
}

export default MainBar;