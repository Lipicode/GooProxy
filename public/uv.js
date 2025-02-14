function startProxy(){let url=document.getElementById("urlInput").value.trim();if(!url.startsWith("http"))url="https://"+url;window.location.href="/service/uv.sw.js?url="+encodeURIComponent(url);}
