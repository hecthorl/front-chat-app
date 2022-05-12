export default function fetching(url, opt) {
   const onFulfilled = res => res.json()
   const onRejected = err => {
      throw Error(err)
   }
   return fetch(url, opt).then(onFulfilled, onRejected)
}
