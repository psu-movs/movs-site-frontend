// TODO: сплитануть список дисциплин
// TODO: адаптивность

import { load } from "cheerio";

export interface Teacher {
  name: string;
  post: string;
  disciplines: string;
  academicDegree: string;
  photoURL: string;
}

export const parseTeachers = (html: string) => {
  const data: Teacher[] = [];

  const $ = load(html);
  const table = $("table");
  table.find("tr").each((index, element) => {
    if (index === 0) return;

    const tr = $(element);
    const tds = tr.find("td");

    const photoURL = `https://helios.psu.ru/pls/www_psu_ru/${tds.eq(0).find('img').attr("src")}`;

    const teacherRaw = []
    for (let i = 1; i < 5; i += 1) {
      teacherRaw.push(tds.eq(i).text());
    }
    const [name, academicDegree, post, disciplines] = teacherRaw;

    data.push({
      photoURL,
      name,
      academicDegree: academicDegree.replace("\n", ""),
      post,
      disciplines: disciplines.replace("\n", ""),
    })
  });

  return data;
}