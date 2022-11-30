const AllBananasCard = ({ item, idx }) => {
  console.log(item)

  let className = ''

  if(idx % 2){
    className='all-bananas-card dark'
  } else {
    className='all-bananas-card light'
  }

  return (
    <div className={className}>
      <p>{item.name}</p>
      <h3>{item.description}</h3>
      <h4>Purchase now for {item.price}</h4>
      <img className='all-display-image' src={item.images[0].image_url}></img>
    </div>
  )
}

export default AllBananasCard
