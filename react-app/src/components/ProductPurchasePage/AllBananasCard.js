const AllBananasCard = ({ item }) => {
  console.log(item)

  return (
    <div className='all-bananas-card'>
      <h1>{item.name}</h1>
      <h3>{item.description}</h3>
      <img className='all-display-image' src={item.images[0].image_url}></img>
    </div>
  )
}

export default AllBananasCard
