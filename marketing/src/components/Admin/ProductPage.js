import React, { useState } from "react";
import ProductCard from "./ProductCard";
import Axios from "axios";
import './ProductPage.css';




function ProductPage() {
  const [productList, setProductList] = useState([]);
  const [sortProduct, setSortProduct] = useState('');
  const [departament, setDepartament] = useState('');
  const [year, setYear] = useState('');
  

  const getProducts = () => {
    Axios.get("http://localhost:3001/Products").then((response) => {
      setProductList(response.data);
    });
  };
  const sortProducts = () => {
    Axios.post("http://localhost:3001/ProductsSorted", {
        sort: sortProduct,
    }).then((response) => {
      setProductList(response.data);
    })
  };
  const filterProducts = () => {
    Axios.post("http://localhost:3001/ProductsFiltered", {
      departament: departament,
    }).then((response) => {
      setProductList(response.data);
    })
  };

  const filterYear = () => {
    Axios.post("http://localhost:3001/YearFiltered", {
      year: year,
    }).then((response) => {
      setProductList(response.data);
    })
  };

  const filterBoth = () => {
    Axios.post("http://localhost:3001/bothFiltered", {
      departament: departament,
      year: year,
    }).then((response) => {
      setProductList(response.data);
    })
  };


  return (
    <div className="ppage" >
        <br />
        <br />
        <br />
        <div className="container"> 
        <div className="optionss">
        <button className="reset" onClick={getProducts}>RESET FILTER</button>
        <br />
        <select className="sort" onChange={(e) => {setSortProduct(e.target.value); sortProducts();}}>
            <option className='option' value="ASC">DESC</option>
            <option className='option' value="DESC">ASC</option>
        </select>
        </div>
        <div className="departament">
        <div className="dropdown">
        <button className="dropbtn">Filter by departament</button>
        <div className="dropdown-content">
        <div className="filter">
        <input type='radio' id='undefined' value='Undefined' name='departament' onChange={(e) => {setDepartament(e.target.value)}}></input>
        <label for='undefined'>Undefined</label>
        <input type='radio' id='Electronics' value='Electronics' name='departament' onChange={(e) => {setDepartament(e.target.value)}}></input>
        <label for='Electronics'>Electronics</label>
        <input type='radio' id='Computers' value='Computers' name='departament' onChange={(e) => {setDepartament(e.target.value)}}></input>
        <label for='Computers'>Computers</label>
        <input type='radio' id="Women's Fashion" value="Women's Fashion" name='departament' onChange={(e) => {setDepartament(e.target.value)}}></input>
        <label for="Women's Fashion">Women's Fashion</label>
        <input type='radio' id="Men's Fashion" value="Men's Fashion" name='departament' onChange={(e) => {setDepartament(e.target.value)}}></input>
        <label for="Men's Fashion">Men's Fashion</label>
        <input type='radio' id='Health and household' value='Health and household' name='departament' onChange={(e) => {setDepartament(e.target.value)}}></input>
        <label for='Health and household'>Health and household</label>
        <input type='radio' id='Home and kitchen' value='Home and kitchen' name='departament' onChange={(e) => {setDepartament(e.target.value)}}></input>
        <label for='Home and kitchen'>Home and kitchen</label>
        <input type='radio' id='Music' value='Music' name='departament' onChange={(e) => {setDepartament(e.target.value)}}></input>
        <label for='Music'>Music</label>
        <input type='radio' id='Tools' value='Tools' name='departament' onChange={(e) => {setDepartament(e.target.value)}}></input>
        <label for='Tools'>Tools</label>
        <input type='radio' id='Arts and Crafts' value='Arts and Crafts' name='departament' onChange={(e) => {setDepartament(e.target.value)}}></input>
        <label for='Arts and Crafts'>Arts and Crafts</label>
        </div>
        <button className='reset' onClick={filterProducts}>Search only by this filter</button>
        </div>  
        </div>
        </div>
        <br />
        <div className="departament">
        <div className="dropdown">
        <button className="dropbtn">Filter by year</button>
        <div className="dropdown-content">
        <div className="filter">
        <input type='radio' id='Unknown' value='Unknown' name='year' onChange={(e) => {setYear(e.target.value)}}></input>
        <label for='Unknown'>Unknown year</label>
        <input type='radio' id='2022' value='2022' name='year' onChange={(e) => {setYear(e.target.value)}}></input>
        <label for='2022'>2022</label>
        <input type='radio' id='2021' value='2021' name='year' onChange={(e) => {setYear(e.target.value)}}></input>
        <label for='2021'>2021</label>
        <input type='radio' id="2020" value="2020" name='year' onChange={(e) => {setYear(e.target.value)}}></input>
        <label for="2020">2020</label>
        <input type='radio' id="2019" value="2019" name='year' onChange={(e) => {setYear(e.target.value)}}></input>
        <label for="2019">2019</label>
        <input type='radio' id='2018' value='2018' name='year' onChange={(e) => {setYear(e.target.value)}}></input>
        <label for='2018'>2018</label>
        <input type='radio' id='2017' value='2017' name='year' onChange={(e) => {setYear(e.target.value)}}></input>
        <label for='2017'>2017</label>
        <input type='radio' id='2016' value='2016' name='year' onChange={(e) => {setYear(e.target.value)}}></input>
        <label for='2016'>2016</label>
        <input type='radio' id='2015' value='2015' name='year' onChange={(e) => {setYear(e.target.value)}}></input>
        <label for='2015'>2015</label>
        <input type='radio' id='2014' value='2014' name='year' onChange={(e) => {setYear(e.target.value)}}></input>
        <label for='2014'>2014</label>
        <input type='radio' id='2013' value='2013' name='year' onChange={(e) => {setYear(e.target.value)}}></input>
        <label for='2013'>2013</label>
        <input type='radio' id='2012' value='2012' name='year' onChange={(e) => {setYear(e.target.value)}}></input>
        <label for='2012'>2012</label>
        <input type='radio' id='2011' value='2011' name='year' onChange={(e) => {setYear(e.target.value)}}></input>
        <label for='2011'>2011</label>
        <input type='radio' id='2010' value='2010' name='year' onChange={(e) => {setYear(e.target.value)}}></input>
        <label for='2010'>2010</label>
        <input type='radio' id='2009' value='2009' name='year' onChange={(e) => {setYear(e.target.value)}}></input>
        <label for='2009'>2009</label>
        <input type='radio' id='2008' value='2008' name='year' onChange={(e) => {setYear(e.target.value)}}></input>
        <label for='2008'>2008</label>
        <input type='radio' id='2007' value='2007' name='year' onChange={(e) => {setYear(e.target.value)}}></input>
        <label for='2007'>2007</label>
        <input type='radio' id='2006' value='2006' name='year' onChange={(e) => {setYear(e.target.value)}}></input>
        <label for='2006'>2006</label>
        <input type='radio' id='2005' value='2005' name='year' onChange={(e) => {setYear(e.target.value)}}></input>
        <label for='2005'>2005</label>
        <input type='radio' id='2004' value='2004' name='year' onChange={(e) => {setYear(e.target.value)}}></input>
        <label for='2004'>2004</label>
        <input type='radio' id='2003' value='2003' name='year' onChange={(e) => {setYear(e.target.value)}}></input>
        <label for='2003'>2003</label>
        <input type='radio' id='2002' value='2002' name='year' onChange={(e) => {setYear(e.target.value)}}></input>
        <label for='2002'>2002</label>

        </div>
        <button className='reset' onClick={filterYear}>Search only by this filter</button>
        </div>  
        </div>
        </div>
        <br />
        <div className="optionss">
        <button className='reset' onClick={filterBoth}>Search with both filters</button>
        </div>
      {productList.map((val, key) => {
          return (
            <form className="product">
            <ProductCard
              name={val.name}
              description={val.description}
              price={val.price}
              imagelink={val.imagelink}
              brand={val.brand}
              amount={val.amount}
              type={val.type}
              departament={val.departament}
              year={val.year}
              prodcondition={val.prodcondition}
              />
          </form>
        );
    })}
    </div>
    </div>
  );
}

export default ProductPage;
