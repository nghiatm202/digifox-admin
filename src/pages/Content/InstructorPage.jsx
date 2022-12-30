import { FormControl, InputLabel, MenuItem, Select } from "@mui/material"
import { useState } from "react"
import { HiPlusSm } from "react-icons/hi"
import { HiEllipsisVertical } from "react-icons/hi2"

const InstructorPage = (props) => {
  const [age, setAge] = useState("")

  const handleChange = (event) => {
    setAge(event.target.value)
  }

  return (
    <div className="text-base">
      <div className="flex items-center justify-between pb-2 border-b border-primary-color">
        <h1 className="text-primary-color text-3xl">Giảng viên</h1>
        <button className="flex items-center bg-primary-color text-white rounded px-3 py-2">
          <HiPlusSm color="#fff" size={28} />
          <span className="text-base">Giảng viên</span>
        </button>
      </div>

      <div className="flex items-center gap-12 my-5">
        <div className="flex items-center gap-4">
          <span>Sắp xếp</span>
          <FormControl
            sx={{
              minWidth: 200,
            }}
          >
            <InputLabel id="demo-simple-select-label">Thứ tự</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              label="Thứ tự"
              onChange={handleChange}
            >
              <MenuItem value="nameAZ">A-Z</MenuItem>
              <MenuItem value="nameZA">Z-A</MenuItem>
              <MenuItem value="createdAt">Ngày tạo</MenuItem>
              <MenuItem value="updatedAt">Ngày cập nhật</MenuItem>
            </Select>
          </FormControl>
        </div>

        <div className="flex items-center gap-4">
          <span>Tìm kiếm</span>
          <input
            type="text"
            placeholder="Nhập tên giảng viên"
            className="outline-none border border-border-color rounded py-1 px-2"
          />
        </div>
      </div>

      <table className="w-full">
        <thead>
          <tr>
            <th className="text-left border-t border-b-2 border-border-color py-3 align-bottom bg-white">
              <p></p>
            </th>
            <th className="text-left border-t border-b-2 border-border-color py-3 align-bottom bg-white">
              <p>Tên</p>
            </th>
            <th className="text-left border-t border-b-2 border-border-color py-3 align-bottom bg-white">
              <p>Email</p>
            </th>
            <th className="text-left border-t border-b-2 border-border-color py-3 align-bottom bg-white">
              <p>Chức danh</p>
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
              <p>ELearning Platform</p>
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

export default InstructorPage
