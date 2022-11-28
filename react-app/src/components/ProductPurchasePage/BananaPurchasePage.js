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
    fetchData()
  }, []);

  const addToCart = (banan) => {
    if (currentUser) localStorage.setItem(currentUser.email, [...cart, banan]);
    localStorage.setItem('default', [...cart, banan])
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
