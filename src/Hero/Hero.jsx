import ContactIcons from "./ContactIcons";

const Hero = () => {
    return (
    <div className=" flex justify-between items-center w-screen h-screen overflow-hidden">
        <div className="absolute z-10 h-fit w-96 left-40 rounded-3xl p-5 shadow-xl bg-transparent">
                <h1 className="text-5xl font-bold text-center dark:text-white">
                 and, yes 
                    <br/> I am the <b>CODER</b>
                </h1>

                <hr className="text-white"/>
                <p className="text-lg text-center dark:text-white">
                    Passionate and self-motivated IT Diploma student specializing in full-stack web development.
                    Skilled in modern frontend and backend technologies.  
                    Eager to work on real-world challenges, contribute to innovative teams, and continuously learn in the tech domain.
                </p>
        </div>
        <ContactIcons/>
        <div className=" relative w-screen h-screen ">
            <img
            src="bg11.png"
            alt="Logo"
            className=" absolute right-[-80px] top-0 h-full object-cover overflow-visible"
            />
        </div>
    </div> 
        
    );
};

export default Hero;