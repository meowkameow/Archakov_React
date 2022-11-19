import React from "react";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";



export function Comment({ name, text}) {

    return(
            <ListItem  alignItems="flex-start">
                <ListItemText
                    primary={name}
                    secondary={
                        <React.Fragment>
                            {text}
                        </React.Fragment>
                    }
                />
            </ListItem>

    )
}