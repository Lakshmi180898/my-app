import React, { useState, useEffect } from 'react'

const Assignment = () => {
    const restraurantdata = {
        adminname: '',
        res_name: '',
        res_add: '',
        location: '',
        email: '',
        number: '',
        bank_acc: '',
        acc_name: '',
        bank_ifsc: '',
        gst: '',
        fssai: '',
        res_logo: '',
        start_time: '',
        end_time: '',
        select: '',
        manager_number: '',
        one: '',
        two: '',
        three: '',
        four: '',
        five: ''
    }
    const [formvalues, setFormvalues] = useState(restraurantdata)
    const [formerrors, setFormerrors] = useState({})
    const [issubmit, setISsubmit] = useState(false)
    const changehandler = (e) => {
        setFormvalues({ ...formvalues, [e.target.name]: e.target.value })
    }
    const submithandler = (e) => {
        e.preventDefault()
        console.log(formvalues)
        setFormerrors(validate(formvalues))
        setISsubmit(true)
    }
    useEffect(() => {
        if (Object.keys(formerrors).length === 0 && issubmit) {
            console.log(formerrors)
        }
    }, [])
    const validate = (values) => {
        const errors = {}
        if (!values.adminname) {
            errors.adminname = 'This field is required'
        }
        if (!values.res_name) {
            errors.res_name = 'This field is required'
        }
        if (!values.res_add) {
            errors.res_add = 'This field is required'
        }
        if (!values.location) {
            errors.location = 'This field is required'
        }
        if (!values.email) {
            errors.email = 'This field is required'
        }
        if (!values.number) {
            errors.number = 'This field is required'
        }
        if (!values.bank_acc) {
            errors.bank_acc = 'This field is required'
        }
        if (!values.acc_name) {
            errors.acc_name = 'This field is required'
        }
        if (!values.bank_ifsc) {
            errors.bank_ifsc = 'This field is required'
        }
        if (!values.gst) {
            errors.gst = 'This field is required'
        }
        if (!values.gst) {
            errors.gst = 'This field is required'
        }
        if (!values.fssai) {
            errors.fssai = 'This field is required'
        }
        if (!values.res_logo) {
            errors.res_logo = 'This field is required'
        }
        if (!values.start_time) {
            errors.start_time = 'This field is required'
        }
        if (!values.end_time) {
            errors.end_time = 'This field is required'
        }
        if (!values.select) {
            errors.select = 'This field is required'
        }
        if (!values.manager_number) {
            errors.manager_number = 'This field is required'
        }
        return errors
    }
    return (
        <>
          
                <nav className=' navbar nav-light bg-light navabar-expand-lg'>
                    <i><h3>Restaurant logo</h3></i>
                    <h4 className='text-warning'>ADD RESTAURANT</h4>
                    <button className='btn btn-warning rounded-pill'>Register Now</button>
                </nav>
                <div className='container-fluid'>
                <div className='row'>
                    {/* col1 */}
                    <div className='col col-md-3'>
                        {/* navbar */}
                        <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                            <a className="nav-link active" data-toggle="pill" href="#v-pills-home" role="tab" aria-selected="true">Dashboard</a>
                            <a className="nav-link" data-toggle="pill" href="#v-pills-profile" role="tab" aria-selected="true">Live There</a>
                            <a className="nav-link" data-toggle="pill" href="#v-pills-messages" role="tab" aria-selected="false">Reports</a>
                            <a className="nav-link" data-toggle="pill" href="#v-pills-settings" role="tab" aria-selected="false">Orders</a>
                            <a className="nav-link" data-toggle="pill" href="#v-pills-settings" role="tab" aria-selected="false">Transactions</a>
                            <a className="nav-link" data-toggle="pill" href="#v-pills-settings" role="tab" aria-selected="false">Customers</a>
                            <a className="nav-link" data-toggle="pill" href="#v-pills-settings" role="tab" aria-selected="false">Teams Management</a>
                            <a className="nav-link" data-toggle="pill" href="#v-pills-settings" role="tab" aria-selected="false">Customer Management</a>
                            <a className="nav-link" data-toggle="pill" href="#v-pills-settings" role="tab" aria-selected="false">Coupons</a>
                            <a className="nav-link" data-toggle="pill" href="#v-pills-settings" role="tab" aria-selected="false">Banners</a>
                            <a className="nav-link" data-toggle="pill" href="#v-pills-settings" role="tab" aria-selected="false">Settlements</a>
                            <a className="nav-link" data-toggle="pill" href="#v-pills-settings" role="tab" aria-selected="false">Others</a>
                            <a className="nav-link" data-toggle="pill" href="#v-pills-settings" role="tab" aria-selected="false">Sub Admin</a>
                        </div>
                    </div>
                    {/* col2 */}
                    <div className='col col-md-9'>
                        <pre>{JSON.stringify(formvalues)}</pre>
                        <form onSubmit={submithandler}>
                            <div className='row'>

                                <div className='col col-md-6'>
                                    {/* form1 */}
                                    <h4>Restaurant Details</h4>
                                    <label>Admin Name</label>
                                    <input type='text' className='form-control' placeholder='Enter Admin Name' name='adminname' value={formvalues.adminname} onChange={changehandler} />
                                    <p className='text-danger'>{formerrors.adminname}</p>
                                    <label>Restaurant Name</label>
                                    <input type='text' className='form-control' placeholder='Enter Restaurant Name' name='res_name' value={formvalues.res_name} onChange={changehandler} />
                                    <p className='text-danger'>{formerrors.res_name}</p>
                                    <label>Restaurant Address</label>
                                    <input type='text' className='form-control' placeholder='Enter Address' name='res_add' value={formvalues.res_add} onChange={changehandler} />
                                    <p className='text-danger'>{formerrors.res_add}</p>
                                    <label>Restaurant Google Location</label>
                                    <input type='text' className='form-control' placeholder='Select location' name='location' value={formvalues.location} onChange={changehandler} /><br />
                                    <p className='text-danger'>{formerrors.location}</p>
                                    {/* form2 */}
                                    <h4>Other Details</h4>
                                    <label>Restaurant Email</label>
                                    <input type='email' className='form-control' placeholder='Enter Email Id' name='email' value={formvalues.email} onChange={changehandler} />
                                    <p className='text-danger'>{formerrors.email}</p>
                                    <label>Restaurant Phone Number</label>
                                    <input type='number' className='form-control' placeholder='Enter Restaurant Phone Number' name='number' value={formvalues.number} onChange={changehandler} />
                                    <p className='text-danger'>{formerrors.number}</p>
                                    <label>Bank Account Number</label>
                                    <input type='number' className='form-control' placeholder='Enter Bank Account Number' name='bank_acc' value={formvalues.bank_acc} onChange={changehandler} />
                                    <p className='text-danger'>{formerrors.bank_acc}</p>
                                    {/* two cols */}
                                    <div className='row mt-3'>
                                        <div className='col col-md-6'>
                                            <label>Account Holder Name</label>
                                            <input type='text' placeholder='Enter Account Holder Name' className='form-control' name='acc_name' value={formvalues.acc_name} onChange={changehandler} />
                                            <p className='text-danger'>{formerrors.acc_name}</p>
                                        </div>
                                        <div className='col col-md-6'>
                                            <label>Bank IFSC CODE</label>
                                            <input type='text' placeholder='Enter Bank IFSC code' className='form-control' name='bank_ifsc' value={formvalues.bank_ifsc} onChange={changehandler} />
                                            <p className='text-danger'>{formerrors.bank_ifsc}</p>
                                        </div>
                                    </div>
                                    <label>GST Number</label>
                                    <input type="file" className='form-control' placeholder='Enter GST Number' name='gst' onChange={changehandler} />
                                    <p className='text-danger'>{formerrors.gst}</p>
                                    <label>FSSAI Number</label>
                                    <input type='file' className='form-control' placeholder='Enter FSSAI Number' name='fssai' onChange={changehandler} /><br />
                                    <p className='text-danger'>{formerrors.fssai}</p>
                                </div>


                                <div className='col col-md-6 mt-4'>
                                    {/* form3 */}
                                    <label>Restaurant Logo</label>
                                    <input type='file' className='form-control' placeholder='Select fil to upload' name='res_logo' onChange={changehandler} />
                                    <p className='text-danger'>{formerrors.res_logo}</p>
                                    <label>Restaurant Timings(Morning)</label>
                                    <input type='time' className='form-control' name='start_time' value={formvalues.start_time} onChange={changehandler} />
                                    <p className='text-danger'>{formerrors.start_time}</p>
                                    <label>Restaurant Timings(Evening)</label>
                                    <input type='time' className='form-control' name='end_time' value={formvalues.end_time} onChange={changehandler} />
                                    <p className='text-danger'>{formerrors.end_time}</p>
                                    <label> Restaurant Type</label>
                                    <select className='form-control' name='select' onChange={changehandler}>
                                        <option>select veg/Non-veg</option>
                                        <option>Veg</option>
                                        <option>Non-veg</option>
                                    </select><br />
                                    <p className='text-danger'>{formerrors.select}</p>
                                    <h3>Relationship Manager</h3>
                                    <label>Manager Number</label>
                                    <input type='text' className='form-control mb-4' placeholder='Enter Phone number' name='manager_number' value={formvalues.manager_number} onChange={changehandler} />
                                    <p className='text-danger'>{formerrors.manager_number}</p>
                                    <h3 className='mb-3'>Restaurant Categories</h3>
                                    <hr />
                                    <div className="custom-control custom-switch mb-3">
                                        <input type="checkbox" className="custom-control-input" id="customSwitches" name='one' onChange={changehandler} />
                                        <label className="custom-control-label" htmlFor="customSwitches">Category one</label>
                                    </div>
                                    <div className="custom-control custom-switch mb-3">
                                        <input type="checkbox" className="custom-control-input" id="customSwitches1" name='two' onChange={changehandler} />
                                        <label className="custom-control-label" htmlFor="customSwitches1">Category Two</label>
                                    </div>
                                    <div className="custom-control custom-switch mb-3">
                                        <input type="checkbox" className="custom-control-input" id="customSwitches2" name='three' onChange={changehandler} />
                                        <label className="custom-control-label" htmlFor="customSwitches2">Category  Three</label>
                                    </div>
                                    <div className="custom-control custom-switch mb-3">
                                        <input type="checkbox" className="custom-control-input" id="customSwitches3" name='four' onChange={changehandler} />
                                        <label className="custom-control-label" htmlFor="customSwitches3">Category  Four</label>
                                    </div>
                                    <div className="custom-control custom-switch mb-3">
                                        <input type="checkbox" className="custom-control-input" id="customSwitches4" name='five' onChange={changehandler} />
                                        <label className="custom-control-label" htmlFor="customSwitches4">Category five</label>
                                    </div>
                                </div>
                            </div>
                            <button className='btn btn-warning text-white p-2'>Create Restaurant</button>
                        </form>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Assignment