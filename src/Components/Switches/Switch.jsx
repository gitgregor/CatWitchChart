import React from 'react'
import './switch.css'

const Switch = () => {
    return (
        <div>
            <label class="switch" htmlFor="myInput1">
                <input type="checkbox" id="myInput1" />
                <span class="slider round"></span>
            </label>

            <label class="switch" htmlFor="myInput2">
                <input type="checkbox" id="myInput2" checked />
                <span class="slider round"></span>
            </label>
        </div>
    )
}

export default Switch

