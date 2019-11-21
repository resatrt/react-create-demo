import React, { Component } from 'react'
import './button.css'
class Button extends Component {
    constructor() {
        super()
        this.state = {
            active: false,
            detalX: 0,
            detalY: 0,
        }
        this.myRef = React.createRef();
    }

    x(event) {
        // console.log(event.clientX)
        // console.log(event.clientY)
        // console.log(this.myRef.current.getBoundingClientRect())
        let { clientX, clientY } = event
        let { x, y } = this.myRef.current.getBoundingClientRect()
        let detalX = clientX - x - 6
        let detalY = clientY - y - 6
        // console.log(detalX, detalY)
        this.setState({
            active: true,
            detalX: detalX,
            detalY: detalY,
        })
    }
    y(){
        this.setState({
            active:false,
        })
    }
    render() {
        return (
            <button ref={this.myRef} className='button' onClick={this.x.bind(this)}>
                <span className='wrapper'> {this.props.value}</span>
                {this.state.active === true ?
                    (<span className='circle' 
                    onAnimationEnd={this.y.bind(this)}
                    style={{ left: this.state.detalX, top: this.state.detalY }} />)
                    : ''}

            </button>

        )
    }
}

export default Button