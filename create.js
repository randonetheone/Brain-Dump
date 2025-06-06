document.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    createThread(); 
  }
});

function createThread() {
  let data = new Date();

  let postDay = data.getDate();

  let postMonth = data.getMonth() + 1;

  switch (postMonth) {
    case 0:
      postMonth = "Jan";
      break;
    case 2:
      postMonth = "Fev";
      break;
    case 3:
      postMonth = "Mar";
      break;
    case 4:
      postMonth = "Abr";
      break;
    case 5:
      postMonth = "Mai";
      break;
    case 6:
      postMonth = "jun";
      break;
    case 7:
      postMonth = "jul";
      break;
    case 8:
      postMonth = "Agos";
      break;
    case 9:
      postMonth = "Set";
      break;
    case 10:
      postMonth = "Out";
      break;
    case 11:
      postMonth = "Nov";
      break;
    case 12:
      postMonth = "Dez"

    default:
        console.log("Não existe esse mês não chefe")
  }

  switch (postDay){
    case 1: 
    postDay = "01";
    break;
    
    case 2: 
    postDay = "02";
    break;

    case 3: 
    postDay = "03";
    break;

    case 4: 
    postDay = "04";
    break;

    case 5: 
    postDay = "05";
    break;

    case 6: 
    postDay = "06";
    break;

    case 7: 
    postDay = "07";
    break;

    case 8: 
    postDay = "08";
    break;

    case 9: 
    postDay = "09";
    break;
  }

  let postYear = data.getFullYear();

  let postHour = data.getHours();
  let postMinutes = data.getMinutes();

  let titleInput = document.getElementById("thread-title").value;
  let contentInput = document.getElementById("content-text").value;
  const post = {
    titleInput,
    contentInput,
    postHour,
    postMinutes,
    postDay,
    postMonth,
    postYear,
  };

  let currentValues = JSON.parse(localStorage.getItem("posts")) || [];
  currentValues.push(post);

  localStorage.setItem("posts", JSON.stringify(currentValues));
  if (titleInput == "" || contentInput == "") {
    alert("Você Não Escreveu Nada.");
  } else if (titleInput != "" && contentInput != "") {
    //alert("Tópico Postado!")
    window.open("index.html", "_self");
  }
}
