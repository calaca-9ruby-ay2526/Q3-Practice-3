function categoryGet() {
    var cateprod= document.getElementById('categoryEnt').value;

    switch (cateprod) {
        case "C":
        document.getElementById("displaycategory").innerHTML="Category: Clothing🥼";
        break;

         case "E":
        document.getElementById("displaycategory").innerHTML="Category: Electronics🎧";
        break;

         case "B":
        document.getElementById("displaycategory").innerHTML="Category: Books🧮";
        break;

        default:
            window.alert("Invalid Section Number");
    }
    }