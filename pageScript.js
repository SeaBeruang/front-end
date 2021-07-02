
$("#profile").click(function() {
    $('html, body').animate({
        scrollTop: $("#one").offset().top
    }, 2000);
});
$("#skills").click(function() {
    $('html, body').animate({
        scrollTop: $("#two").offset().top
    }, 2000);
});
$("#projects").click(function() {
    $('html, body').animate({
        scrollTop: $("#three").offset().top
    }, 2000);
});
$("#contact").click(function() {
    $('html, body').animate({
        scrollTop: $("#contactMe").offset().top
    }, 2000);
});
$("#contactMe").click(function() {
    $('html, body').animate({
        scrollTop: $("#top").offset().top
    }, 2000);
});

function JavascriptObject(){

    // Object
    const profile={
    name: "Indiana Dwitanty",
    ttl: "26 Agustus",
    usia: 21,
    alamat: "Aceh, Indonesia - 23352",
    pekerjaan: "Mahasiswa",
    };

    document.getElementById("obj").innerText = `
    Nama : ${profile.name}
    TTL : ${profile.ttl}
    Usia : ${profile.usia}
    Alamat: ${profile.alamat}
    Status: ${profile.pekerjaan}
    `;
    }

    $(document).ready(function(){
        $("#note").click(function(){
          $("#note").animate({
            left: '300px',
            opacity: '0',
            width: '80%', 
            height: '40%',
          });
        });
      });

function ForEachArray(){
    
    // Array
    const fams = [
        "Mother ", 
        "other Mother ", 
        "Father ", 
        "Step-sisters ", 
        "Brother-in-law ", 
        "Ex "];
    const myDiv = document.getElementById("arr");
    const display = item => myDiv.innerText = "my family consist of my " + item;
    
    // Foreach Loop with delay
    const delayLoop = (delay) => {
        return (fams, i) => {
            setTimeout(() => {
                display(fams);
            }, i * 1000)
        }
    };
    
    fams.forEach(delayLoop(display, 1000));
}

function ForEachArray(){
    
    // Array
    const fams = [
        "draw sometimes", 
        "watch some stuffs", 
        "make things like clays", 
        "play with my friends", 
        "sleep in my spare time", 
        "watch tutorials to do some practice"];
    const myDiv = document.getElementById("arr");
    const display = item => myDiv.innerText = "I like to" + item;
    
    // Foreach Loop with delay
    const delayLoop = (delay) => {
        return (fams, i) => {
            setTimeout(() => {
                display(fams);
            }, i * 1000)
        }
    };
    
    fams.forEach(delayLoop(display, 1000));
}