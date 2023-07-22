import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartLine,
  faTicket,
  faGear,
  faUser,
  faDiagramProject,
  faGraduationCap,
  faUserGroup,
  faFile,
  faCreditCard,
  faSpinner,
  faCircleCheck,
  faTrashCan,
  faHeart,
  faComment,
  faBell,
  faMessage

} from "@fortawesome/free-solid-svg-icons";
import {showDiv} from '../Components/AllFunctions'
import "../Components/myFramework.css";
import "../Components/dashboard.css";
import welcomeImg from "../imgs/welcome.png";
import avatar from "../imgs/avatar.png";
import news1 from "../imgs/news-01.png";
import news2 from "../imgs/news-02.png";
import news3 from "../imgs/news-03.png";
import news4 from "../imgs/news-04.png";
import pdf from "../imgs/pdf.svg";
import avi from "../imgs/avi.svg";
import dll from "../imgs/dll.svg";
import zib from "../imgs/zip.svg";
import psd from "../imgs/psd.svg";
import eps from "../imgs/eps.svg";
import team1 from "../imgs/team-01.png";
import team2 from "../imgs/team-02.png";
import team3 from "../imgs/team-03.png";
import team4 from "../imgs/team-04.png";
import team5 from "../imgs/team-05.png";

import React from "react";
import { Link } from "react-router-dom";



export default function Index() {
  return (
    <div class="page d-flex">
      <div class="sidebar bg-white p-relative p-20">
        <h3 class="p-relative txt-c mt-0">ElDhiaa</h3>
        <ul>
          <li>
            <Link
              class="active d-flex align-center fs-14 c-black rad-6 p-10"
              to="/"
            >
              <FontAwesomeIcon icon={faChartLine} />
              <span class="hide-mobile">Dashboard</span>
            </Link>
          </li>
          <li>
            <Link
              class="d-flex align-center fs-14 c-black rad-6 p-10"
              to="/settings"
            >
              <FontAwesomeIcon icon={faGear} />
              <span class="hide-mobile">Settings</span>
            </Link>
          </li>
          <li>
            <Link
              class="d-flex align-center fs-14 c-black rad-6 p-10"
              to="/profile"
            >
              <FontAwesomeIcon icon={faUser} />
              <span class="hide-mobile">Profile</span>
            </Link>
          </li>
          <li>
            <Link
              class="d-flex align-center fs-14 c-black rad-6 p-10"
              to="/projects"
            >
              <FontAwesomeIcon icon={faDiagramProject} />
              <span class="hide-mobile">Projects</span>
            </Link>
          </li>
          <li>
            <Link
              class="d-flex align-center fs-14 c-black rad-6 p-10"
              to="/courses"
            >
              <FontAwesomeIcon icon={faGraduationCap} />
              <span class="hide-mobile">Courses</span>
            </Link>
          </li>
          <li>
            <Link
              class="d-flex align-center fs-14 c-black rad-6 p-10"
              to="/friends"
            >
              <FontAwesomeIcon icon={faUserGroup} />
              <span class="hide-mobile">Friends</span>
            </Link>
          </li>
          <li>
            <Link
              class="d-flex align-center fs-14 c-black rad-6 p-10"
              to="/files"
            >
              <FontAwesomeIcon icon={faFile} />
              <span class="hide-mobile">Files</span>
            </Link>
          </li>
          <li>
            <Link
              class="d-flex align-center fs-14 c-black rad-6 p-10"
              to="/plans"
            >
              <FontAwesomeIcon icon={faCreditCard} />
              <span class="hide-mobile">Plans</span>
            </Link>
          </li>
        </ul>
      </div>
      <div class="content w-full">
        {/* <!-- start head --> */}
        <div class="head bg-white p-15 flex-between">
          <div class="search p-relative">
            <input class="p-10" type="search" placeholder="Type A Keyword" />
          </div>
          <div class="icons d-flex align-center">
            <span class="notification p-relative">
            <FontAwesomeIcon icon={faBell} />
            </span>
            <img src={avatar} alt="" style={{cursor:"pointer"}} onClick={showDiv}/>
            <div className="setting-div" id="setting-div">
                <img src={avatar}/>
                <span className="sp1">Dhiaa Alzuhiri</span>
                <span className="sp2">Dhiaa@gmail.com</span>
                <ul>
                  <Link to={"/profile"}><li>My Profile</li></Link>
                  <a><li>Message</li></a>
                  <a><li>Activity</li></a>
                  <Link to={"/login"}><li>Sign Out</li></Link>
                </ul>
            </div>
          </div>
        </div>
        {/* <!-- end head --> */}
        <h1 class="p-relative">Dashbaord</h1>
        <div class="wrapperr d-grid gap-20">
          {/* <!-- start welcome wedgit --> */}
          <div class="welcome bg-white rad-10 txt-c-moblie block-mobile">
            <div class="intro d-flex bg-eee space-between p-20">
              <div>
                <h2 class="m-0">Welcome</h2>
                <p class="c-gray mt-5">ElDhiaa</p>
              </div>
              <img class="hide-mobile" src={welcomeImg} alt="" />
            </div>
            <img src={avatar} class="avatar" alt="" />
            <div class="body d-flex txt-c block-mobile p-20 mt-20 mb-20">
              <div>
                Dhiaa Alzuhiri{" "}
                <span class="d-block fs-14 c-gray mt-10"> Developer</span>
              </div>
              <div>
                10 <span class="d-block fs-14 c-gray mt-10"> Projects</span>
              </div>
              <div>
                $600 <span class="d-block fs-14 c-gray mt-10"> Earned</span>
              </div>
            </div>
            <a
              href="profile.html"
              class="visit d-block c-white rad-6 fs-14 w-fit btn-shape"
            >
              Profile
            </a>
          </div>
          {/* <!-- end welcome wedgit -->
             <!-- start quick craft wedgit --> */}
          <div class="quick-draft p-20 bg-white rad-10">
            <h2 class="mt-0 mb-10">Quick Draft</h2>
            <p class="mb-20 mt-0 c-gray fs-15">Write A Draft For Your Ideas</p>
            <form action="">
              <input
                class="d-block bg-eee rad-6 p-10 mb-20 b-none w-full"
                type="text"
                placeholder="title"
              />
              <textarea
                class="d-block bg-eee rad-6 p-10 mb-20 b-none w-full"
                placeholder="your thought"
              ></textarea>
              <input
                type="submit"
                class="save d-block fs-14 bg-blue c-white b-none w-fit btn-shape"
                value="save"
              />
            </form>
          </div>
          {/* <!-- end quick craft wedgit -->
            
             <!-- start ticket wedgit--> */}
          <div class="tickets p-20 bg-white rad-10">
            <h2 class="mt-0 mb-10">Tickets Statistics</h2>
            <p class="mt-0 mb-20 c-gray fs-15">
              Everythig About Support Tickets
            </p>
            <div class="d-flex txt-c gap-20 f-wrap">
              <div class="box p-20 rad-10 fs-13 c-gray">
                <FontAwesomeIcon
                  icon={faTicket}
                  className="fa-2x mb-10 c-orange"
                />
                <span class="d-block c-black fw-bold fs-25 mb-5">2500</span>
                Total
              </div>
              <div class="box p-20 rad-10 fs-13 c-grey">
                <FontAwesomeIcon
                  icon={faSpinner}
                  className="fa-2x mb-10 c-blue"
                />
                <span class="d-block c-black fw-bold fs-25 mb-5">500</span>
                Pending
              </div>
              <div class="box p-20 rad-10 fs-13 c-grey">
                <FontAwesomeIcon icon={faCircleCheck} className="fa-2x mb-10 c-green"/>
                <span class="d-block c-black fw-bold fs-25 mb-5">1900</span>
                Closed
              </div>
              <div class="box p-20 rad-10 fs-13 c-grey">
                <FontAwesomeIcon icon={faTrashCan} className="fa-2x mb-10 c-red"/>
                <span class="d-block c-black fw-bold fs-25 mb-5">100</span>
                Deleted
              </div>
            </div>
          </div>
          {/* <!-- end ticket wedgit-->
             <!-- start news wedgit--> */}
          <div class="news p-20 bg-white rad-10 txt-c-moblie">
            <h2 class="mt-0 mb-20">Latest News</h2>
            <div class="news-row d-flex align-center">
              <img decoding="async" src={news1} alt="" />
              <div class="info">
                <h3>Created SASS Section</h3>
                <p class="m-0 fs-14 c-grey">New SASS Examples & Tutorials</p>
              </div>
              <div class="btn-shape bg-eee fs-13 label">3 Days Ago</div>
            </div>
            <div class="news-row d-flex align-center">
              <img decoding="async" src={news2} alt="" />
              <div class="info">
                <h3>Changed The Design</h3>
                <p class="m-0 fs-14 c-grey">A Brand New Website Design</p>
              </div>
              <div class="btn-shape bg-eee fs-13 label">5 Days Ago</div>
            </div>
            <div class="news-row d-flex align-center">
              <img decoding="async" src={news3} alt="" />
              <div class="info">
                <h3>Team Increased</h3>
                <p class="m-0 fs-14 c-grey">3 Developers Joined The Team</p>
              </div>
              <div class="btn-shape bg-eee fs-13 label">7 Days Ago</div>
            </div>
            <div class="news-row d-flex align-center">
              <img decoding="async" src={news4} alt="" />
              <div class="info">
                <h3>Added Payment Gateway</h3>
                <p class="m-0 fs-14 c-grey">Many New Payment Gateways Added</p>
              </div>
              <div class="btn-shape bg-eee fs-13 label">9 Days Ago</div>
            </div>
          </div>
          {/* <!-- end news wedgit -->
             <!-- start tasks wedgit--> */}
          <div class="tasks p-20 bg-white rad-10">
            <h2 class="mt-0 mb-20">Latest Tasks</h2>
            <div class="task-row flex-between">
              <div class="info">
                <h3 class="mt-0 mb-5 fs-15">Record One New Video</h3>
                <p class="m-0 c-grey">Record Python Create Exe Project</p>
              </div>
              <FontAwesomeIcon icon={faTrashCan} />
            </div>
            <div class="task-row flex-between">
              <div class="info">
                <h3 class="mt-0 mb-5 fs-15">Write Article</h3>
                <p class="m-0 c-grey">
                  Write Low Level vs High Level Languages
                </p>
              </div>
              <FontAwesomeIcon icon={faTrashCan} />
            </div>
            <div class="task-row flex-between">
              <div class="info">
                <h3 class="mt-0 mb-5 fs-15">Finish Project</h3>
                <p class="m-0 c-grey">Publish Academy Programming Project</p>
              </div>
              <FontAwesomeIcon icon={faTrashCan} />
            </div>
            <div class="task-row flex-between done">
              <div class="info">
                <h3 class="mt-0 mb-5 fs-15">Attend The Meeting</h3>
                <p class="m-0 c-grey">
                  Attend The Project Business Analysis Meeting
                </p>
              </div>
              <FontAwesomeIcon icon={faTrashCan} />
            </div>
            <div class="task-row flex-between">
              <div class="info">
                <h3 class="mt-0 mb-5 fs-15">Finish Lesson</h3>
                <p class="m-0 c-grey">Finish Teaching Flex Box</p>
              </div>
              <FontAwesomeIcon icon={faTrashCan} />
            </div>
          </div>
          {/* <!-- end tasks wedgit-->
            <!-- start top search wedgit --> */}
          <div class="search-items p-20 bg-white rad-10">
            <h2 class="mt-0 mb-20">Top Search Items</h2>
            <div class="items-head d-flex space-between c-grey mb-10">
              <div class="c-gray">Keyword</div>
              <div class="c-gray">Search Count</div>
            </div>
            <div class="items d-flex space-between pt-15 pb-15">
              <span>Programming</span>
              <span class="bg-eee fs-13 btn-shape">220</span>
            </div>
            <div class="items d-flex space-between pt-15 pb-15">
              <span>JavaScript</span>
              <span class="bg-eee btn-shape fs-13">180</span>
            </div>
            <div class="items d-flex space-between pt-15 pb-15">
              <span>PHP</span>
              <span class="bg-eee btn-shape fs-13">160</span>
            </div>
            <div class="items d-flex space-between pt-15 pb-15">
              <span>Code</span>
              <span class="bg-eee btn-shape fs-13">145</span>
            </div>
            <div class="items d-flex space-between pt-15 pb-15">
              <span>Design</span>
              <span class="bg-eee btn-shape fs-13">110</span>
            </div>
            <div class="items d-flex space-between pt-15 pb-15">
              <span>Logic</span>
              <span class="bg-eee btn-shape fs-13">95</span>
            </div>
          </div>
          {/* <!-- end top search wedgit -->
            <!-- start latest upload --> */}
          <div class="latest-upload p-20 bg-white rad-10">
            <h2 class="mt-0 mb-20">Latest Upload</h2>
            <ul>
              <li class="flex-between pb-10 mb-10">
                <div class="d-flex align-center">
                  <img
                    decoding="async"
                    class="mr-10"
                    src={pdf}
                    alt=""
                  />
                  <div>
                    <span class="d-block">my-file.pdf</span>
                    <span class="fs-15 c-grey">ElDhiaa</span>
                  </div>
                </div>
                <div class="bg-eee btn-shape fs-13">2.9mb</div>
              </li>
              <li class="flex-between pb-10 mb-10">
                <div class="d-flex align-center">
                  <img
                    decoding="async"
                    class="mr-10"
                    src={avi}
                    alt=""
                  />
                  <div>
                    <span class="d-block">My-Video-File.avi</span>
                    <span class="fs-15 c-grey">Admin</span>
                  </div>
                </div>
                <div class="bg-eee btn-shape fs-13">4.9mb</div>
              </li>
              <li class="flex-between pb-10 mb-10">
                <div class="d-flex align-center">
                  <img
                    decoding="async"
                    class="mr-10"
                    src={psd}
                    alt=""
                  />
                  <div>
                    <span class="d-block">My-Psd-File.pdf</span>
                    <span class="fs-15 c-grey">Omar</span>
                  </div>
                </div>
                <div class="bg-eee btn-shape fs-13">4.5mb</div>
              </li>
              <li class="flex-between pb-10 mb-10">
                <div class="d-flex align-center">
                  <img
                    decoding="async"
                    class="mr-10"
                    src={zib}
                    alt=""
                  />
                  <div>
                    <span class="d-block">My-Zip-File.pdf</span>
                    <span class="fs-15 c-grey">User</span>
                  </div>
                </div>
                <div class="bg-eee btn-shape fs-13">8.9mb</div>
              </li>
              <li class="flex-between pb-10 mb-10">
                <div class="d-flex align-center">
                  <img
                    decoding="async"
                    class="mr-10"
                    src={dll}
                    alt=""
                  />
                  <div>
                    <span class="d-block">My-DLL-File.pdf</span>
                    <span class="fs-15 c-grey">Admin</span>
                  </div>
                </div>
                <div class="bg-eee btn-shape fs-13">4.9mb</div>
              </li>
              <li class="flex-between">
                <div class="d-flex align-center">
                  <img
                    decoding="async"
                    class="mr-10"
                    src={eps}
                    alt=""
                  />
                  <div>
                    <span class="d-block">My-Eps-File.pdf</span>
                    <span class="fs-15 c-grey">Designer</span>
                  </div>
                </div>
                <div class="bg-eee btn-shape fs-13">8.9mb</div>
              </li>
            </ul>
          </div>
          {/* <!-- end latest upload -->
            <!-- start last project --> */}
          <div class="last-project p-20 bg-white rad-10 p-relative">
            <h2 class="mt-0 mb-20">Last Project Progress</h2>
            <ul class="p-relative m-0">
              <li class="mt-25 d-flex align-center done">Got The Project</li>
              <li class="mt-25 d-flex align-center done">
                Started The Project
              </li>
              <li class="mt-25 d-flex align-center done">
                The Project About To Finish
              </li>
              <li class="mt-25 d-flex align-center current">
                Test The Project
              </li>
              <li class="mt-25 d-flex align-center">
                Finish The Project & Get Money
              </li>
            </ul>
            <img class="lunch-icon hide-mobile" src="imgs/project.png" alt="" />
          </div>
          {/* <!-- end last project -->
            <!-- start reminder --> */}
          <div class="reminder p-20 bg-white rad-10 p-relative">
            <h2 class="mt-0 mb-20">Reminders</h2>
            <ul class="m-0">
              <li class="d-flex align-center mt-15">
                <span class="key bg-blue mr-15 d-block rad-half"></span>
                <div class="pl-15 blue">
                  <p class="fs-14 fw-bold mt-0 mb-5">Check My Tasks List</p>
                  <span class="fs-13 c-grey">28/09/2022 - 12:00am</span>
                </div>
              </li>
              <li class="d-flex align-center mt-15">
                <span class="key bg-green mr-15 d-block rad-half"></span>
                <div class="pl-15 green">
                  <p class="fs-14 fw-bold mt-0 mb-5">Check My Projects</p>
                  <span class="fs-13 c-grey">26/10/2022 - 12:00am</span>
                </div>
              </li>
              <li class="d-flex align-center mt-15">
                <span class="key bg-orange mr-15 d-block rad-half"></span>
                <div class="pl-15 orange">
                  <p class="fs-14 fw-bold mt-0 mb-5">Call All My Clients</p>
                  <span class="fs-13 c-grey">05/11/2022 - 12:00am</span>
                </div>
              </li>
              <li class="d-flex align-center mt-15">
                <span class="key bg-red mr-15 d-block rad-half"></span>
                <div class="pl-15 red">
                  <p class="fs-14 fw-bold mt-0 mb-5">
                    Finish The Development Workshop
                  </p>
                  <span class="fs-13 c-grey">20/12/2022 - 12:00am</span>
                </div>
              </li>
            </ul>
          </div>
          {/* <!-- end reminder -->
            <!-- start latest post wedgit --> */}
          <div class="latest-post p-20 bg-white rad-10 p-relative">
            <h2 class="mt-0 mb-25">Latest Post</h2>
            <div class="top d-flex align-center">
              <img
                decoding="async"
                class="avatar mr-15"
                src={avatar}
                alt=""
              />
              <div class="info">
                <span class="d-block mb-5 fw-bold">Dhiaa Alzuhiri</span>
                <span class="c-grey">About 1 Hours Ago</span>
              </div>
            </div>
            <div class="post-content txt-c-mobile pt-20 pb-20 mt-20 mb-20">
              You can fool all of the people some of the time, and some of the
              people all of the time, but you can't fool all of the people all
              of the time.
            </div>
            <div class="post-stats flex-between c-gray">
              <div>
              <FontAwesomeIcon icon={faHeart} />
                <span style={{marginLeft: "5px"}}>1.8K</span>
              </div>
              <div>
              <FontAwesomeIcon icon={faComment} />
                <span style={{marginLeft: "5px"}}>500</span>
              </div>
            </div>
          </div>
          {/* <!-- end latest post wedgit -->
            <!-- start social media wedgit --> */}
          
          {/* <!-- end social media wedgit --> */}
        </div>
        {/* <!-- start project table --> */}
        <div class="projects rad-10 bg-white p-20 m-20">
          <h2 class="mt-0 mb-20">Projects</h2>
          <div class="responsive-table">
            <table class="fs-15 w-full">
              <thead>
                <tr>
                  <td>Name</td>
                  <td>Finish Date</td>
                  <td>Client</td>
                  <td>Price</td>
                  <td>Team</td>
                  <td>Status</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Ministry Wikipedia</td>
                  <td>10 May 2022</td>
                  <td>Ministry</td>
                  <td>$5300</td>
                  <td>
                    <img decoding="async" src={team1} alt="" />
                    <img decoding="async" src={team2} alt="" />
                    <img decoding="async" src={team3} alt="" />
                    <img decoding="async" src={team4} alt="" />
                  </td>
                  <td>
                    <span class="label btn-shape bg-orange c-white">
                      Pending
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>ElDhiaa Shop</td>
                  <td>12 Oct 2021</td>
                  <td>ElDhiaa Company</td>
                  <td>$1500</td>
                  <td>
                    <img decoding="async" src={team1} alt="" />
                    <img decoding="async" src={team2} alt="" />
                    <img decoding="async" src={team5} alt="" />
                  </td>
                  <td>
                    <span class="label btn-shape bg-blue c-white">
                      In Progress
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>Bouba App</td>
                  <td>05 Sep 2021</td>
                  <td>Bouba</td>
                  <td>$800</td>
                  <td>
                     <img decoding="async" src={team1} alt="" />
                    <img decoding="async" src={team2} alt="" />
                  </td>
                  <td>
                    <span class="label btn-shape bg-green c-white">
                      Completed
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>Mahmoud Website</td>
                  <td>22 May 2021</td>
                  <td>Mahmoud</td>
                  <td>$600</td>
                  <td>
                  <img decoding="async" src={team1} alt="" />
                    <img decoding="async" src={team5} alt="" />
                  </td>
                  <td>
                    <span class="label btn-shape bg-green c-white">
                      Completed
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>Sayed Website</td>
                  <td>24 May 2021</td>
                  <td>Sayed</td>
                  <td>$300</td>
                  <td>
                  <img decoding="async" src={team1} alt="" />
                    <img decoding="async" src={team3} alt="" />
                  </td>
                  <td>
                    <span class="label btn-shape bg-red c-white">Rejected</span>
                  </td>
                </tr>
                <tr>
                  <td>Arena Application</td>
                  <td>01 Mar 2021</td>
                  <td>Arena Company</td>
                  <td>$2600</td>
                  <td>
                  <img decoding="async" src={team1} alt="" />
                    <img decoding="async" src={team2} alt="" />
                    <img decoding="async" src={team3} alt="" />
                    <img decoding="async" src={team4} alt="" />
                  </td>
                  <td>
                    <span class="label btn-shape bg-green c-white">
                      Completed
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        {/* <!-- end project table --> */}
      </div>
    </div>
  );
}


