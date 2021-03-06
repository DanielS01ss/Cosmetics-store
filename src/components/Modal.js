import React, {Component} from 'react';
import styled from 'styled-components';
import {ProductConsumer} from '../context';
import {ButtonContainer} from './Button';
import {Link} from 'react-router-dom';

export default class Modal extends Component{
///aici avem de a face cu conditional Rendering in sensul ca modulul nu apare decat cand
/// openModal este true
  render(){
    return(

      <ProductConsumer>
      {(value)=>{
         const {modalOpen,closeModal} = value;
         const {img,title,price} = value.modalProduct;

         if(!modalOpen)
         {
           return null;
         }
         else{

      return(
        <ModalContainer>
       <div className = "container">
         <div className="row">
         <div id="modal" className="col-8 mx-auto col-md-6 col-lg-4 p-5  text-center text-capitalize">
           <h5>Produsul a fost adaugat in cos!</h5>
           <img src={img} className="img-fluid" alt="product"></img>
           <h5>{title}</h5>
           <h5 className="text-muted">Pret: {price} <sup>00</sup>  Lei</h5>
           <Link to='/'>
           <ButtonContainer onClick={()=>closeModal()}>
            ← Inapoi
           </ButtonContainer>
           </Link>
           <Link to='/cart'>
           <ButtonContainer onClick={()=>closeModal()}>
             Cos 🛒
           </ButtonContainer>
           </Link>
         </div>
         </div>
       </div>
        </ModalContainer>)
        }

      }}
      </ProductConsumer>
    )
  }
}

const ModalContainer = styled.div`
 position:fixed;
 top:0;
 left:0;
 right:0;
 bottom:0;
  background:rgba(0,0,0,0.3);
  display:flex;
  align-items:center;
  justify-content:center;
  #modal{
    background:var(--mainWhite);
  }
`;
