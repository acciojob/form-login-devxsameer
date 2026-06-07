function getFormvalue() {
    event.preventDefault();

    const fname = document.forms["form1"]["fname"].value.trim();
    const lname = document.forms["form1"]["lname"].value.trim();

    alert(fname + " " + lname);
}