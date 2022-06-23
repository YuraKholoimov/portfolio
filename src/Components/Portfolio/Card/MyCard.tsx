import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {Link, NavLink} from "react-router-dom";
import {Paper} from "@mui/material";

type MediaCardPropsType = {
    img?: string
    title: string
    url: string
    description: string
    tech: string
}
export default function MediaCard({img, title, url, description, tech}: MediaCardPropsType) {
    return (
        <>
            <Paper elevation={0} sx={{maxWidth: 450, height: 350}}>
                <a href={url} target={"_blank"}>
                    <CardMedia
                        component="img"
                        height="180"
                        image={img}
                        alt="img cover"
                    />
                </a>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {description}
                    </Typography>
                    <Typography variant="caption" color="text.secondary" >
                        <strong>({tech})</strong>
                    </Typography>
                </CardContent>
            </Paper>
        </>
    )
}