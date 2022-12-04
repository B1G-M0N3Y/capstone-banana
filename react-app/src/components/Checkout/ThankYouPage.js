import { useHistory } from 'react-router-dom'
import './ThankYouPage.css'

const ThankYouPage = () => {
  const history = useHistory()

  return (
    <div className="thank-you-page">
      <h1>Thank You For Your Purchase.</h1>
      <h3>Return to browse our other products:</h3>
      <button onClick={() => history.push('/')}>Home</button>
    </div>
  )
}

export default ThankYouPage
