const sectionView = document.getElementById("sectionView");

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

const div = document.createElement("div");
div.style.boxShadow = "0 2px 5px 2px rgb(0, 0, 0, 0.2)";
div.style.padding = "10px";
div.style.display = "flex";
div.style.flexDirection = "column";
const b = document.createElement("b");

const formSearch = document.getElementById("formSearch");
formSearch.addEventListener("submit", function (event) {
  event.preventDefault();

  const inputUser = document.getElementById("inputSearch").value;
  const alertWrong = document.getElementById("alertWrong");

  function card() {
    div.append(b);
    sectionView.append(div);
  }

  const manip = dataDB.map((namaMurid) => namaMurid.nama);
  const manipp = dataDB.map((ket) => ket.keterangan)
  const manippp = dataDB.map((nilai) => nilai.nilai)
  console.log(manip, manipp, manippp)

  if (manip.includes(inputUser)) {
    if (inputUser === "bagus") {
      card();
      b.innerHTML = "nama : " + inputUser + "<br><br>" + "kelas : IX" + "<br>" + "keterangan : " + manipp[0] + "<br>" + "nilai : " + manippp[0];
    }
    console.log(inputUser);
  } else {
    alertWrong.textContent = "harap isi nama murid yg ada!!!";
    alertWrong.style.color = "red";
  }
});
