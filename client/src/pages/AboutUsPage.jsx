import weArePhoto from "../assets/galleryPhotos/galleryPhoto20.jpeg";

const AboutUsPage = () => {
  window.scrollTo(0, 0);
  return (
    <main className="about-page">
      <div className="about-page-center">
        <h1 className="about-us-heading">
          Who We Are: Turning Vision into Value
        </h1>
        <hr width="100px" color="#a9ce4d" />
        <div className="about-photo-container">
          <img src={weArePhoto} alt="" className="about-photo" />
        </div>
        <p className="about-us-paragraph p1">
          At Midas Touch Consultancy, we believe every individual, business, and
          organization has the potential to excel — and we exist to make that
          happen. With offices in Lagos and Maiduguri, we have spent over five
          years delivering solutions that empower growth, ensure compliance, and
          build lasting success.
        </p>
        <p className="about-us-paragraph p2">
          Our expertise spans Compliance, Strategic Business Advisory, Internal
          Control, Audit, Corporate Training, ICAN Training for Students,
          Monitoring and Evaluation, Proposal Development, Career Coaching,
          Corporate Governance and Team Building, and Accounting Software
          Training and Optimization.
        </p>
        <p className="about-us-paragraph p3">
          We are a dynamic team of Chartered Accountants, Tax Practitioners, and
          Management Experts who blend deep professional knowledge with
          practical strategies. From strengthening governance frameworks to
          preparing students for professional excellence, we bring a touch of
          gold to every project we handle.
        </p>
      </div>
    </main>
  );
};
export default AboutUsPage;
