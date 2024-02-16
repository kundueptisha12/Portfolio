import Head from "next/head";
import {BsFillMoonStarsFill} from 'react-icons/bs';
import {AiFillFacebook, AiFillLinkedin, AiFillGithub} from 'react-icons/ai';
import Image from "next/image";
import deved from "../public/dev-ed-wave.png";
import design from "../public/design.png";
import code from "../public/code.png";
import consulting from "../public/consulting.png";
import notepadClone2 from "../public/notepad clone2.png";
import social1  from "../public/social 1.png";
import social2 from "../public/social 2.png";
import notepadClone from "../public/notepad clone.png";
import instagramClone2 from "../public/instagram clone2.png";
import instagramClone1 from "../public/instagram clone1.png";
import React,{ useState } from "react";


export default function Home(){
    const [showResume, setShowResume] = useState(false);
  
    const handleResumeClick = () => {
      setShowResume(true);
    };
    const openLinkedInProfile = () => {
      const linkedInUrl = "https://www.linkedin.com/in/eptisha-kundu-b93538226/";
    
      window.open(linkedInUrl, "_blank");
    };
    const openGitHub = () => {
      const githubUrl = "https://github.com/kundueptisha12";
        
      window.open(githubUrl, "_blank");
    };
    const openFacebook = () => {
      const facebookUrl = "https://www.facebook.com/eptisha.kundu/";
        
      window.open(facebookUrl, "_blank");
    };
  const [darkMode, setDarkMode] = useState(false);
return (
  <div className={darkMode ? "dark" : ""}>
    <Head>
      <title>EptishaKundu_Portfolio</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" integrity="sha512-" crossorigin="anonymous" />

    </Head>
   <main className="bg-zinc-950 px-10 md:px-20 lg:px-40 dark:bg-gray-900">
    <section className= "min-h-screen">
      <nav className="py-10 mb-12 flex justify-between">
        <h1 className="text-xl font-burtons text-cyan-50">eptisha</h1>
        <ul className="flex items-center">
          <li>
            <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className="cursor-pointer
            text-2xl"/>
          </li>
          <li>
          
          <button
                  className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
                  onClick={handleResumeClick}
                >
                  Resume
                </button>
          </li>

        </ul>
        </nav>
      <div className="flex justify-center" >
       <div class="w-max">
       <h1
      class=" animate-typing overflow-hidden whitespace-nowrap bg-gradient-to-r from-teal-300 pr-5 text-5xl text-cyan-50 font-bold">
      Hey There!
       </h1>
      </div>
      </div>

      <div className="text-center ">
        <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl ">Eptisha Kundu</h2>
        <h3 className="text-2xl text-cyan-50 py-2 md:text-3xl ">Developer and designer.</h3>
        <p className="text-md py-5 leading-8 text-gray-400 md:text-xl max-w-lg mx-auto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus sint laudantium eveniet repellat voluptatibus amet omnis, iusto, vero in, tempore aliquam animi modi. Rerum harum dolorum, dolores accusantium quae velit.</p>
      </div>
      {showResume && (
            <div>
              // <iframe
                src="/resume.pdf"
                width="100%"
                height="600"
                style={{ border: 'none' }}
              />
            </div>
          )}
      <div className="text-5xl flex justify-center gap-16 py-3 text-cyan-100">
        <div>
        <a href="#" onClick={openFacebook} rel="noopener noreferrer">
        <AiFillFacebook/>
        </a>
        </div>
        <div>
        <a href="#" onClick={openLinkedInProfile} rel="noopener noreferrer">
       <AiFillLinkedin />
        </a>
        </div>
        <div>
        <a href="#" onClick={openGitHub} rel="noopener noreferrer">
          <AiFillGithub/>
        </a>
        </div>
      </div>
      <div className="relative mx-auto bg-gradient-to-b from-teal-400 rounded-full w-80 h-80 mt-20 overflow-hiddenv md:h-96 md:w-96 drop-shadow-[0_10px_10px_rgb(20,184,166)] ">
        <Image src={deved} layout="" objectfit="cover"/>
      </div>

      <div>
        <h3 className="text-3xl py-1 text-cyan-50">Services I offer</h3>
        <p className="text-md py-2 leading-8 text-gray-400 ">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non officiis porro blanditiis veniam cum provident iusto nihil hic dolorum minima quo tempora aut explicabo quod, nesciunt ullam dolorem, illum eaque?
        <span className="text-teal-500">agencies</span>
        consulted for <span className="text-teal-500">startup</span>
        hello.
        </p>
      </div>
      </section> 
<center> 
    <h1 class="text-cyan-50 text-3xl font-burtons pt-6"> 
        Skills
    </h1>   
    <div className="py-4 space-x-3 pt-5"> 
        <span class="inline-flex w-32 h-15 bg-teal-700 rounded-full text-black pt-2 items-center"><img src="https://logos-world.net/wp-content/uploads/2022/07/Java-Logo.png " className="w-20 h-14 pt-2 "/>Java</span> 
        <span class="inline-flex w-32 h-15 bg-teal-700 rounded-full text-black pt-2 items-center "><img src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" className="w-14 h-14  px-2"/>ReactJs</span> 
        <span class="inline-flex w-32 h-15 bg-teal-700 rounded-full text-black pt-2 items-center "><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbcJnmEPXVEGoR3B5PsjAewPuyVU1xTlo3WoDT63qpBw&s" className="w-18 h-14  rounded-full px-2"/>C</span> 
        <span class="inline-flex w-32 h-15 bg-teal-700 rounded-full text-black pt-2 items-center pl-2"><img src="https://i.pinimg.com/originals/92/60/dd/9260dd459aa4566cfa25e86a3f10ea1b.png" className="w-20 h-14 rounded-full px-1 "/>Python</span>
    </div>  
</center>
        <center>
          <div className="py-4 space-x-3 ">
          <span class="inline-flex w-32 h-15 bg-teal-700 rounded-full text-black pt-2 items-center "><img src="https://w7.pngwing.com/pngs/747/798/png-transparent-mysql-logo-mysql-database-web-development-computer-software-dolphin-marine-mammal-animals-text-thumbnail.png" className="w-13 h-14  rounded-full px-2 "/>SQL</span> 
<span class="inline-flex w-32 h-15 bg-teal-700 rounded-full text-black pt-2 items-center "><img src="https://w7.pngwing.com/pngs/201/90/png-transparent-logo-html-html5.png" className="w-14 h-14 rounded-full px-2"/>HTML</span> 
<span class="inline-flex w-32 h-15 bg-teal-700 rounded-full text-black pt-2 items-center "><img src="https://e1.pngegg.com/pngimages/326/868/png-clipart-css3-badge-blue-and-white-css-icon-thumbnail.png" className="w-14 h-14 rounded-full px-2"/>CSS</span> 
          </div>
        </center>

      {/* <div className="flex items-center justify-center"> */}
        {/* <div className="rounded-xl bg-gray-600 drop-shadow-[0_5px_5px_rgb(20,184,166)]"> */}
          {/* <div className=" rounded-xl text-black">        */}
             {/* <SkillsContainer skillsData={skillsData} /> */}
          {/* </div> */}
      
    {/* </div> */}
    {/* </div> */}
    // 
      <section >
      <h1 class="text-cyan-50 text-3xl font-burtons pt-6 text-center font-semibold"> 
         Projects
      </h1>   
      <div className="lg:flex gap-10 items-center justify-center " >
      <a href="https://github.com/kundueptisha12/instagram-clone" target="_blank" rel="noopener noreferrer">
      <div className="text-center p-10 rounded-xl my-10 group bg-gradient-to-b from-cyan-500 to-teal-300 hover:drop-shadow-[0_10px_10px_rgb(20,184,166)] shadow-lg transform hover:transition-y-1 hover:scale-110 transiton duration-150">
      <Image src={instagramClone2} width={350} height={350} className="rounded-lg pb-5"/>
      <h3 className="text-lg  pt -8 pb-2 text-zinc-900 font-semibold">Instagram Clone</h3>
      <p className="py-2 text-gray-400
       ">
      Hellloooooooooooooo
    </p>
    <h4 className="py-4  text-teal-600">
      Design tools I use
    </h4>
    </div>
    </a>
          <a href="https://github.com/kundueptisha12/notepad" target="_blank" rel="noopener noreferrer">
        <div className="text-center  p-10 rounded-xl my-10 bg-gradient-to-b from-cyan-500 to-teal-300 hover:drop-shadow-[0_10px_10px_rgb(20,184,166)] shadow-lg transform hover:transition-y-1 hover:scale-110 transiton duration-150">
          <Image src={notepadClone} width={350} height={350} alt="" className="rounded-lg pb-5"/>
          <h3 className="text-lg  pt -8 pb-2 text-zinc-900 font-semibold">Notepad Clone</h3>
          <p className="py-2 text-gray-400">
            Hellloooooooooooooo
          </p>
          <h4 className="py-4  text-teal-600">
            Design tools I use
          </h4>
          </div>
          </a>
          <a href="https://github.com/kundueptisha12/My-page" target="_blank" rel="noopener noreferrer">
        <div className="text-center p-10 rounded-xl my-10 bg-gradient-to-b from-cyan-500 to-teal-300 hover:drop-shadow-[0_10px_10px_rgb(20,184,166)] shadow-lg transform hover:transition-y-1 hover:scale-110 transiton duration-150">
          <Image src={social1} width={350} height={350} className="rounded-lg pb-5"/>
          <h3 className="text-lg  pt -8 pb-2 text-zinc-900 font-semibold">Social App</h3>
          <p className="py-2 text-gray-400">
            Hellloooooooooooooo
          </p>
          <h4 className="py-4  text-teal-600">
            Design tools I use
          </h4>
        </div>
      </a>
     </div>
     </section>

    <section >
      <div>
        <h3 className="text-3xl py-1">Portfolio</h3>
        <p className="text-md py-2 leading-8 text-gray-800 ">Lor
        <span className="text-teal-500">agencies</span>
        consulted for <span className="text-teal-500">startup</span>
        </p>
      </div>
      </section>
      <div className=" mx-auto  max-w-screen-sm mb-10"> 
   <ol class="relative border-s border-gray-200 dark:border-red-700 ">                  
    <li class="mb-10 ms-4">
        <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-red-900 dark:bg-red-700"></div>
        <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-red-500">June 2020 - June 2023</time>
        <h3 class="text-lg font-semibold text-red-900 dark:text-white">Asansol Engineering College</h3>
        <p class="mb-4 text-base font-normal text-red-500 dark:text-white">Bachelor of Computer Applications </p>
        <p>C.G.P.A : 8.63</p>
        <a href="#" class="inline-flex items-center px-4 py-2 text-sm font-medium text-red-900 bg-white border border-gray-200 rounded-lg
         hover:bg-gray-100 hover:text-blue-700 
        focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400
         dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">Learn more <svg class="w-3 h-3 ms-2 
         rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
  </svg></a>
    </li>
           
    <li class="mb-10 ms-4">
        <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700">

        </div>
        <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">June 2020</time>
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Santinagar Vidhyamandir (H.S)</h3>
        <p class="text-base font-normal text-gray-500 dark:text-gray-400">Percentage : 80</p>
    </li>
         
    <li class="ms-4">
        <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700">
          
        </div>
        <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">June 2018</time>
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Manimala Girls' High School
        </h3>
        <p class="text-base font-normal text-gray-500 dark:text-gray-400">Percentage : 69.5</p>
    </li>
    </ol>
</div>


       {/* <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap"> */}
        {/* <div className="basis-1/3 flex-1"><Image src={instagramClone1} className="rounded-lg object-cover " width={'100%'}height={'100%'} layout="responsive"/></div> */}
        {/* <div className="basis-1/3 flex-1"><Image src={instagramClone2} className="rounded-lg object-cover " width={'100%'}height={'100%'} layout="responsive"/></div> */}
        {/* <div className="basis-1/3 flex-1"><Image src={notepadClone} className="rounded-lg object-cover " width={'100%'}height={'100%'} layout="responsive"/></div> */}
        {/* <div className="basis-1/3 flex-1"><Image src={social1} className="rounded-lg object-cover " width={'100%'}height={'100%'} layout="responsive"/></div> */}
        {/* <div className="basis-1/3 flex-1"><Image src={social2} className="rounded-lg object-cover " width={'100%'}height={'100%'} layout="responsive"/></div> */}
        {/* <div className="basis-1/3 flex-1"><Image src={notepadClone2} className="rounded-lg object-cover " width={'100%'}height={'100%'} layout="responsive"/></div> */}
      {/* </div> */}
    {/* </section> */}


    <section className=" mx-auto w-9/12 mb-9 ">
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-tr from-teal-700 to-zinc-600 py-20  rounded-lg">
      <div className="container mx-auto text-center text-white w-3/4">
        <h2 className="text-4xl font-bold mb-6">Contact Us</h2>
        <p className="text-lg mb-8">We'd love to hear from you. Reach out to us for any inquiries or questions.</p>
        <div className="flex justify-center">
          <form className="w-full max-w-lg">
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="name">
                  Name
                </label>
                <input
                  className="appearance-none block w-full bg-white text-zinc-950 border border-zinc-800 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-zinc-600"
                  id="name"
                  type="text"
                  placeholder="Your Name"
                />
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  className="appearance-none block w-full bg-white text-zinc-950 border border-zinc-800 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-zinc-600"
                  id="email"
                  type="email"
                  placeholder="Your Email"
                />
              </div>
            </div>
            <div className="mb-6">
              <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                className="appearance-none block w-full bg-white text-zinc-950 border border-zinc-600 rounded py-3 px-4 leading-tight focus:outline-none focus:border-zinc-800"
                id="message"
                rows="4"
                placeholder="Your Message"
              ></textarea>
            </div>
            <button
              className="bg-teal-900 text-cyan-50 hover:bg-teal-400 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
      </div>
    </section>
 <div className=" mx-auto"> 
<ol class="relative border-s border-gray-200 dark:border-red-700 ">                  
    <li class="mb-10 ms-4">
        <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-red-900 dark:bg-red-700"></div>
        <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-red-500">February 2022</time>
        <h3 class="text-lg font-semibold text-red-900 dark:text-white">Application UI code in Tailwind CSS</h3>
        <p class="mb-4 text-base font-normal text-red-500 dark:text-white">Get access to over 20+ pages including a dashboard layout, charts, 
        kanban board, calendar, and pre-order E-commerce & Marketing pages.</p>
        <a href="#" class="inline-flex items-center px-4 py-2 text-sm font-medium text-red-900 bg-white border border-gray-200 rounded-lg
         hover:bg-gray-100 hover:text-blue-700 
        focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400
         dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">Learn more <svg class="w-3 h-3 ms-2 
         rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
  </svg></a>
    </li>
    <li class="mb-10 ms-4">
        <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700">

        </div>
        <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">March 2022</time>
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Marketing UI design in Figma</h3>
        <p class="text-base font-normal text-gray-500 dark:text-gray-400">All of the pages and components are first designed in Figma and 
        we keep a parity between the two versions even as we update the project.</p>
    </li>
    <li class="ms-4">
        <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700">

        </div>
        <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">April 2022</time>
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">E-Commerce UI code in Tailwind CSS</h3>
        <p class="text-base font-normal text-gray-500 dark:text-gray-400">Get started with dozens of web components and interactive 
        elements built on top of Tailwind CSS.</p>
    </li>
</ol>
</div>  

    <footer className="bg-black">
          <p>dguhdi</p>
    </footer>

  </main>
 </div>

);
}
