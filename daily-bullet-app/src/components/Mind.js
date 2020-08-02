import React from 'react'
import Bullet from './Bullet'
import Input from './Input'

class Mind extends React.Component {
    render() {
        return(
           <div>
                <h2>On your mind:</h2>
                <Bullet text="nananana"/>
                <Bullet text="nananana"/>
                <Input />
            </div>
        )
    }
}

export default Mind