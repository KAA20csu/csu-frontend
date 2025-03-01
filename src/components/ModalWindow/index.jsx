import React from 'react';
import './styles.less';
const ModalWindow = ({ children }) => (
    <div className="modal active">
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            {children}
        </div>
    </div>
);

export default ModalWindow;
