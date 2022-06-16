import Button from "../components/button";
import RadioButtonsGroup from "../components/radioButtonsGroup";
import TextField from "../components/textfield";
import Box from "@mui/material/Box";
import styles from "./home.module.css";
import { useNavigate } from "react-router-dom";

const BUTTONS_GROUP = [
  {
    value: "users",
    label: "USERS",
  },
  {
    value: "organizations",
    label: "ORGANIZATIONS",
  },
];
const BUTTON_LABEL = "Submit";

const Home = () => {
  const navigate = useNavigate();
  const save = (event) => {
    event.preventDefault();
    let url = "/result/";
    const formData = new FormData(event.target);
    [...formData.entries()].forEach(([, value]) => {
      url += value + "/";
    });

    navigate(url);
  };

  return (
    <Box component="form" onSubmit={save}>
      <h1>Home</h1>
      <div className={styles.searching}>
        <TextField
          required={true}
          name="searchString"
          className={styles.textField}
        />
        <RadioButtonsGroup
          name="type"
          buttons={BUTTONS_GROUP}
          defaultValue={BUTTONS_GROUP[0].value}
          className={styles.buttons}
          label="Search by"
        />
      </div>
      <Button label={BUTTON_LABEL} variant="contained" type="submit" />
    </Box>
  );
};

export default Home;
