//Includes
var cps = require('cps-api');

//Creating a CPS connection
var cpsConn = new cps.Connection(  'tcp://cloud-eu-0.clusterpoint.com:9007',  'bucket',     'saitejareddy55@gmail.com',    'clusterpoint542',    'document',    'document/id',     {account: 1327});

// Debug
//cpsConn.debug = true;
// Insert
var id = 1,
   name = "saitejareddy55";
var insert_request = new cps.InsertRequest('<document><id>'+id+'</id>'+cps.Term(name, "name")+'</document>');
cpsConn.sendRequest(insert_request, function(err, insert_response) {
   if (err) return console.error(err);
   console.log('New user registered: ' + insert_response.document.id);
});