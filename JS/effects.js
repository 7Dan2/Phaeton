const getTheSquare = document.querySelector("#btn_help");
getTheSquare.addEventListener("click", showInfos);

const getTheNextArrow = document.querySelector("#btn_nextPage");
getTheNextArrow.addEventListener("click", hello);

function showInfos()
{
document.getElementById("help").classList.toggle("showInfos")
}

function hello()
{
	alert("Ce bouton ne mène nulle part\nOu pas encore ...")
}