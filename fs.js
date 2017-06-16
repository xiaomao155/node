// 磁盘操作
const fs = require('fs');

// 磁盘操作 读写文件  读写文件最慢 是异步操作
// fs.readFile(文件名，回调函数)
fs.readFile('aa.txt',function(err,data){
	if(err){
		console.log(err)
	}else{
		console.log(data.toString());
	}
});
// fs.writeFile(文件名，内容，回调函数)
fs.writeFile('bb.txt','这是 bb.txt',function(err){
	if(err){
		console.log(err)
	}
})