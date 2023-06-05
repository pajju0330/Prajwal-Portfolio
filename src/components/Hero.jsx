import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { shaq, bwmap, worldmap } from "../assets";
import Laptops from "./canvas/Laptops";

const Hero = () => {
	return (
		<>
			<div className='absolute top-0 left-0 z-0 h-[100vh] w-screen'>
				<img
					src='https://images.unsplash.com/photo-1626908013351-800ddd734b8a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=386&q=80'
					alt='bg'
					className='w-full h-full sm:block hidden object-cover'
				/>
			</div>
			<div className='absolute top-0 left-0 z-0 h-[100vh] w-screen'>
				<img
					src='https://images.unsplash.com/photo-1626908013351-800ddd734b8a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=386&q=80'
					alt='bg'
					className='w-full h-full sm:hidden block object-cover'
				/>
			</div>
			<section
				className='relative flex sm:flex-row flex-col w-full h-screen mx-auto 
        sm:bg-hero bg-hero-mobile overflow-hidden'>
				<div
					className={`absolute inset-0 sm:top-[250px] top-[150px] 
          lg:top-[150px] xl:top-[250px] ${styles.paddingX} 
          max-w-7xl mx-auto flex flex-row items-start
          justify-between gap-3`}>
					<div className='flex flex-col justify-center items-center mt-5 ml-3'>
						<div className='w-5 h-5 rounded-full bg-[#0a0a0a] sm:hidden' />
						<div className='w-1 sm:h-80 h-40 bw-gradient sm:hidden' />
					</div>

					<div>
						<h1
							className={`${styles.heroHeadText} text-eerieBlack font-poppins uppercase`}>
							Myself{" "}
							<span
								className='sm:text-battleGray sm:text-[90px] 
                text-eerieBlack text-[50px] font-mova
                font-extrabold uppercase'>
								Prajwal
							</span>
						</h1>
						<p className={`${styles.heroSubText} mt-2 text-eerieBlack`}>
							Creating digital experiences with elagant code,{" "}
							<br className='sm:block hidden' />
							Merging functionality with creativity.
						</p>
					</div>

					<div
						className='w-screen flex flex-col items-start 
            justify-center sm:-ml-[3rem] xxs:mt-4'>
					</div>  
				</div>

				<div
					className='absolute xs:bottom-10 bottom-32 w-full 
          flex justify-center items-center'>
					<a href='#about'>
						<div
							className='w-[35px] h-[64px] rounded-3xl border-4 
             border-dim flex
            justify-center items-start p-2'>
							<motion.div
								animate={{
									y: [0, 24, 0],
								}}
								transition={{
									duration: 1.5,
									repeat: Infinity,
									repeatType: "loop",
								}}
								className='w-3 h-3 rounded-full bg-taupe mb-1'
							/>
						</div>
					</a>
				</div>

				{/* Your image comes here. Feel free to remove image if you don't plan to have one.*/}
				<div>{/*3js  */}</div>
			</section>
		</>
	);
};

export default Hero;
