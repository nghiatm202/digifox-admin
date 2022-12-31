import "./SellMarketing.scss";
import { useState } from "react";
//import selector mui
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
//import button mui
import Stack from '@mui/material/Stack';

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
function CodListPage() {
    const [codList, setCodList] = useState("")
    //date picker
    const [value, setValue] = useState(null);
    const handleChange = (event) => {
        setCodList(event.target.value)
    }
    return (
        <div className='codList'>
            <h1>Xử lý đơn hàng</h1>
            <div className='wrapper'>
                <div style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: "16px"
                }}>

                    <div className='left'>
                        <Stack spacing={2} direction="row">
                            <Box sx={{ minWidth: 120 }}>
                                <FormControl sx={{ minWidth: 200 }} size="small">
                                    <InputLabel id="demo-simple-select-label">Trạng thái xử lý</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        label="Trạng thái xử lý"
                                        value={codList}
                                        onChange={handleChange}
                                    >
                                        <MenuItem value="new">Chưa gọi</MenuItem>
                                        <MenuItem value="old">Không gọi được</MenuItem>
                                        <MenuItem value="payments">Sai số điện thoại</MenuItem>
                                        < MenuItem value="order-status">Hẹn gọi lại</MenuItem>
                                        <MenuItem value="order-source">Từ chối mua</MenuItem>
                                        < MenuItem value="descrease-price">Chưa quyết định</MenuItem>
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
                                    <TableCell align="right">Khoá học</TableCell>
                                    <TableCell align="right">Ngày mua</TableCell>
                                    <TableCell align="right">Trạng thái</TableCell>
                                    <TableCell align="right">Chi tiết</TableCell>
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

        </div >);
}

export default CodListPage;