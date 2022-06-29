let btn = document.getElementById("click")

let proxy = "https://proxy-t1-server1.herokuapp.com"

   setInterval(()=>{
    console.log("link clicked")
    fetch(proxy+"/izuu")
    .then((res)=>(res.json())).then((data)=>{
        
        console.log(data)
    })

   }, 1800000)