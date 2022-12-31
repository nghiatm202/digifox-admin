import "./SellMarketing.scss"
import { useState } from "react";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { HiEllipsisVertical } from "react-icons/hi2"
//import button mui
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
//import icon mui
import SearchIcon from '@mui/icons-material/Search';
//import table mui
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
//import date picker
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';



function createData(name, receive, coefficient) {
    return { name, receive, coefficient };
}

const rows = [
    createData('Trần Minh Nghĩa', "Không", 0, " "),
];
const theme = createTheme({
    palette: {
        btn: {
            main: '#5252d4',
        },
    },
});
const tabs = ["Danh sách", "Tìm kiếm", "Phân tỉ lệ xử lý", "Thống kê seller"]
function CodManagerPage() {
    const [isDropDown, setIsDropDown] = useState(false)
    const [isDropDownTwo, setIsDropDownTwo] = useState(false)
    const [isShow, setIsShow] = useState(0)
    //date picker
    const [value, setValue] = useState(null);
    const handleDisplayDropDown = () => {
        setIsDropDown(prevCheck => !prevCheck)
    }
    const handleDisplayDropDownTwo = () => {
        setIsDropDownTwo(prevCheck => !prevCheck)
    }
    const onClickShow = (index) => {
        setIsShow(index)
    }
    return (
        <div className='codManager'>
            <h1>Quản lý đơn hàng</h1>
            <div className='tabs'>
                {tabs.map((tab, index) => {
                    return (<button key={index} className={isShow === index ? "active" : ""} onClick={() => { onClickShow(index) }} >{tab}</button>)
                })}
            </div>
            <div className='wrapper'>
                <div style={{ display: isShow === 0 ? "block" : "none" }}>
                    <div style={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginBottom: "16px"
                    }}>
                        <div className='left'>
                            <Stack spacing={2} direction="row">
                                <div style={{ position: "relative" }}>
                                    <button id="btn-1" onClick={handleDisplayDropDown}>Trạng thái xử lý </button>
                                    <div className="dropdown-form" style={{ display: isDropDown ? 'block' : 'none' }} >
                                        <div className="search">
                                            <SearchIcon />
                                            <input placeholder="Tìm kiếm" />
                                        </div>
                                        <hr></hr>
                                        <ul>
                                            <li>
                                                <input type='checkbox' id="1" />
                                                <label htmlFor="1">Chưa gọi</label>
                                            </li>
                                            <li>
                                                <input type='checkbox' id="2" />
                                                <label htmlFor="2">Không gọi được</label>
                                            </li>
                                            <li>
                                                <input type='checkbox' id="3" />
                                                <label htmlFor="3">Sai số điện thoại</label>
                                            </li>
                                            <li>
                                                <input type='checkbox' id="4" />
                                                <label htmlFor="4">Hẹn gọi lại</label>
                                            </li>
                                            <li>
                                                <input type='checkbox' id="5" />
                                                <label htmlFor="5">Từ chối mua</label>
                                            </li>
                                            <li>
                                                <input type='checkbox' id="6" />
                                                <label htmlFor="6">Chưa quyết</label>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div style={{ position: "relative" }}>
                                    <button id="btn-1" onClick={handleDisplayDropDownTwo}>Nhân viên xử lý </button>
                                    <div className="dropdown-form" style={{ display: isDropDownTwo ? 'block' : 'none' }} >
                                        <div className="search">
                                            <SearchIcon />
                                            <input placeholder="Tìm kiếm" />
                                        </div>
                                        <hr></hr>
                                        <ul>
                                            <li>
                                                <input type='checkbox' id="tranminhnghia005" />
                                                <label htmlFor="tranminhnghia005">tranminhnghia005</label>
                                            </li>

                                        </ul>
                                    </div>
                                </div>
                                <LocalizationProvider dateAdapter={AdapterDayjs} sx={{ minWidth: 200 }}  >
                                    <DatePicker
                                        label="Thời gian"
                                        value={value}
                                        onChange={(newValue) => {
                                            setValue(newValue);
                                        }}
                                        renderInput={(params) => <TextField {...params} size="small" />}
                                    />
                                </LocalizationProvider>
                            </Stack>
                        </div>
                    </div>
                    <div>
                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>STT</TableCell>
                                        <TableCell align="right">Mã đơn hàng</TableCell>
                                        <TableCell align="right">TT</TableCell>
                                        <TableCell align="right">Khách hàng</TableCell>
                                        <TableCell align="right">Email</TableCell>
                                        <TableCell align="right">Khóa học</TableCell>
                                        <TableCell align="right">Ngày mua</TableCell>
                                        <TableCell align="right">Trạng thái</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>

                                    {/* {rows.map((row) => (
                    <TableRow
                        key={row.name}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                        <TableCell component="th" scope="row">
                            {row.name}
                        </TableCell>
                        <TableCell align="right">{row.calories}</TableCell>
                        <TableCell align="right">{row.fat}</TableCell>
                        <TableCell align="right">{row.carbs}</TableCell>
                        <TableCell align="right">{row.protein}</TableCell>
                    </TableRow>
                )) 
                }  */}
                                    <TableRow>
                                        <TableCell align="left">

                                            There are no records to show
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </div>
                </div>
                <div style={{ display: isShow === 1 ? "block" : "none" }} >
                    <div style={{
                        textAlign: "center",
                        marginBottom: "16px",
                    }}>
                        <input type="text" placeholder="Mã đơn hàng" style={{
                            width: "468px",
                            padding: "4px 12px 7px",
                            fontSize: "16px",
                            fontWeight: 400,
                            lineHeight: 1.5,
                            color: "#495057",
                            backgroundColor: "#fff",
                            backgroundClip: "padding-box",
                            border: "1px solid #ced4da",
                            outline: "none"
                        }}></input>
                        <ThemeProvider theme={theme}>
                            <Button variant="contained" color="btn" style={{ borderRadius: 0, marginLeft: "8px" }}>
                                <SearchIcon style={{ color: "#fff" }} />
                            </Button>
                        </ThemeProvider>
                    </div>
                    <div>
                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>STT</TableCell>
                                        <TableCell align="right">Mã đơn hàng</TableCell>
                                        <TableCell align="right">TT</TableCell>
                                        <TableCell align="right">Khách hàng</TableCell>
                                        <TableCell align="right">Email</TableCell>
                                        <TableCell align="right">Khóa học</TableCell>
                                        <TableCell align="right">Ngày mua</TableCell>
                                        <TableCell align="right">Trạng thái</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>

                                    {/* {rows.map((row) => (
                    <TableRow
                        key={row.name}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                        <TableCell component="th" scope="row">
                            {row.name}
                        </TableCell>
                        <TableCell align="right">{row.calories}</TableCell>
                        <TableCell align="right">{row.fat}</TableCell>
                        <TableCell align="right">{row.carbs}</TableCell>
                        <TableCell align="right">{row.protein}</TableCell>
                    </TableRow>
                )) 
                }  */}
                                    <TableRow>
                                        <TableCell align="left">

                                            There are no records to show
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </div>
                </div>
                <div style={{ display: isShow === 2 ? "block" : "none" }} >
                    <div style={{
                        textAlign: "left",
                        marginBottom: "16px",
                    }}>
                        <p style={{ color: "#343a40", fontWeight: 500, fontSize: "18px" }}>Danh sách nhân viên xử lý đơn</p>
                    </div>
                    <div>
                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell >STT</TableCell>
                                        <TableCell align="center">Nhân viên</TableCell>
                                        <TableCell align="center">Nhận đơn</TableCell>
                                        <TableCell align="center">Hệ số nhận đơn</TableCell>
                                        <TableCell align="center">Cài đặt</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>

                                    {rows ? rows.map((row, index) => (
                                        <TableRow
                                            key={row.name}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell > {index + 1} </TableCell>
                                            <TableCell align="center"> {row.name} </TableCell>
                                            <TableCell align="center">{row.receive}</TableCell>
                                            <TableCell align="center">{row.coefficient}</TableCell>
                                            <TableCell align="center">
                                                <button className="bg-white p-1 border rounded border-border-color">
                                                    <HiEllipsisVertical size={20} />
                                                </button>
                                            </TableCell>
                                        </TableRow>
                                    ))
                                        :
                                        <TableRow>
                                            <TableCell align="left">

                                                There are no records to show
                                            </TableCell>
                                        </TableRow>}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </div>
                </div>
                <div style={{ display: isShow === 3 ? "block" : "none" }}>
                    <div style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        marginBottom: "16px"
                    }}>
                        <p style={{ color: "#343a40", fontWeight: 500, fontSize: "18px", marginBottom: "16px" }}>Tỉ lệ xử lý đơn hàng</p>
                        <div className='left'>
                            <Stack spacing={2} direction="row">
                                <div style={{ position: "relative" }}>
                                    <button id="btn-1" onClick={handleDisplayDropDown}>Nhân viên xử lý </button>
                                    <div className="dropdown-form" style={{ display: isDropDown ? 'block' : 'none' }} >
                                        <div className="search">
                                            <SearchIcon />
                                            <input placeholder="Tìm kiếm" />
                                        </div>
                                        <hr></hr>
                                        <ul>
                                            <li>
                                                <input type='checkbox' id="phamthihoan" />
                                                <label htmlFor="phamthihoan">phamthihoan</label>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <LocalizationProvider dateAdapter={AdapterDayjs} sx={{ minWidth: 200 }}  >
                                    <DatePicker
                                        label="Thời gian"
                                        value={value}
                                        onChange={(newValue) => {
                                            setValue(newValue);
                                        }}
                                        renderInput={(params) => <TextField {...params} size="small" />}
                                    />
                                </LocalizationProvider>
                            </Stack>
                        </div>
                    </div>
                    <div>
                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>STT</TableCell>
                                        <TableCell align="right">Seller</TableCell>
                                        <TableCell align="right">Số đơn</TableCell>
                                        <TableCell align="right">Thành công</TableCell>
                                        <TableCell align="right">Tỉ lệ</TableCell>
                                        <TableCell align="right">Sai số</TableCell>
                                        <TableCell align="right">Chưa gọi</TableCell>
                                        <TableCell align="right">Số đơn</TableCell>
                                        <TableCell align="right">Từ chối</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>

                                    {/* {rows.map((row) => (
                    <TableRow
                        key={row.name}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                        <TableCell component="th" scope="row">
                            {row.name}
                        </TableCell>
                        <TableCell align="right">{row.calories}</TableCell>
                        <TableCell align="right">{row.fat}</TableCell>
                        <TableCell align="right">{row.carbs}</TableCell>
                        <TableCell align="right">{row.protein}</TableCell>
                    </TableRow>
                )) 
                }  */}
                                    <TableRow>
                                        <TableCell align="left">

                                            There are no records to show
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </div>
                </div>
            </div>

        </div >
    );
}

export default CodManagerPage;