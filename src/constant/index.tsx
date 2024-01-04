import { LuHome } from "react-icons/lu";
import { FiBox } from "react-icons/fi";
import { SiGoogledocs } from "react-icons/si";
import { ImStack } from "react-icons/im";
import { MdOutlineInsights } from "react-icons/md";
export const NavList = [
    {
      name: "Dashboard",
      logo: <LuHome />,
      link: "/dashboard"
    },
    {
      name: "CRM",
      logo: <FiBox />,
      link: "/crm"
    },
    {
      name: "Integration",
      logo: <SiGoogledocs />,
      link: "/integration"
    },
    {
      name: "Co-Pilot",
      logo: <ImStack />,
      link: "/copilot"
    },
    {
      name: "Insights",
      logo: <MdOutlineInsights />,
      link: "/insights"
    },
  
  ]