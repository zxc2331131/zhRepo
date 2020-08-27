module.exports = {
    proxy : {
        '/api' : {
            target: 'http://10.6.51.133/EIP/gows.php',
            ws:true,
            changeOrigin:true,
            pathRewrite :{
                '^/api':''
            }
        },
        '/api2' : {
            target: 'http://10.6.51.133/EIP/gows.php',
            ws:true,
            changeOrigin:true,
            pathRewrite :{
                '^/api':''
            }
        }
    }
}