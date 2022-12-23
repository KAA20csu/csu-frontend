import TableCell from '@Components/TableCell';
import React from 'react';
import './styles.less';
import costIcon from '@Assets/icons/costIcon.svg';
import courierIcon from '@Assets/icons/courierIcon.svg';
import paymentIcon from '@Assets/icons/paymentIcon.svg';
import contractIcon from '@Assets/icons/contractIcon.svg';
import dataIcon from '@Assets/icons/dataIcon.svg';

const TablePage = () => {
    return (
        <div className="table">
            <div className="table__name">5 шагов к заявке</div>
            <div className="table__cells">
                <TableCell
                    value="Рассчитать стоимость"
                    icon={costIcon}
                    description="Lorem ipsum dolor sit amet, consectetur adipisicing elitsequi nesciunt."
                />
                <TableCell
                    value="Вызвать курьера"
                    icon={courierIcon}
                    description="Lorem ipsum dolor sit amet, consectetur adipisicing elitsequi nesciunt."
                />
                <TableCell
                    value="Оплатить услуги"
                    icon={paymentIcon}
                    description="Lorem ipsum dolor sit amet, consectetur adipisicing elitsequi nesciunt."
                />
                <TableCell
                    value="Заключить договор"
                    icon={contractIcon}
                    description="Lorem ipsum dolor sit amet, consectetur adipisicing elitsequi nesciunt."
                />
                <TableCell
                    value="Предоставить данные"
                    icon={dataIcon}
                    description="Lorem ipsum dolor sit amet, consectetur adipisicing elitsequi nesciunt."
                />
            </div>
        </div>
    );
};

export default TablePage;
