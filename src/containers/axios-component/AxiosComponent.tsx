import { Stack, Typography, Button } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
interface dataProps {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}
function AxiosComponent() {
  const [data, setData] = useState<dataProps[]>([]);
  const [secondData, setSecondData] = useState<any[]>([]);
  const [toggle, setToggle] = useState("hero");
  const fetch = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos?_start=0&_limit=5")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    fetch();
  }, []);

  const handleClickToFetch = async () => {
    const { data } = await axios.get("https://pokeapi.co/api/v2/pokemon");

    setSecondData(data.results);
  };

  const handleShow = () => {
    setSecondData(["hero"]);
  };
  if (!data) return <p>Loading</p>;
  return (
    <Stack direction="column">
      {data?.map((item, index) => (
        <Typography key={index}>{item.title}</Typography>
      ))}
      <Button variant="outlined" onClick={() => handleClickToFetch()}>
        Click to fetch data
      </Button>
      {secondData?.map((item, index) => (
        <Typography key={index}>{item.name}</Typography>
      ))}
    </Stack>
  );
}

export default AxiosComponent;
