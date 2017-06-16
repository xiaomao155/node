const http = require('http');
const fs = require('fs');

var server = http.createServer(function(request,response){
	// 请求的文件地址  request.url   
	// 读取的文件地址  ../www/request.url      www文件夹 也可以改名  
	var file_name = 'www' + request.url;

	console.log(file_name);

	fs.readFile(file_name, function(err,data){
		// body
		if(err){
			console.log('err')
			response.write('404');
		}else{
			console.log('ok11')
			response.write(data)
		}
		response.end();
	})

})
// 监听
console.log('好h');
server.listen(9090);