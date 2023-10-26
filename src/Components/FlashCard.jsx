import "../flash-card.css";

import React, { useState } from "react";

const questions = [
  {
    id: 2341,
    question: "What biblical verse emphasizes being a new creation in Christ?",
    answer:
      "2 Corinthians 5:17 (NIV) - Therefore, if anyone is in Christ, the new creation has come: The old has gone, the new is here!",
  },
  {
    id: 5432,
    question:
      "In the Living the New Life series, what verse urges believers to offer their bodies as a living sacrifice?",
    answer:
      "Romans 12:1 (NIV) - Therefore, I urge you, brothers and sisters, in view of God’s mercy, to offer your bodies as a living sacrifice, holy and pleasing to God—this is your true and proper worship.",
  },
  {
    id: 6453,
    question:
      "Which verse underscores the divine inspiration and usefulness of all Scripture?",
    answer:
      "2 Timothy 3:16 (NIV) - All Scripture is God-breathed and is useful for teaching, rebuking, correcting and training in righteousness.",
  },
  {
    id: 6784,
    question:
      "Which verse promises answered prayers to those who remain in Christ and His words?",
    answer:
      "John 15:7 (NIV) - If you remain in me and my words remain in you, ask whatever you wish, and it will be done for you.",
  },
  {
    id: 5255,
    question:
      "What verse speaks of Jesus' presence when believers gather in His name?",
    answer:
      "Matthew 18:20 (NIV) - For where two or three gather in my name, there am I with them.",
  },
  {
    id: 6098,
    question:
      "In the context of discipleship, what does the verse 'Come, follow me,' signify?",
    answer:
      "Matthew 4:19 (NIV) - 'Come, follow me,' Jesus said, 'and I will send you out to fish for people.'",
  },
  {
    id: 8757,
    question:
      "Which verse declares the universal nature of sin and the need for redemption?",
    answer:
      "Romans 3:23 (NIV) - for all have sinned and fall short of the glory of God.",
  },
  {
    id: 8345,
    question: "What verse reminds us of the consequences of sin?",
    answer:
      "Romans 6:23 (NIV) - For the wages of sin is death, but the gift of God is eternal life in Christ Jesus our Lord.",
  },
  {
    id: 4569,
    question:
      "Which verse speaks of God's love demonstrated through Christ's sacrifice?",
    answer:
      "Romans 5:8 (NIV) - But God demonstrates his own love for us in this: While we were still sinners, Christ died for us.",
  },
  {
    id: 6510,
    question:
      "What verses emphasize salvation by grace through faith and not by works?",
    answer:
      "Ephesians 2:8-9 (NIV) - For it is by grace you have been saved, through faith—and this is not from yourselves, it is the gift of God—not by works, so that no one can boast.",
  },
  {
    id: 1671,
    question:
      "Which verse emphasizes the need to receive Christ to become children of God?",
    answer:
      "John 1:12 (NIV) - Yet to all who did receive him, to those who believed in his name, he gave the right to become children of God—",
  },
  {
    id: 7612,
    question: "What verse depicts Christ knocking at the door of one's heart?",
    answer:
      "Revelation 3:20 (NIV) - Here I am! I stand at the door and knock. If anyone hears my voice and opens the door, I will come in and eat with that person, and they with me.",
  },
  {
    id: 1893,
    question: "What verse assures believers of eternal life?",
    answer:
      "1 John 5:13 (NIV) - I write these things to you who believe in the name of the Son of God so that you may know that you have eternal life.",
  },
  {
    id: 1454,
    question:
      "Which verse states that believers have crossed over from death to life?",
    answer:
      "John 5:24 (NIV) - Very truly I tell you, whoever hears my word and believes him who sent me has eternal life and will not be judged but has crossed over from death to life.",
  },
  {
    id: 7515,
    question: "What verse highlights believers as the temple of God's Spirit?",
    answer:
      "1 Corinthians 3:16 (NIV) - Don’t you know that you yourselves are God’s temple and that God’s Spirit dwells in your midst?",
  },
  {
    id: 4516,
    question:
      "Which verse speaks of God's strength being made perfect in weakness?",
    answer:
      "2 Corinthians 12:9 (NIV) - But he said to me, 'My grace is sufficient for you, for my power is made perfect in weakness.' Therefore I will boast all the more gladly about my weaknesses, so that Christ’s power may rest on me.",
  },
];

function FlashCards() {
  const [selectedId, setSelectedId] = useState(null);

  function handleClick(id) {
    setSelectedId(id !== selectedId ? id : null);
  }

  return (
    <div className="flashcards">
      {questions.map((question) => (
        <div
          key={question.id}
          onClick={() => handleClick(question.id)}
          className={question.id === selectedId ? "selected" : ""}
        >
          <p>
            {question.id === selectedId ? question.answer : question.question}
          </p>
        </div>
      ))}
    </div>
  );
}

export default FlashCards;
