import React from 'react';
import './styles.less';
const ModalWindow = ({ active, children }) => (
    <div className={active ? 'modal active' : 'modal'}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            {children}
        </div>
    </div>
);

export default ModalWindow;
