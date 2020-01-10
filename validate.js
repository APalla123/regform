function validate()
{
    if(document.StudentRegistrationForm.studentname.value == "")
    {
        alert("Please provide your name");
        return false;
    }
    if(document.StudentRegistrationForm.fathername.value == "")
    {
        alert("Please provide your father name");
        return false;
    }
    if(document.StudentRegistrationForm.DOB.value == "")
    {
        alert("Please provide your DOB");
        return false;
    }
    if(document.StudentRegistrationForm.gender.value == "")
    {
        alert("Please provide your gender");
        return false;
    }
    if((document.StudentRegistrationForm.highdegree[0].checked == false) && (document.StudentRegistrationForm.highdegree[1].checked == false)&&(document.StudentRegistrationForm.highdegree[2].checked == false)&&(document.StudentRegistrationForm.highdegree[3].checked == false))
    {
        alert("Please provide your Qualification");
        return false;
    }
    if(document.StudentRegistrationForm.address.value == "")
    {
        alert("Please provide your address");
        return false;
    }
    if((document.StudentRegistrationForm.phoneno.value == "")||(isNaN( document.StudentRegistrationForm.phoneno.value) )||
    (document.StudentRegistrationForm.phoneno.value.length != 10)) 
    {
        alert("Please provide correct mobile number");
        return false;
    }
    return true;
}