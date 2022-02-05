const Flat = ({price, name, priceCurrency, imageUrl}) => {

  return (
    <div className="flat" >
      <img alt={name} src={imageUrl} className="flat-picture" />
        <div className="flat-title">
          <strong>{price} {priceCurrency}</strong>/ daily - {name}
        </div>
    </div>
  )
};

export default Flat;
