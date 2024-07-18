var siteNameInput=document.getElementById("urlname");
var siteUrlInput=document.getElementById("urlform");

// console.log(siteNameInput);
// console.log(siteUrlInput);

var allBookMark=[];

if(localStorage.allBookMark!=null)
{
    allBookMark=JSON.parse(localStorage.allBookMark)
}

function addBookMark(){
 var newBookMark={
    siteName:siteNameInput.value,
    siteUrl:siteUrlInput.value
 }
 allBookMark.push(newBookMark);
 localStorage.setItem("items",JSON.stringify(allBookMark)); 
 displayData(allBookMark)
 clearForm();
}

function clearForm(){
    siteNameInput.value=null;
    siteUrlInput.value=null;
}



function displayData(arr){
 var cartona="";
 for(var i=0;i<arr.length;i++)
    {
        cartona+=`<tr>
                <td>${i+1}</td>
                <td><a href="#">${arr[i].siteName}</a></td>
                <td>
                    <a class="btn btn-success" href="${arr[i].siteUrl}" target="_blank">visit</a>
                </td>
                <td>
                    <button class="btn btn-warning" onclick="deletData(${i})">Delet</button>
                </td>
             </tr>
        `
    }
    document.getElementById("siteCont").innerHTML=cartona;

}


function deletData(index){
    allBookMark.splice(index,1)
    localStorage.setItem("items",JSON.stringify(allBookMark)); 
    displayData(allBookMark)
}