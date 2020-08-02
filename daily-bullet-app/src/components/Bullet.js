import React from 'react'

class Bullet extends React.Component{
    render() {
        return(
            <div>
                <ul>
                    <li>
                    {this.props.text}
                    </li>
                </ul>
            </div>
        )
    }
}

export default Bullet