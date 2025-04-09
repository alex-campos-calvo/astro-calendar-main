const Notification = {
  async showNotification(identifier) {
    const element = document?.getElementById(identifier)
    if (element) {
      element.classList.remove('hidden')
      await new Promise((resolve) => setTimeout(resolve, 5000)).then(() => {
        element.classList.add('hidden')
      })
    }
  }
}

export default Notification