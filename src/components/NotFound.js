import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

export function NotFound() {
    //TODO: Add functionality that redirects the user back to the previous page they were on
    //^ After displaying some sort of message to let them know they will be redirected.
    //Can make use of setTimeout and some <Route>/<link> stuff, refer to the tutorial video
    const navigate = useNavigate()
    useEffect(() => {
        setTimeout(() => {
        navigate("/home", {})
    }, 1000)
    }, [])
    
    
    return(
        <h4>Page Not Found, Redirecting...</h4>
    )
}