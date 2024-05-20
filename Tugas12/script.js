function KirimData() {
    event.preventDefault(); // Mencegah pengiriman formulir secara default

    var Nama = document.getElementById("Nama").value;
    var Nim = document.getElementById("Nim").value;
    var Peminatan = document.querySelector("input[name='peminatan']:checked").value;
    var Alamat = document.getElementById("Alamat").value;

    alert(
        "Nama Mahasiswa: " + Nama +
        "\nNim: " + Nim +
        "\nPeminatan: " + Peminatan +
        "\nAlamat: " + Alamat
    );
}
