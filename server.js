const express = require("express");
const expressLayouts = require("express-ejs-layouts");

const app = express();
const PORT = 5006;

app.use(express.static('public'));
app.use(express.static('public'));
app.use('/css', express.static(__dirname + 'public/css'));
app.use('/images', express.static(__dirname + 'public/images'));
app.use('/js', express.static(__dirname + 'public/js'));
app.use('/base', express.static(__dirname + 'public/base'));

//Set Templating Engine
app.use(expressLayouts);
app.set('layout','./layouts/index.ejs');
app.set('view engine', 'ejs');

app.get("/", (req, res) => {
    console.log("ok");
    //どのpathのファイルにレンダリングするかpathで指定.ejs拡張子無し。
    res.render('./layouts/index',{
        title: 'ホームページ',
        layout: './layouts/index',
    });
})

app.listen(PORT, () => console.log(`App lisetn on port ${PORT}`));