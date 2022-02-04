const Flat = ({price, name, img}) => {
  return (
    <div className="flat">
      <img alt={name} src={img} className="flat-picture" />
        <div className="flat-title">
          ${price}/ daily - {name}
        </div>
    </div>
  )
};

export default Flat;
