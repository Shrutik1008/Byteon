import React from 'react';
import '../header/header.css';
import Logo from '../../assets/images/Logo.png';


const Header =()=> {
    return(
        <>
         <header>
                  <div className='container-fluid'>
                      <div className='row'>
                         <div className='col-sm-2' >
                          <img src={Logo} height={110} alt='Logo'/>
                        </div>

{/*headerSearch Section*/}
                        <div className='col-sm-5'>
                              <div className='headerSearch d-flex align-items-center'>
                                <div className='seletDrop curso'>
                                    All Categories
                                </div>

                                <div className='search'>
                                    <input type='text' className='form-control' placeholder='Search Products...'/>
                              </div>
                         </div>
                     </div>
                  </div>  
                  </div>
            </header>
        </>
    )
}


export default Header;