import express , {Request,Response} from "express";
const app = express();
import cors from 'cors';
const port = 3001;

app.use(cors());


app.listen(port, () => {
    console.log(`backend running on port ${port}`);
});

app.get("/", (req:Request, res:Response) => {
    res.send("this is a get route for homepage");
});

app.get("/api", (req:Request, res:Response) => {
    return res.json({
        message: "Hello World! I am JSON!"
    });
});
