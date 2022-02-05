const Flat = ({ id, price, name, priceCurrency, imageUrl, lng, lat, onSelect, selected }) => {
  const handleClick = () => {
    onSelect(id, lng, lat);
  }
  return (
    <div className={selected ? "flat selected" : "flat"} onClick={handleClick} >
      <img alt={name} src={imageUrl} className="flat-picture" />
        <div className="flat-title">
          <strong>{price} {priceCurrency}</strong>/ daily - {name}
        </div>
    </div>
  )
};

export default Flat;
