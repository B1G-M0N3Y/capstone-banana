import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useCart } from "../../context/CartContext"
import AllBananasCard from "./AllBananasCard"
import './AllBananas.css'

const BANANA_ID = 1

const AllItemsPurchasePage = () => {
  const [banana, setBanana] = useState([])
  const [carouselPosition , setCarouselPosition] = useState(1)
  const currentUser = useSelector(state => state.session.user)
  const { cart, setCart } = useCart()

  const updatePosition = (newPos) => {
    // if (newPos < 0) {
    //   newPos = 0
    // } else if (newPos >= images.length) {
    //   newPos = images.length - 1;
    // }

    setCarouselPosition(newPos)
  }


  useEffect(() => {
    async function fetchData() {
      // TODO: CONVERT BACK TO FETCHING SINGLE BANANA
      const apibanana = await fetch(`/api/items`)

      setBanana(await apibanana.json())
    }
    if (localStorage.getItem(currentUser?.email || 'default')) {
      setCart(JSON.parse(localStorage.getItem(currentUser?.email || 'default')))
    }
    fetchData()
  }, []);

  const makeCart = (banan) => {
    let increase = false
    const newCart = []

    for (const item of cart) {
      if (item?.id === banan.id) {
        newCart.push({
          id: item.id,
          quantity: ++item.quantity
        })
        increase = true
      } else {
        newCart.push(item)
      }
    }

    if (!increase) {
      return [...newCart, banan]
    }
    return newCart
  }

  const addToCart = (banan) => {
    const cartItem = {
      id: banan.id,
      quantity: 1
    }

    const newCart = makeCart(cartItem)
    setCart(newCart)

    if (currentUser) localStorage.setItem(currentUser.email, JSON.stringify(cart));
    else localStorage.setItem('default', JSON.stringify(cart))
  }

  if (banana) {

    return (
      <div>
        Buy my banana
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className="all-bananas-container">
          <div className="all-bananas-inner" style={{ transform: `translateX(-${carouselPosition * 100}%)`}}>
            {banana?.map((bana, i) => (
              <>
                <AllBananasCard item={bana} idx={i} />
              </>
            ))}
          </div>
        </div>
      </div>
    )
  } return null
}


export default AllItemsPurchasePage
