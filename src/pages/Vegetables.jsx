
import { vegetables } from "../data/vegetables";
import LearningCards from "../components/LearningCards";

function Vegetables() {
  return (
    <LearningCards
      title="Learn Vegetables 🥕"
      items={vegetables}
      type="vegetables"
    />
  );
}

export default Vegetables;
