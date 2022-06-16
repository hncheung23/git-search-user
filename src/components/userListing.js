import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

export default function AlignItemsList(props) {
  const { items } = props;
  return (
    <List sx={{ width: "100%", maxWidth: 450, bgcolor: "background.paper" }}>
      {items.map((item, index) => (
        <React.Fragment key={index}>
          {index > 0 && <Divider variant="inset" component="li" />}
          <ListItem alignItems="flex-start">
            {item.avatar_url && (
              <ListItemAvatar>
                <Avatar alt={item.login} src={item.avatar_url} />
              </ListItemAvatar>
            )}

            <ListItemText
              primary={item.login}
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Node ID:
                  </Typography>
                  {item.node_id}
                </React.Fragment>
              }
            />
          </ListItem>
        </React.Fragment>
      ))}
    </List>
  );
}
