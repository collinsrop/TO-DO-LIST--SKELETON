"use strict";
document.addEventListener("DOMContentLoaded", ()=>{
	//disbale submit button
	document.querySelector("#sb").disabled=true;
	document.querySelector("#task").onkeyup =function (){
		if(document.querySelector("#task").value.length>0){
		document.querySelector("#sb").disabled=false;
		}else{
			document.querySelector("#sb").disabled=true;
		}
	};
	document.querySelector("form").onsubmit=function(){
		const task =document.querySelector("#task").value;
		const li =document.createElement("li");
		//day done
		const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
		let currentDay=new Date().getDay();
		let dayName = daysOfWeek[currentDay];
        //month done
		const months = ["Jan", "Feb", "Mar", "Apr", "May","Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
		let currentMonth=new Date().getMonth();
		let monthName = months[currentMonth];
		//year done
		const year = new Date().getFullYear();

		li.innerHTML = task + " " + "("+dayName + " " + monthName + " " + year +")";
		document.querySelector("#Tasks").append(li);
		document.querySelector("#task").value="";
		document.querySelector("#sb").disabled = true;
		//STOP FORM FROM SUBMITTING
		return false;
	}
	});
	//styles
	let x = document.querySelector("#container");
	x.style.position = "absolute";
	x.style.left = "50%";
	x.style.top = "10%";
	x.style.transform = "translate(-50%, -50%)";

	

   







