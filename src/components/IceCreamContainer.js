import React from 'react';
import { connect } from 'react-redux';
import { buyIceCream } from '../redux/iceCream/iceCreamActions';

function IceCreamContainer(props) {
  return (
      <div>
          <h2>No of IceCreams - {props.noOfIceCreams}</h2>
          <button onClick={props.buyIceCream}>Buy IceCream</button>
      </div>
  )
}

const mapStateToProps = state => {
    return{
        noOfIceCreams:state.iceCream.noOfIceCreams
    }
}

const mapdispatchToProps=dispatch=>{
    return{
        buyIceCream:()=>dispatch(buyIceCream())
    }
}
export default connect(mapStateToProps,mapdispatchToProps) (IceCreamContainer)
