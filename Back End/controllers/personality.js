const Personality = require('../models/personality');
const Code = require('../models/code');

module.exports.questions = async (req, res) => {
    const questions = await Personality.find();
    res.render('personality/index', { questions });
};

module.exports.result = async (req, res) => {
    const { question, answer, category } = req.body.personality;
    var i;
    var ecount = 0;
    var scount = 0;
    var tcount = 0;
    var jcount = 0;
    var icount = 0;
    var ncount = 0;
    var fcount = 0;
    var pcount = 0;
    let perRes = '';

    for (i = 0; i < answer.length; i++) {
        if (category[i] === 'E') {
            if (answer[i] === 'Y') {
                ecount += 1;
            } else {
                icount += 1;
            }
        } else if (category[i] === 'S') {
            if (answer[i] === 'Y') {
                scount += 1;
            } else {
                ncount += 1;
            }
        } else if (category[i] === 'T') {
            if (answer[i] === 'Y') {
                tcount += 1;
            } else {
                fcount += 1;
            }
        } else if (category[i] === 'J') {
            if (answer[i] === 'Y') {
                jcount += 1;
            } else {
                pcount += 1;
            }
        }
    }

    if (ecount > icount) {
        perRes += "E";
    } else {
        perRes += "I";
    }
    if (scount > ncount) {
        perRes += 'S';
    } else {
        perRes += 'N';
    }
    if (tcount > fcount) {
        perRes += 'T';
    } else {
        perRes += 'F';
    }
    if (jcount > pcount) {
        perRes += 'J';
    } else {
        perRes += 'P';
    }
    res.redirect(`/personality/result/${perRes}`);
};

module.exports.ans = async (req, res) => {
    const result = req.params.perRes;
    const answer = await Code.findOne({code: result});
    console.log(answer);
    res.render('personality/person', { answer });
};