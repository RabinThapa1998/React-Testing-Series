import { Stack, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
interface dataProps {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}
function FetchComponent() {
  const [data, setData] = useState<dataProps[]>([]);
  const fetch = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    fetch();
  }, []);
  if (!data) return <>...</>;
  return (
    <Stack direction="column">
      {data?.map((item, index) => (
        <Typography key={index}>{item.title}</Typography>
      ))}
    </Stack>
  );
}

export default FetchComponent;
