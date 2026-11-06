
import { birds } from "../data/birds";
import LearningCards from "../components/LearningCards";

function Birds() {
  return (
    <LearningCards
      title="Learn Birds 🐦"
      items={birds}
      type="birds"
    />
  );
}

export default Birds;
