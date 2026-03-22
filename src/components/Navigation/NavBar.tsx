import {
  // IconCalendarStats,
  // IconDeviceDesktopAnalytics,
  // IconFingerprint,
  // IconGauge,
  IconHome2,
  // IconLogout,
  // IconSettings,
  // IconSwitchHorizontal,
  // IconUser,
} from '@tabler/icons-react';
import { NavLink, useLocation } from "react-router";
import { Center, Image, Stack, Tooltip, UnstyledButton } from '@mantine/core';
import Logo from '@src/favicon.png';
import classes from './NavBar.module.css';
import { routes } from '@src/consts/routeConsts';

interface NavbarLinkProps {
  icon: typeof IconHome2;
  label: string;
  active?: boolean;
  path: string;
}

function NavbarLink({ icon: Icon, label, active, path }: NavbarLinkProps) {
  return (
    <Tooltip label={label} position="right" transitionProps={{ duration: 0 }}>
      <UnstyledButton
        to={path}
        component={NavLink}
        className={classes.link}
        data-active={active || undefined}
        aria-label={label}
      >
        <Icon size={20} stroke={1.5} />
      </UnstyledButton>
    </Tooltip>
  );
}


export function NavBar() {
  const { pathname } = useLocation();

  const links = routes.map((link) => (
    <NavbarLink
      {...link}
      key={link.label}
      active={pathname.endsWith(link.path)}
      path={link.path}
    />
  ));

  return (
    <nav className={classes.navbar}>
      <Center>
        <Image
          src={Logo}
        />
      </Center>

      <div className={classes.navbarMain}>
        <Stack justify="center" gap="6px">
          {links}
        </Stack>
      </div>

      {/* <Stack justify="center" gap={0}>
        <NavbarLink icon={IconSwitchHorizontal} label="Change account" />
        <NavbarLink icon={IconLogout} label="Logout" />
      </Stack> */}
    </nav>
  );
}