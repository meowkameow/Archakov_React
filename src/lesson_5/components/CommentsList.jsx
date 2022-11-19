import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import {Comment} from "./Comment";
import {CommentStateContext} from "../App";


export default function CommentsList() {
    const commentList = React.useContext(CommentStateContext).commentsList;
    const mappedComments = commentList.map((comment, index)=>{
        return(
        <Comment key={index} name={comment.fullName} text={comment.text} />
        )
    })

    return (
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {mappedComments}
            <Divider variant="inset" component="li" />
        </List>
    );
}