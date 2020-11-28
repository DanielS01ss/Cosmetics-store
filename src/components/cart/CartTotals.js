import React from 'react';
import {Link} from 'react-router-dom';


export default function CartTotals({value}){
  const{cartSubtotal,cartTax,cartTotal,clearCart} = value;

  return (
      <React.Fragment>
      <div className = "container" style={{"height":"100vh"}}>
        <div className="row">
          <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
              <Link to='/'>
                <button className="btn btn-outline-danger mb-3 px-5" type="button" onClick={()=>clearCart()}>Goleste cosul</button>
              </Link>
              <h5>
                <span className="text-title">subtotal:</span>
                <strong>{cartSubtotal}</strong>
              </h5>
              <h5>
                <span className="text-title">taxa:</span>
                <strong>{cartTax}</strong>
              </h5>
              <h5>
                <span className="text-title">total:</span>
                <strong>{cartTotal}</strong>
              </h5>
            <div style={{"margin-top":30}}>
            <Link to='/checkout'>
              <button type="button" class="btn btn-lg btn-warning">Checkout</button>
            </Link>
            </div>
          </div>
        </div>
      </div>
      </React.Fragment>
  );

}
