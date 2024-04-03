import React from 'react'
import pic1 from "../src/assets/user.png"
import pic2 from "../src/assets/iphone.jpg"
import pic4 from "../src/assets/olapool2.png"
import { FaPlus } from "react-icons/fa";
import { IoGrid } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { FaStore } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { FcSupport } from "react-icons/fc";
import { GoCodeOfConduct } from "react-icons/go";
import { MdBookmarkBorder } from "react-icons/md";
import './App.css'
import { PiNumberSquareEightFill } from "react-icons/pi";
import { FaFilter } from "react-icons/fa";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Avatar } from '@mui/material';


function App() {

  return (
    <>

      <div >
        <nav class="navbar bg-body-tertiary border">
          <div class="container-fluid">
            <img className='ms-3' style={{ width: '150px' }} src={pic4} alt="" />
            <p className='mt-2' style={{ marginLeft: '600px' }}>Message</p>
            <div className='' style={{ height: '30px', width: '140px', border: '1px solid', marginRight: '40px' }}>
              <p className='ms-2'>Jithu</p>  <Avatar style={{ marginTop: '-39px', marginLeft: '60px', width: '20%', height: '90%', backgroundColor: '#e36dd1' }} >J</Avatar><IoIosArrowDown type='button' style={{ marginTop: '-53px', marginLeft: '110px', fontSize: '20px' }} />

            </div>
          </div>
        </nav>
      </div>
      <div className='row'>
        <div className='col-lg-3  shadow' style={{ width: '350px', height: '89vh', backgroundColor: 'white' }}>
          <div style={{ height: '100px', width: '300px' }} className='border  rounded mt-3 ms-3'>
            <h4 style={{ marginLeft: '120px', marginTop: '10px' }}>Sreejith K</h4>
            <h6 style={{ marginLeft: '120px', marginTop: '-5px', color: 'green' }}>Verification level 3</h6>
            <h6 style={{ marginLeft: '120px', marginTop: '-5px', color: 'GrayText' }}>Ernamkulam, India</h6>
            <img src={pic1} alt="" style={{ width: '80px', marginTop: '-115px' }} className=' ms-2' />
          </div>
          <div style={{ height: '120px', width: '300px' }} className='border  rounded mt-3 ms-3'>
            <h7 className='ms-2'>Available for use</h7>
            <h4 className='ms-3'>0.00</h4>
            <h7 className='ms-2'>Being Cleared</h7>
            <h4 className='ms-3'>0.00</h4>
            <p type="button" className='border ' style={{ width: '80px', marginTop: '-80px', marginLeft: '190px' }}> <span style={{ color: 'blue' }} className='ms-1'>Withdraw</span> </p>
            <p type="button" className='border' style={{ width: '80px', marginTop: '-10px', marginLeft: '190px' }}> <span style={{ color: 'blue' }} className='ms-3'>History</span> </p>
          </div>
          <div style={{ height: '50%', width: '300px', overflow: 'auto', scrollbarWidth: 'none' }} className='  rounded mt-2 ms-3'>
            <div style={{ height: '40px', width: '250px' }} className='store border mt-2 ms-4'>
              <IoGrid className='mt-1' style={{ width: '50px', height: '30px' }} /> <p style={{ marginTop: '-30px', marginLeft: '50px', fontSize: '18px' }}>Overview</p> <IoIosArrowDown type='button' style={{ marginTop: '-75px', marginLeft: '210px', fontSize: '25px' }} />
            </div>
            <div style={{ height: '40px', width: '250px' }} className='store border mt-2 ms-4'>
              <FaStore className='mt-1' style={{ width: '50px', height: '30px' }} /> <p style={{ marginTop: '-30px', marginLeft: '50px', fontSize: '18px' }}>Store</p> <IoIosArrowDown type='button' style={{ marginTop: '-75px', marginLeft: '210px', fontSize: '25px' }} />
            </div>
            <div style={{ height: '40px', width: '250px' }} className='store border mt-2 ms-4'>
              <FaRegUser className='mt-1' style={{ width: '50px', height: '30px' }} /> <p style={{ marginTop: '-30px', marginLeft: '50px', fontSize: '18px' }}>User Account</p> <IoIosArrowDown type='button' style={{ marginTop: '-75px', marginLeft: '210px', fontSize: '25px' }} />
            </div>
            <div style={{ height: '40px', width: '250px' }} className='store border mt-2 ms-4'>
              <MdBookmarkBorder className='mt-1' style={{ width: '50px', height: '30px' }} /> <p style={{ marginTop: '-30px', marginLeft: '50px', fontSize: '18px' }}>Orders</p> <IoIosArrowDown type='button' style={{ marginTop: '-75px', marginLeft: '210px', fontSize: '25px' }} />
            </div>
            <div style={{ height: '40px', width: '250px' }} className='store border mt-2 ms-4'>
              <FcSupport className='mt-1' style={{ width: '50px', height: '30px' }} /> <p style={{ marginTop: '-30px', marginLeft: '50px', fontSize: '18px' }}>Contact & Support</p> <IoIosArrowDown type='button' style={{ marginTop: '-75px', marginLeft: '210px', fontSize: '25px' }} />
            </div>
            <div style={{ height: '40px', width: '250px' }} className='store border mt-2 ms-4'>
              <GoCodeOfConduct className='mt-1' style={{ width: '50px', height: '30px' }} /> <p style={{ marginTop: '-30px', marginLeft: '50px', fontSize: '18px' }}>Terms & Condition</p> <IoIosArrowDown type='button' style={{ marginTop: '-75px', marginLeft: '210px', fontSize: '25px' }} />
            </div>
          </div>
        </div>
        <div className='col-lg-8 ' style={{ width: '72%', height: '89vh', backgroundColor: '#dee2e3' }}>
          <p type="button" className='one border rounded ' style={{ width: '90px', height: '35px', marginTop: '120px', marginLeft: '10px'}}> <span className='ms-1'>Products</span> </p><PiNumberSquareEightFill style={{ marginTop: '-100px', marginLeft: '80px' }} />
          <p type="button" className='one border ' style={{ width: '80px', marginTop: '-35px', marginLeft: '10px' }}> <span className='ms-1'>Orders</span> </p>
          <p type="button" className='one border ' style={{ width: '150px', marginTop: '-3px', marginLeft: '10px' }}> <span className='ms-1'>Store Settings</span> </p>
          <div className='border rounded' style={{ height: '20px', width: '150px', marginTop: '-210px', marginLeft: '300px', backgroundColor: 'white' }}>
            <p style={{ fontSize: '13px' }}>All</p><IoIosArrowDown type='button' style={{ marginTop: '-80px', marginLeft: '120px', fontSize: '20px' }} />
          </div>
          <div className='border rounded' style={{ height: '20px', width: '150px', marginTop: '-20px', marginLeft: '500px', backgroundColor: 'white' }}>
            <p style={{ fontSize: '13px' }}>All</p><IoIosArrowDown type='button' style={{ marginTop: '-80px', marginLeft: '120px', fontSize: '20px' }} />
          </div>
          <div className='border rounded' style={{ height: '20px', width: '150px', marginTop: '-20px', marginLeft: '700px', backgroundColor: 'white' }}>
            <p style={{ fontSize: '13px' }}>All</p><IoIosArrowDown type='button' style={{ marginTop: '-80px', marginLeft: '120px', fontSize: '20px' }} />
          </div>
          <div className='rounded shadow' style={{ position: 'relative', backgroundColor: 'white', width: '87%', height: '70vh', marginLeft: '118px', marginTop: '35px' }}>
            <div style={{ marginLeft: '360px' }}>
              <input style={{ height: '25px' }} className='mt-4'
                type="text"
                placeholder="Search..."
                value=''
              />
            </div>
            <div className='border rounded' style={{ height: '25px', width: '100px', marginTop: '-25px', marginLeft: '590px', backgroundColor: '#92c3f7' }}>
              <FaFilter style={{ marginLeft: '5px' }} />    <p style={{ fontSize: '14px', marginLeft: '35px', marginTop: '-22px' }}>Sort</p><IoIosArrowDown type='button' style={{ marginTop: '-81px', marginLeft: '70px', fontSize: '20px' }} />
            </div>
            <div className='d-flex justify-content-evenly'>
              <div className=' border mt-5 ms-1' style={{ height: '200px', width: '150px' }}>
                <FaPlus type='button' style={{ fontSize: '30px', marginTop: '50%', marginLeft: '40%', color: 'blue' }} />
                <p className='mt-3' style={{ marginLeft: '22%', color: 'blue' }}>Add Project</p>
              </div>
              <Card className='border shadow' style={{ marginTop: '30px' }} sx={{ maxWidth: 170 }}>
                <CardMedia
                  sx={{ height: 100 }}
                  image={pic2}
                  title="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Apple iPhone 15 (128 GB)
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Typically ₹66,999–₹89,900        </Typography>
                </CardContent>
              </Card>
              <Card className='border shadow' style={{ marginTop: '30px' }} sx={{ maxWidth: 170 }}>
                <CardMedia
                  sx={{ height: 100 }}
                  image={pic2}
                  title="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Apple iPhone 15 (128 GB)
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Typically ₹66,999–₹89,900        </Typography>
                </CardContent>
              </Card>
              <Card className='border shadow' style={{ marginTop: '30px' }} sx={{ maxWidth: 170 }}>
                <CardMedia
                  sx={{ height: 100 }}
                  image={pic2}
                  title="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Apple iPhone 15 (128 GB)        </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Typically ₹66,999–₹89,900        </Typography>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App