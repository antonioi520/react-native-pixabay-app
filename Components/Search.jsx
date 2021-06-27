import React, {useState, useEffect} from 'react';
import { Text, View } from 'react-native';
import { SearchBar } from 'react-native-elements';
import axios from 'axios';
import ImageResult from './ImageResult'

const Search = () =>  {
    //API Info
    const apiUrl = 'https://pixabay.com/api/';
    const apiKey = '22195479-dcbf1345b7bfee9b8eafb79e8';

    //Initial state hooks
    const [search, setSearch] = useState('');
    const [images, setImages] = useState([]);

    //Update images with new search request
    useEffect(() => {
        axios.get(`${apiUrl}/?key=${apiKey}&q=${search}&image_type=photo`)
            .then(res => setImages(res.data.hits))
            .catch(err => console.log(err))
    }, [search]);

    //Update search value
    const handleChange = text => {
        if (text === ''){
            setSearch('')
            setImages([])
        }
        else{
            setSearch(text)
        }
    }


        return (
            <View
                style={{
                    width:"100%"
                }}>
                <SearchBar
                    style={{
                        width:"100%"
                    }}
                    placeholder="Search"
                    onChangeText={text => handleChange(text)}
                    value={search}
                />
                {/*If there are images, display ImageResult component, otherwise do not display*/}
                {images.length > 0 ? (<ImageResult images={images}   />) : null}
            </View>
        );

}
export default Search
