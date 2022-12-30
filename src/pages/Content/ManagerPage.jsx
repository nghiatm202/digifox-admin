import { HiEllipsisVertical } from "react-icons/hi2"

const ManagerPage = (props) => {
  return (
    <div className="text-base">
      <div className="flex items-center justify-between pb-2 border-b border-primary-color">
        <h1 className="text-primary-color text-3xl">Quản lý trang con</h1>
      </div>

      <div className="flex items-center gap-x-6 my-5">
        <div className="flex flex-col flex-1 gap-y-2">
          <p className="font-semibold text-primary-color text-lg">Tên trang</p>
          <input
            type="text"
            placeholder="Tên trang"
            className="outline-none border border-border-color rounded py-1 px-2"
          />
        </div>

        <div className="flex flex-col flex-1 gap-y-2">
          <p className="font-semibold text-primary-color text-lg">Tên trang</p>
          <div className="flex items-center gap-x-3">
            <div className="flex items-center">
              <input
                type="text"
                placeholder="https://nghiavippro.hoola.vn/p/..."
                disabled
                className="outline-none border w-full border-border-color border-r-transparent rounded-l py-1 px-2"
              />
              <input
                type="text"
                placeholder="url-trang"
                className="outline-none border flex-1 border-border-color rounded-r py-1 px-2"
              />
            </div>

            <button className="bg-[#7e7eea] text-white py-[4.5px] px-3 rounded">
              Tạo trang mới
            </button>
          </div>
        </div>
      </div>

      <table className="w-full">
        <thead>
          <tr>
            <th className="text-left border-t border-b-2 border-border-color py-3 align-bottom bg-white">
              <p></p>
            </th>
            <th className="text-left border-t border-b-2 border-border-color py-3 align-bottom bg-white">
              <p>Name</p>
            </th>
            <th className="text-left border-t border-b-2 border-border-color py-3 align-bottom bg-white">
              <p>Url</p>
            </th>
            <th className="text-left border-t border-b-2 border-border-color py-3 align-bottom bg-white">
              <p></p>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="odd:bg-[#f2f2f2] even:bg-[#fff] hover:bg-[#00000013] transition-[background-color] duration-200 ease-linear">
            <td>
              <div className="w-[68px] h-[41px] overflow-hidden rounded">
                <img
                  src="https://proxy-cdn.hoolacdn.com/khoahoc-36013-1fnimnus3/sgp1/lib/image/hoola512512_GoF4w4d7cbdZiLxGu-original.png"
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
            </td>
            <td className="py-4">
              <p className="text-[#5252d4]">Minh Nghia</p>
            </td>
            <td>
              <p>nghiavippro@gmail.com</p>
            </td>
            <td>
              <div className="flex items-center justify-end">
                <button className="bg-white p-2 border rounded-l border-border-color">
                  Sửa
                </button>
                <button className="bg-white p-2 border rounded-r border-border-color">
                  <HiEllipsisVertical size={24} />
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default ManagerPage
