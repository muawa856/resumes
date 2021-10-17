import React from 'react'
import './Hero.css'
const Hero = () => {
    return (
        <div>
            <section className="text-gray-600 body-font profile">
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div
                        className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium  font-bold text-gray-900 text-danger font-style: italic" style={{fontFamily:'sans-serif',cursor:'pointer'}}>Muhammad Usman Aslam Muawa
                            Wains
                            <br className="hidden lg:inline-block" />
                        </h1>
                        <p className="mb-8 leading-relaxed font-style: italic   text-left "style={{color:'white'}}>Student of Software Engineering at the University of Central
                            Punjab. I have a lot of skills related to the C++ language included Programming fundamentals,
                            Object-Oriented Programming, and Data Structure and algorithm. And also with that the skills of Ms.
                            Office. In Addition, Web front and back end development with HTML,CSS, JavaScript and node.js. I am
                            sure I will be able to contribute something capable to the growth of the company. Ability to work
                            independently or as a team member. I do the task properly at the time given by the senior. Manage
                            time and resources effectively. Highly self-motivated, energetic, positive, fast learner,
                            enthusiastic and hardworking.</p>
                        <div className="flex justify-center">
                            <button
                                className="inline-flex text-white bg-indigo-500  italic border-0 py-2 px-6 focus:outline-none hover:bg-indigo-700 rounded text-lg mx-3 contact">Biography</button>
                            <button
                                className="inline-flex text-white bg-indigo-500 border-0  italic py-2 px-6 focus:outline-none hover:bg-indigo-700 rounded text-lg mx-3 contact"><a href="/contact">Contact me</a></button>
                        </div>
                    </div>
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 imag">
                        <div className="imagenav"></div>
                        {/* <img className="object-cover object-center rounded" alt="hero" src="https://source.unsplash.com/1600x900/?laptop,hacking" /> */}
                    </div>
                </div>
            </section>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col text-center w-full mb-20">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900 font-style: italic ">Muawa Gallery</h1>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base italic">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom.</p>
                    </div>
                    <div className="flex flex-wrap -m-4">
                        <div className="lg:w-1/3 sm:w-1/2 p-4">
                            <div className="flex relative">
                                <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="https://source.unsplash.com/1600x900/?laptop,computer" />
                                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                                    <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
                                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Muawa wains</h1>
                                    <p className="leading-relaxed italic">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/3 sm:w-1/2 p-4">
                            <div className="flex relative">
                                <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="https://source.unsplash.com/1600x900/?graphics" />
                                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                                    <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
                                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Muawa856</h1>
                                    <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/3 sm:w-1/2 p-4">
                            <div className="flex relative">
                                <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center object-cover" src="https://source.unsplash.com/1600x900/?robots" />
                                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                                    <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
                                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">will be back</h1>
                                    <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/3 sm:w-1/2 p-4">
                            <div className="flex relative">
                                <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="https://source.unsplash.com/1600x900/?videos" />
                                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                                    <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
                                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Usman </h1>
                                    <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/3 sm:w-1/2 p-4">
                            <div className="flex relative">
                                <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="https://source.unsplash.com/1600x900/?laptop" />
                                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                                    <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
                                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Holden Caulfield</h1>
                                    <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/3 sm:w-1/2 p-4">
                            <div className="flex relative">
                                <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="https://source.unsplash.com/1600x900/?coding,robots" />
                                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                                    <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
                                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Alper Kamu</h1>
                                    <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/3 sm:w-1/2 p-4">
                            <div className="flex relative">
                                <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="https://source.unsplash.com/1600x900/?coding,laptop" />
                                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                                    <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
                                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Alper Kamu</h1>
                                    <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/3 sm:w-1/2 p-4">
                            <div className="flex relative">
                                <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="https://source.unsplash.com/1600x900/?hacking,laptop" />
                                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                                    <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
                                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Alper Kamu</h1>
                                    <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/3 sm:w-1/2 p-4">
                            <div className="flex relative">
                                <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="https://source.unsplash.com/1600x900/?technology" />
                                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                                    <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
                                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Alper Kamu</h1>
                                    <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Hero
