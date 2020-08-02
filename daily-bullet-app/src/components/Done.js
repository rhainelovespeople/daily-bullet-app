import React from 'react'
import Bullet from './Bullet'

class Done extends React.Component {
    render() {
        return(
            <div>
                <h2>Things you've done:</h2> 
                <Bullet />
                <Bullet />
            </div>
            )
    }
}

export default Done