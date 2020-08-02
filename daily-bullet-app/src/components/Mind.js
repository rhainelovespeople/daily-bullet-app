import React from 'react'
import Bullet from './Bullet'

class Mind extends React.Component {
    render() {
        return(
           <div>
                <h2>On your mind:</h2>
                <Bullet />
                <Bullet />
            </div>
        )
    }
}

export default Mind