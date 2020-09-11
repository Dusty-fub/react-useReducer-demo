import React, { useReducer } from 'react'

const initialState = { count: 0 };

function reducer(state, action) {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 };
        case 'decrement':
            return { count: state.count - 1 };
        case 'set-ten':
            return { count: action.val };
        default:
            throw new Error();
    }
}

function Urd() {
    const [state, dispatch] = useReducer(reducer, initialState);
    let s = { width: '70px', margin: '5px', padding: '4px' }
    return (
        <>
            Count: {state.count}
            <div>
                <button
                    style={s}
                    onClick={() => dispatch({ type: 'decrement' })}
                >
                    -1
                </button>

                <button
                    style={s}
                    onClick={() => dispatch({ type: 'increment' })}
                >
                    +1
                </button>

                <button
                    style={s}
                    onClick={() => dispatch({ type: 'set-ten', val: 10 })}
                >
                    set 10
                </button>
            </div>

        </>
    );
}

export default Urd;