import AboutCard from "./AboutCard";
import teamMembers from "../data/teamMembers";
import HeaderNavMobile from "../components/HeaderNavMobile";

function AboutList() {
  return (
    <div className="about-section">
      <HeaderNavMobile />
      <div className="team-section">
        {teamMembers.map((teamMember) => (
          <AboutCard key={teamMember.id} teamMember={teamMember} />
        ))}
      </div>
    </div>
  );
}

export default AboutList;
