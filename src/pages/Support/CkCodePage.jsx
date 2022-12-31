import Button from "@mui/material/Button"

const CkCodePage = () => {
  return (
    <>
      <h1 className="text-[#2c2e74] font-medium text-[32px]">
        Hỗ trợ khách hàng
      </h1>

      <div className="mb-9 border-b border-[#caccd6]">
        <button className="text-xl font-medium py-2 px-3 text-[#2c2e74] border-b-4 border-[#2c2e74]">
          Kiểm tra mã kích hoạt khoá học
        </button>
      </div>

      <p className="text-[#5252d4] font-bold text-xl text-center mb-5">
        Kiểm tra thông tin khách hàng bằng mã kích hoạt khoá học:
      </p>

      <div className="max-w-[500px] mx-auto">
        <input
          type="text"
          placeholder="Nhập mã kích hoạt khóa học"
          className="w-full text-base outline-none border border-border-color rounded py-1 px-2"
        />
      </div>

      <div className="flex items-center justify-center gap-x-5 mt-10">
        <Button
          variant="contained"
          sx={{
            background: "#7e7eea",
            fontWeight: 600,
            paddingY: 1.25,
            paddingX: 4,
            ":hover": {
              bgcolor: "#7e7eea",
              color: "white",
            },
          }}
        >
          Hiển thị chi tiết
        </Button>

        <Button
          variant="contained"
          sx={{
            background: "#7e7eea",
            fontWeight: 600,
            paddingY: 1.25,
            paddingX: 4,
            ":hover": {
              bgcolor: "#7e7eea",
              color: "white",
            },
          }}
        >
          Kiểm tra mã
        </Button>
      </div>
    </>
  )
}

export default CkCodePage
