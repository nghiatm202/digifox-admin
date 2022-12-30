import { HiPlusSm } from "react-icons/hi"
import { BsFillEyeFill } from "react-icons/bs"
import { HiEllipsisVertical } from "react-icons/hi2"

const RolePermmissionPage = (props) => {
  return (
    <div className="text-base">
      <div className="flex items-center justify-between pb-2 border-b border-primary-color">
        <h1 className="text-primary-color text-3xl">Vai trò và phân quyền</h1>
      </div>

      <button className="flex items-center my-10 ml-auto bg-primary-color text-white rounded px-3 py-2">
        <HiPlusSm color="#fff" size={28} />
        <span className="text-base">Tạo vai trò</span>
      </button>

      <div className="grid grid-cols-3">
        <div className="flex flex-col text-center">
          <p className="bg-[#ebedf2] py-4 border-r border-border-color">
            Tên vai trò
          </p>
          <div className="flex flex-col">
            <span className="py-4 border-r border-border-color">Admin</span>
            <span className="py-4 border-r border-border-color">
              Quản lý chung
            </span>
            <span className="py-4 border-r border-border-color">Học viên</span>
            <span className="py-4 border-r border-border-color">Tài khoản</span>
          </div>
        </div>
        <div className="flex flex-col text-center">
          <p className="bg-[#ebedf2] py-4 border-r border-border-color">
            Số lượng và danh sách tài khoản được phân quyền
          </p>
          <div className="flex flex-col justify-center items-center">
            <div className="flex justify-center items-center gap-x-2 w-full py-4 border-r border-border-color">
              <span>0</span>
              <button className="bg-white p-1 border rounded border-border-color">
                <HiEllipsisVertical size={20} />
              </button>
            </div>
            <div className="flex items-center justify-center w-full gap-x-2 py-4 border-r border-border-color">
              <span>0</span>
              <button className="bg-white p-1 border rounded border-border-color">
                <HiEllipsisVertical size={20} />
              </button>
            </div>
            <div className="flex items-center gap-x-2 justify-center w-full py-4 border-r border-border-color">
              <span>0</span>
              <button className="bg-white p-1 border rounded border-border-color">
                <HiEllipsisVertical size={20} />
              </button>
            </div>
            <div className="flex items-center gap-x-2 justify-center w-full py-4 border-r border-border-color">
              <span>0</span>
              <button className="bg-white p-1 border rounded border-border-color">
                <HiEllipsisVertical size={20} />
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col text-center">
          <p className="bg-[#ebedf2] py-4">
            Xem, chỉnh sửa và quản lý phân quyền
          </p>
          <div className="flex flex-col justify-center items-center">
            <button className="py-4">
              <BsFillEyeFill size={20} />
            </button>
            <button className="py-4">
              <BsFillEyeFill size={20} />
            </button>
            <button className="py-4">
              <BsFillEyeFill size={20} />
            </button>
            <button className="py-4">
              <BsFillEyeFill size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RolePermmissionPage
