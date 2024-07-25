import obeyaphoto from "../assets/obeya-simon.jpeg";
import profOpeyemiphoto from "../assets/prof-opeyemi.jpeg";
import aliUsmanphoto from "../assets/ali-usman.jpeg";
import muhibideenRilwanphoto from "../assets/muhibideen-rilwan.jpeg";
import emmaOmalephoto from "../assets/myPhoto2.jpg";

const ManagementTeamPage = () => {
  return (
    <main className="management-team-page">
      <div className="management-team-page-center">
        <div className="card one">
          <div className="picture obeya-photo">
            <img src={obeyaphoto} alt="" className="obeya photo" />
          </div>
          <div className="name-title">
            <h4 className="name">
              Emmanuel Obeya Simon (AAT, ACA, ACTI, ACIS)
            </h4>
            <p className="title">MD/CEO – Midas Touch Consultancy</p>
          </div>
        </div>
        <div className="card">
          <div className="picture ali-photo">
            <img src={aliUsmanphoto} alt="" className="ali usman photo" />
          </div>
          <div className="name-title">
            <h4 className="name">Ali Usman Mamuda (ACA, Msc)</h4>
            <p className="title">Executive Director</p>
          </div>
        </div>
        <div className="card">
          <div className="picture prof-photo">
            <img src={profOpeyemiphoto} alt="" className="prof opeyemi photo" />
          </div>
          <div className="name-title">
            <h4 className="name">Prof. Opeyemi Akinniyi (FCA)</h4>
            <p className="title">Head, Student Affairs and Special Project</p>
          </div>
        </div>
        <div className="card">
          <div className="picture rilwan-photo">
            <img
              src={muhibideenRilwanphoto}
              alt=""
              className="muhibideen rilwan photo"
            />
          </div>
          <div className="name-title">
            <h4 className="name">Rilwan Lukeman (ACA, ACCA)</h4>
            <p className="title">Head, Tax Services</p>
          </div>
        </div>
        <div className="card">
          <div className="picture arumona-photo">
            <img
              src={emmaOmalephoto}
              alt=""
              className="arumona emmanuel photo"
            />
          </div>
          <div className="name-title">
            <h4 className="name">Arumona Omale(Software Engineer)</h4>
            <p className="title">Head of IT and Corporate Communication</p>
          </div>
        </div>
      </div>
    </main>
  );
};
export default ManagementTeamPage;
