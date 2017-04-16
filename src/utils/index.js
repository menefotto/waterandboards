
// little helper function to check cookie exisistance
//
export const checkCookie = ({ cookieName }) => {

  cookies = document.cookie.split("")
  for ( let idx in cookies ) {
    if (cookies[idx].search(cookieName) !== -1){
      return true
    }
  }

  return false
}
