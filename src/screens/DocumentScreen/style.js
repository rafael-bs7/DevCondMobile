import styled from 'styled-components/native';

export default {
    Container: styled.SafeAreaView`
        flex:1;
        background-color: #F5F6FA
        padding:20px;
    `,

   
    LoadingIcon: styled.ActivityIndicator``,
    NoListArea: styled.View`
        justify-content:center;
        align-items:center;
        padding:30px;
    `,
    NoListText: styled.Text`
        font-size:18px;
        color:#000;
    `,
    List: styled.FlatList`
        flex:1;
    `

};