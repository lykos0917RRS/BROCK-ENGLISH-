document.addEventListener("DOMContentLoaded", function(){

let loading = document.getElementById("loading");

// cek apakah loading sudah pernah tampil
if(sessionStorage.getItem("alreadyLoaded")){
    if(loading){
        loading.style.display = "none";
    }

    // langsung tampilkan menu
    document.body.classList.add("show-menu");

    return;
}

// simpan status
sessionStorage.setItem("alreadyLoaded", "true");

if(loading){

    setTimeout(function(){

        let logo = document.querySelector(".logo");

        // mulai gerakan logo ke atas
        if(logo){
            logo.classList.add("move-to-header");
        }

        // tunggu animasi berjalan dulu
        setTimeout(function(){
            loading.classList.add("fade-out");
        },3200);

        setTimeout(function(){
            loading.style.display = "none";
        },4000);

    },1800);

}

setTimeout(function(){
    loading.style.display = "none";
    document.body.classList.add("show-menu");
},4000);

}); // penutup DOMContentLoaded



// DARK MODE
function toggleMode(){
    document.body.classList.toggle("dark");
}


// GANTI WARNA BACKGROUND
function changeColor(color){
    document.body.style.backgroundColor = color;
}


