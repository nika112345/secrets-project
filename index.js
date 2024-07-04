// HINTS:
// 1. Import express and axios
import express from "express";
import axios from "axios";

const app = express();


// 2. Create an express app and set the port number.

// 3. Use the public folder for static files.
app.use(express.static("public"));


// 4. When the user goes to the home page it should render the index.ejs file.
app.get("/", async (req,res)=>{
    try{
        const responce = await axios.get("https://secrets-api.appbrewery.com/random");
        const result =  responce.data;
        res.render("index.ejs",{secret:result.secret,
            user:result.username,
        })
        
        
    }
    

    catch(error){
    console.log("error");
}
})
// 5. Use axios to get a random secret and pass it to index.ejs to display the
// secret and the username of the secret.


// 6. Listen on your predefined port and start the server.
app.listen(3000,(req,res)=>{
    console.log("Server is running on port 3000");
})
