import React, {useState} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity, TouchableHighlight, Modal} from 'react-native';
import PropTypes from 'prop-types';
import DetailsScreen from "./DetailsScreen";
import { useNavigation } from '@react-navigation/native';



const ImageResult = ({images}) => {
        const navigation = useNavigation();
        let imageList;

        //Cycle through array of images, display image based off search, and pass props of clicked image to Detail screen
        if(images){
            imageList = (
                <View
                    style={{flexDirection: 'row', flexWrap: 'wrap', flexGrow: 0}}
                >
                    {images.map(img => (
                        <TouchableHighlight
                            key={img.id}
                            style={{flexBasis: '25%'}}
                            //When tapping on image, navigate to Details screen and pass information to that screen to display
                            onPress={() => navigation.navigate('Details', { image: img.largeImageURL, tags: img.tags, views: img.views, downloads: img.downloads, user: img.user })}
                        >
                                <Image
                                    source={{ uri: img.previewURL}}
                                    key={img.id}
                                    style={{width: 100, height: 100}}

                                />
                        </TouchableHighlight>
                    ))}
                </View>
            )
        } else{
            imageList = null;
        }

        return(

            <View>
                {imageList}
            </View>
        )


}

ImageResult.propTypes = {
    images: PropTypes.array.isRequired
}


export default ImageResult;
