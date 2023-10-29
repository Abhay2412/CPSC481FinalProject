import React, { useEffect } from 'react';


const WelcomeScreen = ({setPageTitle}) => {

    useEffect(() => {
        setPageTitle("Welcome")
    },[])

    return (
        <div>
            Text here
        </div>
    )
};


export default WelcomeScreen