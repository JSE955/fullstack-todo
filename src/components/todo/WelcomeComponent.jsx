import {useParams, Link} from 'react-router-dom'
import { useState } from 'react'
import { retrieveHelloWorldBean, retrieveHelloWorldPathVariable } from './api/HelloWorldApiService'

function WelcomeComponent() {
    
    const {username} = useParams()

    const [message, setMessage ] = useState(null)

    function callHelloWorldBeanRestApi() {
        console.log('calledBean')

        retrieveHelloWorldBean()
             .then((response) => successfulResponse(response))
             .catch((error) => errorResponse(error))
             .finally( () => console.log('cleanup'))
    }

    function callHelloWorldPathVariableApi() {
        console.log('called path')
        retrieveHelloWorldPathVariable(username)
        .then((response) => successfulResponse(response))
        .catch((error) => errorResponse(error))
        .finally( () => console.log('cleanup'))
    }

    function successfulResponse(response) {
        console.log(response)
        setMessage(response.data.message)
    }

    function errorResponse(error) {
        console.log(error)
    }
    
    return (
        <div className="Welcome">
            <h1>Welcome {username}</h1>
            <div>
                Manage Your Todos - <Link to="/todos">Here</Link>
            </div>
            <div>
                <button className="btn btn-success m-5" onClick={callHelloWorldBeanRestApi}>
                    Call Hello World Bean</button>
            </div>
            <div className="text-info">{message}</div>
            <div>
                <button className="btn btn-success m-5" onClick={callHelloWorldPathVariableApi}>
                    Call Hello World Path Variable</button>
            </div>
            <div className="text-info">{message}</div>
        </div>
    )
}

export default WelcomeComponent