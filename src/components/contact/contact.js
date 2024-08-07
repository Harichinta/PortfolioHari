import React from 'react'
import './contact.css'
// import linkedinlogo from '../../assets/linkedinicon.webp'
// import mailicon from '../../assets/Maililogo.png'
import linkedinlogo from '../../assets/linkedsvglog.svg'
import mailicon from '../../assets/Maillogosvg.svg'
import contactusgif from '../../assets/contactusgif.gif'
function contact() {
  return (
    <div className='cntmainbg mt-0'>
      <div className='row contactmain'>
        <div className='contacthead pt-2'>Get In Touch</div>
        {/* <div className="cntform mb-2">
        <div className="formsec" >
          <div className='iconcontainer'>
            <div className="contacttitl">
              Thank You For Connecting
            </div>
          </div>
          <form action="" >
            <div className='mt-4'>
              <input type="email" placeholder='Email' className='inputfeild' autoComplete='none' />
            </div>
            <div className='mt-4'>
              <input type="phone" placeholder='Phone' className='inputfeild' autoComplete='none' />
            </div>

            <div className='mt-4'>
              <textarea placeholder='Message' autoComplete='none' cols="80" style={{ minHeight: "100px", maxHeight: "200px" }} className='textareafeild'></textarea>
            </div>

            <button type='submit' className='mt-4 contactsubmit m-auto'>Connect</button>
          </form>
          <div className='mt-3' style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div><img src={linkedinlogo} alt="" width="70px" /></div>
            <div><img src={mailicon} alt="" width="70px" /></div>
          </div>
        </div>
      </div> */}

        <div className="row getintouch pb-4 pt-3">
          <div className="col-md"></div>
          <div className="col-md-4">
            <div className="formsection mt-5">
              <h3>Thank you for Visting</h3>
              <p className='cntdescription'>If you love my Profile please contact me. we well make change in web world</p>
              <div style={{ display: "block" }}>
                <a href='https://www.linkedin.com/in/hari9100' target='blank' className='linkedinpath'><img src={linkedinlogo} alt="" width="52px" />https://www.linkedin.com/in/hari9100</a> <br />
                <a href='mailto:harivenkateshjb12@gmail.com' className='mailpath'>
                  <img src={mailicon} alt="Email" width="26px" style={{marginRight:"10px"}} />
                  harivenkateshjb12@gmail.com
                </a>

              </div>
              <form action="" >
                <div className='mt-4'>
                  <input type="email" placeholder='Email' className='inputfeild' autoComplete='none' />
                </div>
                <div className='mt-4'>
                  <input type="phone" placeholder='Phone' className='inputfeild' autoComplete='none' />
                </div>

                <div className='mt-4'>
                  <textarea placeholder='Message' autoComplete='none' cols="80" style={{ minHeight: "100px", maxHeight: "200px" }} className='textareafeild'></textarea>
                </div>

                <button type='submit' className='mt-4 contactsubmit m-auto'>Connect</button>
              </form>
            </div>
          </div>
          <div className="col-md-5 d-md-block d-none">
            <div style={{ width: "100%" }}><img src={contactusgif} alt="" width="90%" /></div>

          </div>
          <div className="col-md"></div>

        </div>
      </div>
    </div>
  )
}

export default contact