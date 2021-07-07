import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';

PostFilterForm.propTypes = {
    onSubmit: PropTypes.func,
};

PostFilterForm.defaultProps = {
    onSubmit: null,
}

function PostFilterForm(props) {
    const { onSubmit } = props;
    const [search, setSearch] = useState('');
    const typing = useRef(null);

    function handleSearchChange(e) {
        const value = e.target.value;
        setSearch(value);
        if (!onSubmit) return;

        if (typing.current) {
            clearTimeout(typing.current);
        }

        typing.current = setTimeout(() => {
            const formValue = {
                search: value,
            };
            onSubmit(formValue);
        }, 300);

    }

    return (
        <form>
            <input
                type="text"
                value={search}
                onChange={handleSearchChange}
            />
        </form>
    );
}

export default PostFilterForm;