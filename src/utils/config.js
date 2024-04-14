const predictedClassNames = [
  "...",
  "I am feeling like vomiting.",
  "I had an injury.",
  "I am having a headache.",
  "I am having loose motions",
  "I have high fever.",
  "I have cough and my throat is aching.",
  "Yes",
  "No",
  "...",
  "...",
];

export function getPredictedDisease(predictedClass) {
  if (predictedClass === null) {
    return predictedClassNames[0];
  }

  return predictedClassNames[predictedClass + 1];
}
