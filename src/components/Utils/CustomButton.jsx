import React, { Component } from "react";
import { Spinner } from '@chakra-ui/react'

class CustomButton extends Component {

    render() {
        const { styleDefault, activeClass , label = 'Confirm', clickEvent, reset, spinner } = this.props
        //default requesting style
        let activeStyle = "px-3 py-3 rounded border border-sky-300  transition ease-in-out delay-150 duration-300"
        //default emptystate style
        let initialStyle = "px-3 py-3 rounded border transition ease-in-out delay-150 duration-300"
        
        let requesting = activeClass + " " + activeStyle
        let emptyState = styleDefault + " " + initialStyle
        
        if (spinner) {
            return (
                <div>
                    <button onClick={reset} disabled={spinner} className={requesting} >
                        <div className="flex justify-between items-center">
                            <div>
                                {label}
                            </div>
                            <Spinner color="white"  thickness="2px" className="ml-2 w-[1rem] h-[1rem] bg-sky-600" size='lg' />
                        </div>
                    </button>
                </div>
            )
        }
        else {
            return (
                <div>
                    <button onClick={clickEvent} className={emptyState} >
                        {label}
                    </button>
                </div>
            )
        }
    }

}

export default CustomButton