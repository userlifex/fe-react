import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { historyService } from "../services/history";

export const useHistory = () => {
  const token = window.localStorage.getItem("token");
  const [history, setHistory] = useState([]);
  const [isHistoryLoading, setIsHistoryLoading] = useState(false);

  useEffect(() => {
    fetchHistory();
  }, []);

  const fetchHistory = async () => {
    setIsHistoryLoading(true);

    const result = await historyService.getHistory(token);
    setHistory(result);
    setIsHistoryLoading(false);
  };

  return { history, isHistoryLoading, fetchHistory };
};
