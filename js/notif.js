function notifyMe() {
    if (!("Notification" in window)) {
      alert("This browser does not support system notifications");
    }
    else if (Notification.permission === "granted") {
      notify();
    }
    else if (Notification.permission !== 'denied') {
      Notification.requestPermission(function (permission) {
        if (permission === "granted") {
          notify();
        }
      });
    }
    
    function notify() {
      var notification = new Notification('Chaque week-end...', {
        silent: true,
        icon: '../../assets/images/popcorn.png',
        body: "Du nouveau contenu disponible !",
      });
  
      notification.onclick = function () {
        window.open("../assets/images/bal-poussiere.jpg");
      };
      setTimeout(notification.close.bind(notification), 7000);
    }

  }
  notifyMe();