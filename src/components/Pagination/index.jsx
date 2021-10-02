import React from 'react';
import PropTypes from 'prop-types';

Pagination.propTypes = {
    page: PropTypes.object.isRequired,
    totalPages: PropTypes.number.isRequired,
    onPageChange: PropTypes.func,
};

Pagination.defaultProps = {
    onPageChange: null,
}

function Pagination(props) {
    const { page, onPageChange, totalPages } = props;
    const { _page, _limit } = page;
    const totalpages = Math.ceil(totalPages / _limit);

    function handlePageChange(newpage) {
        if (onPageChange) {
            onPageChange(newpage);
        }
    }

    return (
        <div>
            <button
                disabled={_page <= 1}
                onClick={() => handlePageChange(_page - 1)}
            >
                Prev
            </button>

            <button
                disabled={_page >= totalpages}
                onClick={() => handlePageChange(_page + 1)}
            >
                Next
            </button>
        </div>
    );
}

export default Pagination;