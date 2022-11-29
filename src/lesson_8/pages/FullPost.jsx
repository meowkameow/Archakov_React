import React from "react";
import { Button } from "react-bootstrap";
import {useParams, Link } from "react-router-dom";
import {posts} from "./Home"

export const FullPost = () => {
    let {id} = useParams();

    const post = posts.find(obj => obj.id === Number(id));

    return (
        <div className="full-post">
            <h1>{post.title}</h1>
            <img src={post.imageUrl} alt="img" />
            <p>{post.text}</p>
            <a href="/">
                <Link to="/">
                    <Button>Назад</Button>
                </Link>
            </a>
        </div>
    );
};