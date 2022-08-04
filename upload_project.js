var http = require('http');
const express = require('express');
const app = express();
var formidable = require('formidable');
var fs = require('fs');

// store the html page
var indexPage = fs.readFileSync('page/indexPage.html','utf8')
var formPage = fs.readFileSync('page/formPage.html','utf8')
var SucessPage = fs.readFileSync('page/sucessPage.html','utf8')


// for the html use to upload data
http.createServer(function (req, res) {

// for file upload page
  if (req.url == '/fileupload') {
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {

      var user_file_path = files.filetoupload.filepath;

      // if the user path not here , need create one -----------
      user_store_path = `data/${fields.user_id}`
      if (!fs.existsSync(user_store_path)){
          fs.mkdirSync(user_store_path);
      }
      
      // if the user date path not here , need create one -----------
      let today_date = new Date();
      today_date = `${today_date.getFullYear()}${("0" + (today_date.getMonth() + 1)).slice(-2)}${("0" + today_date.getDate()).slice(-2)}`
      user_date_store_path = `data/${fields.user_id}/${today_date}`
      if (!fs.existsSync(user_date_store_path)){
          fs.mkdirSync(user_date_store_path);
      }

      var newpath = user_store_path + '/' + today_date + '/' + files.filetoupload.originalFilename;
      let user_data_content = `user_name,nuser_id,report_date,upload_date\n ${fields.user_name},${fields.user_id},${fields.report_date},${today_date}`

      
      fs.rename(user_file_path, newpath, function (err) {
        if (err) throw err;

        try{
          fs.writeFileSync(`${user_store_path}/${today_date}/user_data.csv` , user_data_content);
        } catch (err) {
          console.error(err)
        }

        res.write(SucessPage);
        res.end();
      });



 });

// for the form page html 
  }else if (req.url == '/formPage') {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(formPage);
    return res.end();

// for the index page html
  }else {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(indexPage);
    return res.end();
  }


}).listen(8080);