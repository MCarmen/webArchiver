var http = require('http');
var request = require('request');
var cheerio = require ('cheerio');
var { Transform } = require('stream');
var fs = require('fs');
var path = require('path');
var {URL} = require('url');
var archiver = require('archiver');
var urlMod = require('url');

/* 
// Aquest codi l'heu de posar allà a on toqui.
  transformStream._transform = function(chunk, encoding, callback) {    
    buffer += chunk.toString();
    //TODO: invocar a la callback
  };



  transformStream._flush = function(callback){
    this.push(transformStream._replace(buffer));
    //TODO: invocar al a callback
  }

  

  transformStream._replace = function(chunk){
      $ = cheerio.load(chunk);
      $('a').each(function (i, link){      
        var newUrl = $(this).attr('href'); 
        //TODO: inicialitzar la variable newUrlName
        $(this).attr('href', newUrlName);      
      }); //end $a.each
      return $.html();
  }
*/


