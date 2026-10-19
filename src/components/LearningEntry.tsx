type LearningEntryProps = {
  topic: string;
  date: string;
  learned: string;
  confidence: number;
  dog: string;
};

function LearningEntry({ topic,date,learned,confidence,dog }: LearningEntryProps) {
  return (
    <article>
      <h2>{topic}</h2>
      <p>Date: {date}</p>
      <p>{learned}</p>
      <p>Confidence: {confidence} / 5</p>
      <p>Dog: {dog}</p>
    </article>
  );
}

export default LearningEntry;