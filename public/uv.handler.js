importScripts(__uv$config.bundle);const proxy=new UVServiceWorker();self.addEventListener("fetch",e=>{e.respondWith(proxy.fetch(e));});
