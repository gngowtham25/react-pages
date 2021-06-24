import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';

const PDP = (props) => {

  const [product, updateProduct] = useState({})
  const [image, updateImage] = useState("")

  // const { id } = useParams();
  console.log(props)
  const { id } = props.match.params
  const url = "https://5d76bf96515d1a0014085cf9.mockapi.io/product/"


  useEffect(() => {
    axios(`${url}${id}`)
      .then((res) => {
        updateProduct(res.data)
        updateImage(res.data.preview)
      })
      .catch((err) => console.log(err))

  }, [])

  return (
    <>
      <h1>Product Details - {id}</h1>
      <div className="row">
        <div className="col-6">
          <img src={image} style={{ width: "100%", height: "auto" }} />
        </div>
        <div className="col-6">
          <h1>{product.name}</h1>
          <div className="mt-4">
            <h4>{product.brand}</h4>
          </div>
          <div className="mt-4">
          <h4>Price : {product.price}</h4>
          </div>
          
          <div className="mt-4">
          <h4>Description</h4>
          <p>
            {product.description}
          </p>
          </div>

          <div className="mt-4">
          <h4>Product Preview</h4>
          <div className="row">
          {
            product.photos && product.photos.map((each_photo) => {
              return (
                <div className="col-2 m-2" style={{cursor:"pointer"}}>
                  <img src={each_photo} onClick={() => {updateImage(each_photo)}} style={{height:"200px", width:"auto"}}></img>
                </div>
              )
            })
          }
          </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PDP;
