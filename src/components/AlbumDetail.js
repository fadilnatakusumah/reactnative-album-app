// like usual import the react component
import React from 'react';
import { Text, Image, View, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = (props) => {
    const {
        textStyle,
        headerContentStyle,
        thumbnailStyle,
        thumbnailContainerStyle,
        imageStyle
    } = styles;

    const { title, artist, url, image, thumbnailImage } = props;
    return (
        <Card>
            <CardSection>
                <View style={thumbnailContainerStyle}>
                    <Image
                        style={thumbnailStyle}
                        source={{ uri: thumbnailImage }}
                    />
                </View>
                <View style={headerContentStyle}>
                    <Text style={textStyle}>{title}</Text>
                    <Text>{artist}</Text>
                </View>
            </CardSection>

            <CardSection>
                <Image style={imageStyle} source={{ uri: image }} />
            </CardSection>

            <CardSection>
                <Button onPress={() => Linking.openURL(url)} buttonName={'Buy Album'} />
            </CardSection>
        </Card>
    );
};

const styles = {
    thumbnailContainerStyle: {
        marginLeft: 5,
        marginRight: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    thumbnailStyle: {
        width: 50,
        height: 50,
    },
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    textStyle: {
        fontSize: 20,
        color: '#000'
    },
    imageStyle: {
        height: 300,
        // this is a trick for the image to be full width
        width: null,
        flex: 1
    }
};


export default AlbumDetail;
