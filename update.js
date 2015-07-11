//Includes
function update(id,array,emailid)
{
	var userid1=id;
	var email=emailid;
	var count=0;
	var store= new Array();
	for(var i=0;i<array.length;i++)
	{
		store.push(array[i]);
	}
var cps = require('cps-api');
var cpsConn = new cps.Connection(  'tcp://cloud-eu-0.clusterpoint.com:9007',  'bucket',     'saitejareddy55@gmail.com',    'clusterpoint542',    'document',    'document/id',     {account: 1327});
var obj = {
   id: userid1,
   Email: email,
   storage: store
};
var documents = [obj];
cpsConn.sendRequest(new cps.UpdateRequest(documents), function (err, resp) {
   if (err) return console.error(err); // Handle error
});
}