/* i-C-a */

function downloadFile(nameOfFile, fileTag) {
  
  window.requestFileSystem(LocalFileSystem.PERSISTENT, 0,
          function onFileSystemSuccess(fileSystem) {
              //navigator.notification.alert("Downloading File Now");
              $(".singleDownload").popup("open");
              fileSystem.root.getFile("dummy"+nameOfFile+".html", {create: true, exclusive: false},
                  function gotFileEntry(fileEntry){
                      var sPath = fileEntry.fullPath.replace("dummy"+nameOfFile+".html","");
                      var fileTransfer = new FileTransfer();
                      fileEntry.remove();
                      fileTransfer.download("https://dmkessiapqw4p.cloudfront.net/eytouring/forandroid/"+fileTag+"/"+nameOfFile+".jpg",
                          sPath + nameOfFile +'.jpg',
                          function(theFile) {
                            console.log("download complete: " + theFile.toURI());
                            window.localStorage.setItem("fileaddressof"+nameOfFile, theFile.toURI());
                            //navigator.notification.alert("File Ready");
                            $(".singleDownload").popup("close");
                            window.open(theFile.toURI(), "toolbar=yes", '_system', "EnableViewPortScale=yes");
                          },
                          function(error) {
                            console.log("download error source " + error.source);
                            console.log("download error target " + error.target);
                            console.log("upload error code: " + error.code);
                          }
                      );
                    }, fail);
            }, fail);
  
  
}


function preDownloadFile(nameOfFile, fileTag) {
  
  window.requestFileSystem(LocalFileSystem.PERSISTENT, 0,
          function onFileSystemSuccess(fileSystem) {
              //navigator.notification.alert("Downloading File Now");
              fileSystem.root.getFile("dummy"+nameOfFile+".html", {create: true, exclusive: false},
                  function gotFileEntry(fileEntry){
                      var sPath = fileEntry.fullPath.replace("dummy"+nameOfFile+".html","");
                      var fileTransfer = new FileTransfer();
                      fileEntry.remove();
                      fileTransfer.download("https://dmkessiapqw4p.cloudfront.net/eytouring/forandroid/"+fileTag+"/"+nameOfFile+".jpg",
                          sPath + nameOfFile +'.jpg',
                          function(theFile) {
                            console.log("download complete: " + theFile.toURI());
                            window.localStorage.setItem("fileaddressof"+nameOfFile, theFile.toURI());
                          },
                          function(error) {
                            console.log("download error source " + error.source);
                            console.log("download error target " + error.target);
                            console.log("upload error code: " + error.code);
                          }
                      );
                    }, fail);
            }, fail);
  
  
}


function fail(evt) {  
  console.log(evt.target.error.code);  
}

$(".backtohome").on('tap', function() {
  event.stopPropagation();
  $(this).unbind();
  $.mobile.changePage("home.html", {transition:"slide", reverse:true});
  return false;
});

$(".backtomaterials").on('tap', function() {
  event.stopPropagation();
  $(this).unbind();
  $.mobile.changePage("materials.html", {transition:"slide", reverse:true});
  return false;
});

$(".perdaybtns").on('tap', function() {
  event.stopPropagation();
  
  var perdaybtnsId = $(this).attr("id");
  $(".perdaybtns").css("background-position", "center top");
  $("div#"+perdaybtnsId).css("background-position", "center bottom");
  $(".dailybuttonscontainer").css("background-position", "center top");
  $("div#"+perdaybtnsId).parent().css("background-position", "center bottom");
  
  switch(perdaybtnsId) {
    case "thlday1btn":
      $(".thlday2").fadeOut(100);
      $(".thlday3").fadeOut(100);
      $(".thlday4").fadeOut(100);
      $(".thlday1").fadeIn(300);
      break;
    
    case "thlday2btn":
      $(".thlday1").fadeOut(100);
      $(".thlday3").fadeOut(100);
      $(".thlday4").fadeOut(100);
      $(".thlday2").fadeIn(300);
      break;
    
    case "thlday3btn":
      $(".thlday2").fadeOut(100);
      $(".thlday1").fadeOut(100);
      $(".thlday4").fadeOut(100);
      $(".thlday3").fadeIn(300);
      break;
    
    case "thlday4btn":
      $(".thlday2").fadeOut(100);
      $(".thlday3").fadeOut(100);
      $(".thlday1").fadeOut(100);
      $(".thlday4").fadeIn(300);
      break;
  }
  
  return false;
});

$(".dailybuttons").on('tap', function() {
  event.stopPropagation();
  var btnid = $(this).attr("id");
  $(".dailybuttons").css("background-position", "center top");
  $("div#"+btnid).css("background-position", "center bottom");
  $(".dailybuttonscontainer").css("background-position", "center top");
  $("div#"+btnid).parent().css("background-position", "center bottom");
  
  switch(btnid) {
    case "objectivesbtn":
      $(".dailytopicscontent").fadeOut(100);
      $(".locationscontent").fadeOut(100);
      $(".agendacontent").fadeOut(100);
      $(".objectivecontent").fadeIn(300);
      break;
      
    case "agendabtn":
      $(".objectivecontent").fadeOut(100);
      $(".dailytopicscontent").fadeOut(100);
      $(".locationscontent").fadeOut(100);
      $(".agendacontent").fadeIn(300);
      break;
    
    case "locationsbtn":
      $(".objectivecontent").fadeOut(100);
      $(".dailytopicscontent").fadeOut(100);
      $(".agendacontent").fadeOut(100);
      $(".locationscontent").fadeIn(300);
      break;
    
    case "dailytopicbtn":
      $(".locationscontent").fadeOut(100);
      $(".objectivecontent").fadeOut(100);
      $(".agendacontent").fadeOut(100);
      $(".dailytopicscontent").fadeIn(300);
      break;
  }
  return false;
});

$(".homebtn").on('tap', function() {
  event.stopPropagation();
  
  var menuposition = $(".bottommenu").position();
  if(menuposition.top == 996) { 
    $(".bottommenu").animate({'top':'868px'}, 500);
  } else if(menuposition.top == 868) {
    $(".bottommenu").animate({'top':'996px'}, 500);
  } else if(menuposition.top == 740) {
    $(".bottommenu").animate({'top':'612px'}, 500);
  } else if(menuposition.top == 612) {
    $(".bottommenu").animate({'top':'740px'}, 500);
  }
  return false;
});

$(".bottomicons").on('tap', function() {
  var menuId = $(this).attr("id");
  $(this).unbind();
  switch(menuId){
    case "menuday1":
      $.mobile.changePage("day1.html", {transition:"slide"});
      break;
    
    case "menuday2":
      $.mobile.changePage("day2.html", {transition:"slide"});
      break;
      
    case "menuday3":
      $.mobile.changePage("day3.html", {transition:"slide"});
      break;
      
    case "menuday4":
      $.mobile.changePage("day4.html", {transition:"slide"});
      break;
      
    case "menumaterials":
      $.mobile.changePage("home.html", {transition:"slide"});
      break;
  }
  return false;
});

function preDownloadArrayFile(pdfArray, index) {
  var numOfFiles = pdfArray.length;
  //navigator.notification.alert("numoffile "+numOfFiles+"; index "+index);
  var completion = Math.round((index / numOfFiles) * 100);
  $("#percentagecomplete").html(completion);
  var arrayOfFiles = pdfArray;
  if(index < numOfFiles) {
  var nextDownload = index + 1;
  //navigator.notification.alert("sulod didi");
  //navigator.notification.alert("downloading "+pdfArray[index][0]+" as "+pdfArray[index][1]);
    window.requestFileSystem(LocalFileSystem.PERSISTENT, 0,
          function onFileSystemSuccess(fileSystem) {
              //navigator.notification.alert("Downloading File Now");
              fileSystem.root.getFile("dummy"+pdfArray[index][0]+".html", {create: true, exclusive: false},
                  function gotFileEntry(fileEntry){
                      var sPath = fileEntry.fullPath.replace("dummy"+pdfArray[index][0]+".html","");
                      var fileTransfer = new FileTransfer();
                      fileEntry.remove();
                      fileTransfer.download("https://dmkessiapqw4p.cloudfront.net/eytouring/forandroid/"+pdfArray[index][1]+"/"+pdfArray[index][0]+".jpg",
                          sPath + pdfArray[index][0] +'.jpg',
                          function(theFile) {
                            console.log("download complete: " + theFile.toURI());
                            window.localStorage.setItem("fileaddressof"+pdfArray[index][0], theFile.toURI());
                            preDownloadArrayFile(arrayOfFiles, nextDownload);
                            //window.localStorage.setItem("fileaddressof"+nameOfFile, theFile.toURI());
                          },
                          function(error) {
                            console.log("download error source " + error.source);
                            console.log("download error target " + error.target);
                            console.log("upload error code: " + error.code);
                            preDownloadArrayFile(arrayOfFiles, index);
                          }
                      );
                    }, fail);
            }, fail);
  } else {
    $("#preloadingFiles").popup("close");
    $("#refreshbtn").bind('click');
    return false;
  }


}

function checkConnection() {
            var networkState = navigator.connection.type;

            var states = {};
            states[Connection.UNKNOWN]  = 'Unknown connection';
            states[Connection.ETHERNET] = 'Ethernet connection';
            states[Connection.WIFI]     = 'WiFi connection';
            states[Connection.CELL_2G]  = 'Cell 2G connection';
            states[Connection.CELL_3G]  = 'Cell 3G connection';
            states[Connection.CELL_4G]  = 'Cell 4G connection';
            states[Connection.CELL]     = 'Cell generic connection';
            states[Connection.NONE]     = 'No network connection';

            return states[networkState];
        }

$("#refreshbtn").on('tap', function() {
  event.stopPropagation();
  $(this).unbind();
  
  var connectivity = checkConnection();
  if (connectivity == 'No network connection') {
    navigator.notification.alert("Documents can only be downloaded with an active internet connection.");
  } else {
  //checkConnection();
  $("#preloadingFiles").popup("open");
  
  var pdfFile = [
    ["TonyOttaviano", "attendees"],
    ["ThomasHughes", "attendees"],
    ["ArtKoehler", "attendees"],
    ["TomLange", "attendees"],
    ["RyanHair", "attendees"],
    ["RobTelford", "attendees"],
    ["RagUdd", "attendees"],
    ["MichaelMikeGreyling", "attendees"],
    ["MichaelBailey", "attendees"],
    ["JimmyWilson", "attendees"],
    ["GerhardCarstens", "attendees"],
    ["DavidKelso", "attendees"],
    ["AllanCooper", "attendees"],
    ["AmberMorgan", "attendees"],
    ["ChrisJordan", "attendees"],
    ["JerrySchonhoft", "attendees"],
    ["LinYang", "attendees"],
    ["MarkoStojanovic", "attendees"],
    ["MarkPeterson", "attendees"],
    ["MorganMalone", "attendees"],
    ["NateStrong", "attendees"],
    ["StanBrown", "attendees"],
    ["WimHoogedeure", "attendees"],
    ["1-dt-pgintro", "dailytopics"],
    ["1-dt-eyintro", "dailytopics"],
    ["1-dt-waio", "dailytopics"],
    ["1-dt-introtort", "dailytopics"],
    ["1-dt-ohp4", "dailytopics"],
    ["1-dt-reliabilitysc", "dailytopics"],
    ["1-dt-rtbrief", "dailytopics"],
    ["1-dt-hro", "dailytopics"],
    ["1-dt-day1pres", "dailytopics"],
    ["2-dt-workmanagement", "dailytopics"],
    ["2-dt-productivity", "dailytopics"],
    ["2-dt-pilbara", "dailytopics"],
    ["2-dt-easterneu", "dailytopics"],
    ["2-dt-loadhaul", "dailytopics"],
    ["2-dt-day2pres", "dailytopics"],
    ["3-dt-kennedy", "dailytopics"],
    ["3-dt-mine-new", "dailytopics"],
    ["3-dt-rail-new", "dailytopics"],
    ["3-dt-port-new", "dailytopics"],
    ["3-dt-day3pres", "dailytopics"],
    ["3-dt-optimisation", "dailytopics"],
    ["3-dt-opimprove", "dailytopics"],
    ["4-dt-operational", "dailytopics"],
    ["4-dt-endtoend", "dailytopics"],
    ["4-dt-pgfactsheet", "dailytopics"],
    ["4-dt-day4pres", "dailytopics"],
    ["tl-bhpbilliton", "thoughtleadership"],
    ["tl-effectivecapital", "thoughtleadership"],
    ["tl-alltied", "thoughtleadership"],
    ["tl-mandmcyber", "thoughtleadership"],
    ["tl-eyigniting", "thoughtleadership"],
    ["tl-mininginrapid", "thoughtleadership"],
    ["tl-capitalbriefing", "thoughtleadership"],
    ["tl-gamechanging", "thoughtleadership"],
    ["tl-busrisk", "thoughtleadership"],
  ];
  
  preDownloadArrayFile(pdfFile, 0);
  }
  return false;
});

function checkVersion() {
  var result = 0;
  $.ajax({
    type:"POST",
    async:false,
    url:"http://ec2-54-252-221-24.ap-southeast-2.compute.amazonaws.com/eyversion.php",
  }).done(function(returndata) {
    if(returndata) { result = returndata; }
  });
  
  return result;
}