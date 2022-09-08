import { Table } from "react-bootstrap";
import { Loader } from "../../../../../components/loader/loader";
import { useHistory } from "../../../../../hooks/useHistory";

export const History = () => {
  const { history, isHistoryLoading } = useHistory();

  if (isHistoryLoading) {
    return <Loader />;
  }

  return (
    <div>
      <Table striped>
        <thead>
          <tr>
            <th>#</th>
            <th>Date</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {history.map((item, index) => (
            <tr key={item.uuid}>
              <td>{index + 1}</td>
              <td>{item.orderDate.substr(0, 10)}</td>
              <td>$ {item.total}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};
