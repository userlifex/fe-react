import { Table } from "react-bootstrap";
import { Loader } from "../../../../../components/loader/loader";
import { useHistory } from "../../../../../hooks/useHistory";
import date from "date-and-time";

export const History = () => {
  const { history, isHistoryLoading } = useHistory();

  if (isHistoryLoading) {
    return <Loader />;
  }

  console.log({ history });

  return (
    <div>
      <Table striped>
        <thead>
          <tr>
            <th>#</th>
            <th>Dia</th>
            <th>Hora</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {history.map((item, index) => {
            const dat = new Date(item.orderDate);
            const hour = date.format(dat, "HH:mm");
            const day = date.format(dat, "DD/MM/YYYY ");
            return (
              <tr key={item.uuid}>
                <td>{index + 1}</td>
                <td>{day}</td>
                <td>{hour}</td>
                <td>$ {item.total}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};
