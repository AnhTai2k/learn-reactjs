import React from 'react';
import PropTypes from 'prop-types';
import {useSelector} from 'react-redux';

CounterFeature.propTypes = {
    
};

function CounterFeature(props) {
    const counter = useSelector(state => state.counter);
    return (
        <div>
            Counter: {counter}

            <div>
                
            </div>
        </div>
    );
}

export default CounterFeature;