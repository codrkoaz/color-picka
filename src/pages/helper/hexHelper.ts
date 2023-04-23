const getRandomNumber = () => {
    return Math.floor(Math.random() * 9)
  }
  
  const getRandomLetter = () => {
    const str = String.fromCharCode(65 + Math.floor(Math.random() * 6))
    return str
  }
  
  const getRandomCombo = () => {
    return `${getRandomNumber()}${getRandomLetter()}`
  }
  
  export const getRandomHex = () => {
    return `#${getRandomCombo()}${getRandomCombo()}${getRandomCombo()}`
  }