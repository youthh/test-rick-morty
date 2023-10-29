import { ICharacter } from "../Interfaces";

export const arrayToBlob = (data: ICharacter[]) => {
  const headers = Object.keys(data[0]).join(",") + "\n";
  const csvData = data.map((item) => {
    const formatProperty = (value: unknown) => {
      if (Array.isArray(value)) return value.join(";");
      if (value && typeof value === "object")
        return Object.values(value).join(",");
      return value;
    };

    const row = Object.values(item)
      .map((value) => formatProperty(value))
      .join(",");

    return row;
  });

  const csv = headers + csvData.join("\n");

  return new Blob([csv], { type: "text/csv" });
};
