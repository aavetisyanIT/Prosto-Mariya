import React, { useState } from 'react';
import Link from 'next/link';

export default function NavBar() {
	const [navBarToggle, setNavBarToggle] = useState(true);
	const [subMenuToggle, setSubMenuToggle] = useState(false);

	//toggle NavBar
	const navBarClickHandle = () => {
		setNavBarToggle(!navBarToggle);
	};
	//toggle SideBar
	const handleSubMenuToggle = () => {
		setSubMenuToggle(!subMenuToggle);
	};
	return (
		<>
			<div id='sidebar' className={navBarToggle ? 'active' : 'inactive'}>
				<a onClick={navBarClickHandle} href='#sidebar' className='toggle'>
					MenuButton
				</a>
				<div className='inner'>
					{/* Menu */}
					<nav id='menu'>
						<header className='major'>
							<h2>Menu</h2>
						</header>
						<ul>
							<li>
								<Link href='/'>Home</Link>
							</li>
							<li>
								<Link href='/about'>About Us</Link>
							</li>
							<li>
								<Link href='/blog'>Blog</Link>
							</li>
							<li>
								<span
									onClick={handleSubMenuToggle}
									className={
										subMenuToggle ? 'opener active' : 'opener'
									}
								>
									Services
								</span>
								<ul>
									<li>
										<Link href='/services'>Alterations</Link>
									</li>
									<li>
										<Link href='/services'>Mending</Link>
									</li>
									<li>
										<Link href='/services'>Hemming</Link>
									</li>
									<li>
										<Link href='/services'>Custom Clothing</Link>
									</li>
									<li>
										<Link href='/services'>
											Adding Buttons and Zippers
										</Link>
									</li>
								</ul>
							</li>
							<li>
								<Link href='/contactUs'>Contact Us</Link>
							</li>
						</ul>
					</nav>
					{/* Section */}
					<section>
						<header className='major'>
							<h2>Ante interdum</h2>
						</header>
						<div className='mini-posts'>
							<article>
								<a href='#' className='image'>
									<img src='#' alt='' />
								</a>
								<p>
									Aenean ornare velit lacus, ac varius enim lorem
									ullamcorper dolore aliquam.
								</p>
							</article>
							<article>
								<a href='#' className='image'>
									<img src='#' alt='' />
								</a>
								<p>
									Aenean ornare velit lacus, ac varius enim lorem
									ullamcorper dolore aliquam.
								</p>
							</article>
							<article>
								<a href='#' className='image'>
									<img src='#' alt='' />
								</a>
								<p>
									Aenean ornare velit lacus, ac varius enim lorem
									ullamcorper dolore aliquam.
								</p>
							</article>
						</div>
						<ul className='actions'>
							<li>
								<a href='#' className='button'>
									More
								</a>
							</li>
						</ul>
					</section>
					{/* Section */}
					<section>
						<header className='major'>
							<h2>Get in touch</h2>
						</header>
						<p>
							We love to hear from customers, both old and new. Send us a
							message with details on your request, or any questions you
							have on our services. We will get back to you as soon as
							possible with an answer.
						</p>
						<ul className='contact'>
							<li className='icon solid fa-envelope'>
								<a>atelierprostomariya@gmail.com</a>
								<br />
								<a href='mailto: atelierprostomariya@gmail.com'>
									Send Email
								</a>
							</li>
							<li className='icon solid fa-phone'>(773) 603-3396</li>
							<li className='icon solid fa-home'>Rosemont, IL 60018</li>
						</ul>
					</section>
					{/* Footer */}
					<footer id='footer'>
						<p className='copyright'>© Untitled. All rights reserved.</p>
					</footer>
				</div>
			</div>
		</>
	);
}