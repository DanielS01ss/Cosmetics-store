import React, {Component} from 'react'
import Product from './Product'
import Title from './Title';
import bg from '../big-wallpaper-2.jpg';
import {storeProducts} from '../Data';
import {ProductConsumer}  from '../context';



export default class ProductList extends Component{
///aici o sa returnam frumos lista cu produsele din magazin


  render(){

     return (

       <React.Fragment>
       <img src={bg} alt="background-image" className="img-fluid" />
         <div className="py-5">
         <div className="container">
         <Title name="Produsele" title="noastre" />
           <div className="row">
              <ProductConsumer>
                {(value)=>{
                return value.products.map(product=>{
                   return <Product key={product.id} product={product} />;
                })
                }}
              </ProductConsumer>
           </div>
         </div>
         </div>
         </React.Fragment>
     );
   }

}
