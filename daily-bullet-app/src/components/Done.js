import React from 'react'
import Bullet from './Bullet'
import Input from './Input'

class Done extends React.Component {
    render() {
        return(
            <div>
                <h2>Things you've done:</h2> 
                <Bullet text="nananana"/>
                <Bullet text="nananana"/>
                <Input />
            </div>
            )
    }
}

export default Done