// import first
import React from 'react';
import { Text, View, Image } from 'react-native';


// make the component
const Header = (props) => {
    const { textStyle, viewStyle } = styles;

    return ( 
        <View style={viewStyle}>
        
            <Text style={textStyle} >{props.headerText}</Text>
        </View>
    );
};

// the styles
const styles = {
    viewStyle: {
        backgroundColor: '#38214b',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 4 },
        shadowOpacity: 0.9,
        elevation: 5,
        position: 'relative' 
    },
    textStyle: {
        fontSize: 25,
        color: '#fff'
    }
};


// make the component and export
export default Header;
