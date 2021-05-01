const mongoose = require('mongoose');
const Code = require('../models/code');

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

    var code = new Code({ code: "ISTJ", per: "You are responsible and sincere to your work.You have great analytical skills and a systematic approach towards life."});
    await code.save();
    var code = new Code({ code: "ISFJ", per: "You are a warm,considerate person who loves to be responsible and thorough in life."});
    await code.save();
    var code = new Code({ code: "INFJ", per: "You are insightful and enjoy intellectual stimulation."});
    await code.save();
    var code = new Code({ code: "INTJ", per: "You are a very innovative,logical and reserved person."});
    await code.save();
    var code = new Code({ code: "ISTP", per: "You are skilled at understanding how mechanical things work and usually take spontaneous decisions."});
    await code.save();
    var code = new Code({ code: "ISFP", per: "You are gentle,sensitive and have a perfect emotional and practical balance."});
    await code.save();
    var code = new Code({ code: "INFP", per: "You value inner harmony and have an idealisitc perception in life."});
    await code.save();
    var code = new Code({ code: "INTP", per: "You are intellectual and logical with a creative problem solving ability."});
    await code.save();
    var code = new Code({ code: "ESTP", per: "You are a versatile,outgoing and realisitic person."});
    await code.save();
    var code = new Code({ code: "ESFP", per: "You are playful,enthusiastic and enjoy helping people in tangible ways."});
    await code.save();
    var code = new Code({ code: "ENFP", per: "You are enthusiastic,,creative and enjoy starting new projects."});
    await code.save();
    var code = new Code({ code: "ENTP", per: "You are innovative,enthusiastic and versatile."});
    await code.save();
    var code = new Code({ code: "ESTJ", per: "You are efficient,outgoing,analytical and systematic."});
    await code.save();
    var code = new Code({ code: "ESFJ", per: "You seek to be helpful,active and productive."});
    await code.save();
    var code = new Code({ code: "ENFJ", per: "You are diplomatic,organised and value connection with people."});
    await code.save();
    var code = new Code({ code: "ENTJ", per: "You are logical,independent and effective organisers of people."});
    await code.save();
}

seedDB().then(() => {
    mongoose.connection.close();
})