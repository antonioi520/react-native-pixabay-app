import React, {useState} from 'react';
import {Image, Modal, Text, TouchableHighlight, View} from 'react-native';



const DetailsScreen = (props) => {
        //Destructure props received from ImageResult
        const {route: {params: {image, user, tags, views, downloads}}} = props;

        return (

            //Rendering props passed from ImageResult to display information pertaining to previously clicked image
            <View style={{marginTop: 22, width: '100%', flex: 1}}>
                    <Image
                        source={{ uri: image}}
                        style={{
                            width: '80%', height: '80%', alignSelf: "center"
                        }}
                    />
                    <View>
                        <Text style={{alignSelf: "center"}}>{user}</Text>
                    </View>
                    <View>
                        <Text style={{alignSelf: "center"}}>{tags}</Text>
                    </View>
                    <View>
                        <Text style={{alignSelf: "center"}}>{views} views</Text>
                    </View>
                    <View>
                        <Text style={{alignSelf: "center"}}>{downloads} downloads</Text>
                    </View>
            </View>

        );

}
export default DetailsScreen


