import React from 'react';
import './MainFooter.css';

function MainFooter(props) {
    return (
        <footer class="footer-startup footer-light background-position-right background-no-repeat" >
        <div class="footer-separate">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12 h-65px lg-h-30px background-position-center-top background-no-repeat">
                    </div>
                </div>
            </div>
        </div>
        <div class="footer-top padding-four-tb lg-padding-seven-tb md-padding-50px-bottom md-padding-30px-top">
            <div class="container">
                <div class="row">
                    
                    <div class="col-12 col-md-3 col-sm-6 sm-margin-40px-bottom xs-margin-25px-bottom">
                        <span class="alt-font font-weight-500 d-block text-extra-dark-gray text-medium margin-20px-bottom xs-margin-10px-bottom">Company</span>
                        <ul>
                            <li className="estilof"><a>About company</a></li>
                            <li className="estilof"><a>Our services</a></li>
                            <li className="estilof"><a >Job opportunities</a></li>
                            <li className="estilof"><a >Contact us</a></li>
                        </ul>
                    </div>
                   
                    <div class="col-12 col-md-3 col-sm-6 sm-margin-40px-bottom xs-margin-25px-bottom">
                        <span class="alt-font font-weight-500 d-block text-extra-dark-gray text-medium margin-20px-bottom xs-margin-10px-bottom">Customer</span>
                        <ul>                           
                            <li className="estilof"><a >Client support</a></li>
                            <li className="estilof"><a >Pricing packages</a></li>
                            <li className="estilof"><a >Company story</a></li>
                            <li className="estilof"><a >Latest news</a></li>
                        </ul>
                    </div>
                  
                    <div class="col-12 col-md-3 col-sm-6 xs-margin-25px-bottom">
                        <span class="alt-font font-weight-500 d-block text-extra-dark-gray text-medium margin-20px-bottom xs-margin-10px-bottom">Resources</span>
                        <ul>                           
                            <li className="estilof"><a >Theme guide</a></li>
                            <li className="estilof"><a >Support desk</a></li>
                            <li className="estilof"><a >What we offer</a></li>
                            <li className="estilof"><a >Company history</a></li>
                        </ul>
                    </div>
                    
                    <div class="col-12 col-md-3 col-sm-6">
                        <span class="alt-font font-weight-500 d-block text-extra-dark-gray text-medium margin-20px-bottom xs-margin-10px-bottom">Services</span>
                        <ul>
                            <li className="estilof"><a >Brand experience</a></li>
                            <li className="estilof"><a >E-commerce website</a></li>
                            <li className="estilof"><a >Content writing</a></li>
                            <li className="estilof"><a >Marketing strategy</a></li>
                        </ul>
                    </div>
                   
                </div>
            </div>
        </div>
        <div class="footer-bottom padding-one-top padding-six-bottom">
            <div class="container"> 
                <div class="row align-items-center">
                    <div class="col-12 col-sm-4 text-center text-sm-left xs-margin-20px-bottom">
                        <a href="index.html" class="footer-logo"><img src="images/logo-green-dark.png" data-at2x="images/logo-green-dark@2x.png" alt=""/></a>
                    </div>
                    <div class="col-12 col-sm-8 text-center text-sm-right last-paragraph-no-margin">
                        <p>&copy; 2021 Litho is Proudly Powered by <a href="" target="_blank" class="text-decoration-line-bottom text-extra-dark-gray font-weight-500">Ronald Postillos</a></p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    );
}

export default MainFooter;