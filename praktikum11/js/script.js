document.querySelectorAll("a").forEach((a)=>{
    // Jika di klik akan menjalankan fungsi computerChoice()
    a.addEventListener("click", (element)=>{
        computerChoice(element);
    })
})

function computerChoice(element){
    // pilihan user
    let pilihanUser = element.target.innerText;

    // menangkap elemen pilihan komputer
    let pilihanKomputer = document.querySelector("#result");

    // membuat pilihan komputer dengan array
    let choices = ["Rock", "Paper", "Scissors"];

    // pilihan komputer secara random
    pilihanKomputer.innerHTML = choices[Math.round(Math.random()*2)];
    pilihanKomputer = pilihanKomputer.innerHTML;

    // jika pilihan user == pilihan komputer (Draw)
    if(pilihanUser == pilihanKomputer){
        // alert("Draw");
        setTimeout(()=>alert("Draw"), 300);
    }

    // jika pilihan komputer menang (Computer win)
    if (pilihanKomputer == "Paper" && pilihanUser== "Rock"){
        setTimeout(()=>alert("Computer Win"), 300);
    }else if (pilihanKomputer == "Scissors" && pilihanUser == "Paper"){
        // alert("Computer Winnn");
        setTimeout(()=>alert("Computer Winnn"), 300);
    }else if (pilihanKomputer == "Rock" && pilihanUser == "Scissors"){
        // alert("Computer Winn");
        setTimeout(()=>alert("Computer Winn"), 300);
    }

    // jika pilihan user menang (User win)
    if(pilihanUser == "Paper" && pilihanKomputer == "Rock"){
        // alert("User Win");
        setTimeout(()=>alert("User Win"), 300);
    }else if (pilihanUser == "Rock" && pilihanKomputer == "Scissors"){
        // alert("User Winn");
        setTimeout(()=>alert("User Winn"), 300);
    }else if (pilihanUser == "Scissors" && pilihanKomputer == "Paper"){
        // alert("User Winnn");
        setTimeout(()=>alert("User Winnn"), 300);
    }
}