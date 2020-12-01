import React from 'react'

function User() {
    return (
        <div>
           <p>Options : </p>
           <form>
               <label>Username : 
                   <input type="text" placeholder="Type your username here"/>
               </label>
               <label>Profile picture : 
                   <input type="url" placeholder="Paste a URL here"/>
               </label>
           </form>
        </div>
    )
}
export default User;