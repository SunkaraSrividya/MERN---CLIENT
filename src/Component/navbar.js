import React from "react";
import { Link } from "react-router-dom";
export default function Navbar(){
return(
<div>
<nav class="bg-blue-600 border-gray-200 dark:bg-gray-900">
<div class="max-w-screen-xl flex flex-wrap items-center justifybetween
mx-auto p-4">
<a href="" class="flex items-center space-x-3 rtl:space-xreverse">
<img src="https://png.pngtree.com/png-vector/20230304/
ourmid/pngtree-colorful-blog-speech-bubble-vector-pngimage_
6633021.png"
class="h-10 w-14" alt="Blogging SIte" />
<span class="self-center text-2xl font-semibold
whitespace-nowrap text-white">Bloggy</span>
</a>
<button data-collapse-toggle="navbar-default" type="button"
class="inline-flex items-center p-2 w-10 h-10 justify-center textsm
text-gray-500 rounded-lg md:hidden hover:bg-gray-100
focus:outline-none focus:ring-2 focus:ring-gray-200 dark:textgray-
400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" ariacontrols="
navbar-default" aria-expanded="false">
<span class="sr-only">Open main menu</span>
<svg class="w-5 h-5" aria-hidden="true" xmlns="http://
www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
<path stroke="currentColor" stroke-linecap="round"
stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1
13h15"/>
</svg>
</button>
<div class="hidden w-full md:block md:w-auto" id="navbardefault">
<ul class=" text-white font-medium flex flex-col p-4 md:p-0
mt-4 border border-gray-100 md:flex-row md:space-x-8 rtl:spacex-
reverse md:mt-0 md:border-0 ">
<li>
<Link to='/about'> About</Link>
</li>
<li>
<Link to='/register'> Register</Link>
</li>
<li>
<Link to='/login'>Login</Link>
</li>
</ul>
</div>
</div>
</nav>
</div>
)
}
