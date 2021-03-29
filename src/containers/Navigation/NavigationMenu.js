import React, { useState } from "react";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import List from "@material-ui/core/List";
import Collapse from "@material-ui/core/Collapse";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import NavigationItem from "./NavigationItem";
import NavigationDrawer from "./NavigationDrawer";
import routes from "../../constants/routes";

import DashboardIcon from "../../assets/icons/dashboard.png";
import TransactionsIcon from "../../assets/icons/transactions.png";
import PayConfigIcon from "../../assets/icons/payment_configuration.png";
import PayStatusIcon from "../../assets/pay_status.png";
import BranchesIcon from "../../assets/branches.png";
import PayCreateIcon from "../../assets/icons/create_payment.png";
import BankIcon from "../../assets/icons/bank_modified.png";
import MerchantIcon from "../../assets/icons/merchant.png";
import BusinessesIcon from "../../assets/icons/businesses.png";
import UsersIcon from "../../assets/icons/create_users.png";
import NotificationsIcon from "../../assets/icons/notifications.png";
import ReportIcon from "../../assets/icons/report.png";
import LogsIcon from "../../assets/icons/logs.png";
import RefundsIcon from "../../assets/refunds.png";
import DocumentationIcon from "../../assets/documentation.png";
import VisaCardIcon from "../../assets/visacard.png";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  logoGroup: {
    display: "flex",
    flexDirection: "column",
    maxWidth: "288px",
    justifyContent: "flex-start",
    margin: "0 auto",
  },

  nested: {
    paddingLeft: theme.spacing(4),
  },
  badge: {
    fontSize: theme.typography.caption.fontSize,
    height: theme.icon.badgeHeight,
  },
  navigationItems: {
    flex: "1 1 auto",
    paddingTop: theme.spacing(2),
  },
  linkNavigationText: {
    fontWeight: "normal",
    textTransform: "unset",
    [theme.breakpoints.down("xxs")]: {
      lineHeight: "120%",
      fontSize: theme.typography.caption.fontSize,
    },
  },
  eulaLink: {
    fontWeight: "normal",
    paddingBottom: theme.spacing(1.25),
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: theme.spacing(1.5, 0),
  },
  cardTrademarkImg: {
    width: "auto",
    height: theme.cardTrademarkImg,
    marginLeft: theme.spacing(1.5),
  },
  navigationIcon: {
    paddingTop: theme.spacing(0.5),
    paddingBottom: theme.spacing(0.5),
    minWidth: theme.spacing(4),
    [theme.breakpoints.down("xs")]: {
      minWidth: theme.spacing(4.5),
    },
    "& svg": {
      width: theme.spacing(2.5),
      height: theme.spacing(2.5),
    },
  },
  navigationItem: {
    paddingTop: theme.spacing(0.5),
    paddingBottom: theme.spacing(0.5),
    [theme.breakpoints.down("xxs")]: {
      padding: theme.spacing(0.5),
    },
  },
}));

export default function NavigationMenu({ ...navProps }) {
  const classes = useStyles();
  const { t } = useTranslation();
  const [activeRoute, setActiveRoute] = useState(routes.DASHBOARD);
  const [payCreateOpen, setPayCreateOpen] = useState(false);
  const [bankOpen, setBankOpen] = useState(false);
  const [merchantOpen, setMerchantOpen] = useState(false);
  const [branchOpen, setBranchOpen] = useState(false);
  const [usersOpen, setUsersOpen] = useState(false);
  const [openTab, setOpenTab] = useState(true);
  const { userrole } = useSelector((state) => state.user);
  const navigation = [
    {
      label: "Dashboard",
      eventName: "Dashboard",
      pathname: routes.DASHBOARD,
      icon: <img width="30" height="30" src={DashboardIcon} alt="Dashboard" />,
    },
    {
      label: "Transactions",
      eventName: "Transactions",
      pathname: routes.TRANSACTIONS,
      icon: (
        <img width="30" height="30" src={TransactionsIcon} alt="Transactions" />
      ),
    },
    userrole === "admin" && {
      label: "Payment Configuration",
      eventName: "Payment Configuration",
      pathname: routes.PAY_CONFIG,
      icon: (
        <img
          width="35"
          height="35"
          src={PayConfigIcon}
          alt="Payment Configuration"
        />
      ),
    },
    {
      label: "Payment Status",
      eventName: "Payment Status",
      pathname: routes.PAY_STATUS,
      icon: (
        <img width="35" height="35" src={PayStatusIcon} alt="Payment Status" />
      ),
    },
    userrole === "branch" && {
      label: "Documentation",
      eventName: "Documentation",
      pathname: routes.DOCUMENTATION,
      icon: (
        <img
          width="35"
          height="35"
          src={DocumentationIcon}
          alt="Documentation"
        />
      ),
    },
    userrole === "bank" && {
      label: "Branches",
      eventName: "Branches",
      pathname: null,
      icon: <img width="35" height="35" src={BranchesIcon} alt="Branches" />,
      submenu: [
        {
          label: "Create Branch",
          eventName: "Create Branch",
          pathname: routes.CREATE_BRANCH,
        },
        {
          label: "List Branches",
          eventName: "List Branches",
          pathname: routes.LIST_BRANCHES,
        },
      ],
    },
    {
      label: "Create Payment",
      eventName: "Create Payment",
      pathname: null,
      icon: (
        <img width="35" height="35" src={PayCreateIcon} alt="Create Payment" />
      ),
      submenu: [
        {
          label: "Bulk",
          eventName: "Bulk",
          pathname: routes.BULK,
        },
        {
          label: "Single",
          eventName: "Single",
          pathname: routes.SINGLE,
        },
      ],
    },
    userrole === "admin" && {
      label: "Bank",
      eventName: "Bank",
      pathname: null,
      icon: <img width="35" height="35" src={BankIcon} alt="Bank" />,
      submenu: [
        {
          label: "Create Bank",
          eventName: "Create Bank",
          pathname: routes.CREATE_BANK,
        },
        {
          label: "List Banks",
          eventName: "List Banks",
          pathname: routes.LIST_BANKS,
        },
      ],
    },
    userrole !== "merchant" && {
      label: "Merchant",
      eventName: "Merchant",
      pathname: null,
      icon: <img width="35" height="35" src={MerchantIcon} alt="Merchant" />,
      submenu: [
        {
          label: "Create Merchant",
          eventName: "Create Merchant",
          pathname: routes.CREATE_MERCHANT,
        },
        {
          label: "List Merchants",
          eventName: "List Merchants",
          pathname: routes.LIST_MERCHANTS,
        },
      ],
    },
    {
      label: "Businesses",
      eventName: "Businesses",
      pathname: routes.BUSINESSES,
      icon: (
        <img width="35" height="35" src={BusinessesIcon} alt="Businesses" />
      ),
    },
    userrole === "merchant" && {
      label: "VISA/MasterCard",
      eventName: "VISA/MasterCard",
      pathname: routes.VISA_MASTERCARD,
      icon: (
        <img width="35" height="35" src={VisaCardIcon} alt="VisaCardIcon" />
      ),
    },
    {
      label: "Users",
      eventName: "Users",
      pathname: null,
      icon: <img width="35" height="35" src={UsersIcon} alt="Users" />,
      submenu: [
        {
          label: "Create User",
          eventName: "Create User",
          pathname: routes.CREATE_USRE,
        },
        {
          label: "List Users",
          eventName: "List Users",
          pathname: routes.LIST_USRES,
        },
      ],
    },
    {
      label: "Notifications",
      eventName: "Notifications",
      pathname: routes.NOTIFICATIONS,
      icon: (
        <img
          width="35"
          height="35"
          src={NotificationsIcon}
          alt="Notifications"
        />
      ),
    },
    {
      label: "Report",
      eventName: "Report",
      pathname: routes.REPORT,
      icon: <img width="35" height="35" src={ReportIcon} alt="Report" />,
    },
    userrole !== "admin" && {
      label: "Refunds",
      eventName: "Refunds",
      pathname: routes.REFUNDS,
      icon: <img width="35" height="35" src={RefundsIcon} alt="Refunds" />,
    },
    {
      label: "Logs",
      eventName: "Logs",
      pathname: routes.LOGS,
      icon: <img width="35" height="35" src={LogsIcon} alt="Logs" />,
    },
    userrole !== "admin" && {
      label: "Setting",
      eventName: "Settings",
      pathname: routes.SETTINGS,
      icon: <img width="35" height="35" src={PayConfigIcon} alt="Settings" />,
    },
  ];
  const handleNavigationClick = (pathName, eventName, submenu = null) => {
    setActiveRoute(pathName);
    if (submenu) {
      switch (eventName) {
        case "Create Payment":
          setPayCreateOpen(!payCreateOpen);
          break;
        case "Bank":
          setBankOpen(!bankOpen);
          break;
        case "Merchant":
          setMerchantOpen(!merchantOpen);
          break;
        case "Users":
          setUsersOpen(!usersOpen);
          break;
        case "Branches":
          setBranchOpen(!branchOpen);
          break;
        default:
      }
    } else if (eventName !== openTab) {
      setOpenTab(eventName);
    }
  };
  return (
    <NavigationDrawer {...navProps}>
      <div className={classes.logoGroup}>
        <Typography variant="h1" color="textPrimary">
          {t("NPC")}
        </Typography>
        <Typography variant="h5" color="textPrimary">
          {t("national")}
        </Typography>
      </div>
      <List
        component="nav"
        aria-labelledby="nested-list-subheader"
        className={classes.navigationItems}
      >
        {navigation.map((nav) => (
          <>
            {nav && (
              <div key={nav.pathname}>
                <NavigationItem
                  button
                  onClick={() =>
                    handleNavigationClick(
                      nav.pathname,
                      nav.eventName,
                      nav.submenu
                    )
                  }
                  // eslint-disable-next-line no-nested-ternary
                  open={
                    nav.eventName === "Bank"
                      ? bankOpen
                      : nav.eventName === "Merchant"
                      ? merchantOpen
                      : nav.eventName === "Users"
                      ? usersOpen
                      : nav.eventName === "Branches"
                      ? branchOpen
                      : payCreateOpen
                  }
                  nav={nav}
                  active={activeRoute && activeRoute === nav.pathname}
                  id={nav.eventName}
                  item="menu"
                  component={
                    nav.pathname
                      ? React.forwardRef((props, ref) => (
                          <NavLink
                            {...props}
                            innerRef={ref}
                            activeStyle={{
                              fontWeight: "700",
                            }}
                          />
                        ))
                      : null
                  }
                  to={nav.pathname || null}
                />
                {nav.submenu
                  ? nav.submenu.map((submenu) => (
                      <Collapse
                        key={submenu.pathname}
                        // eslint-disable-next-line no-nested-ternary
                        in={
                          nav.eventName === "Bank"
                            ? bankOpen
                            : nav.eventName === "Merchant"
                            ? merchantOpen
                            : nav.eventName === "Users"
                            ? usersOpen
                            : nav.eventName === "Branches"
                            ? branchOpen
                            : payCreateOpen
                        }
                        timeout="auto"
                        unmountOnExit
                      >
                        <List component="div" disablePadding>
                          <NavigationItem
                            button
                            nested
                            item="submenu"
                            onClick={() =>
                              handleNavigationClick(
                                submenu.pathname,
                                submenu.eventName
                              )
                            }
                            // eslint-disable-next-line no-nested-ternary
                            open={
                              nav.eventName === "Bank"
                                ? bankOpen
                                : nav.eventName === "Merchant"
                                ? merchantOpen
                                : nav.eventName === "Users"
                                ? usersOpen
                                : payCreateOpen
                            }
                            nav={submenu}
                            id={submenu.eventName}
                            active={activeRoute === submenu.pathname}
                            component={
                              submenu.pathname
                                ? React.forwardRef((props, ref) => (
                                    <NavLink
                                      {...props}
                                      innerRef={ref}
                                      activeStyle={{
                                        fontWeight: "700",
                                      }}
                                    />
                                  ))
                                : null
                            }
                            to={submenu.pathname || null}
                          />
                        </List>
                      </Collapse>
                    ))
                  : null}
              </div>
            )}
          </>
        ))}
      </List>
    </NavigationDrawer>
  );
}
