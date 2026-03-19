const dataDB = [
  {
    nama: "bagus",
    kelas: "IX",
    keterangan: "tidak lulus",
    nilai: 48,
  },
  {
    nama: "riski",
    kelas: "IX",
    keterangan: "lulus",
    nilai: 86,
  },
  {
    nama: "arip",
    kelas: "IX",
    keterangan: "lulus",
    nilai: 92,
  },
  {
    nama: "padil",
    kelas: "IX",
    keterangan: "lulus",
    nilai: 78,
  },
  {
    nama: "restu",
    kelas: "IX",
    keterangan: "tidak lulus",
    nilai: 24,
  },
  {
    nama: "dani",
    kelas: "IX",
    keterangan: "lulus",
    nilai: 100,
  },
  {
    nama: "rina",
    kelas: "IX",
    keterangan: "lulus",
    nilai: 73,
  },
  {
    nama: "ririn",
    kelas: "IX",
    keterangan: "tidak lulus",
    nilai: 69,
  },
  {
    nama: "diko",
    kelas: "IX",
    keterangan: "lulus",
    nilai: 87,
  },
  {
    nama: "kenzo",
    kelas: "IX",
    keterangan: "tidak lulus",
    nilai: 55,
  },
];

const formSearch = document.getElementById("formSearch");
formSearch.addEventListener("submit", function (event) {
  event.preventDefault();

  const inputUser = document.getElementById("inputSearch").value;
  const alertWrong = document.getElementById("alertWrong")

  const includs = dataDB.map((nama) => nama.nama).includes(inputUser)

  if(includs) {
    alert('ril cuy')
  }else{
    alertWrong.textContent = "harap isi nama murid !!!"
    alertWrong.style.color = "red"
  }
});
