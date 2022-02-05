import './FlatMarker.scss'

const FlatMarker = ({price, priceCurrency}) => {
  return (
    <div className='marker'>{price} {priceCurrency}</div>
  )
};

export default FlatMarker;
