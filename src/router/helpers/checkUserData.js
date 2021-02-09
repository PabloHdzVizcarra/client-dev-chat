function checkUserData(data) {
  for (let prop in data) {
    if (Object.hasOwnProperty.call(data, prop)) {
      if (!data[prop]) {
        return false
      }
    }
  }

  return true
}

export default checkUserData
