function search()
{
    var katus = document.getElementById("katus").value.replace(" ","");
    var kaupunkis = document.getElementById("kaupunkis").value;

    document.getElementById("hurttakartta").setAttribute("src", "https://www.google.fi/maps?q=" + katus + kaupunkis + "&output=embed");
}