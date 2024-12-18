import React from "react";
import '../app/navbar.css'
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
  XMarkIcon,
  Bars3Icon,
} from "@heroicons/react/24/solid";
import { useRouter, usePathname } from 'next/navigation';
import Image from 'next/image';

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

// NAV_MENU array with commented-out items included
const NAV_MENU: { name: string; icon: React.ElementType }[] = [
  // {
  //   name: "Page",
  //   icon: RectangleStackIcon,
  // },
  // {
  //   name: "Team",
  //   icon: UserCircleIcon,
  // },
  // {
  //   name: "Docs",
  //   icon: CommandLineIcon,
  //   href: "https://www.material-tailwind.com/docs/react/installation",
  // },
];

export function Navbar() {
  const [open, setOpen] = React.useState(false);
  const [isScrolling, setIsScrolling] = React.useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const handleOpen = () => setOpen((cur) => !cur);

  const handleLogoClick = () => {
    router.push('/');
  };

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpen(false)
    );
  }, []);

  React.useEffect(() => {
    function handleScroll() {
      // If we are not on the root path, we treat it as if we've scrolled already
      if (pathname !== '/') {
        setIsScrolling(true);
      } else {
        // On the root path, revert to original behavior
        if (window.scrollY > 0) {
          setIsScrolling(true);
        } else {
          setIsScrolling(false);
        }
      }
    }

    handleScroll(); // Call immediately to set initial state
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  return (
    <MTNavbar
      shadow={false}
      fullWidth
      blurred={true}
      color="transparent"
      className={`fixed top-0 z-50 w-full h-20 ${isScrolling ? 'bg-black bg-opacity-50 backdrop-blur-md' : 'bg-transparent'} no-padding no-margin`}
      placeholder="Navbar Placeholder"
      onPointerEnterCapture={() => {}}
      onPointerLeaveCapture={() => {}}
    >
      <div className="container mx-auto flex items-center justify-between px-0 md:px-0.5 py-0 h-full">
        <Image
          src="/image/rootedlogo1.png"
          alt="Rooted Expo Logo"
          className="cursor-pointer w-auto"
          onClick={handleLogoClick}
          width={100}
          height={100}
        />

        <ul
          className={`hidden items-center gap-6 lg:flex ${
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
          <a href="/sponsor" target="_self">
            <Button
              color={isScrolling ? "gray" : "white"}
              placeholder="Become a Sponsor Placeholder"
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
            >
              Become a Sponsor
            </Button>
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
      <Collapse open={open} className="lg:hidden">
        <div className="container mx-auto bg-white px-1 py-1">
          <ul className="flex flex-col gap-4 text-gray-900">
            {NAV_MENU.map(({ name, icon: Icon }) => (
              <NavItem key={name}>
                <Icon className="h-5 w-5" />
                {name}
              </NavItem>
            ))}
          </ul>
          <div className="mt-4 flex flex-col items-start gap-4">
            <a href="https://www.materila-tailwind.com/blocks" target="_blank">
              <Button
                color="gray"
                placeholder="blocks Placeholder"
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}}
              >
                blocks
              </Button>
            </a>
          </div>
        </div>
      </Collapse>
    </MTNavbar>
  );
}

export default Navbar;
