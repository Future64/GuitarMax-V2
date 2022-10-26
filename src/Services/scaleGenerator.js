import { scales } from "../Data/scaleData";

/**
 * It takes a scale and a root note, and returns a new scale with the root note at the beginning
 * @param scale - the scale you want to use
 * @param rootNote - the note you want to start the scale on
 * @returns An array of notes that are in the scale.
 */
export const splitAndBuildScale = (scale, rootNote) => {
  let newScale = scale.slice(scale.indexOf(rootNote));
  let newScaleZero = scale.slice(0, scale.indexOf(rootNote));
  let scaleFinished = [...newScale, ...newScaleZero];
  return scaleFinished;
};

/**
 * It takes a root note and an accidental, and returns a chromatic scale based on the root note and
 * accidental
 * @param rootNote - The root note of the scale.
 * @param alt - "sharp" or "flat"
 * @returns An array of notes in the chromatic scale
 */
export const buildNewChromaScale = (rootNote, alt) => {
  if (alt === "#") {
    return splitAndBuildScale(scales[0].notesSharp, rootNote);
  } else if (alt === "b") {
    return splitAndBuildScale(scales[0].notesFlat, rootNote);
  } else {
    return "Please enter a valid root note and accidentals";
  }
};

/**
 * It takes in a scaleForLive array and a chromaScale array, and returns a builtMajorScale array
 * @param scaleForLive - an array of numbers that represent the scale you want to build.
 * @param chromaScale - an array of all the notes in the chromatic scale
 * @returns An array of the notes in the scale.
 */
export const scaleConstructor = (scaleForLive, chromaScale) => {
  let builtMajorScale = [];
  for (let i = 0; i < scaleForLive.length; i++) {
    builtMajorScale.push(chromaScale[scaleForLive[i]]);
  }
  return builtMajorScale;
};

/**
 * It takes a note, a scale, an alteration, and a number of notes, and returns a scale with the number
 * of notes specified
 * @param note - the note you want to start from
 * @param scale - the scale you want to play
 * @param alt - the alteration of the note (sharp or flat)
 * @param nbNotes - the number of notes you want to display on the fretboard
 * @returns An array of notes
 */
export const scaleGenerator = (note, scale, alt, nbNotes) => {
  buildNewChromaScale(note, alt);
  let scaleFinnaly = scaleConstructor(scale, buildNewChromaScale(note, alt));
  let scaleAdd = scaleFinnaly.slice(0, nbNotes);

  let scaleToDisplay = [...scaleFinnaly, ...scaleAdd];

  return scaleToDisplay;
};

/**
 * If the note is in the scale, return the class name "", otherwise return the class name "hidden"
 * @param note - the note you want to check
 * @param scale - an array of notes that make up the scale
 * @returns The class name of the note.
 */
export const displayScale = (note, scale) => {
  let classN = "hidden";
  if (scale.find((elm) => elm === note)) {
    classN = "";
    return classN;
  }
  classN = "hidden";
  return classN;
};

export const selectScale = (userInputs) => {
  if (userInputs.scale === "Pentatonique majeure") {
    return scales[0].majorPentatonicScale;
  } else if (userInputs.scale === "Pentatonique mineure") {
    return scales[0].minorPentatonicScale;
  } else if (userInputs.scale === "Majeure naturel") {
    return scales[0].naturalMajorScale;
  } else if (userInputs.scale === "Mineure naturel") {
    return scales[0].naturalMinorScale;
  } else if (userInputs.scale === "Mineure Harmonique") {
    return scales[0].harmonicMinorScale;
  } else if (userInputs.scale === "Mineure Mélodique") {
    return scales[0].melodicMinorScale;
  } else if (userInputs.scale === "Unitonique") {
    return scales[0].wholeToneScale;
  } else if (userInputs.scale === "Dimminuée") {
    return scales[0].diminishedScale;
  } else if (userInputs.scale === "Augmentée") {
    return scales[0].augmentedScale;
  } else if (userInputs.scale === "Mode Ionien") {
    return scales[0].ionianScale;
  } else if (userInputs.scale === "Mode Dorian") {
    return scales[0].dorianScale;
  } else if (userInputs.scale === "Mode Phrygien") {
    return scales[0].phrygianScale;
  } else if (userInputs.scale === "Mode Lydien") {
    return scales[0].lydianScale;
  } else if (userInputs.scale === "Mode Mixolydien") {
    return scales[0].mixolydianScale;
  } else if (userInputs.scale === "Mode Éolien") {
    return scales[0].aeolianScale;
  } else if (userInputs.scale === "Mode Locrien") {
    return scales[0].locrianScale;
  } else if (userInputs.scale === "Chromatique") {
    return scales[0].chromaticScale;
  } else if (userInputs.scale === "Bebop Majeur") {
    return scales[0].majorBebopScale;
  } else if (userInputs.scale === "Bebop Mineur") {
    return scales[0].minorBebopScale;
  }
};
