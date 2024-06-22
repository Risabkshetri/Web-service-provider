import './style.css';
import Profile from '../../assets/profile.png'
import { useState, useEffect } from 'react';
import HoverCard from './Card'
function Hero() {
  // skills
  const skills = ["A Web Designer", "A Frontent Developer", "A Blogger", "A Freelancer", "A Student"];
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');

  useEffect(() => {
    let typingSpeed = 150;
    let deletingSpeed = 40;
    let nextSkillDelay = 2000;
    let typingTimeout;

    if (!isDeleting && charIndex < skills[index].length) {
      typingTimeout = setTimeout(() => {
        setText(skills[index].substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, typingSpeed);
    } else if (isDeleting && charIndex > 0) {
      typingTimeout = setTimeout(() => {
        setText(skills[index].substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      }, deletingSpeed);
    } else if (!isDeleting && charIndex === skills[index].length) {
      typingTimeout = setTimeout(() => setIsDeleting(true), nextSkillDelay);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setIndex((index + 1) % skills.length);
    }

    return () => clearTimeout(typingTimeout);
  }, [charIndex, isDeleting, index]);

  
 
  return (
    <section className='w-full h-screen  flex flex-col items-center  py-14 pt-24 bg-slate-100'>
      <div className="w-full h-1/2 flex flex-col items-center justify-center">
           <img className='h-56 w-40 rounded-full shadow-black shadow-md' src={Profile} alt="Risab kshetri" />
           <h1 className="text-3xl font-bold mt-4">Risab Kshetri</h1>
           <div className="text-2xl font-bold">
            <span>I am </span>
       <span className='text-blue-700'> {text}</span>
      <span className="blinking-cursor">|</span>
    </div>
      </div>
      {/* <div className="w-full flex flex-row gap-4 mt-6 items-center justify-center">
      <button onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)} className='text-lg
      bg-blue-700 text-white p-2 rounded-lg shadow-lg'>Hire Me</button>
      <button  className='text-lg
      bg-pink-700 text-white p-2 rounded-lg shadow-lg'>Connect with Me</button>
      {isHovered && (
        <div className="absolute mt-4 w-48 p-4 bg-white border border-gray-200 rounded-md shadow-lg">
          <p>This is the content that appears on hover.</p>
        </div>
      )}
      </div> */}
      <div className="mt-10">
          <HoverCard/>
        </div>
    </section>
  )
}

export default Hero