import TeamCard from "./TeamCard";
import Peroson1 from "../../assets/images/person1.png";
import Peroson2 from "../../assets/images/person2.png";
import Peroson3 from "../../assets/images/person3.png";

const Team = () => {
  return (
    <div className="py-16 container">
      <h4 className="text-3xl  font-bold text-center">The Core of Our Team</h4>
      <p className="text-stale text-center mx-auto lg:w-[70%] mt-4">
        Organically grow the holistic world view of disruptive innovation via
        workplace diversity and empowerment of people and great talent that
        truly rocks.
      </p>
      <div className="grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
        <TeamCard image={Peroson1} name={"Morgan Drew"} desigination={"Manager"}/>
        <TeamCard image={Peroson2} name={"Jeffery Walker"} desigination={"Lead Designer"}/>
        <TeamCard image={Peroson3} name={"Andrew Steve"} desigination={"UI/UX Designer"}/>
      </div>
    </div>
  );
};

export default Team;
