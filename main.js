const dataDB = [
  {
    nama: "bagus",
    kelas: "IX",
    keterangan: "tidak lulus",
    nilai: 48,
  },
  {
    nama: "bagus",
    kelas: "IX",
    keterangan: "lulus",
    nilai: 86,
  },
  {
    nama: "bagus",
    kelas: "IX",
    keterangan: "lulus",
    nilai: 92,
  },
  {
    nama: "bagus",
    kelas: "IX",
    keterangan: "lulus",
    nilai: 78,
  },
  {
    nama: "bagus",
    kelas: "IX",
    keterangan: "tidak lulus",
    nilai: 24,
  },
  {
    nama: "bagus",
    kelas: "IX",
    keterangan: "lulus",
    nilai: 100,
  },
  {
    nama: "bagus",
    kelas: "IX",
    keterangan: "lulus",
    nilai: 73,
  },
  {
    nama: "bagus",
    kelas: "IX",
    keterangan: "tidak lulus",
    nilai: 69,
  },
  {
    nama: "bagus",
    kelas: "IX",
    keterangan: "lulus",
    nilai: 87,
  },
  {
    nama: "bagus",
    kelas: "IX",
    keterangan: "tidak lulus",
    nilai: 55,
  },
];

const formSearch = document.getElementById("formSearch");
formSearch.addEventListener("submit", function (event) {
  event.preventDefault();

  const inputUser = document.getElementById("inputSearch");
  dataDB.includes(inputUser)
});
