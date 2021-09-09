import './index.css';
import React from "react";
import http from "src/services/http";
import { Avatar } from 'primereact/avatar';
import { Tag } from 'primereact/tag';
import { InputText } from 'primereact/inputtext';

const ProfilePage = () => {
    const [data, setData] = React.useState();

    React.useEffect(() => {
        http.get("/a/me").then((res) => {
            console.log(res.data);
            setData(res.data);
        });
    }, []);

    return (
        <div className="profile-page">
            <div className="p-grid">
                <div className="p-col-fixed" style={{ width: '106px'}}>
                    <Avatar icon="pi pi-user" className="p-mr-2" size="xlarge" />
                </div>
                <div className="p-col account">
                    <h4 className="account-title">{data && data.roles && data.roles[0] && data.roles[0].label }</h4>
                    <div className="account-email">{data && data.email}</div>
                    <Tag value={`${data && data.account_type} Account`} />
                </div>
            </div>
            <div className="p-fluid p-formgrid p-grid">
                <div className="p-field p-col">
                    <label htmlFor="firstname">Firstname</label>
                    <InputText id="firstname" type="text" value={data && data.first_name}/>
                </div>
                <div className="p-field p-col">
                    <label htmlFor="lastname">Lastname</label>
                    <InputText id="lastname" type="text" value={data && data.last_name}/>
                </div>
            </div>
            <div className="p-fluid p-formgrid p-grid">
                <div className="p-field p-col">
                    <label htmlFor="company">Company</label>
                    <InputText id="company" type="text" value={data && data.company && data.company.name}/>
                </div>
                <div className="p-field p-col">
                    <label htmlFor="company">Department</label>
                    <InputText id="company" type="text" value={data && data.company_department}/>
                </div>
            </div>
            <div className="p-fluid p-formgrid p-grid">
                <div className="p-field p-col">
                    <label htmlFor="jobTitle">Job Title</label>
                    <InputText id="jobTitle" type="text" value={data && data.job_title}/>
                </div>
                <div className="p-field p-col">
                    <label htmlFor="employeeId">Employee ID</label>
                    <InputText id="employeeId" type="text" value={data && data.employee_number}/>
                </div>
            </div>
            <div className="p-fluid p-formgrid p-grid">
                <div className="p-field p-col phone-number">
                    <label htmlFor="phoneNumber">Phone Number</label>
                    <div>
                        <InputText id="phoneNumberCode" className="phone-number-input" type="text" value="Malaysia (+60)" />
                        <InputText id="phoneNumber" className="phone-number-input" type="text" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfilePage;