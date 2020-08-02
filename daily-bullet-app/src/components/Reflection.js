import React from 'react'
import Bullet from './Bullet'
import Input from './Input'

class Reflection extends React.Component{
    render() {
        return(
            <div>
                <h2>Reflection: </h2>
                <Bullet text="nananana"/>
                <Bullet text="nananana"/>
                <Input />
            </div>
        )
    }
}

export default Reflection