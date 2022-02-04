const Flat = ({price, name, img}) => {
  return (
    <div className="flat">
      <img alt={name} src={img} className="flat-picture" />
        <div className="flat-title">
          <strong>${price}</strong>/ daily - {name}
        </div>
    </div>
  )
};

export default Flat;
