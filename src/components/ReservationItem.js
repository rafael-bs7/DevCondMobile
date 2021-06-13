import React, {useState} from 'react';
import styled from 'styled-components/native';

import Icon from 'react-native-vector-icons/FontAwesome';

const Box = styled.TouchableOpacity`
    background-color:#FFF;
    border-width:2px;
    border-color:#E8E9ED;
    border-radius: 15px;
    padding:15px;
    margin-bottom:10px;
    flex-direction:row;
    align-items:center;
`;
const Title = styled.Text`
    font-size: 15px;
    color:#000;
    margin-left: 10px;
`;





export default ({data}) =>{
    


    return(
        <Box onPress = {null}>
            <Title>{data.title}</Title>
        </Box>
    );
}