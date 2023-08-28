import getRandomElemArray from "../utils/getRandomElemArray"

const BtnQuote = ({ setQuote, phrase, setNumberBg  }) => {

    const handleRandomPhrase = () => {
      let randomBg = []
      if (phrase === phrase) {
        setQuote(getRandomElemArray(phrase)) 
      }
      
      if (randomBg === randomBg) {
        randomBg = (setNumberBg(getRandomElemArray([1, 2, 3, 4])))
      }
        
    }

  return (
    <button className="container__btn" onClick={handleRandomPhrase}>¡Quiero otra galleta!</button>
  )
}

export default BtnQuote