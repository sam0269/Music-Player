// API where data is saved in array of an obj formate 
const music_list = [
    {
        name:"Srivalli",
        singer:"Javed Ali",
        img:"images/1.jpg",
        music:"music/music_1.mp3"
    },
    {
        name:"Bachpan Ka pyaar",
        singer:"Baadshah,Sahdev",
        img:"images/2.jpg",
        music:"music/music_2.mp3"
    },
    {
        name:"Kacha Badaam",
        singer:"Bhuban Bhadakar",
        img:"images/3.jpg",
        music:"music/music_3.mp3"
    },
    {
        name:"Rataan Lambiyaan",
        singer:"Jubin Nautiyal",
        img:"images/4.jpg",
        music:"music/music_4.mp3"
    }, 
    {
        name:"Rait Zara Si",
        singer:"Shashaa Tirupathi",
        img:"images/5.jpg",
        music:"music/music_5.mp3"
    },
]

const audio = document.querySelector('.audios');

// function which trigger when pause function trigger 
const blockAppearance = () => $('.img_style').removeClass("rotateby360");

// function to toggle music when play/pause btn clicked 
function playpause_Music(index){
    audio.setAttribute("src",`${music_list[index].music}`);
    $('.img_style').attr("src",`${music_list[index].img}`);
    if(!start){
        $('.playpause_btn').attr("src","images/pause.png");
        audio.play();
        changeAppearance(index);
        start = true;
    }else{
        $('.playpause_btn').attr("src","images/play.png");
        audio.pause(); 
        blockAppearance();
        start = false;
    }
}

// a variable which track whether song is played or not 
var start = false;
var index = 0;
$('.playpause_btn').click(function(){
    playpause_Music(index);
});

// function to change appearance when music start 
function changeAppearance(index){
    $('.music_name').text(`${music_list[index].name}`);
    $('.singer_name').text(`${music_list[index].singer}`);
    $('.img_style').addClass("rotateby360");
}

// forward btn logic 
$('.arrow_2').click(function(){
    index++;
    index%=music_list.length;
    // console.log(index);
    playpause_Music(index);
});
// prev btn logic 
$('.arrow_1').click(function(){
    index = (index - 1 + music_list.length) % music_list.length; 
    // console.log(index);
    playpause_Music(index);
});