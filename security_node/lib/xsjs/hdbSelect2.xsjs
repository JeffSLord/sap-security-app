var connection = $.hdb.getConnection();
// var result = connection.executeQuery(`(JSON_VALUE((SELECT SESSION_CONTEXT('XS_COUNTRY') AS COUNTRY FROM DUMMY), '$[0].COUNTRY)')`);
var result = connection.executeQuery(`SELECT SESSION_CONTEXT('XS_COUNTRY') AS COUNTRY FROM DUMMY`);

var row1 = result[0];
for (var row in result){
	console.log(result[row]);
}
$.response.setBody(JSON.stringify(result));



// "country" = 
// (JSON_VALUE((SELECT SESSION_CONTEXT('XS_COUNTRY') AS COUNTRY FROM DUMMY), '$[0].COUNTRY'))