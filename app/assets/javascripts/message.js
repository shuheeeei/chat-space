$(function(){
  function buildHTML(message){
    var content = message.content;
    var image = (message.image == null ? '' : message.image);
    var html = `<div class="chat-monitor__content__details" data-id=${message.id}>
                  <div class="chat-monitor__content__details__user-name">
                    <p>${message.user_name}</p>
                  </div>
                  <div class="chat-monitor__content__details__time">
                    <p>${message.time}</p>
                  </div>
                  <div class="chat-monitor__content__details__message">
                    <p>${content}</p>
                    <img src="${image}" class="lower-message__image" alt="">
                  </div>
                </div>`
    return html;
  }

  function scrollBottom(){
    var position = $(".chat-monitor__content")[0].scrollHeight;
    $('.chat-monitor__content').animate({scrollTop: position}, 800);
  }

  $('#new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action');
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildHTML(data);
      $('.chat-monitor__content').append(html);
      scrollBottom();
      $('#new_message')[0].reset();
      $(".form__submit").prop("disabled", false);
    })
    .fail(function(){
      alert('メッセージを入力してください');
      $(".form__submit").prop("disabled", false);
    })
  })


  var interval = setInterval(function() {
    if (window.location.href.match(/\/groups\/\d+\/messages/)) {
      if($('.chat-monitor__content__details')[0]) {
        var message_id = $('.chat-monitor__content__details:last').data('id');
        console.log(message_id);
      }
      else {
        var message_id = 0;
      }
      $.ajax({
        url: location.href,
        type: 'GET',
        data: {id: message_id},
        dataType: 'json'
      })
      .done(function(data) {
        var insertHTML = '';
        console.log(data);
        data.forEach(function(message){
          insertHTML += buildHTML(message);
          console.log("自動更新中");
        });
        $(".chat-monitor__content").append(insertHTML);
        scrollBottom();
      })
      .fail(function() {
        alert("自動更新に失敗しました");
      });
    } else {
      clearInerval(interval);
    }}, 5000);
});
