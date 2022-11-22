// function to replace map src
function switchVideoSrc() {
  var e = document.getElementById("video-frame");
  var newSrc = e.getAttribute("data-src") + '?autoplay=1';
  document.getElementById("video-frame").src=newSrc;
  var overlay = document.getElementById("video-gdpr-overlay");
  overlay.remove();
  
  // youtube api call
  
  
}

window.addEventListener('load', function () {
  // site is ready
  
  // map replace script
  // translate to your needs
  const video = document.getElementById("video-wrapper");
  const open_video_link = '<a href="JavaScript:void(0);" onClick="switchVideoSrc();" class="open_video_link btn btn-danger">Video abspielen</a>';
  const google_link = "<a class='google-link' target='_blank' href='https://policies.google.com/privacy?hl=de' rel='noreferrer noopener'><u>Datenschutzbedingungen</u></a>";
  const policy_text = "Das Video wird über YouTube eingebettet. <br>Es gelten die " + google_link + " von Google."
  let video_overlay_html = '<div id="video-gdpr-overlay"><div class="inner">' + open_video_link + ' <br><br> ' + policy_text + '</div></div>';
  video.insertAdjacentHTML("afterbegin", video_overlay_html);

}, false);