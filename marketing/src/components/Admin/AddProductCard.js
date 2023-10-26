import React, { useState } from "react";
import Axios from "axios";
import ProductCard from "./ProductCard";

function AddProductCard() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [brand, setBrand] = useState("");
  const [amount, setAmount] = useState(0);
  const [description, setDescription] = useState("");
  const [imagelink, setImagelink] = useState("");
  const [type, setType] = useState("");
  const [departament, setDepartament] = useState('');
  const [year, setYear] = useState('');
  const [prodcondition, setProdcondition] = useState('');

  const [productList, setProductList] = useState([]);

  const addProduct = () => {
    Axios.post("http://localhost:3001/createProduct", {
      name: name,
      price: price,
      brand: brand,
      amount: amount,
      description: description,
      imagelink: imagelink,
      type: type,
      departament: departament,
      year: year,
      prodcondition: prodcondition,
    }).then(() => {
      setProductList([
        ...productList,
        {
          name: name,
          price: price,
          brand: brand,
          amount: amount,
          description: description,
          imagelink: imagelink,
          type: type,
          departament: departament,
          year: year,
          prodcondition: prodcondition,
        },
      ]);
    });
  };

  const getProducts = () => {
    Axios.get("http://localhost:3001/Products").then((response) => {
      setProductList(response.data);
    });
  };

  const deleteProduct = (productID) => {
    Axios.delete(`http://localhost:3001/delete/${productID}`).then(
      (response) => {
        setProductList(
          productList.filter((val) => {
            return val.productID !== productID;
          })
        );
      }
    );
  };

  return (
    <div className="makecard">
      <h1>Add new product</h1>
      <input
        type="text"
        placeholder="Name"
        onChange={(e) => {
          setName(e.target.value);
        }}
      ></input>
      <br />
      <input
        type="number"
        placeholder="Price"
        onChange={(e) => {
          setPrice(e.target.value);
        }}
      ></input>
      <br />
      <input
        type="text"
        placeholder="Brand"
        onChange={(e) => {
          setBrand(e.target.value);
        }}
      ></input>
      <br />
      <input
        type="number"
        placeholder="Amount"
        onChange={(e) => {
          setAmount(e.target.value);
        }}
      ></input>
      <br />
      <select name="departament" placeholder="Departament" onChange={(e) => {setDepartament(e.target.value)}}>
            <option value="Undefined">Undefined Departament</option>
            <option value="Electronics">Electronics</option>
            <option value="Computers">Computers</option>
            <option value="Women's Fashion">Women's Fashion</option>
            <option value="Men's Fashion">Men's Fashion</option>
            <option value="Health and household">Health and household</option>
            <option value="Home and kitchen">Home and kitchen</option>
            <option value="Music">Music</option>
            <option value="Tools">Tools</option>
            <option value="Arts and Crafts">Arts and Crafts</option>
      </select>
      <br />
      <select name="Year" placeholder="Year" onChange={(e) => {setYear(e.target.value)}}>
            <option value="Unknown">Unknown Year</option>
            <option value="2022">2022</option>
            <option value="2021">2021</option>
            <option value="2020">2020</option>
            <option value="2019">2019</option>
            <option value="2018">2018</option>
            <option value="2017">2017</option>
            <option value="2016">2016</option>
            <option value="2015">2015</option>
            <option value="2014">2014</option>
            <option value="2013">2013</option>
            <option value="2012">2012</option>
            <option value="2011">2011</option>
            <option value="2010">2010</option>
            <option value="2009">2009</option>
            <option value="2008">2008</option>
            <option value="2007">2007</option>
            <option value="2006">2006</option>
            <option value="2005">2005</option>
            <option value="2004">2004</option>
            <option value="2003">2003</option>
            <option value="2002">2002</option>
      </select>
      <br />
      <select name="condition" placeholder="condition" onChange={(e) => {setProdcondition(e.target.value)}}>
            <option value="Undefined">Undefined Condition</option>
            <option value="New">New</option>
            <option value="Used">Used</option>
      </select>
      <br />
      {/* <input
        type="text"
        placeholder="Description"
        className="description"
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      ></input> */}
      <textarea
        placeholder="Description"
        className="description"
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      ></textarea>
      <br />
      <input
        type="text"
        placeholder="Image Link"
        onChange={(e) => {
          setImagelink(e.target.value);
        }}
      ></input>
      <br />
      <input
        type="text"
        placeholder="type"
        onChange={(e) => {
          setType(e.target.value);
        }}
      ></input>
      <br />
      {/* <div id="colorPcik">
        <select style={{width: "172px"}}>
        <option value='blue'>Blue</option>
        <option value='green'>Green</option>
        <option value='red'>Red</option>
        <option value='yellow'>Yellow</option>
        <option value='' selected>Select a Color</option>
        </select>
    </div> */}
      <br />
      <button className="AddProductButton" onClick={addProduct}>
        Add Product
      </button>
      <br />
      <br />
      <button className="ShowProducts" onClick={getProducts}>
        Show Products
      </button>

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
            <button
              className="deletebutton"
              onClick={() => {
                deleteProduct(val.productID);
              }}
            >
              Delete
            </button>
          </form>
        );
      })}
    </div>
  );
}

export default AddProductCard;
