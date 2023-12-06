import { MdSearch } from 'react-icons/md';
import { IoPersonOutline } from 'react-icons/io5';
export default function Navbar() {
	return (
		<div>
			<nav className='flex justify-between items-center p-4  bg-[#ffffffc1] md:bg-transparent w-full shadow-md md:shadow-none sticky md:relative top-0'>
				<div className='bg-[#ffffffc8] shadow-md rounded-md md:flex gap-8 justify-between px-3 py-0 items-center hidden  cursor-pointer hover:scale-105 duration-500 ease-in-out'>
					<input
						type='text'
						placeholder='Search'
						className='outline-none bg-transparent px-3 py-2 w-full text-[0.8rem] font-poppins text-black placeholder-accent_3 '
					/>

					<MdSearch className='text-ui_primary font-[900] h-5 w-5 cursor-pointer' />
				</div>
				<div className=' hidden rounded-full'>
					{/* <Image
								src='/assets/pexels-vlad-bagacian-1368382.jpg'
								width={50}
								height={40}
								alt='Profile Icon'
								className='text-ui_primary italic rounded-full'
							/> */}
					<IoPersonOutline className='text-ui_primary' />
				</div>
			</nav>
		</div>
	);
}
