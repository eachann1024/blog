import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from '@nextui-org/react'
import { AcmeLogo } from './AcmeLogo.jsx'

export default function App() {
	return (
		<Navbar className="w-full b-b b-b-gray-2 fixed bg-white">
			<Link color="foreground" href="/">
				<NavbarBrand>
					<AcmeLogo />
					<p className="font-bold">Eachann</p>
				</NavbarBrand>
			</Link>
			<NavbarContent className="sm:flex gap-4" justify="center">
				{/* <NavbarItem>
					<Link color="foreground" href="#">
						Blog[未开发]
					</Link>
				</NavbarItem> */}
				<NavbarItem isActive>
					<Link color="foreground" href="/books" aria-current="page">
						Books
					</Link>
				</NavbarItem>
				{/* <NavbarItem>
					<Link color="foreground" href="#">
						Integrations[未开发]
					</Link>
				</NavbarItem> */}
			</NavbarContent>
			{/* <NavbarContent justify="end">
				<NavbarItem className="hidden lg:flex">
					<Link href="#">Login</Link>
				</NavbarItem>
				<NavbarItem>
					<Button as={Link} color="primary" href="#" variant="flat">
						Sign Up
					</Button>
				</NavbarItem>
			</NavbarContent> */}
		</Navbar>
	)
}
