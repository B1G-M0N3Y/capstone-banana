const AllBananasCard = ({ item, idx }) => {
  const idCss = `all-bananas-${item.id}`
  let className = ''

  if (idx % 2) {
    className = 'all-bananas-card dark'
  } else {
    className = 'all-bananas-card light'
  }

  return (
    <div className={className}>
      <p>{item.name.toUpperCase()}</p>
      <h3>{item.description}</h3>
      <h4>Purchase now for {item.price}</h4>
      <img
        id={idCss}
        className='all-display-image'
        src={item.images[0].image_url}
        alt={item.name}
        >
      </img>
    </div>
  )
}

export default AllBananasCard
