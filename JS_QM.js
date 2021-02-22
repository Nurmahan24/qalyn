function QMCalc() {
    var Result = 500;
    var EducValue = Number(document.getElementById("edu").value);
    var FamilyValue = Number(document.getElementById("familynw").value);
    var SkillVal = 0;
        for (i = 0; i < document.skills.option.length; i++){
            if(document.skills.option[i].checked == true){
                SkillVal += Number(document.skills.option[i].value);
            }
        }
    var AgeVal = 1;
        for (i = 0; i < document.age.option.length; i++){
            if(document.age.option[i].checked == true){
                AgeVal = Number(document.age.option[i].value);
                break;
            }
        }
    var totalresult = (((Result * EducValue * FamilyValue) + SkillVal) * AgeVal);
        if(document.reputation.option[0].checked == true){
            totalresult *= document.reputation.option[0].value;
        }
        if(document.reputation.option[1].checked == true){
            totalresult *= document.reputation.option[1].value;
        }
        if(document.reputation.option[2].checked == true){
            totalresult -= document.reputation.option[2].value;
        }
    alert(totalresult + "$");
}