import { createProxyMiddleware } from "http-proxy-middleware";

module.exports = app =>{
    app.use(
        createProxyMiddleware('/test',
        {
            target: "https://api.twitter.com/2/users/by/username/akarshs97171806",
            changeOrigin:true
        }
        )
    )
}