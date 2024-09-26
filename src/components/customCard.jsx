import { Paper, Typography } from "@mui/material";
import "./styling/card.css";

export const CustomCard = ({ description, title }) => {
    return (
        <Paper className="cardPaper" elevation={23} square={false} sx="bgcolor: 'background.default'">
            <div className="imageContainer">
                {/* <Typography variant="h6" component="h6" className="cardTitle" align="center">
                    {title}
                </Typography> */}
                {/* <img src={imgName} alt={altName} className="imgSize" /> */}
            </div>
        </Paper>
    );
}
