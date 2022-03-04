import React from 'react';
import { connect } from 'react-redux';
import buyCake from '../redux/cakes/cakeActions';
import { buyIceCream } from '../redux/iceCream/iceCreamActions';

function ItemContainer(props) {
  return (
    <div>
        <h2>Item - {props.item}</h2>
        <button onClick={props.buyItem}>Buy Items </button>
    </div>
  );
}

const mapStateToProps=(state,ownProps)=>{
    const itemState=ownProps.cake?state.cake.noOfCakes:state.iceCream.noOfIceCreams
    return{
        item:itemState
    }
}

const mapdispatchToProps=(dispatch,ownProps)=>{
  const dispatchFunction=ownProps.cake?()=>dispatch(buyCake()):()=>dispatch(buyIceCream())
  return{
    buyItem:dispatchFunction
  }
}
export default connect(mapStateToProps,mapdispatchToProps)(ItemContainer);

