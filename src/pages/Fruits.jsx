
import { fruits } from "../data/fruits";
import LearningCards from "../components/LearningCards";

function Fruits() {
  return (
    <LearningCards
      title="Learn Fruits 🍎"
      items={fruits}
      type="fruits"
    />
  );
}

export default Fruits;
