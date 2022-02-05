import './FlatMarker.scss'

const FlatMarker = ({price, priceCurrency, selected = false}) => {

  return (
    <div className={selected ? 'marker selected': 'marker'}>{price} {priceCurrency}</div>
  )
};

export default FlatMarker;
