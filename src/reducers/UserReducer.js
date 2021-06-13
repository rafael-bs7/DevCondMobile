import AsyncStorage from '@react-native-async-storage/async-storage';

const initialState={
    token: '',
    user:{},
    property:{}
};

export default (state = initialState, action= {}) => {
    switch (action.type){
        case 'setToken':
            AsyncStorage.setItem('token', action.payload.token);
            return {...state, token:action.payload.token};
        break;
        case 'setUser':
            AsyncStorage.setItem('user', action.payload.user);
            return{...state, user:action.payload.user};
        break;
        case 'setProperty':
            AsyncStorage.setItem('property', action.payload.property);
            return {...state, property:action.payload.property};
        break;
    }
    return state;
};

