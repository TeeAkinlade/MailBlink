<<<<<<< HEAD
import React from "react";

const dashboard = () => {
  return <div>dashboard</div>;
};

export default dashboard;
=======
'use client';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Home from './components/Home';

export default function page() {
	return (
		<>
			{/* Sidebar component remains static above all elements on the page */}
			<main className='flex overflow-hidden h-screen w-screen'>
				{/* <Sidebar /> */}
				<Sidebar />
				{/* Main Dashboard display area */}
				<div className='flex flex-col overflow-x-hidden  gap-4 md:gap-0 w-full h-full overflow-y-auto '>
					{/* Navbar COMPONENT goes here */}

					<Navbar />

					{/* When routing begins we would use the <Outlet/> functionality to render different pages */}

					<Home />
				</div>
			</main>
		</>
	);
}
>>>>>>> 03691fac21fe7c9d1cbc741974d76de17d85be51
