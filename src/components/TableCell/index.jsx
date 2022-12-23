import React from 'react';
import './styles.less';

const TableCell = ({ value, description, icon }) => {
    return (
        <div className="tablecell">
            <div className="tablecell-img">
                <img src={icon} />
            </div>
            <div className="tablecell-value">{value}</div>
            <div className="tablecell-description">{description}</div>
        </div>
    );
};

export default TableCell;
