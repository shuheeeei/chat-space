$(function(){
  function buildHTML(message){
    var content = (message.content == null ? '' : message.content);
    var image = (message.image == null ? '' : message.image);
    var html = `<div class="chat-monitor__content__details">
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
      $('.form__message').val('');
      $(".form__submit").prop("disabled", false);
      $('.chat-monitor__content').animate({scrollTop: 613}, 500, 'linear');
    })
    .fail(function(){
      alert('メッセージを入力してください');
      $(".form__submit").prop("disabled", false);
    })
  })
});
