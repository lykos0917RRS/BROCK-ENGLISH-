
function changeVideo(videoId){

let videoHTML = `
<button onclick="closeVideo()" class="close-btn">❌ Close</button>
<iframe width="100%" height="400"
src="https://www.youtube.com/embed/${videoId}"
frameborder="0"
allowfullscreen>
</iframe>
`;

document.getElementById("videoContainer").innerHTML = videoHTML;

}

function closeVideo(){
document.getElementById("videoContainer").innerHTML = "";
}

function closeVideo(){
document.getElementById("videoContainer").innerHTML = "";
}