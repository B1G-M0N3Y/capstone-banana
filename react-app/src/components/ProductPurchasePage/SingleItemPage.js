import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const SingleItemPage = () => {
  const { itemId } = useParams(':itemId')
  const [item, setItem] = useState({})

  useEffect(() => {
    async function fetchItem() {
      const response = await fetch(`/api/items/${itemId}`)
      const responseData = await response.json()
      setItem(responseData)
    }
    fetchItem()
  }, [])

  return (
    <div>
      <h1>{`Buy ${item.name}`}</h1>
      <div>
        {/* carousel */}
        <div>
          {/* inner */}
          <div>
            {item.images?.map(image => (
              <img src={image.image_url}></img>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SingleItemPage
