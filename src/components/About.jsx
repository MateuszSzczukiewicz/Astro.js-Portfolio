import React from 'react'
import image1 from '../assets/images/image1.jpg'

export const About = () => {
	const [isOpen, setIsOpen] = React.useState(false)
	const tl = React.useRef(null)
	const curtainRef = React.useRef(null)
	const titleRef = React.useRef(null)
	const contentRef = React.useRef(null)

	React.useEffect(() => {
		tl.current = gsap.timeline({ paused: true })

		tl.current.addLabel('start').to(
			[curtainRef.current.children, titleRef.current, contentRef.current],
			{
				x: '-50vw',
				duration: 0.5,
				easing: 'cubic-bezier(.47,.93,0,1.02)',
				stagger: 0.03
			},
			'start'
		)
	}, [])

	const handleClick = () => {
		if (isOpen) {
			tl.current.reverse()
			setIsOpen(!isOpen)
		} else {
			tl.current.play()
			setIsOpen(!isOpen)
		}
	}

	return (
		<>
			<div ref={titleRef} className="flex h-full w-[50vw] items-center justify-center">
				<span className="p-10 text-center text-[105px] font-bold">Dowiedz się więcej</span>
			</div>
			<div
				ref={curtainRef}
				onClick={handleClick}
				className="absolute right-0 z-20 flex h-full w-1/2 cursor-pointer items-center justify-center"
			>
				<span className="z-10 text-[105px] font-bold text-white">O mnie</span>
			</div>
			<div
				ref={contentRef}
				className="absolute right-[-50vw] z-20 flex h-full w-[50vw] items-center justify-center overflow-hidden"
			>
				<p className="max-w-prose text-xl">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut blanditiis consectetur culpa
					cumque cupiditate dolorum ea fuga fugiat harum iusto magni natus nobis nostrum odit,
					officia porro quam sunt vitae?
				</p>
			</div>
		</>
	)
}
