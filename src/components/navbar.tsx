import React from "react";
import {
  Navbar as MTNavbar,
  Collapse,
  Button,
  IconButton,
  Typography,
} from "@material-tailwind/react";
import {
  RectangleStackIcon,
  UserCircleIcon,
  CommandLineIcon,
  Squares2X2Icon,
  XMarkIcon,
  Bars3Icon,
} from "@heroicons/react/24/solid";
import { useRouter } from 'next/navigation'; // Import useRouter

interface NavItemProps {
  children: React.ReactNode;
  href?: string;
}

function NavItem({ children, href }: NavItemProps) {
  return (
    <li>
      <Typography
        as="a"
        href={href || "#"}
        target={href ? "_blank" : "_self"}
        variant="paragraph"
        className="flex items-center gap-2 font-medium"
        placeholder="NavItem Placeholder"
        onPointerEnterCapture={() => {}}
        onPointerLeaveCapture={() => {}}
      >
        {children}
      </Typography>
    </li>
  );
}

const NAV_MENU = [
  // {
  //   name: "Page",
  //   icon: RectangleStackIcon,
  // },
  {
    name: "Team",
    icon: UserCircleIcon,
  },
 // {
   // name: "Docs",
    //icon: CommandLineIcon,
    //href: "https://www.material-tailwind.com/docs/react/installation",
 // },
];

export function Navbar() {
  const [open, setOpen] = React.useState(false);
  const [isScrolling, setIsScrolling] = React.useState(false);
  const router = useRouter(); // Initialize useRouter

  const handleOpen = () => setOpen((cur) => !cur);

  const handleLogoClick = () => {
    router.push('/'); // Navigate to the main page
  };

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpen(false)
    );
  }, []);

  React.useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 0) {
        setIsScrolling(true);
      } else {
        setIsScrolling(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <MTNavbar
      shadow={false}
      fullWidth
      blurred={false}
      color={isScrolling ? "white" : "transparent"}
      className="fixed top-0 z-50 border-0"
      placeholder="Navbar Placeholder"
      onPointerEnterCapture={() => {}}
      onPointerLeaveCapture={() => {}}
    >
      <div className="container mx-auto flex items-center justify-between">
        <Typography
          color={isScrolling ? "blue-gray" : "white"}
          className="text-lg font-bold cursor-pointer" // Add cursor pointer
          placeholder="Rooted Expo Placeholder"
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
          onClick={handleLogoClick} // Add click handler
        >
          Rooted Expo
        </Typography>
        <ul
          className={`ml-10 hidden items-center gap-6 lg:flex ${
            isScrolling ? "text-gray-900" : "text-white"
          }`}
        >
          {NAV_MENU.map(({ name, icon: Icon }) => (
            <NavItem key={name}>
              <Icon className="h-5 w-5" />
              <span>{name}</span>
            </NavItem>
          ))}
        </ul>
        <div className="hidden items-center gap-4 lg:flex">
          <Button color={isScrolling ? "gray" : "white"} variant="text" placeholder="Log in Placeholder" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}>
            Log in
          </Button>
          <a href="/sponsor" target="_self">
            <Button color={isScrolling ? "gray" : "white"} placeholder="Become a Sponsor Placeholder" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}>Become a Sponsor</Button>
          </a>
        </div>
        <IconButton
          variant="text"
          color={isScrolling ? "gray" : "white"}
          onClick={handleOpen}
          className="ml-auto inline-block lg:hidden"
          placeholder="Toggle Menu Placeholder"
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
        >
          {open ? (
            <XMarkIcon strokeWidth={2} className="h-6 w-6" />
          ) : (
            <Bars3Icon strokeWidth={2} className="h-6 w-6" />
          )}
        </IconButton>
      </div>
      <Collapse open={open}>
        <div className="container mx-auto mt-4 rounded-lg bg-white px-6 py-5">
          <ul className="flex flex-col gap-4 text-gray-900">
            {NAV_MENU.map(({ name, icon: Icon }) => (
              <NavItem key={name}>
                <Icon className="h-5 w-5" />
                {name}
              </NavItem>
            ))}
          </ul>
          <div className="mt-6 flex items-center gap-4">
            <Button variant="text" placeholder="Log in Placeholder" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}>Log in</Button>
            <a href="https://www.materila-tailwind.com/blocks" target="_blank">
              <Button color="gray" placeholder="blocks Placeholder" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}>blocks</Button>
            </a>
          </div>
        </div>
      </Collapse>
    </MTNavbar>
  );
}

export default Navbar;
