import React from 'react';
import HeaderOfPage from "../UI/HeaderOfPage";
import s from "./Contact.module.css";
import {Button, TextField} from "@mui/material";

const Contact = () => {
    return (
        <div className={s.container}>
            <HeaderOfPage/>
            <div>
                <form action="">
                    <div className={s.contactForm}>
                        <TextField id="outlined-basic" label="Name *" variant="outlined" sx={{padding: "0px 15px 15px 0px", width: "100%" }}/>
                        <TextField id="outlined-basic" label="Email*" variant="outlined" sx={{ padding: "0px 0px 15px 0px" , width: "100%"}}/>
                    </div>
                    <div>
                        <TextField id="outlined-basic" label="Email*" variant="outlined" sx={{padding: "0px 0px 15px 0px" ,  width: '100%' }}/>
                        <TextField
                            id="outlined-multiline-static"
                            label="Multiline"
                            multiline
                            rows={6}
                            defaultValue="Default Value"
                            sx={{ padding: "0px 0px 15px 0px" , width: '100%' }}
                        />
                        <Button variant="outlined"  className={s.btn}>
                            SEND MESSAGE
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Contact;