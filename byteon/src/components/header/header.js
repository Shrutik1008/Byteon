import React, { useEffect } from 'react';
import '../header/header.css';
import Logo from '../../assets/images/Logo.png';
import SearchIcon from '@mui/icons-material/Search';
import Select from  '../SelectDrop/select';
import axios from 'axios';

const Header =()=> {


    const countryList=[];

    useEffect(()=>{
        getcountry('https://countriesnow.space/api/v0.1/countries/');
    },[]);

    const getcountry=async(url)=>{
        try {
        await axios.get(url).then((res) => {
            if (res !== null) {
            //console.log(res.data.data);
           res.data.data.map((item,index)=>{
            countryList.push(item.country);
            console.log(item.countryList);
           })
            }
        });
        } catch (error) {
        console.log(error.message);
        }

    }


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
                                <div className='seletDrop curso position-relative'>
                                    All Categories
                                    <select/>
                                </div>

                                <div className='search'>
                                    <input type ='text' placeholder= "Search for products..." />  
                                    <div className='SearchIcon'>
                                        <SearchIcon style={{fontSize:40,color:'#896605'}}/>  
                                    </div>                                  
                                </div>

                              </div>
                        </div>


                        <div className='col-sm-5'>
                            <Select data={countryList}/>
                        </div>
                 </div>
         </div>
                  
</header>
        </>
    )
}


export default Header;