import "./components/Appform.css";
import React, { useState, useEffect } from "react";
import formulaire from "./components/data";
import Home from "./routes/Home";
import ErrorBoundary from "./ErrorBoundary";
import { Link } from "react-router-dom"

function App() {
  <Home/>
 
  const [progress, setProgress] = useState(-12.5);
  const [heures, setHeures] = useState(0);
  const [user, setUser] = useState
  ({
    temps: "",
    produit: "",
    endroit: "",
    genre: "",
    artiste: "",
  });
  //  const [score, setScore] =useState(0);
  //  const changeScore =(scoree)=>
  //  {
  //     setScore(scoree);
  //  }
  // const [alert, setAlert] = useState(null);
  // const showAlert = (message, type) => {
  //   setAlert({
  //     msg: message,
  //     type: type,
  //   });
  // };
  const cars = ["Arpit", "Manan", "Naman", "Vinayak"];
  console.log(user);
  const min = 0;
  const max = 50;
  const[type,setType]=useState("");
    
  const changetype=(score) =>
  {
     if(score>=75)
      setType("You have no symptoms of depression");
     else
     if(score>=50)
     setType("You have mild symptoms of depression");
     else
      setType("You have severe symptoms of depression");
  } 
 const setscore =(e)=>
 {
    console.log(user);
    var elem = document.getElementById("button69");
    var score=0;
    var num24=24;
    var num18=18;
    var num12=12;
    var num6=6;
    var num4=4;
      var ans;
   // console.log(score);
     // 1st
    ans=parseInt(score)+parseInt(user.temps);
  //  console.log(ans);
    //2nd
    if(user.produit==="")
    ans=parseInt(ans) + parseInt(num24);
    else
      if(user.produit==="all")
       ans=parseInt(ans) + parseInt(num6);
       else
      if(user.produit==="most")
      ans=parseInt(ans)+parseInt(num12);
      else
      if(user.produit==="some")
      ans=parseInt(ans)+parseInt(num18);
      else
      if(user.produit==="no")
      ans=parseInt(ans)+parseInt(num24);
      
    //   //3rd
    if(user.produit==="")
    ans=parseInt(ans) + parseInt(num24);
    else
      if(user.produiendroit==="all")
       ans=parseInt(ans)+parseInt(num6);
       else
      if(user.endroit==="most")
      ans=parseInt(ans)+parseInt(num12);
      else
      if(user.endroit==="some")
      ans=parseInt(ans)+parseInt(num18);
      else
      if(user.endroit==="no")
      ans=parseInt(ans)+parseInt(num24);
    //   // 4rd page
    if(user.produit==="")
    ans=parseInt(ans) + parseInt(num24);
    else
      if(user.genre==="all")
      ans=parseInt(ans)+parseInt(num6);
       else
      if(user.genre==="most")
      ans=parseInt(ans)+parseInt(num12);
      else
      if(user.genre==="some")
      ans=parseInt(ans)+parseInt(num18);
      else
      if(user.genre==="no")
      ans=parseInt(ans)+parseInt(num24);

    //   // last page
      var num8=8;
    //   num8=parseInt(num8);
      var num14=14;
    //   num14=parseInt(num14);
    //   if(user.artiste.length<=5)
    //   ans=parseInt(ans)+parseInt(num4);
    //   else
    //   if(user.artiste.length<=10)
    //   ans=parseInt(ans)+parseInt(num8);
    //  else
    //  if(user.artiste.length<=15)
    //  ans=parseInt(ans)+parseInt(num14);
    //   else
    //   ans=parseInt(ans)+parseInt(num18);

      console.log("ans is "+ans);
      score=ans;
      console.log("state variable "+ score);
        changetype(score);
      let text = ans.toString();
      text+='%';
    // console.log("score is ");
    // console.log(ans);
     elem.innerHTML = text ;
 }
 
  const removeProgress = (e) =>
   {
    e.preventDefault();
    setProgress(progress - 12.5);
  };

  const addProgress = (e) => {
    //showAlert();
    e.preventDefault();
    setProgress(progress + 12.5);
    if (pageFormulaire === page2) {
      setProduction();
    }
    if (pageFormulaire === page3) {
      setEndroit();
    }
    if (pageFormulaire === page4) {
      setGenres();
    }
  };

  const page1 = formulaire.Question1;
  const page2 = formulaire.Question2;
  const page3 = formulaire.Question3;
  const page4 = formulaire.Question4;
  const page5 = formulaire.Question5;
  const page6 = formulaire.Question6;
  const [pageFormulaire, setPageFormulaire] = useState(page1);

  useEffect(() => {
    const form1 = document.querySelector(".form1");
    const form2 = document.querySelector(".form2");
    const form3 = document.querySelector(".form3");
    const form4 = document.querySelector(".form4");
    const form5 = document.querySelector(".form5");

    if (progress === -12.5) {
      form1.style.visibility = "hidden";
      form3.style.visibility = "hidden";
      form3.style.visibility = "hidden";
      form4.style.visibility = "hidden";
      form5.style.visibility = "hidden";
    }
    if (progress === 0) {
      setPageFormulaire(page1);
      form1.style.visibility = "visible";
      form2.style.visibility = "hidden";
      form3.style.visibility = "hidden";
      form4.style.visibility = "hidden";
      form5.style.visibility = "hidden";
    }
    if (progress === 12.5) {
      setPageFormulaire(page2);
      form1.style.visibility = "hidden";
      form2.style.visibility = "visible";
      form3.style.visibility = "hidden";
      form4.style.visibility = "hidden";
      form5.style.visibility = "hidden";
    }
    if (progress === 25) {
      setPageFormulaire(page3);
      form1.style.visibility = "hidden";
      form2.style.visibility = "hidden";
      form3.style.visibility = "visible";
      form4.style.visibility = "hidden";
      form5.style.visibility = "hidden";
    }
    if (progress === 37.5) {
      setPageFormulaire(page4);
      form1.style.visibility = "hidden";
      form2.style.visibility = "hidden";
      form3.style.visibility = "hidden";
      form4.style.visibility = "visible";
      form5.style.visibility = "hidden";
    }
    if (progress === 50) {
      setPageFormulaire(page5);
      form1.style.visibility = "hidden";
      form2.style.visibility = "hidden";
      form3.style.visibility = "hidden";
      form4.style.visibility = "hidden";
      form5.style.visibility = "visible";
    }
    if (progress > 50) {
      form1.style.visibility = "hidden";
      form3.style.visibility = "hidden";
      form3.style.visibility = "hidden";
      form4.style.visibility = "hidden";
      form5.style.visibility = "hidden";
    }
  });

  const changeHeures = (e) => 
  {
    const form1Inp = document.querySelector(".form1Inp");
    setHeures(form1Inp.value);
    setUser((prevUser) => ({ ...prevUser, [form1Inp.name]: form1Inp.value }));
    //showAlert("done","sucess");
    console.log("Changed");
    //<Alert></Alert>
  };

  const setArtiste = (e) => 
  {
    e.preventDefault();
    const artiste = document.querySelector(".artiste");
    setHeures(artiste.value);
    setUser((prevUser) => ({ ...prevUser, [artiste.name]: artiste.value }));
    SendForm();
  };
  const setProduction4 = () => 
  {
    const Choix1 = document.getElementById("Choix4prod");
    setUser((prevUser) => ({
      ...prevUser,
      [Choix1.name]: "all",
    }));
    //   showAlert("done","sucsesss");
  };
  const setProduction1 = () => 
  {
    const Choix1 = document.getElementById("Choix1prod");
    setUser((prevUser) => ({
      ...prevUser,
      [Choix1.name]: "no",
    }));
    // <Alert></Alert>
  };
  const setProduction2 = () =>
   {
    const Choix1 = document.getElementById("Choix2prod");
    setUser((prevUser) => ({
      ...prevUser,
      [Choix1.name]: "some",
    }));
  };
  const setProduction3 = () =>
   {
    const Choix1 = document.getElementById("Choix3prod");
    setUser((prevUser) => ({
      ...prevUser,
      [Choix1.name]: "most",
    }));
  };

  const setProduction = () => 
  {
    const Choix1 = document.getElementById("Choix1prod");
    const Choix2 = document.getElementById("Choix2prod");
    const Choix3 = document.getElementById("Choix3prod");
    const Choix4 = document.getElementById("Choicex4prod");

    if (document.getElementById("Choix1prod").checked)
     {
      setUser((prevUser) => ({
        ...prevUser,
        [Choix1.name]: "naman",
      }));
    }
    if (document.getElementById("Choix4prod").checked) {
      setUser((prevUser) => ({
        ...prevUser,
        [Choix4.name]: "arpit",
      }));
    }

    if (document.getElementById("Choix2prod").checked) {
      setUser((prevUser) => ({
        ...prevUser,
        [Choix2.name]: "vinayak",
      }));
    }
    if (document.getElementById("Choix3prod").checked) {
      setUser((prevUser) => ({ ...prevUser, [Choix3.name]: "arsh" }));
    }
  };

  const setEndroit1 = () => {
    const Choix1 = document.getElementById("Choix1endroit");
    setUser((prevUser) => ({ ...prevUser, [Choix1.name]: "no" }));
  };
  const setEndroit2 = () => {
    const Choix1 = document.getElementById("Choix2endroit");
    setUser((prevUser) => ({ ...prevUser, [Choix1.name]: "some" }));
  };
  const setEndroit3 = () => {
    const Choix1 = document.getElementById("Choix3endroit");
    setUser((prevUser) => ({ ...prevUser, [Choix1.name]: "most" }));
  };
  const setEndroit4 = () => {
    const Choix1 = document.getElementById("Choix3endroit");
    setUser((prevUser) => ({ ...prevUser, [Choix1.name]: "all" }));
  };

  const setEndroit = () => {
    const Choix1 = document.getElementById("Choix1endroit");
    const Choix2 = document.getElementById("Choix2endroit");
    const Choix3 = document.getElementById("Choix3endroit");
    const Choix4 = document.getElementById("Choix4endroit");

    if (document.getElementById("Choix1endroit").checked) {
      setUser((prevUser) => ({ ...prevUser, [Choix1.name]: "dans ton lit" }));
    }
    if (document.getElementById("Choix2endroit").checked) {
      setUser((prevUser) => ({
        ...prevUser,
        [Choix2.name]: "dans les transports",
      }));
    }
    if (document.getElementById("Choix3endroit").checked) {
      setUser((prevUser) => ({ ...prevUser, [Choix3.name]: "au travail" }));
    }
    if (document.getElementById("Choix4endroit").checked) {
      setUser((prevUser) => ({
        ...prevUser,
        [Choix4.name]: "durant le sport",
      }));
    }
  };
  const setGenres1 = () => {
    const Choix1 = document.getElementById("Choix1genre");
    setUser((prevUser) => ({ ...prevUser, [Choix1.name]: "no" }));
  };
  const setGenres2 = () => {
    const Choix1 = document.getElementById("Choix2genre");
    setUser((prevUser) => ({ ...prevUser, [Choix1.name]: "some" }));
  };
  const setGenres3 = () => {
    const Choix1 = document.getElementById("Choix3genre");
    setUser((prevUser) => ({ ...prevUser, [Choix1.name]: "most" }));
  };
  const setGenres4 = () => {
    const Choix1 = document.getElementById("Choix3genre");
    setUser((prevUser) => ({ ...prevUser, [Choix1.name]: "all" }));
  };

  const setGenres = () => {
    const Choix1 = document.getElementById("Choix1genre");
    const Choix2 = document.getElementById("Choix2genre");
    const Choix3 = document.getElementById("Choix3genre");
    const Choix4 = document.getElementById("Choix4genre");

    if (document.getElementById("Choix1genre").checked) {
      setUser((prevUser) => ({ ...prevUser, [Choix1.name]: "le Rap" }));
    }
    if (document.getElementById("Choix2genre").checked) {
      setUser((prevUser) => ({ ...prevUser, [Choix2.name]: "le Rock" }));
    }
    if (document.getElementById("Choix3genre").checked) {
      setUser((prevUser) => ({ ...prevUser, [Choix3.name]: "le RnB" }));
    }
    if (document.getElementById("Choix4genre").checked) {
      setUser((prevUser) => ({ ...prevUser, [Choix4.name]: "le Lofi" }));
    }
  };

  // start du formulaire

  const startForm = () => {
    const startBox = document.querySelector(".start-box");
    const showFrom = document.querySelector(".form-container");
    startBox.style.display = "none";
    showFrom.style.visibility = "visible";
    setProgress(0);
  };

  const SendForm = () => {
    setProgress(50.01);
    setPageFormulaire(page6);
    const reponses = document.querySelector(".reponses");
    reponses.style.visibility = "visible";
  };
  //   const IncProgress =() =>
  //   {
  //      showAlert("progressing !"),
  //      progress >= max ? (e) => e.preventDefault() : addProgress
  //      return ;
  // }
  return (
    <div className="App">
      <ErrorBoundary/>
      <div className="progress-bar">
        <div
          className="progress-bar-active"
          style={{ width: `${progress}vw` }}
        ></div>
        <li className="icones"></li>
        <li className="icones"></li>
        <li className="icones"></li>
        <li className="icones"></li>
        <li className="icones"></li>
      </div>

      <div className="start-box">
        <h3>Welcome to this short quiz </h3>
        <div class = "quizStart">
        <p class = "quizStartPara">This quiz is NOT a diagnostic tool. Mental health disorders can only be diagnosed by a licensed mental health provider or doctor.   
we believe assessments can be a valuable first step toward getting treatment.</p>
<div className = "this">
<div className="start-btn btn solid" onClick={startForm}>
          START
        </div>
    </div>
</div>
<br></br>
        {/* <div className="start-btn btn solid" onClick={startForm}>
          START
        </div> */}
      </div>

      <div className="form-container">
        <h3>{pageFormulaire.title}</h3>
        <p className="nbchoix">{pageFormulaire.choix}</p>
        <form className="form1">
          <input
            className="form1Inp"
            type="range"
            min="0"
            max="10"
            name="temps"
            onChange={changeHeures}
          />
          <p className="nbHeures">{heures}</p>
          <button
            type="submit"
            value="Precedant"
            className="precedant"
            onClick={
              progress <= min ? (e) => e.preventDefault() : removeProgress
            }
            style={
              progress <= min ? { cursor: "not-allowed", opacity: 0.2 } : null
            }
          >
            Back
          </button>

          <button
            type="submit"
            value="Suivant"
            className="suivant"
            onClick={
              //showAlert("done","success")
              progress >= max ? (e) => e.preventDefault() : addProgress
            }
            style={
              progress >= max ? { cursor: "not-allowed", opacity: 0.2 } : null
            }
          >
            Next
          </button>
        </form>

        <form className="form2">
          <div className="inp-container-form3">
            {/* <input type="radio" id="Choix1prod" name="produit" />
            <input type="radio" id="Choix2prod" name="produit" />
            <input type="radio" id="Choix3prod" name="produit" /> */}
            <input
              type="button"
              value="Not at all"
              id="Choix1prod"
              onClick={setProduction1}
              name="produit"
            />
            {/* <button name="subject" type="submit" value="HTML">HTML</button> */}

            <input
              type="button"
              value="Several days"
              id="Choix2prod"
              onClick={setProduction2}
              name="produit"
            />

            <input
              type="button"
              id="Choix3prod"
              value="More than half the days"
              onClick={setProduction3}
              name="produit"
            />

            <input
              type="button"
              value="Nearly every day"
              id="Choix4prod"
              onClick={setProduction4}
              name="produit"
            />
          </div>
          <div className="label-container">
            {/* <p>Oui, de manière profressionnelle</p>
            <p>Oui, de temps en temps pour m'amuser</p> */}
            {/* //<p>Non.</p> */}
          </div>
          <button
            type="submit"
            value="Precedant"
            className="precedant"
            onClick={
              progress <= min ? (e) => e.preventDefault() : removeProgress
            }
            // style={{ animation: " changeBg 5s linear infinite" }}
            style={
              progress <= min ? { cursor: "not-allowed", opacity: 0.2 } : null
            }
          >
            BACK
          </button>

          <button
            type="submit"
            value="Suivant"
            className="suivant"
            // style={{ animation: " changeBg 5s linear infinite" }}
            onClick={progress >= max ? (e) => e.preventDefault() : addProgress}
            style={
              progress >= max ? { cursor: "not-allowed", opacity: 0.2 } : null
            }
          >
            Next
          </button>
        </form>

        <form className="form3">
          <div className="inp-container-form3">
            <input
              type="button"
              value="Not at all"
              id="Choix1endroit"
              onClick={setEndroit1}
              name="endroit"
            />
            <input
              type="button"
              value="Several days"
              id="Choix2endroit"
              onClick={setEndroit2}
              name="endroit"
            />
            <input
              type="button"
              value="More than half the days"
              id="Choix3endroit"
              onClick={setEndroit3}
              name="endroit"
            />
            <input
              type="button"
              value="Nearly every day"
              id="Choix4endroit"
              onClick={setEndroit4}
              name="endroit"
            />
          </div>
          {/*<div className="label-container-form3">
             <p>Dans mon lit</p>
            <p>Dans les transports</p>
            <p>En travaillant</p>
            <p>Durant le sport</p>
            <p>En soirée</p>
          </div> */}
          <button
            type="submit"
            value="Precedant"
            className="precedant"
            onClick={
              progress <= min ? (e) => e.preventDefault() : removeProgress
            }
            style={
              progress <= min ? { cursor: "not-allowed", opacity: 0.2 } : null
            }
          >
            Back
          </button>

          <button
            type="submit"
            value="Suivant"
            className="suivant"
            // style={{ animation: " changeBg 5s linear infinite" }}
            onClick={progress >= max ? (e) => e.preventDefault() : addProgress}
            style={
              progress >= max ? { cursor: "not-allowed", opacity: 0.2 } : null
            }
          >
            Next
          </button>
        </form>

        <form className="form4">
          <div className="inp-container-form4">
            <input
              type="button"
              value="Not at all"
              id="Choix1genre"
              onClick={setGenres1}
              name="genre"
            />
            <input
              type="button"
              value="Several days"
              id="Choix2genre"
              onClick={setGenres2}
              name="genre"
            />
            <input
              type="button"
              value="More than half the days"
              id="Choix3genre"
              onClick={setGenres3}
              name="genre"
            />
            <input
              type="button"
              value="Nearly every day"
              id="Choix4genre"
              onClick={setGenres4}
              name="genre"
            />

            {/* <input type="radio" id="Choix1genre" name="genre" />
            <input type="radio" id="Choix2genre" name="genre" />
            <input type="radio" id="Choix3genre" name="genre" />
            <input type="radio" id="Choix4genre" name="genre" />
            <input type="radio" id="Choix5genre" name="genre" />
            <input type="radio" id="Choix6genre" name="genre" />
            <input type="radio" id="Choix7genre" name="genre" /> */}
          </div>
          <button
            type="submit"
            value="Precedant"
            className="precedant"
            onClick={
              progress <= min ? (e) => e.preventDefault() : removeProgress
            }
            style={
              progress <= min ? { cursor: "not-allowed", opacity: 0.2 } : null
            }
          >
            Back
          </button>

          <button
            type="submit"
            value="Suivant"
            className="suivant"
            onClick={progress >= max ? (e) => e.preventDefault() : addProgress}
            style={
              progress >= max ? { cursor: "not-allowed", opacity: 0.2 } : null
            }
          >
            Next
          </button>
        </form>
        <form className="form5">
          <textarea
            className="artiste"
            name="artiste"
            id="artiste"
            cols="30"
            rows="1"
          ></textarea>
          <button
            type="submit"
            value="Precedant"
            className="precedant"
            onClick={
              progress <= min ? (e) => e.preventDefault() : removeProgress
            }
            style={
              progress <= min ? 
              { cursor: "not-allowed", opacity: 0.2 } : null
            }
          >
            Back
          </button>
          <button
            type="submit"
            value="Terminer"
            className="suivant"
            style={{ animation: "changeBg 5s linear infinite"}}
            onClick={setArtiste}
          >
            FINISH!
          </button>
        </form>
        <div className="reponses">
          {/* <h6> Here is the copy of same</h6> */}
          <p>On the scale of 1-10 you feel like {user.temps}.</p>
          <p>On {user.produit} days you feel bad about yourself.</p>
          <p>On {user.endroit} days you face trouble concentrating on stuff.</p>
          <p>On {user.genre} days you can't stop worrying.</p>
          <p> Your heart's Content: {user.artiste}.</p>
              {/* <Link   to=
            {{     
            pathname: '/AfterLoader',
            state:{
              user: true
            }
            }
            }>  */}
            {/* Get Expert Analysis!
          </Link> */}
           <p> Your Score is  <button
            type="submit"
            id="button69"
            className="scorecalc"
            onClick={setscore}
          >
            click to see
          </button>

           </p>
           <p> {type}.  </p>
           {/* <div className="Host">
            <h2 className="title">
              Your 1:1 mentor will be Mr{" "}
              {cars[Math.floor(Math.random() * 100) % 4]} .
            </h2>
            <h3>You can Chat with him Live by clicking on the button below</h3>
            {/* <button className="btn3" >Join Now</button> */}
            {/* <a
              href="http://localhost:3030/joinmeet"
              className="btn btn-success btnForDepressed btn"
              role="button"
            >
              Join Room
            </a>
          </div> */} 
          <div class = "submission" >
           <li>
        <Link to="/AfterLoader" >
          Get Expert Mentorship!
        </Link>
          
         </li> 
          </div>
          </div>
      </div>
    </div>
  );
}

export default App;
