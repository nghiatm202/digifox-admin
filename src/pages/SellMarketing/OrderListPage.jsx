import "./SellMarketing.scss"
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from "react";
//import icon mui
import SearchIcon from '@mui/icons-material/Search';
//import selector mui
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
//import button mui
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

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

const theme = createTheme({
    palette: {
        btn: {
            main: '#5252d4',
        },
    },
});
// function createData(name, calories, fat, carbs, protein) {
//     return { name, calories, fat, carbs, protein };
//   }

//   const rows = [
//     createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//     createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//     createData('Eclair', 262, 16.0, 24, 6.0),
//     createData('Cupcake', 305, 3.7, 67, 4.3),
//     createData('Gingerbread', 356, 16.0, 49, 3.9),
//   ];
const tabs = ["Danh sách", "Tìm kiếm"]
function OrderListPage() {
    const [order, setOrder] = useState("")
    const [isShow, setIsShow] = useState(0)
    //date picker
    const [value, setValue] = useState(null);
    const handleChange = (event) => {
        setOrder(event.target.value)
    }
    const onClickShow = (index) => {
        setIsShow(index)
    }
    return (
        <div className='orderList'>
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
                                <Box sx={{ minWidth: 120 }}>
                                    <FormControl sx={{ minWidth: 200 }} size="small">
                                        <InputLabel id="demo-simple-select-label">Sắp xếp mặc định</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            label="Sắp xếp mặc định"
                                            value={order}
                                            onChange={handleChange}
                                        >
                                            <MenuItem value="new">Đơn hàng mới</MenuItem>
                                            <MenuItem value="old">Đơn hàng cũ</MenuItem>
                                            <MenuItem value="payments">Hình thức thanh toán</MenuItem>
                                            < MenuItem value="order-status">Trạng thái đơn hàng</MenuItem>
                                            <MenuItem value="order-source">Nguồn đơn hàng</MenuItem>
                                            < MenuItem value="descrease-price">Giá thanh toán tăng dần</MenuItem>
                                            <MenuItem value="increase-price">Giá thanh toán giảm dần</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Box>
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
                                <ThemeProvider theme={theme}>
                                    <Button variant="contained" color="btn">Lọc
                                    </Button>
                                </ThemeProvider>
                            </Stack>
                        </div>
                        <div className='right'>
                            <Stack spacing={2} direction="row">
                                <ThemeProvider theme={theme}>
                                    <Button variant="contained" color="btn">Đơn hàng mới
                                    </Button>
                                </ThemeProvider>
                                <ThemeProvider theme={theme}>
                                    <Button variant="contained" color="btn">Xuất dữ liệu
                                    </Button>
                                </ThemeProvider>
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
                                        <TableCell align="right">Khóa học</TableCell>
                                        <TableCell align="right">Hình thức</TableCell>
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
                            <Button variant="contained" color="btn" style={{ borderRadius: 0, marginLeft: "8px" }} >
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
                                        <TableCell align="right">Khóa học</TableCell>
                                        <TableCell align="right">Hình thức</TableCell>
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
            </div>

        </div >
    );
}

export default OrderListPage;