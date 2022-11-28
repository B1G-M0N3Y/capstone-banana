import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useCart } from "../../context/CartContext"


const BANANA_ID = 1

const BananaPurchasePage = () => {
  const [banana, setBanana] = useState([])
  const currentUser = useSelector(state => state.session.user)
  const { cart, setCart } = useCart()

  useEffect(() => {
    async function fetchData() {
      // TODO: CONVERT BACK TO FETCHING SINGLE BANANA
      const apibanana = await fetch(`/api/items`)

      setBanana(await apibanana.json())
    }
    // if(localStorage.getItem(currentUser?.email || 'default')){
    //   setCart(localStorage.getItem(currentUser?.email || 'default'))
    // }
    fetchData()
  }, []);

  const makeCart = (banan) => {
    let increase = false
    const newCart = []

    for (const item of cart) {
      if (item.id === banan.id) {
        console.log(item.quantity)
        newCart.push({
          id: item.id,
          quantity: item.quantity ++
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

    console.log("banan", banan)

    const cartItem = {
      id: banan.id,
      quantity: 1
    }

    console.log("cart", cart)

    // const newCart = [...cart, cartItem]
    const newCart = makeCart(cartItem)
    console.log("da new cart", newCart)

    if (currentUser) localStorage.setItem(currentUser.email, JSON.stringify(newCart));
    else localStorage.setItem('default', JSON.stringify(newCart))

    setCart(newCart)
    console.log("da cart after", cart)
    // setCart([])
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
        {banana?.map(bana => (
          <button onClick={() => addToCart(bana)}>{bana.name}</button>
        ))}
      </div>
    )
  } return null
}


export default BananaPurchasePage
