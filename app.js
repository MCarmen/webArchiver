var http = require('http');
var request = require('request');
var cheerio = require ('cheerio');
var stream = require('stream');
var fs = require('fs');
var path = require('path');
var url = require('url');
var archiver = require('archiver');


function getTransformStream(url, recLevel, replaceManager, downloadedFiles, doCrawlAndDownloadResource) {
  var transformStream = new stream.Transform();
  var buffer='';

  transformStream._transform = function(chunk, encoding, callback) {    
    buffer += chunk.toString();
    callback();
  };

  transformStream._flush = function(callback){
    this.push(transformStream._replace(buffer));
    callback();
  }

  transformStream._replace = function(chunk){
      $ = cheerio.load(chunk);
      $('a').each(function (i, link){
        var newUrl = $(this).attr('href'); 
        var newUrlName = replaceManager.lookupName(newUrl);
        $(this).attr('href', newUrlName);

        doCrawlAndDownloadResource(
          URLManager.getDownloadableURL(url, newUrl),
          recLevel - 1, replaceManager, newUrlName, downloadedFiles); 
      }); //end $a.each
      return $.html();
  }; 

  return transformStream;  
}


function routeRequests(req, res){
  console.log("req.url: " + req.url);

  // TODO
}

http.createServer(routeRequests).listen(8081);
