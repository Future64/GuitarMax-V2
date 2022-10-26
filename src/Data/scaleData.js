export const scales = [
  {
    // gamme pentatonique et hexatonique
    minorPentatonicScale: [0, 3, 5, 7, 10],
    majorPentatonicScale: [0, 2, 4, 7, 9],
    majorPentatonicBluesScale: [0, 2, 3, 7, 9],
    minorPentatonicBluesScale: [0, 3, 5, 7, 10],

    // gamme hexatonique
    majorBluesScale: [0, 2, 3, 4, 7, 9],
    minorBluesScale: [0, 3, 5, 6, 7, 10],

    // Gamme naturelle
    chromaticScale: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    naturalMajorScale: [0, 2, 4, 5, 7, 9, 11],
    naturalMinorScale: [0, 2, 3, 5, 7, 8, 10],
    harmonicMinorScale: [0, 2, 3, 5, 7, 8, 11],
    melodicMinorScale: [0, 2, 3, 5, 7, 9, 11],
    majorBebopScale: [0, 2, 4, 5, 7, 8, 9, 11],
    minorBebopScale: [0, 2, 3, 5, 7, 8, 9, 10],

    // Mode grec
    ionianScale: [0, 2, 4, 5, 7, 9, 11],
    dorianScale: [0, 2, 3, 5, 7, 9, 10],
    phrygianScale: [0, 1, 3, 5, 7, 8, 10],
    lydianScale: [0, 2, 4, 6, 7, 9, 11],
    mixolydianScale: [0, 2, 4, 5, 7, 9, 10],
    aeolianScale: [0, 2, 3, 5, 7, 8, 10],
    locrianScale: [0, 1, 3, 5, 6, 8, 10],

    // Gamme symétrique
    wholeToneScale: [0, 2, 4, 6, 8, 10],
    diminishedScale: [0, 2, 3, 5, 6, 8, 9, 11],
    augmentedScale: [0, 3, 4, 7, 8, 11],

    // Gamme éxotique
    majorHarmonicMinorScale: [0, 2, 3, 5, 7, 8, 11],

    // Chromatic brut
    notesSharp: [
      "C",
      "C#",
      "D",
      "D#",
      "E",
      "F",
      "F#",
      "G",
      "G#",
      "A",
      "A#",
      "B",
    ],
    notesFlat: [
      "C",
      "Db",
      "D",
      "Eb",
      "E",
      "F",
      "Gb",
      "G",
      "Ab",
      "A",
      "Bb",
      "B",
    ],
  },
];

// export const scales = [
//   {
//     chromaticScale: {
//       build: [0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5],
//       name: "Chromatic",
//       notesSharp: [
//         "C",
//         "C#",
//         "D",
//         "D#",
//         "E",
//         "F",
//         "F#",
//         "G",
//         "G#",
//         "A",
//         "A#",
//         "B",
//       ],
//       notesFlat: [
//         "C",
//         "Db",
//         "D",
//         "Eb",
//         "E",
//         "F",
//         "Gb",
//         "G",
//         "Ab",
//         "A",
//         "Bb",
//         "B",
//       ],
//       description:
//         "The chromatic scale is the most common scale in music. It is a scale with all the notes of the chromatic scale.",
//     },
//     majorScale: {
//       build: [1, 1, 0.5, 1, 1, 1, 0.5],
//       name: "Major",
//       key: [
//         ["C", "D", "E", "F", "G", "A", "B"],
//         ["C#", "D#", "F", "F#", "G#", "A#", "C"],
//         ["Db", "Eb", "F", "Gb", "Ab", "Bb", "C"],
//         ["D", "E", "F#", "G", "A", "B", "C#"],
//         ["D#", "F", "G", "G#", "A#", "C", "D"],
//         ["Eb", "F", "G", "Ab", "Bb", "C", "D"],
//         ["E", "F#", "G#", "A", "B", "C#", "D#"],
//         ["F", "G", "A", "Bb", "C", "D", "E"],
//         ["F#", "G#", "A#", "B", "C#", "D#", "F"],
//         ["Gb", "Ab", "Bb", "B", "Db", "Eb", "F"],
//         ["G", "A", "B", "C", "D", "E", "F#"],
//         ["G#", "A#", "C", "C#", "D#", "F", "G"],
//         ["Ab", "Bb", "C", "Db", "Eb", "F", "G"],
//         ["A", "B", "C#", "D", "E", "F#", "G#"],
//         ["A#", "C", "D", "D#", "F", "G", "A"],
//         ["Bb", "C", "D", "Eb", "F", "G", "A"],
//         ["B", "C#", "D#", "E", "F#", "G#", "A#"],
//       ],
//       notes: [
//         { C: ["C", "D", "E", "F", "G", "A", "B"] },
//         { CSharp: ["C#", "D#", "E#", "F#", "G#", "A#", "B#"] },
//         { Db: ["Db", "Eb", "F", "Gb", "Ab", "Bb", "C"] },
//         { D: ["D", "E", "F#", "G", "A", "B", "C#"] },
//         { DSharp: ["D#", "E#", "G", "G#", "A#", "B#", "D"] },
//         { Eb: ["Eb", "F", "G", "Ab", "Bb", "C", "D"] },
//         { E: ["E", "F#", "G#", "A", "B", "C#", "D#"] },
//         { F: ["F", "G", "A", "Bb", "C", "D", "E"] },
//         { FSharp: ["F#", "G#", "A#", "B", "C#", "D#", "E#"] },
//         { Gb: ["Gb", "Ab", "Bb", "Cb", "Db", "Eb", "F"] },
//         { G: ["G", "A", "B", "C", "D", "E", "F#"] },
//         { GSharp: ["G#", "A#", "B#", "C#", "D#", "E#", "G"] },
//         { Ab: ["Ab", "Bb", "C", "Db", "Eb", "F", "G"] },
//         { A: ["A", "B", "C#", "D", "E", "F#", "G#"] },
//         { ASharp: ["A#", "B#", "D", "D#", "E#", "G", "A"] },
//         { Bb: ["Bb", "C", "D", "Eb", "F", "G", "A"] },
//         { B: ["B", "C#", "D#", "E", "F#", "G#", "A#"] },
//       ],
//       description:
//         "The major scale is the most common scale in music. It is a scale with all the notes of the chromatic scale.",
//     },
//     minorNatScale: {
//       build: [1, 0.5, 1, 1, 0.5, 1, 1],
//       name: "Minor Natural",
//       notes: ["C", "D", "D#", "F", "F#", "G", "A"],
//       description:
//         "The minor natural scale is the most common scale in music. It is a scale with all the notes of the chromatic scale.",
//     },
//     minorHarmonicScale: {
//       build: [1, 0.5, 1, 1, 0.5, 1.5, 0.5],
//       name: "Minor Harmonic",
//       notes: ["C", "D", "D#", "F", "F#", "G", "A#"],
//       description:
//         "The minor harmonic scale is the most common scale in music. It is a scale with all the notes of the chromatic scale.",
//     },
//     minorMelodicScale: {
//       build: [1, 0.5, 1, 1, 1, 1, 0.5],
//       name: "Minor Melodic",
//       notes: ["C", "D", "D#", "F", "F#", "G", "A"],
//       description:
//         "The minor melodic scale is the most common scale in music. It is a scale with all the notes of the chromatic scale.",
//     },
//   },
// ];
// // export default scales;

// export const modes = [
//   {
//     ionian: {
//       build: [1, 1, 0.5, 1, 1, 1, 0.5],
//       name: "Ionian",
//       description:
//         "The ionian scale is the default scale for the ionian mode. It is a major scale with the first note being a major third and the last note being a major seventh.",
//     },
//     dorian: {
//       buitld: [1, 0.5, 1, 1, 1, 0.5, 1],
//       name: "Dorian",
//       description:
//         "Dorian mode is a scale that starts with a 2nd and 3rd degree of the tonic, and then follows the same pattern of intervals. It is a major scale with the added note of the dominant.",
//     },
//     phrygian: {
//       build: [0.5, 1, 1, 1, 0.5, 1, 1],
//       name: "Phrygian",
//       description:
//         "Phrygian mode is a scale that starts with a 2nd and 3rd degree of the tonic, and then follows the same pattern of intervals. It is a major scale with the added note of the subdominant.",
//     },
//     lydian: {
//       build: [1, 1, 1, 0.5, 1, 1, 0.5],
//       name: "Lydian",
//       description:
//         "Lydian mode is a scale that starts with a 2nd and 3rd degree of the tonic, and then follows the same pattern of intervals. It is a major scale with the added note of the superdominant.",
//     },
//     mixolydian: {
//       build: [1, 1, 0.5, 1, 1, 0.5, 1],
//       name: "Mixolydian",
//       description:
//         "Mixolydian mode is a scale that starts with a 2nd and 3rd degree of the tonic, and then follows the same pattern of intervals. It is a major scale with the added note of the subdominant.",
//     },
//     aeolian: {
//       build: [1, 0.5, 1, 1, 0.5, 1, 1],
//       name: "Aeolian",
//       description:
//         "Aeolian mode is a scale that starts with a 2nd and 3rd degree of the tonic, and then follows the same pattern of intervals. It is a major scale with the added note of the subdominant.",
//     },
//     locrian: {
//       build: [0.5, 1, 1, 0.5, 1, 1, 1],
//       name: "Locrian",
//       description:
//         "Locrian mode is a scale that starts with a 2nd and 3rd degree of the tonic, and then follows the same pattern of intervals. It is a major scale with the added note of the subdominant.",
//     },
//   },
// ];
