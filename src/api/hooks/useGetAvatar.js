import {useEffect, useReducer} from "react";
import axios from "axios";

const reducer = (state, action) => {
    switch (action.type) {
        case 'INIT':
            return {
                ...state,
                isLoading: true,
                isError: false,
                fulfilled: false,
                __forceRefresh: false
            };

        case 'SUCCESS':
            return {
                ...state,
                isLoading: false,
                isError: false,
                fulfilled: true,
                avatar: {...action.payload}
            };

        case 'FAILURE':
            return {
                ...state,
                isLoading: false,
                isError: true,
                fulfilled: false
            };
        // no default
    }
};

export default function useGetAvatar({name}) {

    const [state, dispatch] = useReducer(reducer, {
        isLoading: false,
        isError: false,
        fulfilled: false,
        avatar: null
    });

    const avatarBaseUrl = process.env.REACT_APP_AVATAR;

    useEffect(() => {
        (async () => {
            dispatch({type: 'INIT'});

            try {
                const result = await axios.get(
                    `${avatarBaseUrl}/api/`,
                    {
                        params: {
                            name: name
                        }
                    }
                );

                dispatch({type: 'SUCCESS', payload: result.data})
            } catch (e) {
                dispatch({type: 'FAILURE'})
            }
        })()
    }, [name]);

    return [{...state}]
}