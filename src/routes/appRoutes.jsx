import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined"
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined"
import ContentPageLayout from "../pages/Content/ContentPageLayout"
import AccountPageLayout from "../pages/Account/AccountPageLayout"
import ClientPage from "../pages/Account/ClientPage"
import RolePermmissionPage from "../pages/Account/RolePermmissionPage"
import HomePage from "../pages/Home/HomePage"
import InstallationPage from "../pages/Installation/InstallationPage"
//Sell Marketing Page
import SellMarketing from "../pages/SellMarketing"
import CodListPage from "../pages/SellMarketing/CodListPage"
import CodManagerPage from "../pages/SellMarketing/CodManagerPage"
import OrderListPage from "../pages/SellMarketing/OrderListPage"
// import ContentPageLayout from "../pages/Content/ContentPageLayout"
import InstructorPage from "../pages/Content/InstructorPage"
import CoursesPage from "../pages/Content/CoursesPage"
import ManagerPage from "../pages/Content/ManagerPage"

const appRoutes = [
  {
    index: true,
    element: <HomePage />,
    state: "home",
  },
  {
    path: "/installation",
    element: <InstallationPage />,
    state: "installation",
    sidebarProps: {
      displayText: "Installation",
      icon: <FileDownloadOutlinedIcon />,
    },
  },
  {
    path: "/content",
    element: <ContentPageLayout />,
    state: "content",
    sidebarProps: {
      displayText: "Quản lý nội dung",
      icon: <AppsOutlinedIcon />,
    },
    child: [
      {
        path: "/content/courses",
        element: <CoursesPage />,
        state: "content.courses",
        sidebarProps: {
          displayText: "Khóa học",
        },
      },
      {
        path: "/content/instructor",
        element: <InstructorPage />,
        state: "content.instructor",
        sidebarProps: {
          displayText: "Giảng viên",
        },
      },
      {
        path: "/content/manager",
        element: <ManagerPage />,
        state: "content.manager",
        sidebarProps: {
          displayText: "Tạo trang",
        },
      },
    ],
  },
  {
    path: "/account",
    element: <AccountPageLayout />,
    state: "account",
    sidebarProps: {
      displayText: "Quản lý tài khoản",
      icon: <AppsOutlinedIcon />,
    },
    child: [
      {
        path: "/account/client",
        element: <ClientPage />,
        state: "account.client",
        sidebarProps: {
          displayText: "Tài khoản",
        },
      },
      {
        path: "/account/role-permmission",
        element: <RolePermmissionPage />,
        state: "account.role-permmission",
        sidebarProps: {
          displayText: "Vai trò và phân quyền",
        },
      },
    ],
  },
  {
    path: "/sell-marketing",
    element: <SellMarketing />,
    state: "sellMarketing",
    sidebarProps: {
      displayText: "Quản lý bán hàng",
      icon: <AppsOutlinedIcon />,
    },
    child: [
      {
        path: "/sell-marketing/order-list",
        element: <OrderListPage />,
        state: "sellmarketing.orderlist",
        sidebarProps: {
          displayText: "Danh sách đơn hàng",
        },
      },
      {
        path: "/sell-marketing/cod-manager",
        element: <CodManagerPage />,
        state: "sellmarketing.codmanager",
        sidebarProps: {
          displayText: "Quản lý COD",
        },
      },
      {
        path: "/sell-marketing/cod-list",
        element: <CodListPage />,
        state: "sellmarketing.codlist",
        sidebarProps: {
          displayText: "Xử lý đơn COD",
        },
      }
    ],
  },
]

export default appRoutes
