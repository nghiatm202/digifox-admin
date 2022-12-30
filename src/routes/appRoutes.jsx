import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined"
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined"
import ContentPageLayout from "../pages/Content/ContentPageLayout"
import AccountPageLayout from "../pages/Account/AccountPageLayout"
import ClientPage from "../pages/Account/ClientPage"
import RolePermmissionPage from "../pages/Account/RolePermmissionPage"
import HomePage from "../pages/Home/HomePage"
import InstallationPage from "../pages/Installation/InstallationPage"
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
]

export default appRoutes
