import React, { useState } from 'react';
import PropTypes from 'prop-types';

PostFiltersForm.propTypes = {
    onSubmit: PropTypes.func,
};

PostFiltersForm.defaultProps = {
    onSubmit: null,
};

function PostFiltersForm(props) {
    const { onSubmit } = props;
    const { searchTerm, setSearchTerm} = useState('');

    function handleSearchTermChange(e) {
        setSearchTerm(e.target.value)

        if (!onSubmit) return;

        const formValues = {
            searchTerm,
        }
        onSubmit(formValues);
    }

    return (
        <form>
            <input 
            type="text"
                value={searchTerm}
                onChange={handleSearchTermChange}
            />
        </form>
    );
}

export default PostFiltersForm;