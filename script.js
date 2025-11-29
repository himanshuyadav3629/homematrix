let navelem= document.querySelectorAll(".navelem")
let random = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
let isactive = false

navelem.forEach(function(val){
    val.addEventListener("mouseenter",function(){
        if(isactive){
            return;
        }
        isactive=true
        let tag = val
        let text = tag.innerHTML
        let count = 0
        let code = setInterval(() => {
        let str = text.split("").map(function(elem,idx){
            if(count>idx){
                return elem;
            }
        return random.split("")[Math.floor(Math.random()*53)]
        }).join("") 
        tag.innerHTML=str

        count+=0.25
        if(count>=text.length){
            clearInterval(code)
            isactive=false
        }

        }, 30);

    })
})




