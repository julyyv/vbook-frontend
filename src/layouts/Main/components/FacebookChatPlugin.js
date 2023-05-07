import { useEffect, useRef } from 'react'

function FacebookChatPlugin() {
  const MessengerRef = useRef()
  useEffect(() => {
    MessengerRef.current.setAttribute('page_id', '100092069187584')
    MessengerRef.current.setAttribute('attribution', 'biz_inbox')

    window.fbAsyncInit = function () {
      window.FB.init({
        xfbml: true,
        version: 'v16.0',
      })
    }
    ;(function (d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0]
      if (d.getElementById(id)) return
      js = d.createElement(s)
      js.id = id
      js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js'
      fjs.parentNode.insertBefore(js, fjs)
    })(document, 'script', '262092382885896')
  }, [])
  return (
    <>
      <div id='fb-root'></div>
      <div ref={MessengerRef} id='fb-customer-chat' className='fb-customerchat'></div>
    </>
  )
}
export default FacebookChatPlugin