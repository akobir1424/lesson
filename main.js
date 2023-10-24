function redirect(btn,page){
    document.querySelector(btn).addEventListener("click",(e)=>{
        e.preventDefault()
        window.location.replace(window.location.origin + "/" + page  )
    })
}

redirect("#to-about","about.html")
redirect("#SERVICES","SERVICES.html")
redirect("#TECHNOLOGIES","TECHNOLOGIES.html")
redirect("#HOW_TO","HOWTO.html")