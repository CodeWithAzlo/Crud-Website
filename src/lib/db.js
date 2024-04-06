const { USER_NAME, PASSWORD } = process.env;

// export const connectionSrt = "mongodb+srv://" + username + ":" + password + "@cluster0.2enkwd6.mongodb.net/productDB?retryWrites=true&w=majority&appName=Cluster0";
// mongodb+srv://<username>:<password>@cluster0.2enkwd6.mongodb.net/
export const connectionSrt = "mongodb+srv://"+USER_NAME+":"+PASSWORD+"@cluster0.2enkwd6.mongodb.net/productDB";