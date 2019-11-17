var messages = document.getElementById('messages')
 windows.onload = getMessagesfromServer()
// сообщение с сервера
async function getMessagesfromServer() 
{
    // получаем фссинхронный ответ
    var response = await fetch('https://fchatiavi.herokuapp.com/get/arick/?offset=0&limit=10');
      // декодируем его из строкив обьекты javascript 
     response = await response.json();

    console.log(response);
 var allMessagesHtml = '';
  for( var i = 0; i < response.length; i++){
    var messageData = response [i];
        var message = '<div class="message"><div class="message-nickname">${messageData.Name}</div><div class="message-text">  ${messageData.Message}</div>';
allMessagesHtml = allMessagesHtml + message;
}
// добавить в messages-wrapper письма
messages.innerHTML = allMessagesHtml;
}

async function sendUserMessage(){
    //получить что написал пользователь в поле nickname
    var userNickname = document.getElementByld('nickname-input').value;
   
}
