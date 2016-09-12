const preloadImage = (obj) => {
    return new Promise((resolve, reject) => {
        const image = new Image()
        image.onload = resolve(obj)
        image.onerror = () => {
            reject('Did not load')
        }
        image.src = obj.src
    })
}

export default preloadImage