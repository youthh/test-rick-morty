import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  select: Yup.array(),
  character: Yup.object().shape({
    name: Yup.string(),
    status: Yup.string().oneOf(
      ["alive", "dead", "unknown"],
      "Status must be alive, dead, or unknown",
    ),
    species: Yup.string(),
    type: Yup.string(),
    gender: Yup.string().oneOf(
      ["female", "male", "genderless", "unknown"],
      "Gender must be female, male, genderless, or unknown",
    ),
  }),
  location: Yup.object().shape({
    name: Yup.string(),
    type: Yup.string(),
    dimension: Yup.string(),
  }),
  episodes: Yup.object().shape({
    name: Yup.string(),
    episodes: Yup.string(),
  }),
});
