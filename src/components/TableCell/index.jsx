import React from 'react';
import './styles.less';

const TableCell = ({ value, description, icon }) => {
    return (
        <div className="tablecell">
            <div className="tablecell_img">
                <img src={icon} />
            </div>
            <div className="tablecell_value">{value}</div>
            <div className="tablecell_description">{description}</div>
        </div>
    );
};

export default TableCell;
