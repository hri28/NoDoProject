import React from "react";
import Navbar from "./Navbar";
import "./Ab.css";

function Ab() {
  return (
    <>
      <Navbar />
      <div className="jumbotron jumbotron-fluid about-section text-center">
        <h1 className=" heading text-center">About us.</h1>
        <br />
        <p className=" para1 text-center">
          At <mark className="nd">NoDo,</mark> we believe that healthy
          producitivty is the key to having balance in our hectic lives.
          <br />
          Plan, note and stay focussed every day.
        </p>
        <img
          className="img2 img-responsive"
          src="landing.png"
          width="640px"
          height="495px"
        />
        <img className="abimg1 pt-1" src="hero.png" />
        <br />
      </div>
      <div className="container-fluid">
        <div className="row section1">
          <div className="col-sm-8 pt-5">
            <h2 className="text-white">Our values</h2>
            <p className="para2 pt-1">
              We're a tiny team of developers and designers dedicated to helping
              you find focus, be more productive and feel in control of your
              day. The modern workspace has become stressful, less productive
              and vulnerable to burnout. Don't fill your 8 hours for the sake of
              it. Leave the mundane tasks behind and get more done in less time.
              <br />
              Everyone's work style is as unique as they are so, we built tools
              universal enough to add value to anyone's workflow.
              <br /> With Nodo's minimal and easy to use interface you can do
              more of what matters to you.
              <br />
            </p>
          </div>
          <div className="col-sm-4 rightside">
            <img className="abimg1 pt-1" src="hr.png" />
            <br />
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <h2 className="dowithnodo">What you can do with NoDo</h2>
        <div className="row">
          <div className="column">
            <div className="card">
              <img src="post-its.png" className="notesimg" />
              <div className="container card-container">
                <h3 className="pt-5">Easy notetaking</h3>
                <p className="card1 pt-4">
                  Take precise notes with the clean and minimal note-taking
                  section. Use it for reminders or during class, it's going to
                  keep your notes crisp.
                </p>
              </div>
            </div>
          </div>

          <div className="column">
            <div className="card">
              <img src="Timer.jpg" className="timerimg" />
              <div className="container card-container3">
                <h3 className="pt-5 timercard">Countdown timer</h3>
                <p className="card3 pt-4">
                  Using the Countdown timer you can never lose track of
                  important dates. Set the date you want to set a countdown of
                  and get started!
                </p>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="card">
              <img src="to-do.png" className="todoimg" />
              <div className="container card-container2">
                <h3 className="pt-5 todoscard">Add todos</h3>
                <p className="card2 pt-4">
                  Capture and organise tasks the moment they pop into your head.
                  Mark completed tasks done and filter through uncompleted ones.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container pt-5">
        <h3 className="subcribetonewsletter">Subscribe to our newsletter</h3>
        <form>
          <div className="inputgrp">
            <input
              type="email"
              className="newsletter form-control"
              size="30"
              placeholder="email address"
            />
            <button type="button" className="bt btn-dark">
              Subscribe
            </button>
          </div>
        </form>
      </div>
      <div className="container-fluid justify-content-center text-light footercontainer">
        <footer>
          <div className="row my-5 justify-content-center py-5">
            <div className="col-11">
              <div className="row">
                <div className="col-xl-8 col-md-4 col-sm-4 col-12">
                  <h3 className="text-muted bold-text">NoDo.</h3>
                </div>
                <div class="col-xl-2 col-md-4 col-sm-4 col-12 footermenu">
                  <h5 class="menuu mb-2 mb-lg-4 text-muted bold-text ">
                    <b>MENU</b>
                  </h5>
                  <ul class="list-unstyled text-muted py-3">
                    <li>Home</li>
                    <li>About</li>
                    <li>Blog</li>
                    <li>Portfolio</li>
                  </ul>
                </div>
                <div class="col-xl-2 col-md-4 col-sm-4 col-12 footermenu">
                  <h5 class="contactt mb-2 mb-lg-4 text-muted bold-text ">
                    <b>CONTACT</b>
                  </h5>
                  <ul class="list-unstyled text-muted py-3">
                    <li>
                      HRISHITA
                      <small>
                        {" "}
                        <span>
                          <i class="fa fa-envelope" aria-hidden="true"></i>
                        </span>{" "}
                        fjndjs@gmail.com
                      </small>
                    </li>
                    <li>
                      SHREYA
                      <small>
                        {" "}
                        <span>
                          <i class="fa fa-envelope" aria-hidden="true"></i>
                        </span>{" "}
                        fjndjs@gmail.com
                      </small>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Ab;
