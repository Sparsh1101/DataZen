const mongoose = require('mongoose');
const Personality = require('../models/personality');

mongoose.connect('mongodb://localhost:27017/Personality', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});

const seedDB = async () => {

    var personality = new Personality({ question: "Do you enjoy being the center of attention?", answer: "No" ,category:"E"});
    await personality.save();
    var personality = new Personality({ question: "Do you tend to work out ideas with others /think out loud?", answer: "No",category:"E" });
    await personality.save();
    var personality = new Personality({ question: "Do you like to be in a fast paced environment?", answer: "No",category:"E" });
    await personality.save();
    var personality = new Personality({ question: "Do you generally focus on the reality of things?", answer: "No",category:"S" });
    await personality.save();
    var personality = new Personality({ question: "Do you like to describe things in a specififc literal way?", answer: "No",category:"S"});
    await personality.save();
    var personality = new Personality({ question: "Do you pay attention to facts and details in any argument?", answer: "No",category:"S"});
    await personality.save();
    var personality = new Personality({ question: "Do you think you are always reasonable and level-headed?", answer: "No",category:"T" });
    await personality.save();
    var personality = new Personality({ question: "Do you enjoy finding the flaws in an argument?", answer: "No",category:"T" });
    await personality.save();
    var personality = new Personality({ question: "Do you value justice and fairness excessively?", answer: "No",category:"T" });
    await personality.save();
    var personality = new Personality({ question: "Do you always prefer to have detailed step-by-step instructions?", answer: "No",category:"J" });
    await personality.save();
    var personality = new Personality({ question: "Do you prefer to always settle your matters or arguments?", answer: "No",category:"J" });
    await personality.save();
    var personality = new Personality({ question: "Do you want to know what you are getting into ahead of your life?", answer: "No",category:"J" });
    await personality.save();
}

seedDB().then(() => {
    mongoose.connection.close();
})